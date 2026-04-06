# DatafortAI Lectures

A static React website hosting lecture series for engineering students and practitioners.

**Live:** https://lectures.datafortai.com
**Port:** 8010 (frontend only — no backend, no database)

---

## Adding a New Lecture Series

1. Create a new page component in `frontend/src/pages/series/<SeriesName>.jsx`
2. Add its entry to the `SERIES` array in `frontend/src/App.jsx` and in `frontend/src/pages/Home.jsx`
3. Add a tab entry to `frontend/src/components/Navbar.jsx` (`SERIES_LIST` array)
4. Commit, push — GitHub Actions deploys automatically

---

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Site runs at http://localhost:5173

---

## Deployment

Push to `main` → GitHub Actions SSHes into the server and runs `deploy lectures`.

**First-time bootstrap (already done):**
```bash
mkdir -p ~/apps/lectures && cd ~/apps/lectures && git clone <repo> .
docker compose up -d --build
```

**GitHub secrets required:**
- `SERVER_HOST` — server IP
- `SERVER_USER` — ssh username
- `DEPLOY_SSH_KEY` — restricted deploy key

---

## Nginx

Config: `~/codebase/cloud_setup/server-config/nginx/sites-available/lectures`
Frontend proxied from port 8010.
DNS: `lectures.datafortai.com` — CNAME or A record pointing to 84.247.164.134 (set in GoDaddy).

---

## Port Registry

| Role     | Port |
|----------|------|
| Frontend | 8010 |

Suffix: **10**

---

## Current Lecture Series

| Folder key              | Title                          | Audience |
|-------------------------|--------------------------------|----------|
| `nitc-industry-genai`   | Evaluating Ideas with GenAI    | NIT Calicut engineering students |
