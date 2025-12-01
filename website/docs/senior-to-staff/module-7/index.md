---
id: module-7-glue
title: "Module 7: Glue Work (The Janitor)"
---
# Module 7: Glue Work (The Janitor)

**Doing the unglamorous work that keeps the ship afloat.**

Staff Engineers are often the "High-Paid Janitors" of the codebase.
Juniors want Greenfield projects. Staff Engineers know that the Brownfield is where the money is made. You fix the build pipeline. You upgrade the React version. You standardize the logging.

---

## 1. Technical Archaeology
*Understanding the 'Why' of legacy code.*

Legacy code isn't bad code. It's code that paid for your salary.
Don't mock it. Understand it.
Staff Engineers dive into the darkest, oldest parts of the repo (The "Mordor" directory) and clean it up.

**Real-world scenarios:**
*   **The "Rewrite" Impulse:**
    *   *Senior:* "This Perl script is trash. Delete it."
    *   *Staff:* Traces the script. Realizes it generates the invoice for the company's biggest client. Adds tests to it. Dockerizes it. Documents it. *Then* plans a rewrite.
*   **The Bus Factor:**
    *   *Senior:* Avoids the billing module because it's scary.
    *   *Staff:* Deliberately learns the billing module *because* it's scary. Becomes the safety net.
*   **The Magic Number:**
    *   *Senior:* "Why is this timeout set to 423ms? That's random."
    *   *Staff:* Digs through git history from 5 years ago. Finds a commit message explaining a specific race condition with the load balancer. Documents it so nobody changes it back to 500ms and breaks prod.

---

## 2. Developer Experience (DevEx)
*If the team is slow, it's your fault.*

If it takes 20 minutes to run tests, nobody will run tests.
If it takes 3 days to onboard a new hire, you are burning money.
Staff Engineers treat "Other Engineers" as their customers.

**Real-world scenarios:**
*   **The CI/CD Pipeline:**
    *   *Senior:* Complains that the build is slow.
    *   *Staff:* Profiles the build. Caches the `node_modules`. Parallelizes the test runner. Cuts build time from 20m to 5m. The whole team moves 4x faster.
*   **The Local Env:**
    *   *Senior:* "Works on my machine."
    *   *Staff:* Creates a `docker-compose` setup that works on *every* machine with one command.
*   **The Documentation Rot:**
    *   *Senior:* "The README is out of date. Oh well."
    *   *Staff:* "I'm setting up a process where we treat Docs like Code. Broken links fail the build. Stale docs are flagged."

---
