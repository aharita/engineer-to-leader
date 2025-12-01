# Org Design Principles

## The Hook
**You ship your Org Chart.**

(Conway's Law): The structure of your software will mirror the structure of your communication.

If you have a backend team and a frontend team, you will have an API boundary problem. If you want a unified product, create a unified "Feature Team."

## The Framework: Minimize Dependencies
Your goal as a Director is to design teams that can run independently.

*   **Component Teams:** (DB Team, UI Team). Good for standardization, bad for speed. High dependency.
*   **Feature Teams:** (Checkout Team, Search Team). Good for speed, bad for redundancy. Low dependency.
*   **The Move:** Shift toward Feature Teams as you scale to reduce the "coordination tax."

## The Script
**Scenario:** You notice two teams constantly blocked by waiting on each other.

**Say this:**
> "We are spending too much time in coordination meetings between Team A and Team B. I propose we embed a backend engineer from Team A into Team B for this quarter. Let's internalize the dependency so they can ship without waiting."
