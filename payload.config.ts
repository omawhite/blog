import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";
import { HomePage } from "./globals/HomePage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isBuild = process.env.RAILWAY_BUILD === "true";

const databaseConnectionString = isBuild
  ? process.env.DATABASE_PUBLIC_URL
  : process.env.DATABASE_URL;

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts],
  globals: [HomePage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseConnectionString,
    },
  }),
  sharp,
  plugins: [],
});
