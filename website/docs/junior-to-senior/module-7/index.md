---
id: module-7-mentoring
title: "Module 7: Mentoring & Onboarding (The Multiplier Effect)"
---
# Module 7: Mentoring & Onboarding (The Multiplier Effect)

**A Senior Engineer is a force multiplier.**

If you write 10x code, you are a 10x engineer.
If you help 5 people write 2x code, you are a 10x engineer.
The second one is scalable. The first one burns you out.

Mentoring is not "teaching people how to code." It is teaching them how to *think* and how to *navigate the system*.

---

## 1. Onboarding: The First 90 Days
*Don't throw them into the deep end.*

When a new hire joins, they are useless. Your job is to make them useful as fast as possible.
*   **The "First Commit":** Help them ship something to production on Day 1 or Day 2. Even if it's just a text change. It builds confidence.
*   **The Context Download:** Don't just point them to the docs. Walk them through the architecture. Explain the "why" behind the weird decisions.

**Real-world scenarios:**
*   **The Sink or Swim:**
    *   *Junior:* "Here is the repo. Good luck." (New hire quits in 3 months).
    *   *Senior:* "Let's pair on setting up your environment. Then we will pick a 'Good First Issue' and solve it together."
*   **The Shadow:**
    *   *Junior:* Does their work while the new hire watches silently.
    *   *Senior:* "I'm going to debug this issue. Watch what I do, and stop me if I'm moving too fast."
*   **The Documentation Update:**
    *   *Junior:* Complains that the setup docs are outdated.
    *   *Senior:* Asks the new hire to update the docs as they go through the setup. "You are the best person to catch missing steps."

---

## 2. Pair Programming: The High-Bandwidth Transfer
*It's not about typing speed.*

Pairing is the fastest way to transfer knowledge.
*   **Driver/Navigator:** One person types (Driver), the other thinks (Navigator). Switch every 30 mins.
*   **Think Aloud:** Narrate your thought process. "I'm looking at this log because..." "I suspect the issue is here because..."

This is how Juniors learn *how you debug*. That is more valuable than the code itself.

**Real-world scenarios:**
*   **The Unstuck Session:**
    *   *Junior:* Struggles alone for 4 hours.
    *   *Senior:* "You seem stuck. Let's pair for 15 minutes." (Solves it in 5 minutes, explains how).
*   **The Design Review:**
    *   *Junior:* Writes the code, then asks for feedback.
    *   *Senior:* Pairs on the *design* before a single line of code is written. "Let's sketch out the data model first."
*   **The Reverse Shadow:**
    *   *Junior:* Watches the Senior code.
    *   *Senior:* "You drive. I'll navigate." (Forces the Junior to think and type).

---

## 3. Code Review as Mentorship
*Teach, don't correct.*

Don't just say "Fix this." Ask "Why did you choose this approach?"
*   **Socratic Method:** "What happens if the list is empty?" "How does this handle network errors?"
*   **Praise:** "Great use of the Adapter pattern here!" Positive reinforcement works.

:::tip Pro Tip
**Sponsorship vs. Mentorship.**
Mentorship is giving advice. Sponsorship is giving opportunity.
*   **Mentor:** "Here is how you give a talk."
*   **Sponsor:** "I was asked to speak at this conference, but I think you should do it instead. I'll help you prepare."
:::

**Real-world scenarios:**
*   **The Suggestion:**
    *   *Junior:* "Change this loop to a map."
    *   *Senior:* "This loop works, but `map` is more idiomatic here because we are transforming data. Here is a link to the docs."
*   **The Offline Discussion:**
    *   *Junior:* Writes 50 comments on a PR.
    *   *Senior:* "There are a lot of structural comments here. Let's hop on a call to discuss the overall approach."
*   **The Nitpick:**
    *   *Junior:* "You missed a space here."
    *   *Senior:* (Ignores formatting). "This logic seems to have a security vulnerability. Let's discuss."

---

## 4. Psychological Safety
*Make it safe to fail.*

If a Junior is afraid to ask questions, they will hide their mistakes. You need to create an environment where it is okay to say "I don't know."

*   **Admit your own ignorance:** "I actually don't know how that works. Let's figure it out together."
*   **Own your mistakes:** "I broke production yesterday. Here is what I learned."

**Real-world scenarios:**
*   **The Stupid Question:**
    *   *Junior:* Afraid to ask what an acronym means.
    *   *Senior:* "Wait, what does 'ACID' stand for again? I always forget the 'I'." (Even if they know, they normalize asking).
*   **The Public Failure:**
    *   *Junior:* Hides a mistake.
    *   *Senior:* Posts in the team channel: "I just accidentally deleted the dev database. Restoring now. My bad!"
*   **The Blame Game:**
    *   *Junior:* "It was the frontend team's fault."
    *   *Senior:* "We (the engineering team) missed this requirement. How do we fix it?"

---

## 5. Summary
*   **Onboard fast.** Get them shipping.
*   **Pair often.** Transfer your brain.
*   **Ask questions.** Make them think.
*   **Be human.** Create safety.

You rise by lifting others.
