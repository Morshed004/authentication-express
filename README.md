# Authentication Service(Bun/Express/TypeScript)

## Overview
A minimal backend service that provides user registration functionality. It uses Express for routing, Mongoose for MongoDB interaction, and is containerized with Docker Compose for the database.

## Features
- POST `/api/auth/register` endpoint for creating a new user  
- Unique constraints on `username` and `email`  
- Password hashing with SHA‑256 (for demonstration purposes)  
- Docker Compose setup for a MongoDB instance  

## Tech Stack
- **Runtime**: Node.js (Bun)  
- **Language**: TypeScript  
- **Web framework**: Express  
- **ORM**: Mongoose (MongoDB)  
- **Environment**: dotenv  
- **Containerization**: Docker Compose  
- **Database**: MongoDB  

## Installation
1. Clone the repository.  
2. Install dependencies:  
   ```bash
   bun install
   ```  
3. Ensure Docker is running, then start the MongoDB service:  
   ```bash
   docker compose up -d
   ```  
4. Create a `.env` file (if not present) with the required variable:  
   ```dotenv
   DATABASE_URI=mongodb://admin:secretpassword@localhost:27017/?authSource=admin
   ```  
   *Only the variable name is required; the example value is illustrative.*

## Usage
Run the development server:
```bash
bun --watch index.ts
```

The API listens on port 3000. To register a user, send a POST request to `/api/auth/register` with a JSON body:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "mySecret123"
}
```

- **201** – user created successfully  
- **409** – user already exists (username or email)  

## Project Structure
```
src/
├─ app.ts          # Express app configuration
├─ index.ts        # Server entry point
├─ database/
│   └─ db.ts       # MongoDB connection logic
├─ config/
│   └─ config.ts   # Loads DATABASE_URI from .env
├─ routes/
│   └─ auth.route.ts # Router for authentication endpoints
├─ controllers/
│   └─ auth.controller.ts # Business logic for registration
└─ models/
    └─ user.model.ts # Mongoose schema and model
```

## Configuration
- **DATABASE_URI** (required) – MongoDB connection string.  
  Example format: `mongodb://username:password@host:port/?authSource=databaseName`  

No other environment variables are needed for the current implementation.

## Notes
- The password hashing uses SHA‑256, which is **not** recommended for production; replace with a proper password‑hashing library (e.g., bcrypt).  
- The Docker volume `mongodb_data` persists database files between container restarts.  
- The repository contains several Git hook samples; they are not part of the runtime functionality.