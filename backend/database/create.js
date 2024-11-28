import { sql } from "./database.js";

sql`CREATE TABLE IF NOT EXISTS tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    opened TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    closed TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );`.then(() => {
      console.log('Tabela criada')
  })