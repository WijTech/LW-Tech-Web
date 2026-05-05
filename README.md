# LW Tech Website

Simple static website ready for Git + Render deployment.

## Files
- `index.html` main page
- `styles.css` styling
- `script.js` tiny year script
- `render.yaml` Render deployment config

## Local preview (optional)
From this folder, run:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Before going live
1. In `index.html`, replace:
- Facebook link (`https://www.facebook.com/`) with your real page URL.
- Email link (`hello@lwtech.local`) with your real email.
2. (Optional) Replace the Open Graph image with your own branded image URL.

## Git + GitHub setup
Run these commands in this folder:

```powershell
git init
git add .
git commit -m "Initial LW Tech website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Render deploy
1. In Render dashboard: `New +` -> `Static Site`.
2. Connect your GitHub repo.
3. Render should detect `render.yaml` automatically.
4. Create site and deploy.

After each update:

```powershell
git add .
git commit -m "Update website"
git push
```

Render will auto-deploy from `main`.