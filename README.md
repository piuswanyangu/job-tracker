# Job Tracker

A modern Next.js dashboard for tracking job applications, reviewing application status, and visualizing job-search progress.

## Problem It Solves

Job seekers need a focused place to record where they applied, what stage each opportunity is in, and how their search is progressing. Job Tracker provides a clean application dashboard backed by the Job Tracker API.

## Features

- Register and log in through the backend API
- Store JWT access and refresh tokens locally
- View authenticated dashboard pages
- Create, edit, and delete job applications
- Track application statuses: Applied, Interviewed, Offer, Rejected
- Analytics dashboard with status totals, rates, charts, and progress bars
- Responsive pages for landing, auth, dashboard, applications, analytics, and settings
- Configurable API base URL through environment variables
- Cleaned duplicate legacy `src/` service layer
- Removed unused mock NextAuth route and unused auth/database dependencies

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Axios
- Recharts
- ESLint

## Installation

```bash
git clone https://github.com/piuswanyangu/job-tracker.git
cd job-tracker
npm install
copy .env.example .env.local
```

On macOS or Linux, create the local env file with:

```bash
cp .env.example .env.local
```

## Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Yes | Base URL for the Django API, including `/api` |

Example:

```text
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
```

## Run Locally

Start the backend API first, then run:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Backend Contract

This frontend expects the backend API from:

```text
https://github.com/piuswanyangu/job-trackerapi
```

Required endpoints:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/auth/register/` | Create account |
| `POST` | `/api/auth/login/` | Log in and return `access` and `refresh` tokens |
| `GET` | `/api/auth/me/` | Get current user |
| `GET` | `/api/applications/applications/` | List applications |
| `POST` | `/api/applications/applications/` | Create application |
| `PATCH` | `/api/applications/applications/{id}/` | Update application |
| `DELETE` | `/api/applications/applications/{id}/` | Delete application |
| `GET` | `/api/applications/analytics/` | Fetch analytics |

## Folder Structure

```text
app/
  dashboard/              Dashboard, applications, analytics, settings pages
  login/                  Login page
  register/               Registration page
components/               Shared UI components
context/                  React context providers
lib/                      API client and service modules
public/                   Static assets
```

## Scripts

```bash
npm run dev      # Start local dev server
npm run lint     # Run ESLint
npm run build    # Build production app
npm run start    # Start production server after build
```

## Screenshots

Add screenshots after deployment:

- Landing page
- Applications dashboard
- Analytics dashboard
- Mobile view

## Deployment

This repository includes `vercel.json`, `.env.production.example`, and `DEPLOYMENT.md` for Vercel deployment.

### Vercel

1. Import the repository into Vercel.
2. Set `NEXT_PUBLIC_API_URL` to the deployed backend API URL with `/api`.
3. Deploy the main branch.
4. Copy the Vercel URL into the backend `CORS_ALLOWED_ORIGINS` and `CSRF_TRUSTED_ORIGINS` values.

### Other Node Hosts

```bash
npm install
npm run build
npm run start
```

## Future Improvements

- Add refresh-token retry flow when access tokens expire
- Add protected route redirects for unauthenticated users
- Add filters and search for applications
- Add follow-up reminder dates
- Add loading skeletons for dashboard pages
- Add end-to-end tests with Playwright
- Add CI for lint, build, and end-to-end smoke tests

## Author

Built by [Pius Wanyangu](https://github.com/piuswanyangu).
