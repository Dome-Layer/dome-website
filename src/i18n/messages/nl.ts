import type { Messages } from './types'

// Dutch copy, written rather than translated: Netherlands Dutch for IT directors, compliance leads
// and operations managers, plain and specific. Address the reader as "u" throughout, never "je"
// (decided 2026-09-29). Buttons use the imperative without a pronoun, as Dutch interfaces do.
//
// Keep the terms Dutch professionals actually use: AI, audittrail, compliance, governance, UX,
// dashboard, workflow. Tool names and the DOME phase names stay English. GDPR is "AVG". Compounds
// are written as one word or with a hyphen (enterpriseplatform, AI-tools), never as two words.
export const nl: Messages = {
  site: {
    description:
      'DOME is een persoonlijk project van Francesco Prodomo, gevestigd in Florence: werkende AI-tools die laten zien hoe AI binnen gereguleerde processen kan werken en daarbij controleerbaar, meetbaar en uitlegbaar blijft. Elke tool legt zijn beslissingen vast in één audittrail.',
    llmsIntro:
      'DOME is een set AI-tools die één persoon, Francesco Prodomo, bouwt en beheert als project over AI met governance. Elke tool dekt één fase van een methode (discover, orchestrate, model, execute): procesanalyse, een raad van meerdere AI-modellen, document- en data-intelligence, en Agent Flow, een gecontroleerde workflow van factuur tot goedkeuring. Elke tool legt zijn beslissingen vast in één audittrail, zichtbaar in het Governance Dashboard, en een medewerker op naam keurt goed waar het beleid dat eist. Vijf tools zijn na het inloggen gratis te proberen; Agent Flow draait als besloten demo. De code staat openbaar op GitHub. Het advieswerk van Francesco staat op francescoprodomo.com.',
    llmsSections: { pages: 'Pagina’s', tools: 'De tools', legal: 'Juridisch' },
    knowsAbout: ['AI-governance', 'Gecontroleerde AI-workflows', 'Audittrails voor AI', 'Goedkeuring door een mens', 'Document intelligence', 'Procesanalyse', 'AI-review met meerdere modellen', 'Designsystemen'],
  },
  nav: {
    homeLabel: 'DOME, home',
    tools: 'Tools',
    agentFlow: 'Agent Flow',
    dome: 'DOME',
    about: 'Over DOME',
    contact: 'Contact',
    signIn: 'Inloggen',
    signOut: 'Uitloggen',
    yourTools: 'Uw tools',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    switchToLight: 'Overschakelen naar licht thema',
    switchToDark: 'Overschakelen naar donker thema',
  },
  switcher: {
    language: 'Taal',
    readIn: {
      en: 'Lees deze pagina in het Engels',
      it: 'Lees deze pagina in het Italiaans',
      nl: 'Lees deze pagina in het Nederlands',
      de: 'Lees deze pagina in het Duits',
    },
  },
  footer: {
    tagline: 'Een persoonlijk project over AI met governance, van Francesco Prodomo.',
    navLabel: 'Voettekst',
    project: 'Project',
    elsewhere: 'Elders',
    workWith: 'Werken met Francesco',
    github: 'Code op GitHub',
    linkedin: 'Francesco op LinkedIn',
    pec: 'PEC',
    privacy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    cookies: 'Cookiebeleid',
    rights: 'Alle rechten voorbehouden.',
  },
  cookieNotice: {
    lead: 'Dome gebruikt alleen functionele cookies.',
    body: 'Eén cookie houdt u ingelogd, twee onthouden uw thema en taal. Bezoeken tellen we alleen in totalen, zonder cookies. Geen tracking, geen advertenties.',
    link: 'Lees ons cookiebeleid',
    dismiss: 'Begrepen',
  },
  contactForm: {
    heading: 'Stuur een bericht',
    intro: 'Kies een onderwerp, dan weet ik waar het over gaat.',
    nameLabel: 'Naam',
    namePlaceholder: 'Uw naam',
    emailLabel: 'E-mailadres',
    emailPlaceholder: 'u@voorbeeld.nl',
    topicLabel: 'Onderwerp',
    messageLabel: 'Bericht',
    messagePlaceholder: 'Wat wilt u mij laten weten?',
    privacyNote: 'Ik gebruik uw gegevens alleen om te antwoorden. Zie het',
    privacyLink: 'privacybeleid',
    send: 'Verstuur bericht',
    sending: 'Bezig met versturen',
    successTitle: 'Bericht ontvangen',
    successBody: 'Bedankt voor uw bericht. Ik antwoord binnen twee werkdagen.',
    sendAnother: 'Nog een bericht sturen',
    rateLimited: 'U hebt het maximumaantal berichten bereikt. Probeer het over een minuut opnieuw.',
    genericError: 'Er ging iets mis. Probeer het opnieuw of mail mij rechtstreeks.',
  },
  errors: {
    notFoundTitle: 'Pagina niet gevonden',
    notFoundBody: 'De pagina die u zoekt, bestaat niet.',
    errorTitle: 'Er ging iets mis',
    errorBody: 'Vernieuw de pagina en probeer het opnieuw.',
    homeLink: 'Naar de homepage',
  },
  breadcrumbHome: 'Home',
  meta: {
    home: {
      name: 'Home',
      title: 'DOME | Werkende AI-tools die u kunt controleren',
      description:
        'Een persoonlijk project van Francesco Prodomo: werkende AI-tools die laten zien hoe AI in gereguleerde processen controleerbaar en uitlegbaar blijft.',
      ogDescription:
        'Zes AI-tools en één audittrail. Probeer ze gratis, of bekijk hoe een factuur van binnenkomst bij een goedkeurder op naam komt.',
      twitterDescription: 'Werkende AI-tools die u kunt controleren. Gratis te proberen.',
      imageAlt: 'DOME: werkende AI-tools die u kunt controleren',
    },
    dome: {
      name: 'Tools',
      title: 'De tools: AI met governance om te proberen | DOME',
      description:
        'Zes werkende tools, van procesverkenning tot controleerbare uitvoering: vijf open voor iedereen die inlogt, en Agent Flow als besloten demo.',
      ogDescription:
        'Procesanalyse, document- en data-intelligence, een raad van meerdere AI-modellen, een gecontroleerde agentworkflow en een governancedashboard.',
      imageAlt: 'De DOME-tools',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer: processen in kaart met AI | DOME',
      description:
        'Beschrijf een bedrijfsproces in uw eigen woorden en krijg een proceskaart, een governance-analyse en een beoordeling van wat u kunt automatiseren.',
      ogDescription:
        'Beschrijf een proces in uw eigen woorden. U krijgt een gestructureerde proceskaart, de hiaten in de governance en de kansen voor automatisering.',
      twitterDescription: 'Van procesbeschrijving naar proceskaart, met governance-hiaten en automatiseringskansen.',
      imageAlt: 'DOME Process Analyzer: proceskaarten met governance',
      twitterImageAlt: 'DOME Process Analyzer',
    },
    dataIntelligence: {
      name: 'Data Intelligence',
      title: 'Data Intelligence: dashboards die u kunt controleren | DOME',
      description:
        'Upload een spreadsheet en krijg een analysedashboard met ingebouwde controles, automatisch gekozen grafieken en vragen in gewone taal.',
      ogDescription:
        'Upload een spreadsheet. U krijgt een dashboard met deterministische grafiekkeuze en een paneel voor vragen in gewone taal, zonder configuratie.',
      twitterDescription: 'Van spreadsheet naar gecontroleerd dashboard, met vragen in gewone taal en zonder configuratie.',
      imageAlt: 'DOME Data Intelligence: analysedashboard met ingebouwde controles',
      twitterImageAlt: 'DOME Data Intelligence',
    },
    llmCouncil: {
      name: 'LLM Council',
      title: 'LLM Council: een afweging door drie AI-modellen | DOME',
      description:
        'Leg een strategische vraag voor aan drie AI-adviseurs. Ze redeneren los van elkaar, toetsen elkaars standpunten en komen tot een onderbouwd oordeel.',
      imageAlt: 'DOME LLM Council: AI-afweging met governance',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence: controleerbare data-extractie | DOME',
      description:
        'Haal gestructureerde gegevens uit facturen, rapporten, energierekeningen en contracten, getoetst aan governanceregels en met een volledige audittrail.',
      ogDescription:
        'Upload een document en krijg binnen enkele seconden de velden, betrouwbaarheidsscores en een rapport op 16 governanceregels.',
      twitterDescription: 'Gestructureerde gegevens uit elk document, met governancecontroles, betrouwbaarheidsscores en een audittrail.',
      imageAlt: 'DOME Document Intelligence: documentextractie met governance',
      twitterImageAlt: 'DOME Document Intelligence',
    },
    governanceDashboard: {
      name: 'Governance Dashboard',
      title: 'Governance Dashboard: audittrail voor AI-beslissingen | DOME',
      description:
        'Eén audittrail voor alle DOME-tools: elke gebeurtenis, betrouwbaarheidsscore en menselijke beslissing op één plek, met pdf-rapporten voor audits.',
      ogDescription:
        'Audittrail, compliancerapportage en pdf-export voor alle vier de AI-tools van DOME, met elke menselijke beslissing op één plek.',
      twitterDescription: 'Een live audittrail en compliancerapportage voor alle AI-tools van DOME.',
      imageAlt: 'DOME Governance Dashboard: audittrail en compliancerapportage voor alle tools',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow: van factuur tot goedkeuring | DOME',
      description:
        'Van factuur tot goedkeuring: extractie, beleidsregels, een council van AI-modellen en een menselijke goedkeuring, met elke stap vastgelegd.',
      ogDescription:
        'Een gecontroleerde workflow van factuur tot goedkeuring over de DOME-tools heen, met een menselijke goedkeuring en een volledige audittrail.',
      twitterDescription: 'Van factuur tot goedkeuring, met een menselijke goedkeuring en een volledige audittrail.',
      imageAlt: 'DOME Agent Flow: gecontroleerde workflow van factuur tot goedkeuring',
      twitterImageAlt: 'DOME Agent Flow',
    },
    about: {
      name: 'Over DOME',
      title: 'Over DOME: een persoonlijk project over AI met governance | DOME',
      description:
        'Waarom DOME bestaat en wie het bouwt: een persoonlijk project van Francesco Prodomo over AI die binnen gereguleerde processen controleerbaar blijft.',
      ogDescription:
        'Zes tools, vier talen en één audittrail, gebouwd door één persoon.',
      imageAlt: 'Over DOME',
    },
    contact: {
      name: 'Contact',
      title: 'Contact | DOME',
      description:
        'Feedback op de tools, demotoegang tot Agent Flow of een vraag over hoe iets werkt. Ik antwoord binnen twee werkdagen.',
      ogDescription:
        'Schrijf mij over de tools. Ik antwoord binnen twee werkdagen.',
      imageAlt: 'Contact met DOME',
    },
    privacy: {
      name: 'Privacybeleid',
      title: 'Privacybeleid | DOME',
      description:
        'Hoe DOME persoonsgegevens van bezoekers en gebruikers van de tools verzamelt, gebruikt en beschermt, en hoe u uw rechten onder de AVG uitoefent.',
      imageAlt: 'DOME',
    },
    terms: {
      name: 'Gebruiksvoorwaarden',
      title: 'Gebruiksvoorwaarden | DOME',
      description:
        'De voorwaarden voor het gebruik van de DOME-tools: accounts, toegestaan gebruik, verwerking door AI, disclaimers en toepasselijk recht.',
      imageAlt: 'DOME',
    },
    cookies: {
      name: 'Cookiebeleid',
      title: 'Cookiebeleid | DOME',
      description:
        'Elke cookie en elk opslagitem van domelayer.com en de DOME-tools: wat erin staat, hoe lang het blijft en waarom er geen toestemming nodig is.',
      imageAlt: 'DOME',
    },
  },
  media: {
    homeHeroStill: 'Twee collega’s bekijken een goedkeuringsworkflow op een laptop',
    aiProcessAutomationHero:
      'Werkplek op een financiële afdeling, met een scherm met een stroomschema voor goedkeuring en een stapel facturen',
    enterpriseUxHero: 'Een hand plakt een blauwe post-it op een wand met wireframes',
    capabilitiesHero: 'Gang in een serverruimte, verlicht in koel wit en blauw',
    aboutHero: 'Daken van Florence en de koepel van de kathedraal, gezien vanuit een studioraam',
    caseStudiesHero: 'Proceskaarten en een tablet met een dashboard op een lichte houten tafel',
    contactHero: 'Rustige vergaderruimte met een ronde tafel bij een raam met uitzicht op Florence',
    caseProcurementWorkflowRedesign:
      'Inkoopspecialist werkt aan twee schermen met een inkoopapplicatie',
    caseAiComplianceAssessments:
      'Iemand leest gemarkeerde regelgeving op een tablet, naast een ordner',
    caseMetalsTradingPlatform:
      'Magazijn met gestapelde aluminiumbaren en een tablet met koersgrafieken',
    caseFoodTraceabilityPlatform:
      'Hand scant een QR-label op een krat groenten in een distributiecentrum',
    caseTradingAppRedesign: 'Smartphone met een trading-app en koersgrafieken, met een straat op de achtergrond',
    caseAiProcurementPlatform:
      'Drie collega’s voor een groot scherm met een workflowdiagram',
    caseAiTrainingVideos:
      'Kleine videostudio met een camera, een lamp en een monitor met een trainingsmodule',
    francescoProdomo: 'Francesco Prodomo',
    tabletMockup: 'Een DOME-tool op een tablet',
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'Afbeelding gemaakt met AI',
  common: {
    topics: ['Feedback', 'Toegang tot de demo', 'Iets anders'],
    tryTool: 'Probeer een tool',
    watchRun: 'Bekijk de doorloop',
    askDemo: 'Vraag demotoegang aan',
    run: {
      badge: 'Besloten demo',
      diagramLabel: 'De doorloop, op volgorde: binnenkomst, uitlezen, beleidsregels, advies van de council, goedkeurder op naam',
      stages: ['Binnenkomst', 'Uitlezen', 'Regels', 'Council', 'Goedkeurder'],
      steps: [
        { title: 'Er komt een factuur binnen', body: 'Een zelf gehoste workflow pakt de factuur op en start een run die haar van begin tot eind volgt.' },
        { title: 'Uitgelezen en getoetst aan het beleid', body: 'Document Intelligence leest de factuur; een regelengine bepaalt de goedkeuringsroute op basis van bedrag, categorie, leverancier en inkooporder.' },
        { title: 'Eerst een advies, dan beslist een mens', body: 'Onduidelijke facturen en facturen met een hoog bedrag krijgen een beslisnotitie van meerdere AI-modellen. Daarna tekent een goedkeurder op naam af.' },
        { title: 'Eén dossier, stap voor stap te reconstrueren', body: 'Elke stap komt als één tijdlijn in het Governance Dashboard terecht.' },
      ],
    },
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'AI met governance, in de praktijk',
        heading: 'Werkende AI-tools die u kunt controleren.',
        lead: 'DOME laat met werkende tools zien hoe AI binnen gereguleerde processen kan draaien en daarbij controleerbaar, meetbaar en uitlegbaar blijft.',
        note: 'Gratis te proberen. Log in met een magic link, Google of GitHub.',
        scrollCue: 'Scroll',
      },
      method: {
        eyebrow: 'De DOME-methode',
        heading: 'Vier fasen, één audittrail.',
        lead: 'Elke tool dekt één fase, van een proces in kaart brengen tot het uitvoeren ervan. Governance hoort bij elke fase, dus elke run komt in hetzelfde dossier terecht.',
        phaseLabel: 'Fase',
        phases: [
          { title: 'Discover', body: 'Beschrijf een proces in uw eigen woorden en krijg een proceskaart, de betrokken systemen en de hiaten in de governance.' },
          { title: 'Orchestrate', body: 'Leg een lastige vraag voor aan drie modellen die elkaar toetsen, met de redenering vastgelegd.' },
          { title: 'Model', body: 'Haal velden uit documenten en classificeer gegevens, met een betrouwbaarheidsscore bij elk resultaat.' },
          { title: 'Execute', body: 'Breng een factuur van binnenkomst tot een goedkeurder op naam, met elke stap vastgelegd.' },
        ],
        governance: 'Governance Dashboard: één audittrail voor elke fase',
        openDashboard: 'Open het dashboard',
      },
      tools: {
        eyebrow: 'De tools',
        heading: 'Werkende tools, open voor iedereen die inlogt.',
        lead: 'De tools dekken de weg van procesverkenning tot controleerbare uitvoering. Vijf zijn vrij te proberen; Agent Flow draait als besloten demo.',
        all: 'Bekijk alle tools',
      },
      run: {
        eyebrow: 'Bekijk de doorloop',
        heading: 'Een factuur van inbox tot goedkeuring, alles vastgelegd.',
        lead: 'Agent Flow koppelt de tools tot één gecontroleerde workflow. Elke run volgt een echte factuur van binnenkomst tot de medewerker op naam die haar goedkeurt.',
        cta: 'Zo werkt Agent Flow',
      },
      closing: {
        heading: 'Probeer een tool, of bekijk de doorloop.',
        body: 'Vijf tools staan open voor iedereen die inlogt. Agent Flow draait als besloten demo: bekijk hoe het werkt, of vraag toegang aan.',
      },
      hire: 'Wilt u met Francesco samenwerken? Zijn advieswerk staat op',
    },
    dome: {
      hero: {
        eyebrow: 'De tools',
        heading: 'Werkende AI-tools voor gecontroleerde automatisering.',
        lead: 'DOME is een set tools die ik bouw en beheer om te laten zien hoe AI met governance er in de praktijk uitziet. Vijf zijn live; de zesde, Agent Flow, draait als besloten demo.',
        primary: 'Log in en probeer ze',
        secondary: 'Bekijk de doorloop',
        note: 'Gratis. Log in met een magic link, Google of GitHub; geen wachtwoord om te onthouden.',
      },
      blocks: {
        eyebrow: 'De bouwstenen',
        heading: 'Vier tools, elk voor een fase van de methode.',
        openTool: 'Open de tool',
        details: 'Zo werkt het',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Beschrijf een bedrijfsproces in uw eigen woorden en krijg een gestructureerde proceskaart, de betrokken systemen, hiaten in de governance en kansen voor automatisering.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Leg een strategische vraag voor aan drie AI-adviseurs. Ze redeneren eerst los van elkaar, toetsen daarna elkaars standpunten en komen tot een oordeel waarvan de hele redenering is vastgelegd.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Haalt gestructureerde velden uit facturen, contracten en rapporten, met een betrouwbaarheidsscore per veld en 16 governancecontroles.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Upload een spreadsheet en krijg een dashboard met ingebouwde controles. Een model classificeert de gegevens; de grafieken kiest een regelengine, niet het model.' },
        ],
      },
      agentFlow: {
        eyebrow: 'De methode van begin tot eind',
        heading: 'Agent Flow: van factuur tot goedkeuring, elke stap vastgelegd.',
        lead: 'Agent Flow koppelt de bouwstenen tot één gecontroleerde workflow, waarin een medewerker op naam goedkeurt waar het beleid dat eist.',
        cta: 'Zo werkt Agent Flow',
      },
      governance: {
        eyebrow: 'De governancelaag',
        heading: 'Governance Dashboard',
        lead: 'Eén audittrail voor alle tools: elke gebeurtenis, betrouwbaarheidsscore en menselijke beslissing op één plek, met pdf-rapporten voor de interne audit.',
        openDashboard: 'Open het dashboard',
        details: 'Zo werkt het',
      },
      standards: {
        eyebrow: 'Hoe de tools zijn gebouwd',
        heading: 'Governance vanaf het ontwerp, niet achteraf.',
        items: [
          { title: 'Gehost in de EU', body: 'De tools en hun gegevens draaien op infrastructuur binnen de Europese Unie; accounts en opgeslagen werk staan in Frankfurt.' },
          { title: 'Alles wordt vastgelegd', body: 'Elke tool legt vast wat hij deed, hoe zeker hij was en wie het resultaat heeft beoordeeld.' },
          { title: 'Meer dan één AI-leverancier', body: 'Claude, van Anthropic, doet het AI-werk in elke tool; LLM Council voegt OpenAI en Google toe, zodat drie leveranciers elkaar controleren.' },
          { title: 'Openbare code', body: 'De code van elke tool staat openbaar op GitHub, met de tests en de CI.' },
        ],
      },
      closing: {
        heading: 'Probeer ze op uw eigen voorbeeld.',
        body: 'Log in en probeer elk van de vijf tools gratis. Voor Agent Flow vraagt u demotoegang aan, dan regel ik het voor u.',
      },
      hire: 'Wilt u een rondleiding met uw eigen proces? Dat hoort bij de automatiseringsreview op',
    },
    about: {
      hero: {
        eyebrow: 'Over DOME',
        heading: 'Een persoonlijk project over AI met governance.',
        lead: 'Ik bouw DOME om te laten zien dat AI binnen gereguleerde processen kan werken en controleerbaar blijft: elke beslissing herleidbaar, elke uitzondering bij een mens, en de code openbaar.',
      },
      why: {
        eyebrow: 'Het project',
        heading: 'Waarom het bestaat',
        paragraphs: [
          'De meeste AI-demo’s slaan juist over waar een gereguleerd team zich zorgen over maakt: wie wat heeft goedgekeurd, op basis van welk bewijs en volgens welke regel. DOME begint daar.',
          'Elke tool dekt één fase van een methode, van een proces in kaart brengen tot het uitvoeren ervan, en elke run komt in dezelfde audittrail terecht. Agent Flow koppelt ze tot één workflow, met een medewerker op naam die beslist.',
          'Het is ook waar ik leer. Elke tool is een plek om een nieuw model, een agentpatroon of een ontwerpidee te proberen, en bij te houden wat werkte.',
        ],
      },
      facts: [
        { figure: '6', label: 'tools: vijf open voor iedereen die inlogt, één besloten demo' },
        { figure: '4', label: 'talen op deze site: Engels, Italiaans, Nederlands en Duits' },
        { figure: '1', label: 'audittrail die alle tools delen' },
      ],
      builder: {
        eyebrow: 'Wie het bouwt',
        heading: 'Eén persoon, van begin tot eind.',
        name: 'Francesco Prodomo',
        bio: 'Bouwt en beheert DOME: de tools, het designsysteem en de site. Tien jaar ervaring in productontwerp voor enterprise-software en inkoopsystemen.',
        workWith: 'Werk met mij via francescoprodomo.com',
        github: 'De code op GitHub',
        linkedin: 'LinkedIn',
      },
      closing: {
        heading: 'Probeer een tool, of bekijk de doorloop.',
        body: 'Vijf tools staan open voor iedereen die inlogt. Agent Flow draait als besloten demo: bekijk hoe het werkt, of vraag toegang aan.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        heading: 'Schrijf mij over de tools.',
        lead: 'Feedback, demotoegang tot Agent Flow of een vraag over hoe iets werkt. Ik antwoord binnen twee werkdagen.',
      },
      details: {
        heading: 'Andere manieren om mij te bereiken',
        email: 'E-mail',
        pec: 'Gecertificeerde e-mail (PEC)',
        location: 'Gevestigd in',
        locationValue: 'Florence, Italië',
        code: 'Code en issues',
        legal: 'Francesco Prodomo · btw-nummer IT07242670482',
      },
      hire: {
        heading: 'Wilt u mij inhuren?',
        text: 'Mijn advieswerk, en een gesprek plannen, vindt u op',
      },
    },
    tools: {
      back: 'Tools',
      whatItDoes: 'Wat het doet',
      howItWorks: 'Zo werkt het',
      whatItRecords: 'Wat het vastlegt',
      inMethod: 'In de DOME-methode',
      thisPage: 'deze pagina',
      allTools: 'Bekijk alle tools',
      processAnalyzer: {
        phase: 'Discover',
        tagline: 'Elk proces in kaart gebracht en getoetst op hiaten in de governance.',
        lead: 'Beschrijf een bedrijfsproces in uw eigen woorden. U krijgt een gestructureerde proceskaart, de betrokken systemen, waar tijd verloren gaat, de hiaten in de governance en wat u kunt automatiseren.',
        open: 'Open Process Analyzer',
        shot: { alt: 'Een resultaat van Process Analyzer: een goedkeuringsproces voor leveranciersfacturen met zes stappen, vier systemen, de wachttijd en een waarschuwing voor schaduw-IT', caption: 'Een analyse van een factuurproces. Verzonnen bedrijven en gegevens.' },
        features: {
          heading: 'Van een alinea naar een kaart waar u mee verder kunt.',
          items: [
            { figure: 'Stappen en systemen', title: 'Het proces zoals het echt loopt', body: 'Elke stap met wie hem uitvoert, de systemen, de tijd die hij kost en de wachttijd ervoor; knelpunten en schaduw-IT worden gemarkeerd.' },
            { figure: 'Hiaten in governance', title: 'Waar controle ontbreekt', body: 'Functiescheiding, ontbrekende audittrails en goedkeuringslimieten, elk naar ernst en met een aanbeveling.' },
            { figure: 'Automatisering', title: 'Wat u automatiseert, en wat eerst', body: 'Kansen met de tijd die ze besparen, hoe lastig ze zijn en wat er klaar moet staan voordat u begint.' },
          ],
        },
        howItWorks: {
          heading: 'In drie stappen van beschrijving naar proceskaart.',
          steps: [
            { title: 'Beschrijf het proces', body: 'Schrijf op hoe het werk nu gaat: een inkoopproces, een goedkeuringsketen, een onboardingtraject. Geen sjabloon, geen vast formaat.' },
            { title: 'Ontvang een gestructureerde kaart', body: 'Een stroomschema, de betrokken systemen, doorlooptijd en wachttijd per stap, en de plekken waar de governance kwetsbaar is.' },
            { title: 'Beantwoord, verfijn, bewaar', body: 'Waar de beschrijving gaten laat, vraagt de tool door; uw antwoorden verfijnen de kaart. Bewaar hem om later verder te gaan.' },
          ],
        },
        record: { heading: 'Elke analyse laat een governancegebeurtenis achter.', lead: 'Niet uw beschrijving: wat er is geanalyseerd, hoe zeker het model was, welke risico’s het vond en of een mens moet meekijken.' },
        method: { heading: 'Discover: breng in kaart wat er is voordat u automatiseert.', body: 'De kaart, de systemen en de hiaten zijn waar elke volgende fase op bouwt.' },
        closing: { heading: 'Breng een eigen proces in kaart.', body: 'Log in en beschrijf een proces dat u goed kent. Het is gratis.' },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        tagline: 'Een lastige vraag, drie modellen, één oordeel met de redenering vastgelegd.',
        lead: 'Leg een strategische vraag voor aan drie AI-adviseurs. Ze antwoorden eerst los van elkaar, toetsen daarna elkaars standpunten, en de council komt met een oordeel waarin de onenigheid zichtbaar blijft.',
        open: 'Open LLM Council',
        shot: { alt: 'Een oordeel van LLM Council over de vraag of kleine facturen van goedgekeurde leveranciers zonder goedkeuring mogen worden betaald, met de aanbeveling, een afwijkend standpunt en de redenering van elke adviseur', caption: 'Een bewaarde beraadslaging. Verzonnen bedrijven en gegevens.' },
        features: {
          heading: 'Niet de mening van één model.',
          items: [
            { figure: '3 leveranciers', title: 'Claude, Gemini en ChatGPT', body: 'Drie modellen van drie leveranciers, elk met een eigen rol, zodat de blinde vlekken van één model niet beslissen.' },
            { figure: '2 rondes', title: 'Eerst los, dan getoetst', body: 'Elke adviseur antwoordt eerst alleen, leest daarna de anderen en stelt bij; u kunt beide rondes lezen.' },
            { figure: 'Onenigheid blijft', title: 'Een oordeel dat zijn twijfels toont', body: 'Het oordeel komt met een consensusscore, een aanbeveling en de standpunten die het er niet mee eens waren.' },
          ],
        },
        howItWorks: {
          heading: 'Vragen, afwegen, beslissen.',
          steps: [
            { title: 'Stel een strategische vraag', body: 'Een markttoetreding, een risicoafweging, een beleidskeuze. Gewone taal is genoeg.' },
            { title: 'Drie adviseurs wegen af', body: 'Elk redeneert eerst alleen vanuit een eigen invalshoek en toetst daarna de anderen, zodat onenigheid boven komt in plaats van uitgemiddeld te worden.' },
            { title: 'Een vastgelegd oordeel', body: 'Consensus, afwijkende standpunten en aanbeveling, met elke stap van de redenering bewaard voor controle.' },
          ],
        },
        record: { heading: 'Elke beraadslaging wordt vastgelegd.', lead: 'Welke modellen meededen, hoeveel rondes ze nodig hadden, hoe eens ze het waren en of een mens moet beslissen.' },
        method: { heading: 'Orchestrate: geen enkel model beslist alleen.', body: 'Beslissingen die ertoe doen krijgen eerst gestructureerde tegenspraak. Agent Flow gebruikt de council voor zijn lastige facturen.' },
        closing: { heading: 'Leg uw eigen vraag voor aan de council.', body: 'Log in en vraag iets waar u een tweede en derde mening over wilt. Het is gratis.' },
      },
      documentIntelligence: {
        phase: 'Model',
        tagline: 'Gestructureerde gegevens uit elk document, gecontroleerd voordat u ze gebruikt.',
        lead: 'Upload een factuur, een contract of een laboratoriumrapport. Elk veld komt terug met een betrouwbaarheidsscore, 16 governancecontroles signaleren wat een tweede blik nodig heeft, en het resultaat wordt bewaard met zijn audittrail.',
        open: 'Open Document Intelligence',
        shot: { alt: 'Een resultaat van Document Intelligence: een factuur herkend als inkoop, menselijke controle aanbevolen en de uitgelezen velden, elk met een betrouwbaarheidsscore', caption: 'Een bewaarde extractie. Verzonnen bedrijven en gegevens.' },
        features: {
          heading: 'Geen sjablonen, geen overtypen, geen blind vertrouwen.',
          items: [
            { figure: '1 score per veld', title: 'Elke waarde, met haar betrouwbaarheid', body: 'Documenttype, branche, taal en valuta worden herkend; elk veld krijgt een type, een sectie en een score.' },
            { figure: '16 controles', title: 'Eerst regels, dan vertrouwen', body: 'Lage betrouwbaarheid, ontbrekende kritieke waarden, vreemde datums, grote bedragen, persoonsgegevens en dubbele velden, naar ernst gesignaleerd.' },
            { figure: 'Historie en csv', title: 'Bewaard met zijn spoor', body: 'Bewaar een extractie in uw historie, exporteer naar csv en zie elke run terug in het auditlogboek.' },
          ],
        },
        howItWorks: {
          heading: 'Uploaden, uitlezen, valideren.',
          steps: [
            { title: 'Upload of fotografeer een document', body: 'Een pdf of afbeelding, of een foto met de camera van uw telefoon. Facturen, laboratoriumrapporten, energierekeningen, contracten en bankafschriften, zonder sjablonen om in te stellen.' },
            { title: 'Uitlezen en governancecontroles', body: 'Velden komen terug met een betrouwbaarheidsscore, het document krijgt een profiel en de 16 regels signaleren wat een mens moet zien voordat iemand erop vertrouwt.' },
            { title: 'Controleren, bewaren, exporteren', body: 'Bekijk elk veld met sectie, type en score, beoordeel de signalen op ernst en bewaar het daarna in uw historie of exporteer het.' },
          ],
        },
        record: { heading: 'Elke extractie laat een governancegebeurtenis achter.', lead: 'Niet het document zelf: wat er is gevonden, hoe zeker het model was, welke regels afgingen en of een mens moet kijken.' },
        method: { heading: 'Model: gecontroleerde uitkomsten uit ruwe documenten.', body: 'Regels, niet het model, bepalen wat wordt vertrouwd. Dezelfde extractie is de eerste stap van Agent Flow.' },
        closing: { heading: 'Probeer het op een eigen document.', body: 'Log in en upload een factuur, een contract of een foto van een pagina. Het is gratis.' },
      },
      dataIntelligence: {
        phase: 'Model',
        tagline: 'Een spreadsheet erin, een gecontroleerd dashboard eruit.',
        lead: 'Upload een spreadsheet. Een model classificeert de kolommen, een regelengine (niet het model) kiest de grafieken, en u stelt vragen over de gegevens in gewone taal.',
        open: 'Open Data Intelligence',
        shot: { alt: 'Een dashboard van Data Intelligence op basis van een uitgavenbestand: totale uitgaven, aantal facturen, uitgaven per maand en per categorie, elke grafiek met de regel die haar koos', caption: 'Een dashboard uit een uitgavenbestand. Verzonnen bedrijven en gegevens.' },
        features: {
          heading: 'Het model adviseert, de regels beslissen.',
          items: [
            { figure: '7 regels', title: 'Grafieken die u kunt uitleggen', body: 'Elke grafiek toont de regel die haar koos, dus dezelfde gegevens geven altijd hetzelfde dashboard.' },
            { figure: 'Rijen blijven bij u', title: 'Uw rijen gaan niet mee', body: 'Kolomnamen, typen, een paar voorbeeldwaarden en totalen gaan naar het model; de rijen blijven in uw browser, tenzij u het dashboard bewaart.' },
            { figure: 'Vraag het de data', title: 'Vragen in gewone taal', body: 'Vraag welke categorie het hardst groeide of waar een maand opvalt, en krijg een antwoord uit de kolomstatistieken.' },
          ],
        },
        howItWorks: {
          heading: 'Uploaden, classificeren, analyseren.',
          steps: [
            { title: 'Upload een spreadsheet', body: 'Een csv-, xlsx- of xls-bestand. De tool leest kolomnamen, typen, voorbeeldwaarden en totalen.' },
            { title: 'Een gecontroleerd dashboard', body: 'Een taalmodel classificeert elke kolom; daarna kiest een deterministische regelengine de grafiek voor elke relatie in de gegevens.' },
            { title: 'Stel vragen', body: 'Staat het dashboard, stel dan vragen over de gegevens in gewone taal; de antwoorden werken met de kolomsamenvatting.' },
          ],
        },
        record: { heading: 'Elk dashboard laat een governancegebeurtenis achter.', lead: 'Welke regels de grafieken kozen, hoe zeker de classificatie was en of een mens moet controleren.' },
        method: { heading: 'Model: het model classificeert, de regels presenteren.', body: 'Een afgebakende taak met weinig risico voor het model, en de beslissingen die ertoe doen voor een deterministische engine.' },
        closing: { heading: 'Probeer het op een eigen spreadsheet.', body: 'Log in en upload een bestand dat u kent. Het is gratis.' },
      },
      governanceDashboard: {
        phase: 'Govern',
        tagline: 'Eén audittrail voor alle tools.',
        lead: 'Elke gebeurtenis die de tools vastleggen, met haar betrouwbaarheidsscore en de menselijke beslissing, op één plek om te filteren, te bekijken en als pdf te exporteren voor de interne audit.',
        open: 'Open het Governance Dashboard',
        shot: { alt: 'Het logboek van het Governance Dashboard: gebeurtenissen uit Agent Flow, LLM Council, Document Intelligence, Data Intelligence en Process Analyzer, met betrouwbaarheid en beoordelingsstatus', caption: 'Het logboek. Verzonnen bedrijven en gegevens.' },
        features: {
          heading: 'Wat er gebeurde, wie besliste, op welk bewijs.',
          items: [
            { figure: 'Alle tools', title: 'Eén logboek, niet vijf', body: 'Gebeurtenissen van alle tools en van de runs van Agent Flow, te filteren op tool, datum, betrouwbaarheid of beoordeling.' },
            { figure: 'Eén run, één tijdlijn', title: 'Workflows die u kunt reconstrueren', body: 'De runs van Agent Flow zijn gegroepeerd per workflow-id, van binnenkomst tot de persoon die tekende.' },
            { figure: 'Pdf', title: 'Rapporten voor de audit', body: 'Een rapport voor elke periode en combinatie van tools: samenvatting, spreiding van betrouwbaarheid en de volledige tabel met gebeurtenissen.' },
          ],
        },
        howItWorks: {
          heading: 'Van gebruik van de tools naar compliancerapport.',
          steps: [
            { title: 'Gebruik de tools zoals altijd', body: 'Elke run van elke tool legt een governancegebeurtenis vast: de actie, de betrouwbaarheid, de toegepaste regels en of een mens moet beoordelen.' },
            { title: 'Bekijk het spoor', body: 'Het logboek toont de nieuwste bovenaan. Filter, open een gebeurtenis voor het volledige beslisdossier of volg een workflowrun stap voor stap.' },
            { title: 'Exporteer voor de audit', body: 'Maak een pdf-rapport voor een periode en een combinatie van tools, klaar voor de interne audit.' },
          ],
        },
        record: { heading: 'Het leest het dossier, het schrijft er nooit in.', lead: 'Het dashboard toont alleen uw eigen gebeurtenissen, afgedwongen door de database, en bewaart ze twaalf maanden.' },
        method: { heading: 'Govern: de draad door elke fase.', body: 'Discover, Orchestrate, Model en Execute leggen hier hun beslissingen vast, zodat ze later uit te leggen en aan te vechten zijn.' },
        closing: { heading: 'Bekijk uw eigen spoor.', body: 'Log in, gebruik een tool één keer en open het dashboard. Het is gratis.' },
      },
      agentFlow: {
        phase: 'Execute',
        tagline: 'Van factuur tot goedkeuring, elke stap vastgelegd.',
        lead: 'Agent Flow koppelt de DOME-tools tot één gecontroleerde workflow: het leest de factuur, past het beleid toe, vraagt meerdere modellen naar de uitzonderingen en stopt bij een medewerker op naam waar het beleid zegt dat een mens beslist.',
        shot: { alt: 'De goedkeuringswachtrij van Agent Flow: facturen die ter goedkeuring zijn doorgestuurd, elk met het bedrag, de rol die moet goedkeuren en de regels die afgingen', caption: 'De goedkeuringswachtrij. Verzonnen bedrijven en gegevens.' },
        openQueue: 'Open de goedkeuringswachtrij',
        askDemo: 'Vraag demotoegang aan',
        demoNote: 'Een besloten demo op verzonnen facturen. Vraag het aan, dan regel ik toegang.',
        why: {
          eyebrow: 'Waarom het bestaat',
          heading: 'Snelheid zonder het spoor kwijt te raken.',
          paragraphs: [
            'Financeteams willen facturen door AI laten verwerken, maar auditors moeten weten wie wat heeft goedgekeurd, op basis van welk bewijs en volgens welke regel. De meeste automatisering levert snelheid op en raakt dat spoor kwijt.',
            'Agent Flow laat zien dat automatisering en een volledige audittrail uit één systeem kunnen komen.',
          ],
          outcomes: [
            { title: 'Elke beslissing herleidbaar', body: 'Tot de invoer, de toegepaste regels, de beoordelingen van de modellen en de persoon die goedkeurde.' },
            { title: 'Een mens bij elke uitzondering', body: 'Het beleid bepaalt welke facturen een mens nodig hebben, en de workflow stopt daar, zo ontworpen.' },
            { title: 'Eén spoor, geen vijf logboeken', body: 'Eén workflow-id verbindt de extractie, de regels, de council en de goedkeuring.' },
          ],
        },
        run: {
          eyebrow: 'Zo verloopt een run',
          heading: 'Vijf fasen, één workflow-id.',
          lead: 'Elke factuur krijgt bij binnenkomst één id, en elke tool die haar raakt schrijft in hetzelfde dossier.',
          stages: [
            { tool: 'Binnenkomst', title: 'Er komt een factuur binnen', body: 'Een leverancier mailt haar naar de crediteureninbox, of ze wordt via een formulier geüpload. Een zelf gehoste workflow pakt haar op en start een gecontroleerde run.' },
            { tool: 'Document Intelligence', title: 'Uitgelezen en gescoord', body: 'Elk veld komt terug met een betrouwbaarheidsscore; de extractie doet dezelfde 16 governancecontroles als de losse tool.' },
            { tool: 'Regelengine', title: 'Getoetst aan het beleid', body: 'Bedragklasse, categorie, land en btw, goedgekeurde leveranciers, match met de inkooporder, valuta en dubbele facturen bepalen de goedkeuringsroute.' },
            { tool: 'LLM Council', title: 'Een advies over de uitzonderingen', body: 'Onduidelijke facturen en facturen met een hoog bedrag krijgen een beslisnotitie van meerdere modellen, met waar ze het eens zijn en waar niet.' },
            { tool: 'Goedkeurder op naam', title: 'Een mens tekent', body: 'De goedkeurder met de rol die het beleid vraagt, keurt goed of af, met een notitie. Facturen met weinig risico worden volgens beleid automatisch goedgekeurd.' },
          ],
        },
        record: {
          heading: 'Eén dossier dat u kunt reconstrueren.',
          lead: 'Elke stap komt als één tijdlijn in het Governance Dashboard: wat er werd gelezen, welke regels afgingen, wat de modellen zeiden en wie tekende.',
          cta: 'Zo werkt het Governance Dashboard',
          events: [
            { what: 'Run gestart vanuit e-mail', review: 'Gelogd' },
            { what: '15 velden, 91% betrouwbaar', review: 'Gecontroleerd' },
            { what: 'Goedkeuring door financieel manager nodig', review: 'Regel' },
            { what: 'Goedkeuren na controle van de order', review: 'Advies' },
            { what: 'Goedgekeurd, met een notitie', review: 'Mens' },
          ],
        },
        method: { heading: 'Execute: de methode van begin tot eind.', body: 'Agent Flow is gebouwd uit de andere tools: Document Intelligence leest, LLM Council adviseert, het Governance Dashboard houdt het dossier bij.' },
        closing: { heading: 'Zie het werken op uw eigen factuur.', body: 'Vraag demotoegang aan, dan regel ik het voor u, of begin met de tools waaruit het is opgebouwd.' },
      },
    },
    privacy: {
      back: '← Terug naar domelayer.com',
      updated: 'Laatst bijgewerkt: november 2026',
      title: 'Privacybeleid',
      appliesTo:
        'Van toepassing op: domelayer.com en alle subdomeinen (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      binding: {
        note: 'Dit is een vertaling. Alleen de Engelse versie van dit privacybeleid is juridisch bindend; bij verschillen gaat de Engelse tekst voor.',
        link: 'Lees de Engelse versie',
      },
      sections: [
        {
          heading: 'Wie we zijn',
          blocks: [
            { p: 'Dome is een persoonlijk project van Francesco Prodomo, zelfstandig professional met een Italiaans btw-nummer (IT07242670482). Waar dit beleid spreekt van ‘Dome’, ‘we’ of ‘ons’, wordt Francesco Prodomo bedoeld.' },
            { p: 'Vestiging: Florence, Italië\nContact voor privacyzaken: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo is de verwerkingsverantwoordelijke voor alle persoonsgegevens die via domelayer.com en de bijbehorende tools worden verzameld.' },
          ],
        },
        {
          heading: 'Waarover dit beleid gaat',
          blocks: [
            { p: 'Dit beleid legt uit welke persoonsgegevens we verzamelen wanneer u domelayer.com bezoekt of zich registreert voor de AI-tools van Dome, waarom we ze verzamelen, hoe lang we ze bewaren en welke rechten u erover hebt.' },
            { p: 'Dit beleid geldt uitsluitend voor domelayer.com en de portfoliotools van Dome. Het geldt niet voor adviesopdrachten waarin Francesco Prodomo AI-systemen of software voor klanten ontwerpt en implementeert: voor die opdrachten gelden afzonderlijke contracten en verwerkersovereenkomsten die per project worden afgesproken.' },
            { p: 'We verkopen geen persoonsgegevens. We gebruiken geen persoonsgegevens voor advertenties.' },
          ],
        },
        {
          heading: 'Welke gegevens we verzamelen en waarom',
          blocks: [
            { h3: 'Websitebezoekers (geen account nodig)' },
            { p: 'Wanneer u domelayer.com bezoekt, plaatsen we geen analytische cookies of trackingscripts van derden; we tellen bezoeken alleen in totalen, zonder cookies (zie hieronder). Er kunnen twee functionele cookies worden geplaatst: `dome-theme` onthoudt of u het lichte of donkere thema kiest en `dome_locale` onthoudt de taal die u hebt gekozen. Geen van beide bevat persoonsgegevens of wordt gebruikt voor tracking. De volledige lijst, inclusief wat uw browser opslaat, staat in ons [cookiebeleid](cookies).' },
            { basis: 'Rechtsgrond: gerechtvaardigd belang (art. 6 lid 1 sub f AVG), voor het opslaan van een weergavevoorkeur die u hebt gekozen.' },
            { p: 'Zoals bij elke website houden onze hostingproviders standaard serverlogs bij, inclusief uw IP-adres, voor de beveiliging en om de dienst draaiende te houden. Als een pagina een fout geeft, ontvangt onze foutmonitoring een technisch rapport (bijvoorbeeld het browsertype en het adres van de pagina). Foutrapporten bevatten niet uw naam of e-mailadres.' },
            { basis: 'Rechtsgrond: gerechtvaardigd belang (art. 6 lid 1 sub f AVG), voor de beveiliging en betrouwbaarheid van de website.' },
            { h3: 'Contactformulier' },
            { p: 'Als u ons schrijft via het contactformulier of per e-mail, ontvangen we uw naam, uw e-mailadres en uw bericht (via het formulier ook het onderwerp), en gebruiken we die alleen om te antwoorden. Om het formulier tegen misbruik te beschermen, telt onze hostingprovider het aantal verzendingen per IP-adres over één minuut; die telling wordt niet opgeslagen.' },
            { basis: 'Rechtsgrond: maatregelen op uw verzoek voorafgaand aan het sluiten van een overeenkomst (art. 6 lid 1 sub b AVG), en gerechtvaardigd belang (art. 6 lid 1 sub f AVG) bij het beantwoorden van zakelijke vragen en het beschermen van het formulier tegen misbruik.' },
            { p: '**Meting in totalen.** We tellen bezoeken aan domelayer.com met Umami, zonder cookies en zonder uw IP-adres op te slaan; dat wordt alleen gebruikt om een geschatte locatie af te leiden en een bezoekerscode die elke maand verandert. We zien totalen, nooit individuen. Details staan in ons [cookiebeleid](cookies). We zullen nooit analysediensten met cookies of advertentietrackers invoeren zonder dit beleid aan te passen en, waar de wet dat vereist, eerst uw toestemming te vragen.' },
            { basis: 'Rechtsgrond: gerechtvaardigd belang (art. 6 lid 1 sub f AVG), om in totalen te begrijpen hoe de website wordt gebruikt.' },
            { h3: 'Geregistreerde gebruikers van de tools' },
            { p: 'Wanneer u zich registreert voor de AI-tools van Dome, verzamelen en verwerken we de volgende gegevens:' },
            { label: 'E-mailadres' },
            { p: 'Verzameld bij uw registratie, rechtstreeks per e-mail (magic link) of via uw Google- of GitHub-account. Gebruikt om uw account te verifiëren. Met uw uitdrukkelijke toestemming ook gebruikt om u productupdates of commerciële berichten van Dome te sturen.' },
            { label: 'Inloggen met Google of GitHub' },
            { p: 'Als u ervoor kiest in te loggen met Google of GitHub, deelt die aanbieder met ons uw e-mailadres, uw naam, een link naar uw profielfoto en een account-ID. We gebruiken die alleen om uw account aan te maken en te herkennen. Google en GitHub verwerken uw inlog onder hun eigen privacybeleid, als zelfstandige verwerkingsverantwoordelijken. We zien nooit uw wachtwoord van Google of GitHub.' },
            { basis: 'Rechtsgrond: uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG) voor de verificatie, inclusief inloggen met Google of GitHub. Toestemming (art. 6 lid 1 sub a AVG) voor commerciële berichten.' },
            { label: 'Tijdstippen van inloggen en sessiemetadata' },
            { p: 'Elke keer dat u inlogt, leggen we het tijdstip en de inlogmethode vast, als gangbare beveiligingsmaatregel.' },
            { basis: 'Rechtsgrond: gerechtvaardigd belang (art. 6 lid 1 sub f AVG), voor beveiliging, fraudepreventie en de integriteit van de dienst.' },
            { label: 'Gegevens die u in de tools invoert' },
            { p: 'Wanneer u een tool van Dome gebruikt, kunt u bestanden uploaden, tekst invoeren of AI-functies gebruiken. We verzamelen en kunnen gegevens opslaan die uit dit gebruik voortkomen om de dienst te leveren, zoals de sessiestatus, analyseresultaten, opgeslagen resultaten, metadata van het governancelogboek en andere gestructureerde gegevens die nodig zijn om de functies van de tool te leveren.' },
            { p: 'We verwerken deze gegevens om de dienst te laten werken. We gebruiken ze niet om AI-modellen te trainen, delen ze niet met derden voor commerciële doeleinden en bekijken ze alleen om technische ondersteuning te geven als u daarom vraagt.' },
            { p: 'Welke gegevens precies worden bewaard, hangt af van de tool en de functies die u gebruikt. Alle opgeslagen gegevens zijn aan uw account gekoppeld, beschermd met beveiliging op rijniveau en alleen toegankelijk voor uw ingelogde sessie. U kunt uw opgeslagen gegevens op elk moment in de tool zelf verwijderen.' },
            { basis: 'Rechtsgrond: uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG), voor het leveren van de functies waarom u hebt gevraagd.' },
            { label: 'Metadata van het governancelogboek' },
            { p: 'Elke actie in een tool van Dome maakt een governancerecord aan met: een hash van uw invoer (niet de invoer zelf), het type actie, een tijdstempel, welke governanceregels zijn toegepast en geactiveerd, een korte samenvatting van het resultaat en technische metadata zoals betrouwbaarheidsscores. Dit metadatarecord is de audittrail waarop de governance-architectuur van Dome rust.' },
            { basis: 'Rechtsgrond: gerechtvaardigd belang (art. 6 lid 1 sub f AVG), voor de integriteit en kwaliteitsborging van de dienst.' },
            { label: 'Vastlegging van toestemming voor commerciële berichten' },
            { p: 'Als u bij de registratie toestemming geeft voor commerciële berichten, bewaren we een vastlegging van die toestemming: de datum, uw keuze en de versie van de toestemmingstekst die u te zien kreeg.' },
            { basis: 'Rechtsgrond: wettelijke verplichting (art. 6 lid 1 sub c AVG), voor het documenteren van toestemming zoals de AVG vereist.' },
          ],
        },
        {
          heading: 'Wat we niet doen',
          blocks: [
            {
              list: [
                'We verzamelen of bewaren geen wachtwoorden. U logt in met een magic link die naar uw e-mail wordt gestuurd, of via uw Google- of GitHub-account.',
                'We verzamelen geen betaalgegevens. Alle tools van Dome zijn gratis te gebruiken.',
                'We gebruiken uw gegevens niet om AI-modellen te trainen.',
                'We delen uw gegevens niet met derden voor commerciële of advertentiedoeleinden.',
                'We verzamelen niet bewust gegevens van minderjarigen onder de 18 jaar.',
              ],
            },
          ],
        },
        {
          heading: 'Met wie we uw gegevens delen',
          blocks: [
            { p: 'We gebruiken de volgende externe dienstverleners om Dome te laten werken. Elk van hen treedt op als verwerker onder een verwerkersovereenkomst:' },
            { p: '**Supabase Inc.**: database en verificatie. Gegevens worden opgeslagen in de Europese Unie (Frankfurt, Duitsland: eu-central-1). supabase.com/privacy' },
            { p: '**Cloudflare Inc.**: hosting van deze website en van de tools van Dome, inclusief het contactformulier en de bescherming tegen misbruik, en het doorsturen van e-mail aan onze adressen op domelayer.com. cloudflare.com/privacypolicy' },
            { p: '**Railway Corp.**: hosting van de backenddiensten achter de tools van Dome. railway.com/legal/privacy' },
            { p: '**Resend Inc.**: verzending van e-mail. Gebruikt om magic links te versturen, om berichten via het contactformulier bij ons af te leveren, om onze antwoorden op uw berichten te versturen en, met uw toestemming, voor productberichten. resend.com/legal/privacy-policy' },
            { p: '**Functional Software Inc. (Sentry)**: foutmonitoring voor de website en de tools. Foutgegevens worden opgeslagen in de Europese Unie (Duitsland). sentry.io/privacy' },
            { p: '**Umami Software, Inc.**: meting in totalen van bezoeken aan deze website, zonder cookies. Gegevens gehost in de Europese Unie (Duitsland). umami.is/privacy' },
            { h3: 'Onze mailbox' },
            { p: 'Berichten die u ons stuurt, via het contactformulier of per e-mail, komen binnen in een mailbox van Google (Gmail), waar we ze lezen en beantwoorden. Google verwerkt ze onder zijn eigen voorwaarden en privacybeleid. policies.google.com/privacy' },
            { h3: 'Verwerking door AI' },
            { p: 'Wanneer u een tool van Dome gebruikt, wordt uw invoer naar een AI-aanbieder gestuurd om een antwoord te genereren. Elke aanbieder verwerkt die onder zijn API-voorwaarden voor gegevensverwerking en gebruikt API-gegevens standaard niet om zijn modellen te trainen.' },
            { p: '**Anthropic PBC**: alle tools van Dome. anthropic.com/privacy' },
            { p: '**OpenAI**: alleen LLM Council, als een van de drie onafhankelijke adviseurs. openai.com/policies/privacy-policy' },
            { p: '**Google (Gemini API)**: alleen LLM Council, als een van de drie onafhankelijke adviseurs. policies.google.com/privacy' },
            { p: 'We gebruiken geen advertentienetwerken, trackers van sociale media of databrokers.' },
          ],
        },
        {
          heading: 'Doorgifte buiten de EU',
          blocks: [
            { p: 'Uw account en de gegevens die u in de tools opslaat, worden binnen de Europese Unie bewaard, op infrastructuur van Supabase in Frankfurt. Gegevens van de foutmonitoring worden ook in de Europese Unie bewaard.' },
            { p: 'Cloudflare, Railway, Resend, Umami, Anthropic, OpenAI en Google zijn gevestigd in de Verenigde Staten of verwerken daar gegevens. Doorgifte aan hen berust op het EU-VS Data Privacy Framework als de aanbieder daaronder is gecertificeerd, en anders op modelcontractbepalingen (SCC’s) op grond van artikel 46 AVG.' },
            { p: '**Gebruikers in het Verenigd Koninkrijk:** doorgifte tussen het Verenigd Koninkrijk en de EU valt onder het adequaatheidsbesluit tussen het VK en de EU dat nu van kracht is. Gebruikers in het VK kunnen klachten indienen bij het Information Commissioner’s Office (ico.org.uk).' },
          ],
        },
        {
          heading: 'Hoe lang we uw gegevens bewaren',
          blocks: [
            {
              table: {
                head: ['Gegevens', 'Bewaartermijn'],
                rows: [
                  ['E-mailadres en accountgegevens', 'Tot u vraagt uw account te verwijderen'],
                  ['Tijdstippen van inloggen', 'Steeds de laatste 12 maanden'],
                  ['Sessiegegevens en opgeslagen resultaten van de tools', 'Tot u ze verwijdert, of tot uw account wordt verwijderd'],
                  ['Metadata van het governancelogboek', 'Steeds de laatste 12 maanden'],
                  ['Berichten die u ons stuurt (contactformulier of e-mail)', 'Tot 24 maanden na ons laatste contact'],
                  ['Teller voor het contactformulier (IP-adres)', '1 minuut, niet opgeslagen'],
                  ['Websitemeting (Umami): paginaweergaven en gebeurtenissen, zonder IP-adres', '6 maanden'],
                  ['Server- en foutlogs', 'Tot 90 dagen'],
                  ['Vastlegging van toestemming voor commerciële berichten', 'Zolang het account bestaat, plus 3 jaar na verwijdering'],
                ],
              },
            },
            { p: 'Als uw account wordt verwijderd, wissen we uw persoonsgegevens binnen 30 dagen, behalve waar de wet bewaring verplicht stelt.' },
          ],
        },
        {
          heading: 'Uw rechten',
          blocks: [
            { p: 'Om een recht uit te oefenen, mailt u naar [privacy@domelayer.com](mailto:privacy@domelayer.com) vanaf het adres dat aan uw account is gekoppeld. We reageren binnen 30 dagen.' },
            {
              list: [
                '**Inzage**: een kopie vragen van alle persoonsgegevens die we over u hebben.',
                '**Rectificatie**: ons vragen onjuiste gegevens te corrigeren.',
                '**Wissing**: ons vragen uw gegevens binnen 30 dagen te verwijderen.',
                '**Beperking**: ons vragen de verwerking op te schorten zolang een geschil loopt.',
                '**Overdraagbaarheid**: uw gegevens opvragen in een gestructureerd, machineleesbaar formaat.',
                '**Bezwaar**: bezwaar maken tegen verwerking op grond van gerechtvaardigd belang.',
                '**Toestemming intrekken**: uw toestemming voor commerciële berichten op elk moment intrekken via de afmeldlink in elke e-mail of door contact op te nemen met privacy@domelayer.com.',
              ],
            },
            { p: '**Klacht**: een klacht indienen bij een toezichthoudende autoriteit:' },
            {
              list: [
                'Italië: Garante per la Protezione dei Dati Personali (garante.privacy.it)',
                'Verenigd Koninkrijk: Information Commissioner’s Office (ico.org.uk)',
                'U kunt ook contact opnemen met de toezichthouder in het land waar u woont.',
              ],
            },
          ],
        },
        {
          heading: 'Cookies',
          blocks: [
            { p: 'Elke cookie en elke opslag in de browser die we gebruiken, staat met doel en duur in ons [cookiebeleid](cookies). Kort gezegd: één cookie houdt u ingelogd, twee onthouden uw thema en taal, en geen enkele wordt gebruikt voor tracking of advertenties. Tijdens het surfen worden geen cookies van derden geplaatst.' },
          ],
        },
        {
          heading: 'Beveiliging',
          blocks: [
            { p: 'We nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen, waaronder beveiliging op rijniveau voor alle databasetabellen, versleuteling via HTTPS tijdens transport en inloggen zonder wachtwoord (magic link, Google of GitHub), zonder opgeslagen wachtwoorden.' },
            { p: 'Geen enkel systeem is volledig veilig. Als u denkt dat uw account is gecompromitteerd, neem dan direct contact op via [privacy@domelayer.com](mailto:privacy@domelayer.com).' },
          ],
        },
        {
          heading: 'Wijzigingen in dit beleid',
          blocks: [
            { p: 'We kunnen dit beleid bijwerken als onze werkwijze of wettelijke eisen veranderen. Bij wezenlijke wijzigingen informeren we geregistreerde gebruikers ten minste 30 dagen voordat de wijzigingen ingaan per e-mail. De datum ‘laatst bijgewerkt’ bovenaan deze pagina geeft de huidige versie aan.' },
          ],
        },
        {
          heading: 'Contact',
          blocks: [
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: 'Gebruiksvoorwaarden →',
    },
    cookies: {
      back: '← Terug naar domelayer.com',
      updated: 'Laatst bijgewerkt: november 2026',
      title: 'Cookiebeleid',
      appliesTo:
        'Van toepassing op: domelayer.com en alle subdomeinen (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      binding: {
        note: 'Dit is een vertaling. Alleen de Engelse versie van dit cookiebeleid is juridisch bindend; bij verschillen gaat de Engelse tekst voor.',
        link: 'Lees de Engelse versie',
      },
      sections: [
        {
          heading: 'In het kort',
          blocks: [
            { p: 'We gebruiken drie cookies en een paar items in de opslag van uw browser. Ze worden allemaal door ons geplaatst, op ons eigen domein, om een van drie redenen: om u ingelogd te houden, om een keuze te onthouden die u hebt gemaakt, of om een pagina te laten werken. Geen enkele wordt gebruikt om u te volgen, een profiel van u op te bouwen of u advertenties te tonen, en geen enkele wordt met anderen gedeeld.' },
            { p: 'Daarom heeft deze site geen toestemmingsbanner. Cookies en opslag van deze soort zijn technisch: volgens artikel 122 van de Italiaanse privacywet (Codice in materia di protezione dei dati personali) en de cookierichtsnoeren van de Italiaanse toezichthouder, de Garante, van juni 2021 is er geen toestemming voor nodig, alleen deze informatie. Onze meting van bezoeken (hieronder) gebruikt geen cookies en geen browseropslag, en is zo ingericht dat ze voldoet aan de voorwaarden waaronder de Garante analysediensten gelijkstelt aan technische cookies.' },
            { p: 'Bij een eerste bezoek wordt er niets geplaatst. Alles hieronder verschijnt pas nadat u iets doet: inloggen, van thema of taal wisselen, de cookiemelding sluiten of een tool gebruiken. Er is één uitzondering: als uw browser de voorkeur geeft aan een andere taal waarin deze site is gepubliceerd en u een Engelse pagina opent, brengen we u één keer naar de pagina in die taal en plaatsen we `dome_locale`, zodat we dat niet nog eens doen.' },
          ],
        },
        {
          heading: 'Cookies',
          blocks: [
            {
              table: {
                head: ['Cookie', 'Wat het doet', 'Duur', 'Soort'],
                rows: [
                  ['`dome_auth_token`', 'Houdt u ingelogd op domelayer.com en in de tools van Dome. Geplaatst wanneer u inlogt, voor elk subdomein van domelayer.com.', 'Tot uw inlog verloopt, maximaal 8 uur', 'Strikt noodzakelijk'],
                  ['`dome-theme`', 'Onthoudt of u het lichte of het donkere thema hebt gekozen, op de site en in de tools. Geplaatst wanneer u van thema wisselt.', '1 jaar', 'Functioneel: een voorkeur die u instelt'],
                  ['`dome_locale`', 'Onthoudt uw taal. Geplaatst wanneer u van taal wisselt, of één keer wanneer we een browser die een andere taal van de site verkiest naar die versie brengen. Alleen domelayer.com.', '1 jaar', 'Functioneel: een voorkeur die u instelt'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Opslag in de browser',
          blocks: [
            { p: 'Sommige informatie wordt bewaard in de lokale opslag van uw browser, die blijft tot u ze wist, of in de sessieopslag, die blijft tot u het tabblad sluit. Alleen de pagina die een item heeft geschreven, leest het terug.' },
            {
              table: {
                head: ['Item', 'Waar', 'Wat erin staat', 'Hoe lang'],
                rows: [
                  ['`dome-theme`', 'Lokale opslag, op domelayer.com en in elke tool', 'Uw themakeuze, een kopie van de cookie met dezelfde naam', 'Tot u het wist'],
                  ['`dome-cookie-notice-dismissed`', 'Lokale opslag, domelayer.com', 'Dat u de cookiemelding hebt gesloten, zodat die niet terugkomt', 'Tot u het wist'],
                  ['`dome_pending_consent`', 'Lokale opslag, domelayer.com', 'Bij registratie: de versie van de voorwaarden die u hebt aanvaard en uw keuze over productupdates, tot die in uw account zijn opgeslagen', 'Tot de registratie is afgerond'],
                  ['`dome_consent_accepted`', 'Lokale opslag, domelayer.com', 'De versie van de voorwaarden die u hebt aanvaard, zodat dit apparaat het u niet opnieuw vraagt', 'Tot u het wist'],
                  ['`sb-…-auth-token`, `sb-…-code-verifier`', 'Lokale opslag, domelayer.com', 'Een tijdelijk record dat onze inlogprovider, Supabase, aanmaakt terwijl u inlogt', 'Verwijderd zodra u bent ingelogd, meestal binnen enkele minuten'],
                  ['`dome_auth_redirect`', 'Sessieopslag, domelayer.com', 'De toolpagina waar u na het inloggen naar terugkeert', 'Tot u het tabblad sluit'],
                  ['`react-router-scroll-positions`', 'Sessieopslag, domelayer.com', 'Waar u op elke pagina was, zodat Terug u naar dezelfde plek brengt', 'Tot u het tabblad sluit'],
                  ['`dome_doc_result_…`', 'Sessieopslag, document-intelligence.domelayer.com', 'Het resultaat van uw laatste extractie en de bestandsnaam, voor de resultaatpagina', 'Tot u het tabblad sluit'],
                  ['`dome_session_…`', 'Sessieopslag, data-intelligence.domelayer.com', 'De rijen van de spreadsheet die u hebt geüpload en de analyse ervan, zodat het dashboard opent zonder de server opnieuw te raadplegen', 'Tot u het tabblad sluit'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Meting',
          blocks: [
            { p: 'We meten bezoeken aan domelayer.com in totalen met **Umami** (Umami Software, Inc.), met de gegevens gehost in de Europese Unie. Umami plaatst geen cookies en slaat niets op in uw browser. Het script wordt vanaf ons eigen domein geleverd en stuurt één kort bericht per paginaweergave, en één wanneer u een bericht verstuurt, een link naar de contactpagina volgt, begint met inloggen of van taal wisselt.' },
            { p: 'Uw IP-adres wordt niet opgeslagen. Umami gebruikt het alleen om een geschatte locatie te bepalen (land, regio en stad) en om bezoeken van dezelfde browser binnen een kalendermaand te herkennen, via een code die niet terug te rekenen is en elke maand verandert. We zien totalen, nooit individuen: hoeveel bezoeken er zijn, waar ze vandaan komen, welke pagina’s en diensten mensen interesseren en hoeveel berichten daarop volgen. We gebruiken dit niet om een profiel van u op te bouwen, combineren het niet met andere gegevens en delen het niet. Umami bewaart het 6 maanden.' },
            { p: 'Als uw browser Do Not Track verstuurt, wordt er niets gemeten. De inlogpagina’s worden gemeld zonder hun adresparameters. De tools van Dome worden niet gemeten: wat we daar tellen, zijn de runs die elke tool in zijn audittrail vastlegt, zoals beschreven in het [privacybeleid](privacy).' },
          ],
        },
        {
          heading: 'Andere diensten',
          blocks: [
            { p: '**Cloudflare**, dat deze website host, plaatst er geen cookies op. Om het contactformulier tegen misbruik te beschermen, telt het het aantal verzendingen per IP-adres over één minuut; die telling wordt niet opgeslagen.' },
            { p: '**Sentry**, onze foutmonitoring (EU-regio), stuurt een technisch rapport als een pagina een fout geeft. Sentry plaatst geen cookies en slaat niets op in uw browser.' },
            { p: '**Lettertypen** worden geleverd vanaf onze eigen domeinen. Geen enkele pagina laadt iets van Google Fonts.' },
          ],
        },
        {
          heading: 'Uw keuzes',
          blocks: [
            { p: 'U kunt cookies en browseropslag op elk moment verwijderen in de instellingen van uw browser, en ze helemaal blokkeren. Als u `dome_auth_token` verwijdert, wordt u uitgelogd; als u een van de andere verwijdert, worden alleen uw thema, uw taal, de cookiemelding of de pagina waar u was teruggezet.' },
          ],
        },
        {
          heading: 'Wijzigingen en contact',
          blocks: [
            { p: 'We werken deze pagina bij telkens als we een cookie of opslagitem toevoegen, wijzigen of verwijderen, en voordat een nieuw item in gebruik wordt genomen. De datum bovenaan geeft de huidige versie aan.' },
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: 'Privacybeleid →',
    },
    terms: {
      back: '← Terug naar domelayer.com',
      updated: 'Laatst bijgewerkt: oktober 2026',
      title: 'Gebruiksvoorwaarden',
      appliesTo:
        'Van toepassing op: analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com',
      binding: {
        note: 'Dit is een vertaling. Alleen de Engelse versie van deze gebruiksvoorwaarden is juridisch bindend; bij verschillen gaat de Engelse tekst voor.',
        link: 'Lees de Engelse versie',
      },
      sections: [
        {
          heading: 'Wie deze tools aanbiedt',
          blocks: [
            { p: 'De AI-tools van Dome zijn een persoonlijk project, geëxploiteerd door Francesco Prodomo, zelfstandig professional met een Italiaans btw-nummer (IT07242670482).' },
            { p: 'Vestiging: Florence, Italië\nContact: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'Waarover deze voorwaarden gaan',
          blocks: [
            { p: 'Door u te registreren voor en gebruik te maken van een AI-tool van Dome, gaat u akkoord met deze voorwaarden. Lees ze voordat u zich registreert. Als u er niet mee akkoord gaat, gebruik de tools dan niet.' },
            { p: 'Deze voorwaarden gelden voor de portfoliotools van Dome op de hierboven genoemde subdomeinen. Ze gelden niet voor adviesopdrachten waarin Francesco Prodomo AI-systemen ontwerpt of implementeert voor andere organisaties: daarvoor gelden afzonderlijke projectovereenkomsten.' },
            { p: 'Deze voorwaarden gelden naast ons [privacybeleid](privacy), dat door verwijzing deel uitmaakt van deze voorwaarden.' },
          ],
        },
        {
          heading: 'De tools',
          blocks: [
            { p: 'Dome biedt een reeks gratis tools met AI-ondersteuning om concepten van operationele AI met governance te verkennen, waaronder procesanalyse, document-intelligence, data-intelligence en bijbehorende demonstraties.' },
            { p: 'De tools worden kosteloos en in de huidige staat (‘as is’) aangeboden, voor demonstratie en evaluatie.' },
          ],
        },
        {
          heading: 'Uw account',
          blocks: [
            { p: 'U registreert zich met uw e-mailadres, door een magic link aan te vragen of door in te loggen met uw Google- of GitHub-account. Een wachtwoord voor Dome is niet nodig en wordt niet opgeslagen. U bent zelf verantwoordelijk voor de beveiliging van uw e-mail-, Google- of GitHub-account.' },
            { p: 'U mag per e-mailadres maar één account registreren. U mag uw account niet delen en u mag zich niet registreren namens een ander zonder diens medeweten en toestemming.' },
            { p: 'We behouden ons het recht voor accounts op te schorten of te beëindigen die deze voorwaarden schenden, worden gebruikt op een manier die anderen schaadt, of de integriteit van de dienst in gevaar brengen.' },
          ],
        },
        {
          heading: 'Aanvaardbaar gebruik',
          blocks: [
            { p: 'U gaat ermee akkoord de tools van Dome alleen te gebruiken voor rechtmatige doeleinden en in overeenstemming met deze voorwaarden.' },
            { label: 'Het is niet toegestaan:' },
            {
              list: [
                'Bestanden te uploaden of inhoud in te voeren die u wettelijk niet mag verwerken. Als inhoud persoonsgegevens van derden bevat, bent u ervoor verantwoordelijk dat u een rechtsgrond hebt onder de AVG of ander toepasselijk recht om die gegevens te verwerken met een AI-dienst van een derde.',
                'Inhoud te uploaden met bijzondere categorieën van persoonsgegevens (gezondheidsgegevens, biometrische gegevens, politieke opvattingen, religieuze overtuigingen of vergelijkbare gegevens), tenzij u een gedocumenteerde rechtsgrond hebt en, waar nodig, uitdrukkelijke toestemming van de betrokkenen.',
                'Te proberen de onderliggende AI-systemen te reverse-engineeren, er modelgewichten uit te halen of ze systematisch af te tasten.',
                'De tools te gebruiken om inhoud te genereren die onrechtmatig, lasterlijk, frauduleus of schadelijk voor anderen is.',
                'Geautomatiseerde middelen te gebruiken om de tools op een schaal te benaderen die de beschikbaarheid van de dienst verstoort.',
                'Te proberen toegang te krijgen tot de gegevens van een andere gebruiker of de verificatie te omzeilen.',
              ],
            },
          ],
        },
        {
          heading: 'Gegevens en verwerking door AI',
          blocks: [
            { p: 'Wanneer u een tool van Dome gebruikt, wordt de inhoud die u invoert ter verwerking naar een AI-model gestuurd: Anthropic voor alle tools, en daarnaast OpenAI en Google voor LLM Council. Dome kan gegevens opslaan die voortkomen uit uw gebruik van de tools, zoals de sessiestatus, opgeslagen analyses en governancemetadata, om de dienst te leveren. Wat er precies wordt verzameld, hoe het wordt gebruikt en hoe lang het wordt bewaard, staat in het [privacybeleid](privacy).' },
            { p: 'U blijft volledig eigenaar van alle inhoud die u invoert en van alle resultaten die daaruit worden gegenereerd. Dome claimt geen licentie of rechten op uw invoer of resultaten.' },
            { p: 'U bent ervoor verantwoordelijk dat de inhoud die u invoert geen vertrouwelijke informatie van derden bevat die u niet met een externe AI-dienst mag delen.' },
          ],
        },
        {
          heading: 'Resultaten van AI: belangrijke disclaimer',
          blocks: [
            { warning: '**Resultaten van AI zijn geen professioneel advies.** Niets wat de tools van Dome opleveren, is juridisch, financieel, inkoop-, compliance-, operationeel of enig ander professioneel advies. Handel niet op basis van door AI gegenereerde resultaten zonder onafhankelijke controle door een gekwalificeerde professional.' },
            { p: 'De tools van Dome gebruiken grote taalmodellen om analyses, samenvattingen, classificaties en aanbevelingen te genereren. Deze resultaten worden automatisch gegenereerd en zijn uitsluitend bedoeld ter informatie en demonstratie.' },
            { p: 'Dome garandeert niet dat door AI gegenereerde resultaten juist, volledig of geschikt voor een bepaald doel zijn. AI-modellen kunnen fouten maken en resultaten opleveren die aannemelijk lijken maar feitelijk onjuist zijn. U bent als enige verantwoordelijk voor het beoordelen van resultaten voordat u erop vertrouwt.' },
            { p: 'Deze disclaimer is vooral belangrijk in gereguleerde contexten (inkoop, finance, handelscompliance, juridische zaken en vergelijkbare terreinen), waar onjuiste resultaten wezenlijke gevolgen kunnen hebben.' },
          ],
        },
        {
          heading: 'Beschikbaarheid en wijzigingen',
          blocks: [
            { p: 'De tools van Dome zijn gratis en kunnen op elk moment worden gewijzigd, onderbroken of stopgezet. We streven ernaar redelijke tijd van tevoren te melden wanneer er grote wijzigingen of een beëindiging aankomen, maar doen geen toezeggingen over uptime, beschikbaarheid of het voortbestaan van functies.' },
            { p: 'We kunnen op elk moment functies toevoegen, wijzigen of verwijderen.' },
          ],
        },
        {
          heading: 'Intellectueel eigendom',
          blocks: [
            { p: 'De naam Dome, het logo, de website en de interfaces van de tools zijn eigendom van Francesco Prodomo. U mag ze niet verveelvoudigen of gebruiken zonder schriftelijke toestemming.' },
            { p: 'Alle rechten op de inhoud die u invoert en de resultaten die daaruit voortkomen, blijven bij u.' },
          ],
        },
        {
          heading: 'Beperking van aansprakelijkheid',
          blocks: [
            { p: 'Voor zover toegestaan door het toepasselijke recht zijn Francesco Prodomo en Dome niet aansprakelijk voor indirecte schade, gevolgschade, incidentele schade of punitieve schadevergoedingen die voortkomen uit uw gebruik van de tools, inclusief verliezen doordat u bent afgegaan op resultaten die door AI zijn gegenereerd.' },
            { p: 'Onze totale aansprakelijkheid jegens u voor een vordering die voortkomt uit het gebruik van de tools bedraagt niet meer dan nul euro, omdat de tools kosteloos aan u worden aangeboden.' },
            { p: 'Niets in deze voorwaarden sluit aansprakelijkheid uit of beperkt die voor opzet of grove nalatigheid (artikel 1229 van het Italiaanse Burgerlijk Wetboek), voor overlijden of lichamelijk letsel door nalatigheid, voor fraude, of voor enige andere aansprakelijkheid die naar Italiaans recht niet kan worden uitgesloten.' },
          ],
        },
        {
          heading: 'Toepasselijk recht en bevoegde rechter',
          blocks: [
            { p: 'Op deze voorwaarden is Italiaans recht van toepassing. Geschillen over deze voorwaarden of over uw gebruik van de tools van Dome worden uitsluitend voorgelegd aan de rechtbank van Florence (Tribunale di Firenze), Italië.' },
            { p: 'Als u een consument bent die in een andere lidstaat van de EU of in het Verenigd Koninkrijk woont, behoudt u de bescherming van dwingende bepalingen uit het recht van uw woonland die niet bij overeenkomst kunnen worden uitgesloten.' },
          ],
        },
        {
          heading: 'Wijzigingen in deze voorwaarden',
          blocks: [
            { p: 'We kunnen deze voorwaarden van tijd tot tijd bijwerken. Bij wezenlijke wijzigingen informeren we u ten minste 30 dagen voordat ze ingaan per e-mail. Als u de tools na de ingangsdatum blijft gebruiken, aanvaardt u daarmee de herziene voorwaarden.' },
            { p: 'De actuele versie staat altijd op [domelayer.com/nl/voorwaarden](terms).' },
          ],
        },
        {
          heading: 'Contact',
          blocks: [
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: '← Privacybeleid',
    },
  },
}
