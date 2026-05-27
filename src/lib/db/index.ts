// import { drizzle } from 'drizzle-orm/neon-http';
// import { neon } from '@neondatabase/serverless';
// import * as schema from './schema/index';

// import * as dotenv from 'dotenv';

// dotenv.config({ path: '.env.local' })

// const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql, { schema });


import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema/index';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });