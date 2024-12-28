import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  dbCredentials: {
    url: "postgresql://Finance_neondb_owner:IbihUZkf0nX6@ep-fancy-tree-a59d88zr.us-east-2.aws.neon.tech/Finance_neondb?sslmode=require",
  },
});
