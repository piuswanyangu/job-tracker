# Deployment Guide

This frontend is configured for Vercel and expects the Django API to be deployed first.

## Vercel Setup

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Set the production environment variable:

```text
NEXT_PUBLIC_API_URL=https://<your-render-api-host>/api
```

4. Deploy the main branch.
5. Copy the generated Vercel URL.
6. Update the backend environment variables:

```text
CORS_ALLOWED_ORIGINS=https://<your-vercel-app>.vercel.app
CSRF_TRUSTED_ORIGINS=https://<your-vercel-app>.vercel.app
```

7. Redeploy the backend after changing those values.

## Local Production Build

```bash
npm install
npm run lint
npm run build
npm run start
```

## Smoke Test

After deploying both apps:

1. Open the Vercel frontend URL.
2. Register a new account.
3. Log in.
4. Add a job application.
5. Confirm the application appears in the dashboard.
6. Open the analytics page and confirm counts update.
