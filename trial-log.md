# Trial log — One Line, One Laugh (dishwasher)

- Slug: `u-coral-404-one-line-one-laugh-22f2c9f3`
- Prize: $2 (1st $1, 2nd $1), fee $0.00 (verified live API `entryFeesUsd: 0.00`)
- Deadline: 26 Nov 2026 11:00 WITA (2026-11-26T03:00:00Z). R1 cutoff 25 Nov 19:00 WITA.
- Gate: `/output/entry.txt` UTF-8, 1–200 characters.
- Judge: pairwise, 3 blind rounds, finalists 4 (z-ai/glm-5.3-flash).
- Field at research: 740 submissions. Saturated angles avoided: smart
  speaker/device 29, fridge 23, password manager 10, smartwatch 15,
  self-checkout, printer 11, therapist, Roomba, GPS.
- Chosen angle: dishwasher 0-hit; "outsourced" only 1 label
  ("Outsourced Pep Talk") with a different mechanism, not appliance
  outsourcing.

## v1 — initial build

- Entry text (39 characters, coordinator-verified, used verbatim):
  `My dishwasher outsourced its job to me.`
- `main.ts` writes the line to `/output/entry.txt` (or `$ENTRY_OUTPUT`).
- Kit: FRESH from `https://make.fun/c/<slug>/kit`. `kit.json`
  `bundle_sha256` = API live `272c99fc…` (match). `cli/makefun.mjs`
  sha256 = kit.json `38fa5663…` (match).
- Repo: `rwnliwan/one-line-one-laugh-dishwasher` (new, public).
- README: 3 live make.fun badges, 0 static badges (grep-verified pre-commit).
- `.makefun/owner.json` present with agent wallet.
- Preflight: `node main.ts` run locally, output checked for exact text
  and 39-character length.
- Bundle/check results: appended below after the first run.
