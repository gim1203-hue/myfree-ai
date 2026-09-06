import { useMemo, useState } from 'react'
import './App.css'
import ChatTab from './components/ChatTab'
import SearchTab from './components/SearchTab'
import FilesTab from './components/FilesTab'
import CalendarTab from './components/CalendarTab'
import ProjectLinksTab from './components/ProjectLinksTab'
import WeatherTab from './components/WeatherTab'
import RadioTab from './components/RadioTab'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useCalendar } from './hooks/useCalendar'
import { useRadioPlayer } from './hooks/useRadioPlayer'
import { AssistantActionsContext } from './context/AssistantActionsContext'
import { LINKDECK_DATA, LINKDECK_ROLES, LINKDECK_ROADMAPS } from './data/linkdeck'

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

// Free/free-tier tools sort ahead of paid ones; everything else keeps its
// original order (JS sort is stable), so categories stay grouped.
function freeFirst(list) {
  return [...list].sort((a, b) => (a.paid ? 1 : 0) - (b.paid ? 1 : 0))
}

const LINK_CATEGORIES = [...new Set(LINKDECK_DATA.map((d) => d.cat))]

// The AI toolset from "My AI (Free Edition)", now living inside LinkDeck
// as extra tabs alongside the link categories.
const TOOL_TABS = [
  { id: 'chat', label: '💬 Chat' },
  { id: 'search', label: '🔎 Web Search' },
  { id: 'weather', label: '☀️ Weather' },
  { id: 'radio', label: '📻 Radio' },
  { id: 'calendar', label: '📅 Calendar' },
  { id: 'scratch-links', label: '📌 Scratch Links' },
  { id: 'files', label: '📁 Files' },
]

const TOOL_IDS = new Set(TOOL_TABS.map((t) => t.id))

function App() {
  const [activeSection, setActiveSection] = useLocalStorage('linkdeck-section', LINK_CATEGORIES[0])
  const [activeRole, setActiveRole] = useState(null)
  const [query, setQuery] = useState('')
  const [darkMode, setDarkMode] = useLocalStorage('my-ai-dark-mode', false)

  // Both live here, at the top of the app, so they keep running (radio
  // keeps playing, the calendar stays loaded) no matter which tab is
  // open — and so the Chat tab's voice commands can reach them too.
  const calendar = useCalendar()
  const radio = useRadioPlayer()
  const assistantActions = useMemo(() => ({ calendar, radio }), [calendar, radio])

  const isToolSection = TOOL_IDS.has(activeSection)
  const filtering = !isToolSection && (!!query.trim() || !!activeRole)

  const items = useMemo(() => {
    if (isToolSection) return []
    let list = LINKDECK_DATA
    if (activeRole) list = list.filter((d) => d.roles && d.roles.includes(activeRole))
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.desc.toLowerCase().includes(q) ||
          d.cat.toLowerCase().includes(q) ||
          hostname(d.url).toLowerCase().includes(q)
      )
    }
    if (!q && !activeRole) list = list.filter((d) => d.cat === activeSection)
    return freeFirst(list)
  }, [isToolSection, activeRole, query, activeSection])

  const total = LINKDECK_DATA.length
  const suggestedCount = useMemo(() => LINKDECK_DATA.filter((d) => d.suggested).length, [])
  const mineCount = useMemo(() => LINKDECK_DATA.filter((d) => d.cat === 'My Live Apps').length, [])
  const roadmap = activeRole && LINKDECK_ROADMAPS[activeRole]

  const selectSection = (id) => {
    setActiveSection(id)
    setActiveRole(null)
    setQuery('')
  }

  const toggleRole = (role) => {
    setActiveRole((prev) => (prev === role ? null : role))
    setQuery('')
  }

  return (
    <AssistantActionsContext.Provider value={assistantActions}>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <header className="app-header">
          <button
            type="button"
            className="dark-toggle"
            onClick={() => setDarkMode((d) => !d)}
            title="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <p className="eyebrow">Imran &middot; Dev Command Center</p>
          <h1>LinkDeck</h1>
          <p className="tagline">
            Your own live projects sit apart, right up front, marked with &#9733; and a teal edge.
            Everything else is reference tools, dashboards, and docs other people built that you
            rely on — plus your free personal AI assistant, built right in.
          </p>
          <div className="stats">
            <b>{mineCount}</b> yours <span className="dot-sep">&middot;</span> <b>{total}</b> links{' '}
            <span className="dot-sep">&middot;</span> <b>{LINK_CATEGORIES.length}</b> categories{' '}
            <span className="dot-sep">&middot;</span> <b>{suggestedCount}</b> suggested
          </div>
        </header>

        {!isToolSection && (
          <>
            <div className="toolbar">
              <div className="search">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search all links..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <span className="theme-note">Amber tiles = suggested additions, not yet in your list</span>
            </div>

            <div className="roles-row">
              <span className="roles-label">Browse by role:</span>
              <div className="roles">
                {LINKDECK_ROLES.map((role) => {
                  const count = LINKDECK_DATA.filter((d) => d.roles && d.roles.includes(role)).length
                  return (
                    <button
                      key={role}
                      type="button"
                      className={activeRole === role ? 'role-pill active' : 'role-pill'}
                      onClick={() => toggleRole(role)}
                    >
                      {role} <span className="count">{count}</span>
                    </button>
                  )
                })}
                {activeRole && (
                  <button type="button" className="role-pill clear" onClick={() => setActiveRole(null)}>
                    &times; Clear
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        <nav className={filtering ? 'tabs dim' : 'tabs'}>
          {LINK_CATEGORIES.map((cat) => {
            const count = LINKDECK_DATA.filter((d) => d.cat === cat).length
            const isMine = cat === 'My Live Apps'
            return (
              <button
                key={cat}
                type="button"
                className={
                  (activeSection === cat ? 'tab active' : 'tab') + (isMine ? ' mine' : '')
                }
                onClick={() => selectSection(cat)}
              >
                {isMine ? '★ ' : ''}
                {cat} <span className="count">{count}</span>
              </button>
            )
          })}
          <span className="tab-divider" aria-hidden="true" />
          {TOOL_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={activeSection === tab.id ? 'tab tool-tab active' : 'tab tool-tab'}
              onClick={() => selectSection(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {!isToolSection && filtering && (
          <p className="search-mode-label">
            {items.length} result{items.length === 1 ? '' : 's'} for{' '}
            {[activeRole, query.trim() && `"${query.trim()}"`].filter(Boolean).join(' + ')}
          </p>
        )}

        {!isToolSection && roadmap && (
          <div className="roadmap-banner">
            <p>
              <strong>{activeRole} roadmap:</strong> {roadmap.note}
            </p>
            <div className="roadmap-links">
              <a className="primary" href={roadmap.url} target="_blank" rel="noopener noreferrer">
                Open step-by-step roadmap &#8599;
              </a>
              {roadmap.video && (
                <a className="video" href={roadmap.video.url} target="_blank" rel="noopener noreferrer">
                  &#9654; {roadmap.video.label}
                </a>
              )}
            </div>
          </div>
        )}

        <main className="app-main">
          {activeSection === 'chat' && <ChatTab />}
          {activeSection === 'search' && <SearchTab />}
          {activeSection === 'weather' && <WeatherTab />}
          {activeSection === 'radio' && <RadioTab radio={radio} />}
          {activeSection === 'calendar' && <CalendarTab calendar={calendar} />}
          {activeSection === 'scratch-links' && <ProjectLinksTab />}
          {activeSection === 'files' && <FilesTab />}

          {!isToolSection &&
            (items.length === 0 ? (
              <p className="empty">No links match that search.</p>
            ) : (
              <div className="grid">
                {items.map((item) => (
                  <a
                    key={item.url + item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'tile',
                      item.cat === 'My Live Apps' ? 'mine' : '',
                      item.suggested ? 'suggested' : '',
                      item.local ? 'local' : '',
                    ]
                      .join(' ')
                      .trim()}
                  >
                    <div className="tile-top">
                      <span className="domain">{hostname(item.url)}</span>
                      <div className="badges">
                        {item.local && <span className="badge local">Local</span>}
                        {item.paid && <span className="badge paid">Paid</span>}
                        {item.suggested && <span className="badge suggested">Suggested</span>}
                      </div>
                    </div>
                    <div className="tile-title">{item.title}</div>
                    <p className="tile-desc">{item.desc}</p>
                    {item.roles && item.roles.length > 0 && (
                      <div className="tile-roles">{item.roles.join(' &middot; ')}</div>
                    )}
                  </a>
                ))}
              </div>
            ))}
        </main>
      </div>
    </AssistantActionsContext.Provider>
  )
}

export default App
