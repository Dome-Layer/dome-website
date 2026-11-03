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
      howItWorks: 'Hoe het werkt',
      method: 'DOME-methode',
      processAnalyzer: {
        phase: 'Discover',
        lead: 'Beschrijf een bedrijfsproces in uw eigen woorden en krijg een gestructureerde proceskaart, met een analyse van de governance en een beoordeling van wat u kunt automatiseren.',
        open: 'Open Process Analyzer',
        whatItDoes:
          'Process Analyzer maakt van een vrije beschrijving van een bedrijfsproces een gestructureerd, visueel overzicht waar operationeel managers en proceseigenaren direct mee aan de slag kunnen. U ziet welke systemen bij elke stap betrokken zijn, hoeveel tijd elke stap ongeveer kost en waar governancecontroles ontbreken of tekortschieten. Daarnaast beoordeelt de tool welke delen van het proces zich lenen voor AI-automatisering, en welk toezicht daarvoor nodig is voordat er iets wordt geautomatiseerd.',
        howItWorks: {
          heading: 'In drie stappen van beschrijving naar proceskaart.',
          steps: [
            { title: 'Beschrijf het proces', body: 'Beschrijf een bedrijfsproces in uw eigen woorden: een inkoopproces, een goedkeuringsketen, een onboardingtraject. Sjablonen of een vast formaat zijn niet nodig.' },
            { title: 'Ontvang een gestructureerde kaart', body: 'De tool maakt een stroomschema (Mermaid.js), benoemt de betrokken systemen, schat de doorlooptijd per fase en laat zien waar de governancerisico’s zitten.' },
            { title: 'Zie wat u kunt automatiseren', body: 'Per stap ziet u of AI-automatisering zinvol is, met een betrouwbaarheidsscore en een heldere uitleg van de governancemaatregelen die vooraf nodig zijn.' },
          ],
        },
        method: {
          phase: 'Discover',
          body: 'In de fase Discover brengen we in kaart wat er werkelijk is, nog voordat er een AI-architectuur wordt ontworpen. Process Analyzer is de praktische uitwerking van die fase: de tool geeft een overzicht van de processen, legt hiaten in regelgeving en governance bloot en legt het fundament waarop alle volgende DOME-fasen bouwen. Een implementatie kunt u pas ontwerpen als u het proceslandschap begrijpt.',
        },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        lead: 'Leg een strategische vraag voor aan een panel van drie AI-adviseurs. Ze redeneren los van elkaar, toetsen elkaars standpunten en komen tot een onderbouwd oordeel met een volledige audittrail.',
        open: 'Open LLM Council',
        whatItDoes:
          'LLM Council brengt structuur in beslissingen waar veel van afhangt. In plaats van één antwoord van één model roept de tool een panel van drie adviseurs bijeen. Die redeneren eerst onafhankelijk, vechten daarna elkaars standpunten aan en lossen meningsverschillen op in een gestructureerde wederzijdse toetsing. Het resultaat is meer dan een antwoord: het is een afweging die u kunt auditen. Elke redeneerstap, elk bezwaar en elk punt van overeenstemming of verschil wordt vastgelegd en is beschikbaar voor een governancereview. Beslissers krijgen een oordeel dat ze kunnen bevragen, en niet alleen kunnen overnemen.',
        howItWorks: {
          heading: 'Vragen, afwegen, beslissen.',
          steps: [
            { title: 'Stel een strategische vraag', body: 'Stel een vraag waar veel van afhangt, zoals een besluit over markttoetreding, een risicobeoordeling of een beleidsafweging. Gewone taal volstaat; een vast format is niet nodig.' },
            { title: 'Drie adviseurs wegen de vraag af', body: 'Drie AI-adviseurs analyseren de vraag elk vanuit een eigen invalshoek. Ze redeneren eerst onafhankelijk en toetsen daarna elkaars standpunten. Zo worden meningsverschillen zichtbaar in plaats van weggepoetst.' },
            { title: 'Een onderbouwd oordeel met volledige audittrail', body: 'De Council komt tot een samengevat oordeel dat laat zien waar de adviseurs het eens zijn, en legt afwijkende standpunten vast. Elke redeneerstap wordt bewaard, zodat de volledige afweging beschikbaar is voor review en goedkeuring.' },
          ],
        },
        method: {
          phase: 'Orchestrate',
          body: 'De fase Orchestrate voorkomt dat ingrijpende beslissingen aan één modeluitkomst worden overgelaten. LLM Council past dat principe toe: de tool dwingt gestructureerde tegenspraak af, vraagt om onafhankelijke redeneringen voordat er naar consensus wordt gezocht en levert een audittrail die aan governance-eisen voldoet. Waar andere DOME-fasen begrenzen wat AI mag doen, begrenst Orchestrate hoe AI tot een conclusie komt. Zo wordt de redenering zelf verantwoordbaar.',
        },
      },
      documentIntelligence: {
        phase: 'Model',
        lead: 'Haal gestructureerde gegevens uit elk document: facturen, laboratoriumrapporten, energierekeningen, contracten. Met toetsing aan governanceregels en een volledige audittrail.',
        open: 'Open Document Intelligence',
        whatItDoes:
          'Document Intelligence zet ongestructureerde documenten om in gestructureerde, gevalideerde gegevens, zonder handmatig overtypen en zonder maatwerksjablonen. De tool herkent zelf het documenttype en de branche, haalt elk relevant veld eruit met een betrouwbaarheidsscore en toetst het resultaat aan governanceregels: op afwijkingen, ontbrekende verplichte velden, verlopen datums, hoge bedragen, mogelijk blootgestelde persoonsgegevens en meer. Elke extractie komt in een doorzoekbare auditgeschiedenis. Het resultaat is een gecontroleerde dataset die u kunt doorzetten naar de systemen die erop volgen.',
        howItWorks: {
          heading: 'Uploaden, uitlezen, valideren.',
          steps: [
            { title: 'Upload of fotografeer een document', body: 'Upload een pdf of afbeelding, of fotografeer het document met uw camera. De tool verwerkt onder meer facturen, laboratoriumrapporten, energierekeningen, contracten en bankafschriften. Sjablonen of configuratie zijn niet nodig.' },
            { title: 'Uitlezen en valideren', body: 'Velden worden uitgelezen met een betrouwbaarheidsscore, documenttype en branche worden automatisch herkend, en 16 governanceregels signaleren afwijkingen, ontbrekende gegevens, verlopen datums, hoge bedragen en mogelijke compliancerisico’s.' },
            { title: 'Controleren, opslaan en exporteren', body: 'Bekijk elk veld met sectie, type en betrouwbaarheidsscore en beoordeel de signalen op ernst. Exporteer naar csv voor verdere verwerking, of sla het resultaat op voor audit en herleidbaarheid.' },
          ],
        },
        method: {
          phase: 'Model',
          body: 'In de fase Model leveren gecontroleerde AI-beslissingen operationele resultaten op. Document Intelligence is het startpunt voor organisaties die op schaal gestructureerde gegevens uit documenten nodig hebben. De ruwe uitkomst van het model wordt niet blind vertrouwd: elk resultaat wordt getoetst aan een vaste set governanceregels voordat het verder gaat. Wat in uw processen terechtkomt, is daardoor controleerbaar, consistent en verdedigbaar. Hier wordt procesanalyse gecontroleerde uitvoering.',
        },
      },
      dataIntelligence: {
        phase: 'Orchestrate & Model',
        lead: 'Upload een spreadsheet en krijg een analysedashboard met ingebouwde controles, automatisch gekozen grafieken en een paneel waarin u vragen stelt in gewone taal.',
        open: 'Open Data Intelligence',
        whatItDoes:
          'Data Intelligence maakt van een spreadsheet een analysedashboard met ingebouwde controles, zonder handmatige configuratie. Het systeem bepaalt per kolom het type (datum, categorie, meetwaarde) en laat daarna een regelengine kiezen welke grafieken passen. Die keuze is deterministisch en controleerbaar: dezelfde gegevens leveren altijd dezelfde grafieken op, en elke toegepaste governanceregel wordt vastgelegd. Zodra het dashboard klaar is, kunnen analisten de gegevens bevragen in gewone taal.',
        howItWorks: {
          heading: 'Uploaden, classificeren, analyseren.',
          steps: [
            { title: 'Upload een spreadsheet', body: 'Upload een csv-, xlsx- of xls-bestand. De tool ontvangt kolomnamen, gegevenstypen, voorbeeldwaarden en totalen. De ruwe rijen worden direct verwijderd en nooit opgeslagen.' },
            { title: 'Een dashboard met ingebouwde controles', body: 'Een taalmodel classificeert elke kolom. Daarna kiest een deterministische regelengine, niet het model, de juiste grafiek voor elke relatie in de gegevens. Het model adviseert; de regels beslissen.' },
            { title: 'Vragen in gewone taal', body: 'Is het dashboard klaar, dan stelt u vragen over de gegevens in gewone taal. Het vragenpaneel werkt met de samenvatting van de geclassificeerde kolommen, niet met de ruwe gegevens.' },
          ],
        },
        method: {
          phase: 'Orchestrate & Model',
          body: 'De fasen Orchestrate en Model bepalen hoe AI-componenten binnen een governancekader samenwerken en worden ingericht. Data Intelligence laat zien hoe dat gaat: het taalmodel doet alleen het classificeren van kolommen, een afgebakende taak met weinig risico. De beslissingen die ertoe doen, over hoe de gegevens worden gepresenteerd, neemt een deterministische regelengine. Die scheiding van verantwoordelijkheden is het patroon dat DOME in elke AI-implementatie toepast.',
        },
      },
      governanceDashboard: {
        phase: 'Govern',
        lead: 'De laag voor toezicht en compliance boven alle AI-tools van DOME. Eén beveiligd overzicht van elke governancegebeurtenis, betrouwbaarheidsscore en menselijke beslissing, met pdf-export voor audits en toezichthouders.',
        open: 'Open Governance Dashboard',
        whatItDoes:
          'Het Governance Dashboard is de toezichtlaag van het hele DOME-platform. Het brengt de governancegebeurtenissen van alle vier de AI-tools samen in één doorzoekbare audittrail. Operationeel managers, complianceofficers en auditors kunnen elke AI-beslissing inzien, de spreiding van betrouwbaarheidsscores bekijken, zien welke regels zijn geactiveerd en menselijke beslissingen terugvinden, zonder de afzonderlijke tools te openen. Pdf-rapporten maakt u op elk moment, voor elke periode en elke combinatie van tools.',
        howItWorks: {
          heading: 'Van gebruik van de tools naar compliancerapport.',
          steps: [
            { title: 'Gebruik de AI-tools zoals altijd', body: 'Werk met een van de vier DOME-tools: Process Analyzer, LLM Council, Data Intelligence of Document Intelligence. Elk verzoek legt automatisch een governancegebeurtenis vast, met de actie, de betrouwbaarheidsscore, de toegepaste regels en het advies over menselijke beoordeling.' },
            { title: 'Bekijk de audittrail', body: 'Het logboek toont elke governancegebeurtenis, de nieuwste bovenaan. Filter op tool, periode, soort actie, betrouwbaarheidsdrempel of status van de menselijke beoordeling, en open een gebeurtenis voor het volledige beslisdossier.' },
            { title: 'Exporteer voor compliance', body: 'Maak met één klik een pdf-auditrapport voor elke periode en combinatie van tools. Het rapport bevat een samenvatting, de spreiding van betrouwbaarheidsscores en een volledige tabel met gebeurtenissen en beoordelingen, klaar voor de interne audit of de toezichthouder.' },
          ],
        },
        method: {
          phase: 'Govern',
          body: 'Govern loopt als een rode draad door alle andere DOME-fasen. Discover brengt processen in kaart, Orchestrate coördineert beslissingen en Model haalt gegevens op of analyseert ze. Govern legt vast wat er werkelijk is gebeurd en zorgt dat het kan worden uitgelegd, gecontroleerd en betwist. Het Governance Dashboard maakt die laag tastbaar: een live, inzichtelijk dossier dat AI-activiteit omzet in verantwoording, de basis voor elke implementatie in een gereguleerde omgeving.',
        },
      },
      agentFlow: {
        phase: 'Execute',
        heading: 'Agent Flow, met governance ingebouwd',
        lead: 'Een zelf gehoste n8n-workflow die een echt proces van factuur tot goedkeuring doorloopt over de DOME-tools heen: extractie, een engine met beleidsregels, een council van meerdere AI-modellen en een menselijke goedkeuring. Het Governance Dashboard reconstrueert de volledige audittrail.',
        openQueue: 'Open de goedkeuringswachtrij',
        askDemo: 'Vraag demotoegang aan',
        demoNote: 'Het draait als besloten demo, op echte facturen. Vraag het aan, dan regel ik toegang.',
        steps: [
          { title: 'Er komt een factuur binnen', body: 'Een leverancier mailt een factuur naar de crediteureninbox, of iemand uploadt haar via het formulier van de workflow. Een zelf gehoste n8n-workflow pakt de factuur op en start een run met één workflow-id die haar van begin tot eind volgt.' },
          { title: 'Uitlezen, dan toetsen aan het beleid', body: 'Document Intelligence leest de velden en betrouwbaarheidsscores uit. Daarna bepaalt een regelengine, gestuurd door data, de goedkeuringsroute op basis van bedragcategorie, inkoopcategorie, land en btw, de lijst met goedgekeurde leveranciers, de match met de inkooporder, valuta en dubbele facturen.' },
          { title: 'Eerst een advies, dan een menselijke goedkeuring', body: 'Onduidelijke facturen en facturen met een hoog bedrag krijgen een beslisnotitie van LLM Council. Een goedkeurder tekent op naam af op een beoordelingspagina in de huisstijl; facturen met een laag risico worden volgens het beleid automatisch goedgekeurd. Elke stap komt als één reconstrueerbare tijdlijn in het Governance Dashboard.' },
        ],
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
