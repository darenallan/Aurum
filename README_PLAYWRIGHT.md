Playwright quickcheck

Prerequisites
- Node.js installed (14+)
- From project root (`AurumCorp`) run `npm install` to install Playwright.

Run
```powershell
cd 'c:\Users\HP\Desktop\a monté\meilleur de dossiers\AurumCorp'
# Install deps (only once)
npm install
# Start a simple static server (example using Python) in another shell:
# cd 'c:\Users\HP\Desktop\a monté\meilleur de dossiers\AurumCorp' ; python -m http.server 8000
# Then run the Playwright check:
npm run test:playwright
```

Output
- `tests/playwright-report.json` : JSON report with console messages and detected errors per page.
- `tests/screenshots/*.png` : page screenshots (may be empty if screenshots failed).

Notes
- Playwright will be installed into `node_modules` and may download browser binaries on first install. If you prefer headless-only checks without downloads, consider using `playwright-core` with pre-installed browsers.
