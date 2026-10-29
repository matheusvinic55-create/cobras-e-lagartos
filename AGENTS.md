# Cobras & Lagartos

- Existing static app lives in `dist`; preserve its hash routes, tab panels, quiz, cast search, dialogs and offline support.
- `npm run dev -- --host 0.0.0.0 --port 4173 --strictPort` serves `dist` without dependencies. `__preview?width=393&height=852` is a local-only responsive preview wrapper.
- Home visual reference and final captures are in `docs/`. Keep the cinematic emerald/gold art direction and supplied character identities. The other reading screens use the established light theme.
- Use actual cast portraits for character cards. Keep display text in HTML and icons from the packaged Phosphor Light assets, with their MIT license.
- Never add plot revelations, endings, deaths or chapter summaries. Home story links open the spoiler-free introduction.
- Keep native safe-area insets; do not draw a system status bar in the app.
- When changing offline assets, update `dist/sw.js`'s cache version and asset list.
