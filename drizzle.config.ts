import { defineConfig } from 'drizzle-kit';

import * as dotenv from 'dotenv';

if (process.env.NODE_ENV == 'development') {
  dotenv.config({ path: '.env' })
}

export default defineConfig({
  schema: './src/lib/db/schema/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
