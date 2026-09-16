import type { Messages } from './types'

export const en: Messages = {
  site: {
    description:
      'DOME is an AI and product consultancy for regulated enterprises, based in Florence and working across Europe. We design enterprise software people use and build AI process automation you can audit.',
    llmsIntro:
      'We work in three areas: enterprise UX and product, AI process automation, and DOME capabilities. The capabilities are AI tools we build and operate ourselves (process analysis, document and data intelligence, a multi-model council, a governed agent workflow and a governance dashboard). They show how we deliver governed AI and are not sold as products. Every tool records its decisions in an audit trail, and a named person signs off where a policy requires it.',
    llmsSections: { pages: 'Pages', tools: 'Tools we build and operate', legal: 'Legal' },
  },
  nav: {
    homeLabel: 'DOME home',
    method: 'Method',
    architecture: 'Architecture',
    tools: 'Tools',
    engagement: 'Engagement',
    about: 'About',
    contact: 'Contact',
    signIn: 'Sign in',
    signOut: 'Sign out',
    yourTools: 'Your tools',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  switcher: { label: 'Read this page in Italian' },
  footer: {
    eyebrow: 'Get in touch',
    heading: 'Start a conversation',
    intro: "Tell us about your project or challenge. We'll get back to you within 24 hours.",
    emailLabel: 'Email',
    emailPlaceholder: 'you@company.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project…',
    send: 'Send message',
    sending: 'Sending',
    successTitle: 'Message received',
    successBody: "Thank you for reaching out. We'll be in touch shortly.",
    sendAnother: 'Send another message',
    rateLimited: "You've reached the contact-form limit. Please try again in an hour.",
    genericError: 'Something went wrong. Please try again or email us directly.',
    tagline: 'Governance-Driven Operational AI',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    rights: 'All rights reserved.',
  },
  errors: {
    notFoundTitle: 'Page not found',
    notFoundBody: 'The page you are looking for does not exist.',
    errorTitle: 'Something went wrong',
    errorBody: 'Please refresh the page.',
    homeLink: 'Go to the home page',
  },
  breadcrumbHome: 'Home',
  meta: {
    home: {
      name: 'Home',
      title: 'DOME | Governance-driven AI for regulated enterprises',
      description:
        'DOME helps regulated enterprises put AI into production with governance built in, from process automation to the tools we build and operate ourselves.',
      ogDescription:
        'Architected for production from day one. We help regulated enterprises run AI with governance, oversight and a full audit trail built in.',
      twitterDescription: 'Production-ready AI with governance built in, for regulated enterprises.',
      imageAlt: 'DOME: governance-driven AI for regulated enterprises',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer | DOME',
      description:
        'Convert a plain-language description of any business process into a structured process map with governance analysis and automation assessment.',
      ogDescription:
        'Describe any business process in plain language. Get a structured process map, governance gap analysis, and AI automation assessment.',
      twitterDescription:
        'Describe any business process in plain language. Receive a structured map, governance gaps, and automation opportunities.',
      imageAlt: 'DOME Process Analyzer: governance-driven process mapping',
      twitterImageAlt: 'DOME Process Analyzer',
    },
    dataIntelligence: {
      name: 'Data Intelligence',
      title: 'Data Intelligence | DOME',
      description:
        'Upload a spreadsheet and receive a governed analytics dashboard with automatic chart selection and a natural language Q&A panel.',
      ogDescription:
        'Upload a spreadsheet. Receive a governed analytics dashboard with deterministic chart selection and a natural language Q&A panel, with no manual configuration required.',
      twitterDescription:
        'Upload a spreadsheet. Get a governed analytics dashboard with automatic chart selection and natural language Q&A, with no configuration needed.',
      imageAlt: 'DOME Data Intelligence: governed analytics dashboard',
      twitterImageAlt: 'DOME Data Intelligence',
    },
    llmCouncil: {
      name: 'LLM Council',
      title: 'LLM Council | DOME',
      description:
        'Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail.',
      imageAlt: 'DOME LLM Council: governed AI deliberation',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence | DOME',
      description:
        'Extract structured data from any document: invoices, lab reports, utility bills, contracts. Governance validation and full audit trail included.',
      ogDescription:
        'Upload any document and receive structured, governed extraction: field values, confidence scores, and a 16-rule governance report, in seconds.',
      twitterDescription:
        'Extract structured data from any document. Governance validation, confidence scoring, and full audit trail, with no templates required.',
      imageAlt: 'DOME Document Intelligence: governed document extraction',
      twitterImageAlt: 'DOME Document Intelligence',
    },
    governanceDashboard: {
      name: 'Governance Dashboard',
      title: 'Governance Dashboard | DOME',
      description:
        'Real-time audit trail, compliance reporting, and PDF export spanning all four DOME AI tools. Every governance event, confidence score, and human-in-loop decision in one place.',
      ogDescription:
        'Audit trail, compliance reporting, and PDF export across all four DOME AI tools. See every governance event, confidence score, and human-in-loop decision in one place.',
      twitterDescription: 'Real-time audit trail and compliance reporting across all four DOME AI tools.',
      imageAlt: 'DOME Governance Dashboard: cross-tool audit trail and compliance reporting',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow | DOME',
      description:
        'A governed invoice-to-approval workflow: Document Intelligence extraction, a policy rules engine, a multi-model LLM Council, and a human approval gate, with every step audited.',
      ogDescription:
        'A governed invoice-to-approval workflow across the DOME tools, with a human-in-the-loop gate and a full audit trail.',
      twitterDescription: 'Governed invoice-to-approval workflow with a human-in-the-loop gate and full audit trail.',
      imageAlt: 'DOME Agent Flow: governed invoice-to-approval workflow',
      twitterImageAlt: 'DOME Agent Flow',
    },
    privacy: {
      name: 'Privacy policy',
      title: 'Privacy policy | DOME',
      description:
        'How DOME collects, uses and protects personal data for website visitors and registered tool users, and how to exercise your rights under the GDPR.',
      imageAlt: 'DOME',
    },
    terms: {
      name: 'Terms of service',
      title: 'Terms of service | DOME',
      description:
        'The terms that apply to using the DOME tools: accounts, acceptable use, AI processing, disclaimers and governing law.',
      imageAlt: 'DOME',
    },
  },
}
