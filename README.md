# Product Service (REST API)

This repository contains the Product Service for a microservices-based e-commerce platform.

The Product Service is responsible for:
- Providing product catalog data
- Creating new products
- Persisting product data in PostgreSQL


---

## Tech Stack

- Node.js
- Express
- PostgreSQL (pg)
- CORS
- Jest (configured for testing)

---


## Repository Structure

This repository follows a standardized structure used across all microservices repositories:

```
 .
├── src/
│ └── index.js # Express server and API routes
├── docs/ # Design notes and documentation
├── scripts/ # Operational helper scripts
├── package.json
└── README.md
```

---

## Prerequisites

- Node.js (LTS recommended)
- npm
- PostgreSQL running locally
- Database initialized using `database/src/init.sql`

---

## Configuration

The service uses environment variables for configuration.

## Configuration

This service uses environment variables for configuration.

1. Copy the example environment file:

   cp .env.example .env

2. Update values if needed.

| Variable        | Default      | Description |
|-----------------|-------------|-------------|
| PORT            | 3001        | API server port |
| DB_HOST         | localhost   | PostgreSQL host |
| DB_NAME         | ecommerce   | Database name |
| DB_USER         | postgres    | Database user |
| DB_PASSWORD     | password    | Database password |

The service will automatically load variables from `.env`.

---

## Run/Deploy (Local)
npm install
npm start

## Verify Health & Fetch Products
```bash
curl -i http://localhost:3001/health
curl -s http://localhost:3001/products
```
