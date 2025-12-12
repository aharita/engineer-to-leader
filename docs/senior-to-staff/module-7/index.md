---
id: module-7-glue
title: "Module 7: Glue Work (The Janitor)"
---
# Module 7: Glue Work (The Janitor)

**Doing the unglamorous work that keeps the ship afloat. And the toilets unclogged.**

Staff Engineers are often the "High-Paid Janitors" of the codebase.
Juniors want Greenfield projects. They want to write Rust in a vacuum.
Staff Engineers know that the Brownfield is where the money is made. You fix the build pipeline. You upgrade the React version. You standardize the logging. You do the dishes.

---

## 1. Technical Archaeology

*Understanding the 'Why' of legacy code. Before you delete it and bankrupt the company.*

Legacy code isn't bad code. It's code that paid for your salary while you were still in high school.
Don't mock it. Understand it.
Staff Engineers dive into the darkest, oldest parts of the repo (The "Mordor" directory) and clean it up.

**Real-world scenarios:**

*   **The "Rewrite" Impulse:**
    *   *Senior:* "This Perl script is trash. It looks like it was written by a drunk raccoon. Delete it."
    *   *Staff:* Traces the script. Realizes it generates the invoice for the company's biggest client. Adds tests to it. Dockerizes it. Documents it. *Then* plans a rewrite. "We do not delete the money-printer."
*   **The Bus Factor:**
    *   *Senior:* Avoids the billing module because it's scary and written in COBOL.
    *   *Staff:* Deliberately learns the billing module *because* it's scary. Becomes the safety net. "If Dave gets hit by a bus, I can still run payroll."
*   **The Magic Number:**
    *   *Senior:* "Why is this timeout set to 423ms? That's random. I'm changing it to 500ms because I like round numbers."
    *   *Staff:* Digs through git history from 5 years ago. Finds a commit message explaining a specific race condition with the load balancer. Documents it. "Touch this number and the site dies."

---

## 2. Developer Experience (DevEx)

*If the team is slow, it's your fault. Fix the road.*

If it takes 20 minutes to run tests, nobody will run tests. They will play Xbox.
If it takes 3 days to onboard a new hire, you are burning money.
Staff Engineers treat "Other Engineers" as their customers. And their customers are angry.

**Real-world scenarios:**

*   **The CI/CD Pipeline:**
    *   *Senior:* Complains that the build is slow. "Guess I'll go get coffee."
    *   *Staff:* Profiles the build. Caches the `node_modules`. Parallelizes the test runner. Cuts build time from 20m to 5m. The whole team moves 4x faster. "Get back to work."
*   **The Local Env:**
    *   *Senior:* "Works on my machine. You must have installed the wrong version of Node."
    *   *Staff:* Creates a `docker-compose` setup that works on *every* machine with one command. "If it doesn't work, it's my fault. But it will work."
*   **The Documentation Rot:**
    *   *Senior:* "The README is out of date. Oh well. I'll just ask in Slack."
    *   *Staff:* "I'm setting up a process where we treat Docs like Code. Broken links fail the build. Stale docs are flagged. If you ask a question that is in the README, I will send you a link to 'Let Me Google That For You'."
*   **The Linter Wars:**
    *   *Senior:* Argues about semicolons in code review.
    *   *Staff:* Adds Prettier to the pre-commit hook. "The machine decides now. Argue with the robot."
