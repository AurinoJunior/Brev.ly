ALTER TABLE "links" RENAME COLUMN "name" TO "url";--> statement-breakpoint
ALTER TABLE "links" RENAME COLUMN "remote_key" TO "short_url";--> statement-breakpoint
ALTER TABLE "links" RENAME COLUMN "remote_url" TO "csv_remote_url";--> statement-breakpoint
ALTER TABLE "links" DROP CONSTRAINT "links_remote_key_unique";--> statement-breakpoint
ALTER TABLE "links" ADD CONSTRAINT "links_short_url_unique" UNIQUE("short_url");