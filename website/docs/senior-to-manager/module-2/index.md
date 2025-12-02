---
id: module-2-psychology
title: "Module 2: High-Performance Psychology (People)"
---
# Module 2: High-Performance Psychology (People)

**Debug the human element.**

Welcome to the hardest part of the job. Servers do exactly what you tell them to do (mostly). People do what they *feel* like doing, based on a complex algorithm of childhood trauma, caffeine intake, and whether their cat vomited on the carpet this morning.

You thought Computer Science was hard? Try "Human Science." There is no stack trace when a Senior Engineer starts crying in a Zoom room. This module is about the skills that separate great managers from the ones who get talked about in therapy sessions.

---

## 1. One-on-Ones: The Anti-Status Update

*Moving from "What did you do?" to "How are you doing?"*

If you use your 1:1 time to ask "Is the API done?", you are a bad manager. That is what the stand-up is for. That is what the Jira board is for. If you can answer the question by looking at a dashboard, do not ask it in a meeting.

The 1:1 is the only sacred time you have to uncover the emotional state of your direct reports. It is for venting, career planning, and relationship building. It is awkward. It is necessary.

**Real-world scenarios:**

* **The "Jira Reader":** You spend 30 minutes reading ticket numbers out loud.
  * *Result:* Your report disengages and starts playing Wordle in another tab.
  * *Fix:* Ask, "What is the most annoying thing about your job right now?" and shut up for 60 seconds.
* **The "Awkward Silence":** You ask "How are things?" and they say "Good." You stare at each other.
  * *Result:* Wasted time.
  * *Fix:* Ask specific questions. "Who on the team is crushing it?" "If you were me, what would you change?"
* **The "Rant Session":** Your report spends 30 minutes complaining about the Product Manager.
  * *Result:* They feel better; you feel drained.
  * *Fix:* Listen for 20 mins (venting), then Pivot: "Okay, I hear you. Now, what is *one thing* within our control we can do about it?"

---

## 2. Radical Candor for Introverts

*Giving feedback without ruining relationships.*

Engineers are professionally trained to avoid conflict. We interact with machines because machines don't get offended when you correct their syntax. But as a manager, if you don't tell someone they have spinach in their teeth (or that their code is unreadable spaghetti), you are failing them. This is called "Ruinous Empathy"—being so nice that you let someone fail.

**Real-world scenarios:**

* **The "Shit Sandwich":** You need to tell Dave his communication sucks.
  * *The Attempt:* "Dave, great hair today. You interrupt people constantly and everyone hates it. But hey, nice shoes!"
  * *The Result:* Dave thinks you like his style and ignores the middle part. Be direct: "Dave, when you interrupt, it shuts down the junior devs. It needs to stop."
* **The "Slow Boil":** You are annoyed by Sarah's lateness for 6 months but say nothing. Finally, you explode and fire her.
  * *The Result:* Sarah sues you because she had no idea it was a problem. Feedback must be immediate and continuous.
  * *The Fix:* "Hey, you were late to standup again. It disrespects the team's time. Please fix it."
* **The Hygiene Talk:** The hardest boss battle. Someone smells.
  * *The Fear:* "I can't say that."
  * *The Reality:* If you don't say it, the team will ostracize them. You have to be the parent. "This is awkward, but I've noticed an odor. I want you to succeed here, so I need you to address this." (Then go die of embarrassment in your car).

---

## 3. Debugging Underperformance (The PIP)

*Diagnostic tools before the legal paperwork.*

When an engineer stops performing, your instinct is "they are lazy." Usually, you are wrong. It is almost always one of three things: Capability (can't do it), Motivation (won't do it), or Environment (blocked from doing it). Before you call HR to draft a Performance Improvement Plan (PIP)—which is basically corporate for "Pre-Firing"—you need to debug the human.

**Real-world scenarios:**

* **The "Life Event":** Your best coder suddenly misses deadlines.
  * *Bad Debug:* "Work harder."
  * *Good Debug:* "Everything okay at home?" Turns out they are going through a divorce or just had a baby. You don't need a PIP; you need to give them a lighter load for a month.
* **The "Peter Principle":** You promoted a great backend dev to a frontend role. They are failing.
  * *Bad Debug:* "You're failing."
  * *Good Debug:* You put a fish in a tree and expected it to climb. Move them back to the water or help them learn to climb.
* **The "Toxic PIP":** You write a PIP with vague goals like "Code better."
  * *Result:* They survive 30 days, nothing changes, you fire them, they badmouth you on Glassdoor.
  * *Fix:* Metrics. "Submit 5 PRs per week." "Reduce bugs by 20%." Make it pass/fail.

---

## 4. Hiring: Culture Add vs. Culture Fit

*Avoiding the "Hire clones of myself" trap.*

"Culture Fit" is often code for "Someone I’d like to have a beer with." This leads to a team of 10 white dudes who all went to the same college and agree on everything. That is not a team; that is a fraternity. You want "Culture Add"—someone who brings a perspective you are missing.

**Real-world scenarios:**

* **The "Beer Test":** "I don't think they'd fit in at happy hour."
  * *Reality Check:* You aren't hiring a drinking buddy. You are hiring someone to scale Postgres. Do they know SQL? Good. Hire them.
* **The "Devil's Advocate":** You interview someone who argues with you about your architecture.
  * *Ego Response:* "They are difficult."
  * *Leader Response:* "They found a hole in my logic. I need them on the team to stop me from doing stupid things."
* **The "Paper Tiger":** Resume has Google, Meta, and Netflix. They can invert a binary tree on a whiteboard.
  * *Reality:* They are an arrogant jerk who refuses to write documentation.
  * *Decision:* Pass. A brilliant jerk will destroy your team's velocity faster than a junior dev who deletes the database.
* **Neurodiversity & User Manuals:** A significant percentage of high-performing engineers are neurodivergent (ADHD, ASD).
  * *The Trap:* Treating everyone the same. "Look me in the eye" can be torture for some. "Vague instructions" are impossible for others.
  * *The Fix:* The "Manager README." Ask them explicitly: "Do you prefer feedback in writing first so you can process it, or verbal?" "Do you need body-doubling to focus, or total isolation?" Optimize the environment for their operating system, not yours.

---

## 5. The "Gold Handcuffs" Dilemma

*Strategies for retaining high-performers who are bored.*

You have a Senior Staff Engineer. They have been there 6 years. They own all the critical systems. They are vested and paid 50% above market rate. They are also incredibly bored. They won't leave (money is too good), so they start "creating work" to feel alive.

**Real-world scenarios:**

* **Resume Driven Development (RDD):** They suggest rewriting the stable billing system in Rust/Haskell/Go "for performance."
  * *Translation:* "I am bored and want to learn a new language on company time."
  * *Action:* Direct this energy to a side project or a genuine R&D spike, but do not let them rewrite the billing system.
* **The "Gatekeeper":** They stop documenting things so they remain indispensable.
  * *Action:* Make "Documentation" a requirement for their next performance review. Force them to teach.
* **The "Space Force":** Give them a "Special Ops" mission.
  * *Action:* "We need to investigate moving to Kubernetes" or "We need a 3-year tech vision." Give them a hard, ambiguous problem that doesn't block the rest of the team's daily shipping cadence.

---

## 6. Summary

* **1:1s are not status updates.** They're for emotions, growth, and trust.
* **Give feedback immediately.** Silence is not kindness; it's neglect.
* **Debug the human.** Underperformance is usually environment or capability, not laziness.
* **Hire for culture add.** Not culture fit. Diversity makes better decisions.
* **Channel boredom.** Give high-performers hard problems, not resume padding projects.

People are the hardest algorithm you'll ever debug.
