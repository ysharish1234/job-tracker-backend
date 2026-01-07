# Job & Interview Tracking Backend

## Overview
A production-ready backend application built using Node.js, Express, and MongoDB that allows users to track job applications and interview experiences securely.

## Features
- User authentication using JWT
- Job tracking (Create, Read, Update, Delete)
- Pagination and filtering for jobs
- Interview experience module linked to jobs
- Protected APIs with authorization
- Centralized error handling

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Jobs
- POST /api/jobs
- GET /api/jobs?page=&limit=&status=&company=
- PUT /api/jobs/:id
- DELETE /api/jobs/:id

### Interviews
- POST /api/interviews
- GET /api/interviews/:jobId

## How to Run Locally
```bash
npm install
npm run dev
