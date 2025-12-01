---
id: module-4-system-design
title: "Module 4: System Design Basics (Thinking in Boxes)"
---

# Module 4: System Design Basics (Thinking in Boxes)

**Stop seeing lines of code. Start seeing boxes and arrows.**

As a Junior, your world is a function. Maybe a class.
As a Senior, your world is the System.

You need to understand how your code fits into the bigger picture. How does the frontend talk to the backend? How does the backend talk to the database? What happens when 10,000 people hit that button at the same time?

---

## 1. The "It Works on My Machine" Fallacy
*Your machine is not production.*

Your laptop has 1 user (you). Production has 100,000. Things break at scale.
*   **Latency:** That API call takes 10ms locally. It takes 500ms over 3G in a tunnel.
*   **Concurrency:** Two users try to buy the last ticket at the exact same millisecond. Who wins?
*   **Failure:** The database *will* go down. The 3rd party API *will* timeout. What happens then?

**Real-world scenarios:**
*   **The N+1 Problem:**
    *   *Junior:* Writes a loop that makes a database query for every item in a list. Works fine with 5 items.
    *   *Senior:* Realizes this will kill the database with 1000 items. Rewrites it to fetch all data in one query.
*   **The Timeout:**
    *   *Junior:* Sets the HTTP timeout to 60 seconds because "sometimes it's slow."
    *   *Senior:* Sets it to 5 seconds. "If it takes longer than 5 seconds, it's failed. Fail fast so we don't tie up resources."
*   **The Race Condition:**
    *   *Junior:* "I checked if the file exists, then I opened it."
    *   *Senior:* "Between the check and the open, another process deleted it. Use an atomic operation."

---

## 2. Trade-offs: There is No "Best" Solution
*Everything sucks in its own way.*

Junior engineers look for the "best" database. Senior engineers ask: "What are we optimizing for?"
*   **SQL vs NoSQL?** It depends. Do you need strict consistency (Bank) or high write throughput (Twitter likes)?
*   **Monolith vs Microservices?** It depends. Do you need simplicity (Startup) or independent scaling (Netflix)?

If you answer a system design question without saying "It depends," you are wrong.

**Real-world scenarios:**
*   **The Shiny New Tool:**
    *   *Junior:* "Let's use this new Graph Database because it's cool!"
    *   *Senior:* "Our data is relational. Using a Graph DB will add complexity without benefit. Let's stick to Postgres."
*   **The Cache Invalidation:**
    *   *Junior:* "Let's cache everything forever to make it fast!"
    *   *Senior:* "How do we clear the cache when data changes? Stale data is worse than slow data."
*   **The Eventual Consistency:**
    *   *Junior:* "I wrote to the database, but when I read it back immediately, it's not there!"
    *   *Senior:* "We are using a read replica. There is a replication lag. We need to handle that in the UI."

---

## 3. Database Basics: The Heart of the System
*Data has gravity.*

You can change code easily. Changing the database schema after you have 1TB of data is a nightmare. Get the data model right (or mostly right) early on.

*   **Normalization:** Don't duplicate data unless you have a good reason (read performance).
*   **Indexing:** If your query is slow, you probably missed an index.
*   **Transactions:** If money is involved, you need ACID transactions.

**Real-world scenarios:**
*   **The Missing Index:**
    *   *Junior:* "The dashboard is loading in 10 seconds."
    *   *Senior:* Runs `EXPLAIN ANALYZE`. Adds an index on the `created_at` column. Dashboard loads in 100ms.
*   **The Bad Migration:**
    *   *Junior:* Renames a column in a migration script.
    *   *Senior:* "This will lock the table for 10 minutes and cause downtime. We need to add the new column, backfill data, switch code to use new column, then drop the old one."
*   **The Data Integrity:**
    *   *Junior:* Deletes a user but forgets to delete their posts.
    *   *Senior:* Uses Foreign Keys with `ON DELETE CASCADE` (or soft deletes) to ensure data consistency.

---

## 4. API Design: The Contract
*Don't break your promises.*

Your API is a contract with the client (Frontend, Mobile App, Public Users). If you change the contract, you break their code.

*   **Versioning:** `/v1/users`. If you make a breaking change, make it `/v2/users`.
*   **Consistency:** Don't return `userId` in one endpoint and `user_id` in another.
*   **Error Handling:** Return meaningful HTTP status codes (200, 400, 401, 500), not just "200 OK" with `error: true` in the body.

:::tip Pro Tip
**Design for the Client, not the Database.**
Don't just dump your database schema as JSON. Your API should be designed around how the client *uses* the data. If the client needs the user's name and their last 3 orders, give them an endpoint that returns exactly that. Don't make them make 4 separate calls.
:::

**Real-world scenarios:**
*   **The Breaking Change:**
    *   *Junior:* Renames a field in the API response. "It's cleaner."
    *   *Senior:* "We can't rename that. The mobile app from 2 years ago still uses the old name and users haven't updated. We have to support both."
*   **The Chatty API:**
    *   *Junior:* Creates an endpoint for `getUser`, `getUserAddress`, `getUserOrders`. Frontend has to make 3 calls to render the profile page.
    *   *Senior:* Creates a `getProfile` endpoint that returns everything needed for that view.
*   **The Error Message:**
    *   *Junior:* Returns `500 Internal Server Error` for everything.
    *   *Senior:* Returns `400 Bad Request` with a message: "Password must be at least 8 characters."

---

## 5. Summary
*   **Think about scale.** Will this work with 1M users?
*   **Understand trade-offs.** There is no silver bullet.
*   **Respect the data.** Schema changes are hard.
*   **Honor the contract.** Don't break the API.

System design is the art of managing complexity.
