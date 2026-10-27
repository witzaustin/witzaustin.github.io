---
title: "Prescription Quantity: from launch to the highest-volume workflows"
summary: Replaced duplicate SKUs for every quantity option with one SKU per product and a calculated quantity. Helped launch it, then owned it past rollout. Ordering errors dropped 30%.
order: 2
tags: [Product, Launch, Feature ownership]
result: 30% fewer ordering errors · live on the highest-volume ordering workflows
---

# Prescription Quantity: from launch to the highest-volume workflows

**Role:** Helped launch it, then owned it after rollout · **Partners:** Product, engineering, clinical users · **Result:** Ordering errors cut by 30%

## The problem

Parachute was originally built around bent metal DME: walkers, wheelchairs, hospital beds, and similar equipment. For those products the quantity is always 1, so the platform never needed quantity to change.

That stopped working once supplies categories like Diabetes, Wound Care, and Urology came onto the platform. For supplies, the right quantity depends on how often the patient uses the product and how many days the order covers. Because quantity was hard-coded into each SKU, the only way to support those options was to create a separate SKU for every combination of change frequency and day supply.

That caused problems for everyone:

- **For us**, the catalog filled up with repetitive, redundant SKUs.
- **For suppliers**, it meant less control over their own SKUs.
- **For clinicians and patients**, orders often had the wrong quantity, because quantity couldn't adjust to the prescription.

## How it works

Prescription Quantity replaced all of those duplicates with one true SKU per product. Instead of picking a SKU that has the quantity built in, the platform calculates the quantity from the change frequency and day supply, then rounds up to the nearest box size the product is dispensed in.

**Example** (generic, for illustration only):

| Input | Value |
|---|---|
| Change frequency | Once every 3 days |
| Day supply | 90 days |
| Units needed | 90 ÷ 3 = 30 |
| Dispensed in | Boxes of 5 |
| Quantity ordered | 6 boxes |

## The launch

I worked with product and engineering to turn clinical ordering workflows into requirements. Clinical users describe what they need in terms of how a prescription is written and filled. Engineering needs that as logic with the edge cases defined. My part was translating between the two and writing out the edge case logic.

I also helped test before release, wrote test plans, and supported a phased rollout so we could measure results before expanding.

## After launch

The harder work came after the first rollout. As the feature moved into more complex workflows, it ran into edge cases the original design hadn't anticipated. I became the main point of contact for feedback, which meant:

- Running training sessions and live demos for users
- Taking customer calls about how the feature behaved
- Sorting every reported problem into one of three buckets: a bug, a gap in how we'd explained the feature, or a real hole in the design

That sorting turned out to be the most useful part. Patching every complaint one at a time would have kept us busy. Looking at the pattern across edge cases told us what to build next, and a few times it showed us that an original design assumption was wrong and had to change.

## Result

- Prescription Quantity now runs on the **highest-volume** clinical ordering workflows.
- Ordering errors dropped by **30%**.
- I now help plan the roadmap for future Prescription Quantity rollouts to new product categories with product and engineering leadership.

## What I learned

The rollout is where the real requirements show up. Holding onto the original spec too tightly would have cost us the feature.
