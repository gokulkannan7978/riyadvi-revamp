# Riyadvi Software Technologies - Backend API

RESTful API backend for the Riyadvi Software Technologies Corporate Website Revamp, built with Node.js, Express.js, and PostgreSQL.

---

## Features

- **Express.js Server**: Clean, modular MVC architecture (Routes, Controllers, Models, Middleware, Config).
- **PostgreSQL Database Integration**: Connection pooling via `pg`, parameterized queries for SQL injection safety.
- **Auto-Schema Migration**: Automatic table creation on startup and via `npm run db:init`.
- **Validation Middleware**: Sanitization and validation for all inbound payloads.
- **Unified JSON API Response**: Consistent `{ success, message, data, timestamp }` format.
- **Centralized Error Handling**: Captures 404s and 500s with detailed error reporting.
- **Resilient Fallback Mode**: If PostgreSQL is temporarily not started locally, the server continues running in demo fallback mode without crashing.

---

## Required Database Entities

1. **`contact_enquiries`**: `id`, `name`, `email`, `phone`, `company`, `requirement`, `message`, `status`, `created_at`
2. **`consultation_requests`**: `id`, `name`, `email`, `phone`, `company`, `service`, `message`, `status`, `created_at`
3. **`business_health_checkup_leads`**: `id`, `business_name`, `name`, `email`, `phone`, `website`, `digital_presence`, `marketing`, `technology`, `business_challenges`, `created_at`
4. **`lead_magnet_leads`**: `id`, `name`, `company`, `email`, `phone`, `created_at`
5. **`career_applications`**: `id`, `name`, `email`, `phone`, `position`, `resume_url`, `message`, `status`, `created_at`

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure your PostgreSQL database connection:
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Full connection string:
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/riyadvi_db

# Or discrete parameters:
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=riyadvi_db
PGSSL=false
```

### 3. Initialize Database Schema
```bash
npm run db:init
```

### 4. Start Development Server
```bash
npm run dev
```

The server starts on `http://localhost:5000`.

---

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | System health and database connection status |
| `POST` | `/api/contact` | Submit general contact enquiry |
| `GET` | `/api/contact` | Retrieve contact enquiries (admin/internal) |
| `POST` | `/api/consultation` | Book strategy consultation |
| `GET` | `/api/consultation` | Retrieve consultation bookings |
| `POST` | `/api/health-checkup` | Submit 6-step Business Health Checkup diagnostic |
| `GET` | `/api/health-checkup` | Retrieve health checkup diagnostic leads |
| `POST` | `/api/lead-magnet` | Request Software Project Planning Guide |
| `GET` | `/api/lead-magnet` | Retrieve lead magnet requests |
| `POST` | `/api/applications` | Submit job application |
| `GET` | `/api/applications` | Retrieve job applications |
