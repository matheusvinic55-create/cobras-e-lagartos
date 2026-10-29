# Home design QA — 2026-10-29

final result: passed

## Evidence and normalization

- Source visual truth: `docs/home-reference.jpg`, normalized from the first supplied 864 × 1536 image to 432 × 768, with the 28 px native status-bar area removed. Result: 432 × 740.
- Browser-rendered implementation: `docs/home-mobile.jpg`, 432 × 740 CSS/pixel content viewport at density 1, extracted from the cloud browser's screenshot of the local preview iframe.
- Full-view comparison: `docs/home-comparison.jpg` (source left, implementation right); both images opened together and assessed.
- Additional iPhone viewport: `docs/home-iphone.jpg`, 393 × 852 CSS/pixels; horizontal scroll width equals viewport width.
- State: Início selected, dialogs closed, scroll at top. Real character substitutions are intentional: Ellen in hero, Leona in cast, Bel/Duda in romance, Foguinho in story.
- Focused region review: title, romance card, quiz banner and bottom navigation inspected in the combined full-resolution comparison. The captures are small enough to read each at native scale.

## Findings and comparison history

1. [P2, fixed] Initial romance caption obscured Duda and its last line clipped. Narrowed caption to 43%, moved image into the right 72%, and reduced icon/padding dimensions. Both faces and all copy are visible in the final capture.
2. [P2, fixed] Initial 432 × 740 capture put the story's lower copy behind the fixed tabs. Matched hero proportions to the reference's OS-free content area, reduced heading rhythm, and shortened the introductory link copy. Final DOM measurement: story bottom 676.11 px, navigation top 676 px; no text obscured.
3. [P2, fixed] Desktop scrollbar reduced the mobile preview to 417 px. Hid scrollbar chrome while preserving scrolling; final clientWidth/scrollWidth are both 432, and 393 at the additional phone size.

## Required fidelity surfaces

- Typography: preserved the app's Playfair Display / DM Sans stack; serif hero, headings and card titles; sans-serif metadata, captions and controls. Title fits on two lines; mobile captions do not clip. No font dependency was added.
- Spacing/layout: full-bleed hero, two-by-two image cards, full-width quiz/story banners and five fixed bottom tabs match the reference's structure. OS-owned status bar is deliberately absent. Header information button retains a 44 px hit target.
- Colors/tokens: deep emerald background, warm ivory type and gold borders/icons/selected state match the target. Existing light reading screens remain legible through the scoped home theme.
- Images/assets: Ellen montage generated from the supplied portrait/reference; real cast photographs retained in cards. Bel and Duda both visible. Decorative quiz/record assets are raster images; icons are local Phosphor Light SVG assets with license.
- Copy/content: reference labels retained where supported; new story card opens the existing spoiler-free premise instead of inventing chapter-specific events. Romance dialog uses the existing Bel/Duda introduction and links to cast.

## Primary interactions checked in the cloud browser

- Romance card opens the labeled Bel/Duda dialog; its cast link closes the dialog and selects Elenco.
- Bottom navigation returns to Início and opens Cenários through the Luxus/Saara card.
- Perfil opens the existing three-question quiz; Trilha opens existing Spotify links.
- Route state and selected tabs update correctly.
- Console inspected: only browser-extension metadata errors; no app-origin JavaScript errors observed.
- Local JavaScript syntax checks passed; all HTML asset paths resolve; git diff whitespace check passed.

## Accepted differences / follow-up polish

- P3: Playfair is the existing project's approximation of the prototype's display serif.
- Requested authentic cast substitutions change the original mock's photographic framing. Cards retain their source aspect ratios and readable focal points.
- P3: decorative heading rule is omitted to prioritize the accessible Ver tudo link at phone widths.
- Physical iOS installed-PWA rendering and offline use were not exercised in this browser; safe-area rules and all offline assets are present in code.

## Implementation checklist

- [x] Real cast imagery and supplied Ellen reference
- [x] Main image and supporting raster assets optimized as WebP
- [x] Mobile screenshots and comparison reviewed after fixes
- [x] Primary interactions and app console checked
- [x] Offline cache manifest updated
- [x] Previous main commit recorded: 4a9e2321450ee880af725b495370235ae5e7fc68
- [x] GitHub restore branch: backup/home-before-20261029
