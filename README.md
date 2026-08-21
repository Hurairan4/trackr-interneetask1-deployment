# Trackr — internship platform demo

A small, static 2-page site inspired by the general look and feel of an
internship/learning platform. Built for a DevOps/cloud deployment exercise —
the frontend is intentionally simple (no build step, no framework) so the
focus stays on the infrastructure work that comes next (EC2, Nginx, HTTPS).

## Structure

```
project/
├── index.html        Home page
├── programs.html      Programs / tracks page
├── css/
│   └── style.css
├── js/
│   └── script.js       Filter interaction on the programs page
└── assets/
    └── images/          (empty — no external images used)
```

## Run locally

No build tools, no dependencies. Just open the file directly:

- Double-click `index.html`, or
- From this folder, run a tiny local server (optional, avoids any
  browser file:// quirks):

  ```bash
  python3 -m http.server 8000
  ```

  then visit `http://localhost:8000`.

## Later: deploying to Nginx on an Ubuntu EC2 instance

This folder can be copied as-is into an Nginx web root, e.g.:

```bash
sudo cp -r project/* /var/www/html/
sudo systemctl restart nginx
```

No `.env`, no database, no server-side code — it's a static site, so the
only moving pieces at deploy time are the VM, Nginx config, DNS, and the
Let's Encrypt certificate.
