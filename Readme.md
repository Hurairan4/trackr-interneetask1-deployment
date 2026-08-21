# Internee.pk — DevOps & Cloud Engineering Internship: Task 1

**Objective:** Migrate and deploy the Internee.pk platform to a cloud-based infrastructure.

This repository documents the completion of Task 1 of the DevOps & Cloud Engineering
internship at Internee.pk. The task required provisioning a cloud virtual machine,
configuring a Linux web server, and enabling HTTPS — using a real, publicly hosted
deployment as proof of work.

## A note on scope

The task instructions were to deploy "the Internee.pk platform," but no source code,
repository, database, server access, or other application assets were provided by
Internee.pk for this task. Internee.pk was contacted through available channels to
confirm whether the actual platform, its source code, or an independent implementation
was expected — no clarification was received before the task deadline.

To meet the deployment requirements within the timeline, an original static website
was built from scratch, visually inspired by Internee.pk's general layout and style as
an internship platform (no copied code, assets, or images), purely to serve as the
application being deployed. **The focus of this task is the cloud deployment process
itself — the demo site exists only as something to deploy.**

## What was actually done

| Requirement | Status | Detail |
|---|---|---|
| Provision a cloud VM | ✅ | AWS EC2 instance, Ubuntu Server 24.04 LTS |
| Configure Linux environment | ✅ | Ubuntu, updated and configured via SSH |
| Configure a web server | ✅ | Nginx, serving static content from `/var/www/html` |
| Enable HTTPS | ✅ | Let's Encrypt SSL certificate via Certbot, with auto-renewal |

### Infrastructure walkthrough

1. **Provisioning** — Launched an Ubuntu 24.04 EC2 instance on AWS, with an Elastic IP
   attached for a stable public address, and a security group allowing inbound
   SSH (22), HTTP (80), and HTTPS (443).
2. **Server setup** — Connected via SSH, updated the system (`apt update && apt
   upgrade`), and installed Nginx.
3. **Deployment** — Transferred the static site files to the instance via `scp`, and
   placed them in Nginx's web root (`/var/www/html`), with permissions corrected so
   Nginx (`www-data`) could serve them.
4. **Domain** — Registered a free DuckDNS subdomain and pointed it at the instance's
   Elastic IP, since Let's Encrypt requires a resolvable domain name rather than a
   bare IP address.
5. **HTTPS** — Installed Certbot (`certbot` + `python3-certbot-nginx`) and ran
   `certbot --nginx` to obtain and auto-configure a Let's Encrypt SSL certificate,
   with Nginx set to redirect HTTP traffic to HTTPS.

### Live deployment

**https://trackr-huraira.duckdns.org**

### Stack

`AWS EC2` → `Ubuntu 24.04 LTS` → `Nginx` → `DuckDNS` → `Let's Encrypt (Certbot)` → `HTTPS`

## Screenshots

Screenshots are stored in the `screenshots/` folder of this repo.

| Screenshot | Description |
|---|---|
| `screenshots/site-https.png` | Live site loaded over HTTPS, padlock visible in the address bar |
| `screenshots/homepage.png` | Deployed homepage |
| `screenshots/programs-page.png` | Deployed programs page |
| `screenshots/certbot-success.png` | Terminal output of `certbot --nginx` issuing the SSL certificate |
| `screenshots/nginx-status.png` | Terminal output of `systemctl status nginx` showing it active and running |
| `screenshots/ec2-instance.png` | AWS EC2 console showing the instance running, with its Elastic IP |
| `screenshots/security-group.png` | Security group inbound rules (SSH, HTTP, HTTPS) |

## About the demo application

The deployed site ("Trackr") is a small, original 2-page static site (HTML/CSS/
vanilla JS, no frameworks or build tools) built only to have something realistic to
deploy. It is not affiliated with, and does not reuse any code or assets from,
Internee.pk's actual platform. Its own project details are in the `README` inside
the site's files, if relevant.
