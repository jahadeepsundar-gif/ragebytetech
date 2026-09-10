# RAGEBYTE — PERMANENT DEVELOPMENT TOOLING & AGENT RULE

This repository enforces a strict, permanent development and UI/UX tooling workflow across all sessions and phases.

## 1. Permanent Tools
* **UI UX Pro Max:** `tools/ui-ux-pro-max-skill/` | Skill: `.agents/skills/ui-ux-pro-max/SKILL.md`
* **LibreUIUX Claude Code:** `tools/libre-ui-ux/` | Skill: `.agents/skills/libre-ui-ux/SKILL.md`

These are permanent workspace resources and must not be deleted or treated as one-time setup tools.

## 2. Strict 3-Tier Authority Hierarchy
1. **Tier 1 (Highest Authority): RageByte MASTER Design System**
   * Single source of truth: MASTER Architecture Specification, `tailwind.config.ts`, `globals.css`, approved UI components.
   * NEVER overridden by external tool suggestions.
2. **Tier 2: UI UX Pro Max Skill**
   * Primary UX & design intelligence: research, typography scales, color theory, layout patterns, accessibility, usability, and validation.
3. **Tier 3: LibreUIUX Claude Code**
   * Implementation assistant: translating approved designs into clean, accessible Next.js/Tailwind components.

## 3. Conflict Rule
**RAGEBYTE MASTER WINS.** When external tools disagree with established RageByte architecture or tokens, the MASTER system prevails.

## 4. Execution Workflow
```
RAGEBYTE MASTER → UI UX PRO MAX → LIBREUIUX → IMPLEMENTATION → TEST / VERIFY → RAGEBYTE
```

For full details, see [`.agents/rules/tooling-hierarchy.md`](file:///c:/Users/jahad/ragebytetech/.agents/rules/tooling-hierarchy.md).
