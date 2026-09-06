// LinkDeck — a personal directory of your own live projects plus the
// dashboards, docs, and tools you rely on day to day.
//
// This single file is the source of truth for two things at once, so
// they can never drift apart:
//   1. The LinkDeck tab (src/components/LinkDeckTab.jsx) — the visual,
//      searchable directory with role filters and roadmap links.
//   2. The Chat tab's "librarian" awareness (api/chat.js) — so when you
//      ask the assistant something like "what's the link to my radio
//      project", it actually knows and can answer with the real URL.
//
// Edit the DATA array below to add, remove, or update a link — both
// places pick up the change automatically next time you deploy.

export const LINKDECK_DATA = [
  // ---- My Live Apps ----
  { cat: 'My Live Apps', title: 'WorldWave', url: 'https://worldwave-react-beta.vercel.app/', desc: 'React radio browser — pick a country, stream any live station on the Radio Browser API.' },
  { cat: 'My Live Apps', title: 'My Free AI', url: 'https://my-free-ai.vercel.app/', desc: 'Zero-cost voice + chat assistant: Gemini for the brain, the browser’s own speech APIs for voice.' },
  { cat: 'My Live Apps', title: 'My AI (Private)', url: 'https://aihelpall.com/', desc: 'Original OpenAI-powered voice assistant, on Render behind Cloudflare.' },
  { cat: 'My Live Apps', title: 'i-Remembe (Vercel)', url: 'https://www.i-remembe.app/', desc: 'Personal memory-journal app — production build.' },
  { cat: 'My Live Apps', title: 'i-Remembe (GitHub)', url: 'https://gim1203-hue.github.io/i-remember/', desc: 'Same memory-journal app, GitHub Pages build.' },
  { cat: 'My Live Apps', title: 'KhanTech', url: 'https://khantech.khantech.workers.dev/', desc: 'Personal project running directly on a Cloudflare Worker.' },
  { cat: 'My Live Apps', title: 'Mira Private Companion', url: 'https://mira-private-companion.imran-4151.chatgpt.site/', desc: 'Custom GPT-based companion app.' },
  { cat: 'My Live Apps', title: 'MyAllHub', url: 'http://myallhub.com/', desc: 'Personal all-in-one hub site.' },
  { cat: 'My Live Apps', title: 'My Profile', url: 'https://gim1203-hue.github.io/liverepo/', desc: 'Portfolio / profile page.' },
  { cat: 'My Live Apps', title: 'New Prime Construction (staging)', url: 'https://gim1203-hue-mrusmanupdate-tau.vercel.app/', desc: 'Construction business site — Vercel staging build.' },
  { cat: 'My Live Apps', title: 'New Prime Construction', url: 'https://newprimeconstruction.com/', desc: 'Construction business site — live domain.' },
  { cat: 'My Live Apps', title: 'Toonbee', url: 'https://app.toonbee.ai/projects', desc: 'Toonbee project workspace.' },
  { cat: 'My Live Apps', title: 'My AI GIF', url: 'https://gim1203-hue.github.io/my-ai-gif/', desc: 'GIF-focused mini project.' },
  { cat: 'My Live Apps', title: 'My Radio', url: 'https://gim1203-hue.github.io/my-radio/', desc: 'The original vanilla JS radio browser — WorldWave’s predecessor.' },
  { cat: 'My Live Apps', title: 'My Weather', url: 'https://gim1203-hue.github.io/my-weather/', desc: 'Weather-lookup mini project.' },
  { cat: 'My Live Apps', title: 'My Calendar', url: 'https://gim1203-hue.github.io/my-calendar/', desc: 'Calendar mini project.' },
  { cat: 'My Live Apps', title: 'Ready Neighbor', url: 'https://gim1203-hue.github.io/ready-neighbor/', desc: 'Community / neighbor-focused project.' },
  { cat: 'My Live Apps', title: 'Skill Spring', url: 'https://gim1203-hue.github.io/skill-spring/', desc: 'Skill-building project.' },
  { cat: 'My Live Apps', title: 'Circle Spark', url: 'https://gim1203-hue.github.io/circle-spark/#/home', desc: 'Community / social project.' },
  { cat: 'My Live Apps', title: 'Pocket-Pantry', url: 'https://pocketpantry.imran-4151.chatgpt.site/', desc: 'Pantry / recipe-tracking custom GPT app.' },
  { cat: 'My Live Apps', title: 'LaunchLane Planner', url: 'https://launchlane-planner.imran-4151.chatgpt.site/', desc: 'Launch-planning custom GPT app.' },
  { cat: 'My Live Apps', title: 'Localhost 5173', url: 'http://localhost:5173/', desc: 'Your current local Vite dev server. Only resolves while it’s running on this computer.', local: true },

  // ---- Dashboards & Accounts ----
  { cat: 'Dashboards & Accounts', title: 'GitHub', url: 'https://github.com', desc: 'Source control home — repos, issues, Pages settings.', roles: ['Full-Stack', 'DevOps'] },
  { cat: 'Dashboards & Accounts', title: 'Vercel Dashboard', url: 'https://vercel.com/usman-f5ed', desc: 'Every deployed project, its domains, and its environment variables.', roles: ['DevOps'] },
  { cat: 'Dashboards & Accounts', title: 'Cloudflare Dashboard', url: 'https://dash.cloudflare.com/', desc: 'DNS records and proxy settings for your domains.', roles: ['DevOps', 'Security'] },
  { cat: 'Dashboards & Accounts', title: 'Render Dashboard', url: 'https://dashboard.render.com/', desc: 'Hosts aihelpall.com’s backend — logs and env vars live here.', roles: ['DevOps'] },
  { cat: 'Dashboards & Accounts', title: 'Namecheap Dashboard', url: 'https://ap.www.namecheap.com/', desc: 'Domain registrar — DNS and renewals.', roles: ['DevOps'] },
  { cat: 'Dashboards & Accounts', title: 'Supabase Dashboard', url: 'https://supabase.com/dashboard', desc: 'Hosted Postgres database and auth backend.', roles: ['Backend', 'Data'] },
  { cat: 'Dashboards & Accounts', title: 'Giphy Developers', url: 'https://developers.giphy.com/dashboard/', desc: 'GIF API keys and usage.', roles: ['Frontend', 'Full-Stack'] },
  { cat: 'Dashboards & Accounts', title: 'Hofstra Bootcamp', url: 'https://hofstra.quickstart.com/my-dashboard/#/bootcamp', desc: 'Your coding bootcamp course portal.', paid: true },
  { cat: 'Dashboards & Accounts', title: 'The Movie Database', url: 'https://www.themoviedb.org/login/username', desc: 'Movie / TV metadata API account.', roles: ['Backend', 'Full-Stack'] },
  { cat: 'Dashboards & Accounts', title: 'Google Developers', url: 'https://me.developers.google.com/', desc: 'Your Google developer profile hub.' },
  { cat: 'Dashboards & Accounts', title: 'Microsoft', url: 'https://www.microsoft.com/en-us', desc: 'Microsoft account and services home.' },
  { cat: 'Dashboards & Accounts', title: 'Firebase Console', url: 'https://console.firebase.google.com', desc: 'Free-tier auth, Firestore, and hosting — the backend for your intern-tool calendar app.', suggested: true, roles: ['Backend', 'Data', 'Full-Stack'] },
  { cat: 'Dashboards & Accounts', title: 'Netlify', url: 'https://app.netlify.com', desc: 'Another free static-hosting option, alongside Vercel and Render.', suggested: true, roles: ['DevOps'] },

  // ---- Free AI Websites ----
  { cat: 'Free AI Websites', title: 'ChatGPT', url: 'https://chat.openai.com', desc: 'Free-tier general chat AI from OpenAI — a second opinion next to Gemini.', suggested: true, roles: ['ML/AI'] },
  { cat: 'Free AI Websites', title: 'Claude.ai', url: 'https://claude.ai', desc: 'Free-tier chat AI, especially strong at reading and writing code.', suggested: true, roles: ['ML/AI', 'Full-Stack'] },
  { cat: 'Free AI Websites', title: 'Google Gemini', url: 'https://gemini.google.com', desc: 'The free chat website version of the same Gemini API powering My Free AI.', suggested: true, roles: ['ML/AI'] },
  { cat: 'Free AI Websites', title: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', desc: 'Free GPT-class chat from Microsoft, no account required for basic use.', suggested: true, roles: ['ML/AI'] },
  { cat: 'Free AI Websites', title: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'Free AI search engine that answers questions and links its sources.', suggested: true, roles: ['ML/AI'] },
  { cat: 'Free AI Websites', title: 'DeepSeek Chat', url: 'https://chat.deepseek.com', desc: 'Free chat AI, well-regarded for reasoning and coding tasks.', suggested: true, roles: ['ML/AI'] },
  { cat: 'Free AI Websites', title: 'Poe', url: 'https://poe.com', desc: 'One free interface for trying many different AI chat models side by side.', suggested: true, roles: ['ML/AI'] },
  { cat: 'Free AI Websites', title: 'Hugging Face Spaces', url: 'https://huggingface.co/spaces', desc: 'Thousands of free community-hosted AI demos — image, chat, voice, video models.', suggested: true, roles: ['ML/AI', 'Data'] },
  { cat: 'Free AI Websites', title: 'Microsoft Designer', url: 'https://designer.microsoft.com', desc: 'Free AI image generation, built on Bing’s image model.', suggested: true, roles: ['ML/AI', 'Frontend'] },
  { cat: 'Free AI Websites', title: 'Codeium', url: 'https://codeium.com', desc: 'Free AI autocomplete for your code editor — an alternative to TabNine.', suggested: true, roles: ['Full-Stack', 'ML/AI'] },

  // ---- AI & Search APIs ----
  { cat: 'AI & Search APIs', title: 'OpenAI Platform', url: 'https://platform.openai.com/home', desc: 'API keys, usage, and billing for GPT models — where My AI’s credit balance lives.', roles: ['ML/AI', 'Backend'] },
  { cat: 'AI & Search APIs', title: 'Google AI Studio', url: 'https://aistudio.google.com/api-keys', desc: 'Free Gemini API keys — powers My Free AI’s chat.', roles: ['ML/AI', 'Backend'] },
  { cat: 'AI & Search APIs', title: 'SerpAPI', url: 'https://serpapi.com/', desc: 'Free-tier Google search results API — powers My Free AI’s Web Search tab.', roles: ['Backend', 'Full-Stack'] },
  { cat: 'AI & Search APIs', title: 'Google Programmable Search', url: 'https://programmablesearchengine.google.com', desc: 'Site-restricted search engine builder (new engines can no longer search the whole web).', roles: ['Backend'] },
  { cat: 'AI & Search APIs', title: 'Google Custom Search API', url: 'https://console.cloud.google.com/apis/library/customsearch.googleapis.com', desc: 'Enable or manage the Custom Search API in Google Cloud.', roles: ['Backend'] },
  { cat: 'AI & Search APIs', title: 'Google Cloud API Credentials', url: 'https://console.cloud.google.com/apis/credentials', desc: 'Create and manage keys for any enabled Google Cloud API (Custom Search, YouTube, etc.).', roles: ['Backend', 'DevOps'] },
  { cat: 'AI & Search APIs', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Free-tier hosted models and inference API — a fallback if Gemini’s limits run out.', suggested: true, roles: ['ML/AI', 'Data'] },
  { cat: 'AI & Search APIs', title: 'Anthropic Console', url: 'https://console.anthropic.com', desc: 'API keys and usage for Claude, for calling it directly from your own code.', suggested: true, roles: ['ML/AI', 'Backend'] },

  // ---- Docs & Learning ----
  { cat: 'Docs & Learning', title: 'DevDocs — HTML', url: 'https://devdocs.io/html', desc: 'Fast, offline-capable HTML reference.', roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'DevDocs — JS', url: 'https://devdocs.io/javascript', desc: 'Fast, offline-capable JavaScript reference.', roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'DevDocs — CSS', url: 'https://devdocs.io/css', desc: 'Fast, offline-capable CSS reference.', roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US', desc: 'The definitive web platform reference.', roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'Python Tutor', url: 'https://pythontutor.com/', desc: 'Step through code execution line by line, visually.', roles: ['Backend', 'Data'] },
  { cat: 'Docs & Learning', title: 'ES6 Compatibility', url: 'https://compat-table.github.io/compat-table/es6/', desc: 'Which browsers actually support which ES6+ features.', roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'W3C Validator', url: 'https://validator.w3.org', desc: 'Check a page’s markup for errors.', roles: ['Frontend', 'QA & Testing'] },
  { cat: 'Docs & Learning', title: 'HTML Cheat Sheet', url: 'https://htmlcheatsheet.com', desc: 'Quick-reference tag list.', roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'W3Schools', url: 'https://www.w3schools.com', desc: 'Beginner-friendly tutorials with live try-it editors.', roles: ['Frontend', 'Full-Stack'] },
  { cat: 'Docs & Learning', title: 'Node.js', url: 'https://nodejs.org/en', desc: 'Official docs and release notes.', roles: ['Backend'] },
  { cat: 'Docs & Learning', title: 'Node.js Downloads', url: 'https://nodejs.org/en/download', desc: 'Installers for every platform and version.', roles: ['Backend'] },
  { cat: 'Docs & Learning', title: 'Can I Use', url: 'https://caniuse.com', desc: 'Browser support tables for any CSS or JS feature before you ship it.', suggested: true, roles: ['Frontend', 'QA & Testing'] },
  { cat: 'Docs & Learning', title: 'freeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Free structured curriculum and practice projects.', suggested: true, roles: ['Full-Stack'] },
  { cat: 'Docs & Learning', title: 'Stack Overflow', url: 'https://stackoverflow.com', desc: 'The default place to search when an error message makes no sense — someone has almost always hit it first.', suggested: true, roles: ['Full-Stack'] },
  { cat: 'Docs & Learning', title: 'The Odin Project', url: 'https://www.theodinproject.com', desc: 'Free full-stack curriculum, project-based, that takes you from zero to a portfolio.', suggested: true, roles: ['Full-Stack'] },
  { cat: 'Docs & Learning', title: 'CS50', url: 'https://cs50.harvard.edu/x/', desc: 'Harvard’s free intro-to-computer-science course — the fundamentals under everything else here.', suggested: true, roles: ['Full-Stack'] },
  { cat: 'Docs & Learning', title: 'LeetCode', url: 'https://leetcode.com', desc: 'Free coding-problem practice for the technical interviews every role above eventually faces.', suggested: true, roles: ['Full-Stack'] },
  { cat: 'Docs & Learning', title: 'Frontend Mentor', url: 'https://www.frontendmentor.io', desc: 'Real design files to build from, free tier included — practice matching a mockup pixel-for-pixel.', suggested: true, roles: ['Frontend'] },
  { cat: 'Docs & Learning', title: 'Exercism', url: 'https://exercism.org', desc: 'Free coding exercises with real mentor feedback, across dozens of languages.', suggested: true, roles: ['Full-Stack'] },

  // ---- Code Editors & Sandboxes ----
  { cat: 'Code Editors & Sandboxes', title: 'CodeSandbox', url: 'https://codesandbox.io/dashboard/recent', desc: 'Your recent in-browser sandboxes.', roles: ['Frontend', 'Full-Stack'] },
  { cat: 'Code Editors & Sandboxes', title: 'CodeSandbox Learn', url: 'https://codesandbox.io/docs/learn', desc: 'Guided lessons inside CodeSandbox.', roles: ['Frontend', 'Full-Stack'] },
  { cat: 'Code Editors & Sandboxes', title: 'CodeSandbox SDK', url: 'https://codesandbox.io/docs/sdk', desc: 'Programmatic sandbox creation for your own tools.', roles: ['Full-Stack', 'DevOps'] },
  { cat: 'Code Editors & Sandboxes', title: 'VSCode.dev', url: 'https://vscode.dev', desc: 'Full VS Code, running entirely in the browser.', roles: ['Full-Stack'] },
  { cat: 'Code Editors & Sandboxes', title: 'Dillinger', url: 'https://dillinger.io', desc: 'Live-preview Markdown editor.', roles: ['Frontend'] },
  { cat: 'Code Editors & Sandboxes', title: 'Sandpack (GitHub)', url: 'https://github.com/Sandpack', desc: 'The component-sandbox library behind CodeSandbox’s embeds.', roles: ['Frontend'] },
  { cat: 'Code Editors & Sandboxes', title: 'CodePen — Example 1', url: 'https://codepen.io/zsolt555/pen/PoaEYpL', desc: 'Saved reference pen.', roles: ['Frontend'] },
  { cat: 'Code Editors & Sandboxes', title: 'CodePen — Example 2', url: 'https://codepen.io/zsolt555/pen/OJLajgG', desc: 'Saved reference pen.', roles: ['Frontend'] },
  { cat: 'Code Editors & Sandboxes', title: 'CodePen — Example 3', url: 'https://codepen.io/zsolt555/pen/orePqg', desc: 'Saved reference pen.', roles: ['Frontend'] },
  { cat: 'Code Editors & Sandboxes', title: 'TabNine', url: 'https://www.tabnine.com/', desc: 'AI code-completion plugin for your editor.', roles: ['Full-Stack'] },
  { cat: 'Code Editors & Sandboxes', title: 'Eclipse Downloads', url: 'https://www.eclipse.org/downloads', desc: 'The Eclipse Java IDE installers.', roles: ['Backend'] },
  { cat: 'Code Editors & Sandboxes', title: 'Adoptium (Windows)', url: 'https://adoptium.net/installation/archives#windows', desc: 'Free OpenJDK builds for Windows.', roles: ['Backend'] },
  { cat: 'Code Editors & Sandboxes', title: 'Replit', url: 'https://replit.com', desc: 'Browser IDE, good for quick full-stack prototypes with a backend.', suggested: true, roles: ['Full-Stack'] },

  // ---- API & Testing Tools ----
  { cat: 'API & Testing Tools', title: 'Postman', url: 'https://www.postman.com', desc: 'Test your own API routes (like /api/chat) without building a frontend first.', suggested: true, roles: ['Backend', 'QA & Testing'] },
  { cat: 'API & Testing Tools', title: 'Insomnia', url: 'https://insomnia.rest', desc: 'Free REST and GraphQL API client — a lighter alternative to Postman.', suggested: true, roles: ['Backend', 'QA & Testing'] },
  { cat: 'API & Testing Tools', title: 'Swagger Editor', url: 'https://editor.swagger.io', desc: 'Design and document your own APIs in the OpenAPI format.', suggested: true, roles: ['Backend', 'QA & Testing'] },
  { cat: 'API & Testing Tools', title: 'JSONPlaceholder', url: 'https://jsonplaceholder.typicode.com', desc: 'Free fake REST API for testing frontend code before your real backend exists.', suggested: true, roles: ['Frontend', 'QA & Testing'] },
  { cat: 'API & Testing Tools', title: 'RapidAPI Hub', url: 'https://rapidapi.com', desc: 'Marketplace of free and paid public APIs you can plug straight into a project.', suggested: true, roles: ['Backend', 'Full-Stack'] },

  // ---- Version Control & CI/CD ----
  { cat: 'Version Control & CI/CD', title: 'GitHub Actions', url: 'https://github.com/features/actions', desc: 'Free automated testing and deployment pipelines, built into GitHub.', suggested: true, roles: ['DevOps'] },
  { cat: 'Version Control & CI/CD', title: 'GitLab', url: 'https://gitlab.com', desc: 'GitHub alternative with source control and CI/CD pipelines in one place.', suggested: true, roles: ['DevOps', 'Backend'] },
  { cat: 'Version Control & CI/CD', title: 'CircleCI', url: 'https://circleci.com', desc: 'Free-tier CI/CD pipelines for building, testing, and deploying automatically.', suggested: true, roles: ['DevOps'] },
  { cat: 'Version Control & CI/CD', title: 'GitHub Desktop', url: 'https://desktop.github.com', desc: 'A visual git app — commit, push, and pull without memorizing commands.', suggested: true, roles: ['Full-Stack', 'DevOps'] },

  // ---- Databases & Backend ----
  { cat: 'Databases & Backend', title: 'MongoDB Atlas', url: 'https://www.mongodb.com/cloud/atlas', desc: 'Free-tier hosted NoSQL database — a common Supabase/Postgres alternative.', suggested: true, roles: ['Backend', 'Data'] },
  { cat: 'Databases & Backend', title: 'Neon', url: 'https://neon.tech', desc: 'Free serverless Postgres that spins down when idle, so it never costs when unused.', suggested: true, roles: ['Backend', 'Data'] },
  { cat: 'Databases & Backend', title: 'PlanetScale', url: 'https://planetscale.com', desc: 'MySQL-compatible serverless database platform with a free tier.', suggested: true, roles: ['Backend', 'Data'] },
  { cat: 'Databases & Backend', title: 'Railway', url: 'https://railway.app', desc: 'Free-tier hosting for backends and databases together, an alternative to Render.', suggested: true, roles: ['DevOps', 'Backend'] },

  // ---- Mobile Dev ----
  { cat: 'Mobile Dev', title: 'Flutter', url: 'https://flutter.dev', desc: 'Google’s cross-platform UI toolkit.', roles: ['Mobile'] },
  { cat: 'Mobile Dev', title: 'React Native', url: 'https://reactnative.dev', desc: 'Build native mobile apps with React.', roles: ['Mobile'] },
  { cat: 'Mobile Dev', title: 'Expo', url: 'https://expo.dev', desc: 'The managed workflow and dashboard for React Native.', roles: ['Mobile'] },
  { cat: 'Mobile Dev', title: 'Expo Documentation', url: 'https://docs.expo.dev', desc: 'Guides and API reference.', roles: ['Mobile'] },
  { cat: 'Mobile Dev', title: 'Expo (GitHub)', url: 'https://github.com/expo/expo', desc: 'Source code for the Expo SDK.', roles: ['Mobile'] },
  { cat: 'Mobile Dev', title: 'Expo Build Services', url: 'https://expo.dev/services#build', desc: 'Cloud builds for iOS and Android, no local toolchain needed.', roles: ['Mobile', 'DevOps'] },
  { cat: 'Mobile Dev', title: 'Expo Snack', url: 'https://snack.expo.dev', desc: 'In-browser Expo playground — test React Native snippets with zero setup.', suggested: true, roles: ['Mobile'] },

  // ---- Design & Assets ----
  { cat: 'Design & Assets', title: 'Figma', url: 'https://www.figma.com', desc: 'Interface design and prototyping.', roles: ['Frontend'] },
  { cat: 'Design & Assets', title: 'Canva', url: 'https://www.canva.com', desc: 'Fast graphics and social-media assets.', roles: ['Frontend'] },
  { cat: 'Design & Assets', title: 'iStockPhoto', url: 'https://www.istockphoto.com', desc: 'Licensed stock photography — paid, unlike the free options in this row.', roles: ['Frontend'], paid: true },
  { cat: 'Design & Assets', title: 'Diagrams.net', url: 'https://app.diagrams.net/', desc: 'Free flowcharts and architecture diagrams.', roles: ['Full-Stack', 'DevOps'] },
  { cat: 'Design & Assets', title: 'Unsplash', url: 'https://unsplash.com', desc: 'Free stock photography — a no-cost complement to iStockPhoto.', suggested: true, roles: ['Frontend'] },
  { cat: 'Design & Assets', title: 'Coolors', url: 'https://coolors.co', desc: 'Generate and lock in color palettes fast.', suggested: true, roles: ['Frontend'] },

  // ---- Project Management & Comms ----
  { cat: 'Project Management & Comms', title: 'Trello', url: 'https://trello.com', desc: 'Free kanban boards for tracking tasks on a project, solo or with others.', suggested: true },
  { cat: 'Project Management & Comms', title: 'Notion', url: 'https://www.notion.so', desc: 'Free notes, docs, and project trackers in one flexible workspace.', suggested: true },
  { cat: 'Project Management & Comms', title: 'Linear', url: 'https://linear.app', desc: 'Fast, clean issue tracker popular with small dev teams.', suggested: true },
  { cat: 'Project Management & Comms', title: 'Slack', url: 'https://slack.com', desc: 'Team chat — free tier is plenty for a small project or side team.', suggested: true },

  // ---- Monitoring & DevOps ----
  { cat: 'Monitoring & DevOps', title: 'Sentry', url: 'https://sentry.io', desc: 'Free-tier error tracking that tells you the moment a live app breaks.', suggested: true, roles: ['DevOps', 'SRE', 'QA & Testing'] },
  { cat: 'Monitoring & DevOps', title: 'UptimeRobot', url: 'https://uptimerobot.com', desc: 'Free uptime monitoring — get alerted the moment a site goes down.', suggested: true, roles: ['SRE', 'DevOps'] },
  { cat: 'Monitoring & DevOps', title: 'PageSpeed Insights', url: 'https://pagespeed.web.dev', desc: 'Free Google performance audit for any URL, with concrete fixes.', suggested: true, roles: ['Frontend', 'QA & Testing'] },
  { cat: 'Monitoring & DevOps', title: 'LogRocket', url: 'https://logrocket.com', desc: 'Session replay plus error tracking, free tier, to see exactly what a user did before a bug.', suggested: true, roles: ['Frontend', 'QA & Testing', 'SRE'] },
  { cat: 'Monitoring & DevOps', title: 'Grafana Cloud', url: 'https://grafana.com', desc: 'Free-tier dashboards and alerting for metrics, logs, and uptime across your services.', suggested: true, roles: ['SRE', 'DevOps'] },
  { cat: 'Monitoring & DevOps', title: 'Snyk', url: 'https://snyk.io', desc: 'Free-tier dependency and code vulnerability scanning — catches security holes before they ship.', suggested: true, roles: ['Security'] },
]

export const LINKDECK_ROLES = [
  'Frontend', 'Backend', 'Full-Stack', 'Mobile', 'DevOps',
  'QA & Testing', 'Data', 'ML/AI', 'Security', 'SRE',
]

export const LINKDECK_ROADMAPS = {
  Frontend: { url: 'https://roadmap.sh/frontend', note: 'Step-by-step path from HTML/CSS basics through to a job-ready frontend developer.', video: { url: 'https://www.youtube.com/watch?v=hJRR2Vx6pDk', label: 'Frontend Developer Roadmap 2026: Beginner to Job Ready' } },
  Backend: { url: 'https://roadmap.sh/backend', note: 'Step-by-step path through languages, databases, APIs, and backend architecture.', video: { url: 'https://www.youtube.com/watch?v=OeEHJgzqS1k', label: 'The Complete Backend Developer Roadmap' } },
  'Full-Stack': { url: 'https://roadmap.sh/full-stack', note: 'Combines the frontend and backend paths into one full-stack progression.', video: { url: 'https://www.youtube.com/watch?v=ZoD56SNZOBs', label: 'Full Stack Developer Roadmap for Beginners (2026)' } },
  Mobile: { url: 'https://roadmap.sh/android', note: 'Step-by-step Android path (swap in roadmap.sh/ios for the iOS equivalent).', video: { url: 'https://www.youtube.com/watch?v=Zxq0WQ-UBCo', label: 'Mobile App Developer Roadmap: Beginner to Pro (Android & iOS)' } },
  DevOps: { url: 'https://roadmap.sh/devops', note: 'Step-by-step path through Linux, networking, CI/CD, containers, and cloud.', video: { url: 'https://www.youtube.com/watch?v=WcOl-0Mn-Ws', label: 'DevOps Engineer Roadmap 2026: Step-by-Step Guide' } },
  'QA & Testing': { url: 'https://roadmap.sh/qa', note: 'Step-by-step path from manual testing to automated test engineering.', video: { url: 'https://www.youtube.com/watch?v=RZw3u29NzXM', label: 'QA Automation Engineer Roadmap: Beginner Step-by-Step Guide' } },
  Data: { url: 'https://roadmap.sh/data-engineer', note: 'Step-by-step path through pipelines, warehousing, and data infrastructure.', video: { url: 'https://www.youtube.com/watch?v=71JLTDONK00', label: 'Data Engineer Roadmap 2026: Step-by-Step Guide' } },
  'ML/AI': { url: 'https://roadmap.sh/ai-engineer', note: 'Step-by-step path to building and shipping AI-powered applications.', video: { url: 'https://www.youtube.com/watch?v=uRGEEULzzik', label: 'AI & ML Engineer Roadmap: Step-by-Step Guide for Beginners' } },
  Security: { url: 'https://roadmap.sh/cyber-security', note: 'Step-by-step path through networking, security fundamentals, and defense.', video: { url: 'https://www.youtube.com/watch?v=aSMwQXcj6x4', label: '10-Step Beginner Cybersecurity Roadmap' } },
  SRE: { url: 'https://roadmap.sh/devops', note: 'No dedicated SRE map yet on roadmap.sh — the DevOps roadmap covers the same reliability/ops ground.', video: { url: 'https://www.youtube.com/watch?v=nPx3Qk-J_FA', label: 'SRE Roadmap 2026: How to Become an SRE, Step-by-Step' } },
}
