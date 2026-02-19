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

## Environment Variables

The service supports the following environment variables:

| Variable        | Default      | Description |
|-----------------|-------------|-------------|
| PORT            | 3001        | API server port |
| DB_HOST         | localhost   | PostgreSQL host |
| DB_NAME         | ecommerce   | Database name |
| DB_USER         | postgres    | Database user |
| DB_PASSWORD     | password    | Database password |

If not provided, default values are used.

---

## Run Locally

From the `product-service` directory:

```bash
npm install
npm start
