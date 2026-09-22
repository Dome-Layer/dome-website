/**
 * Destinations for the restructured site (plan phase 1c).
 *
 * These are the URLs the new pages will live at. They are collected here so the home page can link
 * to them before every page exists, and so the move of the tool pages from /tools/* to /dome/*
 * has one place to change. Once every page is registered in `src/i18n/routes.ts`, this file's job
 * is done and callers should use `localizedHref` instead.
 */
export const SITE = {
  enterpriseUx: '/services/enterprise-ux',
  aiProcessAutomation: '/services/ai-process-automation',
  dome: '/dome',
  caseStudies: '/case-studies',
  about: '/about',
  contact: '/contact',
} as const
