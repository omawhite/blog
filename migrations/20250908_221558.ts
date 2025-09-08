import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" ADD COLUMN "profile_picture_id" integer;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_profile_picture_id_media_id_fk" FOREIGN KEY ("profile_picture_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "home_page_profile_picture_idx" ON "home_page" USING btree ("profile_picture_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" DROP CONSTRAINT "home_page_profile_picture_id_media_id_fk";
  
  DROP INDEX "home_page_profile_picture_idx";
  ALTER TABLE "home_page" DROP COLUMN "profile_picture_id";`)
}
