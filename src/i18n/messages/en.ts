import type { Messages } from './types'

export const en: Messages = {
  site: {
    description:
      'DOME is an AI and product consultancy for regulated enterprises, based in Florence and working across Europe. We design enterprise software people use and build AI process automation you can audit.',
    llmsIntro:
      'We work in three areas: AI process automation, enterprise UX and product, and DOME capabilities. The capabilities are AI tools we build and operate ourselves (process analysis, document and data intelligence, a multi-model council, a governed agent workflow and a governance dashboard). They show how we deliver governed AI and are not sold as products. Every tool records its decisions in an audit trail, and a named person signs off where a policy requires it.',
    llmsSections: { pages: 'Pages', tools: 'Tools we build and operate', legal: 'Legal' },
  },
  nav: {
    homeLabel: 'DOME home',
    enterpriseUx: 'Enterprise UX',
    aiAutomation: 'AI automation',
    dome: 'DOME',
    caseStudies: 'Case studies',
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
    tagline: 'Governance-Driven Operational AI',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    cookies: 'Cookie policy',
    rights: 'All rights reserved.',
  },
  cookieNotice: {
    lead: 'Dome uses only functional cookies.',
    body: 'One keeps you signed in, two remember your theme and language. No analytics, no tracking, no advertising.',
    link: 'See our cookie policy',
    dismiss: 'Got it',
  },
  contactForm: {
    heading: 'Send a message',
    intro: 'Prefer writing? Tell us about your project and we will get back to you.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@company.com',
    companyLabel: 'Company',
    companyOptional: '(optional)',
    companyPlaceholder: 'Company name',
    topicLabel: 'Topic',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project',
    privacyNote: 'We use your details only to reply to your message. See our',
    privacyLink: 'privacy policy',
    send: 'Send message',
    sending: 'Sending',
    successTitle: 'Message received',
    successBody: 'Thank you for reaching out. We reply within two working days.',
    sendAnother: 'Send another message',
    rateLimited: 'You have reached the contact-form limit. Please try again in a minute.',
    genericError: 'Something went wrong. Please try again or email us directly.',
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
    enterpriseUx: {
      name: 'Enterprise UX and product',
      title: 'Enterprise UX and product consulting | DOME',
      description:
        'User research, service design and interface design for complex enterprise platforms, delivered with a design system your developers can build from.',
      ogDescription:
        'We untangle complex internal tools and customer platforms: research, service design, interface design and a design system your team can build from.',
      imageAlt: 'DOME enterprise UX and product consulting',
    },
    aiProcessAutomation: {
      name: 'AI process automation',
      title: 'AI process automation | DOME',
      description:
        'We map a business process, automate the parts with clear rules and route the rest to your team with a decision brief and a complete audit trail.',
      ogDescription:
        'Automate a process without losing control of it: clear rules where they apply, a human decision where they do not, and an audit trail throughout.',
      imageAlt: 'DOME AI process automation',
    },
    dome: {
      name: 'DOME capabilities',
      title: 'DOME capabilities: the tools we build and operate | DOME',
      description:
        'Six working tools covering the path from process discovery to audited execution. They are proof of how we build governed AI, not products for sale.',
      ogDescription:
        'Process analysis, document and data intelligence, a multi-model council, a governed agent workflow and a governance dashboard. Built and operated by us.',
      imageAlt: 'DOME capabilities: tools we build and operate',
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
    about: {
      name: 'About',
      title: 'About DOME | AI and product consultancy for regulated enterprises',
      description:
        'DOME is an AI and product consultancy based in Florence, working across Europe with procurement, finance, compliance and supply chain teams in regulated sectors.',
      ogDescription:
        'One accountable lead, a network of specialists and a delivery partner. How DOME is set up, and what you can expect from an engagement.',
      imageAlt: 'About DOME',
    },
    contact: {
      name: 'Contact',
      title: 'Contact DOME | Book a call or send a message',
      description:
        'Book a 15 or 30 minute call, or send a message about your project. We reply within two working days. Based in Florence, working across Europe in English and Italian.',
      ogDescription: 'Book a call or send a message. We reply within two working days.',
      imageAlt: 'Contact DOME',
    },
    caseStudies: {
      name: 'Case studies',
      title: 'Case studies | DOME',
      description:
        'Anonymised accounts of enterprise UX and AI automation work in retail procurement, trade finance, food supply chains, compliance and digital assets.',
      ogDescription:
        'What we have built, and what changed as a result. Client details are anonymised throughout.',
      imageAlt: 'DOME case studies',
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
    cookies: {
      name: 'Cookie policy',
      title: 'Cookie policy | DOME',
      description:
        'Every cookie and browser storage entry used by domelayer.com and the DOME tools, what each holds, how long it lasts, and why none needs consent.',
      imageAlt: 'DOME',
    },
  },
  media: {
    homeHeroStill: 'Two colleagues reviewing an approval workflow on a laptop',
    aiProcessAutomationHero:
      'Finance desk with a monitor showing an approval flowchart and a stack of invoices',
    enterpriseUxHero: 'Designer placing a blue sticky note on a wall of wireframes',
    capabilitiesHero: 'Server room corridor lit in cool white and blue',
    aboutHero: 'Florence rooftops and the cathedral dome seen from a studio window',
    caseStudiesHero: 'Process maps and a tablet dashboard on a light wooden table',
    contactHero: 'Quiet meeting room with a round table by a window overlooking Florence',
    caseProcurementWorkflowRedesign:
      'Procurement specialist working at two monitors with a purchasing interface',
    caseAiComplianceAssessments:
      'Analyst reviewing a highlighted regulation on a tablet beside a binder',
    caseMetalsTradingPlatform:
      'Warehouse of stacked aluminium ingots with a tablet showing price charts',
    caseFoodTraceabilityPlatform:
      'Hand scanning a QR label on a crate of vegetables in a distribution centre',
    caseTradingAppRedesign: 'Smartphone showing a trading app with price charts, city street behind',
    caseAiProcurementPlatform:
      'Three colleagues in front of a wall screen showing a workflow diagram',
    caseAiTrainingVideos:
      'Small video studio with a camera, light and a monitor showing a training screen',
    francescoProdomo: 'Francesco Prodomo',
    tabletMockup: 'A DOME tool shown on a tablet',
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'AI-generated image',
  common: {
    sendMessage: 'Send a message',
    relatedWork: 'Related work',
    anonymised: 'Client details are anonymised.',
    viewAllCaseStudies: 'View all case studies',
    topics: [
      'AI process automation',
      'Enterprise UX and product',
      'DOME capabilities',
      'Something else',
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'AI and product consulting for regulated enterprises',
        heading: 'Enterprise software people use, and AI you can audit.',
        lead: 'We help regulated enterprises redesign complex workflows and automate them with AI that stays governed, measurable and explainable.',
        primary: 'Book an introductory call',
        secondary: 'See our work',
      },
      sectors: {
        eyebrow: 'Sectors we work in',
        items: [
          'Retail procurement',
          'Commodity and trade finance',
          'Food and agricultural supply chains',
          'Compliance and regulatory',
          'Digital assets',
        ],
      },
      services: {
        eyebrow: 'What we do',
        heading: 'Three ways we work with you',
        items: [
          {
            title: 'AI process automation',
            body: 'We map a process, automate the parts with clear rules and route the rest to your team with a decision brief and a complete audit trail.',
            cta: 'Explore process automation',
          },
          {
            title: 'Enterprise UX and product',
            body: 'We untangle complex internal tools and customer platforms: user research, service design, interface design and a design system your developers can build from.',
            cta: 'Explore UX and product',
          },
          {
            title: 'DOME capabilities',
            body: 'Working tools we build and operate: document extraction, multi-model review, governed dashboards and an audit layer that ties them together.',
            cta: 'See what we build',
          },
        ],
      },
      howWeWork: {
        eyebrow: 'How we work',
        heading: 'One method from first workshop to production',
        lead: 'Governance is part of every phase, so nothing has to be retrofitted before go-live.',
        phaseLabel: 'Phase',
        phases: [
          { title: 'Discover', body: 'Map the workflow, the systems it touches and where regulation applies.' },
          { title: 'Orchestrate', body: 'Design the architecture, the data flows and the controls around them.' },
          { title: 'Model', body: 'Configure AI components inside agreed limits on accuracy and risk.' },
          { title: 'Execute', body: 'Deploy, integrate and monitor, with every automated decision on record.' },
        ],
        governance: 'Governance built into every phase',
      },
      selectedWork: { eyebrow: 'Selected work', heading: 'Recent engagements' },
      capabilities: {
        eyebrow: 'DOME capabilities',
        heading: 'Tools we build and operate',
        lead: 'Our own tools cover the path from process discovery to audited execution. Prospective clients can try them before any engagement starts, and where data cannot leave your network, three of them run against a local open-weight model instead of a cloud API.',
        tools: [
          'Process Analyzer',
          'LLM Council',
          'Document Intelligence',
          'Data Intelligence',
          'Governance Dashboard',
          'Agent Flow (rolling out)',
        ],
        cta: 'Explore DOME capabilities',
      },
      operatingModel: {
        eyebrow: 'About DOME',
        heading: 'One accountable lead. The right specialists for the work.',
        lead: 'We staff each engagement around the problem rather than a fixed headcount. You get senior people throughout, and a team that grows or shrinks with the scope.',
        cta: 'How we are set up',
        items: [
          { title: 'Engagement lead', body: 'One senior lead owns the engagement from the first call to handover, and stays accountable for the outcome.' },
          { title: 'Specialist network', body: 'UX researchers, designers, engineers, data and compliance specialists join when the work needs them.' },
          { title: 'Delivery partner', body: 'Larger programmes run with an established partner firm, so the team can grow with the scope.' },
        ],
      },
      closing: {
        heading: 'Tell us about the process that slows your team down.',
        body: 'A 30-minute call is enough to tell whether we can help.',
        primary: 'Book an introductory call',
      },
    },

    services: {
      breadcrumb: 'Services',
      aiProcessAutomation: {
        hero: {
          eyebrow: 'AI process automation',
          heading: 'Automate the routine. Keep people on the decisions.',
          lead: 'We automate well-defined steps in finance, procurement and compliance workflows, with rules you can read and a record of every decision.',
          primary: 'Book an automation review',
          secondary: 'See how it works',
        },
        intro: {
          eyebrow: 'Where it helps',
          heading: 'Processes that are ready for automation',
          items: [
            { title: 'High volume, clear rules', body: 'Invoice intake, supplier onboarding checks, document classification: work that follows a policy but still takes specialist time.' },
            { title: 'Decisions that need a record', body: 'Approvals and exceptions that auditors and regulators will ask about, sometimes months after the fact.' },
            { title: 'Data locked in documents', body: 'Contracts, certificates and reports that someone currently re-keys into another system by hand.' },
          ],
        },
        band: {
          eyebrow: 'Built-in governance',
          heading: 'Every automated decision can be explained.',
          lead: 'When someone asks why an invoice was approved or a document was flagged, the answer is already on record.',
          points: [
            'A confidence score on every extracted field',
            'Policy rules kept outside the model, readable by your team',
            'A named person signs off where the policy requires it',
            'An audit trail you can export for each run',
            'Runs against a local open-weight model where data cannot leave your network',
          ],
        },
        steps: {
          eyebrow: 'How we deliver it',
          heading: 'Four steps, agreed with you before anything runs',
          items: [
            { title: 'Map the process', body: 'We walk the workflow with the people who run it and mark which steps follow rules, which need judgement and where the risk sits.' },
            { title: 'Design the controls', body: 'Rules, confidence thresholds and approval points are agreed with you before any step is automated.' },
            { title: 'Build and integrate', body: 'We connect to the systems you already use and keep the rules outside the model, so your team can read and change them.' },
            { title: 'Run and measure', body: 'Every decision is logged. We review accuracy with you and adjust thresholds as volumes change.' },
          ],
        },
        related: 'Automation in practice',
        closing: {
          heading: 'Start with one process.',
          body: 'In an automation review we map one workflow with your team and tell you what is worth automating, and what is not.',
          primary: 'Book an automation review',
        },
      },
      enterpriseUx: {
        hero: {
          eyebrow: 'Enterprise UX and product',
          heading: 'Internal tools your teams actually want to use.',
          lead: 'We redesign complex enterprise platforms, from procurement workflows to trading screens, around the people who use them every day.',
          primary: 'Book a UX review',
          secondary: 'See how we work',
        },
        intro: {
          eyebrow: 'When it helps',
          heading: 'Signs a system is working against its users',
          items: [
            { title: 'Adoption is low', body: 'People work around the system with spreadsheets and email, because the tool gets in the way of the job.' },
            { title: 'Training never ends', body: 'Every new starter needs weeks of support, and the same questions reach the help desk again and again.' },
            { title: 'Every change is expensive', body: 'Each new requirement becomes another custom screen, and the interface gets harder to maintain with every release.' },
          ],
        },
        deliver: {
          eyebrow: 'What we deliver',
          heading: 'From research to a design system your developers can build from',
          items: [
            { title: 'User research and service design', body: 'Interviews, workflow shadowing and journey maps that show where time and trust are lost.' },
            { title: 'Interface and interaction design', body: 'Screens designed for the real volume and density of enterprise work, tested with the people who use them.' },
            { title: 'Design systems', body: 'A component library and guidelines your developers can build from, so consistency survives the next release.' },
            { title: 'Rollout and adoption', body: 'We stay through build and rollout, with training material and measures that show whether people use the new tool.' },
          ],
        },
        band: {
          eyebrow: 'Built for regulated work',
          heading: 'Designed for decisions people are accountable for.',
          lead: 'Tools in finance, procurement and compliance carry more than tasks. They carry approvals, evidence and responsibility, and the interface has to make those clear.',
          points: [
            'Accessible by default, to WCAG 2.1 AA',
            'Approvals and their history visible where decisions are made',
            'Role-based views for requesters, approvers and auditors',
            'One design system, so every screen behaves the same way',
          ],
        },
        steps: {
          eyebrow: 'How we deliver it',
          heading: 'From first interview to rollout',
          items: [
            { title: 'Observe', body: 'We shadow the people who use the system and map where time and trust are lost.' },
            { title: 'Design', body: 'We design the flows and screens with your team, one workflow at a time.' },
            { title: 'Validate', body: 'We test prototypes with real users before anything goes into development.' },
            { title: 'Roll out', body: 'We support the build, write the training material and measure adoption after launch.' },
          ],
        },
        related: 'UX and product work in practice',
        closing: {
          heading: 'Start with one workflow.',
          body: 'In a UX review we observe one workflow with your team and show you where it loses time, and what to fix first.',
          primary: 'Book a UX review',
        },
      },
    },
    dome: {
      hero: {
        eyebrow: 'Capabilities',
        heading: 'Working AI tools, built and run by us.',
        lead: 'DOME is the set of tools we build to show what governed AI looks like in practice. Five are live and one is rolling out, and you can try them before any engagement.',
        primary: 'Book a guided demo',
        secondary: 'Sign in to the tools',
      },
      blocks: {
        eyebrow: 'The building blocks',
        heading: 'Four tools, each covering a phase of the method',
        openTool: 'Open the tool',
        details: 'Details',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Describe a business process in plain language and get a structured map, the systems involved, governance gaps and automation opportunities.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Put a strategic question to three AI advisers. They reason independently, challenge each other and return a verdict with the full reasoning on record.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Extract structured fields from invoices, contracts and reports, with a confidence score for each field and 16 governance checks.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Upload a spreadsheet and get a governed dashboard. A model classifies the data; a rules engine, not the model, chooses the charts.' },
        ],
      },
      agentFlow: {
        eyebrow: 'The method in production',
        badge: 'Private demo',
        heading: 'Agent Flow: from invoice to approval, every step on record',
        lead: 'Agent Flow chains the building blocks into one governed workflow, with a named person signing off wherever the policy requires it.',
        cta: 'How Agent Flow works',
        steps: [
          { title: 'An invoice arrives', body: 'A self-hosted workflow picks it up and opens a governed run that follows it from start to finish.' },
          { title: 'Extracted and checked against policy', body: 'Document Intelligence reads the invoice; a rules engine decides the approval path from amount, category, supplier and purchase order.' },
          { title: 'A council brief, then a person decides', body: 'Ambiguous or high-value invoices get a multi-model brief, and a named approver signs off.' },
          { title: 'One record you can reconstruct', body: 'Every step lands in the Governance Dashboard as a single timeline.' },
        ],
      },
      governance: {
        eyebrow: 'The governance layer',
        heading: 'Governance Dashboard',
        lead: 'One audit trail across every tool: each event, confidence score and human decision in one place, with PDF reports for internal audit.',
        openDashboard: 'Open the dashboard',
        details: 'Details',
      },
      standards: {
        eyebrow: 'How the tools are built',
        heading: 'The same standards we bring to client work',
        items: [
          { title: 'Hosted in the EU', body: 'The demo tools and their data run on infrastructure in the European Union.' },
          { title: 'They can run on your infrastructure', body: 'Process analysis, document and data intelligence each run against a local open-weight model through Ollama, as a configuration change rather than a rewrite. Nothing has to leave your network.' },
          { title: 'Not tied to one AI provider', body: 'Claude, Azure OpenAI or a local model, chosen per deployment. Models can change without redesigning the workflow or the controls around it.' },
          { title: 'Logged by design', body: 'Every tool records what it did, how confident it was and who reviewed the result.' },
        ],
      },
      partner: {
        text: 'Larger programmes are delivered together with our partner, Ionita Consulting.',
        cta: 'About the partnership',
      },
      closing: {
        heading: 'See the tools work on your own process.',
        body: 'In a guided demo we run your example through the tools and talk through what a governed rollout would involve.',
        primary: 'Book a guided demo',
      },
    },
    caseStudies: {
      hero: {
        eyebrow: 'Case studies',
        heading: 'What we built, and what changed.',
        lead: 'Anonymised accounts of the work: the problem as the client described it, what we did, and the outcomes the engagement actually produced.',
        primary: 'Talk about your project',
        secondary: 'See what we build',
      },
      groups: [
        { eyebrow: 'AI process automation', heading: 'Work that follows a policy' },
        { eyebrow: 'Enterprise UX and product', heading: 'Platforms people have to use every day' },
        { eyebrow: 'DOME capabilities', heading: 'The method running end to end' },
      ],
      note: 'Client details are anonymised throughout: we describe the sector and the function, never the organisation. Only outcomes the engagement actually produced are claimed.',
      closing: {
        heading: 'Recognise one of these problems?',
        body: 'Tell us which one, and we will tell you how we would approach it.',
        primary: 'Book an introductory call',
      },
    },
    caseStudy: {
      back: 'Case studies',
      challenge: 'The challenge',
      whatWeDid: 'What we did',
      outcomes: 'Outcomes',
      client: 'Client',
      role: 'Our role',
      capabilities: 'Capabilities',
      cta: 'Discuss a similar project',
      readNext: 'Read next',
      notFound: 'Case study not found',
      closing: {
        heading: 'Recognise this problem?',
        body: 'Tell us where your process gets stuck, and we will tell you how we would approach it.',
        primary: 'Book an introductory call',
      },
    },
    about: {
      hero: {
        eyebrow: 'About DOME',
        heading: 'An AI and product consultancy for regulated enterprises.',
        lead: 'We help regulated enterprises design software people use, and automate work in a way auditors can follow.',
        primary: 'Talk to us',
        secondary: 'See our work',
      },
      who: {
        eyebrow: 'Who we are',
        heading: 'Complex enterprise work, made simpler to use and safer to automate.',
        paragraphs: [
          'DOME works with procurement, finance, compliance and supply chain teams in regulated sectors. We bring enterprise UX and AI process automation together, so the systems people use every day are clear to work with and clear to audit.',
          'We also build and run our own governed AI tools. Our advice on automation comes from systems we operate, not from slides.',
        ],
      },
      facts: [
        { figure: '3', label: 'service lines, from UX research to audited automation' },
        { figure: '6', label: 'AI tools we build and operate ourselves' },
        { figure: '3', label: 'model providers, including open-weight models on your own infrastructure' },
        { figure: '10', label: 'years delivering with our partner firm' },
      ],
      setup: {
        eyebrow: 'How we are set up',
        heading: 'A team shaped around each engagement',
        lead: 'We do not carry a bench of consultants waiting for work. Each engagement gets the specialists its problem calls for, under one accountable lead.',
        items: [
          { title: 'Engagement lead', body: 'A senior lead owns each engagement from the first call to handover. You have one point of contact, and one person accountable for the outcome.' },
          { title: 'Specialist network', body: 'We bring in UX researchers, interface designers, engineers, data specialists and compliance advisers from our network of collaborating consultants, when the work needs them.' },
          { title: 'Delivery partner', body: 'Larger programmes are delivered with Ionita Consulting, which gives us the capacity to staff longer or broader engagements without changing how we work.' },
        ],
      },
      expect: {
        eyebrow: 'How we work together',
        heading: 'What you can expect from us',
        items: [
          { title: 'Small, senior teams', body: 'The people you meet at the start are the people who do the work.' },
          { title: 'Governance from the start', body: 'Controls and audit needs shape the design from the first workshop, not after go-live.' },
          { title: 'Proof before commitment', body: 'You see working tools and past outcomes before you commit to anything.' },
        ],
      },
      partner: {
        eyebrow: 'Our delivery partner',
        heading: 'Ionita Consulting',
        body: 'Larger programmes are delivered together with Ionita Consulting, based in Utrecht, with whom we have worked for ten years. Together we can staff engagements that need more specialists or a longer runway.',
      },
      leadership: {
        eyebrow: 'Leadership',
        heading: 'Who leads the work',
        name: 'Francesco Prodomo',
        role: 'Founder and engagement lead',
        bio: 'Ten years in enterprise product design and procurement systems, from user research to delivery.',
        linkedin: 'LinkedIn profile',
      },
      where: {
        eyebrow: 'Where we work',
        heading: 'Based in Florence, working across Europe',
        lead: 'We work with clients in English and Italian, on site or remotely.',
        cta: 'See our case studies',
      },
      closing: {
        heading: 'Tell us about the process that slows your team down.',
        body: 'A 30-minute call is enough to tell whether we can help.',
        primary: 'Book an introductory call',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        heading: 'Tell us about your process.',
        lead: 'Book a 30-minute call or send us a message. We reply within two working days.',
        primary: 'Book a call',
        secondary: 'See our work',
      },
      book: { heading: 'Book a call', lead: 'Pick a time that suits you. Choose a topic so we can prepare.' },
      calendar: {
        topicLegend: 'What would you like to talk about?',
        notLoaded: 'The calendar has not loaded yet. It opens here when you choose a length.',
        show30: 'Show available times (30 min)',
        show15: 'Just 15 minutes',
        notice: 'The calendar is provided by Cal.com and loads only when you click.',
        noticeEnd: 'privacy policy then applies. Nothing is sent to them before that.',
      },
      details: {
        eyebrow: 'Other ways to reach us',
        heading: 'Company details',
        email: 'Email',
        pec: 'Certified email (PEC)',
        booking: 'Booking',
        locationValue: 'Florence, Italy',
        location: 'Location',
        legal: 'Dome di Francesco Prodomo · P.IVA 07242670482',
      },
    },
    tools: {
      back: 'Tools',
      whatItDoes: 'What it does',
      howItWorks: 'How it works',
      method: 'DOME method',
      processAnalyzer: {
        phase: 'Discover',
        lead: 'Convert a plain-language description of any business process into a structured process map with governance analysis and automation assessment.',
        open: 'Open Process Analyzer',
        whatItDoes:
          'Process Analyzer takes unstructured business process descriptions and returns structured, visual outputs that operations managers and process owners can act on immediately. It identifies which systems touch each step, estimates processing time, and flags where governance controls are absent or insufficient. The tool also assesses which parts of the process are candidates for AI automation, with a clear indication of what oversight would be needed before any automation is deployed.',
        howItWorks: {
          heading: 'Three steps from description to map.',
          steps: [
            { title: 'Describe the process', body: 'Write a plain-language description of any business process: a procurement workflow, an approval chain, an onboarding sequence. No templates or structured input required.' },
            { title: 'Receive a structured map', body: 'The tool generates a visual flowchart (Mermaid.js), identifies the systems involved, estimates time at each stage, and surfaces governance exposure points.' },
            { title: 'Understand automation opportunities', body: 'Each step is assessed for AI automation potential, with a confidence score and a plain explanation of what governance measures would be required before deployment.' },
          ],
        },
        method: {
          phase: 'Discover',
          body: 'The Discover phase maps what actually exists before any AI architecture is designed. Process Analyzer is the practical implementation of this phase: it builds the process inventory, exposes regulatory and governance gaps, and produces the structured foundation that all subsequent DOME phases require. A deployment cannot be designed until the process landscape is understood.',
        },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        lead: 'Pose a strategic question to a panel of three AI advisors. They deliberate independently, cross-examine each other, and produce a governed verdict with full audit trail.',
        open: 'Open LLM Council',
        whatItDoes:
          "LLM Council structures AI-assisted deliberation around high-stakes decisions. Rather than producing a single model response, it convenes a panel of three advisors that reason independently, challenge each other's positions, and resolve disagreement through structured cross-examination. The output is not just an answer: it is an auditable deliberation. Every reasoning step, every challenge raised, and every point of consensus or dissent is logged and available for governance review. Decision-makers receive a verdict they can interrogate, not just accept.",
        howItWorks: {
          heading: 'Ask, deliberate, decide.',
          steps: [
            { title: 'Pose a strategic question', body: 'Submit any high-stakes question, such as a market entry decision, a risk assessment or a policy trade-off. No structured format required: plain language is sufficient.' },
            { title: 'Three advisors deliberate independently', body: "A panel of three AI advisors each analyses the question from a distinct perspective. They reason independently first, then cross-examine each other's positions, surfacing disagreement rather than suppressing it." },
            { title: 'A governed verdict with full audit trail', body: 'The Council produces a synthesised verdict that reflects areas of consensus and documents dissenting views. Every reasoning step is logged: the full deliberation trail is available for review and governance sign-off.' },
          ],
        },
        method: {
          phase: 'Orchestrate',
          body: 'The Orchestrate phase ensures that consequential decisions are not delegated to a single model inference. LLM Council is the practical implementation of this principle: it enforces structured disagreement, requires independent reasoning before consensus is sought, and produces an audit trail that satisfies governance requirements. Where other phases of DOME constrain what AI can do, Orchestrate constrains how AI reaches conclusions, making the reasoning process itself accountable.',
        },
      },
      documentIntelligence: {
        phase: 'Model',
        lead: 'Extract structured data from any document: invoices, lab reports, utility bills, contracts. Governance validation and full audit trail included.',
        open: 'Open Document Intelligence',
        whatItDoes:
          'Document Intelligence converts unstructured source documents into structured, validated data without manual data entry or custom templates. It identifies document type and industry automatically, extracts every relevant field with a confidence score, and applies a governance rules engine that checks for anomalies, missing required fields, expired dates, large monetary amounts, potential personal data exposure, and more. Every extraction is saved to a searchable audit history. The output is a governed, exportable dataset ready for downstream systems.',
        howItWorks: {
          heading: 'Upload, extract, validate.',
          steps: [
            { title: 'Upload or photograph a document', body: 'Provide a PDF or image file, or capture a document directly from your camera. The system accepts invoices, lab reports, utility bills, contracts, bank statements, and more. No templates or configuration required.' },
            { title: 'Extraction and governance validation', body: 'Fields are extracted with confidence scores, document type and industry are identified automatically, and 16 governance rules are applied to flag anomalies, missing data, expired dates, large monetary amounts, and potential compliance concerns.' },
            { title: 'Review, save, and export', body: 'Inspect every extracted field with its section, type, and confidence score. Review governance flags by severity. Export to CSV for downstream processing, or save to your history for audit and traceability.' },
          ],
        },
        method: {
          phase: 'Model',
          body: 'The Model phase is where governed AI decisions produce operational outputs. Document Intelligence is the Model-phase entry point for organisations that need structured data from unstructured documents at scale. Rather than trusting raw model extraction, every output is validated against a deterministic governance rules engine before it reaches downstream systems, ensuring that what enters your workflows is auditable, consistent, and defensible. This is where the DOME cycle turns process discovery into governed execution.',
        },
      },
      dataIntelligence: {
        phase: 'Orchestrate & Model',
        lead: 'Upload a spreadsheet and receive a governed analytics dashboard with automatic chart selection and a natural language Q&A panel.',
        open: 'Open Data Intelligence',
        whatItDoes:
          'Data Intelligence transforms structured spreadsheet data into a governed analytics dashboard without manual configuration. The system classifies each column by type (date, category, metric), then applies a rules engine to determine which chart types are appropriate. Chart selection is deterministic and auditable: the same data always produces the same chart decisions, and every governance rule applied is recorded. A natural language Q&A panel allows analysts to interrogate the data after the dashboard is generated.',
        howItWorks: {
          heading: 'Upload, classify, analyse.',
          steps: [
            { title: 'Upload a spreadsheet', body: 'Provide a CSV, XLSX, or XLS file. The tool receives column names, data types, sample values, and aggregates. Raw row data is discarded immediately and never stored.' },
            { title: 'Governed dashboard generation', body: 'A language model classifies each column. A deterministic rules engine, not the model, then selects the appropriate chart type for each data relationship. The model informs; governance decides.' },
            { title: 'Natural language Q&A', body: 'Once the dashboard is generated, ask questions about the data in plain language. The Q&A panel operates on the classified column summary, not on the raw data.' },
          ],
        },
        method: {
          phase: 'Orchestrate & Model',
          body: 'The Orchestrate and Model phases define how AI components are coordinated and configured within a governance framework. Data Intelligence is a practical demonstration of this: the language model is confined to column classification (a bounded, low-risk task), while a deterministic rules engine makes the consequential decisions about data presentation. This separation of responsibilities is the architectural pattern DOME applies across all governed AI deployments.',
        },
      },
      governanceDashboard: {
        phase: 'Govern',
        lead: 'The observation and compliance layer that spans every DOME AI tool. One signed-in view of every governance event, confidence score, and human-in-loop decision, with PDF export for audit and regulatory submissions.',
        open: 'Open Governance Dashboard',
        whatItDoes:
          'The Governance Dashboard is the cross-cutting observation layer for the entire DOME platform. It aggregates governance events emitted by all four AI tools into a single, searchable audit trail. Operations managers, compliance officers, and auditors can inspect every AI decision, review confidence distributions, identify rules triggered, and flag human-in-loop actions, all without touching the individual tools. PDF reports are generated on demand for any time window and tool subset.',
        howItWorks: {
          heading: 'From tool usage to compliance report.',
          steps: [
            { title: 'Use the AI tools normally', body: 'Run any of the four DOME tools: Process Analyzer, LLM Council, Data Intelligence, or Document Intelligence. Every request automatically emits a governance event capturing the action, confidence score, rules applied, and human-in-loop recommendation.' },
            { title: 'Review the audit trail', body: 'The Event Log shows every governance event in reverse-chronological order. Filter by tool, date range, action type, confidence threshold, or human-review status. Click any event to inspect the full decision record.' },
            { title: 'Export for compliance', body: 'Generate a PDF audit report for any date range and tool subset in one click. Reports include a summary, confidence distribution, and a full event table with review decisions, ready for internal audit or regulatory submission.' },
          ],
        },
        method: {
          phase: 'Govern',
          body: 'The Govern layer is the thread that runs through every other DOME phase. Where Discover maps processes, Orchestrate coordinates decisions, and Model extracts or analyses data, Govern records what actually happened and ensures it can be explained, audited, and challenged. The Governance Dashboard makes the Govern layer tangible: a live, inspectable record that turns AI activity into accountable evidence, the foundation for any regulated deployment.',
        },
      },
      agentFlow: {
        phase: 'Execute',
        lead: 'A self-hosted n8n workflow that runs a real invoice-to-approval process across the DOME tools (extraction, a policy rules engine, a multi-model council, and a human approval gate), emitting a full audit trail the Governance Dashboard reconstructs.',
        openQueue: 'Open the approval queue',
        bookDemo: 'Book a private demo',
        demoNote: 'Shown live, on real invoices, in a guided walkthrough.',
        steps: [
          { title: 'An invoice arrives', body: 'A vendor emails an invoice to the AP inbox, or it is uploaded through the workflow form. A self-hosted n8n workflow picks it up and opens a governed run with a single workflow id that follows it end to end.' },
          { title: 'Extract, then evaluate against policy', body: 'Document Intelligence extracts the fields and confidence; a data-driven rules engine then decides the approval path from amount tier, purchase category, country and VAT, vendor allowlist, PO match, currency, and duplicate detection.' },
          { title: 'Council brief, then a human gate', body: 'Ambiguous or high-value invoices get a multi-model LLM Council decision brief. A named approver signs off on a branded review page, or low-risk invoices auto-approve under policy. Every step is written to the Governance Dashboard as one reconstructable timeline.' },
        ],
      },
    },
    privacy: {
      back: '← Back to domelayer.com',
      updated: 'Last updated: October 2026',
      title: 'Privacy policy',
      appliesTo:
        'Applies to: domelayer.com and all subdomains (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      sections: [
        {
          heading: 'Who we are',
          blocks: [
            { p: 'Dome is operated by Francesco Prodomo, a sole trader registered in Italy (P.IVA 07242670482), trading as Dome. References to "Dome", "we", or "us" in this policy refer to Francesco Prodomo trading as Dome.' },
            { p: 'Location: Florence, Italy\nContact for privacy matters: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo is the data controller for all personal data collected through domelayer.com and its associated tools.' },
          ],
        },
        {
          heading: 'What this policy covers',
          blocks: [
            { p: 'This policy explains what personal data we collect when you visit domelayer.com or register to use the Dome AI tools, why we collect it, how long we keep it, and what rights you have over it.' },
            { p: 'This policy applies exclusively to domelayer.com and the Dome portfolio tools. It does not apply to AI systems or software that Dome designs and deploys for third-party clients: those engagements are governed by separate contracts and data processing agreements negotiated per project.' },
            { p: 'We do not sell personal data. We do not use personal data for advertising.' },
          ],
        },
        {
          heading: 'What data we collect and why',
          blocks: [
            { h3: 'Website visitors (no account required)' },
            { p: 'When you visit domelayer.com, we do not place analytics cookies or third-party tracking scripts. Two functional cookies may be set: `dome-theme` remembers your light or dark theme preference and `dome_locale` remembers the language you chose. Neither contains personal data or is used for tracking. The full list, including what your browser stores, is in our [cookie policy](cookies).' },
            { basis: 'Legal basis: Legitimate interest (Art. 6(1)(f) GDPR), for storing a display preference you chose.' },
            { p: 'Like any website, our hosting providers keep standard server logs, which include your IP address, for security and to keep the service running. If a page fails, our error monitoring receives a technical report (for example the browser type and the page address). Error reports do not include your name or email address.' },
            { basis: 'Legal basis: Legitimate interest (Art. 6(1)(f)), for the security and reliability of the website.' },
            { h3: 'Contact form and call bookings' },
            { p: 'If you write to us through the contact form, we receive your name, work email, company (if you give it), the topic and your message, and use them only to reply. To protect the form from abuse, our hosting provider counts submissions per IP address over one minute; the count is not stored.' },
            { p: 'If you book a call, the calendar is provided by Cal.com and loads only when you choose to book. The details you enter there (name, email and any notes) reach us through Cal.com.' },
            { basis: 'Legal basis: Steps taken at your request before entering into a contract (Art. 6(1)(b)), and legitimate interest (Art. 6(1)(f)) in answering business enquiries and protecting the form from abuse.' },
            { p: 'We may in future deploy privacy-preserving, cookieless analytics tools to understand aggregate usage patterns. Such tools do not set cookies and do not collect personal data. This policy will be updated if we introduce them. We will never introduce cookie-based analytics or advertising trackers without updating this policy and, where required by law, obtaining your consent first.' },
            { h3: 'Registered tool users' },
            { p: 'When you register to use the Dome AI tools, we collect and process the following data:' },
            { label: 'Email address' },
            { p: 'Collected when you register, either directly by email (magic link) or through your Google or GitHub account. Used to authenticate your account. Also used, with your explicit consent, to send you product updates or commercial communications from Dome.' },
            { label: 'Sign-in with Google or GitHub' },
            { p: 'If you choose to sign in with Google or GitHub, that provider shares with us your email address, your name, a link to your profile picture and an account identifier. We use them only to create and recognise your account. Google and GitHub process your sign-in under their own privacy policies, as independent controllers. We never see your Google or GitHub password.' },
            { basis: 'Legal basis: Contract performance (Art. 6(1)(b)) for authentication, including sign-in with Google or GitHub. Consent (Art. 6(1)(a)) for marketing communications.' },
            { label: 'Sign-in timestamps and session metadata' },
            { p: 'Each time you authenticate, we record the time and method of sign-in as standard security practice.' },
            { basis: 'Legal basis: Legitimate interest (Art. 6(1)(f)), for security, fraud prevention, and service integrity.' },
            { label: 'Data you submit to the tools' },
            { p: "When you use a Dome tool, you may upload files, enter text, or interact with AI features. We collect and may store data derived from these interactions to provide the service, including session state, analysis outputs, saved results, governance log metadata, and other structured data necessary to deliver the tool's functionality." },
            { p: 'We process this data to operate the service. We do not use it to train AI models, share it with third parties for commercial purposes, or access it except to provide technical support when you request it.' },
            { p: 'The specific data retained depends on the tool used and the features you engage with. All stored data is associated with your account, protected by row-level security controls, and accessible only to your authenticated session. You may delete your saved data at any time from within the tool.' },
            { basis: 'Legal basis: Contract performance (Art. 6(1)(b)), for delivering the functionality you have requested.' },
            { label: 'Governance log metadata' },
            { p: "Each action taken within a Dome tool generates a governance event record containing: a hash of your input (not the input itself), the action type, a timestamp, which governance rules were applied and triggered, a short summary of the result, and technical metadata such as confidence scores. This metadata record is the audit trail that underpins Dome's governance architecture." },
            { basis: 'Legal basis: Legitimate interest (Art. 6(1)(f)), for service integrity and quality assurance.' },
            { label: 'Marketing consent record' },
            { p: 'If you opt in to marketing communications at registration, we store a record of that consent: the date, your choice, and the version of the consent text shown to you.' },
            { basis: 'Legal basis: Legal obligation (Art. 6(1)(c)), for documenting consent as required under GDPR.' },
          ],
        },
        {
          heading: 'What we do not do',
          blocks: [
            {
              list: [
                'We do not collect or store passwords. You sign in with a magic link sent to your email, or through your Google or GitHub account.',
                'We do not collect payment information. All Dome tools are free to use.',
                'We do not use your data to train AI models.',
                'We do not share your data with third parties for commercial or advertising purposes.',
                'We do not knowingly collect data from minors under 18.',
              ],
            },
          ],
        },
        {
          heading: 'Who we share your data with',
          blocks: [
            { p: 'We use the following third-party service providers to operate Dome. Each acts as a data processor under a data processing agreement:' },
            { p: '**Supabase Inc.**: Database and authentication. Data is stored in the European Union (Frankfurt, Germany: eu-central-1). supabase.com/privacy' },
            { p: '**Cloudflare Inc.**: Hosting of this website, including the contact form and its abuse protection. cloudflare.com/privacypolicy' },
            { p: '**Vercel Inc.**: Hosting of the Dome tools. vercel.com/legal/privacy-policy' },
            { p: '**Railway Corp.**: Hosting of the back-end services behind the Dome tools. railway.com/legal/privacy' },
            { p: '**Resend Inc.**: Transactional email. Used to send magic links, to deliver messages sent through the contact form to us and, with your consent, product communications. resend.com/legal/privacy-policy' },
            { p: '**Functional Software Inc. (Sentry)**: Error monitoring for the website and the tools. Error data is stored in the European Union (Germany). sentry.io/privacy' },
            { p: '**Cal.com Inc.**: Call booking, only when you choose to book a call. cal.com/privacy' },
            { h3: 'AI processing' },
            { p: 'When you use a Dome tool, your input is transmitted to an AI provider to generate a response. Each provider processes it under its API data processing terms and does not use API data to train its models by default.' },
            { p: '**Anthropic PBC**: All Dome tools. anthropic.com/privacy' },
            { p: '**OpenAI**: LLM Council only, as one of its three independent advisors. openai.com/policies/privacy-policy' },
            { p: '**Google (Gemini API)**: LLM Council only, as one of its three independent advisors. policies.google.com/privacy' },
            { p: 'We do not use advertising networks, social media trackers, or data brokers.' },
          ],
        },
        {
          heading: 'International transfers',
          blocks: [
            { p: 'Your account and the data you save in the tools are stored within the European Union, on Supabase infrastructure in Frankfurt. Error monitoring data is also stored in the European Union.' },
            { p: 'Cloudflare, Vercel, Railway, Resend, Cal.com, Anthropic, OpenAI and Google are based in the United States or process data there. Transfers to them rely on the EU-US Data Privacy Framework where the provider is certified under it, and otherwise on Standard Contractual Clauses (SCCs) under GDPR Article 46.' },
            { p: "**UK users:** Transfers between the UK and EU are covered by the UK-EU adequacy decision currently in effect. UK users may direct complaints to the Information Commissioner's Office (ico.org.uk)." },
          ],
        },
        {
          heading: 'How long we keep your data',
          blocks: [
            {
              table: {
                head: ['Data', 'Retention'],
                rows: [
                  ['Email address and account record', 'Until you request account deletion'],
                  ['Sign-in timestamps', '12 months rolling'],
                  ['Tool session data and saved outputs', 'Until you delete them, or until account deletion'],
                  ['Governance log metadata', '12 months rolling'],
                  ['Contact form messages and call bookings', 'Up to 24 months after our last exchange'],
                  ['Contact form rate-limit counter (IP address)', '1 minute, not stored'],
                  ['Server and error logs', 'Up to 90 days'],
                  ['Marketing consent record', 'Duration of account, plus 3 years after deletion'],
                ],
              },
            },
            { p: 'On account deletion, we erase your personal data within 30 days, except where retention is required by law.' },
          ],
        },
        {
          heading: 'Your rights',
          blocks: [
            { p: 'To exercise any right, email [privacy@domelayer.com](mailto:privacy@domelayer.com) from the address associated with your account. We respond within 30 days.' },
            {
              list: [
                '**Access**: request a copy of all personal data we hold about you.',
                '**Rectification**: ask us to correct inaccurate data.',
                '**Erasure**: ask us to delete your data within 30 days.',
                '**Restriction**: ask us to pause processing while a dispute is resolved.',
                '**Portability**: request your data in a structured, machine-readable format.',
                '**Object**: object to processing based on legitimate interest.',
                '**Withdraw consent**: withdraw marketing consent at any time via the unsubscribe link in any email or by contacting privacy@domelayer.com.',
              ],
            },
            { p: '**Complain**: lodge a complaint with a supervisory authority:' },
            {
              list: [
                'Italy: Garante per la Protezione dei Dati Personali (garante.privacy.it)',
                "UK: Information Commissioner's Office (ico.org.uk)",
                'You may also contact the authority in your country of residence.',
              ],
            },
          ],
        },
        {
          heading: 'Cookies',
          blocks: [
            { p: 'Every cookie and browser storage entry we use is listed, with its purpose and duration, in our [cookie policy](cookies). In short: one cookie keeps you signed in, two remember your theme and language, and none is used for tracking or advertising. No third-party cookies are set while you browse.' },
          ],
        },
        {
          heading: 'Security',
          blocks: [
            { p: 'We implement appropriate technical and organisational measures to protect your data, including row-level security on all database tables, HTTPS encryption in transit, and passwordless sign-in (magic link, Google or GitHub) with no stored passwords.' },
            { p: 'No system is completely secure. If you believe your account has been compromised, contact [privacy@domelayer.com](mailto:privacy@domelayer.com) immediately.' },
          ],
        },
        {
          heading: 'Changes to this policy',
          blocks: [
            { p: 'We may update this policy to reflect changes in our practices or legal requirements. If we make material changes, we will notify registered users by email at least 30 days before the changes take effect. The "last updated" date at the top of this page reflects the current version.' },
          ],
        },
        {
          heading: 'Contact',
          blocks: [
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo trading as Dome · Florence, Italy · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: 'Terms of service →',
    },
    cookies: {
      back: '← Back to domelayer.com',
      updated: 'Last updated: October 2026',
      title: 'Cookie policy',
      appliesTo:
        'Applies to: domelayer.com and all subdomains (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      sections: [
        {
          heading: 'In short',
          blocks: [
            { p: 'We use three cookies and a few entries in your browser’s storage. All of them are set by us, on our own domain, for one of three reasons: to keep you signed in, to remember a choice you made, or to make a page work. None of them is used to track you, to build a profile of you or to advertise to you, and none is shared with anyone else.' },
            { p: 'That is why this site has no consent banner. Cookies and storage of this kind are technical: under Article 122 of the Italian Privacy Code and the Garante’s cookie guidelines of June 2021 they need no consent, only this information.' },
            { p: 'A first visit sets nothing. Everything below appears only after you do something: sign in, switch theme or language, close the cookie notice, or use a tool. There is one exception: if your browser prefers Italian and you open an English page, we take you to the Italian version once and set `dome_locale` so that we do not do it again.' },
          ],
        },
        {
          heading: 'Cookies',
          blocks: [
            {
              table: {
                head: ['Cookie', 'What it does', 'Duration', 'Type'],
                rows: [
                  ['`dome_auth_token`', 'Keeps you signed in on domelayer.com and in the Dome tools. Set when you sign in, for every domelayer.com subdomain.', 'Until your sign-in expires, at most 8 hours', 'Strictly necessary'],
                  ['`dome-theme`', 'Remembers whether you chose the light or the dark theme, on the site and in the tools. Set when you switch theme.', '1 year', 'Functional: a preference you set'],
                  ['`dome_locale`', 'Remembers your language. Set when you switch language, or once when we take an Italian-language browser to the Italian site. domelayer.com only.', '1 year', 'Functional: a preference you set'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Browser storage',
          blocks: [
            { p: 'Some information is kept in your browser’s local storage, which lasts until you clear it, or its session storage, which lasts until you close the tab. Only the page that wrote an entry reads it back.' },
            {
              table: {
                head: ['Entry', 'Where', 'What it holds', 'How long'],
                rows: [
                  ['`dome-theme`', 'Local storage, on domelayer.com and in each tool', 'Your theme choice, a copy of the cookie of the same name', 'Until you clear it'],
                  ['`dome-cookie-notice-dismissed`', 'Local storage, domelayer.com', 'That you closed the cookie notice, so that it does not come back', 'Until you clear it'],
                  ['`dome_pending_consent`', 'Local storage, domelayer.com', 'When you register: the version of the terms you accepted and your choice about product updates, until they are saved to your account', 'Until registration completes'],
                  ['`dome_consent_accepted`', 'Local storage, domelayer.com', 'The version of the terms you accepted, so that this device does not ask you again', 'Until you clear it'],
                  ['`sb-…-auth-token`, `sb-…-code-verifier`', 'Local storage, domelayer.com', 'A temporary record created by our sign-in provider, Supabase, while you sign in', 'Removed once you are signed in, usually within minutes'],
                  ['`dome_auth_redirect`', 'Session storage, domelayer.com', 'The tool page to take you back to after you sign in', 'Until you close the tab'],
                  ['`react-router-scroll-positions`', 'Session storage, domelayer.com', 'Where you were on each page, so that Back returns you to the same place', 'Until you close the tab'],
                  ['`dome_doc_result_…`', 'Session storage, document-intelligence.domelayer.com', 'The result of your last extraction and the file name, for the result page', 'Until you close the tab'],
                  ['`dome_session_…`', 'Session storage, data-intelligence.domelayer.com', 'The rows of the spreadsheet you uploaded and their analysis, so that the dashboard opens without asking the server again', 'Until you close the tab'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Measurement',
          blocks: [
            { p: 'We do not run analytics on this website or in the tools. What we count, we count on our own systems: messages sent through the contact form, calls booked, and, for signed-in users, the tool runs each tool records in its audit trail, as described in the [privacy policy](privacy).' },
            { p: 'If we add aggregate measurement that uses no cookies, this page will describe it before it starts.' },
          ],
        },
        {
          heading: 'Other services',
          blocks: [
            { p: '**Cloudflare**, which hosts this website, sets no cookies on it. To protect the contact form from abuse, it counts submissions per IP address over one minute; the count is not stored.' },
            { p: '**Sentry**, our error monitoring (EU region), sends a technical report if a page fails. It sets no cookies and stores nothing in your browser.' },
            { p: '**Fonts** are served from our own domains. No page loads anything from Google Fonts.' },
            { p: '**Cal.com** provides the booking calendar on the contact page. It loads only when you choose to book a call; from then on Cal.com may set its own cookies, under its own privacy policy.' },
          ],
        },
        {
          heading: 'Your choices',
          blocks: [
            { p: 'You can delete cookies and browser storage at any time in your browser’s settings, and block them altogether. Deleting `dome_auth_token` signs you out; deleting any of the others only resets your theme, your language, the cookie notice or the page you were on.' },
          ],
        },
        {
          heading: 'Changes and contact',
          blocks: [
            { p: 'We update this page whenever we add, change or remove a cookie or a storage entry, and before a new one is used. The date at the top shows the current version.' },
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo trading as Dome · Florence, Italy · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: 'Privacy policy →',
    },
    terms: {
      back: '← Back to domelayer.com',
      updated: 'Last updated: September 2026',
      title: 'Terms of service',
      appliesTo:
        'Applies to: analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com',
      sections: [
        {
          heading: 'Who provides these tools',
          blocks: [
            { p: 'The Dome AI tools are operated by Francesco Prodomo, a sole trader registered in Italy (P.IVA 07242670482), trading as Dome.' },
            { p: 'Location: Florence, Italy\nContact: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'What these terms cover',
          blocks: [
            { p: 'By registering for and using any Dome AI tool, you agree to these terms. Please read them before registering. If you do not agree, do not use the tools.' },
            { p: 'These terms apply to the Dome portfolio tools available at the subdomains listed above. They do not govern engagements where Dome designs or deploys AI systems for third-party organisations: those are governed by separate project agreements.' },
            { p: 'These terms apply alongside our [Privacy Policy](privacy), which is incorporated by reference.' },
          ],
        },
        {
          heading: 'The tools',
          blocks: [
            { p: 'Dome provides a suite of free AI-assisted tools for exploring governance-driven operational AI concepts, including process analysis, document intelligence, data intelligence, and related demonstrations.' },
            { p: 'The tools are provided free of charge on an "as is" basis for demonstration and evaluation purposes.' },
          ],
        },
        {
          heading: 'Your account',
          blocks: [
            { p: 'You register with your email address, either by requesting a magic link or by signing in with your Google or GitHub account. No Dome password is required or stored. You are responsible for keeping your email, Google or GitHub account secure.' },
            { p: 'You may only register one account per email address. You may not share your account or register on behalf of another person without their knowledge and consent.' },
            { p: 'We reserve the right to suspend or terminate accounts that breach these terms, are used in a way that is harmful to others, or compromise the integrity of the service.' },
          ],
        },
        {
          heading: 'Acceptable use',
          blocks: [
            { p: 'You agree to use the Dome tools only for lawful purposes and in accordance with these terms.' },
            { label: 'You must not:' },
            {
              list: [
                'Upload files or enter content that you do not have the legal right to process. If content contains personal data of third parties, you are responsible for ensuring you have a lawful basis under GDPR or applicable law to process that data using a third-party AI service.',
                'Upload content containing special categories of personal data (health data, biometric data, political opinions, religious beliefs, or similar) unless you have a documented lawful basis and, where required, explicit consent from the relevant individuals.',
                'Attempt to reverse-engineer, extract model weights from, or systematically probe the underlying AI systems.',
                'Use the tools to generate content that is unlawful, defamatory, fraudulent, or harmful to others.',
                'Use automated means to access the tools at a scale that disrupts service availability.',
                "Attempt to access another user's data or circumvent authentication controls.",
              ],
            },
          ],
        },
        {
          heading: 'Data and AI processing',
          blocks: [
            { p: 'When you use a Dome tool, content you submit is transmitted to an AI model for processing: Anthropic for all tools, and additionally OpenAI and Google for LLM Council. Dome may store data derived from your use of the tools, including session state, saved analyses, and governance metadata, to provide the service. Full details of what is collected, how it is used, and how long it is retained are set out in the [Privacy Policy](privacy).' },
            { p: 'You retain full ownership of all content you submit and all outputs generated from it. Dome claims no licence or rights over your inputs or outputs.' },
            { p: 'You are responsible for ensuring that content you submit does not include confidential information belonging to third parties that you are not authorised to share with an external AI processing service.' },
          ],
        },
        {
          heading: 'AI outputs: important disclaimer',
          blocks: [
            { warning: '**AI outputs are not professional advice.** Nothing produced by the Dome tools constitutes legal, financial, procurement, compliance, operational, or any other form of professional advice. You should not act on AI-generated outputs without independent verification by a qualified professional.' },
            { p: 'The Dome tools use large language models to generate analyses, summaries, classifications, and recommendations. These outputs are generated automatically and are provided for informational and demonstration purposes only.' },
            { p: 'Dome does not guarantee the accuracy, completeness, or fitness for purpose of any AI-generated output. AI models can produce errors and outputs that appear plausible but are factually incorrect. You are solely responsible for evaluating outputs before relying on them.' },
            { p: 'This disclaimer is particularly important in regulated contexts (procurement, finance, trade compliance, legal, and similar domains) where incorrect outputs could have material consequences.' },
          ],
        },
        {
          heading: 'Availability and changes',
          blocks: [
            { p: 'The Dome tools are provided free of charge and are subject to change, interruption, or discontinuation at any time. We will endeavour to give reasonable notice before significant changes or shutdowns, but make no commitments regarding uptime, availability, or feature continuity.' },
            { p: 'We may add, modify, or remove features at any time.' },
          ],
        },
        {
          heading: 'Intellectual property',
          blocks: [
            { p: 'The Dome name, logo, website, and tool interfaces are the property of Francesco Prodomo. You may not reproduce or use them without written permission.' },
            { p: 'All rights to your submitted content and derived outputs remain with you.' },
          ],
        },
        {
          heading: 'Limitation of liability',
          blocks: [
            { p: 'To the fullest extent permitted by applicable law, Francesco Prodomo and Dome shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the tools, including losses arising from reliance on AI-generated outputs.' },
            { p: 'Our total liability to you for any claim arising from use of the tools shall not exceed zero euros, reflecting that the tools are provided to you free of charge.' },
            { p: 'Nothing in these terms excludes or limits liability for wilful misconduct or gross negligence (Article 1229 of the Italian Civil Code), for death or personal injury caused by negligence, for fraud, or any other liability that cannot be excluded under Italian law.' },
          ],
        },
        {
          heading: 'Governing law and jurisdiction',
          blocks: [
            { p: 'These terms are governed by Italian law. Any disputes arising from these terms or your use of the Dome tools shall be subject to the exclusive jurisdiction of the Tribunale di Firenze, Italy.' },
            { p: 'If you are a consumer resident in another EU member state or the UK, you retain the benefit of any mandatory protections provided by the laws of your country of residence that cannot be excluded by contract.' },
          ],
        },
        {
          heading: 'Changes to these terms',
          blocks: [
            { p: 'We may update these terms from time to time. If we make material changes, we will notify you by email at least 30 days before they take effect. Continued use of the tools after the effective date constitutes acceptance of the revised terms.' },
            { p: 'The current version is always available at [domelayer.com/terms](terms).' },
          ],
        },
        {
          heading: 'Contact',
          blocks: [
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo trading as Dome · Florence, Italy · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: '← Privacy policy',
    },
  },
}
