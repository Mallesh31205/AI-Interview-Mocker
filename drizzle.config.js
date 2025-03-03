import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials:{
    url:'postgresql://neondb_owner:npg_leK0tD5dwsSC@ep-dry-dust-a82tj9c5-pooler.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require',
  }
});
