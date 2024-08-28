import { sql } from "./dbsql.js";

async function createTable() {
  await sql`
    CREATE TABLE videos (
      id UUID PRIMARY KEY,
      title TEXT,
      description TEXT,
      url TEXT
    );
  `;

  console.log("Table created.");
}

createTable();
