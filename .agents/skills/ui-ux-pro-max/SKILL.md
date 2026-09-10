---
name: ui-ux-pro-max
description: "UI/UX design intelligence toolkit providing searchable databases of UI styles, color palettes, font pairings, chart types, and UX guidelines. Consult during Design and Develop phases to inform component-level details (spacing scale, type ramp, color contrast, form UX patterns) per RageByte MASTER Architecture Section 10."
---

# UI/UX Pro Max Skill — Design Intelligence

This skill provides access to the local UI/UX Pro Max intelligence engine installed in `tools/ui-ux-pro-max-skill`.

## Role in RageByte Architecture
Per Section 10 of the RageByte Architecture Master Specification:
- **Authority Tier:** Tier 2 (subordinate only to the RageByte MASTER design system).
- **Role:** Reference library for design-system research, general UI/UX rules, typography scales, color theory, and stack-specific patterns.
- **When Consulted:** During Design and Develop phases when deciding component-level details not yet specified in the MASTER design system.
- **Conflict Rule:** If UI UX Pro Max suggests something conflicting with the RageByte MASTER design system, the MASTER design system wins.

## Querying the Search Tool
The search CLI is located at `tools/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py` and runs with Python:

```bash
python tools/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

### Search Domains
- `ux` — UX best practices, accessibility (contrast, touch targets, keyboard nav, ARIA), and anti-patterns
- `style` — UI styles (glassmorphism, minimalism, brutalism, dark mode OLED) + CSS keywords
- `color` — Color palettes and token recommendations by product type
- `typography` — Font pairings with Google Fonts imports
- `landing` — Landing page structure and CTA conversion strategies
- `icons` — Icon recommendations with import syntax (Lucide, Phosphor, Heroicons)
- `react` — React and Next.js UI performance patterns
- `chart` — Chart types and data visualization guidelines

### Stack Search
```bash
python tools/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "<query>" --stack nextjs
```

### Full Design System Generation
```bash
python tools/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "<query>" --design-system
```
