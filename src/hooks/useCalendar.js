import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function clearDateEntries(events, dateStr) {
  if (!dateStr || !Object.prototype.hasOwnProperty.call(events, dateStr)) return events
  const next = { ...events }
  delete next[dateStr]
  return next
}

// YYYY-MM-DD for today, in the browser's own local timezone.
export function toToday() {
  const d = new Date()
  return toDateStr(d)
}

export function toDateStr(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

// Calendar entries live in localStorage, keyed by date, and are never cleared
// automatically. They remain only in this browser unless the user removes them.
export function useCalendar() {
  const [events, setEvents] = useLocalStorage('my-ai-calendar', {})

  const addEvent = useCallback(
    (dateStr, text) => {
      if (!dateStr) return
      setEvents((prev) => {
        const dayList = prev[dateStr] || []
        return {
          ...prev,
          [dateStr]: [
            ...dayList,
            { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, text },
          ],
        }
      })
    },
    [setEvents]
  )

  const removeEvent = useCallback(
    (dateStr, id) => {
      setEvents((prev) => {
        const dayList = prev[dateStr] || []
        return { ...prev, [dateStr]: dayList.filter((e) => e.id !== id) }
      })
    },
    [setEvents]
  )

  const clearDate = useCallback(
    (dateStr) => {
      setEvents((prev) => clearDateEntries(prev, dateStr))
    },
    [setEvents]
  )

  const getEventsForDate = useCallback((dateStr) => events[dateStr] || [], [events])
  const getTodayEvents = useCallback(() => events[toToday()] || [], [events])

  return { events, addEvent, removeEvent, clearDate, getEventsForDate, getTodayEvents }
}
