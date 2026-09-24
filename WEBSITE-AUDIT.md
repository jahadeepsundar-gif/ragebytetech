# RageByte website audit

Reviewed 24 September 2026. Scope: `C:\Users\Valavan\ragebytetech` only.

## Overall assessment

The site has a coherent dark/red studio identity, a complete route structure, and a working production build. It is a substantial marketing-site foundation, but should not be considered production-ready until enquiry reliability, dependency security, and portfolio credibility are addressed. Passing compilation does not establish accessibility, performance, or delivery reliability.

No application code was changed. Locked dependencies were installed for verification. This report and `audit-dependencies.json` are audit outputs.

## Verification performed

- `npm ci --ignore-scripts --no-audit --no-fund`: successful.
- `npm run lint`: no warnings or errors.
- `npm run build`: successful, including type validation and static generation.
- Local production server: all five main pages and four project detail routes returned HTTP 200; an unknown project returned 404; sitemap and robots returned 200.
- Browser review: homepage hero at 1440 × 900 and 390 × 844, homepage accessibility tree, and contact form validation interaction.
- `npm audit --omit=dev`: two affected production package entries, one critical (`next`) and one high (`postcss`). These are package severity classifications, not proof that every advisory is exploitable in this deployment.
- Build-reported first-load JavaScript: homepage 178 kB, contact 163 kB, about 149 kB, services 143 kB, work 147 kB, project details 144 kB. Dynamically loaded scenes and media are additional costs.

Not measured: Lighthouse, field Core Web Vitals, real-device GPU/battery behavior, a complete screen-reader audit, or live email delivery. Desktop/mobile screenshots were spot checks, not exhaustive route-by-route responsive certification. Team credentials and business claims were not independently verified.

## Priority findings

### 1. High — enquiries can be discarded while reporting success

`app/api/contact/route.ts:51` returns HTTP 200 and `success: true` when Resend is unconfigured. It says the enquiry was “recorded successfully,” but there is no persistence operation. `lib/email.ts` only logs a configuration warning in this branch. `components/ContactForm.tsx:110` then renders an “Enquiry Received” card and promises follow-up.

Impact: a visitor can reasonably believe the team received a project request that nobody can retrieve. Return an honest unavailable response unless the enquiry is durably queued or saved. Keep configuration instructions in operational tooling, rather than the public success screen. Verify both configured and unconfigured paths before release.

### 2. High — dependency upgrade required before public deployment

The lockfile installs Next.js 14.2.35. The registry audit reports multiple advisories against it. The published Windows-hosted remote-code-execution advisory affects versions `>=13.4.0 <15.5.24`; this is especially relevant if production runs on Windows. Development on Windows alone does not establish the production host's exposure.

Sources: [Windows-hosted server advisory](https://github.com/advisories/GHSA-p293-qw3h-jr36) and [image optimization advisory](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4). Preserve the full registry response in `audit-dependencies.json` for the remaining findings.

Plan a supported, patched framework upgrade with route, image, contact, and animation regression checks. Do not apply a forced major upgrade without reviewing migration effects. Re-run the audit after choosing the target version.

### 3. High — invalid optional fields can silently block the form

`components/ContactForm.tsx:398` renders a reference URL input without its validation error. The schema rejects invalid URLs, and submission returns early, but the form has no visible explanation for that field. Company and phone also have schema limits without corresponding inline error rendering. The reference URL behavior was exercised in the browser using invalid test input.

Render all relevant errors, associate messages with inputs using `aria-describedby`, and move focus to the first invalid field. Correct the details helper: the UI says 20 characters, while `lib/validation.ts` accepts 10. Trim whitespace before validating required text.

### 4. High — demo portfolio is presented partly as live client evidence

`data/projects.ts` explicitly contains four demo projects with stock Unsplash images, `example.com/demo/...` destinations, and fictional outcome narratives. Demo badges are present, which is good. However, `components/ProjectCard.tsx` also displays “Live System” and “Live Instance” whenever a URL exists, including these placeholders. Case studies contain precise performance gains and award claims.

Replace links and images with genuine work, or keep the projects clearly framed as concept demonstrations throughout. Separate hypothetical targets from measured outcomes. Do not label stock imagery as actual application screenshots. Confirm names, experience claims, and social links in `data/team.ts` with the owner before launch; this review does not establish whether they are authentic.

### 5. Medium — page visibility depends too heavily on JavaScript

`components/motion/PageLoadSequence.tsx:26` server-renders a full-screen opaque veil and removes it after a client effect. If JavaScript is disabled or hydration fails, it remains over the page. Several motion primitives also start at zero opacity. This is a code-confirmed failure path; a JavaScript-disabled browser run was not performed.

Keep essential content visible by default and add animation after enhancement is available. The separate preloader blocks pointer interaction and scrolling, with a 2.2-second fallback and 550 ms fade. Its reduced-motion skip and fallback are good safeguards, but an obligatory intro adds friction before a visitor can act.

### 6. Medium — accessibility claims exceed demonstrated coverage

Service, budget, and timeline choices in the form are ordinary buttons whose selected state is communicated through styling rather than radio semantics or `aria-pressed`. Errors and success states lack a consistent announcement/focus strategy. Navigation marks the current route visually without `aria-current`. There is no skip-to-main link. Hero motion does not consult reduced-motion preferences directly, although the preloader and several other components do.

The footer says “WCAG AA Compliant,” while these gaps remain. Treat compliance as an acceptance criterion requiring validation. Also review small muted text and hover-state contrast. The team index uses 32 px controls despite a separate site claim of 48 px-plus touch targets; that is a claim mismatch, not by itself a blanket WCAG failure.

### 7. Medium — abuse controls are instance-local

`lib/rate-limit.ts` uses an in-memory Map. It resets on restart and is not shared across serverless instances. The algorithm is a fixed window, despite its sliding-window comment. `app/api/contact/route.ts` trusts forwarded-IP headers; safety depends on the deployment proxy replacing untrusted values.

Use a shared limiter appropriate to the production platform and verify the trusted client-IP source. Return a retry hint on 429. Provider and exception details currently reach public error responses; keep detailed diagnostics server-side and present actionable, generic messages to visitors.

## Design and conversion review

The hero's large condensed type, red primary CTA, capsule navigation, and restrained palette give the site a recognizable identity. The homepage follows a sensible sequence: proposition, proof, work, services, differentiation, process, team, contact. Clear project/contact routes and direct email access are strengths.

The vortex is distinctive but passes behind both the headline and smaller supporting text. In the reviewed desktop and mobile views, it competes with the body copy. Preserve the visual identity while reducing background intensity behind text or providing a quieter reading area.

The copy repeatedly emphasizes architecture, telemetry, protocols, and zero overhead. This fits technical buyers but gives a less technical prospect more interpretation work. State customer outcomes and engagement fit earlier. Replace repeated “zero” and “verified” claims with specific evidence. The extensive manifesto, stack, process, final CTA, and large footer make the journey long; prioritize real work and a clear next step.

The 3D services bookshelf is a differentiator but adds interaction effort to learning what the studio sells. Keep a straightforward, accessible services summary available alongside it. The existing `/services` route is a useful foundation for this.

## Performance and maintainability

The typography renderer contains visibility handling and cleanup; the bookshelf also has cleanup, reduced-motion handling, and error paths. These are positive engineering details. Avoid assuming every animated component is unoptimized.

However, the bookshelf renderer is over 4,000 lines and the isolated effect module imports many HTML effect sources. The latter is reached by the globally mounted preloader. Inspect actual generated chunks before deciding how much unused source survives tree-shaking. Consider isolating the intro import and mounting below-fold scenes near viewport entry. Five font families are configured globally, including six Barlow Condensed weights; retain only fonts and weights justified by the design.

React-to-renderer synchronization in `BookshelfServices.tsx` uses DOM queries, simulated clicks, and a MutationObserver. This is fragile coupling: renderer markup changes can break behavior without type errors. Prefer an explicit callback/controller contract when refactoring.

## SEO and project operations

Page metadata, sitemap, robots, static case-study generation, and missing-project handling are in place. Missing pieces include canonical URLs and dedicated social sharing imagery. `metadataBase` hardcodes `ragebyte.tech`, while sitemap/robots use `NEXT_PUBLIC_SITE_URL`; centralize the site origin. Sitemap timestamps currently use generation time rather than meaningful content-update dates. Demo cases are included in the indexable sitemap.

The README contains only the project name. No automated test script or CI workflow was found in this checkout. Document setup, environment variables, deployment, and acceptance checks. Add meaningful tests first for successful email delivery, delivery failure, unconfigured delivery, invalid fields, rate limiting, and critical navigation.

The project-required UI UX Pro Max and LibreUIUX skill files exist and were read. Their referenced `tools/` implementations and the separate MASTER specification were absent from this checkout. `tools/` is gitignored. Restore the approved tooling through documented setup before substantial design changes.

## Recommended order

1. Patch dependencies and fix truthful, reliable enquiry handling.
2. Fix silent validation and accessible form state.
3. Replace or consistently disclose demo proof and validate business claims.
4. Make page visibility resilient to JavaScript failure and simplify loading.
5. Measure performance and accessibility on the production build, then optimize demonstrated bottlenecks.
6. Refine copy, animation legibility, metadata, and project documentation.
