import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dialect: "postgresql",
  url: env.POSTGRES_URL,
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["dailycommit_*"],
} satisfies Config;
