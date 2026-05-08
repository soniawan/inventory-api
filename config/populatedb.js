import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price_code VARCHAR(255),
  price NUMERIC(15, 2) NOT NULL,
  stock INTEGER,
  warranty_period INTEGER,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL
);

INSERT INTO categories (name) VALUES ('TV'), ('Lampu'), ('Komponen');

INSERT INTO products (name, description, price_code, price, stock, warranty_period, category_id) VALUES ('Lampu Visicom 40 watt', '40 watt', 'MCR', 130000, 10, 1, 2), ('Lampu Visicom 50 watt', '50 watt', 'MBR', 150000, 5, 1, 2), ('IC', 'rb40i', 'GPT', 2000, 20, 0, 3), ('TV Samsung', 'Hemat Listrik', 'TDR', 3000000, 1, 1, 1);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECTION,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
