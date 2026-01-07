# Job & Interview Tracking Backend

## Overview
A production-ready backend system built using Node.js, Express, and MongoDB that allows users to track job applications and interview experiences.

## Features
- User authentication (JWT)
- Job tracking (CRUD)
- Pagination & filtering
- Interview experience module
- Protected APIs
- Centralized error handling

## Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- POST /api/jobs
- GET /api/jobs?page=&limit=
- PUT /api/jobs/:id
- DELETE /api/jobs/:id
- POST /api/interviews
- GET /api/interviews/:jobId

## How to Run
```bash
npm install
npm run dev
