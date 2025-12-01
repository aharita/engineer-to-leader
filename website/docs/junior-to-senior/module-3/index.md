---
id: module-3-code-quality
title: "Module 3: Code Quality & Review (Writing for Humans)"
---

# Module 3: Code Quality & Review (Writing for Humans)

**Code is read 10x more than it is written.**

You write it once. You (and your team) will read it 100 times over the next 2 years while debugging a production outage at 3 AM.

As a Junior, you write code for the compiler. "If it compiles, ship it."
As a Senior, you write code for *humans*. "If my teammate can't understand this in 5 seconds, it's bad code."

---

## 1. The "Clever" Code Trap
*Complexity is the enemy.*

There is a temptation to show off how smart you are. You use one-liners, obscure language features, and complex abstractions. You feel like a wizard.

You are not a wizard. You are an asshole.

"Clever" code is hard to debug, hard to test, and hard to extend. **Boring code is good code.**

**Real-world scenarios:**
*   **The One-Liner:**
    *   *Junior:* Writes a 4-line nested ternary operator in JavaScript. `const status = isUser ? (isActive ? 'active' : 'inactive') : (isGuest ? ...`
    *   *Senior:* Writes an `if/else` block. It takes 6 lines. It is readable.
*   **The Abstraction:**
    *   *Junior:* Creates a `BaseAbstractFactoryManager` to handle a simple button click.
    *   *Senior:* Just writes a function called `handleClick`.
*   **The Regex Wizard:** You need to validate an email.
    *   *Junior:* Writes a 50-character Regex that they found on a forum. It has a catastrophic backtracking bug.
    *   *Senior:* Uses a well-tested library like `validator.js`.

---

## 2. PR Etiquette: How to Review and Be Reviewed
*Code review is not a battleground.*

**When you are the Reviewer:**
*   **Be kind.** Critique the code, not the person. "This variable name is unclear" vs "You are bad at naming."
*   **Focus on the important stuff.** Architecture, bugs, security, readability. Don't nitpick formatting (use a linter for that).
*   **Explain "Why".** Don't just say "Change this." Say "Change this because it causes a race condition."

**When you are the Author:**
*   **Don't take it personally.** They are finding bugs in the code, not flaws in your soul.
*   **Context is King.** Write a good PR description. Explain *why* you made these changes. Add screenshots.
*   **Review your own code first.** Don't waste your team's time with typos and console.logs you forgot to delete.

:::tip Pro Tip
**Code Reviews are Asynchronous Pair Programming.**
Don't just look for bugs. Look for opportunities to teach and learn. If you see a cool technique, comment: "I learned something new here!" If you see a confusing block, ask: "Can you explain how this works? I want to understand."
:::

**Real-world scenarios:**
*   **The Giant PR:**
    *   *Junior:* Opens a PR with 50 files changed and "Misc fixes" as the description.
    *   *Senior:* Splits it into 3 small, focused PRs. "Feat: Add User Model", "Feat: Add API Endpoint", "Feat: Update UI".
*   **The Nitpicker:**
    *   *Junior:* Comments on 10 different lines about missing semicolons.
    *   *Senior:* Configures Prettier/ESLint to run automatically on commit, so humans never have to discuss semicolons again.
*   **The Ghost Reviewer:**
    *   *Junior:* Approves the PR without reading it because "it looks complicated."
    *   *Senior:* "I don't understand the logic in `UserService.ts`. Can we hop on a call to walk through it?"

---

## 3. Testing: The Safety Net
*Tests are documentation that doesn't lie.*

If you don't write tests, you don't care about your code. But be careful: **Code Coverage is a vanity metric.** You can have 100% coverage and 0% confidence if your tests don't assert anything meaningful.

Tests give you the confidence to refactor. They document how the code is *supposed* to behave.

**Real-world scenarios:**
*   **The Vanity Metric:**
    *   *Junior:* "I hit 100% test coverage!" (By writing tests that just run the function and check `expect(true).toBe(true)`).
    *   *Senior:* "I don't care about the percentage. I care about the *critical path*. Does the payment actually charge the card? Test that. Ignore the getters and setters."
*   **The Tautology Test:**
    *   *Junior:* Mocks the database, mocks the network, mocks the file system. The test checks if the mock was called.
    *   *Senior:* "You are testing your mocks, not your code. You need an integration test that actually hits a real database (in Docker) to know if your SQL is valid."
*   **The Refactor Fear:** You need to upgrade a library.
    *   *Junior:* Terrified to touch anything because they don't know what will break.
    *   *Senior:* Bumps the version, runs the test suite. Green? Ship it. Red? Fix it. Confidence.

---

## 4. Technical Debt: The Credit Card
*Buy now, pay later (with interest).*

Technical debt is fine if you take it on *consciously*. "We need to ship for the demo on Friday, so we will hardcode this value and fix it next week." That is a business decision.

"I was too lazy to write a proper loop so I copy-pasted this block 5 times" is not technical debt. That is just bad engineering.

**Real-world scenarios:**
*   **The Hack:**
    *   *Junior:* Hacks it together. Forgets about it.
    *   *Senior:* Hacks it together. Adds a `TODO: Refactor this after demo` comment. Creates a Jira ticket to track the debt.
*   **The Dependency Hell:**
    *   *Junior:* Installs 5 different libraries to do the same thing because they didn't check `package.json`.
    *   *Senior:* "We already have `lodash`. Use that instead of adding `underscore`."
*   **The Scalability Wall:**
    *   *Junior:* Writes a query that fetches all users into memory to filter them. Works fine with 10 users.
    *   *Senior:* "This will crash when we hit 10,000 users. I'll move the filtering to the database level."

---

## 5. Summary
*   **Write for humans.** Be boring.
*   **Small PRs.** Context is key.
*   **Don't be defensive.** Feedback makes you better.
*   **Test your code.** Don't rely on hope.

Quality is what happens when you care.
