# RAGEBYTE — PERMANENT DEVELOPMENT TOOLING & AGENT RULE

This repository enforces a strict, permanent development and UI/UX tooling workflow across all sessions and phases.

## 1. Permanent Tools (The ONLY Permitted UI/UX Skills)
* **UI UX Pro Max:** `tools/ui-ux-pro-max-skill/` | Skill: [`.agents/skills/ui-ux-pro-max/SKILL.md`](file:///c:/Users/jahad/ragebytetech/.agents/skills/ui-ux-pro-max/SKILL.md)
* **LibreUIUX Claude Code:** `tools/libre-ui-ux/` | Skill: [`.agents/skills/libre-ui-ux/SKILL.md`](file:///c:/Users/jahad/ragebytetech/.agents/skills/libre-ui-ux/SKILL.md)

These are permanent workspace resources and must never be deleted, bypassed, rewritten, replaced, or treated as one-time setup tools. Do NOT install or create any other UI/UX skills, frameworks, or agents.

## 2. Mandatory Usage — No Self-Invented Design
For EVERY UI/UX-related task, correction, redesign, improvement, component change, styling change, responsive change, animation change, accessibility improvement, or visual decision:
* **YOU MUST USE THE INSTALLED SKILLS.**
* **Do NOT make UI/UX decisions completely on your own.** Consult the installed skills first for color systems, typography pairings, spacing, layout patterns, component styles, navigation, hero, responsive behavior, accessibility, and visual hierarchy.

## 3. Strict 3-Tier Authority Hierarchy
1. **Tier 1 (Highest Authority): RageByte MASTER Design System**
   * Single source of truth: MASTER Architecture Specification, `tailwind.config.ts`, `globals.css`, approved UI components, and explicit user instructions.
   * NEVER overridden by external tool suggestions.
2. **Tier 2: UI UX Pro Max Skill (`.agents/skills/ui-ux-pro-max/`)**
   * Primary UX & design intelligence: research, typography scales, color theory, layout patterns, accessibility (WCAG AA), usability, and validation.
3. **Tier 3: LibreUIUX Claude Code (`.agents/skills/libre-ui-ux/`)**
   * Implementation assistant: translating approved designs into clean, accessible Next.js/Tailwind components.

## 4. Conflict Rule
**RAGEBYTE MASTER WINS.** When external tools disagree with established RageByte architecture, approved designs, or explicit instructions, the MASTER system prevails.

## 5. Execution Workflow
```
RAGEBYTE MASTER → UI UX PRO MAX → LIBREUIUX → IMPLEMENTATION → TEST / VERIFY → RAGEBYTE
```

For full details, see [`.agents/rules/tooling-hierarchy.md`](file:///c:/Users/jahad/ragebytetech/.agents/rules/tooling-hierarchy.md).
