alter table "public"."renters" drop column "flagged";

alter table "public"."renters" add column "status" renter_type;


