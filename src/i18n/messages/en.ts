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
    rights: 'All rights reserved.',
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
    rateLimited: 'You have reached the contact-form limit. Please try again in an hour.',
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
        badge: 'Rolling out',
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
  },
}
