---
title: Auditing 20,000 SKUs with Claude
summary: A Claude skill that checks catalog listings against manufacturer sources and flags each mismatch with the source it used.
order: 1
tags: [AI, Claude, Data quality]
result: 20,000 SKUs audited · hundreds of errors found and fixed
---

# Auditing 20,000 SKUs with Claude

**Role:** Built it myself · **Tools:** Claude · **Scale:** 20,000 SKUs

## The problem

On a medical supply ordering platform, a listing with the wrong specification or a description that doesn't match the manufacturer causes real trouble. Either the product doesn't show up when a clinician searches for it, or the order goes through and fails later on.

The only reliable check was a person opening a listing, finding the manufacturer's source, and comparing the two field by field. With tens of thousands of SKUs, nobody could do that for the whole catalog. In practice we spot-checked and fixed problems when someone complained.

## What I built

I built a Claude skill that runs that comparison for the whole catalog. For each listing, it finds the manufacturer's published information, compares it to our record, and flags anything that doesn't match or would hurt searchability.

The most important design choice was that **every flag cites the source it used**. A flag that says "this is wrong" isn't useful on its own. A flag that shows our value, the manufacturer's value, and where the manufacturer's value came from can be checked in seconds.

## How it works

1. **Define the standard.** I wrote out what "accurate" means for a listing: which fields have to match the manufacturer, what counts as a searchability problem, and what to ignore.
2. **Structure the inputs.** A lot of the work was organizing product information so the model could find and reason over it reliably. When the output was weak, the fix was usually in how the information was structured, not in the prompt.
3. **Compare and flag.** The skill checks each listing and produces a row for every issue it finds: the field, our current value, the source value, a link to the source, and the type of problem.
4. **Review and fix.** A person reviews the flags, confirms the real errors, and corrects them in the catalog. Nothing changes in the catalog without review.

**Example output** (made-up product, for illustration only):

| Listing | Field | Our catalog | Manufacturer | Issue |
|---|---|---|---|---|
| Lancets, box of 100 | Gauge | 28G | 30G | Spec mismatch |
| Lancets, box of 100 | Description | "Lancet" | "Safety lancet, single use" | Missing search terms |

<!-- agent-demo -->

## Result

- Audited **20,000 SKUs** against manufacturer sources.
- Found and fixed **hundreds** of accuracy and searchability errors that would have been impractical to catch by hand.
- Auditing became something we could run whenever we wanted instead of after a complaint. In catalog reviews, the question shifted from whether we could afford to check to which categories to check first.

## What I learned

- **Reviewable beats clever.** Citing the source on every flag made the output something people trusted and could act on quickly.
- **Most fixes were in the inputs.** When the skill got something wrong, the cause was usually how the product information was organized.
- **The first version was too strict.** It treated any value that wasn't typed out exactly the same as the manufacturer's as an error, so a listing that said the same thing in a slightly different format got flagged. I loosened the standard so the skill checks whether our value means the same thing as the source, not whether it's written character for character the same.

*All examples on this page are illustrative. No real catalog data is shown.*
