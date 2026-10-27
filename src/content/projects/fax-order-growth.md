---
title: Finding the orders that never reached the platform
summary: SQL showed recurring orders still going out by fax. Fixing the catalog and coverage rules to capture them drove 25% growth in legacy categories and 122% in new ones.
order: 2
tags: [SQL, Growth, Analysis]
result: 25% order growth in legacy categories · 122% in new categories
---

# Finding the orders that never reached the platform

**Role:** Co-owned the strategy · **Tools:** SQL · **Result:** 25% order growth in legacy categories, 122% in new ones

## The problem

Order growth in my legacy categories had gone flat, and the dashboard didn't explain why. The accepted explanation was that these categories were mature and had simply stopped growing.

I didn't think that had been tested, so I went looking at how orders were actually being placed rather than just at how many there were.

## What I found

Using SQL across order and catalog data, I found a pattern: a meaningful volume of recurring reorders was still going out by outbound fax and never touching the platform. Facilities were reordering the same supplies month after month, but outside the system.

The reason was structural. The catalog and the coverage criteria weren't set up to handle those orders, so placing them digitally wasn't a real option for the people sending them.

[TODO: optional, one or two sentences on how you sized it, e.g. which tables you joined or how you estimated the volume. Keep any internal numbers out.]

## What we did

I took it to the team as a specific product change instead of an observation. We restructured the catalog and updated the coverage criteria so those recurring orders could be placed on the platform. I co-owned that strategy through implementation and then applied the same approach to new categories.

## Result

- **25%** order growth in legacy categories.
- **122%** order growth in new categories.

## What I learned

The answer is usually in the workflow, and the metric only tells you where to look. The growth was there the whole time. Finding it meant treating a flat number as a question to investigate instead of a fact to accept.
