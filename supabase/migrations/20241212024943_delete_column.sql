create type "public"."renter_type" as enum ('paid', 'pending', 'flagged');

alter table "public"."renters" drop column "active";


