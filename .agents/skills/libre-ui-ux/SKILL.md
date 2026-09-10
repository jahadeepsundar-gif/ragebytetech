---
name: libre-ui-ux
description: "Workflow assistant for UI/UX-aware coding. Helps translate design intent into implementation inside the codebase during development per RageByte MASTER Architecture Section 10."
---

# LibreUIUX Claude Code — Implementation Assistant

This skill provides access to the complete UI/UX system and workflow catalog installed in `tools/libre-ui-ux`.

## Role in RageByte Architecture
Per Section 10 of the RageByte Architecture Master Specification:
- **Authority Tier:** Tier 3 (subordinate to both the RageByte MASTER design system and UI UX Pro Max Skill).
- **Role:** Workflow assistant for UI/UX-aware coding — helps translate design intent into implementation inside the codebase.
- **When Consulted:** During Develop, as a working aid for turning approved designs into components, not for making design decisions unilaterally.
- **Conflict Rule:** If LibreUIUX suggests something conflicting with either the MASTER design system or UI UX Pro Max, the higher tiers always win.

## Core Reference Plugins
The repository contains 70 specialized plugins in `tools/libre-ui-ux/plugins/`:
- `plugins/design-mastery/` — Design movements, design principles, and premium SaaS UI patterns.
- `plugins/frontend-mobile-development/` — Mobile-first responsive techniques and component workflows.
- `plugins/accessibility-compliance/` — WCAG AA checklists and accessible interaction patterns.
- `plugins/application-performance/` — Rendering optimization and web vital audit workflows.
- `plugins/seo-technical-optimization/` — Semantic structure and search engine optimization.

## Guidelines
1. Consult `tools/libre-ui-ux/plugins/design-mastery/` for component implementation techniques.
2. Ensure all generated code adheres strictly to the existing tokens in `tailwind.config.ts` and `app/globals.css`.
3. Use Server Components by default; keep Client Components minimal and focused.
