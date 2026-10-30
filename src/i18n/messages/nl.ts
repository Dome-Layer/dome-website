import type { Messages } from './types'

// Dutch copy, written rather than translated: Netherlands Dutch for IT directors, compliance leads
// and operations managers, plain and specific. Address the reader as "u" throughout, never "je"
// (decided 2026-09-29). Buttons use the imperative without a pronoun, as Dutch interfaces do.
//
// Keep the terms Dutch professionals actually use: AI, audittrail, compliance, governance, UX,
// dashboard, workflow. Tool names and the DOME phase names stay English. GDPR is "AVG". Compounds
// are written as one word or with a hyphen (enterpriseplatform, AI-tools), never as two words.
//
// Not yet reviewed by a native reader: keep this locale unpublished in production until it is
// (DOME_PUBLISH_NL, see src/i18n/locales.ts).
export const nl: Messages = {
  site: {
    description:
      'DOME is een adviesbureau voor AI en productontwerp voor organisaties in gereguleerde sectoren, gevestigd in Florence en actief in heel Europa. We analyseren en automatiseren bedrijfsprocessen met AI die u kunt controleren, en ontwerpen de enterprisesoftware, dashboards en datavisualisaties waarmee mensen werken.',
    llmsIntro:
      'We werken op drie terreinen: AI-procesautomatisering (inclusief procesanalyse en bedrijfsanalyse), enterprise UX en product (inclusief dashboards en datavisualisatie) en de DOME-tools. Die tools bouwen en beheren we zelf (procesanalyse, document- en data-intelligence, een council van meerdere modellen, een agentworkflow met governance en een governance-dashboard). Ze laten zien hoe we AI met governance leveren en zijn niet te koop. Elke tool legt zijn beslissingen vast in een audittrail, en waar het beleid dat vereist, keurt een persoon met naam het resultaat goed.',
    llmsSections: { pages: 'Pagina’s', tools: 'Tools die we bouwen en beheren', caseStudies: 'Cases', legal: 'Juridisch' },
    knowsAbout: ['AI-procesautomatisering', 'Procesanalyse', 'Bedrijfsanalyse', 'AI-governance', 'Enterprise UX', 'Productontwerp', 'Datavisualisatie', 'Designsystems'],
  },
  nav: {
    homeLabel: 'DOME, home',
    enterpriseUx: 'Enterprise UX',
    aiAutomation: 'AI-automatisering',
    dome: 'DOME',
    caseStudies: 'Cases',
    about: 'Over ons',
    contact: 'Contact',
    signIn: 'Inloggen',
    signOut: 'Uitloggen',
    yourTools: 'Uw tools',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    switchToLight: 'Licht thema gebruiken',
    switchToDark: 'Donker thema gebruiken',
  },
  switcher: {
    language: 'Taal',
    readIn: {
      en: 'Deze pagina in het Engels',
      it: 'Deze pagina in het Italiaans',
      nl: 'Deze pagina in het Nederlands',
      de: 'Deze pagina in het Duits',
    },
  },
  footer: {
    tagline: 'Advies over AI en productontwerp voor organisaties in gereguleerde sectoren, met governance ingebouwd.',
    privacy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    cookies: 'Cookiebeleid',
    rights: 'Alle rechten voorbehouden.',
  },
  cookieNotice: {
    lead: 'Dome gebruikt alleen functionele cookies.',
    body: 'Eén cookie houdt u ingelogd, twee onthouden uw thema en taal. We tellen bezoeken alleen in totalen, zonder cookies. Geen tracking, geen advertenties.',
    link: 'Bekijk ons cookiebeleid',
    dismiss: 'Begrepen',
  },
  contactForm: {
    heading: 'Stuur een bericht',
    intro: 'Schrijft u liever? Vertel ons over uw project, dan nemen we contact met u op.',
    nameLabel: 'Naam',
    namePlaceholder: 'Uw naam',
    emailLabel: 'Zakelijk e-mailadres',
    emailPlaceholder: 'u@bedrijf.nl',
    companyLabel: 'Organisatie',
    companyOptional: '(optioneel)',
    companyPlaceholder: 'Naam van de organisatie',
    topicLabel: 'Onderwerp',
    messageLabel: 'Bericht',
    messagePlaceholder: 'Vertel ons over uw project',
    privacyNote: 'We gebruiken uw gegevens alleen om op uw bericht te reageren. Zie ons',
    privacyLink: 'privacybeleid',
    send: 'Bericht versturen',
    sending: 'Bezig met versturen',
    successTitle: 'Bericht ontvangen',
    successBody: 'Bedankt voor uw bericht. We reageren binnen twee werkdagen, in het Engels of Italiaans.',
    sendAnother: 'Nog een bericht versturen',
    rateLimited: 'U hebt het maximale aantal berichten bereikt. Probeer het over een minuut opnieuw.',
    genericError: 'Er ging iets mis. Probeer het opnieuw of stuur ons rechtstreeks een e-mail.',
  },
  errors: {
    notFoundTitle: 'Pagina niet gevonden',
    notFoundBody: 'De pagina die u zoekt bestaat niet.',
    errorTitle: 'Er ging iets mis',
    errorBody: 'Vernieuw de pagina.',
    homeLink: 'Naar de homepage',
  },
  breadcrumbHome: 'Home',
  meta: {
    home: {
      name: 'Home',
      title: 'DOME | AI met governance voor gereguleerde organisaties',
      description:
        'DOME helpt organisaties in gereguleerde sectoren AI in productie te nemen met governance ingebouwd, van procesautomatisering tot tools die we zelf bouwen en beheren.',
      ogDescription:
        'Vanaf de eerste dag ontworpen voor productie. We helpen gereguleerde organisaties AI te gebruiken met governance, menselijk toezicht en een volledige audittrail.',
      twitterDescription: 'AI die klaar is voor productie, met governance ingebouwd, voor gereguleerde organisaties.',
      imageAlt: 'DOME: AI met governance voor gereguleerde organisaties',
    },
    enterpriseUx: {
      name: 'Enterprise UX en product',
      title: 'Enterprise UX, product en datavisualisatie | DOME',
      description:
        'Gebruikersonderzoek, service design, interface-ontwerp en datavisualisatie voor complexe enterpriseplatforms, met een designsystem waarmee uw ontwikkelaars kunnen bouwen.',
      ogDescription:
        'We ontwarren complexe interne tools en klantplatforms: onderzoek, service design, interface-ontwerp en een designsystem waarmee uw team verder kan.',
      imageAlt: 'DOME, advies over enterprise UX en product',
    },
    aiProcessAutomation: {
      name: 'AI-procesautomatisering',
      title: 'AI-procesautomatisering en bedrijfsanalyse | DOME',
      description:
        'We brengen uw bedrijfsprocessen in kaart en analyseren ze, automatiseren de stappen met duidelijke regels en leggen de rest bij uw team, met een beslisnotitie en een volledige audittrail.',
      ogDescription:
        'Automatiseer een proces zonder de controle te verliezen: duidelijke regels waar ze gelden, een menselijke beslissing waar ze niet gelden, en een audittrail van begin tot eind.',
      imageAlt: 'DOME AI-procesautomatisering',
    },
    dome: {
      name: 'DOME-tools',
      title: 'DOME-tools: de tools die we bouwen en beheren | DOME',
      description:
        'Zes werkende tools voor het hele traject van procesverkenning tot gecontroleerde uitvoering. Ze laten zien hoe we AI met governance bouwen; het zijn geen producten die we verkopen.',
      ogDescription:
        'Procesanalyse, document- en data-intelligence, een council van meerdere modellen, een agentworkflow met governance en een governance-dashboard. Door ons gebouwd en beheerd.',
      imageAlt: 'DOME-tools: tools die we bouwen en beheren',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer: processen in kaart met AI en governance | DOME',
      description:
        'Zet een beschrijving van een bedrijfsproces in gewone taal om in een gestructureerde proceskaart, met een governance-analyse en een beoordeling van de automatiseringskansen.',
      ogDescription:
        'Beschrijf een bedrijfsproces in gewone taal. U krijgt een gestructureerde proceskaart, een analyse van governance-hiaten en een beoordeling van wat AI kan automatiseren.',
      twitterDescription:
        'Beschrijf een bedrijfsproces in gewone taal en krijg een gestructureerde kaart, governance-hiaten en automatiseringskansen.',
      imageAlt: 'DOME Process Analyzer: proceskaarten met governance',
      twitterImageAlt: 'DOME Process Analyzer',
    },
    dataIntelligence: {
      name: 'Data Intelligence',
      title: 'Data Intelligence: AI-dashboards die u kunt controleren | DOME',
      description:
        'Upload een spreadsheet en krijg een analysedashboard met governance, met automatische grafiekkeuze en een paneel voor vragen in gewone taal.',
      ogDescription:
        'Upload een spreadsheet. U krijgt een analysedashboard met governance, een deterministische grafiekkeuze en een paneel voor vragen in gewone taal, zonder handmatige configuratie.',
      twitterDescription:
        'Upload een spreadsheet en krijg een dashboard met governance, automatische grafiekkeuze en vragen in gewone taal, zonder configuratie.',
      imageAlt: 'DOME Data Intelligence: analysedashboard met governance',
      twitterImageAlt: 'DOME Data Intelligence',
    },
    llmCouncil: {
      name: 'LLM Council',
      title: 'LLM Council: beslisnotities van meerdere AI-modellen | DOME',
      description:
        'Leg een strategische vraag voor aan drie AI-adviseurs. Ze wegen de vraag onafhankelijk af, toetsen elkaars standpunten en komen tot een onderbouwd oordeel met een volledige audittrail.',
      imageAlt: 'DOME LLM Council: AI-beraad met governance',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence: controleerbare data-extractie met AI | DOME',
      description:
        'Haal gestructureerde gegevens uit elk document: facturen, laboratoriumrapporten, energierekeningen, contracten. Met governance-validatie en een volledige audittrail.',
      ogDescription:
        'Upload een document en krijg binnen enkele seconden een gestructureerde extractie met governance: veldwaarden, betrouwbaarheidsscores en een rapport op 16 governanceregels.',
      twitterDescription:
        'Haal gestructureerde gegevens uit elk document. Governance-validatie, betrouwbaarheidsscores en een volledige audittrail, zonder sjablonen.',
      imageAlt: 'DOME Document Intelligence: documentextractie met governance',
      twitterImageAlt: 'DOME Document Intelligence',
    },
    governanceDashboard: {
      name: 'Governance Dashboard',
      title: 'Governance Dashboard: een audittrail voor AI-beslissingen | DOME',
      description:
        'Een live audittrail, compliancerapporten en pdf-export voor alle DOME-tools: elke governance-gebeurtenis, betrouwbaarheidsscore en menselijke beslissing op één plek.',
      ogDescription:
        'Audittrail, compliancerapportage en pdf-export voor alle vier de AI-tools van DOME. Elke governance-gebeurtenis, betrouwbaarheidsscore en menselijke beslissing op één plek.',
      twitterDescription: 'Realtime audittrail en compliancerapportage voor alle vier de AI-tools van DOME.',
      imageAlt: 'DOME Governance Dashboard: audittrail en compliancerapportage voor alle tools',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow: van factuur tot goedkeuring, met governance | DOME',
      description:
        'Een workflow van factuur tot goedkeuring met governance: documentextractie, een engine voor beleidsregels, een council van meerdere modellen en een menselijke goedkeuring, elke stap vastgelegd.',
      ogDescription:
        'Een workflow van factuur tot goedkeuring over de DOME-tools heen, met een menselijke goedkeuringsstap en een volledige audittrail.',
      twitterDescription: 'Van factuur tot goedkeuring, met een menselijke goedkeuringsstap en een volledige audittrail.',
      imageAlt: 'DOME Agent Flow: workflow van factuur tot goedkeuring met governance',
      twitterImageAlt: 'DOME Agent Flow',
    },
    about: {
      name: 'Over ons',
      title: 'Advies over AI en product voor gereguleerde organisaties | DOME',
      description:
        'DOME is een adviesbureau voor AI en product in Florence en werkt in heel Europa met teams voor inkoop, finance, compliance en supply chain in gereguleerde sectoren.',
      ogDescription:
        'Eén verantwoordelijke lead, een netwerk van specialisten en een uitvoeringspartner. Hoe DOME is georganiseerd, en wat u van een opdracht kunt verwachten.',
      imageAlt: 'Over DOME',
    },
    contact: {
      name: 'Contact',
      title: 'Contact met DOME | Plan een gesprek of stuur een bericht',
      description:
        'Plan een gesprek van 15 of 30 minuten, of stuur een bericht over uw project. We reageren binnen twee werkdagen, in het Engels of Italiaans.',
      ogDescription: 'Plan een gesprek of stuur een bericht. We reageren binnen twee werkdagen.',
      imageAlt: 'Contact met DOME',
    },
    caseStudies: {
      name: 'Cases',
      title: 'Cases | DOME',
      description:
        'Geanonimiseerde verslagen van werk aan enterprise UX en AI-automatisering in retailinkoop, handelsfinanciering, voedselketens, compliance en digitale activa.',
      ogDescription:
        'Wat we hebben gebouwd en wat er daardoor veranderde. Klantgegevens zijn overal geanonimiseerd.',
      imageAlt: 'Cases van DOME',
    },
    privacy: {
      name: 'Privacybeleid',
      title: 'Privacybeleid | DOME',
      description:
        'Hoe DOME persoonsgegevens van websitebezoekers en geregistreerde gebruikers van de tools verzamelt, gebruikt en beschermt, en hoe u uw rechten onder de AVG uitoefent.',
      imageAlt: 'DOME',
    },
    terms: {
      name: 'Gebruiksvoorwaarden',
      title: 'Gebruiksvoorwaarden | DOME',
      description:
        'De voorwaarden voor het gebruik van de DOME-tools: accounts, aanvaardbaar gebruik, verwerking door AI, disclaimers en toepasselijk recht.',
      imageAlt: 'DOME',
    },
    cookies: {
      name: 'Cookiebeleid',
      title: 'Cookiebeleid | DOME',
      description:
        'Elke cookie en elke opslag in de browser die domelayer.com en de DOME-tools gebruiken, wat erin staat, hoe lang het blijft en waarom niets daarvan toestemming vereist.',
      imageAlt: 'DOME',
    },
  },
  media: {
    homeHeroStill: 'Twee collega’s bekijken een goedkeuringsworkflow op een laptop',
    aiProcessAutomationHero:
      'Bureau van een financeafdeling met een scherm met een goedkeuringsstroomschema en een stapel facturen',
    enterpriseUxHero: 'Ontwerper plakt een blauw memobriefje op een wand vol wireframes',
    capabilitiesHero: 'Gang in een serverruimte, verlicht in koel wit en blauw',
    aboutHero: 'Daken van Florence en de koepel van de kathedraal, gezien vanuit een studioraam',
    caseStudiesHero: 'Proceskaarten en een tablet met een dashboard op een lichte houten tafel',
    contactHero: 'Rustige vergaderruimte met een ronde tafel bij een raam met uitzicht op Florence',
    caseProcurementWorkflowRedesign:
      'Inkoopspecialist werkt aan twee schermen met een inkoopapplicatie',
    caseAiComplianceAssessments:
      'Analist bekijkt een gemarkeerde regeling op een tablet naast een ordner',
    caseMetalsTradingPlatform:
      'Magazijn met gestapelde aluminiumbaren en een tablet met koersgrafieken',
    caseFoodTraceabilityPlatform:
      'Hand scant een QR-label op een krat groenten in een distributiecentrum',
    caseTradingAppRedesign: 'Smartphone met een trading-app en koersgrafieken, met een straat op de achtergrond',
    caseAiProcurementPlatform:
      'Drie collega’s voor een wandscherm met een workflowdiagram',
    caseAiTrainingVideos:
      'Kleine videostudio met een camera, een lamp en een scherm met een trainingsscherm',
    francescoProdomo: 'Francesco Prodomo',
    tabletMockup: 'Een DOME-tool op een tablet',
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'Met AI gegenereerde afbeelding',
  common: {
    sendMessage: 'Stuur een bericht',
    relatedWork: 'Gerelateerd werk',
    anonymised: 'Klantgegevens zijn geanonimiseerd.',
    viewAllCaseStudies: 'Alle cases bekijken',
    topics: [
      'AI-procesautomatisering',
      'Enterprise UX en product',
      'DOME-tools',
      'Iets anders',
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'Advies over AI en product voor gereguleerde organisaties',
        heading: 'Software die mensen gebruiken. AI die u kunt controleren.',
        lead: 'We helpen organisaties in gereguleerde sectoren complexe processen te herontwerpen en te automatiseren met AI die beheerst, meetbaar en uitlegbaar blijft.',
        primary: 'Plan een kennismakingsgesprek',
        secondary: 'Bekijk ons werk',
        scrollCue: 'Scroll',
      },
      sectors: {
        eyebrow: 'Sectoren waarin we werken',
        items: [
          'Inkoop in de retail',
          'Grondstoffen- en handelsfinanciering',
          'Voedsel- en landbouwketens',
          'Compliance en regelgeving',
          'Digitale activa',
        ],
      },
      services: {
        eyebrow: 'Wat we doen',
        heading: 'Drie manieren waarop we met u werken',
        items: [
          {
            title: 'AI-procesautomatisering',
            body: 'We brengen een proces in kaart en analyseren het, automatiseren de delen met duidelijke regels en leggen de rest bij uw team, met een beslisnotitie en een volledige audittrail.',
            cta: 'Meer over procesautomatisering',
          },
          {
            title: 'Enterprise UX en product',
            body: 'We ontwarren complexe interne tools en klantplatforms: gebruikersonderzoek, service design, interfaces, dashboards en datavisualisatie, en een designsystem waarmee uw ontwikkelaars kunnen bouwen.',
            cta: 'Meer over UX en product',
          },
          {
            title: 'DOME-tools',
            body: 'Werkende tools die we zelf bouwen en beheren: documentextractie, beoordeling door meerdere modellen, dashboards met governance en een auditlaag die ze verbindt.',
            cta: 'Bekijk wat we bouwen',
          },
        ],
      },
      howWeWork: {
        eyebrow: 'Hoe we werken',
        heading: 'Eén methode, van eerste workshop tot productie',
        lead: 'Governance hoort bij elke fase, zodat er voor de livegang niets achteraf hoeft te worden ingebouwd.',
        phaseLabel: 'Fase',
        phases: [
          { title: 'Discover', body: 'Het proces in kaart brengen, de systemen die het raakt en waar regelgeving van toepassing is.' },
          { title: 'Orchestrate', body: 'De architectuur, de datastromen en de controles eromheen ontwerpen.' },
          { title: 'Model', body: 'AI-componenten configureren binnen afgesproken grenzen voor nauwkeurigheid en risico.' },
          { title: 'Execute', body: 'Uitrollen, integreren en bewaken, met elke geautomatiseerde beslissing vastgelegd.' },
        ],
        governance: 'Governance ingebouwd in elke fase',
      },
      selectedWork: { eyebrow: 'Geselecteerd werk', heading: 'Recente opdrachten' },
      capabilities: {
        eyebrow: 'DOME-tools',
        heading: 'Tools die we bouwen en beheren',
        lead: 'Onze eigen tools dekken het traject van procesverkenning tot gecontroleerde uitvoering. Potentiële klanten kunnen ze uitproberen voordat een opdracht begint, en waar gegevens uw netwerk niet mogen verlaten, draaien drie ervan op een lokaal open-weight model in plaats van een cloud-API.',
        tools: [
          'Process Analyzer',
          'LLM Council',
          'Document Intelligence',
          'Data Intelligence',
          'Governance Dashboard',
          'Agent Flow (wordt uitgerold)',
        ],
        cta: 'Bekijk de DOME-tools',
      },
      operatingModel: {
        eyebrow: 'Over DOME',
        heading: 'Eén verantwoordelijke lead. De juiste specialisten voor het werk.',
        lead: 'We stellen elk team samen rond het probleem, niet rond een vaste bezetting. U werkt de hele tijd met ervaren mensen, en het team groeit of krimpt mee met de omvang.',
        cta: 'Hoe we georganiseerd zijn',
        items: [
          { title: 'Opdrachtleider', body: 'Eén ervaren lead is eigenaar van de opdracht, van het eerste gesprek tot de overdracht, en blijft verantwoordelijk voor het resultaat.' },
          { title: 'Netwerk van specialisten', body: 'UX-onderzoekers, ontwerpers, engineers en specialisten in data en compliance sluiten aan wanneer het werk daarom vraagt.' },
          { title: 'Uitvoeringspartner', body: 'Grotere programma’s voeren we uit met een gevestigd partnerbureau, zodat het team kan meegroeien met de omvang.' },
        ],
      },
      closing: {
        heading: 'Vertel ons welk proces uw team ophoudt.',
        body: 'Een gesprek van 30 minuten is genoeg om te zien of we kunnen helpen.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },

    services: {
      breadcrumb: 'Diensten',
      aiProcessAutomation: {
        hero: {
          eyebrow: 'AI-procesautomatisering',
          heading: 'Automatiseer het routinewerk. Laat mensen beslissen.',
          lead: 'We brengen uw processen in finance, inkoop en compliance in kaart en analyseren ze. Daarna automatiseren we de goed afgebakende stappen, met regels die u kunt lezen en een vastlegging van elke beslissing.',
          primary: 'Plan een automatiseringsreview',
          secondary: 'Zo werkt het',
        },
        intro: {
          eyebrow: 'Waar het helpt',
          heading: 'Processen die klaar zijn voor automatisering',
          items: [
            { title: 'Hoog volume, duidelijke regels', body: 'Facturen verwerken, leveranciers controleren bij aanmelding, documenten classificeren: werk dat een beleid volgt maar toch tijd van specialisten kost.' },
            { title: 'Beslissingen die vastgelegd moeten worden', body: 'Goedkeuringen en uitzonderingen waarnaar auditors en toezichthouders vragen, soms maanden later.' },
            { title: 'Gegevens die in documenten vastzitten', body: 'Contracten, certificaten en rapporten die iemand nu met de hand overtypt in een ander systeem.' },
          ],
        },
        band: {
          eyebrow: 'Governance ingebouwd',
          heading: 'Elke geautomatiseerde beslissing is uit te leggen.',
          lead: 'Als iemand vraagt waarom een factuur is goedgekeurd of een document is gemarkeerd, staat het antwoord al vast.',
          points: [
            'Een betrouwbaarheidsscore bij elk geëxtraheerd veld',
            'Beleidsregels buiten het model, leesbaar voor uw team',
            'Een persoon met naam keurt goed waar het beleid dat vereist',
            'Een audittrail die u per run kunt exporteren',
            'Draait op een lokaal open-weight model als gegevens uw netwerk niet mogen verlaten',
          ],
        },
        steps: {
          eyebrow: 'Hoe we het leveren',
          heading: 'Vier stappen, met u afgesproken voordat er iets draait',
          items: [
            { title: 'Het proces in kaart brengen en analyseren', body: 'We lopen het proces door met de mensen die het uitvoeren, analyseren volumes, kosten en risico’s, en geven aan welke stappen regels volgen, welke oordeel vragen en waar automatisering loont.' },
            { title: 'De controles ontwerpen', body: 'Regels, betrouwbaarheidsdrempels en goedkeuringsmomenten spreken we met u af voordat er ook maar één stap wordt geautomatiseerd.' },
            { title: 'Bouwen en integreren', body: 'We koppelen aan de systemen die u al gebruikt en houden de regels buiten het model, zodat uw team ze kan lezen en aanpassen.' },
            { title: 'Draaien en meten', body: 'Elke beslissing wordt vastgelegd. We bespreken de nauwkeurigheid met u en stellen drempels bij als de volumes veranderen.' },
          ],
        },
        related: 'Automatisering in de praktijk',
        closing: {
          heading: 'Begin met één proces.',
          body: 'In een automatiseringsreview brengen we samen met uw team één proces in kaart, analyseren we de businesscase en vertellen we u wat de moeite waard is om te automatiseren, en wat niet.',
          primary: 'Plan een automatiseringsreview',
        },
      },
      enterpriseUx: {
        hero: {
          eyebrow: 'Enterprise UX en product',
          heading: 'Interne tools waar uw teams graag mee werken.',
          lead: 'We herontwerpen complexe enterpriseplatforms, van inkoopprocessen en handelsschermen tot dashboards en datavisualisatie, rond de mensen die er elke dag mee werken.',
          primary: 'Plan een UX-review',
          secondary: 'Zo werken we',
        },
        intro: {
          eyebrow: 'Wanneer het helpt',
          heading: 'Signalen dat een systeem zijn gebruikers tegenwerkt',
          items: [
            { title: 'Weinig gebruik', body: 'Mensen werken om het systeem heen met spreadsheets en e-mail, omdat de tool het werk in de weg zit.' },
            { title: 'Trainen houdt nooit op', body: 'Elke nieuwe medewerker heeft weken ondersteuning nodig, en dezelfde vragen komen steeds weer bij de helpdesk terecht.' },
            { title: 'Elke wijziging is duur', body: 'Elke nieuwe eis wordt weer een maatwerkscherm, en de interface wordt bij elke release moeilijker te onderhouden.' },
          ],
        },
        deliver: {
          eyebrow: 'Wat we leveren',
          heading: 'Van onderzoek tot een designsystem waarmee uw ontwikkelaars kunnen bouwen',
          items: [
            { title: 'Gebruikersonderzoek en service design', body: 'Interviews, meekijken in het werk en journey maps die laten zien waar tijd en vertrouwen verloren gaan.' },
            { title: 'Interfaces, dashboards en datavisualisatie', body: 'Schermen en dashboards ontworpen voor het werkelijke volume en de dichtheid van enterprisewerk, met grafieken die de cijfers waarop mensen beslissen vooraan zetten, getest met de mensen die ze gebruiken.' },
            { title: 'Designsystems', body: 'Een componentenbibliotheek en richtlijnen waarmee uw ontwikkelaars kunnen bouwen, zodat de consistentie de volgende release overleeft.' },
            { title: 'Invoering en gebruik', body: 'We blijven betrokken tijdens bouw en invoering, met trainingsmateriaal en metingen die laten zien of mensen de nieuwe tool gebruiken.' },
          ],
        },
        band: {
          eyebrow: 'Gemaakt voor gereguleerd werk',
          heading: 'Ontworpen voor beslissingen waarop mensen worden aangesproken.',
          lead: 'Tools voor finance, inkoop en compliance dragen meer dan taken. Ze dragen goedkeuringen, bewijs en verantwoordelijkheid, en de interface moet die duidelijk maken.',
          points: [
            'Standaard toegankelijk, volgens WCAG 2.1 AA',
            'Goedkeuringen en hun geschiedenis zichtbaar waar beslissingen worden genomen',
            'Weergaven per rol voor aanvragers, goedkeurders en auditors',
            'Eén designsystem, zodat elk scherm zich hetzelfde gedraagt',
          ],
        },
        steps: {
          eyebrow: 'Hoe we het leveren',
          heading: 'Van eerste interview tot invoering',
          items: [
            { title: 'Observeren', body: 'We kijken mee met de mensen die het systeem gebruiken en brengen in kaart waar tijd en vertrouwen verloren gaan.' },
            { title: 'Ontwerpen', body: 'We ontwerpen de processen en schermen samen met uw team, één proces tegelijk.' },
            { title: 'Valideren', body: 'We testen prototypes met echte gebruikers voordat er iets in ontwikkeling gaat.' },
            { title: 'Invoeren', body: 'We ondersteunen de bouw, schrijven het trainingsmateriaal en meten het gebruik na de lancering.' },
          ],
        },
        related: 'UX- en productwerk in de praktijk',
        closing: {
          heading: 'Begin met één proces.',
          body: 'In een UX-review observeren we samen met uw team één proces en laten we zien waar het tijd verliest, en wat u als eerste moet aanpakken.',
          primary: 'Plan een UX-review',
        },
      },
    },
    dome: {
      hero: {
        eyebrow: 'Tools',
        heading: 'Werkende AI-tools, door ons gebouwd en beheerd.',
        lead: 'DOME is de set tools die we bouwen om te laten zien hoe AI met governance er in de praktijk uitziet. Vijf zijn live en één wordt uitgerold, en u kunt ze uitproberen voordat een opdracht begint.',
        primary: 'Plan een demo met uitleg',
        secondary: 'Inloggen bij de tools',
      },
      blocks: {
        eyebrow: 'De bouwstenen',
        heading: 'Vier tools, elk voor een fase van de methode',
        openTool: 'Tool openen',
        details: 'Details',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Beschrijf een bedrijfsproces in gewone taal en krijg een gestructureerde kaart, de betrokken systemen, governance-hiaten en automatiseringskansen.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Leg een strategische vraag voor aan drie AI-adviseurs. Ze redeneren onafhankelijk, toetsen elkaar en komen tot een oordeel waarvan de volledige redenering is vastgelegd.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Haal gestructureerde velden uit facturen, contracten en rapporten, met een betrouwbaarheidsscore per veld en 16 governancecontroles.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Upload een spreadsheet en krijg een dashboard met governance. Een model classificeert de gegevens; een regelengine, niet het model, kiest de grafieken.' },
        ],
      },
      agentFlow: {
        eyebrow: 'De methode in productie',
        badge: 'Besloten demo',
        heading: 'Agent Flow: van factuur tot goedkeuring, elke stap vastgelegd',
        lead: 'Agent Flow verbindt de bouwstenen tot één workflow met governance, met een persoon met naam die goedkeurt waar het beleid dat vereist.',
        cta: 'Zo werkt Agent Flow',
        steps: [
          { title: 'Er komt een factuur binnen', body: 'Een zelf gehoste workflow pakt de factuur op en start een run met governance die haar van begin tot eind volgt.' },
          { title: 'Uitgelezen en getoetst aan het beleid', body: 'Document Intelligence leest de factuur; een regelengine bepaalt de goedkeuringsroute op basis van bedrag, categorie, leverancier en inkooporder.' },
          { title: 'Een notitie van de council, daarna beslist een mens', body: 'Onduidelijke facturen of facturen met een hoog bedrag krijgen een beslisnotitie van meerdere modellen, en een goedkeurder met naam tekent af.' },
          { title: 'Eén dossier dat u kunt reconstrueren', body: 'Elke stap komt als één tijdlijn in het Governance Dashboard terecht.' },
        ],
      },
      governance: {
        eyebrow: 'De governancelaag',
        heading: 'Governance Dashboard',
        lead: 'Eén audittrail voor alle tools: elke gebeurtenis, betrouwbaarheidsscore en menselijke beslissing op één plek, met pdf-rapporten voor de interne audit.',
        openDashboard: 'Dashboard openen',
        details: 'Details',
      },
      standards: {
        eyebrow: 'Hoe de tools zijn gebouwd',
        heading: 'Dezelfde standaarden als in ons werk voor klanten',
        items: [
          { title: 'Gehost in de EU', body: 'De demotools en hun gegevens draaien op infrastructuur in de Europese Unie.' },
          { title: 'Ze kunnen op uw infrastructuur draaien', body: 'Procesanalyse en document- en data-intelligence draaien elk op een lokaal open-weight model via Ollama, met een configuratiewijziging en zonder herbouw. Niets hoeft uw netwerk te verlaten.' },
          { title: 'Niet gebonden aan één AI-aanbieder', body: 'Claude, Azure OpenAI of een lokaal model, gekozen per implementatie. Modellen kunnen wisselen zonder dat de workflow of de controles eromheen opnieuw ontworpen hoeven te worden.' },
          { title: 'Vastleggen als uitgangspunt', body: 'Elke tool legt vast wat hij deed, hoe zeker hij was en wie het resultaat heeft beoordeeld.' },
        ],
      },
      partner: {
        text: 'Grotere programma’s voeren we uit samen met onze partner, Ionita Consulting.',
        cta: 'Over het partnerschap',
      },
      closing: {
        heading: 'Zie de tools werken op uw eigen proces.',
        body: 'In een demo met uitleg laten we uw voorbeeld door de tools lopen en bespreken we wat een invoering met governance zou inhouden.',
        primary: 'Plan een demo met uitleg',
      },
    },
    caseStudies: {
      hero: {
        eyebrow: 'Cases',
        heading: 'Wat we bouwden, en wat er veranderde.',
        lead: 'Geanonimiseerde verslagen van het werk: het probleem zoals de klant het beschreef, wat we deden en de resultaten die de opdracht werkelijk opleverde.',
        primary: 'Bespreek uw project',
        secondary: 'Bekijk wat we bouwen',
      },
      groups: [
        { eyebrow: 'AI-procesautomatisering', heading: 'Werk dat een beleid volgt' },
        { eyebrow: 'Enterprise UX en product', heading: 'Platforms die mensen elke dag moeten gebruiken' },
        { eyebrow: 'DOME-tools', heading: 'De methode van begin tot eind' },
      ],
      note: 'Klantgegevens zijn overal geanonimiseerd: we beschrijven de sector en de functie, nooit de organisatie. We noemen alleen resultaten die de opdracht werkelijk heeft opgeleverd.',
      closing: {
        heading: 'Herkent u een van deze problemen?',
        body: 'Vertel ons welk, dan vertellen wij hoe we het zouden aanpakken.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },
    caseStudy: {
      back: 'Cases',
      challenge: 'De uitdaging',
      whatWeDid: 'Wat we deden',
      outcomes: 'Resultaten',
      client: 'Klant',
      role: 'Onze rol',
      capabilities: 'Expertise',
      cta: 'Bespreek een vergelijkbaar project',
      readNext: 'Lees ook',
      notFound: 'Case niet gevonden',
      closing: {
        heading: 'Herkent u dit probleem?',
        body: 'Vertel ons waar uw proces vastloopt, dan vertellen wij hoe we het zouden aanpakken.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },
    about: {
      hero: {
        eyebrow: 'Over DOME',
        heading: 'Een adviesbureau voor AI en product voor gereguleerde organisaties.',
        lead: 'We helpen organisaties in gereguleerde sectoren software te ontwerpen die mensen gebruiken, en werk te automatiseren op een manier die auditors kunnen volgen.',
        primary: 'Neem contact op',
        secondary: 'Bekijk ons werk',
      },
      who: {
        eyebrow: 'Wie we zijn',
        heading: 'Complex enterprisewerk, eenvoudiger te gebruiken en veiliger te automatiseren.',
        paragraphs: [
          'DOME werkt met teams voor inkoop, finance, compliance en supply chain in gereguleerde sectoren. We combineren enterprise UX en AI-procesautomatisering, zodat de systemen die mensen elke dag gebruiken duidelijk zijn om mee te werken en duidelijk om te auditen.',
          'We bouwen en beheren ook onze eigen AI-tools met governance. Ons advies over automatisering komt uit systemen die we zelf draaien, niet uit presentaties.',
        ],
      },
      facts: [
        { figure: '3', label: 'diensten, van UX-onderzoek tot gecontroleerde automatisering' },
        { figure: '6', label: 'AI-tools die we zelf bouwen en beheren' },
        { figure: '3', label: 'modelaanbieders, inclusief open-weight modellen op uw eigen infrastructuur' },
        { figure: '10', label: 'jaar samenwerking met ons partnerbureau' },
      ],
      setup: {
        eyebrow: 'Hoe we georganiseerd zijn',
        heading: 'Een team dat rond elke opdracht wordt gevormd',
        lead: 'We hebben geen bank met consultants die op werk wachten. Elke opdracht krijgt de specialisten die het probleem vraagt, onder één verantwoordelijke lead.',
        items: [
          { title: 'Opdrachtleider', body: 'Een ervaren lead is eigenaar van elke opdracht, van het eerste gesprek tot de overdracht. U hebt één aanspreekpunt, en één persoon die verantwoordelijk is voor het resultaat.' },
          { title: 'Netwerk van specialisten', body: 'We halen UX-onderzoekers, interface-ontwerpers, engineers, dataspecialisten en complianceadviseurs uit ons netwerk van zelfstandige consultants erbij wanneer het werk daarom vraagt.' },
          { title: 'Uitvoeringspartner', body: 'Grotere programma’s voeren we uit met Ionita Consulting. Zo kunnen we langere of bredere opdrachten bemensen zonder onze manier van werken te veranderen.' },
        ],
      },
      expect: {
        eyebrow: 'Hoe we samenwerken',
        heading: 'Wat u van ons kunt verwachten',
        items: [
          { title: 'Kleine, ervaren teams', body: 'De mensen die u aan het begin ontmoet, zijn de mensen die het werk doen.' },
          { title: 'Governance vanaf het begin', body: 'Controles en auditeisen bepalen het ontwerp vanaf de eerste workshop, niet pas na de livegang.' },
          { title: 'Eerst bewijs, dan een besluit', body: 'U ziet werkende tools en eerdere resultaten voordat u zich ergens aan verbindt.' },
        ],
      },
      partner: {
        eyebrow: 'Onze uitvoeringspartner',
        heading: 'Ionita Consulting',
        body: 'Grotere programma’s voeren we uit samen met Ionita Consulting in Utrecht, met wie we al tien jaar samenwerken. Samen kunnen we opdrachten bemensen die meer specialisten of een langere doorlooptijd vragen.',
      },
      leadership: {
        eyebrow: 'Leiding',
        heading: 'Wie het werk leidt',
        name: 'Francesco Prodomo',
        role: 'Oprichter en opdrachtleider',
        bio: 'Tien jaar ervaring in productontwerp voor grote organisaties en inkoopsystemen, van gebruikersonderzoek tot oplevering.',
        linkedin: 'LinkedIn-profiel',
      },
      where: {
        eyebrow: 'Waar we werken',
        heading: 'Gevestigd in Florence, actief in heel Europa',
        lead: 'We werken met klanten in het Engels en het Italiaans, op locatie of op afstand.',
        cta: 'Bekijk onze cases',
      },
      closing: {
        heading: 'Vertel ons welk proces uw team ophoudt.',
        body: 'Een gesprek van 30 minuten is genoeg om te zien of we kunnen helpen.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        heading: 'Vertel ons over uw proces.',
        lead: 'Plan een gesprek van 30 minuten of stuur ons een bericht. We reageren binnen twee werkdagen.',
        primary: 'Plan een gesprek',
        secondary: 'Bekijk ons werk',
      },
      book: { heading: 'Plan een gesprek', lead: 'Kies een tijd die u schikt. Kies ook een onderwerp, zodat we ons kunnen voorbereiden.' },
      calendar: {
        topicLegend: 'Waarover wilt u praten?',
        notLoaded: 'De agenda is nog niet geladen. Hij opent hier zodra u een duur kiest.',
        show30: 'Beschikbare tijden tonen (30 min)',
        show15: 'Liever 15 minuten',
        notice: 'De agenda wordt geleverd door Cal.com en laadt pas als u klikt.',
        noticeEnd: 'privacybeleid is dan van toepassing. Daarvoor wordt er niets naar hen verstuurd.',
      },
      details: {
        eyebrow: 'Andere manieren om ons te bereiken',
        heading: 'Bedrijfsgegevens',
        email: 'E-mail',
        pec: 'Gecertificeerde e-mail (PEC)',
        booking: 'Afspraak',
        locationValue: 'Florence, Italië',
        location: 'Vestiging',
        legal: 'Dome di Francesco Prodomo · btw-nummer IT07242670482',
      },
    },
    tools: {
      back: 'Tools',
      whatItDoes: 'Wat het doet',
      howItWorks: 'Hoe het werkt',
      method: 'DOME-methode',
      processAnalyzer: {
        phase: 'Discover',
        lead: 'Zet een beschrijving van een bedrijfsproces in gewone taal om in een gestructureerde proceskaart, met een governance-analyse en een beoordeling van de automatiseringskansen.',
        open: 'Process Analyzer openen',
        whatItDoes:
          'Process Analyzer zet ongestructureerde beschrijvingen van bedrijfsprocessen om in gestructureerde, visuele resultaten waarmee operationeel managers en proceseigenaren direct aan de slag kunnen. De tool laat zien welke systemen bij elke stap betrokken zijn, schat de doorlooptijd en signaleert waar governancecontroles ontbreken of tekortschieten. Ook beoordeelt hij welke delen van het proces in aanmerking komen voor AI-automatisering, met een duidelijke indicatie van het toezicht dat nodig is voordat er iets wordt geautomatiseerd.',
        howItWorks: {
          heading: 'Drie stappen van beschrijving tot kaart.',
          steps: [
            { title: 'Beschrijf het proces', body: 'Beschrijf een bedrijfsproces in gewone taal: een inkoopproces, een goedkeuringsketen, een onboardingtraject. Sjablonen of gestructureerde invoer zijn niet nodig.' },
            { title: 'Ontvang een gestructureerde kaart', body: 'De tool maakt een visueel stroomschema (Mermaid.js), benoemt de betrokken systemen, schat de tijd per fase en toont waar het proces kwetsbaar is voor governance.' },
            { title: 'Zie de kansen voor automatisering', body: 'Elke stap wordt beoordeeld op de mogelijkheden voor AI-automatisering, met een betrouwbaarheidsscore en een heldere uitleg van de governancemaatregelen die vóór een implementatie nodig zijn.' },
          ],
        },
        method: {
          phase: 'Discover',
          body: 'De fase Discover brengt in kaart wat er werkelijk is, voordat er een AI-architectuur wordt ontworpen. Process Analyzer is de praktische uitwerking van deze fase: de tool bouwt het procesoverzicht op, legt hiaten in regelgeving en governance bloot en levert de gestructureerde basis die alle volgende DOME-fasen nodig hebben. Een implementatie is pas te ontwerpen als het proceslandschap duidelijk is.',
        },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        lead: 'Leg een strategische vraag voor aan een panel van drie AI-adviseurs. Ze wegen de vraag onafhankelijk af, bevragen elkaar en komen tot een onderbouwd oordeel met een volledige audittrail.',
        open: 'LLM Council openen',
        whatItDoes:
          'LLM Council structureert beraadslaging met AI-ondersteuning rond beslissingen met veel op het spel. In plaats van één modelantwoord roept de tool een panel van drie adviseurs bijeen die onafhankelijk redeneren, elkaars standpunten aanvechten en meningsverschillen oplossen door gestructureerde wederzijdse bevraging. Het resultaat is niet alleen een antwoord, maar een beraadslaging die u kunt auditen. Elke redeneerstap, elk bezwaar en elk punt van overeenstemming of afwijking wordt vastgelegd en is beschikbaar voor governancereview. Beslissers krijgen een oordeel dat ze kunnen bevragen, niet alleen kunnen aannemen.',
        howItWorks: {
          heading: 'Vragen, beraadslagen, beslissen.',
          steps: [
            { title: 'Stel een strategische vraag', body: 'Stel elke vraag met veel op het spel, zoals een besluit over markttoetreding, een risicobeoordeling of een afweging in beleid. Een vaste vorm is niet nodig: gewone taal volstaat.' },
            { title: 'Drie adviseurs beraadslagen onafhankelijk', body: 'Een panel van drie AI-adviseurs analyseert de vraag elk vanuit een eigen perspectief. Ze redeneren eerst onafhankelijk en bevragen daarna elkaars standpunten, zodat meningsverschillen zichtbaar worden in plaats van weggemoffeld.' },
            { title: 'Een onderbouwd oordeel met een volledige audittrail', body: 'De Council komt tot een samengevat oordeel dat aangeeft waar overeenstemming is en afwijkende standpunten vastlegt. Elke redeneerstap wordt vastgelegd: de volledige beraadslaging is beschikbaar voor review en goedkeuring vanuit governance.' },
          ],
        },
        method: {
          phase: 'Orchestrate',
          body: 'De fase Orchestrate zorgt ervoor dat ingrijpende beslissingen niet aan één modeluitvoer worden overgelaten. LLM Council is de praktische uitwerking van dit principe: de tool dwingt gestructureerde tegenspraak af, vraagt om onafhankelijke redeneringen voordat er naar consensus wordt gezocht en levert een audittrail die aan governance-eisen voldoet. Waar andere DOME-fasen begrenzen wat AI mag doen, begrenst Orchestrate hoe AI tot conclusies komt, zodat de redenering zelf verantwoord kan worden.',
        },
      },
      documentIntelligence: {
        phase: 'Model',
        lead: 'Haal gestructureerde gegevens uit elk document: facturen, laboratoriumrapporten, energierekeningen, contracten. Met governance-validatie en een volledige audittrail.',
        open: 'Document Intelligence openen',
        whatItDoes:
          'Document Intelligence zet ongestructureerde brondocumenten om in gestructureerde, gevalideerde gegevens, zonder handmatige invoer of maatwerksjablonen. De tool herkent automatisch het documenttype en de branche, haalt elk relevant veld eruit met een betrouwbaarheidsscore en past een engine met governanceregels toe die controleert op afwijkingen, ontbrekende verplichte velden, verlopen datums, hoge bedragen, mogelijke blootstelling van persoonsgegevens en meer. Elke extractie wordt opgeslagen in een doorzoekbare auditgeschiedenis. Het resultaat is een exporteerbare dataset met governance, klaar voor de systemen die erop volgen.',
        howItWorks: {
          heading: 'Uploaden, extraheren, valideren.',
          steps: [
            { title: 'Upload of fotografeer een document', body: 'Lever een pdf of afbeelding aan, of leg een document direct vast met uw camera. Het systeem verwerkt facturen, laboratoriumrapporten, energierekeningen, contracten, bankafschriften en meer. Sjablonen of configuratie zijn niet nodig.' },
            { title: 'Extractie en governance-validatie', body: 'Velden worden geëxtraheerd met betrouwbaarheidsscores, documenttype en branche worden automatisch herkend, en 16 governanceregels signaleren afwijkingen, ontbrekende gegevens, verlopen datums, hoge bedragen en mogelijke compliancerisico’s.' },
            { title: 'Controleren, opslaan en exporteren', body: 'Bekijk elk geëxtraheerd veld met de sectie, het type en de betrouwbaarheidsscore. Beoordeel de governancesignalen op ernst. Exporteer naar csv voor verdere verwerking, of sla het resultaat op in uw geschiedenis voor audit en herleidbaarheid.' },
          ],
        },
        method: {
          phase: 'Model',
          body: 'In de fase Model leveren AI-beslissingen met governance operationele resultaten op. Document Intelligence is het startpunt van deze fase voor organisaties die op schaal gestructureerde gegevens uit ongestructureerde documenten nodig hebben. In plaats van de ruwe modelextractie te vertrouwen, wordt elk resultaat gevalideerd tegen een deterministische engine met governanceregels voordat het verdere systemen bereikt. Zo is wat in uw processen terechtkomt controleerbaar, consistent en verdedigbaar. Hier zet de DOME-cyclus procesverkenning om in uitvoering met governance.',
        },
      },
      dataIntelligence: {
        phase: 'Orchestrate & Model',
        lead: 'Upload een spreadsheet en krijg een analysedashboard met governance, met automatische grafiekkeuze en een paneel voor vragen in gewone taal.',
        open: 'Data Intelligence openen',
        whatItDoes:
          'Data Intelligence zet gestructureerde gegevens uit een spreadsheet om in een analysedashboard met governance, zonder handmatige configuratie. Het systeem classificeert elke kolom naar type (datum, categorie, meetwaarde) en past daarna een regelengine toe die bepaalt welke grafiektypen passen. De grafiekkeuze is deterministisch en controleerbaar: dezelfde gegevens leiden altijd tot dezelfde keuzes, en elke toegepaste governanceregel wordt vastgelegd. Via een paneel voor vragen in gewone taal kunnen analisten de gegevens bevragen nadat het dashboard is gemaakt.',
        howItWorks: {
          heading: 'Uploaden, classificeren, analyseren.',
          steps: [
            { title: 'Upload een spreadsheet', body: 'Lever een CSV-, XLSX- of XLS-bestand aan. De tool ontvangt kolomnamen, gegevenstypen, voorbeeldwaarden en totalen. De ruwe rijen worden direct verwijderd en nooit opgeslagen.' },
            { title: 'Een dashboard met governance', body: 'Een taalmodel classificeert elke kolom. Daarna kiest een deterministische regelengine, niet het model, het passende grafiektype voor elke relatie in de gegevens. Het model adviseert; governance beslist.' },
            { title: 'Vragen in gewone taal', body: 'Zodra het dashboard klaar is, stelt u vragen over de gegevens in gewone taal. Het vragenpaneel werkt met de samenvatting van de geclassificeerde kolommen, niet met de ruwe gegevens.' },
          ],
        },
        method: {
          phase: 'Orchestrate & Model',
          body: 'De fasen Orchestrate en Model bepalen hoe AI-componenten binnen een governancekader worden gecoördineerd en geconfigureerd. Data Intelligence laat dat in de praktijk zien: het taalmodel blijft beperkt tot het classificeren van kolommen (een afgebakende taak met weinig risico), terwijl een deterministische regelengine de beslissingen neemt die ertoe doen over de presentatie van de gegevens. Die scheiding van verantwoordelijkheden is het architectuurpatroon dat DOME toepast in elke AI-implementatie met governance.',
        },
      },
      governanceDashboard: {
        phase: 'Govern',
        lead: 'De laag voor toezicht en compliance over alle AI-tools van DOME. Eén beveiligd overzicht van elke governance-gebeurtenis, betrouwbaarheidsscore en menselijke beslissing, met pdf-export voor audits en toezichthouders.',
        open: 'Governance Dashboard openen',
        whatItDoes:
          'Het Governance Dashboard is de overkoepelende toezichtlaag van het hele DOME-platform. Het bundelt de governance-gebeurtenissen van alle vier de AI-tools in één doorzoekbare audittrail. Operationeel managers, complianceofficers en auditors kunnen elke AI-beslissing inzien, de spreiding van betrouwbaarheidsscores bekijken, zien welke regels zijn geactiveerd en menselijke beslissingen terugvinden, zonder de afzonderlijke tools te openen. Pdf-rapporten worden op verzoek gemaakt, voor elke periode en elke combinatie van tools.',
        howItWorks: {
          heading: 'Van gebruik van de tools tot compliancerapport.',
          steps: [
            { title: 'Gebruik de AI-tools zoals altijd', body: 'Gebruik een van de vier DOME-tools: Process Analyzer, LLM Council, Data Intelligence of Document Intelligence. Elk verzoek legt automatisch een governance-gebeurtenis vast met de actie, de betrouwbaarheidsscore, de toegepaste regels en het advies over menselijke beoordeling.' },
            { title: 'Bekijk de audittrail', body: 'Het gebeurtenissenlogboek toont elke governance-gebeurtenis, de nieuwste bovenaan. Filter op tool, periode, type actie, betrouwbaarheidsdrempel of status van de menselijke beoordeling. Klik op een gebeurtenis om het volledige beslisdossier te bekijken.' },
            { title: 'Exporteer voor compliance', body: 'Maak met één klik een pdf-auditrapport voor elke periode en elke combinatie van tools. Rapporten bevatten een samenvatting, de spreiding van betrouwbaarheidsscores en een volledige tabel met gebeurtenissen en beoordelingen, klaar voor de interne audit of de toezichthouder.' },
          ],
        },
        method: {
          phase: 'Govern',
          body: 'De laag Govern loopt als een rode draad door alle andere DOME-fasen. Waar Discover processen in kaart brengt, Orchestrate beslissingen coördineert en Model gegevens extraheert of analyseert, legt Govern vast wat er werkelijk is gebeurd en zorgt ervoor dat het kan worden uitgelegd, geaudit en betwist. Het Governance Dashboard maakt die laag tastbaar: een live, inzichtelijk dossier dat AI-activiteit omzet in verantwoordingsbewijs, de basis voor elke implementatie in een gereguleerde omgeving.',
        },
      },
      agentFlow: {
        phase: 'Execute',
        heading: 'Agent Flow met governance',
        lead: 'Een zelf gehoste n8n-workflow die een echt proces van factuur tot goedkeuring uitvoert over de DOME-tools heen (extractie, een engine voor beleidsregels, een council van meerdere modellen en een menselijke goedkeuringsstap), met een volledige audittrail die het Governance Dashboard reconstrueert.',
        openQueue: 'Goedkeuringswachtrij openen',
        bookDemo: 'Plan een besloten demo',
        demoNote: 'Live getoond, op echte facturen, in een demo met uitleg.',
        steps: [
          { title: 'Er komt een factuur binnen', body: 'Een leverancier mailt een factuur naar de crediteureninbox, of de factuur wordt geüpload via het formulier van de workflow. Een zelf gehoste n8n-workflow pakt haar op en start een run met governance, met één workflow-id die haar van begin tot eind volgt.' },
          { title: 'Extraheren, dan toetsen aan het beleid', body: 'Document Intelligence haalt de velden en betrouwbaarheidsscores eruit; daarna bepaalt een datagedreven regelengine de goedkeuringsroute op basis van bedragcategorie, inkoopcategorie, land en btw, een lijst met toegestane leveranciers, de match met de inkooporder, valuta en dubbele facturen.' },
          { title: 'Notitie van de council, daarna een menselijke goedkeuring', body: 'Onduidelijke facturen of facturen met een hoog bedrag krijgen een beslisnotitie van LLM Council met meerdere modellen. Een goedkeurder met naam tekent af op een beoordelingspagina in de huisstijl, of facturen met een laag risico worden volgens het beleid automatisch goedgekeurd. Elke stap wordt als één reconstrueerbare tijdlijn in het Governance Dashboard vastgelegd.' },
        ],
      },
    },
    privacy: {
      back: '← Terug naar domelayer.com',
      updated: 'Laatst bijgewerkt: oktober 2026',
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
            { p: 'Dome wordt geëxploiteerd door Francesco Prodomo, eenmanszaak geregistreerd in Italië (btw-nummer IT07242670482), handelend onder de naam Dome. Waar dit beleid spreekt van ‘Dome’, ‘we’ of ‘ons’, wordt Francesco Prodomo bedoeld, handelend onder de naam Dome.' },
            { p: 'Vestiging: Florence, Italië\nContact voor privacyzaken: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo is de verwerkingsverantwoordelijke voor alle persoonsgegevens die via domelayer.com en de bijbehorende tools worden verzameld.' },
          ],
        },
        {
          heading: 'Waarover dit beleid gaat',
          blocks: [
            { p: 'Dit beleid legt uit welke persoonsgegevens we verzamelen wanneer u domelayer.com bezoekt of zich registreert voor de AI-tools van Dome, waarom we ze verzamelen, hoe lang we ze bewaren en welke rechten u erover hebt.' },
            { p: 'Dit beleid geldt uitsluitend voor domelayer.com en de portfoliotools van Dome. Het geldt niet voor AI-systemen of software die Dome voor externe klanten ontwerpt en implementeert: voor die opdrachten gelden afzonderlijke contracten en verwerkersovereenkomsten die per project worden afgesproken.' },
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
            { h3: 'Contactformulier en gespreksafspraken' },
            { p: 'Als u ons schrijft via het contactformulier of per e-mail, ontvangen we uw naam, uw e-mailadres en uw bericht (via het formulier ook uw organisatie als u die opgeeft, en het onderwerp), en gebruiken we die alleen om te antwoorden. Om het formulier tegen misbruik te beschermen, telt onze hostingprovider het aantal verzendingen per IP-adres over één minuut; die telling wordt niet opgeslagen.' },
            { p: 'Als u een gesprek plant, wordt de agenda geleverd door Cal.com en laadt die pas wanneer u ervoor kiest een afspraak te maken. De gegevens die u daar invult (naam, e-mailadres en eventuele opmerkingen) bereiken ons via Cal.com.' },
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
            { p: '**Cal.com Inc.**: het plannen van gesprekken, alleen als u ervoor kiest een gesprek te plannen. cal.com/privacy' },
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
            { p: 'Cloudflare, Railway, Resend, Cal.com, Umami, Anthropic, OpenAI en Google zijn gevestigd in de Verenigde Staten of verwerken daar gegevens. Doorgifte aan hen berust op het EU-VS Data Privacy Framework als de aanbieder daaronder is gecertificeerd, en anders op modelcontractbepalingen (SCC’s) op grond van artikel 46 AVG.' },
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
                  ['Berichten die u ons stuurt (contactformulier of e-mail) en gespreksafspraken', 'Tot 24 maanden na ons laatste contact'],
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
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo, handelend als Dome · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: 'Gebruiksvoorwaarden →',
    },
    cookies: {
      back: '← Terug naar domelayer.com',
      updated: 'Laatst bijgewerkt: oktober 2026',
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
            { p: 'We meten bezoeken aan domelayer.com in totalen met **Umami** (Umami Software, Inc.), met de gegevens gehost in de Europese Unie. Umami plaatst geen cookies en slaat niets op in uw browser. Het script wordt vanaf ons eigen domein geleverd en stuurt één kort bericht per paginaweergave, en één wanneer u een bericht verstuurt, de agenda opent, een link volgt om een gesprek te plannen, begint met inloggen of van taal wisselt.' },
            { p: 'Uw IP-adres wordt niet opgeslagen. Umami gebruikt het alleen om een geschatte locatie te bepalen (land, regio en stad) en om bezoeken van dezelfde browser binnen een kalendermaand te herkennen, via een code die niet terug te rekenen is en elke maand verandert. We zien totalen, nooit individuen: hoeveel bezoeken er zijn, waar ze vandaan komen, welke pagina’s en diensten mensen interesseren en hoeveel berichten en afspraken daarop volgen. We gebruiken dit niet om een profiel van u op te bouwen, combineren het niet met andere gegevens en delen het niet. Umami bewaart het 6 maanden.' },
            { p: 'Als uw browser Do Not Track verstuurt, wordt er niets gemeten. De inlogpagina’s worden gemeld zonder hun adresparameters. De tools van Dome worden niet gemeten: wat we daar tellen, zijn de runs die elke tool in zijn audittrail vastlegt, zoals beschreven in het [privacybeleid](privacy).' },
          ],
        },
        {
          heading: 'Andere diensten',
          blocks: [
            { p: '**Cloudflare**, dat deze website host, plaatst er geen cookies op. Om het contactformulier tegen misbruik te beschermen, telt het het aantal verzendingen per IP-adres over één minuut; die telling wordt niet opgeslagen.' },
            { p: '**Sentry**, onze foutmonitoring (EU-regio), stuurt een technisch rapport als een pagina een fout geeft. Sentry plaatst geen cookies en slaat niets op in uw browser.' },
            { p: '**Lettertypen** worden geleverd vanaf onze eigen domeinen. Geen enkele pagina laadt iets van Google Fonts.' },
            { p: '**Cal.com** levert de agenda op de contactpagina. Die laadt pas wanneer u ervoor kiest een gesprek te plannen; vanaf dat moment kan Cal.com eigen cookies plaatsen, onder zijn eigen privacybeleid.' },
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
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo, handelend als Dome · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: 'Privacybeleid →',
    },
    terms: {
      back: '← Terug naar domelayer.com',
      updated: 'Laatst bijgewerkt: september 2026',
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
            { p: 'De AI-tools van Dome worden geëxploiteerd door Francesco Prodomo, eenmanszaak geregistreerd in Italië (btw-nummer IT07242670482), handelend onder de naam Dome.' },
            { p: 'Vestiging: Florence, Italië\nContact: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'Waarover deze voorwaarden gaan',
          blocks: [
            { p: 'Door u te registreren voor en gebruik te maken van een AI-tool van Dome, gaat u akkoord met deze voorwaarden. Lees ze voordat u zich registreert. Als u er niet mee akkoord gaat, gebruik de tools dan niet.' },
            { p: 'Deze voorwaarden gelden voor de portfoliotools van Dome op de hierboven genoemde subdomeinen. Ze gelden niet voor opdrachten waarin Dome AI-systemen ontwerpt of implementeert voor andere organisaties: daarvoor gelden afzonderlijke projectovereenkomsten.' },
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
            { p: 'Voor zover toegestaan door het toepasselijke recht zijn Francesco Prodomo en Dome niet aansprakelijk voor indirecte, incidentele, gevolg- of punitieve schade die voortkomt uit uw gebruik van de tools, inclusief verliezen doordat u op door AI gegenereerde resultaten hebt vertrouwd.' },
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
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo, handelend als Dome · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: '← Privacybeleid',
    },
  },
}
