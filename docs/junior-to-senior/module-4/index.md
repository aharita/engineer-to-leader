---
id: module-4-system-design
title: "Module 4: System Design Basics (Thinking in Boxes)"
---
# Module 4: System Design Basics (Thinking in Boxes)

**Stop seeing lines of code. Start seeing boxes and arrows.**

As a Junior, your world is a function. Maybe a class if you're feeling fancy.
As a Senior, your world is the System. The terrifying, distributed, constantly-on-fire System.

You need to understand how your code fits into the bigger picture. How does the frontend talk to the backend? How does the backend talk to the database? What happens when 10,000 people hit that button at the same time? (Spoiler: Usually, tears.)

---

## 1. The "It Works on My Machine" Fallacy

*Your machine is not production.*

Your laptop has 1 user (you). Production has 100,000 users who all decide to click "Buy" at the exact same second. Your laptop is a lie. It is a controlled environment where everything is perfect. Production is a war zone.

* **Latency:** That API call takes 10ms locally. It takes 500ms over 3G in a tunnel.
* **Concurrency:** Two users try to buy the last ticket at the exact same millisecond. Who wins?
* **Failure:** The database *will* go down. The 3rd party API *will* timeout. What happens then?

**Real-world scenarios:**

* **The N+1 Problem:**
  * *Junior:* Writes a loop that makes a database query for every item in a list. Works fine with 5 items.
  * *Senior:* Realizes this will kill the database with 1000 items. Rewrites it to fetch all data in one query.
* **The Timeout:**
  * *Junior:* Sets the HTTP timeout to 60 seconds because "sometimes it's slow."
  * *Senior:* Sets it to 5 seconds. "If it takes longer than 5 seconds, it's failed. Fail fast so we don't tie up resources."
* **The Race Condition:**
  * *Junior:* "I checked if the file exists, then I opened it."
  * *Senior:* "Between the check and the open, another process deleted it. Use an atomic operation."

---

## 2. Trade-offs: There is No "Best" Solution

*Everything sucks in its own way.*

Junior engineers look for the "best" database. Senior engineers ask: "What are we optimizing for?"

* **SQL vs NoSQL?** It depends. Do you need strict consistency (Bank) or high write throughput (Twitter likes)?
* **Monolith vs Microservices?** It depends. Do you need simplicity (Startup) or independent scaling (Netflix)?

If you answer a system design question without saying "It depends," you are wrong.

**Real-world scenarios:**

* **The Shiny New Tool:**
  * *Junior:* "Let's use this new Graph Database because it's cool!"
  * *Senior:* "Our data is relational. Using a Graph DB will add complexity without benefit. Let's stick to Postgres."
* **The Cache Invalidation:**
  * *Junior:* "Let's cache everything forever to make it fast!"
  * *Senior:* "How do we clear the cache when data changes? Stale data is worse than slow data."
* **The Eventual Consistency:**
  * *Junior:* "I wrote to the database, but when I read it back immediately, it's not there!"
  * *Senior:* "We are using a read replica. There is a replication lag. We need to handle that in the UI."

---

## 3. Database Basics: The Heart of the System

*Data has gravity. Code is ephemeral.*

You can redeploy code in 5 minutes. Moving 10TB of data takes days and gray hairs. Juniors treat the Database like a magic black box that accepts infinite requests. Seniors treat the Database like a fragile egg that everyone is trying to smash with a hammer.

* **Normalization:** Don't duplicate data unless you have a good reason (read performance).
* **Indexing:** If you didn't add an index, you built a ticking time bomb.

:::tip Pro Tip
**The ORM Lie.**
ORMs (TypeORM, Prisma, Hibernate) lie to you. They make database calls look like simple function calls. They are not.

* *Junior:* `users.map(u => u.getProfile())` looks clean. "Look ma, no SQL!"
* *Senior:* Knows that line just triggered 10,000 SQL queries (N+1 problem) and just woke up the DBA. Always look at the raw SQL. If you don't know what generated SQL looks like, you are dangerous.
:::

**Real-world scenarios:**

* **The Missing Index:**
  * *Junior:* "The dashboard is loading in 10 seconds. I'll add a loading spinner."
  * *Senior:* "The dashboard is loading in 10 seconds. I ran `EXPLAIN ANALYZE`, found a sequential scan, added a composite index, and now it loads in 50ms."
* **The Migration Nightmare:**
  * *Junior:* Writes a migration to rename a column on a table with 100M rows.
  * *Senior:* "This will lock the table for 4 hours and take the site down. I'll create the new column, dual-write to both, backfill lazily, and then deprecate the old one."
* **The "Soft" Delete:**
  * *Junior:* `DELETE FROM users WHERE id = 1;`
  * *Senior:* "Never delete data. Set `deleted_at` timestamp. You will thank me when the CEO asks to restore that account next week."

---

## 4. API Design: The Contract

*Don't break your promises.*

Your API is a contract with the client (Frontend, Mobile App, Public Users). If you change the contract, you break their code.

* **Versioning:** `/v1/users`. If you make a breaking change, make it `/v2/users`.
* **Consistency:** Don't return `userId` in one endpoint and `user_id` in another.
* **Error Handling:** Return meaningful HTTP status codes (200, 400, 401, 500), not just "200 OK" with `error: true` in the body.

:::tip Pro Tip
**Design for the Client, not the Database.**
Don't just dump your database schema as JSON. Your API should be designed around how the client *uses* the data. If the client needs the user's name and their last 3 orders, give them an endpoint that returns exactly that. Don't make them make 4 separate calls.
:::

**Real-world scenarios:**

* **The Breaking Change:**
  * *Junior:* Renames a field in the API response. "It's cleaner."
  * *Senior:* "We can't rename that. The mobile app from 2 years ago still uses the old name and users haven't updated. We have to support both."
* **The Chatty API:**
  * *Junior:* Creates an endpoint for `getUser`, `getUserAddress`, `getUserOrders`. Frontend has to make 3 calls to render the profile page.
  * *Senior:* Creates a `getProfile` endpoint that returns everything needed for that view.
* **The Error Message:**
  * *Junior:* Returns `500 Internal Server Error` for everything.
  * *Senior:* Returns `400 Bad Request` with a message: "Password must be at least 8 characters."

---

## 5. Summary

* **Think about scale.** Will this work with 1M users? Will it work when they all click "Add to Cart" during Black Friday?
* **Understand trade-offs.** There is no silver bullet. There are only tradeoffs you haven't discovered yet.
* **Respect the data.** Schema changes are hard. Data migrations are where startups go to die.
* **Honor the contract.** Don't break the API. Unless you want the mobile team to send you passive-aggressive Slack messages for 6 months.

System design is the art of managing complexity. Also the art of knowing which complexity to ignore until it actually becomes a problem.
