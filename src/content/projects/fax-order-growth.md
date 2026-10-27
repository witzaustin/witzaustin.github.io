---
title: Finding the orders that never reached the platform
summary: SQL showed which segments were underrepresented on the platform compared to Medicare. Customer discovery explained why. Fixing the catalog and coverage rules drove 25% growth in legacy categories and 122% in new ones.
order: 3
tags: [SQL, Customer discovery, Growth]
result: 25% order growth in legacy categories · 122% in new categories
---

# Finding the orders that never reached the platform

**Role:** Co-owned the strategy · **Tools:** SQL, customer discovery · **Result:** 25% order growth in legacy categories, 122% in new ones

## The problem

Order growth in my legacy categories had gone flat, and the dashboard didn't explain why. The accepted explanation was that these categories were mature and had simply stopped growing.

I didn't think that had been tested, so I went looking at how orders were actually being placed rather than just at how many there were.

## How I found it

I used two methods together. SQL showed where the gap was. Customer conversations showed why it was there.

### 1. Sizing the gap with SQL

For each segment, I compared two numbers:

- Its share of all orders on our platform
- Its share of all Medicare orders

If a segment made up a bigger share of Medicare orders than of our platform's orders, the difference was volume that existed in the market but wasn't reaching us. Ranking segments by that gap showed where the biggest growth opportunities were.

**Example** (made-up segments and numbers, for illustration only):

| Segment | Share of platform orders | Share of Medicare orders | Gap |
|---|---|---|---|
| Segment A | 4% | 9% | 5 points |
| Segment B | 6% | 7% | 1 point |
| Segment C | 8% | 6% | None |

### 2. Asking our biggest customers why

The numbers showed where orders were missing but not the reason. So I went to our biggest customers and asked how they were placing orders in those segments and what was keeping them off the platform. Their answers pointed to specific gaps in our catalog and coverage criteria.

## What the gap was

Put together, the data and the conversations showed the same thing: a meaningful volume of recurring reorders was still going out by fax and never touching the platform. Facilities were reordering the same supplies month after month, but outside the system.

The reason was structural. The catalog and the coverage criteria weren't set up to handle those orders, so placing them digitally wasn't a real option for the people sending them.

## What we did

I took it to the team as a specific product change instead of an observation. Using the customer feedback, we restructured the catalog and updated the coverage criteria so those recurring orders could be placed on the platform. I co-owned that strategy through implementation and then applied the same approach to new categories.

## Result

- **25%** order growth in legacy categories.
- **122%** order growth in new categories.

## What I learned

The data told me where to look, and customers told me what to fix. Neither one would have been enough alone. The growth was there the whole time. Finding it meant treating a flat number as a question to investigate instead of a fact to accept.

*All examples on this page are illustrative. No real order data is shown.*
