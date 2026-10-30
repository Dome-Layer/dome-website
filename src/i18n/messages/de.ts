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
//
// Not yet reviewed by a native reader: keep this locale unpublished in production until it is
// (DOME_PUBLISH_DE, see src/i18n/locales.ts).
export const de: Messages = {
  site: {
    description:
      'DOME ist eine Beratung für KI und Produktentwicklung für Unternehmen in regulierten Branchen, mit Sitz in Florenz und tätig in ganz Europa. Wir analysieren und automatisieren Geschäftsprozesse mit KI, die Sie prüfen können, und gestalten die Unternehmenssoftware, Dashboards und Datenvisualisierungen, mit denen Menschen arbeiten.',
    llmsIntro:
      'Wir arbeiten in drei Bereichen: KI-Prozessautomatisierung (einschließlich Prozessaufnahme und Geschäftsanalyse), Enterprise UX und Produkt (einschließlich Dashboards und Datenvisualisierung) und die DOME-Tools. Diese Tools entwickeln und betreiben wir selbst (Prozessanalyse, Dokumenten- und Datenanalyse, ein Council aus mehreren Modellen, ein Agenten-Workflow mit Governance und ein Governance-Dashboard). Sie zeigen, wie wir KI mit Governance umsetzen, und sind nicht käuflich. Jedes Tool hält seine Entscheidungen in einem Audit-Trail fest, und wo die Richtlinie es verlangt, gibt eine namentlich benannte Person das Ergebnis frei.',
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
    switchToLight: 'Zum hellen Design wechseln',
    switchToDark: 'Zum dunklen Design wechseln',
  },
  switcher: {
    language: 'Sprache',
    readIn: {
      en: 'Diese Seite auf Englisch',
      it: 'Diese Seite auf Italienisch',
      nl: 'Diese Seite auf Niederländisch',
      de: 'Diese Seite auf Deutsch',
    },
  },
  footer: {
    tagline: 'Beratung für KI und Produktentwicklung für regulierte Unternehmen, mit eingebauter Governance.',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    cookies: 'Cookie-Richtlinie',
    rights: 'Alle Rechte vorbehalten.',
  },
  cookieNotice: {
    lead: 'Dome verwendet nur funktionale Cookies.',
    body: 'Ein Cookie hält Sie angemeldet, zwei merken sich Design und Sprache. Besuche zählen wir nur in Summe, ohne Cookies. Kein Tracking, keine Werbung.',
    link: 'Zur Cookie-Richtlinie',
    dismiss: 'Verstanden',
  },
  contactForm: {
    heading: 'Nachricht senden',
    intro: 'Sie schreiben lieber? Erzählen Sie uns von Ihrem Projekt, wir melden uns bei Ihnen.',
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'Geschäftliche E-Mail-Adresse',
    emailPlaceholder: 'name@unternehmen.de',
    companyLabel: 'Unternehmen',
    companyOptional: '(optional)',
    companyPlaceholder: 'Name des Unternehmens',
    topicLabel: 'Thema',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Erzählen Sie uns von Ihrem Projekt',
    privacyNote: 'Wir verwenden Ihre Angaben nur, um auf Ihre Nachricht zu antworten. Siehe unsere',
    privacyLink: 'Datenschutzerklärung',
    send: 'Nachricht senden',
    sending: 'Wird gesendet',
    successTitle: 'Nachricht erhalten',
    successBody: 'Vielen Dank für Ihre Nachricht. Wir antworten innerhalb von zwei Werktagen, auf Englisch oder Italienisch.',
    sendAnother: 'Weitere Nachricht senden',
    rateLimited: 'Sie haben das Limit des Kontaktformulars erreicht. Bitte versuchen Sie es in einer Minute erneut.',
    genericError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.',
  },
  errors: {
    notFoundTitle: 'Seite nicht gefunden',
    notFoundBody: 'Die gesuchte Seite gibt es nicht.',
    errorTitle: 'Etwas ist schiefgelaufen',
    errorBody: 'Bitte laden Sie die Seite neu.',
    homeLink: 'Zur Startseite',
  },
  breadcrumbHome: 'Startseite',
  meta: {
    home: {
      name: 'Startseite',
      title: 'DOME | KI mit Governance für regulierte Unternehmen',
      description:
        'DOME hilft regulierten Unternehmen, KI mit eingebauter Governance in den Betrieb zu bringen, von der Prozessautomatisierung bis zu Tools, die wir selbst entwickeln und betreiben.',
      ogDescription:
        'Vom ersten Tag an für den Betrieb konzipiert. Wir helfen regulierten Unternehmen, KI mit Governance, menschlicher Aufsicht und vollständigem Audit-Trail einzusetzen.',
      twitterDescription: 'Betriebsreife KI mit eingebauter Governance, für regulierte Unternehmen.',
      imageAlt: 'DOME: KI mit Governance für regulierte Unternehmen',
    },
    enterpriseUx: {
      name: 'Enterprise UX und Produkt',
      title: 'Enterprise UX, Produkt und Datenvisualisierung | DOME',
      description:
        'Nutzerforschung, Service Design, Interface Design und Datenvisualisierung für komplexe Unternehmensplattformen, mit einem Designsystem, mit dem Ihre Entwickler arbeiten können.',
      ogDescription:
        'Wir entwirren komplexe interne Tools und Kundenplattformen: Forschung, Service Design, Interface Design und ein Designsystem, mit dem Ihr Team weiterarbeiten kann.',
      imageAlt: 'DOME, Beratung für Enterprise UX und Produkt',
    },
    aiProcessAutomation: {
      name: 'KI-Prozessautomatisierung',
      title: 'KI-Prozessautomatisierung und Geschäftsanalyse | DOME',
      description:
        'Wir erfassen und analysieren Ihre Geschäftsprozesse, automatisieren die Schritte mit klaren Regeln und übergeben den Rest Ihrem Team, mit Entscheidungsvorlage und vollständigem Audit-Trail.',
      ogDescription:
        'Einen Prozess automatisieren, ohne die Kontrolle abzugeben: klare Regeln, wo sie gelten, eine menschliche Entscheidung, wo nicht, und ein Audit-Trail durchgehend.',
      imageAlt: 'DOME KI-Prozessautomatisierung',
    },
    dome: {
      name: 'DOME-Tools',
      title: 'DOME-Tools: die Tools, die wir entwickeln und betreiben | DOME',
      description:
        'Sechs funktionierende Tools für den Weg von der Prozessaufnahme bis zur geprüften Ausführung. Sie belegen, wie wir KI mit Governance bauen, und sind keine Produkte zum Verkauf.',
      ogDescription:
        'Prozessanalyse, Dokumenten- und Datenanalyse, ein Council aus mehreren Modellen, ein Agenten-Workflow mit Governance und ein Governance-Dashboard. Von uns entwickelt und betrieben.',
      imageAlt: 'DOME-Tools: Tools, die wir entwickeln und betreiben',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer: KI-Prozessaufnahme mit Governance | DOME',
      description:
        'Wandeln Sie die Beschreibung eines Geschäftsprozesses in Alltagssprache in eine strukturierte Prozesslandkarte um, mit Governance-Analyse und Bewertung des Automatisierungspotenzials.',
      ogDescription:
        'Beschreiben Sie einen Geschäftsprozess in Alltagssprache. Sie erhalten eine strukturierte Prozesslandkarte, eine Analyse der Governance-Lücken und eine Bewertung des KI-Automatisierungspotenzials.',
      twitterDescription:
        'Beschreiben Sie einen Geschäftsprozess in Alltagssprache und erhalten Sie eine strukturierte Landkarte, Governance-Lücken und Automatisierungschancen.',
      imageAlt: 'DOME Process Analyzer: Prozessaufnahme mit Governance',
      twitterImageAlt: 'DOME Process Analyzer',
    },
    dataIntelligence: {
      name: 'Data Intelligence',
      title: 'Data Intelligence: KI-Dashboards, die Sie prüfen können | DOME',
      description:
        'Laden Sie eine Tabelle hoch und erhalten Sie ein Analyse-Dashboard mit Governance, automatischer Diagrammauswahl und einem Bereich für Fragen in Alltagssprache.',
      ogDescription:
        'Laden Sie eine Tabelle hoch. Sie erhalten ein Analyse-Dashboard mit Governance, deterministischer Diagrammauswahl und einem Bereich für Fragen in Alltagssprache, ganz ohne manuelle Konfiguration.',
      twitterDescription:
        'Laden Sie eine Tabelle hoch und erhalten Sie ein Dashboard mit Governance, automatischer Diagrammauswahl und Fragen in Alltagssprache, ohne Konfiguration.',
      imageAlt: 'DOME Data Intelligence: Analyse-Dashboard mit Governance',
      twitterImageAlt: 'DOME Data Intelligence',
    },
    llmCouncil: {
      name: 'LLM Council',
      title: 'LLM Council: Entscheidungsvorlagen aus mehreren KI-Modellen | DOME',
      description:
        'Legen Sie eine strategische Frage drei KI-Beratern vor. Sie beraten unabhängig, hinterfragen sich gegenseitig und liefern ein begründetes Urteil mit vollständigem Audit-Trail.',
      imageAlt: 'DOME LLM Council: KI-Beratung mit Governance',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence: prüfbare Datenextraktion mit KI | DOME',
      description:
        'Extrahieren Sie strukturierte Daten aus jedem Dokument: Rechnungen, Laborberichte, Versorgerrechnungen, Verträge. Mit Governance-Prüfung und vollständigem Audit-Trail.',
      ogDescription:
        'Laden Sie ein Dokument hoch und erhalten Sie in Sekunden eine strukturierte Extraktion mit Governance: Feldwerte, Konfidenzwerte und einen Bericht zu 16 Governance-Regeln.',
      twitterDescription:
        'Strukturierte Daten aus jedem Dokument. Governance-Prüfung, Konfidenzwerte und vollständiger Audit-Trail, ohne Vorlagen.',
      imageAlt: 'DOME Document Intelligence: Dokumentenextraktion mit Governance',
      twitterImageAlt: 'DOME Document Intelligence',
    },
    governanceDashboard: {
      name: 'Governance Dashboard',
      title: 'Governance Dashboard: ein Audit-Trail für KI-Entscheidungen | DOME',
      description:
        'Ein laufender Audit-Trail, Compliance-Berichte und PDF-Export für alle DOME-Tools: jedes Governance-Ereignis, jeder Konfidenzwert und jede menschliche Entscheidung an einem Ort.',
      ogDescription:
        'Audit-Trail, Compliance-Reporting und PDF-Export für alle vier KI-Tools von DOME. Jedes Governance-Ereignis, jeder Konfidenzwert und jede menschliche Entscheidung an einem Ort.',
      twitterDescription: 'Audit-Trail und Compliance-Reporting in Echtzeit für alle vier KI-Tools von DOME.',
      imageAlt: 'DOME Governance Dashboard: toolübergreifender Audit-Trail und Compliance-Reporting',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow: von der Rechnung zur Freigabe, mit Governance | DOME',
      description:
        'Ein Workflow von der Rechnung bis zur Freigabe mit Governance: Dokumentenextraktion, Regel-Engine für Richtlinien, ein Council aus mehreren Modellen und eine menschliche Freigabe, jeder Schritt protokolliert.',
      ogDescription:
        'Ein Workflow von der Rechnung bis zur Freigabe über die DOME-Tools hinweg, mit einer menschlichen Freigabestufe und vollständigem Audit-Trail.',
      twitterDescription: 'Von der Rechnung zur Freigabe, mit menschlicher Freigabestufe und vollständigem Audit-Trail.',
      imageAlt: 'DOME Agent Flow: Workflow von der Rechnung bis zur Freigabe mit Governance',
      twitterImageAlt: 'DOME Agent Flow',
    },
    about: {
      name: 'Über uns',
      title: 'Beratung für KI und Produkt für regulierte Unternehmen | DOME',
      description:
        'DOME ist eine Beratung für KI und Produkt in Florenz und arbeitet europaweit mit Teams aus Einkauf, Finanzen, Compliance und Lieferkette in regulierten Branchen.',
      ogDescription:
        'Eine verantwortliche Projektleitung, ein Netzwerk von Fachleuten und ein Umsetzungspartner. Wie DOME aufgestellt ist und was Sie von einem Projekt erwarten können.',
      imageAlt: 'Über DOME',
    },
    contact: {
      name: 'Kontakt',
      title: 'DOME kontaktieren | Gespräch vereinbaren oder Nachricht senden',
      description:
        'Vereinbaren Sie ein Gespräch von 15 oder 30 Minuten oder schreiben Sie uns zu Ihrem Projekt. Wir antworten innerhalb von zwei Werktagen, auf Englisch oder Italienisch.',
      ogDescription: 'Gespräch vereinbaren oder Nachricht senden. Wir antworten innerhalb von zwei Werktagen.',
      imageAlt: 'DOME kontaktieren',
    },
    caseStudies: {
      name: 'Fallstudien',
      title: 'Fallstudien | DOME',
      description:
        'Anonymisierte Berichte über Projekte in Enterprise UX und KI-Automatisierung, aus Handelseinkauf, Handelsfinanzierung, Lebensmittelketten, Compliance und digitalen Vermögenswerten.',
      ogDescription:
        'Was wir gebaut haben und was sich dadurch verändert hat. Kundenangaben sind durchgehend anonymisiert.',
      imageAlt: 'Fallstudien von DOME',
    },
    privacy: {
      name: 'Datenschutzerklärung',
      title: 'Datenschutzerklärung | DOME',
      description:
        'Wie DOME personenbezogene Daten von Websitebesuchern und registrierten Nutzern der Tools erhebt, verwendet und schützt, und wie Sie Ihre Rechte nach der DSGVO wahrnehmen.',
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
        'Jedes Cookie und jeder Eintrag im Browserspeicher von domelayer.com und den DOME-Tools: was gespeichert wird, wie lange, und warum keiner davon eine Einwilligung braucht.',
      imageAlt: 'DOME',
    },
  },
  media: {
    homeHeroStill: 'Zwei Kollegen prüfen einen Freigabe-Workflow auf einem Laptop',
    aiProcessAutomationHero:
      'Arbeitsplatz in der Buchhaltung mit einem Bildschirm, der ein Freigabe-Flussdiagramm zeigt, und einem Stapel Rechnungen',
    enterpriseUxHero: 'Designerin klebt einen blauen Haftzettel an eine Wand voller Wireframes',
    capabilitiesHero: 'Gang in einem Serverraum, in kühlem Weiß und Blau beleuchtet',
    aboutHero: 'Dächer von Florenz und die Kuppel des Doms, vom Fenster eines Ateliers aus gesehen',
    caseStudiesHero: 'Prozesslandkarten und ein Tablet mit einem Dashboard auf einem hellen Holztisch',
    contactHero: 'Ruhiger Besprechungsraum mit rundem Tisch an einem Fenster mit Blick auf Florenz',
    caseProcurementWorkflowRedesign:
      'Einkaufsspezialist arbeitet an zwei Bildschirmen mit einer Einkaufsanwendung',
    caseAiComplianceAssessments:
      'Analystin prüft eine markierte Vorschrift auf einem Tablet neben einem Ordner',
    caseMetalsTradingPlatform:
      'Lager mit gestapelten Aluminiumbarren und einem Tablet mit Kurscharts',
    caseFoodTraceabilityPlatform:
      'Hand scannt ein QR-Etikett auf einer Gemüsekiste in einem Verteilzentrum',
    caseTradingAppRedesign: 'Smartphone mit einer Trading-App und Kurscharts, dahinter eine Straße',
    caseAiProcurementPlatform:
      'Drei Kollegen vor einem Wandbildschirm mit einem Workflow-Diagramm',
    caseAiTrainingVideos:
      'Kleines Videostudio mit Kamera, Leuchte und einem Monitor mit einer Schulungsansicht',
    francescoProdomo: 'Francesco Prodomo',
    tabletMockup: 'Ein DOME-Tool auf einem Tablet',
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'KI-generiertes Bild',
  common: {
    sendMessage: 'Nachricht senden',
    relatedWork: 'Verwandte Projekte',
    anonymised: 'Kundenangaben sind anonymisiert.',
    viewAllCaseStudies: 'Alle Fallstudien ansehen',
    topics: [
      'KI-Prozessautomatisierung',
      'Enterprise UX und Produkt',
      'DOME-Tools',
      'Etwas anderes',
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'Beratung für KI und Produkt für regulierte Unternehmen',
        heading: 'Software, die Menschen nutzen. KI, die Sie prüfen können.',
        lead: 'Wir helfen regulierten Unternehmen, komplexe Abläufe neu zu gestalten und mit KI zu automatisieren, die kontrolliert, messbar und erklärbar bleibt.',
        primary: 'Erstgespräch vereinbaren',
        secondary: 'Unsere Projekte',
        scrollCue: 'Scrollen',
      },
      sectors: {
        eyebrow: 'Branchen, in denen wir arbeiten',
        items: [
          'Einkauf im Handel',
          'Rohstoff- und Handelsfinanzierung',
          'Lebensmittel- und Agrarlieferketten',
          'Compliance und Regulierung',
          'Digitale Vermögenswerte',
        ],
      },
      services: {
        eyebrow: 'Was wir tun',
        heading: 'Drei Wege, wie wir mit Ihnen arbeiten',
        items: [
          {
            title: 'KI-Prozessautomatisierung',
            body: 'Wir erfassen und analysieren einen Prozess, automatisieren die Teile mit klaren Regeln und übergeben den Rest Ihrem Team, mit Entscheidungsvorlage und vollständigem Audit-Trail.',
            cta: 'Mehr zur Prozessautomatisierung',
          },
          {
            title: 'Enterprise UX und Produkt',
            body: 'Wir entwirren komplexe interne Tools und Kundenplattformen: Nutzerforschung, Service Design, Oberflächen, Dashboards und Datenvisualisierung, und ein Designsystem, mit dem Ihre Entwickler arbeiten können.',
            cta: 'Mehr zu UX und Produkt',
          },
          {
            title: 'DOME-Tools',
            body: 'Funktionierende Tools, die wir selbst entwickeln und betreiben: Dokumentenextraktion, Prüfung durch mehrere Modelle, Dashboards mit Governance und eine Audit-Schicht, die alles verbindet.',
            cta: 'Was wir bauen',
          },
        ],
      },
      howWeWork: {
        eyebrow: 'Wie wir arbeiten',
        heading: 'Eine Methode, vom ersten Workshop bis zum Betrieb',
        lead: 'Governance gehört zu jeder Phase, damit vor dem Go-live nichts nachgerüstet werden muss.',
        phaseLabel: 'Phase',
        phases: [
          { title: 'Discover', body: 'Den Ablauf erfassen, die berührten Systeme und wo Regulierung greift.' },
          { title: 'Orchestrate', body: 'Architektur, Datenflüsse und die Kontrollen darum herum entwerfen.' },
          { title: 'Model', body: 'KI-Komponenten innerhalb vereinbarter Grenzen für Genauigkeit und Risiko konfigurieren.' },
          { title: 'Execute', body: 'Einführen, integrieren und überwachen, mit jeder automatisierten Entscheidung protokolliert.' },
        ],
        governance: 'Governance in jeder Phase eingebaut',
      },
      selectedWork: { eyebrow: 'Ausgewählte Projekte', heading: 'Aktuelle Projekte' },
      capabilities: {
        eyebrow: 'DOME-Tools',
        heading: 'Tools, die wir entwickeln und betreiben',
        lead: 'Unsere eigenen Tools decken den Weg von der Prozessaufnahme bis zur geprüften Ausführung ab. Interessenten können sie ausprobieren, bevor ein Projekt beginnt, und wo Daten Ihr Netzwerk nicht verlassen dürfen, laufen drei davon mit einem lokalen Open-Weight-Modell statt über eine Cloud-API.',
        tools: [
          'Process Analyzer',
          'LLM Council',
          'Document Intelligence',
          'Data Intelligence',
          'Governance Dashboard',
          'Agent Flow (in Einführung)',
        ],
        cta: 'DOME-Tools ansehen',
      },
      operatingModel: {
        eyebrow: 'Über DOME',
        heading: 'Eine verantwortliche Leitung. Die richtigen Fachleute für die Aufgabe.',
        lead: 'Wir stellen jedes Projektteam um das Problem herum zusammen, nicht um eine feste Kopfzahl. Sie arbeiten durchgehend mit erfahrenen Leuten, und das Team wächst oder schrumpft mit dem Umfang.',
        cta: 'Wie wir aufgestellt sind',
        items: [
          { title: 'Projektleitung', body: 'Eine erfahrene Leitung verantwortet das Projekt vom ersten Gespräch bis zur Übergabe und steht für das Ergebnis ein.' },
          { title: 'Netzwerk von Fachleuten', body: 'UX-Forscher, Designer, Engineers sowie Fachleute für Daten und Compliance kommen hinzu, wenn die Arbeit sie braucht.' },
          { title: 'Umsetzungspartner', body: 'Größere Programme setzen wir mit einer etablierten Partnerfirma um, damit das Team mit dem Umfang wachsen kann.' },
        ],
      },
      closing: {
        heading: 'Erzählen Sie uns, welcher Prozess Ihr Team ausbremst.',
        body: 'Ein Gespräch von 30 Minuten genügt, um zu klären, ob wir helfen können.',
        primary: 'Erstgespräch vereinbaren',
      },
    },

    services: {
      breadcrumb: 'Leistungen',
      aiProcessAutomation: {
        hero: {
          eyebrow: 'KI-Prozessautomatisierung',
          heading: 'Routine automatisieren. Entscheidungen bei den Menschen lassen.',
          lead: 'Wir erfassen und analysieren Ihre Abläufe in Finanzen, Einkauf und Compliance und automatisieren dann die klar definierten Schritte, mit Regeln, die Sie lesen können, und einem Nachweis jeder Entscheidung.',
          primary: 'Automatisierungs-Review vereinbaren',
          secondary: 'So funktioniert es',
        },
        intro: {
          eyebrow: 'Wo es hilft',
          heading: 'Prozesse, die reif für die Automatisierung sind',
          items: [
            { title: 'Hohes Volumen, klare Regeln', body: 'Rechnungseingang, Prüfungen bei der Lieferantenaufnahme, Dokumentenklassifizierung: Arbeit, die einer Richtlinie folgt und trotzdem Zeit von Fachleuten kostet.' },
            { title: 'Entscheidungen, die nachweisbar sein müssen', body: 'Freigaben und Ausnahmen, nach denen Prüfer und Aufsichtsbehörden fragen werden, manchmal Monate später.' },
            { title: 'Daten, die in Dokumenten feststecken', body: 'Verträge, Zertifikate und Berichte, die heute jemand von Hand in ein anderes System abtippt.' },
          ],
        },
        band: {
          eyebrow: 'Eingebaute Governance',
          heading: 'Jede automatisierte Entscheidung lässt sich erklären.',
          lead: 'Wenn jemand fragt, warum eine Rechnung freigegeben oder ein Dokument markiert wurde, ist die Antwort bereits dokumentiert.',
          points: [
            'Ein Konfidenzwert für jedes extrahierte Feld',
            'Richtlinienregeln außerhalb des Modells, lesbar für Ihr Team',
            'Eine namentlich benannte Person gibt frei, wo die Richtlinie es verlangt',
            'Ein Audit-Trail, den Sie für jeden Durchlauf exportieren können',
            'Läuft mit einem lokalen Open-Weight-Modell, wenn Daten Ihr Netzwerk nicht verlassen dürfen',
          ],
        },
        steps: {
          eyebrow: 'Wie wir es umsetzen',
          heading: 'Vier Schritte, mit Ihnen abgestimmt, bevor etwas läuft',
          items: [
            { title: 'Den Prozess erfassen und analysieren', body: 'Wir gehen den Ablauf mit den Menschen durch, die ihn ausführen, analysieren Volumen, Kosten und Risiken und markieren, welche Schritte Regeln folgen, welche Urteilsvermögen brauchen und wo sich Automatisierung lohnt.' },
            { title: 'Die Kontrollen entwerfen', body: 'Regeln, Konfidenzschwellen und Freigabepunkte stimmen wir mit Ihnen ab, bevor auch nur ein Schritt automatisiert wird.' },
            { title: 'Bauen und integrieren', body: 'Wir binden die Systeme an, die Sie bereits nutzen, und halten die Regeln außerhalb des Modells, damit Ihr Team sie lesen und ändern kann.' },
            { title: 'Betreiben und messen', body: 'Jede Entscheidung wird protokolliert. Wir prüfen die Genauigkeit gemeinsam mit Ihnen und passen Schwellen an, wenn sich die Volumen ändern.' },
          ],
        },
        related: 'Automatisierung in der Praxis',
        closing: {
          heading: 'Beginnen Sie mit einem Prozess.',
          body: 'In einem Automatisierungs-Review erfassen wir mit Ihrem Team einen Ablauf, analysieren den Business Case und sagen Ihnen, was sich zu automatisieren lohnt und was nicht.',
          primary: 'Automatisierungs-Review vereinbaren',
        },
      },
      enterpriseUx: {
        hero: {
          eyebrow: 'Enterprise UX und Produkt',
          heading: 'Interne Tools, mit denen Ihre Teams gern arbeiten.',
          lead: 'Wir gestalten komplexe Unternehmensplattformen neu, von Einkaufsprozessen und Handelsoberflächen bis zu Dashboards und Datenvisualisierung, rund um die Menschen, die täglich damit arbeiten.',
          primary: 'UX-Review vereinbaren',
          secondary: 'So arbeiten wir',
        },
        intro: {
          eyebrow: 'Wann es hilft',
          heading: 'Anzeichen, dass ein System gegen seine Nutzer arbeitet',
          items: [
            { title: 'Geringe Nutzung', body: 'Menschen umgehen das System mit Tabellen und E-Mails, weil das Tool ihnen bei der Arbeit im Weg steht.' },
            { title: 'Die Einarbeitung endet nie', body: 'Jede neue Kollegin, jeder neue Kollege braucht wochenlang Unterstützung, und beim Helpdesk landen immer wieder dieselben Fragen.' },
            { title: 'Jede Änderung ist teuer', body: 'Jede neue Anforderung wird zu einer weiteren Sonderanfertigung, und die Oberfläche wird mit jedem Release schwerer zu pflegen.' },
          ],
        },
        deliver: {
          eyebrow: 'Was wir liefern',
          heading: 'Von der Forschung bis zum Designsystem, mit dem Ihre Entwickler arbeiten können',
          items: [
            { title: 'Nutzerforschung und Service Design', body: 'Interviews, Begleitung bei der Arbeit und Journey Maps, die zeigen, wo Zeit und Vertrauen verloren gehen.' },
            { title: 'Oberflächen, Dashboards und Datenvisualisierung', body: 'Ansichten und Dashboards für das tatsächliche Volumen und die Dichte der Arbeit in Unternehmen, mit Diagrammen, die die Zahlen nach vorn stellen, auf denen Entscheidungen beruhen, getestet mit den Menschen, die sie nutzen.' },
            { title: 'Designsysteme', body: 'Eine Komponentenbibliothek und Richtlinien, mit denen Ihre Entwickler arbeiten können, damit die Einheitlichkeit auch das nächste Release übersteht.' },
            { title: 'Einführung und Nutzung', body: 'Wir begleiten Entwicklung und Einführung, mit Schulungsmaterial und Messungen, die zeigen, ob das neue Tool genutzt wird.' },
          ],
        },
        band: {
          eyebrow: 'Für regulierte Arbeit gemacht',
          heading: 'Gestaltet für Entscheidungen, für die Menschen einstehen.',
          lead: 'Tools in Finanzen, Einkauf und Compliance tragen mehr als Aufgaben. Sie tragen Freigaben, Nachweise und Verantwortung, und die Oberfläche muss das deutlich machen.',
          points: [
            'Barrierefrei als Standard, nach WCAG 2.1 AA',
            'Freigaben und ihre Historie sichtbar, wo entschieden wird',
            'Rollenbasierte Ansichten für Anfragende, Freigebende und Prüfer',
            'Ein Designsystem, damit sich jede Ansicht gleich verhält',
          ],
        },
        steps: {
          eyebrow: 'Wie wir es umsetzen',
          heading: 'Vom ersten Interview bis zur Einführung',
          items: [
            { title: 'Beobachten', body: 'Wir begleiten die Menschen, die das System nutzen, und erfassen, wo Zeit und Vertrauen verloren gehen.' },
            { title: 'Gestalten', body: 'Wir entwerfen Abläufe und Ansichten gemeinsam mit Ihrem Team, einen Ablauf nach dem anderen.' },
            { title: 'Validieren', body: 'Wir testen Prototypen mit echten Nutzern, bevor etwas in die Entwicklung geht.' },
            { title: 'Einführen', body: 'Wir unterstützen die Entwicklung, schreiben das Schulungsmaterial und messen die Nutzung nach dem Start.' },
          ],
        },
        related: 'UX- und Produktarbeit in der Praxis',
        closing: {
          heading: 'Beginnen Sie mit einem Ablauf.',
          body: 'In einem UX-Review beobachten wir mit Ihrem Team einen Ablauf und zeigen Ihnen, wo er Zeit verliert und was Sie zuerst angehen sollten.',
          primary: 'UX-Review vereinbaren',
        },
      },
    },
    dome: {
      hero: {
        eyebrow: 'Tools',
        heading: 'Funktionierende KI-Tools, von uns entwickelt und betrieben.',
        lead: 'DOME sind die Tools, die wir bauen, um zu zeigen, wie KI mit Governance in der Praxis aussieht. Fünf sind live, eines wird gerade eingeführt, und Sie können sie vor jedem Projekt ausprobieren.',
        primary: 'Geführte Demo vereinbaren',
        secondary: 'Bei den Tools anmelden',
      },
      blocks: {
        eyebrow: 'Die Bausteine',
        heading: 'Vier Tools, jedes für eine Phase der Methode',
        openTool: 'Tool öffnen',
        details: 'Details',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Beschreiben Sie einen Geschäftsprozess in Alltagssprache und erhalten Sie eine strukturierte Landkarte, die beteiligten Systeme, Governance-Lücken und Automatisierungschancen.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Legen Sie eine strategische Frage drei KI-Beratern vor. Sie urteilen unabhängig, hinterfragen sich gegenseitig und liefern ein Urteil, dessen gesamte Begründung dokumentiert ist.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Extrahiert strukturierte Felder aus Rechnungen, Verträgen und Berichten, mit einem Konfidenzwert pro Feld und 16 Governance-Prüfungen.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Laden Sie eine Tabelle hoch und erhalten Sie ein Dashboard mit Governance. Ein Modell klassifiziert die Daten; die Diagramme wählt eine Regel-Engine, nicht das Modell.' },
        ],
      },
      agentFlow: {
        eyebrow: 'Die Methode im Betrieb',
        badge: 'Private Demo',
        heading: 'Agent Flow: von der Rechnung zur Freigabe, jeder Schritt dokumentiert',
        lead: 'Agent Flow verbindet die Bausteine zu einem Workflow mit Governance, in dem eine namentlich benannte Person freigibt, wo die Richtlinie es verlangt.',
        cta: 'So funktioniert Agent Flow',
        steps: [
          { title: 'Eine Rechnung geht ein', body: 'Ein selbst gehosteter Workflow nimmt sie auf und startet einen Durchlauf mit Governance, der sie von Anfang bis Ende begleitet.' },
          { title: 'Ausgelesen und gegen die Richtlinie geprüft', body: 'Document Intelligence liest die Rechnung; eine Regel-Engine bestimmt den Freigabeweg nach Betrag, Kategorie, Lieferant und Bestellung.' },
          { title: 'Eine Vorlage des Council, dann entscheidet ein Mensch', body: 'Unklare oder hohe Rechnungen erhalten eine Entscheidungsvorlage aus mehreren Modellen, und eine namentlich benannte Person gibt frei.' },
          { title: 'Ein Nachweis, den Sie rekonstruieren können', body: 'Jeder Schritt landet als eine Zeitleiste im Governance Dashboard.' },
        ],
      },
      governance: {
        eyebrow: 'Die Governance-Schicht',
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
          { title: 'Betrieb auf Ihrer Infrastruktur möglich', body: 'Prozessanalyse sowie Dokumenten- und Datenanalyse laufen jeweils mit einem lokalen Open-Weight-Modell über Ollama, als Konfigurationsänderung statt Neuentwicklung. Nichts muss Ihr Netzwerk verlassen.' },
          { title: 'Nicht an einen KI-Anbieter gebunden', body: 'Claude, Azure OpenAI oder ein lokales Modell, gewählt je Einsatz. Modelle lassen sich wechseln, ohne den Workflow oder die Kontrollen darum herum neu zu entwerfen.' },
          { title: 'Protokolliert als Prinzip', body: 'Jedes Tool hält fest, was es getan hat, wie sicher es war und wer das Ergebnis geprüft hat.' },
        ],
      },
      partner: {
        text: 'Größere Programme setzen wir gemeinsam mit unserem Partner Ionita Consulting um.',
        cta: 'Zur Partnerschaft',
      },
      closing: {
        heading: 'Sehen Sie die Tools an Ihrem eigenen Prozess arbeiten.',
        body: 'In einer geführten Demo lassen wir Ihr Beispiel durch die Tools laufen und besprechen, was eine Einführung mit Governance bedeuten würde.',
        primary: 'Geführte Demo vereinbaren',
      },
    },
    caseStudies: {
      hero: {
        eyebrow: 'Fallstudien',
        heading: 'Was wir gebaut haben, und was sich verändert hat.',
        lead: 'Anonymisierte Berichte über die Arbeit: das Problem, wie der Kunde es beschrieben hat, was wir getan haben, und die Ergebnisse, die das Projekt tatsächlich erzielt hat.',
        primary: 'Über Ihr Projekt sprechen',
        secondary: 'Was wir bauen',
      },
      groups: [
        { eyebrow: 'KI-Prozessautomatisierung', heading: 'Arbeit, die einer Richtlinie folgt' },
        { eyebrow: 'Enterprise UX und Produkt', heading: 'Plattformen, die Menschen täglich nutzen müssen' },
        { eyebrow: 'DOME-Tools', heading: 'Die Methode durchgängig im Einsatz' },
      ],
      note: 'Kundenangaben sind durchgehend anonymisiert: Wir nennen die Branche und die Funktion, nie die Organisation. Wir führen nur Ergebnisse an, die das Projekt tatsächlich erzielt hat.',
      closing: {
        heading: 'Erkennen Sie eines dieser Probleme wieder?',
        body: 'Sagen Sie uns, welches, und wir sagen Ihnen, wie wir es angehen würden.',
        primary: 'Erstgespräch vereinbaren',
      },
    },
    caseStudy: {
      back: 'Fallstudien',
      challenge: 'Die Ausgangslage',
      whatWeDid: 'Was wir getan haben',
      outcomes: 'Ergebnisse',
      client: 'Kunde',
      role: 'Unsere Rolle',
      capabilities: 'Kompetenzen',
      cta: 'Über ein ähnliches Projekt sprechen',
      readNext: 'Weiterlesen',
      notFound: 'Fallstudie nicht gefunden',
      closing: {
        heading: 'Erkennen Sie dieses Problem wieder?',
        body: 'Sagen Sie uns, wo Ihr Prozess stockt, und wir sagen Ihnen, wie wir es angehen würden.',
        primary: 'Erstgespräch vereinbaren',
      },
    },
    about: {
      hero: {
        eyebrow: 'Über DOME',
        heading: 'Eine Beratung für KI und Produkt für regulierte Unternehmen.',
        lead: 'Wir helfen regulierten Unternehmen, Software zu gestalten, die Menschen nutzen, und Arbeit so zu automatisieren, dass Prüfer sie nachvollziehen können.',
        primary: 'Sprechen Sie mit uns',
        secondary: 'Unsere Projekte',
      },
      who: {
        eyebrow: 'Wer wir sind',
        heading: 'Komplexe Unternehmensarbeit, einfacher zu bedienen und sicherer zu automatisieren.',
        paragraphs: [
          'DOME arbeitet mit Teams aus Einkauf, Finanzen, Compliance und Lieferkette in regulierten Branchen. Wir verbinden Enterprise UX und KI-Prozessautomatisierung, damit die Systeme, die Menschen täglich nutzen, klar zu bedienen und klar zu prüfen sind.',
          'Wir entwickeln und betreiben auch eigene KI-Tools mit Governance. Unser Rat zur Automatisierung stammt aus Systemen, die wir selbst betreiben, nicht aus Folien.',
        ],
      },
      facts: [
        { figure: '3', label: 'Leistungsbereiche, von der UX-Forschung bis zur geprüften Automatisierung' },
        { figure: '6', label: 'KI-Tools, die wir selbst entwickeln und betreiben' },
        { figure: '3', label: 'Modellanbieter, einschließlich Open-Weight-Modellen auf Ihrer eigenen Infrastruktur' },
        { figure: '10', label: 'Jahre Zusammenarbeit mit unserer Partnerfirma' },
      ],
      setup: {
        eyebrow: 'Wie wir aufgestellt sind',
        heading: 'Ein Team, das sich um jedes Projekt herum bildet',
        lead: 'Wir halten keine Bank von Beratern vor, die auf Arbeit warten. Jedes Projekt bekommt die Fachleute, die sein Problem verlangt, unter einer verantwortlichen Leitung.',
        items: [
          { title: 'Projektleitung', body: 'Eine erfahrene Leitung verantwortet jedes Projekt vom ersten Gespräch bis zur Übergabe. Sie haben eine Ansprechperson und eine Person, die für das Ergebnis einsteht.' },
          { title: 'Netzwerk von Fachleuten', body: 'Aus unserem Netzwerk freier Beraterinnen und Berater holen wir UX-Forscher, Interface-Designer, Engineers, Datenspezialisten und Compliance-Fachleute hinzu, wenn die Arbeit sie braucht.' },
          { title: 'Umsetzungspartner', body: 'Größere Programme setzen wir mit Ionita Consulting um. So können wir längere oder breitere Projekte besetzen, ohne unsere Arbeitsweise zu ändern.' },
        ],
      },
      expect: {
        eyebrow: 'Wie wir zusammenarbeiten',
        heading: 'Was Sie von uns erwarten können',
        items: [
          { title: 'Kleine, erfahrene Teams', body: 'Die Menschen, die Sie zu Beginn kennenlernen, sind die Menschen, die die Arbeit machen.' },
          { title: 'Governance von Anfang an', body: 'Kontrollen und Prüfanforderungen bestimmen das Design ab dem ersten Workshop, nicht erst nach dem Go-live.' },
          { title: 'Erst der Nachweis, dann die Zusage', body: 'Sie sehen funktionierende Tools und bisherige Ergebnisse, bevor Sie sich auf etwas festlegen.' },
        ],
      },
      partner: {
        eyebrow: 'Unser Umsetzungspartner',
        heading: 'Ionita Consulting',
        body: 'Größere Programme setzen wir gemeinsam mit Ionita Consulting in Utrecht um, mit denen wir seit zehn Jahren zusammenarbeiten. Gemeinsam besetzen wir Projekte, die mehr Fachleute oder einen längeren Atem brauchen.',
      },
      leadership: {
        eyebrow: 'Leitung',
        heading: 'Wer die Arbeit leitet',
        name: 'Francesco Prodomo',
        role: 'Gründer und Projektleiter',
        bio: 'Zehn Jahre in Produktdesign für Unternehmen und Einkaufssystemen, von der Nutzerforschung bis zur Umsetzung.',
        linkedin: 'LinkedIn-Profil',
      },
      where: {
        eyebrow: 'Wo wir arbeiten',
        heading: 'Mit Sitz in Florenz, tätig in ganz Europa',
        lead: 'Wir arbeiten mit Kunden auf Englisch und Italienisch, vor Ort oder remote.',
        cta: 'Unsere Fallstudien',
      },
      closing: {
        heading: 'Erzählen Sie uns, welcher Prozess Ihr Team ausbremst.',
        body: 'Ein Gespräch von 30 Minuten genügt, um zu klären, ob wir helfen können.',
        primary: 'Erstgespräch vereinbaren',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Kontakt',
        heading: 'Erzählen Sie uns von Ihrem Prozess.',
        lead: 'Vereinbaren Sie ein Gespräch von 30 Minuten oder schreiben Sie uns. Wir antworten innerhalb von zwei Werktagen.',
        primary: 'Gespräch vereinbaren',
        secondary: 'Unsere Projekte',
      },
      book: { heading: 'Gespräch vereinbaren', lead: 'Wählen Sie einen Termin, der Ihnen passt, und ein Thema, damit wir uns vorbereiten können.' },
      calendar: {
        topicLegend: 'Worüber möchten Sie sprechen?',
        notLoaded: 'Der Kalender ist noch nicht geladen. Er öffnet sich hier, sobald Sie eine Dauer wählen.',
        show30: 'Freie Termine anzeigen (30 Min.)',
        show15: 'Nur 15 Minuten',
        notice: 'Der Kalender wird von Cal.com bereitgestellt und lädt erst, wenn Sie klicken.',
        noticeEnd: 'Datenschutzerklärung gilt dann. Vorher wird nichts an Cal.com übertragen.',
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
      whatItDoes: 'Was es leistet',
      howItWorks: 'So funktioniert es',
      method: 'DOME-Methode',
      processAnalyzer: {
        phase: 'Discover',
        lead: 'Wandeln Sie die Beschreibung eines Geschäftsprozesses in Alltagssprache in eine strukturierte Prozesslandkarte um, mit Governance-Analyse und Bewertung des Automatisierungspotenzials.',
        open: 'Process Analyzer öffnen',
        whatItDoes:
          'Process Analyzer verwandelt unstrukturierte Beschreibungen von Geschäftsprozessen in strukturierte, visuelle Ergebnisse, mit denen Betriebsleitungen und Prozessverantwortliche sofort arbeiten können. Das Tool zeigt, welche Systeme an jedem Schritt beteiligt sind, schätzt die Bearbeitungszeit und markiert, wo Governance-Kontrollen fehlen oder nicht ausreichen. Es bewertet außerdem, welche Teile des Prozesses für eine KI-Automatisierung infrage kommen, mit einem klaren Hinweis darauf, welche Aufsicht nötig ist, bevor etwas automatisiert wird.',
        howItWorks: {
          heading: 'Drei Schritte von der Beschreibung zur Landkarte.',
          steps: [
            { title: 'Den Prozess beschreiben', body: 'Beschreiben Sie einen beliebigen Geschäftsprozess in Alltagssprache: einen Einkaufsablauf, eine Freigabekette, ein Onboarding. Vorlagen oder strukturierte Eingaben sind nicht nötig.' },
            { title: 'Eine strukturierte Landkarte erhalten', body: 'Das Tool erzeugt ein visuelles Flussdiagramm (Mermaid.js), benennt die beteiligten Systeme, schätzt die Zeit je Stufe und zeigt, wo Governance-Risiken liegen.' },
            { title: 'Automatisierungschancen verstehen', body: 'Jeder Schritt wird auf sein Potenzial für KI-Automatisierung bewertet, mit einem Konfidenzwert und einer klaren Erklärung, welche Governance-Maßnahmen vor einem Einsatz nötig wären.' },
          ],
        },
        method: {
          phase: 'Discover',
          body: 'Die Phase Discover erfasst, was tatsächlich vorhanden ist, bevor eine KI-Architektur entworfen wird. Process Analyzer setzt diese Phase praktisch um: Das Tool baut die Prozessübersicht auf, legt Lücken in Regulierung und Governance offen und schafft die strukturierte Grundlage, die alle folgenden DOME-Phasen brauchen. Ein Einsatz lässt sich erst entwerfen, wenn die Prozesslandschaft verstanden ist.',
        },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        lead: 'Legen Sie eine strategische Frage einem Gremium aus drei KI-Beratern vor. Sie beraten unabhängig, befragen sich gegenseitig und liefern ein begründetes Urteil mit vollständigem Audit-Trail.',
        open: 'LLM Council öffnen',
        whatItDoes:
          'LLM Council strukturiert KI-gestützte Beratungen zu Entscheidungen mit großer Tragweite. Statt einer einzelnen Modellantwort beruft das Tool ein Gremium aus drei Beratern ein, die unabhängig urteilen, die Positionen der anderen infrage stellen und Meinungsverschiedenheiten in einer strukturierten Gegenbefragung klären. Das Ergebnis ist nicht nur eine Antwort, sondern eine prüfbare Beratung. Jeder Denkschritt, jeder Einwand und jeder Punkt der Einigkeit oder Abweichung wird protokolliert und steht für die Governance-Prüfung bereit. Entscheider erhalten ein Urteil, das sie hinterfragen können, statt es nur hinzunehmen.',
        howItWorks: {
          heading: 'Fragen, beraten, entscheiden.',
          steps: [
            { title: 'Eine strategische Frage stellen', body: 'Stellen Sie eine Frage mit großer Tragweite, etwa zu einem Markteintritt, einer Risikobewertung oder einer Abwägung in einer Richtlinie. Ein festes Format ist nicht nötig: Alltagssprache genügt.' },
            { title: 'Drei Berater beraten unabhängig', body: 'Ein Gremium aus drei KI-Beratern analysiert die Frage jeweils aus einer eigenen Perspektive. Sie urteilen zuerst unabhängig und befragen dann die Positionen der anderen, sodass Meinungsverschiedenheiten sichtbar werden, statt unterzugehen.' },
            { title: 'Ein begründetes Urteil mit vollständigem Audit-Trail', body: 'Der Council liefert ein zusammengefasstes Urteil, das die Bereiche der Einigkeit zeigt und abweichende Ansichten dokumentiert. Jeder Denkschritt wird protokolliert: Die gesamte Beratung steht für Prüfung und Freigabe durch die Governance bereit.' },
          ],
        },
        method: {
          phase: 'Orchestrate',
          body: 'Die Phase Orchestrate stellt sicher, dass folgenreiche Entscheidungen nicht einer einzelnen Modellausgabe überlassen werden. LLM Council setzt dieses Prinzip praktisch um: Das Tool erzwingt strukturierten Widerspruch, verlangt unabhängige Begründungen, bevor ein Konsens gesucht wird, und erzeugt einen Audit-Trail, der Governance-Anforderungen erfüllt. Wo andere DOME-Phasen begrenzen, was KI tun darf, begrenzt Orchestrate, wie KI zu Schlüssen kommt, und macht so die Begründung selbst rechenschaftspflichtig.',
        },
      },
      documentIntelligence: {
        phase: 'Model',
        lead: 'Extrahieren Sie strukturierte Daten aus jedem Dokument: Rechnungen, Laborberichte, Versorgerrechnungen, Verträge. Mit Governance-Prüfung und vollständigem Audit-Trail.',
        open: 'Document Intelligence öffnen',
        whatItDoes:
          'Document Intelligence verwandelt unstrukturierte Quelldokumente in strukturierte, geprüfte Daten, ohne manuelle Erfassung oder eigene Vorlagen. Das Tool erkennt Dokumenttyp und Branche automatisch, extrahiert jedes relevante Feld mit einem Konfidenzwert und wendet eine Engine mit Governance-Regeln an, die auf Auffälligkeiten, fehlende Pflichtfelder, abgelaufene Daten, hohe Beträge, mögliche Offenlegung personenbezogener Daten und mehr prüft. Jede Extraktion wird in einer durchsuchbaren Prüfhistorie gespeichert. Das Ergebnis ist ein exportierbarer Datensatz mit Governance, bereit für die nachgelagerten Systeme.',
        howItWorks: {
          heading: 'Hochladen, extrahieren, prüfen.',
          steps: [
            { title: 'Ein Dokument hochladen oder fotografieren', body: 'Stellen Sie eine PDF- oder Bilddatei bereit oder erfassen Sie ein Dokument direkt mit Ihrer Kamera. Das System verarbeitet Rechnungen, Laborberichte, Versorgerrechnungen, Verträge, Kontoauszüge und mehr. Vorlagen oder Konfiguration sind nicht nötig.' },
            { title: 'Extraktion und Governance-Prüfung', body: 'Felder werden mit Konfidenzwerten extrahiert, Dokumenttyp und Branche automatisch erkannt, und 16 Governance-Regeln markieren Auffälligkeiten, fehlende Daten, abgelaufene Daten, hohe Beträge und mögliche Compliance-Probleme.' },
            { title: 'Prüfen, speichern und exportieren', body: 'Sehen Sie jedes extrahierte Feld mit Abschnitt, Typ und Konfidenzwert. Bewerten Sie die Governance-Hinweise nach Schweregrad. Exportieren Sie als CSV zur Weiterverarbeitung oder speichern Sie das Ergebnis in Ihrer Historie für Prüfung und Rückverfolgbarkeit.' },
          ],
        },
        method: {
          phase: 'Model',
          body: 'In der Phase Model führen KI-Entscheidungen mit Governance zu betrieblichen Ergebnissen. Document Intelligence ist der Einstieg in diese Phase für Organisationen, die in großem Umfang strukturierte Daten aus unstrukturierten Dokumenten brauchen. Statt der reinen Modellextraktion zu vertrauen, wird jedes Ergebnis gegen eine deterministische Engine mit Governance-Regeln geprüft, bevor es nachgelagerte Systeme erreicht. So ist, was in Ihre Abläufe gelangt, prüfbar, einheitlich und belastbar. Hier wird im DOME-Zyklus aus der Prozessaufnahme eine Ausführung mit Governance.',
        },
      },
      dataIntelligence: {
        phase: 'Orchestrate & Model',
        lead: 'Laden Sie eine Tabelle hoch und erhalten Sie ein Analyse-Dashboard mit Governance, automatischer Diagrammauswahl und einem Bereich für Fragen in Alltagssprache.',
        open: 'Data Intelligence öffnen',
        whatItDoes:
          'Data Intelligence verwandelt strukturierte Tabellendaten in ein Analyse-Dashboard mit Governance, ohne manuelle Konfiguration. Das System klassifiziert jede Spalte nach Typ (Datum, Kategorie, Kennzahl) und wendet dann eine Regel-Engine an, die festlegt, welche Diagrammtypen passen. Die Diagrammauswahl ist deterministisch und prüfbar: Dieselben Daten führen immer zu denselben Entscheidungen, und jede angewandte Governance-Regel wird protokolliert. Über einen Bereich für Fragen in Alltagssprache können Analysten die Daten befragen, sobald das Dashboard erstellt ist.',
        howItWorks: {
          heading: 'Hochladen, klassifizieren, analysieren.',
          steps: [
            { title: 'Eine Tabelle hochladen', body: 'Stellen Sie eine CSV-, XLSX- oder XLS-Datei bereit. Das Tool erhält Spaltennamen, Datentypen, Beispielwerte und Summen. Die Rohzeilen werden sofort verworfen und nie gespeichert.' },
            { title: 'Ein Dashboard mit Governance', body: 'Ein Sprachmodell klassifiziert jede Spalte. Danach wählt eine deterministische Regel-Engine, nicht das Modell, den passenden Diagrammtyp für jede Beziehung in den Daten. Das Modell liefert Hinweise; die Governance entscheidet.' },
            { title: 'Fragen in Alltagssprache', body: 'Sobald das Dashboard erstellt ist, stellen Sie Fragen zu den Daten in Alltagssprache. Der Fragenbereich arbeitet mit der Zusammenfassung der klassifizierten Spalten, nicht mit den Rohdaten.' },
          ],
        },
        method: {
          phase: 'Orchestrate & Model',
          body: 'Die Phasen Orchestrate und Model legen fest, wie KI-Komponenten in einem Governance-Rahmen koordiniert und konfiguriert werden. Data Intelligence zeigt das in der Praxis: Das Sprachmodell bleibt auf die Klassifizierung von Spalten beschränkt (eine abgegrenzte Aufgabe mit geringem Risiko), während eine deterministische Regel-Engine die folgenreichen Entscheidungen über die Darstellung der Daten trifft. Diese Trennung der Verantwortlichkeiten ist das Architekturmuster, das DOME bei jedem KI-Einsatz mit Governance anwendet.',
        },
      },
      governanceDashboard: {
        phase: 'Govern',
        lead: 'Die Ebene für Aufsicht und Compliance über alle KI-Tools von DOME. Eine geschützte Ansicht jedes Governance-Ereignisses, jedes Konfidenzwerts und jeder menschlichen Entscheidung, mit PDF-Export für Prüfungen und Aufsichtsbehörden.',
        open: 'Governance Dashboard öffnen',
        whatItDoes:
          'Das Governance Dashboard ist die übergreifende Aufsichtsebene der gesamten DOME-Plattform. Es führt die Governance-Ereignisse aller vier KI-Tools in einem durchsuchbaren Audit-Trail zusammen. Betriebsleitungen, Compliance-Beauftragte und Prüfer können jede KI-Entscheidung einsehen, die Verteilung der Konfidenzwerte prüfen, ausgelöste Regeln erkennen und menschliche Entscheidungen nachvollziehen, ohne die einzelnen Tools zu öffnen. PDF-Berichte entstehen auf Abruf, für jeden Zeitraum und jede Auswahl von Tools.',
        howItWorks: {
          heading: 'Von der Nutzung der Tools zum Compliance-Bericht.',
          steps: [
            { title: 'Die KI-Tools wie gewohnt nutzen', body: 'Nutzen Sie eines der vier DOME-Tools: Process Analyzer, LLM Council, Data Intelligence oder Document Intelligence. Jede Anfrage erzeugt automatisch ein Governance-Ereignis mit der Aktion, dem Konfidenzwert, den angewandten Regeln und der Empfehlung zur menschlichen Prüfung.' },
            { title: 'Den Audit-Trail prüfen', body: 'Das Ereignisprotokoll zeigt jedes Governance-Ereignis, das neueste zuerst. Filtern Sie nach Tool, Zeitraum, Art der Aktion, Konfidenzschwelle oder Status der menschlichen Prüfung. Ein Klick auf ein Ereignis öffnet den vollständigen Entscheidungsnachweis.' },
            { title: 'Für die Compliance exportieren', body: 'Erstellen Sie mit einem Klick einen PDF-Prüfbericht für jeden Zeitraum und jede Auswahl von Tools. Berichte enthalten eine Zusammenfassung, die Verteilung der Konfidenzwerte und eine vollständige Tabelle der Ereignisse mit Prüfentscheidungen, bereit für die interne Revision oder die Aufsichtsbehörde.' },
          ],
        },
        method: {
          phase: 'Govern',
          body: 'Die Ebene Govern zieht sich durch alle anderen DOME-Phasen. Während Discover Prozesse erfasst, Orchestrate Entscheidungen koordiniert und Model Daten extrahiert oder analysiert, hält Govern fest, was tatsächlich geschehen ist, und stellt sicher, dass es erklärt, geprüft und angefochten werden kann. Das Governance Dashboard macht diese Ebene greifbar: ein laufender, einsehbarer Nachweis, der KI-Aktivität in belastbare Belege verwandelt, die Grundlage für jeden Einsatz in einem regulierten Umfeld.',
        },
      },
      agentFlow: {
        phase: 'Execute',
        heading: 'Agent Flow mit Governance',
        lead: 'Ein selbst gehosteter n8n-Workflow, der einen echten Ablauf von der Rechnung bis zur Freigabe über die DOME-Tools hinweg ausführt (Extraktion, eine Regel-Engine für Richtlinien, ein Council aus mehreren Modellen und eine menschliche Freigabestufe) und einen vollständigen Audit-Trail erzeugt, den das Governance Dashboard rekonstruiert.',
        openQueue: 'Freigabe-Warteschlange öffnen',
        bookDemo: 'Private Demo vereinbaren',
        demoNote: 'Live gezeigt, an echten Rechnungen, in einer geführten Demo.',
        steps: [
          { title: 'Eine Rechnung geht ein', body: 'Ein Lieferant schickt eine Rechnung an das Postfach der Kreditorenbuchhaltung, oder sie wird über das Formular des Workflows hochgeladen. Ein selbst gehosteter n8n-Workflow nimmt sie auf und startet einen Durchlauf mit Governance, mit einer Workflow-ID, die sie von Anfang bis Ende begleitet.' },
          { title: 'Extrahieren, dann gegen die Richtlinie prüfen', body: 'Document Intelligence extrahiert die Felder und Konfidenzwerte; danach bestimmt eine datengesteuerte Regel-Engine den Freigabeweg nach Betragsstufe, Einkaufskategorie, Land und Umsatzsteuer, Lieferanten-Positivliste, Abgleich mit der Bestellung, Währung und Dublettenprüfung.' },
          { title: 'Vorlage des Council, dann eine menschliche Freigabe', body: 'Unklare oder hohe Rechnungen erhalten eine Entscheidungsvorlage von LLM Council aus mehreren Modellen. Eine namentlich benannte Person gibt auf einer Prüfseite im Erscheinungsbild des Unternehmens frei, oder Rechnungen mit geringem Risiko werden nach Richtlinie automatisch freigegeben. Jeder Schritt wird als eine rekonstruierbare Zeitleiste im Governance Dashboard festgehalten.' },
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
            { p: 'Soweit nach anwendbarem Recht zulässig, haften Francesco Prodomo und Dome nicht für indirekte, beiläufige, Folge- oder Strafschäden, die aus Ihrer Nutzung der Tools entstehen, einschließlich Verlusten, die darauf beruhen, dass Sie sich auf KI-generierte Ergebnisse verlassen haben.' },
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
