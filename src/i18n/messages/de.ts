import type { Messages } from './types'

// German copy, written rather than translated: German as used in Germany, for IT directors,
// compliance leads and operations managers, plain and specific. Address the reader as "Sie"
// throughout, never "du". Buttons use the infinitive ("Gespräch vereinbaren"), as German
// interfaces do.
//
// Write "KI" for AI, as German enterprise readers do (KI-Tools, KI-gestützt); keep the terms German
// professionals actually use: Audit-Trail, Compliance, Governance, UX, Dashboard, Workflow. Tool
// names and the DOME phase names stay English. GDPR is "DSGVO". Compounds with English words take a
// hyphen (Enterprise-Plattform, Governance-Ereignis).
export const de: Messages = {
  site: {
    description:
      'DOME berät Unternehmen in regulierten Branchen zu KI und Produktentwicklung, mit Sitz in Florenz und Projekten in ganz Europa. Wir analysieren und automatisieren Geschäftsprozesse mit nachvollziehbarer KI und gestalten Unternehmenssoftware, Dashboards und Datenvisualisierungen, mit denen Menschen gern arbeiten.',
    llmsIntro:
      'Wir arbeiten in drei Bereichen: KI-Prozessautomatisierung (einschließlich Prozessaufnahme und Geschäftsanalyse), Enterprise UX und Produktdesign (einschließlich Dashboards und Datenvisualisierung) und die DOME-Tools. Diese Tools entwickeln und betreiben wir selbst: Prozessanalyse, Dokumenten- und Datenanalyse, ein Gremium aus mehreren KI-Modellen, ein kontrollierter Agenten-Workflow und ein Governance-Dashboard. Sie zeigen, wie wir nachvollziehbare KI umsetzen, und sind nicht zu kaufen. Jedes Tool dokumentiert seine Entscheidungen in einem Audit-Trail, und wo die Richtlinie es verlangt, gibt eine namentlich benannte Person das Ergebnis frei.',
    llmsSections: { pages: 'Seiten', tools: 'Tools, die wir entwickeln und betreiben', caseStudies: 'Fallstudien', legal: 'Rechtliches' },
    knowsAbout: ['KI-Prozessautomatisierung', 'Prozessaufnahme', 'Geschäftsanalyse', 'KI-Governance', 'Enterprise UX', 'Produktdesign', 'Datenvisualisierung', 'Designsysteme'],
  },
  nav: {
    homeLabel: 'DOME, Startseite',
    enterpriseUx: 'Enterprise UX',
    aiAutomation: 'KI-Automatisierung',
    dome: 'DOME',
    caseStudies: 'Fallstudien',
    about: 'Über uns',
    contact: 'Kontakt',
    signIn: 'Anmelden',
    signOut: 'Abmelden',
    yourTools: 'Ihre Tools',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    switchToLight: 'Helles Design aktivieren',
    switchToDark: 'Dunkles Design aktivieren',
  },
  switcher: {
    language: 'Sprache',
    readIn: {
      en: 'Diese Seite auf Englisch lesen',
      it: 'Diese Seite auf Italienisch lesen',
      nl: 'Diese Seite auf Niederländisch lesen',
      de: 'Diese Seite auf Deutsch lesen',
    },
  },
  footer: {
    tagline: 'Beratung für KI und Produktentwicklung in regulierten Branchen, mit Governance von Anfang an.',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    cookies: 'Cookie-Richtlinie',
    rights: 'Alle Rechte vorbehalten.',
  },
  cookieNotice: {
    lead: 'Dome verwendet nur funktionale Cookies.',
    body: 'Ein Cookie hält Sie angemeldet, zwei speichern Ihr Design und Ihre Sprache. Besuche zählen wir nur als Gesamtzahl, ohne Cookies. Kein Tracking, keine Werbung.',
    link: 'Zur Cookie-Richtlinie',
    dismiss: 'Verstanden',
  },
  contactForm: {
    heading: 'Schreiben Sie uns',
    intro: 'Sie schreiben lieber? Erzählen Sie uns kurz von Ihrem Projekt, wir melden uns bei Ihnen.',
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'Geschäftliche E-Mail',
    emailPlaceholder: 'name@unternehmen.de',
    companyLabel: 'Unternehmen',
    companyOptional: '(optional)',
    companyPlaceholder: 'Name Ihres Unternehmens',
    topicLabel: 'Thema',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Worum geht es in Ihrem Projekt?',
    privacyNote: 'Wir verwenden Ihre Angaben nur, um Ihre Nachricht zu beantworten. Mehr dazu in unserer',
    privacyLink: 'Datenschutzerklärung',
    send: 'Nachricht senden',
    sending: 'Wird gesendet',
    successTitle: 'Nachricht erhalten',
    successBody: 'Vielen Dank für Ihre Nachricht. Sie hören innerhalb von zwei Werktagen von uns, auf Englisch oder Italienisch.',
    sendAnother: 'Weitere Nachricht senden',
    rateLimited: 'Sie haben die maximale Anzahl an Nachrichten erreicht. Bitte versuchen Sie es in einer Minute erneut.',
    genericError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.',
  },
  errors: {
    notFoundTitle: 'Seite nicht gefunden',
    notFoundBody: 'Diese Seite gibt es nicht.',
    errorTitle: 'Etwas ist schiefgelaufen',
    errorBody: 'Bitte laden Sie die Seite neu.',
    homeLink: 'Zur Startseite',
  },
  breadcrumbHome: 'Startseite',
  meta: {
    home: {
      name: 'Startseite',
      title: 'DOME | Nachvollziehbare KI für regulierte Unternehmen',
      description:
        'DOME hilft regulierten Unternehmen, KI mit eingebauter Governance in Betrieb zu nehmen, von der Prozessautomatisierung bis zu eigenen Tools.',
      ogDescription:
        'Vom ersten Tag an für den Betrieb gebaut: KI mit Governance, menschlicher Aufsicht und lückenlosem Audit-Trail für regulierte Unternehmen.',
      twitterDescription: 'Betriebsreife KI mit eingebauter Governance, für regulierte Unternehmen.',
      imageAlt: 'DOME: nachvollziehbare KI für regulierte Unternehmen',
    },
    enterpriseUx: {
      name: 'Enterprise UX und Produkt',
      title: 'Enterprise UX, Produkt und Datenvisualisierung | DOME',
      description:
        'Nutzerforschung, Service Design, Oberflächen und Datenvisualisierung für komplexe Plattformen, mit einem Designsystem für Ihre Entwickler.',
      ogDescription:
        'Wir bringen Ordnung in interne Tools und Kundenplattformen: Forschung, Service Design, Oberflächen und ein Designsystem für Ihr Team.',
      imageAlt: 'DOME, Beratung für Enterprise UX und Produkt',
    },
    aiProcessAutomation: {
      name: 'KI-Prozessautomatisierung',
      title: 'KI-Prozessautomatisierung und Geschäftsanalyse | DOME',
      description:
        'Wir erfassen Ihre Prozesse, automatisieren, was klaren Regeln folgt, und übergeben den Rest Ihrem Team, mit Entscheidungsvorlage und Audit-Trail.',
      ogDescription:
        'Prozesse automatisieren, ohne die Kontrolle abzugeben: Regeln, wo sie gelten, menschliche Entscheidungen, wo nicht, und ein durchgehender Audit-Trail.',
      imageAlt: 'DOME KI-Prozessautomatisierung',
    },
    dome: {
      name: 'DOME-Tools',
      title: 'DOME-Tools: was wir entwickeln und betreiben | DOME',
      description:
        'Sechs funktionierende Tools von der Prozessaufnahme bis zur geprüften Ausführung. Sie zeigen, wie wir nachvollziehbare KI bauen, und sind nicht käuflich.',
      ogDescription:
        'Prozessanalyse, Dokumenten- und Datenanalyse, ein Gremium aus KI-Modellen, ein kontrollierter Agenten-Workflow und ein Governance-Dashboard.',
      imageAlt: 'DOME-Tools: Tools, die wir entwickeln und betreiben',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer: Prozessaufnahme mit KI | DOME',
      description:
        'Beschreiben Sie einen Geschäftsprozess in eigenen Worten und erhalten Sie eine Prozesslandkarte, eine Governance-Analyse und das Automatisierungspotenzial.',
      ogDescription:
        'Beschreiben Sie einen Prozess in eigenen Worten. Sie erhalten eine strukturierte Landkarte, Governance-Lücken und Ansatzpunkte für Automatisierung.',
      twitterDescription: 'Von der Prozessbeschreibung zur Prozesslandkarte, mit Governance-Lücken und Automatisierungspotenzial.',
      imageAlt: 'DOME Process Analyzer: Prozessaufnahme mit Governance',
      twitterImageAlt: 'DOME Process Analyzer',
    },
    dataIntelligence: {
      name: 'Data Intelligence',
      title: 'Data Intelligence: nachvollziehbare KI-Dashboards | DOME',
      description:
        'Laden Sie eine Tabelle hoch und erhalten Sie ein kontrolliertes Dashboard mit automatisch gewählten Diagrammen und Fragen in eigenen Worten.',
      ogDescription:
        'Tabelle hochladen, kontrolliertes Dashboard erhalten: deterministische Diagrammauswahl und Fragen in eigenen Worten, ohne Konfiguration.',
      twitterDescription: 'Von der Tabelle zum kontrollierten Dashboard, mit Fragen in eigenen Worten und ohne Konfiguration.',
      imageAlt: 'DOME Data Intelligence: kontrolliertes Analyse-Dashboard',
      twitterImageAlt: 'DOME Data Intelligence',
    },
    llmCouncil: {
      name: 'LLM Council',
      title: 'LLM Council: Abwägung durch drei KI-Modelle | DOME',
      description:
        'Legen Sie eine strategische Frage drei KI-Beratern vor. Sie urteilen unabhängig, prüfen sich gegenseitig und liefern ein begründetes Urteil.',
      imageAlt: 'DOME LLM Council: KI-Abwägung mit Governance',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence: prüfbare Datenextraktion mit KI | DOME',
      description:
        'Strukturierte Daten aus Rechnungen, Berichten und Verträgen, geprüft gegen Governance-Regeln und mit lückenlosem Audit-Trail.',
      ogDescription:
        'Dokument hochladen und in Sekunden Feldwerte, Konfidenzwerte und einen Bericht zu 16 Governance-Regeln erhalten.',
      twitterDescription: 'Strukturierte Daten aus jedem Dokument, mit Governance-Prüfung, Konfidenzwerten und Audit-Trail.',
      imageAlt: 'DOME Document Intelligence: Dokumentenextraktion mit Governance',
      twitterImageAlt: 'DOME Document Intelligence',
    },
    governanceDashboard: {
      name: 'Governance Dashboard',
      title: 'Governance Dashboard: Audit-Trail für KI-Entscheidungen | DOME',
      description:
        'Ein Audit-Trail für alle DOME-Tools: jedes Ereignis, jeder Konfidenzwert und jede menschliche Entscheidung an einem Ort, mit PDF-Berichten.',
      ogDescription:
        'Audit-Trail, Compliance-Reporting und PDF-Export für alle vier KI-Tools von DOME, mit jeder menschlichen Entscheidung an einem Ort.',
      twitterDescription: 'Laufender Audit-Trail und Compliance-Reporting für alle KI-Tools von DOME.',
      imageAlt: 'DOME Governance Dashboard: toolübergreifender Audit-Trail und Compliance-Reporting',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow: von der Rechnung zur Freigabe | DOME',
      description:
        'Von der Rechnung zur Freigabe: Extraktion, Richtlinienregeln, ein Gremium aus KI-Modellen und eine menschliche Freigabe, jeder Schritt dokumentiert.',
      ogDescription:
        'Ein kontrollierter Workflow von der Rechnung bis zur Freigabe über die DOME-Tools hinweg, mit menschlicher Freigabe und lückenlosem Audit-Trail.',
      twitterDescription: 'Von der Rechnung zur Freigabe, mit menschlicher Freigabe und lückenlosem Audit-Trail.',
      imageAlt: 'DOME Agent Flow: kontrollierter Workflow von der Rechnung bis zur Freigabe',
      twitterImageAlt: 'DOME Agent Flow',
    },
    about: {
      name: 'Über uns',
      title: 'KI- und Produktberatung für regulierte Unternehmen | DOME',
      description:
        'DOME ist eine KI- und Produktberatung in Florenz für Teams aus Einkauf, Finanzen, Compliance und Lieferkette in regulierten Branchen.',
      ogDescription:
        'Eine verantwortliche Leitung, ein Netzwerk von Fachleuten und ein Umsetzungspartner: So ist DOME aufgestellt, und das können Sie erwarten.',
      imageAlt: 'Über DOME',
    },
    contact: {
      name: 'Kontakt',
      title: 'DOME kontaktieren | Gespräch vereinbaren oder schreiben',
      description:
        'Gespräch von 15 oder 30 Minuten vereinbaren oder Nachricht senden. Antwort innerhalb von zwei Werktagen, auf Englisch oder Italienisch.',
      ogDescription:
        'Gespräch vereinbaren oder Nachricht senden. Sie hören innerhalb von zwei Werktagen von uns.',
      imageAlt: 'DOME kontaktieren',
    },
    caseStudies: {
      name: 'Fallstudien',
      title: 'Fallstudien | DOME',
      description:
        'Anonymisierte Fallstudien zu Enterprise UX und KI-Automatisierung aus Handelseinkauf, Handelsfinanzierung, Lebensmittelketten und Compliance.',
      ogDescription:
        'Was wir gebaut haben und was es bewirkt hat. Kundenangaben sind durchgehend anonymisiert.',
      imageAlt: 'Fallstudien von DOME',
    },
    privacy: {
      name: 'Datenschutzerklärung',
      title: 'Datenschutzerklärung | DOME',
      description:
        'Wie DOME personenbezogene Daten von Besuchern und Nutzern der Tools erhebt, verwendet und schützt, und wie Sie Ihre Rechte nach der DSGVO wahrnehmen.',
      imageAlt: 'DOME',
    },
    terms: {
      name: 'Nutzungsbedingungen',
      title: 'Nutzungsbedingungen | DOME',
      description:
        'Die Bedingungen für die Nutzung der DOME-Tools: Konten, zulässige Nutzung, Verarbeitung durch KI, Haftungsausschlüsse und anwendbares Recht.',
      imageAlt: 'DOME',
    },
    cookies: {
      name: 'Cookie-Richtlinie',
      title: 'Cookie-Richtlinie | DOME',
      description:
        'Jedes Cookie und jeder Speichereintrag von domelayer.com und den DOME-Tools: Inhalt, Dauer und warum keiner davon eine Einwilligung braucht.',
      imageAlt: 'DOME',
    },
  },
  media: {
    homeHeroStill: 'Zwei Personen prüfen einen Freigabe-Workflow am Laptop',
    aiProcessAutomationHero:
      'Arbeitsplatz in der Buchhaltung, mit einem Bildschirm, der ein Freigabe-Flussdiagramm zeigt, und einem Stapel Rechnungen',
    enterpriseUxHero: 'Eine Hand klebt einen blauen Haftzettel an eine Wand voller Wireframes',
    capabilitiesHero: 'Gang in einem Serverraum, in kühlem Weiß und Blau beleuchtet',
    aboutHero: 'Dächer von Florenz und die Kuppel des Doms, durch das Fenster eines Ateliers gesehen',
    caseStudiesHero: 'Prozesslandkarten und ein Tablet mit Dashboard auf einem hellen Holztisch',
    contactHero: 'Ruhiger Besprechungsraum mit rundem Tisch an einem Fenster mit Blick auf Florenz',
    caseProcurementWorkflowRedesign:
      'Arbeitsplatz im Einkauf mit zwei Bildschirmen und einer Einkaufsanwendung',
    caseAiComplianceAssessments:
      'Eine Person liest markierte Vorschriften auf einem Tablet, daneben ein Ordner',
    caseMetalsTradingPlatform:
      'Lager mit gestapelten Aluminiumbarren und einem Tablet mit Kurscharts',
    caseFoodTraceabilityPlatform:
      'Eine Hand scannt das QR-Etikett einer Gemüsekiste in einem Verteilzentrum',
    caseTradingAppRedesign: 'Smartphone mit Trading-App und Kurscharts, im Hintergrund eine Straße',
    caseAiProcurementPlatform:
      'Drei Personen vor einem großen Bildschirm mit einem Workflow-Diagramm',
    caseAiTrainingVideos:
      'Kleines Videostudio mit Kamera, Leuchte und einem Monitor mit einer Schulungsansicht',
    francescoProdomo: 'Francesco Prodomo',
    tabletMockup: 'Ein DOME-Tool auf einem Tablet',
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'Mit KI erstelltes Bild',
  common: {
    sendMessage: 'Nachricht senden',
    relatedWork: 'Ähnliche Projekte',
    anonymised: 'Kundenangaben sind anonymisiert.',
    viewAllCaseStudies: 'Alle Fallstudien',
    topics: [
      'KI-Prozessautomatisierung',
      'Enterprise UX und Produkt',
      'DOME-Tools',
      'Sonstiges',
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'KI- und Produktberatung für regulierte Unternehmen',
        heading: 'Software, mit der Menschen gern arbeiten. KI, die nachvollziehbar bleibt.',
        lead: 'Wir helfen regulierten Unternehmen, komplexe Abläufe neu zu gestalten und mit KI zu automatisieren, die kontrollierbar, messbar und erklärbar bleibt.',
        primary: 'Erstgespräch vereinbaren',
        secondary: 'Unsere Projekte',
        scrollCue: 'Scrollen',
      },
      sectors: {
        eyebrow: 'Branchen, in denen wir arbeiten',
        items: [
          'Einkauf im Handel',
          'Rohstoffhandel und Handelsfinanzierung',
          'Lebensmittel- und Agrarlieferketten',
          'Compliance und Regulierung',
          'Digitale Vermögenswerte',
        ],
      },
      services: {
        eyebrow: 'Was wir tun',
        heading: 'Drei Wege der Zusammenarbeit',
        items: [
          {
            title: 'KI-Prozessautomatisierung',
            body: 'Wir nehmen einen Prozess auf und analysieren ihn. Was klaren Regeln folgt, automatisieren wir; den Rest übergeben wir Ihrem Team, mit einer Entscheidungsvorlage und einem lückenlosen Audit-Trail.',
            cta: 'Mehr zur Prozessautomatisierung',
          },
          {
            title: 'Enterprise UX und Produkt',
            body: 'Wir bringen Ordnung in komplexe interne Tools und Kundenplattformen: Nutzerforschung, Service Design, Oberflächen, Dashboards und Datenvisualisierung, dazu ein Designsystem, mit dem Ihre Entwickler direkt weiterarbeiten können.',
            cta: 'Mehr zu UX und Produkt',
          },
          {
            title: 'DOME-Tools',
            body: 'Funktionierende Tools, die wir selbst entwickeln und betreiben: Dokumentenextraktion, Prüfung durch mehrere KI-Modelle, kontrollierte Dashboards und eine Audit-Ebene, die alles verbindet.',
            cta: 'Was wir bauen',
          },
        ],
      },
      howWeWork: {
        eyebrow: 'So arbeiten wir',
        heading: 'Eine Methode vom ersten Workshop bis zum Betrieb',
        lead: 'Governance ist Teil jeder Phase. So muss vor dem Go-live nichts nachgerüstet werden.',
        phaseLabel: 'Phase',
        phases: [
          { title: 'Discover', body: 'Den Ablauf erfassen: welche Systeme er berührt und wo Vorschriften gelten.' },
          { title: 'Orchestrate', body: 'Architektur, Datenflüsse und die Kontrollen darum herum entwerfen.' },
          { title: 'Model', body: 'KI-Komponenten innerhalb vereinbarter Grenzen für Genauigkeit und Risiko einrichten.' },
          { title: 'Execute', body: 'Einführen, anbinden und überwachen, jede automatisierte Entscheidung dokumentiert.' },
        ],
        governance: 'Governance in jeder Phase',
      },
      selectedWork: { eyebrow: 'Ausgewählte Projekte', heading: 'Aktuelle Projekte' },
      capabilities: {
        eyebrow: 'DOME-Tools',
        heading: 'Tools, die wir selbst entwickeln und betreiben',
        lead: 'Unsere eigenen Tools decken den gesamten Weg ab, von der Prozessaufnahme bis zur geprüften Ausführung. Sie können sie ausprobieren, bevor ein Projekt beginnt. Und wo Daten Ihr Netzwerk nicht verlassen dürfen, laufen drei davon mit einem lokalen Open-Weight-Modell statt über eine Cloud-API.',
        tools: [
          'Process Analyzer',
          'LLM Council',
          'Document Intelligence',
          'Data Intelligence',
          'Governance Dashboard',
          'Agent Flow (in Einführung)',
        ],
        cta: 'Zu den DOME-Tools',
      },
      operatingModel: {
        eyebrow: 'Über DOME',
        heading: 'Eine verantwortliche Leitung. Die passenden Fachleute für jede Aufgabe.',
        lead: 'Wir stellen jedes Team um die Aufgabe herum zusammen, nicht um eine feste Besetzung. Sie arbeiten durchgehend mit erfahrenen Leuten, und das Team wächst oder schrumpft mit dem Umfang.',
        cta: 'So sind wir aufgestellt',
        items: [
          { title: 'Projektleitung', body: 'Eine erfahrene Leitung verantwortet das Projekt vom ersten Gespräch bis zur Übergabe und steht für das Ergebnis ein.' },
          { title: 'Netzwerk von Fachleuten', body: 'Fachleute für UX-Forschung, Design, Entwicklung, Daten und Compliance kommen hinzu, wenn die Arbeit es erfordert.' },
          { title: 'Umsetzungspartner', body: 'Größere Programme setzen wir mit einer etablierten Partnerfirma um, damit das Team mit dem Umfang wachsen kann.' },
        ],
      },
      closing: {
        heading: 'Welcher Prozess bremst Ihr Team aus?',
        body: 'Ein Gespräch von 30 Minuten genügt, um zu klären, ob wir helfen können.',
        primary: 'Erstgespräch vereinbaren',
      },
    },

    services: {
      breadcrumb: 'Leistungen',
      aiProcessAutomation: {
        hero: {
          eyebrow: 'KI-Prozessautomatisierung',
          heading: 'Routine automatisieren. Entscheidungen bleiben beim Menschen.',
          lead: 'Wir erfassen und analysieren Ihre Abläufe in Finanzen, Einkauf und Compliance. Dann automatisieren wir die klar definierten Schritte, mit Regeln, die Sie lesen können, und einem Nachweis jeder Entscheidung.',
          primary: 'Automatisierungs-Check vereinbaren',
          secondary: 'So funktioniert es',
        },
        intro: {
          eyebrow: 'Wo es hilft',
          heading: 'Prozesse, die reif für Automatisierung sind',
          items: [
            { title: 'Hohes Volumen, klare Regeln', body: 'Rechnungseingang, Prüfungen bei neuen Lieferanten, Dokumentenklassifizierung: Arbeit, die einer Richtlinie folgt und trotzdem Zeit von Fachleuten bindet.' },
            { title: 'Entscheidungen, die belegbar sein müssen', body: 'Freigaben und Ausnahmen, nach denen Prüfer und Aufsicht fragen, manchmal Monate später.' },
            { title: 'Daten, die in Dokumenten stecken', body: 'Verträge, Zertifikate und Berichte, die heute jemand von Hand in ein anderes System abtippt.' },
          ],
        },
        band: {
          eyebrow: 'Eingebaute Governance',
          heading: 'Jede automatisierte Entscheidung lässt sich erklären.',
          lead: 'Fragt jemand, warum eine Rechnung freigegeben oder ein Dokument markiert wurde, ist die Antwort bereits dokumentiert.',
          points: [
            'Ein Konfidenzwert für jedes ausgelesene Feld',
            'Richtlinien als Regeln außerhalb des Modells, lesbar für Ihr Team',
            'Eine namentlich benannte Person gibt frei, wo die Richtlinie es verlangt',
            'Ein Audit-Trail, den Sie für jeden Durchlauf exportieren können',
            'Betrieb mit einem lokalen Open-Weight-Modell, wenn Daten Ihr Netzwerk nicht verlassen dürfen',
          ],
        },
        steps: {
          eyebrow: 'So setzen wir es um',
          heading: 'Vier Schritte, mit Ihnen abgestimmt, bevor etwas läuft',
          items: [
            { title: 'Prozess erfassen und analysieren', body: 'Wir gehen den Ablauf mit den Menschen durch, die ihn ausführen, und analysieren Volumen, Kosten und Risiken. So wird klar, welche Schritte Regeln folgen, welche Urteilsvermögen brauchen und wo sich Automatisierung lohnt.' },
            { title: 'Kontrollen festlegen', body: 'Regeln, Konfidenzschwellen und Freigabepunkte legen wir gemeinsam mit Ihnen fest, bevor auch nur ein Schritt automatisiert wird.' },
            { title: 'Entwickeln und anbinden', body: 'Wir binden die Systeme an, die Sie bereits nutzen, und halten die Regeln außerhalb des Modells, damit Ihr Team sie lesen und ändern kann.' },
            { title: 'Betreiben und messen', body: 'Jede Entscheidung wird protokolliert. Wir prüfen die Genauigkeit gemeinsam mit Ihnen und passen die Schwellen an, wenn sich die Volumen ändern.' },
          ],
        },
        related: 'Automatisierung in der Praxis',
        closing: {
          heading: 'Beginnen Sie mit einem Prozess.',
          body: 'Im Automatisierungs-Check erfassen wir mit Ihrem Team einen Ablauf, rechnen den Business Case durch und sagen Ihnen offen, was sich zu automatisieren lohnt und was nicht.',
          primary: 'Automatisierungs-Check vereinbaren',
        },
      },
      enterpriseUx: {
        hero: {
          eyebrow: 'Enterprise UX und Produkt',
          heading: 'Interne Tools, mit denen Ihre Teams gern arbeiten.',
          lead: 'Wir gestalten komplexe Unternehmensplattformen neu, von Einkaufsprozessen und Handelsoberflächen bis zu Dashboards und Datenvisualisierung, ausgerichtet auf die Menschen, die täglich damit arbeiten.',
          primary: 'UX-Check vereinbaren',
          secondary: 'So arbeiten wir',
        },
        intro: {
          eyebrow: 'Wann es hilft',
          heading: 'Woran Sie merken, dass ein System gegen seine Nutzer arbeitet',
          items: [
            { title: 'Das System wird umgangen', body: 'Menschen weichen auf Tabellen und E-Mails aus, weil das Tool ihnen bei der Arbeit im Weg steht.' },
            { title: 'Die Einarbeitung hört nie auf', body: 'Neue Mitarbeitende brauchen wochenlang Unterstützung, und beim Helpdesk landen immer wieder dieselben Fragen.' },
            { title: 'Jede Änderung ist teuer', body: 'Jede neue Anforderung wird zur nächsten Sonderlösung, und mit jedem Release wird die Oberfläche schwerer zu pflegen.' },
          ],
        },
        deliver: {
          eyebrow: 'Was wir liefern',
          heading: 'Von der Nutzerforschung bis zum Designsystem, mit dem Ihre Entwickler weiterarbeiten können',
          items: [
            { title: 'Nutzerforschung und Service Design', body: 'Interviews, Beobachtung am Arbeitsplatz und Journey Maps, die zeigen, wo Zeit und Vertrauen verloren gehen.' },
            { title: 'Oberflächen, Dashboards und Datenvisualisierung', body: 'Ansichten und Dashboards für das echte Volumen und die Informationsdichte im Unternehmensalltag, mit Diagrammen, die die entscheidenden Zahlen nach vorn stellen. Getestet mit den Menschen, die damit arbeiten.' },
            { title: 'Designsysteme', body: 'Eine Komponentenbibliothek mit Richtlinien, mit der Ihre Entwickler weiterarbeiten können, damit die Oberfläche auch nach dem nächsten Release einheitlich bleibt.' },
            { title: 'Einführung und Nutzung', body: 'Wir begleiten Entwicklung und Einführung, mit Schulungsmaterial und Messungen, die zeigen, ob das neue Tool tatsächlich genutzt wird.' },
          ],
        },
        band: {
          eyebrow: 'Für regulierte Arbeit gemacht',
          heading: 'Gestaltet für Entscheidungen, für die jemand geradesteht.',
          lead: 'Tools in Finanzen, Einkauf und Compliance bilden mehr ab als Aufgaben: Freigaben, Nachweise und Verantwortung. Die Oberfläche muss das sichtbar machen.',
          points: [
            'Barrierefrei von Anfang an, nach WCAG 2.1 AA',
            'Freigaben und ihre Historie dort sichtbar, wo entschieden wird',
            'Eigene Ansichten für Anfragende, Freigebende und Prüfende',
            'Ein Designsystem, damit sich jede Ansicht gleich verhält',
          ],
        },
        steps: {
          eyebrow: 'So setzen wir es um',
          heading: 'Vom ersten Interview bis zur Einführung',
          items: [
            { title: 'Beobachten', body: 'Wir begleiten die Menschen, die das System nutzen, und erfassen, wo Zeit und Vertrauen verloren gehen.' },
            { title: 'Gestalten', body: 'Wir entwerfen Abläufe und Ansichten gemeinsam mit Ihrem Team, einen Ablauf nach dem anderen.' },
            { title: 'Validieren', body: 'Wir testen Prototypen mit echten Nutzern, bevor etwas entwickelt wird.' },
            { title: 'Einführen', body: 'Wir begleiten die Entwicklung, schreiben das Schulungsmaterial und messen nach dem Start, wie das Tool genutzt wird.' },
          ],
        },
        related: 'UX- und Produktarbeit in der Praxis',
        closing: {
          heading: 'Beginnen Sie mit einem Ablauf.',
          body: 'Im UX-Check beobachten wir mit Ihrem Team einen Ablauf und zeigen Ihnen, wo er Zeit verliert und was Sie zuerst angehen sollten.',
          primary: 'UX-Check vereinbaren',
        },
      },
    },
    dome: {
      hero: {
        eyebrow: 'Tools',
        heading: 'Funktionierende KI-Tools, von uns entwickelt und betrieben.',
        lead: 'Mit den DOME-Tools zeigen wir, wie nachvollziehbare KI in der Praxis aussieht. Fünf sind live, eines wird gerade eingeführt, und Sie können alle ausprobieren, bevor ein Projekt beginnt.',
        primary: 'Demo vereinbaren',
        secondary: 'Bei den Tools anmelden',
      },
      blocks: {
        eyebrow: 'Die Bausteine',
        heading: 'Vier Tools, eines für jede Phase der Methode',
        openTool: 'Tool öffnen',
        details: 'Details',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Beschreiben Sie einen Geschäftsprozess in eigenen Worten und erhalten Sie eine strukturierte Prozesslandkarte, die beteiligten Systeme, Governance-Lücken und Ansatzpunkte für Automatisierung.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Legen Sie eine strategische Frage drei KI-Beratern vor. Sie urteilen zunächst unabhängig, prüfen dann gegenseitig ihre Positionen und liefern ein Urteil, dessen gesamte Begründung dokumentiert ist.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Liest strukturierte Felder aus Rechnungen, Verträgen und Berichten aus, mit einem Konfidenzwert pro Feld und 16 Governance-Prüfungen.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Laden Sie eine Tabelle hoch und erhalten Sie ein kontrolliertes Dashboard. Ein Modell klassifiziert die Daten; die Diagramme wählt eine Regel-Engine, nicht das Modell.' },
        ],
      },
      agentFlow: {
        eyebrow: 'Die Methode im Einsatz',
        badge: 'Private Demo',
        heading: 'Agent Flow: von der Rechnung zur Freigabe, jeder Schritt dokumentiert',
        lead: 'Agent Flow verbindet die Bausteine zu einem kontrollierten Workflow, in dem eine namentlich benannte Person freigibt, wo die Richtlinie es verlangt.',
        cta: 'So funktioniert Agent Flow',
        steps: [
          { title: 'Eine Rechnung geht ein', body: 'Ein selbst gehosteter Workflow nimmt sie auf und startet einen Durchlauf, der sie vom Eingang bis zur Freigabe begleitet.' },
          { title: 'Ausgelesen und gegen die Richtlinie geprüft', body: 'Document Intelligence liest die Rechnung aus; eine Regel-Engine bestimmt den Freigabeweg nach Betrag, Kategorie, Lieferant und Bestellung.' },
          { title: 'Erst eine Empfehlung, dann entscheidet ein Mensch', body: 'Unklare Rechnungen und hohe Beträge erhalten eine Entscheidungsvorlage aus mehreren KI-Modellen, dann gibt eine namentlich benannte Person frei.' },
          { title: 'Ein Nachweis, der sich rekonstruieren lässt', body: 'Jeder Schritt erscheint als eine Zeitleiste im Governance Dashboard.' },
        ],
      },
      governance: {
        eyebrow: 'Die Governance-Ebene',
        heading: 'Governance Dashboard',
        lead: 'Ein Audit-Trail über alle Tools: jedes Ereignis, jeder Konfidenzwert und jede menschliche Entscheidung an einem Ort, mit PDF-Berichten für die interne Revision.',
        openDashboard: 'Dashboard öffnen',
        details: 'Details',
      },
      standards: {
        eyebrow: 'Wie die Tools gebaut sind',
        heading: 'Dieselben Standards wie in unseren Kundenprojekten',
        items: [
          { title: 'In der EU gehostet', body: 'Die Demo-Tools und ihre Daten laufen auf Infrastruktur in der Europäischen Union.' },
          { title: 'Auch auf Ihrer Infrastruktur', body: 'Prozessanalyse sowie Dokumenten- und Datenanalyse laufen bei Bedarf mit einem lokalen Open-Weight-Modell über Ollama. Das ist eine Frage der Konfiguration, keine Neuentwicklung, und keine Daten müssen Ihr Netzwerk verlassen.' },
          { title: 'Nicht an einen KI-Anbieter gebunden', body: 'Claude, Azure OpenAI oder ein lokales Modell, je nach Einsatz gewählt. Das Modell lässt sich wechseln, ohne den Workflow oder seine Kontrollen neu zu entwerfen.' },
          { title: 'Lückenlos protokolliert', body: 'Jedes Tool hält fest, was es getan hat, wie sicher es war und wer das Ergebnis geprüft hat.' },
        ],
      },
      partner: {
        text: 'Größere Programme setzen wir gemeinsam mit unserem Partner Ionita Consulting um.',
        cta: 'Mehr zur Partnerschaft',
      },
      closing: {
        heading: 'Erleben Sie die Tools mit Ihrem eigenen Prozess.',
        body: 'In einer Demo spielen wir Ihr Beispiel durch die Tools und besprechen, was eine kontrollierte Einführung bei Ihnen bedeuten würde.',
        primary: 'Demo vereinbaren',
      },
    },
    caseStudies: {
      hero: {
        eyebrow: 'Fallstudien',
        heading: 'Was wir gebaut haben und was es bewirkt hat.',
        lead: 'Anonymisierte Berichte aus unseren Projekten: das Problem, wie der Kunde es beschrieben hat, was wir getan haben und was das Projekt nachweislich erreicht hat.',
        primary: 'Über Ihr Projekt sprechen',
        secondary: 'Was wir bauen',
      },
      groups: [
        { eyebrow: 'KI-Prozessautomatisierung', heading: 'Arbeit, die einer Richtlinie folgt' },
        { eyebrow: 'Enterprise UX und Produkt', heading: 'Plattformen, mit denen Menschen täglich arbeiten' },
        { eyebrow: 'DOME-Tools', heading: 'Die Methode von Anfang bis Ende' },
      ],
      note: 'Kundenangaben sind durchgehend anonymisiert: Wir nennen Branche und Funktion, nie die Organisation. Und wir nennen nur Ergebnisse, die das Projekt tatsächlich erreicht hat.',
      closing: {
        heading: 'Kommt Ihnen eines dieser Probleme bekannt vor?',
        body: 'Sagen Sie uns, welches, und wir erklären Ihnen, wie wir es angehen würden.',
        primary: 'Erstgespräch vereinbaren',
      },
    },
    caseStudy: {
      back: 'Fallstudien',
      challenge: 'Ausgangslage',
      whatWeDid: 'Unser Vorgehen',
      outcomes: 'Ergebnisse',
      client: 'Kunde',
      role: 'Unsere Rolle',
      capabilities: 'Kompetenzen',
      cta: 'Über ein ähnliches Projekt sprechen',
      readNext: 'Weiterlesen',
      notFound: 'Fallstudie nicht gefunden',
      closing: {
        heading: 'Kommt Ihnen das bekannt vor?',
        body: 'Sagen Sie uns, wo Ihr Prozess hakt, und wir erklären Ihnen, wie wir ihn angehen würden.',
        primary: 'Erstgespräch vereinbaren',
      },
    },
    about: {
      hero: {
        eyebrow: 'Über DOME',
        heading: 'KI- und Produktberatung für regulierte Unternehmen.',
        lead: 'Wir helfen regulierten Unternehmen, Software zu gestalten, mit der Menschen gern arbeiten, und Arbeit so zu automatisieren, dass Prüfer jeden Schritt nachvollziehen können.',
        primary: 'Sprechen Sie mit uns',
        secondary: 'Unsere Projekte',
      },
      who: {
        eyebrow: 'Wer wir sind',
        heading: 'Komplexe Arbeit, einfacher zu bedienen und sicherer zu automatisieren.',
        paragraphs: [
          'DOME arbeitet mit Teams aus Einkauf, Finanzen, Compliance und Lieferkette in regulierten Branchen. Wir verbinden Enterprise UX mit KI-Prozessautomatisierung, damit die Systeme, mit denen Menschen täglich arbeiten, verständlich in der Bedienung und nachvollziehbar in der Prüfung sind.',
          'Wir entwickeln und betreiben auch eigene KI-Tools. Unsere Empfehlungen zur Automatisierung stammen deshalb aus Systemen, die wir selbst betreiben, nicht aus Präsentationen.',
        ],
      },
      facts: [
        { figure: '3', label: 'Leistungsbereiche, von der UX-Forschung bis zur geprüften Automatisierung' },
        { figure: '6', label: 'KI-Tools, die wir selbst entwickeln und betreiben' },
        { figure: '3', label: 'Modellanbieter, auch mit Open-Weight-Modellen auf Ihrer eigenen Infrastruktur' },
        { figure: '10', label: 'Jahre Zusammenarbeit mit unserer Partnerfirma' },
      ],
      setup: {
        eyebrow: 'So sind wir aufgestellt',
        heading: 'Für jedes Projekt das passende Team',
        lead: 'Wir halten keine Berater auf Vorrat, die auf ihren nächsten Einsatz warten. Jedes Projekt bekommt die Fachleute, die die Aufgabe verlangt, unter einer verantwortlichen Leitung.',
        items: [
          { title: 'Projektleitung', body: 'Eine erfahrene Leitung verantwortet jedes Projekt vom ersten Gespräch bis zur Übergabe. Sie haben eine Ansprechperson und jemanden, der für das Ergebnis einsteht.' },
          { title: 'Netzwerk von Fachleuten', body: 'Aus unserem Netzwerk freier Fachleute holen wir bei Bedarf Expertise für UX-Forschung, Interface Design, Entwicklung, Daten und Compliance hinzu.' },
          { title: 'Umsetzungspartner', body: 'Größere Programme setzen wir mit Ionita Consulting um. So können wir längere oder breitere Projekte besetzen, ohne unsere Arbeitsweise zu ändern.' },
        ],
      },
      expect: {
        eyebrow: 'Wie wir zusammenarbeiten',
        heading: 'Was Sie von uns erwarten können',
        items: [
          { title: 'Kleine, erfahrene Teams', body: 'Die Menschen, die Sie zu Beginn kennenlernen, erledigen auch die Arbeit.' },
          { title: 'Governance von Anfang an', body: 'Kontrollen und Prüfanforderungen bestimmen das Design ab dem ersten Workshop, nicht erst nach dem Go-live.' },
          { title: 'Erst Belege, dann die Entscheidung', body: 'Sie sehen funktionierende Tools und bisherige Ergebnisse, bevor Sie sich festlegen.' },
        ],
      },
      partner: {
        eyebrow: 'Unser Umsetzungspartner',
        heading: 'Ionita Consulting',
        body: 'Größere Programme setzen wir gemeinsam mit Ionita Consulting aus Utrecht um, mit der wir seit zehn Jahren zusammenarbeiten. Gemeinsam übernehmen wir Projekte, die mehr Fachleute oder einen längeren Zeitraum brauchen.',
      },
      leadership: {
        eyebrow: 'Leitung',
        heading: 'Wer die Arbeit leitet',
        name: 'Francesco Prodomo',
        role: 'Gründer und Projektleiter',
        bio: 'Zehn Jahre Erfahrung in Produktdesign für Unternehmen und in Einkaufssystemen, von der Nutzerforschung bis zur Umsetzung.',
        linkedin: 'LinkedIn-Profil',
      },
      where: {
        eyebrow: 'Wo wir arbeiten',
        heading: 'Sitz in Florenz, Projekte in ganz Europa',
        lead: 'Wir arbeiten mit Kunden auf Englisch und Italienisch, vor Ort oder remote.',
        cta: 'Zu den Fallstudien',
      },
      closing: {
        heading: 'Welcher Prozess bremst Ihr Team aus?',
        body: 'Ein Gespräch von 30 Minuten genügt, um zu klären, ob wir helfen können.',
        primary: 'Erstgespräch vereinbaren',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Kontakt',
        heading: 'Erzählen Sie uns von Ihrem Prozess.',
        lead: 'Vereinbaren Sie ein Gespräch von 30 Minuten oder schreiben Sie uns. Sie hören innerhalb von zwei Werktagen von uns.',
        primary: 'Gespräch vereinbaren',
        secondary: 'Unsere Projekte',
      },
      book: { heading: 'Gespräch vereinbaren', lead: 'Wählen Sie einen passenden Termin und ein Thema, damit wir uns vorbereiten können.' },
      calendar: {
        topicLegend: 'Worüber möchten Sie sprechen?',
        notLoaded: 'Der Kalender ist noch nicht geladen. Er öffnet sich hier, sobald Sie eine Dauer wählen.',
        show30: 'Freie Termine anzeigen (30 Min.)',
        show15: 'Lieber 15 Minuten',
        notice: 'Der Kalender wird von',
        noticeEnd: 'bereitgestellt und lädt erst, wenn Sie klicken. Ab dann gilt die Datenschutzerklärung von Cal.com; vorher wird nichts übertragen.',
      },
      details: {
        eyebrow: 'Weitere Kontaktwege',
        heading: 'Unternehmensangaben',
        email: 'E-Mail',
        pec: 'Zertifizierte E-Mail (PEC)',
        booking: 'Termin',
        locationValue: 'Florenz, Italien',
        location: 'Standort',
        legal: 'Dome di Francesco Prodomo · USt-IdNr. IT07242670482',
      },
    },
    tools: {
      back: 'Tools',
      whatItDoes: 'Was das Tool leistet',
      howItWorks: 'So funktioniert es',
      method: 'DOME-Methode',
      processAnalyzer: {
        phase: 'Discover',
        lead: 'Beschreiben Sie einen Geschäftsprozess in eigenen Worten und erhalten Sie eine strukturierte Prozesslandkarte mit Governance-Analyse und einer Einschätzung des Automatisierungspotenzials.',
        open: 'Process Analyzer öffnen',
        whatItDoes:
          'Process Analyzer macht aus einer freien Beschreibung eines Geschäftsprozesses eine strukturierte, visuelle Übersicht, mit der Betriebsleitung und Prozessverantwortliche sofort arbeiten können. Sie sehen, welche Systeme an jedem Schritt beteiligt sind, wie viel Zeit ein Schritt etwa kostet und wo Governance-Kontrollen fehlen oder nicht ausreichen. Außerdem schätzt das Tool ein, welche Teile des Prozesses sich für KI-Automatisierung eignen und welche Aufsicht dafür nötig ist, bevor automatisiert wird.',
        howItWorks: {
          heading: 'In drei Schritten von der Beschreibung zur Prozesslandkarte.',
          steps: [
            { title: 'Prozess beschreiben', body: 'Beschreiben Sie einen beliebigen Geschäftsprozess in eigenen Worten: einen Einkaufsablauf, eine Freigabekette, ein Onboarding. Vorlagen oder ein festes Format sind nicht nötig.' },
            { title: 'Strukturierte Landkarte erhalten', body: 'Das Tool erstellt ein Flussdiagramm (Mermaid.js), benennt die beteiligten Systeme, schätzt den Zeitbedarf je Stufe und zeigt, wo Governance-Risiken liegen.' },
            { title: 'Automatisierungspotenzial erkennen', body: 'Für jeden Schritt sehen Sie, ob sich KI-Automatisierung lohnt, mit einem Konfidenzwert und einer klaren Erklärung, welche Governance-Maßnahmen vorher nötig sind.' },
          ],
        },
        method: {
          phase: 'Discover',
          body: 'In der Phase Discover erfassen wir, was tatsächlich vorhanden ist, bevor eine KI-Architektur entsteht. Process Analyzer setzt diese Phase praktisch um: Das Tool erstellt eine Übersicht der Prozesse, legt Lücken in Regulierung und Governance offen und schafft die Grundlage, auf der alle weiteren DOME-Phasen aufbauen. Eine Einführung lässt sich erst planen, wenn die Prozesslandschaft verstanden ist.',
        },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        lead: 'Legen Sie eine strategische Frage einem Gremium aus drei KI-Beratern vor. Sie urteilen unabhängig, prüfen sich gegenseitig und liefern ein begründetes Urteil mit lückenlosem Audit-Trail.',
        open: 'LLM Council öffnen',
        whatItDoes:
          'LLM Council strukturiert KI-gestützte Abwägungen bei Entscheidungen, von denen viel abhängt. Statt einer einzelnen Modellantwort beruft das Tool ein Gremium aus drei Beratern ein. Sie urteilen zunächst unabhängig, stellen dann die Positionen der anderen infrage und klären Meinungsverschiedenheiten in einer strukturierten Gegenprüfung. Das Ergebnis ist mehr als eine Antwort: eine Abwägung, die sich prüfen lässt. Jeder Denkschritt, jeder Einwand und jeder Punkt der Einigkeit oder Abweichung wird protokolliert und steht für die Governance-Prüfung bereit. Entscheider erhalten ein Urteil, das sie hinterfragen können, statt es nur zu übernehmen.',
        howItWorks: {
          heading: 'Fragen, abwägen, entscheiden.',
          steps: [
            { title: 'Strategische Frage stellen', body: 'Stellen Sie eine Frage, von der viel abhängt, etwa zu einem Markteintritt, einer Risikobewertung oder einer Abwägung in einer Richtlinie. Ein festes Format ist nicht nötig, eigene Worte genügen.' },
            { title: 'Drei Berater wägen unabhängig ab', body: 'Drei KI-Berater analysieren die Frage jeweils aus einer eigenen Perspektive. Sie urteilen zuerst unabhängig und prüfen dann gegenseitig ihre Positionen. So werden Meinungsverschiedenheiten sichtbar, statt unterzugehen.' },
            { title: 'Begründetes Urteil mit lückenlosem Audit-Trail', body: 'Der Council fasst ein Urteil zusammen, das zeigt, wo Einigkeit besteht, und abweichende Ansichten dokumentiert. Jeder Denkschritt wird festgehalten, sodass die gesamte Abwägung für Prüfung und Freigabe bereitsteht.' },
          ],
        },
        method: {
          phase: 'Orchestrate',
          body: 'Die Phase Orchestrate verhindert, dass folgenreiche Entscheidungen einer einzelnen Modellausgabe überlassen werden. LLM Council setzt dieses Prinzip um: Das Tool erzwingt strukturierten Widerspruch, verlangt unabhängige Begründungen, bevor ein Konsens gesucht wird, und erzeugt einen Audit-Trail, der Governance-Anforderungen erfüllt. Während andere DOME-Phasen begrenzen, was KI tun darf, regelt Orchestrate, wie KI zu ihren Schlüssen kommt. So wird die Begründung selbst überprüfbar.',
        },
      },
      documentIntelligence: {
        phase: 'Model',
        lead: 'Lesen Sie strukturierte Daten aus jedem Dokument aus: Rechnungen, Laborberichte, Versorgerrechnungen, Verträge. Mit Prüfung gegen Governance-Regeln und lückenlosem Audit-Trail.',
        open: 'Document Intelligence öffnen',
        whatItDoes:
          'Document Intelligence macht aus unstrukturierten Dokumenten strukturierte, geprüfte Daten, ohne Abtippen und ohne eigene Vorlagen. Das Tool erkennt Dokumenttyp und Branche selbst, liest jedes relevante Feld mit einem Konfidenzwert aus und prüft das Ergebnis gegen Governance-Regeln: auf Auffälligkeiten, fehlende Pflichtfelder, abgelaufene Fristen, hohe Beträge, möglicherweise offengelegte personenbezogene Daten und mehr. Jede Extraktion landet in einer durchsuchbaren Prüfhistorie. Das Ergebnis ist ein geprüfter Datensatz, den Sie an nachgelagerte Systeme weitergeben können.',
        howItWorks: {
          heading: 'Hochladen, auslesen, prüfen.',
          steps: [
            { title: 'Dokument hochladen oder fotografieren', body: 'Laden Sie eine PDF- oder Bilddatei hoch oder fotografieren Sie das Dokument direkt mit Ihrer Kamera. Das Tool verarbeitet unter anderem Rechnungen, Laborberichte, Versorgerrechnungen, Verträge und Kontoauszüge. Vorlagen oder Konfiguration sind nicht nötig.' },
            { title: 'Auslesen und prüfen', body: 'Felder werden mit Konfidenzwerten ausgelesen, Dokumenttyp und Branche automatisch erkannt, und 16 Governance-Regeln markieren Auffälligkeiten, fehlende Angaben, abgelaufene Fristen, hohe Beträge und mögliche Compliance-Risiken.' },
            { title: 'Prüfen, speichern, exportieren', body: 'Sehen Sie jedes Feld mit Abschnitt, Typ und Konfidenzwert und bewerten Sie die Hinweise nach Schweregrad. Exportieren Sie als CSV zur Weiterverarbeitung oder speichern Sie das Ergebnis für Prüfung und Rückverfolgbarkeit.' },
          ],
        },
        method: {
          phase: 'Model',
          body: 'In der Phase Model führen kontrollierte KI-Entscheidungen zu betrieblichen Ergebnissen. Document Intelligence ist der Einstieg für Organisationen, die in großem Umfang strukturierte Daten aus Dokumenten brauchen. Der reinen Modellausgabe wird dabei nicht blind vertraut: Jedes Ergebnis wird gegen ein festes Regelwerk geprüft, bevor es weitergeht. Was in Ihre Abläufe gelangt, ist dadurch nachvollziehbar, einheitlich und belastbar. Hier wird aus Prozessanalyse kontrollierte Ausführung.',
        },
      },
      dataIntelligence: {
        phase: 'Orchestrate & Model',
        lead: 'Laden Sie eine Tabelle hoch und erhalten Sie ein kontrolliertes Analyse-Dashboard mit automatisch gewählten Diagrammen und einem Bereich für Fragen in eigenen Worten.',
        open: 'Data Intelligence öffnen',
        whatItDoes:
          'Data Intelligence macht aus Tabellendaten ein kontrolliertes Analyse-Dashboard, ohne manuelle Konfiguration. Das System bestimmt für jede Spalte den Typ (Datum, Kategorie, Kennzahl) und lässt dann eine Regel-Engine entscheiden, welche Diagramme passen. Diese Auswahl ist deterministisch und prüfbar: Dieselben Daten führen immer zu denselben Diagrammen, und jede angewandte Governance-Regel wird protokolliert. Sobald das Dashboard steht, können Analysten die Daten in eigenen Worten befragen.',
        howItWorks: {
          heading: 'Hochladen, klassifizieren, analysieren.',
          steps: [
            { title: 'Tabelle hochladen', body: 'Laden Sie eine CSV-, XLSX- oder XLS-Datei hoch. Das Tool erhält Spaltennamen, Datentypen, Beispielwerte und Summen. Die Rohdaten werden sofort verworfen und nie gespeichert.' },
            { title: 'Kontrolliertes Dashboard', body: 'Ein Sprachmodell klassifiziert jede Spalte. Danach wählt eine deterministische Regel-Engine, nicht das Modell, das passende Diagramm für jede Beziehung in den Daten. Das Modell liefert Hinweise, die Regeln entscheiden.' },
            { title: 'Fragen in eigenen Worten', body: 'Sobald das Dashboard steht, stellen Sie Fragen zu den Daten in eigenen Worten. Der Fragenbereich arbeitet mit der Zusammenfassung der klassifizierten Spalten, nicht mit den Rohdaten.' },
          ],
        },
        method: {
          phase: 'Orchestrate & Model',
          body: 'Die Phasen Orchestrate und Model legen fest, wie KI-Komponenten in einem Governance-Rahmen zusammenspielen und eingerichtet werden. Data Intelligence zeigt das konkret: Das Sprachmodell klassifiziert nur Spalten, eine klar begrenzte Aufgabe mit geringem Risiko. Die folgenreichen Entscheidungen über die Darstellung der Daten trifft eine deterministische Regel-Engine. Diese Trennung der Verantwortlichkeiten ist das Muster, das DOME bei jedem KI-Einsatz anwendet.',
        },
      },
      governanceDashboard: {
        phase: 'Govern',
        lead: 'Die Ebene für Aufsicht und Compliance über alle KI-Tools von DOME. Eine geschützte Ansicht aller Governance-Ereignisse, Konfidenzwerte und menschlichen Entscheidungen, mit PDF-Export für Prüfungen und Aufsichtsbehörden.',
        open: 'Governance Dashboard öffnen',
        whatItDoes:
          'Das Governance Dashboard ist die Aufsichtsebene der gesamten DOME-Plattform. Es führt die Governance-Ereignisse aller vier KI-Tools in einem durchsuchbaren Audit-Trail zusammen. Betriebsleitung, Compliance und Revision können jede KI-Entscheidung einsehen, die Verteilung der Konfidenzwerte prüfen, ausgelöste Regeln erkennen und menschliche Entscheidungen nachvollziehen, ohne die einzelnen Tools zu öffnen. PDF-Berichte erstellen Sie jederzeit, für jeden Zeitraum und jede Auswahl von Tools.',
        howItWorks: {
          heading: 'Von der Nutzung der Tools zum Compliance-Bericht.',
          steps: [
            { title: 'Tools wie gewohnt nutzen', body: 'Arbeiten Sie mit einem der vier DOME-Tools: Process Analyzer, LLM Council, Data Intelligence oder Document Intelligence. Jede Anfrage erzeugt automatisch ein Governance-Ereignis mit Aktion, Konfidenzwert, angewandten Regeln und der Empfehlung zur menschlichen Prüfung.' },
            { title: 'Audit-Trail prüfen', body: 'Das Ereignisprotokoll zeigt jedes Governance-Ereignis, das neueste zuerst. Filtern Sie nach Tool, Zeitraum, Art der Aktion, Konfidenzschwelle oder Prüfstatus, und öffnen Sie ein Ereignis, um den vollständigen Entscheidungsnachweis zu sehen.' },
            { title: 'Für die Compliance exportieren', body: 'Erstellen Sie mit einem Klick einen PDF-Prüfbericht für jeden Zeitraum und jede Auswahl von Tools. Er enthält eine Zusammenfassung, die Verteilung der Konfidenzwerte und eine vollständige Tabelle der Ereignisse mit Prüfentscheidungen, bereit für die interne Revision oder die Aufsicht.' },
          ],
        },
        method: {
          phase: 'Govern',
          body: 'Govern zieht sich durch alle anderen DOME-Phasen. Discover erfasst Prozesse, Orchestrate koordiniert Entscheidungen, Model liest Daten aus oder analysiert sie. Govern hält fest, was tatsächlich geschehen ist, und sorgt dafür, dass es sich erklären, prüfen und anfechten lässt. Das Governance Dashboard macht diese Ebene greifbar: ein laufender, einsehbarer Nachweis, der KI-Aktivität in belastbare Belege verwandelt. Er ist die Grundlage für jeden Einsatz in einem regulierten Umfeld.',
        },
      },
      agentFlow: {
        phase: 'Execute',
        heading: 'Agent Flow mit eingebauter Governance',
        lead: 'Ein selbst gehosteter n8n-Workflow, der einen echten Ablauf von der Rechnung bis zur Freigabe über die DOME-Tools hinweg ausführt: Extraktion, eine Regel-Engine für Richtlinien, ein Gremium aus mehreren KI-Modellen und eine menschliche Freigabe. Den vollständigen Audit-Trail rekonstruiert das Governance Dashboard.',
        openQueue: 'Freigabe-Warteschlange öffnen',
        bookDemo: 'Private Demo vereinbaren',
        demoNote: 'Live vorgeführt, mit echten Rechnungen und Erläuterungen.',
        steps: [
          { title: 'Eine Rechnung geht ein', body: 'Ein Lieferant schickt eine Rechnung an das Postfach der Kreditorenbuchhaltung, oder sie wird über das Formular des Workflows hochgeladen. Ein selbst gehosteter n8n-Workflow nimmt sie auf und startet einen Durchlauf mit einer Workflow-ID, die sie vom Eingang bis zur Freigabe begleitet.' },
          { title: 'Auslesen, dann gegen die Richtlinie prüfen', body: 'Document Intelligence liest Felder und Konfidenzwerte aus. Danach bestimmt eine datengesteuerte Regel-Engine den Freigabeweg, anhand von Betragsstufe, Einkaufskategorie, Land und Umsatzsteuer, Lieferanten-Positivliste, Abgleich mit der Bestellung, Währung und Dublettenprüfung.' },
          { title: 'Erst eine Empfehlung, dann die menschliche Freigabe', body: 'Unklare Rechnungen und hohe Beträge erhalten eine Entscheidungsvorlage von LLM Council. Eine namentlich benannte Person gibt auf einer Prüfseite im Unternehmensdesign frei; Rechnungen mit geringem Risiko werden nach Richtlinie automatisch freigegeben. Jeder Schritt wird als eine rekonstruierbare Zeitleiste im Governance Dashboard festgehalten.' },
        ],
      },
    },
    privacy: {
      back: '← Zurück zu domelayer.com',
      updated: 'Zuletzt aktualisiert: Oktober 2026',
      title: 'Datenschutzerklärung',
      appliesTo:
        'Gilt für: domelayer.com und alle Subdomains (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      binding: {
        note: 'Dies ist eine Übersetzung. Rechtlich verbindlich ist allein die englische Fassung dieser Datenschutzerklärung; bei Abweichungen geht der englische Text vor.',
        link: 'Zur englischen Fassung',
      },
      sections: [
        {
          heading: 'Wer wir sind',
          blocks: [
            { p: 'Dome wird von Francesco Prodomo betrieben, einem in Italien eingetragenen Einzelunternehmer (USt-IdNr. IT07242670482), der unter dem Namen Dome tätig ist. Wenn in dieser Erklärung von „Dome“, „wir“ oder „uns“ die Rede ist, ist Francesco Prodomo gemeint, tätig unter dem Namen Dome.' },
            { p: 'Standort: Florenz, Italien\nKontakt in Datenschutzfragen: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo ist der Verantwortliche für alle personenbezogenen Daten, die über domelayer.com und die zugehörigen Tools erhoben werden.' },
          ],
        },
        {
          heading: 'Wofür diese Erklärung gilt',
          blocks: [
            { p: 'Diese Erklärung beschreibt, welche personenbezogenen Daten wir erheben, wenn Sie domelayer.com besuchen oder sich für die KI-Tools von Dome registrieren, warum wir sie erheben, wie lange wir sie aufbewahren und welche Rechte Sie daran haben.' },
            { p: 'Diese Erklärung gilt ausschließlich für domelayer.com und die Portfolio-Tools von Dome. Sie gilt nicht für KI-Systeme oder Software, die Dome für externe Kunden entwirft und einführt: Für diese Projekte gelten eigene Verträge und Auftragsverarbeitungsverträge, die je Projekt vereinbart werden.' },
            { p: 'Wir verkaufen keine personenbezogenen Daten. Wir verwenden personenbezogene Daten nicht für Werbung.' },
          ],
        },
        {
          heading: 'Welche Daten wir erheben und warum',
          blocks: [
            { h3: 'Websitebesucher (kein Konto nötig)' },
            { p: 'Wenn Sie domelayer.com besuchen, setzen wir keine Analyse-Cookies und keine Tracking-Skripte Dritter; Besuche zählen wir nur in Summe, ohne Cookies (siehe unten). Zwei funktionale Cookies können gesetzt werden: `dome-theme` merkt sich, ob Sie das helle oder dunkle Design gewählt haben, und `dome_locale` merkt sich die gewählte Sprache. Keines davon enthält personenbezogene Daten oder dient dem Tracking. Die vollständige Liste, einschließlich dessen, was Ihr Browser speichert, finden Sie in unserer [Cookie-Richtlinie](cookies).' },
            { basis: 'Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), um eine von Ihnen gewählte Darstellungseinstellung zu speichern.' },
            { p: 'Wie bei jeder Website führen unsere Hosting-Anbieter übliche Serverprotokolle, die Ihre IP-Adresse enthalten, zur Sicherheit und für den Betrieb des Dienstes. Wenn eine Seite einen Fehler erzeugt, erhält unser Fehler-Monitoring einen technischen Bericht (zum Beispiel den Browsertyp und die Adresse der Seite). Fehlerberichte enthalten weder Ihren Namen noch Ihre E-Mail-Adresse.' },
            { basis: 'Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), für die Sicherheit und Zuverlässigkeit der Website.' },
            { h3: 'Kontaktformular und Terminbuchungen' },
            { p: 'Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, erhalten wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht (über das Formular außerdem Ihr Unternehmen, sofern Sie es angeben, und das Thema) und verwenden sie nur, um zu antworten. Um das Formular vor Missbrauch zu schützen, zählt unser Hosting-Anbieter die Übermittlungen je IP-Adresse über eine Minute; dieser Zähler wird nicht gespeichert.' },
            { p: 'Wenn Sie ein Gespräch buchen, wird der Kalender von Cal.com bereitgestellt und erst geladen, wenn Sie sich für eine Buchung entscheiden. Die Angaben, die Sie dort machen (Name, E-Mail-Adresse und etwaige Notizen), erreichen uns über Cal.com.' },
            { basis: 'Rechtsgrundlage: Maßnahmen auf Ihre Anfrage vor Abschluss eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO) und berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) an der Beantwortung geschäftlicher Anfragen und am Schutz des Formulars vor Missbrauch.' },
            { p: '**Messung in Summe.** Wir zählen Besuche auf domelayer.com mit Umami, ohne Cookies und ohne Ihre IP-Adresse zu speichern; diese dient nur dazu, einen ungefähren Standort und einen Besuchercode abzuleiten, der sich jeden Monat ändert. Wir sehen Summen, nie Einzelpersonen. Einzelheiten stehen in unserer [Cookie-Richtlinie](cookies). Wir werden niemals Cookie-basierte Analysen oder Werbe-Tracker einführen, ohne diese Erklärung anzupassen und, wo gesetzlich vorgeschrieben, vorher Ihre Einwilligung einzuholen.' },
            { basis: 'Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), um in Summe zu verstehen, wie die Website genutzt wird.' },
            { h3: 'Registrierte Nutzer der Tools' },
            { p: 'Wenn Sie sich für die KI-Tools von Dome registrieren, erheben und verarbeiten wir die folgenden Daten:' },
            { label: 'E-Mail-Adresse' },
            { p: 'Erhoben bei der Registrierung, entweder direkt per E-Mail (Magic Link) oder über Ihr Google- oder GitHub-Konto. Verwendet zur Authentifizierung Ihres Kontos. Mit Ihrer ausdrücklichen Einwilligung auch verwendet, um Ihnen Produktneuigkeiten oder geschäftliche Mitteilungen von Dome zu senden.' },
            { label: 'Anmeldung mit Google oder GitHub' },
            { p: 'Wenn Sie sich mit Google oder GitHub anmelden, teilt dieser Anbieter uns Ihre E-Mail-Adresse, Ihren Namen, einen Link zu Ihrem Profilbild und eine Konto-ID mit. Wir verwenden sie nur, um Ihr Konto anzulegen und zu erkennen. Google und GitHub verarbeiten Ihre Anmeldung nach ihren eigenen Datenschutzbestimmungen, als eigenständige Verantwortliche. Ihr Passwort für Google oder GitHub sehen wir nie.' },
            { basis: 'Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) für die Authentifizierung, einschließlich der Anmeldung mit Google oder GitHub. Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) für Werbemitteilungen.' },
            { label: 'Anmeldezeitpunkte und Sitzungsmetadaten' },
            { p: 'Bei jeder Anmeldung erfassen wir Zeitpunkt und Art der Anmeldung, als übliche Sicherheitsmaßnahme.' },
            { basis: 'Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), für Sicherheit, Betrugsprävention und die Integrität des Dienstes.' },
            { label: 'Daten, die Sie in die Tools eingeben' },
            { p: 'Wenn Sie ein Tool von Dome nutzen, können Sie Dateien hochladen, Text eingeben oder KI-Funktionen verwenden. Wir erheben Daten aus dieser Nutzung und können sie speichern, um den Dienst zu erbringen, darunter Sitzungsstatus, Analyseergebnisse, gespeicherte Ergebnisse, Metadaten des Governance-Protokolls und weitere strukturierte Daten, die für die Funktionen des Tools nötig sind.' },
            { p: 'Wir verarbeiten diese Daten, um den Dienst zu betreiben. Wir verwenden sie nicht zum Training von KI-Modellen, geben sie nicht zu kommerziellen Zwecken an Dritte weiter und greifen nur darauf zu, um technischen Support zu leisten, wenn Sie darum bitten.' },
            { p: 'Welche Daten gespeichert werden, hängt vom verwendeten Tool und den genutzten Funktionen ab. Alle gespeicherten Daten sind Ihrem Konto zugeordnet, durch Sicherheit auf Zeilenebene geschützt und nur für Ihre angemeldete Sitzung zugänglich. Sie können Ihre gespeicherten Daten jederzeit im Tool selbst löschen.' },
            { basis: 'Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO), um die von Ihnen gewünschten Funktionen bereitzustellen.' },
            { label: 'Metadaten des Governance-Protokolls' },
            { p: 'Jede Aktion in einem Tool von Dome erzeugt einen Governance-Datensatz mit: einem Hash Ihrer Eingabe (nicht der Eingabe selbst), der Art der Aktion, einem Zeitstempel, den angewandten und ausgelösten Governance-Regeln, einer kurzen Zusammenfassung des Ergebnisses und technischen Metadaten wie Konfidenzwerten. Dieser Metadatensatz ist der Audit-Trail, auf dem die Governance-Architektur von Dome beruht.' },
            { basis: 'Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), für die Integrität und Qualitätssicherung des Dienstes.' },
            { label: 'Nachweis der Einwilligung in Werbemitteilungen' },
            { p: 'Wenn Sie bei der Registrierung in Werbemitteilungen einwilligen, speichern wir einen Nachweis dieser Einwilligung: das Datum, Ihre Wahl und die Version des Einwilligungstextes, der Ihnen angezeigt wurde.' },
            { basis: 'Rechtsgrundlage: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO), um die Einwilligung wie von der DSGVO verlangt zu dokumentieren.' },
          ],
        },
        {
          heading: 'Was wir nicht tun',
          blocks: [
            {
              list: [
                'Wir erheben oder speichern keine Passwörter. Sie melden sich mit einem Magic Link an, der an Ihre E-Mail-Adresse gesendet wird, oder über Ihr Google- oder GitHub-Konto.',
                'Wir erheben keine Zahlungsdaten. Alle Tools von Dome sind kostenlos.',
                'Wir verwenden Ihre Daten nicht zum Training von KI-Modellen.',
                'Wir geben Ihre Daten nicht zu kommerziellen oder Werbezwecken an Dritte weiter.',
                'Wir erheben wissentlich keine Daten von Minderjährigen unter 18 Jahren.',
              ],
            },
          ],
        },
        {
          heading: 'An wen wir Ihre Daten weitergeben',
          blocks: [
            { p: 'Für den Betrieb von Dome nutzen wir die folgenden externen Dienstleister. Jeder von ihnen handelt als Auftragsverarbeiter auf Grundlage eines Auftragsverarbeitungsvertrags:' },
            { p: '**Supabase Inc.**: Datenbank und Authentifizierung. Die Daten werden in der Europäischen Union gespeichert (Frankfurt, Deutschland: eu-central-1). supabase.com/privacy' },
            { p: '**Cloudflare Inc.**: Hosting dieser Website und der Tools von Dome, einschließlich des Kontaktformulars und seines Missbrauchsschutzes, sowie Weiterleitung von E-Mails an unsere Adressen unter domelayer.com. cloudflare.com/privacypolicy' },
            { p: '**Railway Corp.**: Hosting der Backend-Dienste hinter den Tools von Dome. railway.com/legal/privacy' },
            { p: '**Resend Inc.**: E-Mail-Versand. Verwendet, um Magic Links zu senden, über das Kontaktformular gesendete Nachrichten an uns zuzustellen, unsere Antworten auf Ihre Nachrichten zu versenden und, mit Ihrer Einwilligung, Produktmitteilungen zu senden. resend.com/legal/privacy-policy' },
            { p: '**Functional Software Inc. (Sentry)**: Fehler-Monitoring für die Website und die Tools. Fehlerdaten werden in der Europäischen Union gespeichert (Deutschland). sentry.io/privacy' },
            { p: '**Cal.com Inc.**: Terminbuchung, nur wenn Sie ein Gespräch buchen. cal.com/privacy' },
            { p: '**Umami Software, Inc.**: Messung der Besuche dieser Website in Summe, ohne Cookies. Daten gehostet in der Europäischen Union (Deutschland). umami.is/privacy' },
            { h3: 'Unser Postfach' },
            { p: 'Nachrichten, die Sie uns über das Kontaktformular oder per E-Mail senden, gehen in einem Postfach bei Google (Gmail) ein, wo wir sie lesen und beantworten. Google verarbeitet sie nach seinen eigenen Bedingungen und Datenschutzbestimmungen. policies.google.com/privacy' },
            { h3: 'Verarbeitung durch KI' },
            { p: 'Wenn Sie ein Tool von Dome nutzen, wird Ihre Eingabe an einen KI-Anbieter übermittelt, um eine Antwort zu erzeugen. Jeder Anbieter verarbeitet sie nach seinen API-Bedingungen zur Datenverarbeitung und verwendet API-Daten standardmäßig nicht zum Training seiner Modelle.' },
            { p: '**Anthropic PBC**: alle Tools von Dome. anthropic.com/privacy' },
            { p: '**OpenAI**: nur LLM Council, als einer der drei unabhängigen Berater. openai.com/policies/privacy-policy' },
            { p: '**Google (Gemini API)**: nur LLM Council, als einer der drei unabhängigen Berater. policies.google.com/privacy' },
            { p: 'Wir nutzen keine Werbenetzwerke, keine Tracker sozialer Medien und keine Datenhändler.' },
          ],
        },
        {
          heading: 'Übermittlung in Drittländer',
          blocks: [
            { p: 'Ihr Konto und die Daten, die Sie in den Tools speichern, werden innerhalb der Europäischen Union aufbewahrt, auf Infrastruktur von Supabase in Frankfurt. Auch die Daten des Fehler-Monitorings werden in der Europäischen Union gespeichert.' },
            { p: 'Cloudflare, Railway, Resend, Cal.com, Umami, Anthropic, OpenAI und Google haben ihren Sitz in den Vereinigten Staaten oder verarbeiten dort Daten. Übermittlungen an sie stützen sich auf das EU-US Data Privacy Framework, wenn der Anbieter danach zertifiziert ist, und andernfalls auf Standardvertragsklauseln (SCC) nach Art. 46 DSGVO.' },
            { p: '**Nutzer im Vereinigten Königreich:** Übermittlungen zwischen dem Vereinigten Königreich und der EU sind durch den derzeit geltenden Angemessenheitsbeschluss zwischen dem Vereinigten Königreich und der EU abgedeckt. Nutzer im Vereinigten Königreich können sich beim Information Commissioner’s Office (ico.org.uk) beschweren.' },
          ],
        },
        {
          heading: 'Wie lange wir Ihre Daten aufbewahren',
          blocks: [
            {
              table: {
                head: ['Daten', 'Aufbewahrung'],
                rows: [
                  ['E-Mail-Adresse und Kontodaten', 'Bis Sie die Löschung Ihres Kontos verlangen'],
                  ['Anmeldezeitpunkte', 'Jeweils die letzten 12 Monate'],
                  ['Sitzungsdaten und gespeicherte Ergebnisse der Tools', 'Bis Sie sie löschen oder bis zur Löschung des Kontos'],
                  ['Metadaten des Governance-Protokolls', 'Jeweils die letzten 12 Monate'],
                  ['Nachrichten, die Sie uns senden (Kontaktformular oder E-Mail), und Terminbuchungen', 'Bis zu 24 Monate nach unserem letzten Austausch'],
                  ['Zähler des Kontaktformulars (IP-Adresse)', '1 Minute, nicht gespeichert'],
                  ['Website-Messung (Umami): Seitenaufrufe und Ereignisse, ohne IP-Adresse', '6 Monate'],
                  ['Server- und Fehlerprotokolle', 'Bis zu 90 Tage'],
                  ['Nachweis der Einwilligung in Werbemitteilungen', 'Für die Dauer des Kontos plus 3 Jahre nach der Löschung'],
                ],
              },
            },
            { p: 'Bei Löschung Ihres Kontos löschen wir Ihre personenbezogenen Daten innerhalb von 30 Tagen, sofern keine gesetzliche Aufbewahrungspflicht besteht.' },
          ],
        },
        {
          heading: 'Ihre Rechte',
          blocks: [
            { p: 'Um ein Recht wahrzunehmen, schreiben Sie an [privacy@domelayer.com](mailto:privacy@domelayer.com), von der Adresse, die mit Ihrem Konto verknüpft ist. Wir antworten innerhalb von 30 Tagen.' },
            {
              list: [
                '**Auskunft**: eine Kopie aller personenbezogenen Daten verlangen, die wir über Sie gespeichert haben.',
                '**Berichtigung**: verlangen, dass wir unrichtige Daten korrigieren.',
                '**Löschung**: verlangen, dass wir Ihre Daten innerhalb von 30 Tagen löschen.',
                '**Einschränkung**: verlangen, dass wir die Verarbeitung aussetzen, solange eine Streitfrage geklärt wird.',
                '**Datenübertragbarkeit**: Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten.',
                '**Widerspruch**: der Verarbeitung auf Grundlage berechtigten Interesses widersprechen.',
                '**Widerruf der Einwilligung**: Ihre Einwilligung in Werbemitteilungen jederzeit über den Abmeldelink in jeder E-Mail oder per Nachricht an privacy@domelayer.com widerrufen.',
              ],
            },
            { p: '**Beschwerde**: sich bei einer Aufsichtsbehörde beschweren:' },
            {
              list: [
                'Italien: Garante per la Protezione dei Dati Personali (garante.privacy.it)',
                'Vereinigtes Königreich: Information Commissioner’s Office (ico.org.uk)',
                'Sie können sich auch an die Aufsichtsbehörde in Ihrem Wohnsitzland wenden.',
              ],
            },
          ],
        },
        {
          heading: 'Cookies',
          blocks: [
            { p: 'Jedes Cookie und jeder Eintrag im Browserspeicher, den wir verwenden, ist mit Zweck und Dauer in unserer [Cookie-Richtlinie](cookies) aufgeführt. Kurz gesagt: Ein Cookie hält Sie angemeldet, zwei merken sich Design und Sprache, und keines dient dem Tracking oder der Werbung. Während Sie die Website nutzen, werden keine Cookies von Dritten gesetzt.' },
          ],
        },
        {
          heading: 'Sicherheit',
          blocks: [
            { p: 'Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten, darunter Sicherheit auf Zeilenebene für alle Datenbanktabellen, HTTPS-Verschlüsselung bei der Übertragung und eine Anmeldung ohne Passwort (Magic Link, Google oder GitHub), ohne gespeicherte Passwörter.' },
            { p: 'Kein System ist vollkommen sicher. Wenn Sie vermuten, dass Ihr Konto kompromittiert wurde, wenden Sie sich bitte sofort an [privacy@domelayer.com](mailto:privacy@domelayer.com).' },
          ],
        },
        {
          heading: 'Änderungen dieser Erklärung',
          blocks: [
            { p: 'Wir können diese Erklärung aktualisieren, wenn sich unsere Praxis oder gesetzliche Anforderungen ändern. Bei wesentlichen Änderungen informieren wir registrierte Nutzer mindestens 30 Tage vor deren Inkrafttreten per E-Mail. Das Datum „Zuletzt aktualisiert“ oben auf dieser Seite zeigt die aktuelle Fassung.' },
          ],
        },
        {
          heading: 'Kontakt',
          blocks: [
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo, tätig als Dome · Florenz, Italien · USt-IdNr. IT07242670482' },
          ],
        },
      ],
      sibling: 'Nutzungsbedingungen →',
    },
    cookies: {
      back: '← Zurück zu domelayer.com',
      updated: 'Zuletzt aktualisiert: Oktober 2026',
      title: 'Cookie-Richtlinie',
      appliesTo:
        'Gilt für: domelayer.com und alle Subdomains (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      binding: {
        note: 'Dies ist eine Übersetzung. Rechtlich verbindlich ist allein die englische Fassung dieser Cookie-Richtlinie; bei Abweichungen geht der englische Text vor.',
        link: 'Zur englischen Fassung',
      },
      sections: [
        {
          heading: 'Kurz gesagt',
          blocks: [
            { p: 'Wir verwenden drei Cookies und einige Einträge im Speicher Ihres Browsers. Alle werden von uns gesetzt, auf unserer eigenen Domain, aus einem von drei Gründen: um Sie angemeldet zu halten, um sich eine Wahl zu merken, die Sie getroffen haben, oder damit eine Seite funktioniert. Keiner davon dient dazu, Sie zu verfolgen, ein Profil von Ihnen zu erstellen oder Ihnen Werbung zu zeigen, und keiner wird mit anderen geteilt.' },
            { p: 'Deshalb hat diese Website kein Einwilligungsbanner. Cookies und Speicher dieser Art sind technisch: Nach Art. 122 des italienischen Datenschutzgesetzes (Codice in materia di protezione dei dati personali) und den Cookie-Leitlinien der italienischen Aufsichtsbehörde Garante vom Juni 2021 brauchen sie keine Einwilligung, nur diese Information. Unsere Messung der Besuche (siehe unten) verwendet weder Cookies noch Browserspeicher und ist so eingerichtet, dass sie die Bedingungen erfüllt, unter denen der Garante Analysen wie technische Cookies behandelt.' },
            { p: 'Beim ersten Besuch wird nichts gesetzt. Alles Folgende entsteht erst, wenn Sie etwas tun: sich anmelden, Design oder Sprache wechseln, den Cookie-Hinweis schließen oder ein Tool nutzen. Es gibt eine Ausnahme: Wenn Ihr Browser eine andere Sprache bevorzugt, in der diese Website veröffentlicht ist, und Sie eine englische Seite öffnen, leiten wir Sie einmalig zur Seite in dieser Sprache weiter und setzen `dome_locale`, damit das nicht erneut geschieht.' },
          ],
        },
        {
          heading: 'Cookies',
          blocks: [
            {
              table: {
                head: ['Cookie', 'Zweck', 'Dauer', 'Art'],
                rows: [
                  ['`dome_auth_token`', 'Hält Sie auf domelayer.com und in den Tools von Dome angemeldet. Gesetzt bei der Anmeldung, für jede Subdomain von domelayer.com.', 'Bis Ihre Anmeldung abläuft, höchstens 8 Stunden', 'Unbedingt erforderlich'],
                  ['`dome-theme`', 'Merkt sich, ob Sie das helle oder das dunkle Design gewählt haben, auf der Website und in den Tools. Gesetzt, wenn Sie das Design wechseln.', '1 Jahr', 'Funktional: eine Einstellung, die Sie wählen'],
                  ['`dome_locale`', 'Merkt sich Ihre Sprache. Gesetzt, wenn Sie die Sprache wechseln, oder einmalig, wenn wir einen Browser, der eine andere Sprache der Website bevorzugt, zu dieser Fassung leiten. Nur domelayer.com.', '1 Jahr', 'Funktional: eine Einstellung, die Sie wählen'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Browserspeicher',
          blocks: [
            { p: 'Manche Informationen werden im lokalen Speicher Ihres Browsers abgelegt, der bestehen bleibt, bis Sie ihn löschen, oder im Sitzungsspeicher, der bis zum Schließen des Tabs besteht. Nur die Seite, die einen Eintrag geschrieben hat, liest ihn wieder aus.' },
            {
              table: {
                head: ['Eintrag', 'Wo', 'Inhalt', 'Dauer'],
                rows: [
                  ['`dome-theme`', 'Lokaler Speicher, auf domelayer.com und in jedem Tool', 'Ihre Wahl des Designs, eine Kopie des gleichnamigen Cookies', 'Bis Sie ihn löschen'],
                  ['`dome-cookie-notice-dismissed`', 'Lokaler Speicher, domelayer.com', 'Dass Sie den Cookie-Hinweis geschlossen haben, damit er nicht wiederkommt', 'Bis Sie ihn löschen'],
                  ['`dome_pending_consent`', 'Lokaler Speicher, domelayer.com', 'Bei der Registrierung: die Version der akzeptierten Bedingungen und Ihre Wahl zu Produktneuigkeiten, bis sie in Ihrem Konto gespeichert sind', 'Bis die Registrierung abgeschlossen ist'],
                  ['`dome_consent_accepted`', 'Lokaler Speicher, domelayer.com', 'Die Version der akzeptierten Bedingungen, damit dieses Gerät nicht erneut fragt', 'Bis Sie ihn löschen'],
                  ['`sb-…-auth-token`, `sb-…-code-verifier`', 'Lokaler Speicher, domelayer.com', 'Ein temporärer Datensatz, den unser Anmeldedienst Supabase während der Anmeldung anlegt', 'Entfernt, sobald Sie angemeldet sind, meist innerhalb von Minuten'],
                  ['`dome_auth_redirect`', 'Sitzungsspeicher, domelayer.com', 'Die Tool-Seite, zu der Sie nach der Anmeldung zurückkehren', 'Bis Sie den Tab schließen'],
                  ['`react-router-scroll-positions`', 'Sitzungsspeicher, domelayer.com', 'Wo Sie auf jeder Seite waren, damit „Zurück“ Sie an dieselbe Stelle bringt', 'Bis Sie den Tab schließen'],
                  ['`dome_doc_result_…`', 'Sitzungsspeicher, document-intelligence.domelayer.com', 'Das Ergebnis Ihrer letzten Extraktion und der Dateiname, für die Ergebnisseite', 'Bis Sie den Tab schließen'],
                  ['`dome_session_…`', 'Sitzungsspeicher, data-intelligence.domelayer.com', 'Die Zeilen der hochgeladenen Tabelle und ihre Analyse, damit sich das Dashboard ohne erneute Serveranfrage öffnet', 'Bis Sie den Tab schließen'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Messung',
          blocks: [
            { p: 'Wir messen die Besuche auf domelayer.com in Summe mit **Umami** (Umami Software, Inc.), mit Datenhaltung in der Europäischen Union. Umami setzt keine Cookies und speichert nichts in Ihrem Browser. Das Skript wird von unserer eigenen Domain ausgeliefert und sendet eine kurze Meldung pro Seitenaufruf sowie eine, wenn Sie eine Nachricht senden, den Buchungskalender öffnen, einem Link zur Terminbuchung folgen, die Anmeldung beginnen oder die Sprache wechseln.' },
            { p: 'Ihre IP-Adresse wird nicht gespeichert. Umami verwendet sie nur, um einen ungefähren Standort (Land, Region und Stadt) zu ermitteln und Besuche desselben Browsers innerhalb eines Kalendermonats zu erkennen, über einen Code, der sich nicht zurückrechnen lässt und sich jeden Monat ändert. Wir sehen Summen, nie Einzelpersonen: wie viele Besuche es gibt, woher sie kommen, welche Seiten und Leistungen Interesse wecken und wie viele Nachrichten und Buchungen folgen. Wir verwenden das nicht, um ein Profil von Ihnen zu erstellen, verknüpfen es nicht mit anderen Daten und geben es nicht weiter. Umami bewahrt es 6 Monate auf.' },
            { p: 'Wenn Ihr Browser „Do Not Track“ sendet, wird nichts gemessen. Die Anmeldeseiten werden ohne ihre Adressparameter gemeldet. Die Tools von Dome werden nicht gemessen: Was wir dort zählen, sind die Durchläufe, die jedes Tool in seinem Audit-Trail festhält, wie in der [Datenschutzerklärung](privacy) beschrieben.' },
          ],
        },
        {
          heading: 'Weitere Dienste',
          blocks: [
            { p: '**Cloudflare**, das diese Website hostet, setzt hier keine Cookies. Um das Kontaktformular vor Missbrauch zu schützen, zählt Cloudflare die Übermittlungen je IP-Adresse über eine Minute; dieser Zähler wird nicht gespeichert.' },
            { p: '**Sentry**, unser Fehler-Monitoring (EU-Region), sendet einen technischen Bericht, wenn eine Seite einen Fehler erzeugt. Sentry setzt keine Cookies und speichert nichts in Ihrem Browser.' },
            { p: '**Schriften** werden von unseren eigenen Domains ausgeliefert. Keine Seite lädt etwas von Google Fonts.' },
            { p: '**Cal.com** stellt den Buchungskalender auf der Kontaktseite bereit. Er lädt erst, wenn Sie sich für eine Terminbuchung entscheiden; ab dann kann Cal.com eigene Cookies setzen, nach seinen eigenen Datenschutzbestimmungen.' },
          ],
        },
        {
          heading: 'Ihre Wahlmöglichkeiten',
          blocks: [
            { p: 'Sie können Cookies und Browserspeicher jederzeit in den Einstellungen Ihres Browsers löschen und ganz blockieren. Wenn Sie `dome_auth_token` löschen, werden Sie abgemeldet; das Löschen der anderen setzt nur Ihr Design, Ihre Sprache, den Cookie-Hinweis oder die zuletzt besuchte Stelle zurück.' },
          ],
        },
        {
          heading: 'Änderungen und Kontakt',
          blocks: [
            { p: 'Wir aktualisieren diese Seite, sobald wir ein Cookie oder einen Speichereintrag hinzufügen, ändern oder entfernen, und bevor ein neuer verwendet wird. Das Datum oben zeigt die aktuelle Fassung.' },
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo, tätig als Dome · Florenz, Italien · USt-IdNr. IT07242670482' },
          ],
        },
      ],
      sibling: 'Datenschutzerklärung →',
    },
    terms: {
      back: '← Zurück zu domelayer.com',
      updated: 'Zuletzt aktualisiert: September 2026',
      title: 'Nutzungsbedingungen',
      appliesTo:
        'Gilt für: analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com',
      binding: {
        note: 'Dies ist eine Übersetzung. Rechtlich verbindlich ist allein die englische Fassung dieser Nutzungsbedingungen; bei Abweichungen geht der englische Text vor.',
        link: 'Zur englischen Fassung',
      },
      sections: [
        {
          heading: 'Wer diese Tools anbietet',
          blocks: [
            { p: 'Die KI-Tools von Dome werden von Francesco Prodomo betrieben, einem in Italien eingetragenen Einzelunternehmer (USt-IdNr. IT07242670482), der unter dem Namen Dome tätig ist.' },
            { p: 'Standort: Florenz, Italien\nKontakt: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'Wofür diese Bedingungen gelten',
          blocks: [
            { p: 'Mit der Registrierung für ein KI-Tool von Dome und seiner Nutzung stimmen Sie diesen Bedingungen zu. Bitte lesen Sie sie vor der Registrierung. Wenn Sie nicht zustimmen, nutzen Sie die Tools bitte nicht.' },
            { p: 'Diese Bedingungen gelten für die Portfolio-Tools von Dome unter den oben genannten Subdomains. Sie gelten nicht für Projekte, in denen Dome KI-Systeme für andere Organisationen entwirft oder einführt: Dafür gelten eigene Projektverträge.' },
            { p: 'Diese Bedingungen gelten zusammen mit unserer [Datenschutzerklärung](privacy), die durch Verweis Bestandteil dieser Bedingungen ist.' },
          ],
        },
        {
          heading: 'Die Tools',
          blocks: [
            { p: 'Dome bietet eine Reihe kostenloser KI-gestützter Tools, um Konzepte operativer KI mit Governance zu erkunden, darunter Prozessanalyse, Dokumentenanalyse, Datenanalyse und zugehörige Demonstrationen.' },
            { p: 'Die Tools werden kostenlos und im vorliegenden Zustand („as is“) zu Demonstrations- und Evaluierungszwecken bereitgestellt.' },
          ],
        },
        {
          heading: 'Ihr Konto',
          blocks: [
            { p: 'Sie registrieren sich mit Ihrer E-Mail-Adresse, indem Sie einen Magic Link anfordern oder sich mit Ihrem Google- oder GitHub-Konto anmelden. Ein Passwort für Dome ist weder nötig noch wird es gespeichert. Sie sind dafür verantwortlich, Ihr E-Mail-, Google- oder GitHub-Konto zu schützen.' },
            { p: 'Sie dürfen pro E-Mail-Adresse nur ein Konto registrieren. Sie dürfen Ihr Konto nicht teilen und sich nicht ohne Wissen und Zustimmung einer anderen Person in deren Namen registrieren.' },
            { p: 'Wir behalten uns vor, Konten zu sperren oder zu kündigen, die gegen diese Bedingungen verstoßen, auf eine Weise genutzt werden, die anderen schadet, oder die Integrität des Dienstes gefährden.' },
          ],
        },
        {
          heading: 'Zulässige Nutzung',
          blocks: [
            { p: 'Sie verpflichten sich, die Tools von Dome nur zu rechtmäßigen Zwecken und im Einklang mit diesen Bedingungen zu nutzen.' },
            { label: 'Untersagt ist Folgendes:' },
            {
              list: [
                'Dateien hochzuladen oder Inhalte einzugeben, die Sie nicht rechtmäßig verarbeiten dürfen. Enthalten Inhalte personenbezogene Daten Dritter, sind Sie dafür verantwortlich, dass Sie nach der DSGVO oder anderem anwendbaren Recht über eine Rechtsgrundlage verfügen, diese Daten mit dem KI-Dienst eines Dritten zu verarbeiten.',
                'Inhalte mit besonderen Kategorien personenbezogener Daten hochzuladen (Gesundheitsdaten, biometrische Daten, politische Meinungen, religiöse Überzeugungen oder Ähnliches), es sei denn, Sie verfügen über eine dokumentierte Rechtsgrundlage und, wo erforderlich, über die ausdrückliche Einwilligung der betroffenen Personen.',
                'Zu versuchen, die zugrunde liegenden KI-Systeme zurückzuentwickeln, Modellgewichte daraus zu gewinnen oder sie systematisch auszuforschen.',
                'Die Tools zu nutzen, um Inhalte zu erzeugen, die rechtswidrig, verleumderisch, betrügerisch oder für andere schädlich sind.',
                'Automatisierte Mittel zu nutzen, um in einem Umfang auf die Tools zuzugreifen, der die Verfügbarkeit des Dienstes beeinträchtigt.',
                'Zu versuchen, auf die Daten anderer Nutzer zuzugreifen oder die Authentifizierung zu umgehen.',
              ],
            },
          ],
        },
        {
          heading: 'Daten und Verarbeitung durch KI',
          blocks: [
            { p: 'Wenn Sie ein Tool von Dome nutzen, werden die von Ihnen eingegebenen Inhalte zur Verarbeitung an ein KI-Modell übermittelt: an Anthropic für alle Tools und zusätzlich an OpenAI und Google für LLM Council. Dome kann Daten aus Ihrer Nutzung der Tools speichern, darunter Sitzungsstatus, gespeicherte Analysen und Governance-Metadaten, um den Dienst zu erbringen. Was genau erhoben wird, wie es verwendet wird und wie lange es aufbewahrt wird, steht in der [Datenschutzerklärung](privacy).' },
            { p: 'Sie bleiben uneingeschränkt Eigentümer aller Inhalte, die Sie eingeben, und aller daraus erzeugten Ergebnisse. Dome beansprucht keine Lizenz und keine Rechte an Ihren Eingaben oder Ergebnissen.' },
            { p: 'Sie sind dafür verantwortlich, dass die von Ihnen eingegebenen Inhalte keine vertraulichen Informationen Dritter enthalten, die Sie nicht an einen externen KI-Dienst weitergeben dürfen.' },
          ],
        },
        {
          heading: 'Ergebnisse der KI: wichtiger Hinweis',
          blocks: [
            { warning: '**Ergebnisse der KI sind keine fachliche Beratung.** Nichts, was die Tools von Dome erzeugen, stellt eine rechtliche, finanzielle, einkaufsbezogene, Compliance-, betriebliche oder sonstige fachliche Beratung dar. Handeln Sie nicht auf Grundlage KI-generierter Ergebnisse ohne unabhängige Prüfung durch eine qualifizierte Fachperson.' },
            { p: 'Die Tools von Dome verwenden große Sprachmodelle, um Analysen, Zusammenfassungen, Klassifizierungen und Empfehlungen zu erzeugen. Diese Ergebnisse entstehen automatisch und dienen ausschließlich der Information und Demonstration.' },
            { p: 'Dome übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Eignung KI-generierter Ergebnisse für einen bestimmten Zweck. KI-Modelle können Fehler machen und Ergebnisse liefern, die plausibel wirken, aber sachlich falsch sind. Sie allein sind dafür verantwortlich, Ergebnisse zu prüfen, bevor Sie sich darauf verlassen.' },
            { p: 'Dieser Hinweis ist besonders wichtig in regulierten Bereichen (Einkauf, Finanzen, Handels-Compliance, Recht und vergleichbare Gebiete), in denen falsche Ergebnisse erhebliche Folgen haben können.' },
          ],
        },
        {
          heading: 'Verfügbarkeit und Änderungen',
          blocks: [
            { p: 'Die Tools von Dome sind kostenlos und können jederzeit geändert, unterbrochen oder eingestellt werden. Wir bemühen uns, größere Änderungen oder eine Einstellung mit angemessenem Vorlauf anzukündigen, sagen aber nichts zu Betriebszeit, Verfügbarkeit oder dem Fortbestand von Funktionen zu.' },
            { p: 'Wir können jederzeit Funktionen hinzufügen, ändern oder entfernen.' },
          ],
        },
        {
          heading: 'Geistiges Eigentum',
          blocks: [
            { p: 'Der Name Dome, das Logo, die Website und die Oberflächen der Tools sind Eigentum von Francesco Prodomo. Sie dürfen sie ohne schriftliche Genehmigung weder vervielfältigen noch verwenden.' },
            { p: 'Alle Rechte an Ihren eingegebenen Inhalten und den daraus abgeleiteten Ergebnissen verbleiben bei Ihnen.' },
          ],
        },
        {
          heading: 'Haftungsbeschränkung',
          blocks: [
            { p: 'Soweit nach anwendbarem Recht zulässig, haften Francesco Prodomo und Dome nicht für mittelbare Schäden, Folgeschäden, Nebenschäden oder Schadensersatz mit Strafcharakter, die aus Ihrer Nutzung der Tools entstehen, einschließlich Verlusten, die darauf beruhen, dass Sie sich auf KI-generierte Ergebnisse verlassen haben.' },
            { p: 'Unsere Gesamthaftung Ihnen gegenüber für Ansprüche aus der Nutzung der Tools übersteigt null Euro nicht, da die Tools Ihnen kostenlos bereitgestellt werden.' },
            { p: 'Nichts in diesen Bedingungen schließt die Haftung für Vorsatz oder grobe Fahrlässigkeit (Art. 1229 des italienischen Zivilgesetzbuchs, Codice civile), für fahrlässig verursachte Tötung oder Körperverletzung, für Betrug oder für jede andere Haftung, die nach italienischem Recht nicht ausgeschlossen werden kann, aus oder beschränkt sie.' },
          ],
        },
        {
          heading: 'Anwendbares Recht und Gerichtsstand',
          blocks: [
            { p: 'Für diese Bedingungen gilt italienisches Recht. Für Streitigkeiten aus diesen Bedingungen oder aus Ihrer Nutzung der Tools von Dome ist ausschließlich das Gericht in Florenz (Tribunale di Firenze), Italien, zuständig.' },
            { p: 'Wenn Sie Verbraucher mit Wohnsitz in einem anderen Mitgliedstaat der EU oder im Vereinigten Königreich sind, behalten Sie den Schutz zwingender Vorschriften des Rechts Ihres Wohnsitzlandes, die vertraglich nicht ausgeschlossen werden können.' },
          ],
        },
        {
          heading: 'Änderungen dieser Bedingungen',
          blocks: [
            { p: 'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Bei wesentlichen Änderungen informieren wir Sie mindestens 30 Tage vor deren Inkrafttreten per E-Mail. Wenn Sie die Tools nach dem Inkrafttreten weiter nutzen, gilt dies als Zustimmung zu den geänderten Bedingungen.' },
            { p: 'Die aktuelle Fassung finden Sie jederzeit unter [domelayer.com/de/nutzungsbedingungen](terms).' },
          ],
        },
        {
          heading: 'Kontakt',
          blocks: [
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo, tätig als Dome · Florenz, Italien · USt-IdNr. IT07242670482' },
          ],
        },
      ],
      sibling: '← Datenschutzerklärung',
    },
  },
}
