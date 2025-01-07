SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '936bedf0-6325-4edd-afe2-e23c66631b67', '{"action":"user_signedup","actor_id":"08066c50-3414-4148-a207-2a05dcf6ac36","actor_name":"Leopoldo Garcia","actor_username":"legarbo@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"github"}}', '2024-10-27 19:08:18.225833+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f780bdb9-a590-45f5-96b1-6bbf3cd686e7', '{"action":"login","actor_id":"08066c50-3414-4148-a207-2a05dcf6ac36","actor_name":"Leopoldo Garcia","actor_username":"legarbo@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"github"}}', '2024-10-27 19:08:48.826792+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('ed6427de-bea0-4ce1-a791-84450cbd29d8', '08066c50-3414-4148-a207-2a05dcf6ac36', 'bbadf478-d8cf-47d9-aeb7-a87b2980eff9', 's256', '5hB0iBHpke_78co9CJxP45CNOTdMdfhUf6vMGa3NE6Q', 'github', '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', '', '2024-10-27 19:07:56.506383+00', '2024-10-27 19:08:18.233666+00', 'oauth', '2024-10-27 19:08:18.233621+00'),
	('8d5a6b7f-4967-418f-8103-c8df65a53958', '08066c50-3414-4148-a207-2a05dcf6ac36', '4cff3a0d-1620-4c6f-9d6c-bfc0e0026bfb', 's256', 'pbzRM6ywOnIA7kByxf9Z20phA-32uEvNf4aDo7rLT9k', 'github', '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', '', '2024-10-27 19:08:48.042603+00', '2024-10-27 19:08:48.828039+00', 'oauth', '2024-10-27 19:08:48.827991+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '08066c50-3414-4148-a207-2a05dcf6ac36', 'authenticated', 'authenticated', 'legarbo@gmail.com', NULL, '2024-10-27 19:08:18.23067+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "github", "providers": ["github"]}', '{"iss": "https://api.github.com", "sub": "912595", "name": "Leopoldo Garcia", "email": "legarbo@gmail.com", "full_name": "Leopoldo Garcia", "user_name": "legarbo", "avatar_url": "https://avatars.githubusercontent.com/u/912595?v=4", "provider_id": "912595", "email_verified": true, "phone_verified": false, "preferred_username": "legarbo"}', NULL, '2024-10-27 19:08:18.193934+00', '2024-10-27 19:08:48.826334+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('912595', '08066c50-3414-4148-a207-2a05dcf6ac36', '{"iss": "https://api.github.com", "sub": "912595", "name": "Leopoldo Garcia", "email": "legarbo@gmail.com", "full_name": "Leopoldo Garcia", "user_name": "legarbo", "avatar_url": "https://avatars.githubusercontent.com/u/912595?v=4", "provider_id": "912595", "email_verified": true, "phone_verified": false, "preferred_username": "legarbo"}', 'github', '2024-10-27 19:08:18.221607+00', '2024-10-27 19:08:18.221668+00', '2024-10-27 19:08:48.824615+00', 'd7d48ce9-8423-4098-adca-6a53328ce5fe');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "active", "name", "description", "image", "metadata") VALUES
	('prod_R6rXRlRg9afy8t', true, 'Basic', 'Customer can flag/unflag own Clients and access all Client records', NULL, '{}'),
	('prod_R6rXIBRfWuaMue', true, 'Pro', 'Same as Basic plus writting Client reports capability', NULL, '{}'),
	('prod_R6rX7NNmDP3S9v', true, 'Elite', 'Same as Pro plus capability to collect previous fraudulent transactions', NULL, '{}');


--
-- Data for Name: prices; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."prices" ("id", "product_id", "active", "description", "unit_amount", "currency", "type", "interval", "interval_count", "trial_period_days", "metadata") VALUES
	('price_1QEdo0CfGFr6YsG4zrat03fW', 'prod_R6rXRlRg9afy8t', true, NULL, 2500, 'usd', 'recurring', 'month', 1, 0, NULL),
	('price_1QEdo1CfGFr6YsG418tA7jbR', 'prod_R6rXRlRg9afy8t', true, NULL, 25000, 'usd', 'recurring', 'year', 1, 0, NULL),
	('price_1QEdo2CfGFr6YsG4SXnUqvTc', 'prod_R6rXIBRfWuaMue', true, NULL, 38000, 'usd', 'recurring', 'year', 1, 0, NULL),
	('price_1QEdo2CfGFr6YsG4NRDQaf0D', 'prod_R6rX7NNmDP3S9v', true, NULL, 4500, 'usd', 'recurring', 'month', 1, 0, NULL),
	('price_1QEdo3CfGFr6YsG4sFy2XKTG', 'prod_R6rX7NNmDP3S9v', true, NULL, 49000, 'usd', 'recurring', 'year', 1, 0, NULL),
	('price_1QEdo1CfGFr6YsG4yD4iPk7I', 'prod_R6rXIBRfWuaMue', true, NULL, 3500, 'usd', 'recurring', 'month', 1, 0, NULL);


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("id", "full_name", "avatar_url", "billing_address", "payment_method") VALUES
	('08066c50-3414-4148-a207-2a05dcf6ac36', 'Leopoldo Garcia', 'https://avatars.githubusercontent.com/u/912595?v=4', NULL, NULL);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
