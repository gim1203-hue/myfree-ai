import { useState } from 'react'
import { toToday } from '../hooks/useCalendar'

function CalendarTab({ calendar }) {
  const { getEventsForDate, addEvent, removeEvent, clearDate } = calendar
  const [selectedDate, setSelectedDate] = useState(toToday())
  const [text, setText] = useState('')

  const dayEvents = getEventsForDate(selectedDate)

  const handleAdd = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed || !selectedDate) return
    addEvent(selectedDate, trimmed)
    setText('')
  }

  const handleClearDay = () => {
    if (!selectedDate || dayEvents.length === 0) return

    const readableDate = new Date(`${selectedDate}T00:00:00`).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const entryWord = dayEvents.length === 1 ? 'entry' : 'entries'

    if (
      window.confirm(
        `Delete all ${dayEvents.length} ${entryWord} saved for ${readableDate}? This cannot be undone.`
      )
    ) {
      clearDate(selectedDate)
    }
  }

  return (
    <div className="calendar-tab">
      <div className="calendar-controls">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          aria-label="Selected calendar date"
        />
        {selectedDate === toToday() && <span className="calendar-today-badge">Today</span>}
        <button
          type="button"
          className="calendar-clear-day"
          onClick={handleClearDay}
          disabled={!selectedDate || dayEvents.length === 0}
        >
          Clear selected day
        </button>
      </div>

      <form className="chat-form" onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add something for this day..."
          disabled={!selectedDate}
        />
        <button type="submit" disabled={!selectedDate}>Add</button>
      </form>

      {dayEvents.length === 0 ? (
        <p className="chat-empty">Nothing saved for this day yet.</p>
      ) : (
        <ul className="calendar-list">
          {dayEvents.map((ev) => (
            <li key={ev.id} className="calendar-item">
              <span>{ev.text}</span>
              <button type="button" onClick={() => removeEvent(selectedDate, ev.id)} aria-label="Remove">
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="calendar-note">
        Saved in this browser — it stays here for good unless you clear your browser data or
        remove it yourself. You can also say "save [something] on [a day]" in the Chat tab.
      </p>
    </div>
  )
}

export default CalendarTab
