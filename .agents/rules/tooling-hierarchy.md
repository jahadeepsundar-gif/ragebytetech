# RAGEBYTE — PERMANENT DEVELOPMENT TOOLING & AGENT RULE

**MANDATORY PROJECT POLICY:**
UI UX Pro Max and LibreUIUX Claude Code are **PERMANENT** development resources for the RageByte project. They are NOT one-time installation tools and must NEVER be treated as tools only for the initial website build. They must remain active and consulted throughout the entire lifecycle of the RageByte platform across all future sessions.

---

## 1. Permanent Tools & Locations

| Resource | Repository | Local Path | Workspace Skill |
| :--- | :--- | :--- | :--- |
| **UI UX Pro Max** | `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` | `tools/ui-ux-pro-max-skill/` | [`.agents/skills/ui-ux-pro-max/SKILL.md`](file:///c:/Users/jahad/ragebytetech/.agents/skills/ui-ux-pro-max/SKILL.md) |
| **LibreUIUX Claude Code** | `https://github.com/HermeticOrmus/LibreUIUX-Claude-Code.git` | `tools/libre-ui-ux/` | [`.agents/skills/libre-ui-ux/SKILL.md`](file:///c:/Users/jahad/ragebytetech/.agents/skills/libre-ui-ux/SKILL.md) |

---

## 2. Permanent Tool Usage Scope

For **EVERY** significant RageByte development task, evaluate whether UI UX Pro Max and/or LibreUIUX are relevant. This includes:
- Every future correction & bug fix
- UI/UX improvements, refactoring & visual polishing
- New pages, sections, or components
- Responsive / mobile / tablet / desktop adjustments
- Typography, spacing, color, and layout modifications
- Forms, validation, and interaction design
- Restrained animations and micro-interactions
- Performance & accessibility (WCAG AA) auditing
- Project case-study, team, or service updates

### Application Patterns:
* *"Fix the mobile navbar"* → Review RageByte design tokens → Apply relevant UI/UX touch & navigation guidelines → Implement & test across mobile viewports.
* *"Make the homepage look more premium"* → Review existing design system → Consult UI UX Pro Max for elevated visual hierarchy & contrast patterns → Use LibreUIUX for component polish without altering the core brand language.
* *"Add a new section"* → Align with RageByte design system → Use UI UX Pro Max for layout/UX patterns → Use LibreUIUX for implementation assistance → Match existing aesthetic.
* *"Spacing/layout feels off"* → Inspect tokens → Validate against UX layout standards → Fix consistently across all breakpoints.

---

## 3. Strict 3-Tier Authority Hierarchy

```
   ┌──────────────────────────────────────────────┐
   │  TIER 1: RAGEBYTE MASTER DESIGN SYSTEM       │  (HIGHEST AUTHORITY / SINGLE SOURCE OF TRUTH)
   └──────────────────────┬───────────────────────┘
                          │
   ┌──────────────────────▼───────────────────────┐
   │  TIER 2: UI UX PRO MAX SKILL                 │  (DESIGN & UX INTELLIGENCE / RESEARCH)
   └──────────────────────┬───────────────────────┘
                          │
   ┌──────────────────────▼───────────────────────┐
   │  TIER 3: LIBREUIUX CLAUDE CODE               │  (IMPLEMENTATION ASSISTANT / COMPONENT AID)
   └──────────────────────┬───────────────────────┘
                          │
   ┌──────────────────────▼───────────────────────┐
   │  IMPLEMENTATION → TEST / VERIFY → RAGEBYTE   │
   └──────────────────────────────────────────────┘
```

### TIER 1 — RAGEBYTE MASTER DESIGN SYSTEM (HIGHEST AUTHORITY)
* The single source of truth: MASTER architecture PDF, approved visual direction, [`tailwind.config.ts`](file:///c:/Users/jahad/ragebytetech/tailwind.config.ts), [`app/globals.css`](file:///c:/Users/jahad/ragebytetech/app/globals.css), and established component patterns.
* Never override the MASTER system simply because an external tool or generic trend suggests something different.

### TIER 2 — UI UX PRO MAX (DESIGN INTELLIGENCE)
* Primary reference library for: UX research, design-system validation, typography pairings, color theory, layout patterns, responsive design, accessibility, interaction patterns, usability, navigation UX, form patterns, and visual hierarchy.

### TIER 3 — LIBREUIUX CLAUDE CODE (IMPLEMENTATION ASSISTANT)
* Implementation aid for: component architecture, accessibility-aware code, translation of approved designs into clean Next.js/React/Tailwind components.
* Must NOT independently redefine the design language.

---

## 4. Conflict Rule

**RAGEBYTE MASTER WINS.**
If external tools disagree with the RageByte MASTER design system:
* Do not change an established RageByte decision.
* When the MASTER system is silent or underspecified, consult **UI UX Pro Max** for UX/design guidance, and **LibreUIUX** for implementation assistance.

---

## 5. Workflow Before Every Significant UI/UX Change

1. Inspect existing RageByte implementation.
2. Understand the active design system and token structure.
3. Identify the exact requested change.
4. Verify whether the change conflicts with an existing RageByte decision.
5. Consult **UI UX Pro Max** when relevant.
6. Consult **LibreUIUX** when implementation guidance is useful.
7. Make the smallest appropriate change when correcting an issue.
8. Preserve existing approved components and visual language.
9. Ensure flawless responsiveness on Mobile, Tablet, and Desktop.
10. Verify accessibility (contrast, labels, touch targets) and usability.
11. Confirm visual consistency with the rest of the site.
12. Run build/type/lint verification (`npm run lint && npm run build`).

---

## 6. Preservation & Tool Management

The following files and folders must permanently remain in the workspace:
* `tools/ui-ux-pro-max-skill/`
* `tools/libre-ui-ux/`
* `.agents/skills/ui-ux-pro-max/SKILL.md`
* `.agents/skills/libre-ui-ux/SKILL.md`
* `.agents/rules/tooling-hierarchy.md`

Do not delete, disable, bypass, or remove these resources.

---

## 7. Judgment — Do Not Overuse

Do not invoke tools unnecessarily for trivial edits (e.g., text edits, typo fixes, simple image replacements, link updates). Use engineering judgment: apply tools for meaningful UI/UX, design, interaction, and component decisions.

---

## 8. Brand Identity Preservation

Every future modification must maintain the **RageByte Identity**:
* Dark charcoal / near-black digital studio aesthetic (`#090a0f`)
* Bold display headings (`Space Grotesk`, `Geist`) and legible body copy (`Inter`)
* Centralized accent color token (`--accent: #00f5a0`)
* Refined, purposeful animations and high-performance server-first architecture
