---
id: module-2-org-design
title: "Module 2: Org Design (Conway's Architect)"
---
# Module 2: Org Design (Conway's Architect)

**The Org Chart is the Codebase.**

If you ship a broken org chart, you will ship broken software. (Conway's Law).
As a Director, your main architectural contribution is not classes and microservices; it is Teams and Squads.

---

## 1. Sizing and Splitting (Mitosis)
*The Dunbar Number of Engineering.*

Teams break when they get too big. Communication becomes exponential ($N^2$).
**Rule:** A team is 4-8 people. At 10, it's a social club. At 12, it's a disaster.
You must split teams *before* they break.

**Real-world scenarios:**
*   **The Megateam:**
    *   *Manager:* "I like having 14 direct reports."
    *   *Director:* "You are failing them. You can't do career dev for 14 people. We are splitting into 'Core Product' and 'Platform'. You get two Tech Leads."
*   **The Reorg Pain:**
    *   *Manager:* "The team hates reorgs."
    *   *Director:* "We are changing strategy. The structure must follow the strategy. We will rip the band-aid off quickly. One day of chaos is better than 6 months of misalignment."
*   **The "Bus Factor" Split:**
    *   *Manager:* Keeps all the "Payment" experts on one team.
    *   *Director:* "We are embedding a Payment expert into the Checkout team. We need to distribute the knowledge, not silo it."

---

## 2. Platform vs. Product (Stream-Aligned Teams)
*Optimizing for Flow.*

Don't create "Frontend" and "Backend" teams. That creates "Throw it over the wall" culture.
Create "Stream-Aligned" teams (Squads) that can ship end-to-end.
Create "Platform" teams that treat the Squads as customers.

**Real-world scenarios:**
*   **The Dependency Hell:**
    *   *Manager:* "We are blocked on the API team."
    *   *Director:* "I am dissolving the API team. I am moving the API engineers *into* the Product teams. You now own your own stack. No more excuses."
*   **The Resume-Driven Platform:**
    *   *Platform Manager:* "We are building a custom Kubernetes wrapper."
    *   *Director:* "Do the Product teams want this? No? Then stop. Your job is to reduce their friction, not build a shrine to your ego."
*   **The "Enablement" Team:**
    *   *Manager:* "We have no standards."
    *   *Director:* "I'm creating a small 'Architecture Enablement' team. They don't write features. They write the libraries and RFCs that keep us from becoming a spaghetti factory."
