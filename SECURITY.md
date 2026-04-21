# Security Policy

If you believe you have found a security vulnerability in this project, please report it privately — **not** via a public GitHub issue.

## Reporting a vulnerability

Email **security@domelayer.com** with:

- A description of the vulnerability and its potential impact
- Steps to reproduce
- Any proof-of-concept code, screenshots, or requests that demonstrate the issue

You should receive an acknowledgement within 72 hours. We will work with you on a fix timeline and coordinated disclosure.

## Scope

This repository covers the `domelayer.com` marketing site and the cross-subdomain SSO entry point. Vulnerabilities in the individual Dome AI tools (process analyzer, data intelligence, LLM council, etc.) or their backend services can also be reported here — we will route them internally.

## Out of scope

- Automated scanner findings without demonstrated impact
- Issues in third-party dependencies without a working exploit against this project
- Self-XSS, missing security headers on static marketing pages with no sensitive actions
- Rate-limit probing on public pages
- Clickjacking on pages without authenticated state-changing actions

## Safe harbour

Good-faith security research conducted in accordance with this policy will not be pursued legally. Please do not access or modify data that is not your own, do not degrade service for other users, and do not retain more data than is necessary to demonstrate the issue.
