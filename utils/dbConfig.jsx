import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://Finance_neondb_owner:IbihUZkf0nX6@ep-fancy-tree-a59d88zr.us-east-2.aws.neon.tech/Finance_neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });
