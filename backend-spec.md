# Inventory

## Library

```
npm i express express-validator dotenv pg ejs
npm i --save-dev nodemon
```

## Tables

1. products

```
id INTEGER PRIMARY KEY GENERATED AS ALWAYS AS IDENTITY,
name VARCHAR(255) NOT NULL,
description TEXT,
price_code VARCHAR(255),
price NUMERIC(15, 2) NOT NULL,
stock INTEGER,
warranty_period INTEGER
category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
```

2. categories

```
id INTEGER PRIMARY KEY GENERATED AS ALWAYS AS IDENTITY,
name VARCHAR(255) NOT NULL,
```
