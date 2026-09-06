# My AI — Free Edition (React + Web Speech API + Gemini)

This is a from-scratch rebuild of the "My AI" voice assistant that costs
**$0** to run — no OpenAI Realtime API, no credit balance to run out of.

How it replaces the paid pieces:

- **Voice in/out (speech-to-text and text-to-speech):** uses your browser's
  own built-in Web Speech API. No API key, no signup, no cost. Works in
  Chrome and Edge; not supported in Firefox, partial support in Safari.
- **The "brain" (understanding you and writing replies):** uses Google
  Gemini's free tier instead of OpenAI. Free API key, no credit card
  required.

## 1. Get your free Gemini API key

1. Go to https://aistudio.google.com/apikey
2. Sign in with a Google account.
3. Click "Create API key" and copy it. Keep it secret — treat it like a
   password.

## 2. Put these files in your project

You already have the "my AI - Copy" folder open in VS Code. Copy every
file and folder from this download into that folder (overwrite is fine
since this is a fresh rebuild — but since it's a *copy*, your original
"my AI" folder is untouched either way).

## 3. Install dependencies

Open a terminal in that folder and run:

```
npm install
```

## 4. Add your API key for local testing

Copy `.env.example` to a new file named `.env.local` in the same folder,
and paste your real key in:

```
GEMINI_API_KEY=paste_your_real_key_here
```

## 5. Run it locally

Because this app has both a frontend (React) and a small backend
(`api/chat.js`), the easiest way to test both together locally is the
Vercel CLI:

```
npm install -g vercel
vercel dev
```

It'll print a local URL (usually `http://localhost:3000`) — open that in
Chrome and try typing a message, then try the "Start voice" button.

(If you just run `npm run dev` with plain Vite, the chat UI will load but
the `/api/chat` endpoint won't work locally — `vercel dev` is what makes
both pieces work together on your machine.)

## 6. Push to GitHub

From that same folder:

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-new-github-repo-url>
git push -u origin main
```

(Create the empty repo on github.com first, then paste its URL in place
of `<your-new-github-repo-url>`.)

## 7. Deploy on Vercel

1. Go to vercel.com, click "New Project", and import the GitHub repo you
   just pushed.
2. Vercel will auto-detect it as a Vite project — leave the build
   settings as default.
3. Before clicking Deploy, open "Environment Variables" and add:
   - Key: `GEMINI_API_KEY`
   - Value: your real Gemini key
4. Click Deploy.

Once it's live, open the Vercel URL in Chrome and test both text chat and
voice — no billing, no credit balance, no OpenAI account needed anywhere
in this version.

## Notes / limitations to expect

- Voice input/output only works in Chrome-based browsers (and partially
  Safari) — this is a limitation of the free Web Speech API itself, not
  something in this code.
- Gemini's free tier has generous but real rate limits (a capped number
  of requests per minute/day). For personal use this should never be an
  issue, but heavy use could hit a temporary limit.
- This rebuild focuses on matching the core chat + voice experience. The
  original app's file/document-analysis and task-list features aren't
  included yet — let me know if you want those added back in next.
