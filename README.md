# ZackFinance — Demo Static Site

This ZIP contains a demo static version of the ZackFinance platform with:
- `index.html` — homepage with embedded Google Form
- `upload.html` — simple project upload (stores data in browser localStorage)
- `register.html` / `login.html` — demo registration & login stored locally
- `admin.html` — admin panel (client-side demo). Default demo password: zackadmin2025
- `about.html` — about page
- `styles.css` — styles

**Important notes**
- This is a static demo meant for GitHub Pages. It uses browser `localStorage` for demo persistence — not suitable for production.
- To make this production-ready, connect to Firebase (Authentication + Firestore + Storage) or another backend.
- To deploy: push files to your repo root and enable GitHub Pages (branch `main` / `gh-pages`).

Enjoy — tell me if you want Firebase integration, or I should make a production-ready version.
