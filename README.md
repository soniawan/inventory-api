# Inventory API

A lightweight and robust RESTful API for managing an inventory database, built with **Node.js**, **Express**, and **PostgreSQL**.

---

## 🚀 Features
- **Full CRUD operations** for products (`GET`, `POST`, `PATCH`, `DELETE`).
- **Input Validation** using `express-validator` to ensure data integrity.
- **Database Seeding** script to automatically set up schemas and seed sample data.
- **Centralized Error Handling** for clean and secure HTTP responses.

---

## 🛠 Tech Stack
- **Backend:** Node.js (ES Modules) & Express.js
- **Database:** PostgreSQL
- **Query Driver:** `pg` (node-postgres)
- **Validation:** `express-validator`
- **Development Tooling:** Nodemon

---

## 📋 Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (running locally or hosted)

---

## ⚙️ Getting Started

### 1. Install Dependencies
Navigate to the project root directory and run:
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory of your project and configure the following variables:
```env
PORT=8000
DB_CONNECTION=postgresql://<username>:<password>@localhost:5432/<database_name>
NODE_ENV=development
```

### 3. Initialize & Seed the Database
Run the seed script to create the necessary tables (`categories` and `products`) and populate them with sample data:
```bash
npm run seed
```

### 4. Start the Server
Run the development server using Nodemon:
```bash
npm run dev
```
The server will start running at `http://localhost:8000` (or the port defined in your `.env`).

---

## 📡 API Endpoints

### Products (`/api/products`)

| Method | Endpoint | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/products` | Retrieve all products | None |
| **GET** | `/api/products/:id` | Retrieve a specific product by ID | None |
| **POST** | `/api/products` | Create a new product | See Schema below |
| **PATCH** | `/api/products/:id` | Update an existing product (partial update) | See Schema below |
| **DELETE** | `/api/products/:id` | Delete a product by ID | None |

#### Example Request Body for `POST` / `PATCH`:
```json
{
  "name": "Mechanical Keyboard",
  "description": "RGB Backlit Mechanical Keyboard",
  "price_code": "KBD-01",
  "price": 89.99,
  "stock": 15,
  "warranty_period": 12,
  "category_id": 3
}
```

---

## 🗄️ Database Schema

The database consists of two tables:

### 1. `categories`
- `id` (INTEGER, Primary Key, Auto-increment)
- `name` (VARCHAR(255), Not Null)

### 2. `products`
- `id` (INTEGER, Primary Key, Auto-increment)
- `name` (VARCHAR(255), Not Null)
- `description` (TEXT)
- `price_code` (VARCHAR(255))
- `price` (NUMERIC(15, 2), Not Null)
- `stock` (INTEGER)
- `warranty_period` (INTEGER)
- `category_id` (INTEGER, Foreign Key referencing `categories.id` on delete set null)
