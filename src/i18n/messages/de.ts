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
      'DOME ist ein persönliches Projekt von Francesco Prodomo mit Sitz in Florenz: funktionierende KI-Tools, die zeigen, wie KI in regulierten Prozessen arbeiten und dabei kontrolliert, messbar und erklärbar bleiben kann. Jedes Tool hält seine Entscheidungen in einem gemeinsamen Audit-Trail fest.',
    llmsIntro:
      'DOME ist eine Reihe von KI-Tools, die eine einzelne Person, Francesco Prodomo, als Projekt zu kontrollierter KI entwickelt und betreibt. Jedes Tool deckt eine Phase einer Methode ab (discover, orchestrate, model, execute): Prozessanalyse, ein Rat aus mehreren KI-Modellen, Dokumenten- und Datenanalyse sowie Agent Flow, ein kontrollierter Workflow von der Rechnung bis zur Freigabe. Jedes Tool hält seine Entscheidungen in einem gemeinsamen Audit-Trail fest, sichtbar im Governance Dashboard, und eine namentlich benannte Person gibt frei, wo die Richtlinie es verlangt. Fünf Tools lassen sich nach der Anmeldung kostenlos ausprobieren; Agent Flow läuft als private Demo. Der Code ist auf GitHub öffentlich. Francescos Beratung finden Sie auf francescoprodomo.com.',
    llmsSections: { pages: 'Seiten', tools: 'Die Tools', legal: 'Rechtliches' },
    knowsAbout: ['KI-Governance', 'Kontrollierte KI-Workflows', 'Audit-Trails für KI', 'Freigabe durch einen Menschen', 'Document Intelligence', 'Prozessanalyse', 'KI-Prüfung mit mehreren Modellen', 'Designsysteme'],
  },
  nav: {
    homeLabel: 'DOME, Startseite',
    tools: 'Tools',
    agentFlow: 'Agent Flow',
    dome: 'DOME',
    about: 'Über DOME',
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
    tagline: 'Ein persönliches Projekt zu kontrollierter KI, von Francesco Prodomo.',
    navLabel: 'Fußzeile',
    project: 'Projekt',
    elsewhere: 'Außerdem',
    workWith: 'Mit Francesco arbeiten',
    github: 'Code auf GitHub',
    linkedin: 'Francesco auf LinkedIn',
    pec: 'PEC',
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
    heading: 'Nachricht schreiben',
    intro: 'Wählen Sie ein Thema, damit ich weiß, worum es geht.',
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'sie@beispiel.de',
    topicLabel: 'Thema',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Was möchten Sie mir mitteilen?',
    privacyNote: 'Ich verwende Ihre Angaben nur, um zu antworten. Mehr dazu in der',
    privacyLink: 'Datenschutzerklärung',
    send: 'Nachricht senden',
    sending: 'Wird gesendet',
    successTitle: 'Nachricht erhalten',
    successBody: 'Vielen Dank für Ihre Nachricht. Ich antworte innerhalb von zwei Werktagen.',
    sendAnother: 'Weitere Nachricht senden',
    rateLimited: 'Sie haben die maximale Anzahl an Nachrichten erreicht. Bitte versuchen Sie es in einer Minute erneut.',
    genericError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt.',
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
      title: 'DOME | Funktionierende KI-Tools, die Sie prüfen können',
      description:
        'Ein persönliches Projekt von Francesco Prodomo: funktionierende KI-Tools, die zeigen, wie KI in regulierten Prozessen kontrolliert und erklärbar bleibt.',
      ogDescription:
        'Sechs KI-Tools und ein Audit-Trail. Probieren Sie sie kostenlos aus, oder sehen Sie, wie eine Rechnung vom Eingang zu einer namentlich benannten Freigabe gelangt.',
      twitterDescription: 'Funktionierende KI-Tools, die Sie prüfen können. Kostenlos ausprobieren.',
      imageAlt: 'DOME: funktionierende KI-Tools, die Sie prüfen können',
    },
    dome: {
      name: 'Tools',
      title: 'Die Tools: kontrollierte KI zum Ausprobieren | DOME',
      description:
        'Sechs funktionierende Tools, von der Prozesserfassung bis zur nachvollziehbaren Ausführung: fünf offen nach Anmeldung, Agent Flow als private Demo.',
      ogDescription:
        'Prozessanalyse, Dokumenten- und Datenanalyse, ein Rat aus mehreren KI-Modellen, ein kontrollierter Agenten-Workflow und ein Governance-Dashboard.',
      imageAlt: 'Die DOME-Tools',
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
      name: 'Über DOME',
      title: 'Über DOME: ein persönliches Projekt zu kontrollierter KI | DOME',
      description:
        'Warum es DOME gibt und wer es baut: ein persönliches Projekt von Francesco Prodomo zu KI, die in regulierten Prozessen kontrolliert bleibt.',
      ogDescription:
        'Sechs Tools, vier Sprachen und ein Audit-Trail, gebaut von einer Person.',
      imageAlt: 'Über DOME',
    },
    contact: {
      name: 'Kontakt',
      title: 'Kontakt | DOME',
      description:
        'Feedback zu den Tools, Demo-Zugang zu Agent Flow oder eine Frage dazu, wie etwas funktioniert. Ich antworte innerhalb von zwei Werktagen.',
      ogDescription:
        'Schreiben Sie mir zu den Tools. Ich antworte innerhalb von zwei Werktagen.',
      imageAlt: 'Kontakt zu DOME',
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
    topics: ['Feedback', 'Demo-Zugang', 'Etwas anderes'],
    tryTool: 'Tool ausprobieren',
    watchRun: 'Ablauf ansehen',
    askDemo: 'Demo-Zugang anfragen',
    run: {
      badge: 'Private Demo',
      diagramLabel: 'Der Ablauf, der Reihe nach: Eingang, Auslesen, Richtlinienregeln, Empfehlung des Council, namentlich benannte Freigabe',
      stages: ['Eingang', 'Auslesen', 'Regeln', 'Council', 'Freigabe'],
      steps: [
        { title: 'Eine Rechnung geht ein', body: 'Ein selbst gehosteter Workflow nimmt sie auf und startet einen Durchlauf, der sie vom Eingang bis zur Freigabe begleitet.' },
        { title: 'Ausgelesen und gegen die Richtlinie geprüft', body: 'Document Intelligence liest die Rechnung aus; eine Regel-Engine bestimmt den Freigabeweg nach Betrag, Kategorie, Lieferant und Bestellung.' },
        { title: 'Erst eine Empfehlung, dann entscheidet ein Mensch', body: 'Unklare Rechnungen und hohe Beträge erhalten eine Entscheidungsvorlage aus mehreren KI-Modellen, dann gibt eine namentlich benannte Person frei.' },
        { title: 'Ein Nachweis, der sich rekonstruieren lässt', body: 'Jeder Schritt erscheint als eine Zeitleiste im Governance Dashboard.' },
      ],
    },
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'Kontrollierte KI in der Praxis',
        heading: 'Funktionierende KI-Tools, die Sie prüfen können.',
        lead: 'DOME zeigt mit funktionierenden Tools, wie KI in regulierten Prozessen laufen und dabei kontrolliert, messbar und erklärbar bleiben kann.',
        note: 'Kostenlos ausprobieren. Anmeldung per Magic Link, Google oder GitHub.',
        scrollCue: 'Scrollen',
      },
      method: {
        eyebrow: 'Die DOME-Methode',
        heading: 'Vier Phasen, ein Audit-Trail.',
        lead: 'Jedes Tool deckt eine Phase ab, vom Erfassen eines Prozesses bis zu seiner Ausführung. Governance gehört zu jeder Phase, deshalb landet jeder Durchlauf im selben Nachweis.',
        phaseLabel: 'Phase',
        phases: [
          { title: 'Discover', body: 'Beschreiben Sie einen Prozess in eigenen Worten und erhalten Sie eine Prozesslandkarte, die beteiligten Systeme und die Governance-Lücken.' },
          { title: 'Orchestrate', body: 'Legen Sie eine schwierige Frage drei Modellen vor, die sich gegenseitig prüfen, mit dokumentierter Begründung.' },
          { title: 'Model', body: 'Lesen Sie Felder aus Dokumenten aus und klassifizieren Sie Daten, mit einem Konfidenzwert für jedes Ergebnis.' },
          { title: 'Execute', body: 'Bringen Sie eine Rechnung vom Eingang bis zu einer namentlich benannten Freigabe, jeder Schritt protokolliert.' },
        ],
        governance: 'Governance Dashboard: ein Audit-Trail über alle Phasen',
        openDashboard: 'Dashboard öffnen',
      },
      tools: {
        eyebrow: 'Die Tools',
        heading: 'Funktionierende Tools, offen für alle, die sich anmelden.',
        lead: 'Die Tools decken den Weg von der Prozesserfassung bis zur nachvollziehbaren Ausführung ab. Fünf lassen sich ausprobieren; Agent Flow läuft als private Demo.',
        all: 'Alle Tools ansehen',
      },
      run: {
        eyebrow: 'Den Ablauf ansehen',
        heading: 'Eine Rechnung vom Posteingang bis zur Freigabe, lückenlos dokumentiert.',
        lead: 'Agent Flow verbindet die Tools zu einem kontrollierten Workflow. Jeder Durchlauf begleitet eine echte Rechnung vom Eingang bis zu der namentlich benannten Person, die sie freigibt.',
        cta: 'So funktioniert Agent Flow',
      },
      closing: {
        heading: 'Probieren Sie ein Tool aus, oder sehen Sie sich den Ablauf an.',
        body: 'Fünf Tools stehen allen offen, die sich anmelden. Agent Flow läuft als private Demo: Sehen Sie sich an, wie es funktioniert, oder fragen Sie Zugang an.',
      },
      hire: 'Sie möchten mit Francesco zusammenarbeiten? Seine Beratung finden Sie auf',
    },
    dome: {
      hero: {
        eyebrow: 'Die Tools',
        heading: 'Funktionierende KI-Tools für kontrollierte Automatisierung.',
        lead: 'DOME ist eine Reihe von Tools, die ich entwickle und betreibe, um zu zeigen, wie kontrollierte KI in der Praxis aussieht. Fünf sind live; das sechste, Agent Flow, läuft als private Demo.',
        primary: 'Anmelden und ausprobieren',
        secondary: 'Ablauf ansehen',
        note: 'Kostenlos. Anmeldung per Magic Link, Google oder GitHub; kein Passwort, das Sie sich merken müssen.',
      },
      blocks: {
        eyebrow: 'Die Bausteine',
        heading: 'Vier Tools, eines für jede Phase der Methode.',
        openTool: 'Tool öffnen',
        details: 'So funktioniert es',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Beschreiben Sie einen Geschäftsprozess in eigenen Worten und erhalten Sie eine strukturierte Prozesslandkarte, die beteiligten Systeme, Governance-Lücken und Ansatzpunkte für Automatisierung.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Legen Sie eine strategische Frage drei KI-Beratern vor. Sie urteilen zunächst unabhängig, prüfen dann gegenseitig ihre Positionen und liefern ein Urteil, dessen gesamte Begründung dokumentiert ist.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Liest strukturierte Felder aus Rechnungen, Verträgen und Berichten aus, mit einem Konfidenzwert pro Feld und 16 Governance-Prüfungen.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Laden Sie eine Tabelle hoch und erhalten Sie ein kontrolliertes Dashboard. Ein Modell klassifiziert die Daten; die Diagramme wählt eine Regel-Engine, nicht das Modell.' },
        ],
      },
      agentFlow: {
        eyebrow: 'Die Methode von Anfang bis Ende',
        heading: 'Agent Flow: von der Rechnung zur Freigabe, jeder Schritt dokumentiert.',
        lead: 'Agent Flow verbindet die Bausteine zu einem kontrollierten Workflow, in dem eine namentlich benannte Person freigibt, wo die Richtlinie es verlangt.',
        cta: 'So funktioniert Agent Flow',
      },
      governance: {
        eyebrow: 'Die Governance-Ebene',
        heading: 'Governance Dashboard',
        lead: 'Ein Audit-Trail über alle Tools: jedes Ereignis, jeder Konfidenzwert und jede menschliche Entscheidung an einem Ort, mit PDF-Berichten für die interne Revision.',
        openDashboard: 'Dashboard öffnen',
        details: 'So funktioniert es',
      },
      standards: {
        eyebrow: 'Wie die Tools gebaut sind',
        heading: 'Kontrolle von Anfang an, nicht nachträglich.',
        items: [
          { title: 'In der EU gehostet', body: 'Die Tools und ihre Daten laufen auf Infrastruktur in der Europäischen Union; Konten und gespeicherte Arbeit liegen in Frankfurt.' },
          { title: 'Lückenlos protokolliert', body: 'Jedes Tool hält fest, was es getan hat, wie sicher es war und wer das Ergebnis geprüft hat.' },
          { title: 'Mehr als ein KI-Anbieter', body: 'Claude von Anthropic übernimmt die KI-Arbeit in jedem Tool; LLM Council ergänzt OpenAI und Google, sodass sich drei Anbieter gegenseitig prüfen.' },
          { title: 'Offener Code', body: 'Der Code jedes Tools ist auf GitHub öffentlich, mit seinen Tests und seiner CI.' },
        ],
      },
      closing: {
        heading: 'Probieren Sie sie an Ihrem eigenen Beispiel aus.',
        body: 'Melden Sie sich an und probieren Sie jedes der fünf Tools kostenlos aus. Für Agent Flow fragen Sie Demo-Zugang an, dann richte ich ihn für Sie ein.',
      },
      hire: 'Sie möchten eine Vorführung mit Ihrem eigenen Prozess? Das gehört zur Automatisierungsprüfung auf',
    },
    about: {
      hero: {
        eyebrow: 'Über DOME',
        heading: 'Ein persönliches Projekt zu kontrollierter KI.',
        lead: 'Ich baue DOME, um zu zeigen, dass KI in regulierten Prozessen arbeiten und kontrolliert bleiben kann: jede Entscheidung nachvollziehbar, jede Ausnahme bei einem Menschen und der Code öffentlich.',
      },
      why: {
        eyebrow: 'Das Projekt',
        heading: 'Warum es das gibt',
        paragraphs: [
          'Die meisten KI-Demos lassen genau das aus, worum sich ein reguliertes Team sorgt: wer was freigegeben hat, auf welcher Grundlage und nach welcher Regel. DOME beginnt dort.',
          'Jedes Tool deckt eine Phase einer Methode ab, vom Erfassen eines Prozesses bis zu seiner Ausführung, und jeder Durchlauf landet im selben Audit-Trail. Agent Flow verbindet sie zu einem Workflow, mit einer namentlich benannten Person, die entscheidet.',
          'Es ist auch der Ort, an dem ich lerne. Jedes Tool ist eine Gelegenheit, ein neues Modell, ein Agentenmuster oder eine Gestaltungsidee auszuprobieren und festzuhalten, was funktioniert hat.',
        ],
      },
      facts: [
        { figure: '6', label: 'Tools: fünf offen für alle, die sich anmelden, eine private Demo' },
        { figure: '4', label: 'Sprachen auf dieser Website: Englisch, Italienisch, Niederländisch und Deutsch' },
        { figure: '1', label: 'Audit-Trail, den alle Tools teilen' },
      ],
      builder: {
        eyebrow: 'Wer es baut',
        heading: 'Eine Person, von Anfang bis Ende.',
        name: 'Francesco Prodomo',
        bio: 'Entwickelt und betreibt DOME: die Tools, das Designsystem und die Website. Zehn Jahre Erfahrung in Produktdesign für Unternehmenssoftware und Einkaufssysteme.',
        workWith: 'Mit mir arbeiten: francescoprodomo.com',
        github: 'Der Code auf GitHub',
        linkedin: 'LinkedIn',
      },
      closing: {
        heading: 'Probieren Sie ein Tool aus, oder sehen Sie sich den Ablauf an.',
        body: 'Fünf Tools stehen allen offen, die sich anmelden. Agent Flow läuft als private Demo: Sehen Sie sich an, wie es funktioniert, oder fragen Sie Zugang an.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Kontakt',
        heading: 'Schreiben Sie mir zu den Tools.',
        lead: 'Feedback, Demo-Zugang zu Agent Flow oder eine Frage dazu, wie etwas funktioniert. Ich antworte innerhalb von zwei Werktagen.',
      },
      details: {
        heading: 'Weitere Kontaktwege',
        email: 'E-Mail',
        pec: 'Zertifizierte E-Mail (PEC)',
        location: 'Standort',
        locationValue: 'Florenz, Italien',
        code: 'Code und Issues',
        legal: 'Francesco Prodomo · USt-IdNr. IT07242670482',
      },
      hire: {
        heading: 'Sie möchten mich beauftragen?',
        text: 'Meine Beratung, und einen Gesprächstermin, finden Sie auf',
      },
    },
    tools: {
      back: 'Tools',
      whatItDoes: 'Was es kann',
      howItWorks: 'So funktioniert es',
      whatItRecords: 'Was es festhält',
      inMethod: 'In der DOME-Methode',
      thisPage: 'diese Seite',
      allTools: 'Alle Tools ansehen',
      processAnalyzer: {
        phase: 'Discover',
        tagline: 'Jeder Prozess, erfasst und auf Governance-Lücken geprüft.',
        lead: 'Beschreiben Sie einen Geschäftsprozess in eigenen Worten. Sie erhalten eine strukturierte Prozesslandkarte, die beteiligten Systeme, wo Zeit verloren geht, die Governance-Lücken und was sich automatisieren lässt.',
        open: 'Process Analyzer öffnen',
        shot: { alt: 'Ein Ergebnis von Process Analyzer: ein Freigabeprozess für Lieferantenrechnungen mit sechs Schritten, vier Systemen, der Wartezeit und einem Hinweis auf Schatten-IT', caption: 'Die Analyse eines Rechnungsprozesses. Erfundene Unternehmen und Daten.' },
        features: {
          heading: 'Von einem Absatz zu einer Landkarte, mit der Sie arbeiten können.',
          items: [
            { figure: 'Schritte und Systeme', title: 'Der Prozess, wie er wirklich läuft', body: 'Jeder Schritt mit Akteur, Systemen, Dauer und Wartezeit davor; Engpässe und Schatten-IT sind markiert.' },
            { figure: 'Governance-Lücken', title: 'Wo Kontrolle fehlt', body: 'Funktionstrennung, fehlende Audit-Trails und Freigabegrenzen, jeweils nach Schweregrad und mit einer Empfehlung.' },
            { figure: 'Automatisierung', title: 'Was sich automatisieren lässt, und was zuerst', body: 'Ansatzpunkte mit der eingesparten Zeit, dem Aufwand und dem, was vor dem Start vorhanden sein muss.' },
          ],
        },
        howItWorks: {
          heading: 'In drei Schritten von der Beschreibung zur Prozesslandkarte.',
          steps: [
            { title: 'Prozess beschreiben', body: 'Schreiben Sie auf, wie die Arbeit heute läuft: ein Einkaufsablauf, eine Freigabekette, ein Onboarding. Keine Vorlage, kein festes Format.' },
            { title: 'Strukturierte Landkarte erhalten', body: 'Ein Flussdiagramm, die beteiligten Systeme, Dauer und Wartezeit je Schritt und die Stellen, an denen die Governance angreifbar ist.' },
            { title: 'Antworten, verfeinern, speichern', body: 'Wo die Beschreibung Lücken lässt, fragt das Tool nach; Ihre Antworten verfeinern die Landkarte. Speichern Sie sie, um später weiterzumachen.' },
          ],
        },
        record: { heading: 'Jede Analyse hinterlässt ein Governance-Ereignis.', lead: 'Nicht Ihre Beschreibung: was analysiert wurde, wie sicher das Modell war, welche Risiken es fand und ob ein Mensch prüfen sollte.' },
        method: { heading: 'Discover: erfassen, was es gibt, bevor automatisiert wird.', body: 'Die Landkarte, die Systeme und die Lücken sind die Grundlage jeder weiteren Phase.' },
        closing: { heading: 'Erfassen Sie einen eigenen Prozess.', body: 'Melden Sie sich an und beschreiben Sie einen Prozess, den Sie gut kennen. Es ist kostenlos.' },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        tagline: 'Eine schwierige Frage, drei Modelle, ein Urteil mit dokumentierter Begründung.',
        lead: 'Legen Sie eine strategische Frage drei KI-Beratern vor. Sie antworten zuerst unabhängig, prüfen sich dann gegenseitig, und der Council liefert ein Urteil, in dem die Uneinigkeit sichtbar bleibt.',
        open: 'LLM Council öffnen',
        shot: { alt: 'Ein Urteil von LLM Council zur Frage, ob kleine Rechnungen freigegebener Lieferanten ohne Freigabe bezahlt werden dürfen, mit Empfehlung, einer abweichenden Ansicht und der Begründung jedes Beraters', caption: 'Eine gespeicherte Beratung. Erfundene Unternehmen und Daten.' },
        features: {
          heading: 'Nicht die Meinung eines einzigen Modells.',
          items: [
            { figure: '3 Anbieter', title: 'Claude, Gemini und ChatGPT', body: 'Drei Modelle von drei Anbietern, jedes mit eigener Rolle, damit nicht die blinden Flecken eines Modells entscheiden.' },
            { figure: '2 Runden', title: 'Erst unabhängig, dann geprüft', body: 'Jeder Berater antwortet zuerst allein, liest dann die anderen und passt an; Sie können beide Runden lesen.' },
            { figure: 'Dissens bleibt', title: 'Ein Urteil, das seine Zweifel zeigt', body: 'Das Urteil kommt mit einem Konsenswert, einer Empfehlung und den Ansichten, die nicht zustimmten.' },
          ],
        },
        howItWorks: {
          heading: 'Fragen, abwägen, entscheiden.',
          steps: [
            { title: 'Strategische Frage stellen', body: 'Ein Markteintritt, eine Risikoabwägung, eine Richtlinienentscheidung. Eigene Worte genügen.' },
            { title: 'Drei Berater wägen ab', body: 'Jeder urteilt zuerst allein aus seiner Perspektive und prüft dann die anderen, damit Uneinigkeit sichtbar wird statt gemittelt.' },
            { title: 'Ein dokumentiertes Urteil', body: 'Konsens, abweichende Ansichten und Empfehlung, mit jedem Schritt der Begründung zur Prüfung gespeichert.' },
          ],
        },
        record: { heading: 'Jede Beratung wird festgehalten.', lead: 'Welche Modelle beteiligt waren, wie viele Runden sie brauchten, wie einig sie waren und ob ein Mensch entscheiden sollte.' },
        method: { heading: 'Orchestrate: Kein Modell entscheidet allein.', body: 'Folgenreiche Entscheidungen bekommen zuerst strukturierten Widerspruch. Agent Flow nutzt den Council für schwierige Rechnungen.' },
        closing: { heading: 'Legen Sie dem Council Ihre eigene Frage vor.', body: 'Melden Sie sich an und fragen Sie etwas, zu dem Sie eine zweite und dritte Meinung möchten. Es ist kostenlos.' },
      },
      documentIntelligence: {
        phase: 'Model',
        tagline: 'Strukturierte Daten aus jedem Dokument, geprüft, bevor Sie sie verwenden.',
        lead: 'Laden Sie eine Rechnung, einen Vertrag oder einen Laborbericht hoch. Jedes Feld kommt mit einem Konfidenzwert zurück, 16 Governance-Prüfungen markieren, was einen zweiten Blick braucht, und das Ergebnis wird mit seinem Audit-Trail gespeichert.',
        open: 'Document Intelligence öffnen',
        shot: { alt: 'Ein Ergebnis von Document Intelligence: eine Rechnung als Einkauf erkannt, menschliche Prüfung empfohlen und die ausgelesenen Felder, jedes mit Konfidenzwert', caption: 'Eine gespeicherte Extraktion. Erfundene Unternehmen und Daten.' },
        features: {
          heading: 'Keine Vorlagen, kein Abtippen, kein blindes Vertrauen.',
          items: [
            { figure: '1 Wert pro Feld', title: 'Jeder Wert mit seiner Konfidenz', body: 'Dokumenttyp, Branche, Sprache und Währung werden erkannt; jedes Feld bekommt einen Typ, einen Abschnitt und einen Wert.' },
            { figure: '16 Prüfungen', title: 'Erst Regeln, dann Vertrauen', body: 'Niedrige Konfidenz, fehlende kritische Werte, auffällige Daten, hohe Beträge, personenbezogene Daten und Dubletten, nach Schweregrad markiert.' },
            { figure: 'Verlauf und CSV', title: 'Mit seinem Nachweis gespeichert', body: 'Behalten Sie eine Extraktion im Verlauf, exportieren Sie sie als CSV und finden Sie jeden Lauf im Prüfprotokoll.' },
          ],
        },
        howItWorks: {
          heading: 'Hochladen, auslesen, prüfen.',
          steps: [
            { title: 'Dokument hochladen oder fotografieren', body: 'Eine PDF- oder Bilddatei oder ein Foto mit der Handykamera. Rechnungen, Laborberichte, Versorgerrechnungen, Verträge und Kontoauszüge, ohne Vorlagen einzurichten.' },
            { title: 'Auslesen und Governance-Prüfungen', body: 'Felder kommen mit Konfidenzwerten zurück, das Dokument wird eingeordnet, und die 16 Regeln markieren, was ein Mensch sehen sollte, bevor sich jemand darauf verlässt.' },
            { title: 'Prüfen, speichern, exportieren', body: 'Sehen Sie jedes Feld mit Abschnitt, Typ und Wert, bewerten Sie die Hinweise nach Schweregrad und speichern oder exportieren Sie das Ergebnis.' },
          ],
        },
        record: { heading: 'Jede Extraktion hinterlässt ein Governance-Ereignis.', lead: 'Nicht das Dokument selbst: was gefunden wurde, wie sicher das Modell war, welche Regeln ausgelöst wurden und ob ein Mensch hinsehen sollte.' },
        method: { heading: 'Model: kontrollierte Ergebnisse aus Rohdokumenten.', body: 'Regeln, nicht das Modell, entscheiden, was vertrauenswürdig ist. Dieselbe Extraktion ist der erste Schritt von Agent Flow.' },
        closing: { heading: 'Probieren Sie es mit einem eigenen Dokument.', body: 'Melden Sie sich an und laden Sie eine Rechnung, einen Vertrag oder das Foto einer Seite hoch. Es ist kostenlos.' },
      },
      dataIntelligence: {
        phase: 'Model',
        tagline: 'Eine Tabelle hinein, ein kontrolliertes Dashboard heraus.',
        lead: 'Laden Sie eine Tabelle hoch. Ein Modell klassifiziert die Spalten, eine Regel-Engine (nicht das Modell) wählt die Diagramme, und Sie stellen Fragen zu den Daten in eigenen Worten.',
        open: 'Data Intelligence öffnen',
        shot: { alt: 'Ein Dashboard von Data Intelligence aus einer Ausgabendatei: Gesamtausgaben, Anzahl Rechnungen, Ausgaben nach Monat und nach Kategorie, jedes Diagramm mit der Regel, die es gewählt hat', caption: 'Ein Dashboard aus einer Ausgabendatei. Erfundene Unternehmen und Daten.' },
        features: {
          heading: 'Das Modell gibt Hinweise, die Regeln entscheiden.',
          items: [
            { figure: '7 Regeln', title: 'Diagramme, die sich erklären lassen', body: 'Jedes Diagramm zeigt die Regel, die es gewählt hat, also ergeben dieselben Daten immer dasselbe Dashboard.' },
            { figure: 'Zeilen bleiben bei Ihnen', title: 'Ihre Zeilen gehen nicht mit', body: 'Spaltennamen, Typen, einige Beispielwerte und Summen gehen an das Modell; die Zeilen bleiben in Ihrem Browser, sofern Sie das Dashboard nicht speichern.' },
            { figure: 'Fragen an die Daten', title: 'Fragen in eigenen Worten', body: 'Fragen Sie, welche Kategorie am stärksten gewachsen ist oder wo ein Monat auffällt, und erhalten Sie eine Antwort aus den Spaltenstatistiken.' },
          ],
        },
        howItWorks: {
          heading: 'Hochladen, klassifizieren, analysieren.',
          steps: [
            { title: 'Tabelle hochladen', body: 'Eine CSV-, XLSX- oder XLS-Datei. Das Tool liest Spaltennamen, Typen, Beispielwerte und Summen.' },
            { title: 'Ein kontrolliertes Dashboard', body: 'Ein Sprachmodell klassifiziert jede Spalte; dann wählt eine deterministische Regel-Engine das Diagramm für jede Beziehung in den Daten.' },
            { title: 'Fragen stellen', body: 'Steht das Dashboard, fragen Sie in eigenen Worten nach den Daten; die Antworten arbeiten mit der Spaltenzusammenfassung.' },
          ],
        },
        record: { heading: 'Jedes Dashboard hinterlässt ein Governance-Ereignis.', lead: 'Welche Regeln die Diagramme gewählt haben, wie sicher die Klassifizierung war und ob ein Mensch prüfen sollte.' },
        method: { heading: 'Model: Das Modell klassifiziert, die Regeln stellen dar.', body: 'Eine begrenzte Aufgabe mit geringem Risiko für das Modell, und die folgenreichen Entscheidungen für eine deterministische Engine.' },
        closing: { heading: 'Probieren Sie es mit einer eigenen Tabelle.', body: 'Melden Sie sich an und laden Sie eine Datei hoch, die Sie kennen. Es ist kostenlos.' },
      },
      governanceDashboard: {
        phase: 'Govern',
        tagline: 'Ein Audit-Trail über alle Tools.',
        lead: 'Jedes Ereignis, das die Tools schreiben, mit Konfidenzwert und menschlicher Entscheidung, an einem Ort zum Filtern, Prüfen und als PDF für die interne Revision.',
        open: 'Governance Dashboard öffnen',
        shot: { alt: 'Das Ereignisprotokoll des Governance Dashboards: Ereignisse aus Agent Flow, LLM Council, Document Intelligence, Data Intelligence und Process Analyzer, mit Konfidenz und Prüfstatus', caption: 'Das Ereignisprotokoll. Erfundene Unternehmen und Daten.' },
        features: {
          heading: 'Was geschah, wer entschied, auf welcher Grundlage.',
          items: [
            { figure: 'Alle Tools', title: 'Ein Protokoll, nicht fünf', body: 'Ereignisse aller Tools und der Läufe von Agent Flow, filterbar nach Tool, Datum, Konfidenz oder Prüfstatus.' },
            { figure: 'Ein Lauf, eine Zeitleiste', title: 'Workflows, die sich rekonstruieren lassen', body: 'Die Läufe von Agent Flow sind nach Workflow-ID gruppiert, vom Eingang bis zur Person, die freigegeben hat.' },
            { figure: 'PDF', title: 'Berichte für die Revision', body: 'Ein Bericht für jeden Zeitraum und jede Auswahl von Tools: Zusammenfassung, Verteilung der Konfidenz und die vollständige Ereignistabelle.' },
          ],
        },
        howItWorks: {
          heading: 'Von der Nutzung der Tools zum Compliance-Bericht.',
          steps: [
            { title: 'Tools wie gewohnt nutzen', body: 'Jeder Lauf jedes Tools schreibt ein Governance-Ereignis: die Aktion, die Konfidenz, die angewandten Regeln und ob ein Mensch prüfen sollte.' },
            { title: 'Den Nachweis prüfen', body: 'Das Protokoll zeigt das Neueste zuerst. Filtern Sie, öffnen Sie ein Ereignis für den vollständigen Entscheidungsnachweis oder folgen Sie einem Workflow-Lauf Schritt für Schritt.' },
            { title: 'Für die Revision exportieren', body: 'Erstellen Sie einen PDF-Bericht für einen Zeitraum und eine Auswahl von Tools, bereit für die interne Revision.' },
          ],
        },
        record: { heading: 'Es liest den Nachweis, es schreibt nie hinein.', lead: 'Das Dashboard zeigt nur Ihre eigenen Ereignisse, durchgesetzt von der Datenbank, und bewahrt sie zwölf Monate auf.' },
        method: { heading: 'Govern: der Faden durch jede Phase.', body: 'Discover, Orchestrate, Model und Execute schreiben hier ihre Entscheidungen fest, damit sie sich später erklären und anfechten lassen.' },
        closing: { heading: 'Sehen Sie Ihren eigenen Nachweis.', body: 'Melden Sie sich an, nutzen Sie ein Tool einmal und öffnen Sie das Dashboard. Es ist kostenlos.' },
      },
      agentFlow: {
        phase: 'Execute',
        tagline: 'Von der Rechnung zur Freigabe, jeder Schritt dokumentiert.',
        lead: 'Agent Flow verbindet die DOME-Tools zu einem kontrollierten Workflow: Es liest die Rechnung, wendet die Richtlinie an, fragt mehrere Modelle zu den Ausnahmen und hält bei einer namentlich benannten Person an, wo die Richtlinie sagt, dass ein Mensch entscheidet.',
        shot: { alt: 'Die Freigabewarteschlange von Agent Flow: Rechnungen, die zur Freigabe weitergeleitet wurden, jede mit Betrag, der Rolle, die freigeben muss, und den ausgelösten Regeln', caption: 'Die Freigabewarteschlange. Erfundene Unternehmen und Daten.' },
        openQueue: 'Freigabewarteschlange öffnen',
        askDemo: 'Demo-Zugang anfragen',
        demoNote: 'Eine private Demo mit erfundenen Rechnungen. Fragen Sie an, dann richte ich den Zugang ein.',
        why: {
          eyebrow: 'Warum es das gibt',
          heading: 'Tempo, ohne den Nachweis zu verlieren.',
          paragraphs: [
            'Finanzteams wollen die Rechnungsbearbeitung an KI übergeben. Prüfer müssen aber wissen, wer was auf welcher Grundlage und nach welcher Regel freigegeben hat. Die meisten Automatisierungen gewinnen Tempo und verlieren diesen Nachweis.',
            'Agent Flow zeigt, dass Automatisierung und ein lückenloser Audit-Trail aus demselben System kommen können.',
          ],
          outcomes: [
            { title: 'Jede Entscheidung nachvollziehbar', body: 'Bis zur Eingabe, den angewandten Regeln, den Bewertungen der Modelle und der Person, die freigegeben hat.' },
            { title: 'Ein Mensch bei jeder Ausnahme', body: 'Die Richtlinie entscheidet, welche Rechnungen einen Menschen brauchen, und der Workflow hält dort an, so gebaut.' },
            { title: 'Ein Nachweis, nicht fünf Protokolle', body: 'Eine Workflow-ID verbindet Extraktion, Regeln, Council und Freigabe.' },
          ],
        },
        run: {
          eyebrow: 'So läuft ein Durchlauf',
          heading: 'Fünf Stufen, eine Workflow-ID.',
          lead: 'Jede Rechnung erhält beim Eingang eine ID, und jedes Tool, das sie berührt, schreibt in denselben Nachweis.',
          stages: [
            { tool: 'Eingang', title: 'Eine Rechnung geht ein', body: 'Ein Lieferant schickt sie an das Kreditoren-Postfach, oder sie wird über ein Formular hochgeladen. Ein selbst gehosteter Workflow nimmt sie auf und startet einen kontrollierten Durchlauf.' },
            { tool: 'Document Intelligence', title: 'Ausgelesen und bewertet', body: 'Jedes Feld kommt mit einem Konfidenzwert zurück; die Extraktion führt dieselben 16 Governance-Prüfungen aus wie das Tool allein.' },
            { tool: 'Regel-Engine', title: 'Gegen die Richtlinie geprüft', body: 'Betragsstufe, Kategorie, Land und Umsatzsteuer, freigegebene Lieferanten, Abgleich mit der Bestellung, Währung und Dubletten bestimmen den Freigabeweg.' },
            { tool: 'LLM Council', title: 'Eine Vorlage zu den Ausnahmen', body: 'Unklare Rechnungen und hohe Beträge erhalten eine Entscheidungsvorlage aus mehreren Modellen, mit Übereinstimmungen und Abweichungen.' },
            { tool: 'Benannte Freigabe', title: 'Ein Mensch gibt frei', body: 'Die Person mit der Rolle, die die Richtlinie verlangt, gibt frei oder lehnt ab, mit einer Notiz. Rechnungen mit geringem Risiko werden nach Richtlinie automatisch freigegeben.' },
          ],
        },
        record: {
          heading: 'Ein Nachweis, der sich rekonstruieren lässt.',
          lead: 'Jeder Schritt erscheint als eine Zeitleiste im Governance Dashboard: was gelesen wurde, welche Regeln griffen, was die Modelle sagten und wer freigab.',
          cta: 'So funktioniert das Governance Dashboard',
          events: [
            { what: 'Durchlauf aus E-Mail gestartet', review: 'Protokolliert' },
            { what: '15 Felder, 91 % Konfidenz', review: 'Geprüft' },
            { what: 'Freigabe durch Finanzleitung nötig', review: 'Regel' },
            { what: 'Nach Prüfung der Bestellung freigeben', review: 'Vorlage' },
            { what: 'Freigegeben, mit einer Notiz', review: 'Mensch' },
          ],
        },
        method: { heading: 'Execute: die Methode von Anfang bis Ende.', body: 'Agent Flow ist aus den anderen Tools gebaut: Document Intelligence liest, LLM Council berät, das Governance Dashboard führt den Nachweis.' },
        closing: { heading: 'Sehen Sie es mit Ihrer eigenen Rechnung.', body: 'Fragen Sie Demo-Zugang an, dann richte ich ihn ein, oder beginnen Sie mit den Tools, aus denen es gebaut ist.' },
      },
    },
    privacy: {
      back: '← Zurück zu domelayer.com',
      updated: 'Zuletzt aktualisiert: November 2026',
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
            { p: 'Dome ist ein persönliches Projekt von Francesco Prodomo, freiberuflich tätig in Italien (USt-IdNr. IT07242670482). Wenn in dieser Erklärung von „Dome“, „wir“ oder „uns“ die Rede ist, ist Francesco Prodomo gemeint.' },
            { p: 'Standort: Florenz, Italien\nKontakt in Datenschutzfragen: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo ist der Verantwortliche für alle personenbezogenen Daten, die über domelayer.com und die zugehörigen Tools erhoben werden.' },
          ],
        },
        {
          heading: 'Wofür diese Erklärung gilt',
          blocks: [
            { p: 'Diese Erklärung beschreibt, welche personenbezogenen Daten wir erheben, wenn Sie domelayer.com besuchen oder sich für die KI-Tools von Dome registrieren, warum wir sie erheben, wie lange wir sie aufbewahren und welche Rechte Sie daran haben.' },
            { p: 'Diese Erklärung gilt ausschließlich für domelayer.com und die Portfolio-Tools von Dome. Sie gilt nicht für Beratungsprojekte, in denen Francesco Prodomo KI-Systeme oder Software für Kunden entwirft und einführt: Für diese Projekte gelten eigene Verträge und Auftragsverarbeitungsverträge, die je Projekt vereinbart werden.' },
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
            { h3: 'Kontaktformular' },
            { p: 'Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, erhalten wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht (über das Formular außerdem das Thema) und verwenden sie nur, um zu antworten. Um das Formular vor Missbrauch zu schützen, zählt unser Hosting-Anbieter die Übermittlungen je IP-Adresse über eine Minute; dieser Zähler wird nicht gespeichert.' },
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
            { p: 'Cloudflare, Railway, Resend, Umami, Anthropic, OpenAI und Google haben ihren Sitz in den Vereinigten Staaten oder verarbeiten dort Daten. Übermittlungen an sie stützen sich auf das EU-US Data Privacy Framework, wenn der Anbieter danach zertifiziert ist, und andernfalls auf Standardvertragsklauseln (SCC) nach Art. 46 DSGVO.' },
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
                  ['Nachrichten, die Sie uns senden (Kontaktformular oder E-Mail)', 'Bis zu 24 Monate nach unserem letzten Austausch'],
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
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo · Florenz, Italien · USt-IdNr. IT07242670482' },
          ],
        },
      ],
      sibling: 'Nutzungsbedingungen →',
    },
    cookies: {
      back: '← Zurück zu domelayer.com',
      updated: 'Zuletzt aktualisiert: November 2026',
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
            { p: 'Wir messen die Besuche auf domelayer.com in Summe mit **Umami** (Umami Software, Inc.), mit Datenhaltung in der Europäischen Union. Umami setzt keine Cookies und speichert nichts in Ihrem Browser. Das Skript wird von unserer eigenen Domain ausgeliefert und sendet eine kurze Meldung pro Seitenaufruf sowie eine, wenn Sie eine Nachricht senden, einem Link zur Kontaktseite folgen, die Anmeldung beginnen oder die Sprache wechseln.' },
            { p: 'Ihre IP-Adresse wird nicht gespeichert. Umami verwendet sie nur, um einen ungefähren Standort (Land, Region und Stadt) zu ermitteln und Besuche desselben Browsers innerhalb eines Kalendermonats zu erkennen, über einen Code, der sich nicht zurückrechnen lässt und sich jeden Monat ändert. Wir sehen Summen, nie Einzelpersonen: wie viele Besuche es gibt, woher sie kommen, welche Seiten und Leistungen Interesse wecken und wie viele Nachrichten folgen. Wir verwenden das nicht, um ein Profil von Ihnen zu erstellen, verknüpfen es nicht mit anderen Daten und geben es nicht weiter. Umami bewahrt es 6 Monate auf.' },
            { p: 'Wenn Ihr Browser „Do Not Track“ sendet, wird nichts gemessen. Die Anmeldeseiten werden ohne ihre Adressparameter gemeldet. Die Tools von Dome werden nicht gemessen: Was wir dort zählen, sind die Durchläufe, die jedes Tool in seinem Audit-Trail festhält, wie in der [Datenschutzerklärung](privacy) beschrieben.' },
          ],
        },
        {
          heading: 'Weitere Dienste',
          blocks: [
            { p: '**Cloudflare**, das diese Website hostet, setzt hier keine Cookies. Um das Kontaktformular vor Missbrauch zu schützen, zählt Cloudflare die Übermittlungen je IP-Adresse über eine Minute; dieser Zähler wird nicht gespeichert.' },
            { p: '**Sentry**, unser Fehler-Monitoring (EU-Region), sendet einen technischen Bericht, wenn eine Seite einen Fehler erzeugt. Sentry setzt keine Cookies und speichert nichts in Ihrem Browser.' },
            { p: '**Schriften** werden von unseren eigenen Domains ausgeliefert. Keine Seite lädt etwas von Google Fonts.' },
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
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo · Florenz, Italien · USt-IdNr. IT07242670482' },
          ],
        },
      ],
      sibling: 'Datenschutzerklärung →',
    },
    terms: {
      back: '← Zurück zu domelayer.com',
      updated: 'Zuletzt aktualisiert: Oktober 2026',
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
            { p: 'Die KI-Tools von Dome sind ein persönliches Projekt von Francesco Prodomo, freiberuflich tätig in Italien (USt-IdNr. IT07242670482).' },
            { p: 'Standort: Florenz, Italien\nKontakt: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'Wofür diese Bedingungen gelten',
          blocks: [
            { p: 'Mit der Registrierung für ein KI-Tool von Dome und seiner Nutzung stimmen Sie diesen Bedingungen zu. Bitte lesen Sie sie vor der Registrierung. Wenn Sie nicht zustimmen, nutzen Sie die Tools bitte nicht.' },
            { p: 'Diese Bedingungen gelten für die Portfolio-Tools von Dome unter den oben genannten Subdomains. Sie gelten nicht für Beratungsprojekte, in denen Francesco Prodomo KI-Systeme für andere Organisationen entwirft oder einführt: Dafür gelten eigene Projektverträge.' },
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
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo · Florenz, Italien · USt-IdNr. IT07242670482' },
          ],
        },
      ],
      sibling: '← Datenschutzerklärung',
    },
  },
}
