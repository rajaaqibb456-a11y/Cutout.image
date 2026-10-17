CUTOUT AI - OFFLINE SETUP

Files: index.html, sw.js, manifest.webmanifest, icon.svg (keep them in ONE folder)

A) On a computer (quick test)
1. Open a terminal in this folder and run:  python -m http.server 8000
2. Open Chrome:  http://localhost:8000
3. ONLINE, remove one photo (this downloads the AI model once).
4. Reload the page once. You will see "Offline ready".
5. Turn internet off and reload: it still works.

B) On a phone (install like an app)
1. Upload this folder to free hosting with HTTPS (Netlify Drop, GitHub Pages or Cloudflare Pages).
2. Open the link in Chrome while online, remove one photo, then reload once.
3. Chrome menu > "Install app" / "Add to Home screen".
4. It now opens and works offline.

Note: double-clicking index.html does not enable offline mode (browsers block service workers on file://).
