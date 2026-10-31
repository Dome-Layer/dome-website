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
      'DOME is een adviesbureau voor AI en productontwerp, gericht op organisaties in gereguleerde sectoren. We zitten in Florence en werken in heel Europa. We analyseren en automatiseren bedrijfsprocessen met AI die controleerbaar blijft, en ontwerpen de bedrijfssoftware, dashboards en datavisualisaties waarmee mensen dagelijks werken.',
    llmsIntro:
      'We werken op drie terreinen: AI-procesautomatisering (inclusief procesanalyse en bedrijfsanalyse), enterprise UX en productontwerp (inclusief dashboards en datavisualisatie) en de DOME-tools. Die tools bouwen en beheren we zelf: procesanalyse, document- en data-intelligence, een council van meerdere AI-modellen, een agentworkflow met ingebouwde controles en een governance-dashboard. Ze laten zien hoe wij controleerbare AI bouwen en zijn niet te koop. Elke tool legt zijn beslissingen vast in een audittrail, en waar het beleid dat eist, keurt een medewerker op naam het resultaat goed.',
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
    tagline: 'Advies over AI en productontwerp voor gereguleerde sectoren, met governance vanaf het begin.',
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
    heading: 'Stuur ons een bericht',
    intro: 'Schrijft u liever? Vertel kort over uw project, dan nemen we contact met u op.',
    nameLabel: 'Naam',
    namePlaceholder: 'Uw naam',
    emailLabel: 'Zakelijk e-mailadres',
    emailPlaceholder: 'naam@bedrijf.nl',
    companyLabel: 'Organisatie',
    companyOptional: '(optioneel)',
    companyPlaceholder: 'Naam van uw organisatie',
    topicLabel: 'Onderwerp',
    messageLabel: 'Bericht',
    messagePlaceholder: 'Waarmee kunnen we u helpen?',
    privacyNote: 'We gebruiken uw gegevens alleen om uw bericht te beantwoorden. Meer hierover in ons',
    privacyLink: 'privacybeleid',
    send: 'Verstuur bericht',
    sending: 'Bezig met versturen',
    successTitle: 'Bericht ontvangen',
    successBody: 'Bedankt voor uw bericht. U hoort binnen twee werkdagen van ons, in het Engels of het Italiaans.',
    sendAnother: 'Nog een bericht sturen',
    rateLimited: 'U hebt het maximumaantal berichten bereikt. Probeer het over een minuut opnieuw.',
    genericError: 'Er ging iets mis. Probeer het opnieuw of mail ons rechtstreeks.',
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
      title: 'DOME | Controleerbare AI voor gereguleerde organisaties',
      description:
        'DOME helpt gereguleerde organisaties AI in productie te nemen met governance ingebouwd, van procesautomatisering tot tools die we zelf beheren.',
      ogDescription:
        'Vanaf dag één gebouwd voor productie: AI met governance, menselijk toezicht en een volledige audittrail, voor organisaties in gereguleerde sectoren.',
      twitterDescription: 'Productieklare AI met ingebouwde governance, voor gereguleerde organisaties.',
      imageAlt: 'DOME: controleerbare AI voor gereguleerde organisaties',
    },
    enterpriseUx: {
      name: 'Enterprise UX en product',
      title: 'Enterprise UX, product en datavisualisatie | DOME',
      description:
        'Gebruikersonderzoek, service design, interfaces en datavisualisatie voor complexe bedrijfsplatforms, met een designsystem voor uw ontwikkelaars.',
      ogDescription:
        'We maken complexe interne tools en klantplatforms overzichtelijk: onderzoek, service design, interfaces en een designsystem voor uw team.',
      imageAlt: 'DOME, advies over enterprise UX en product',
    },
    aiProcessAutomation: {
      name: 'AI-procesautomatisering',
      title: 'AI-procesautomatisering en bedrijfsanalyse | DOME',
      description:
        'We brengen uw processen in kaart, automatiseren wat vaste regels volgt en leggen de rest bij uw team, met een beslisnotitie en volledige audittrail.',
      ogDescription:
        'Automatiseer een proces zonder de controle te verliezen: regels waar ze gelden, een menselijke beslissing waar niet, en een audittrail van begin tot eind.',
      imageAlt: 'DOME AI-procesautomatisering',
    },
    dome: {
      name: 'DOME-tools',
      title: 'DOME-tools: de tools die we bouwen en beheren | DOME',
      description:
        'Zes werkende tools, van procesanalyse tot gecontroleerde uitvoering. Ze laten zien hoe wij controleerbare AI bouwen en zijn niet te koop.',
      ogDescription:
        'Procesanalyse, document- en data-intelligence, een council van AI-modellen, een gecontroleerde agentworkflow en een governance-dashboard.',
      imageAlt: 'DOME-tools: tools die we bouwen en beheren',
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
      name: 'Over ons',
      title: 'Advies over AI en product voor gereguleerde sectoren | DOME',
      description:
        'DOME is een adviesbureau voor AI en product in Florence, voor teams in inkoop, finance, compliance en supply chain in gereguleerde sectoren.',
      ogDescription:
        'Eén eindverantwoordelijke, een netwerk van specialisten en een uitvoeringspartner. Zo is DOME georganiseerd, en dit kunt u van ons verwachten.',
      imageAlt: 'Over DOME',
    },
    contact: {
      name: 'Contact',
      title: 'Contact met DOME | Plan een gesprek of stuur een bericht',
      description:
        'Plan een gesprek van 15 of 30 minuten, of stuur een bericht over uw project. U hoort binnen twee werkdagen van ons, in het Engels of Italiaans.',
      ogDescription:
        'Plan een gesprek of stuur een bericht. U hoort binnen twee werkdagen van ons.',
      imageAlt: 'Contact met DOME',
    },
    caseStudies: {
      name: 'Cases',
      title: 'Cases | DOME',
      description:
        'Geanonimiseerde cases over enterprise UX en AI-automatisering in retailinkoop, handelsfinanciering, voedselketens, compliance en digitale activa.',
      ogDescription:
        'Wat we bouwden en wat het opleverde. Klantgegevens zijn overal geanonimiseerd.',
      imageAlt: 'Cases van DOME',
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
    sendMessage: 'Stuur een bericht',
    relatedWork: 'Vergelijkbaar werk',
    anonymised: 'Klantgegevens zijn geanonimiseerd.',
    viewAllCaseStudies: 'Alle cases',
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
        eyebrow: 'AI- en productadvies voor gereguleerde organisaties',
        heading: 'Software waar mensen mee willen werken. AI die u kunt controleren.',
        lead: 'We helpen organisaties in gereguleerde sectoren complexe processen opnieuw in te richten en te automatiseren met AI die beheersbaar, meetbaar en uitlegbaar blijft.',
        primary: 'Plan een kennismakingsgesprek',
        secondary: 'Bekijk ons werk',
        scrollCue: 'Scroll',
      },
      sectors: {
        eyebrow: 'Sectoren waarin we werken',
        items: [
          'Inkoop in de retail',
          'Grondstoffenhandel en handelsfinanciering',
          'Voedsel- en agroketens',
          'Compliance en regelgeving',
          'Digitale activa',
        ],
      },
      services: {
        eyebrow: 'Wat we doen',
        heading: 'Drie manieren om samen te werken',
        items: [
          {
            title: 'AI-procesautomatisering',
            body: 'We brengen een proces in kaart en analyseren het. Wat vaste regels volgt, automatiseren we; de rest gaat naar uw team, met een beslisnotitie en een volledige audittrail.',
            cta: 'Meer over procesautomatisering',
          },
          {
            title: 'Enterprise UX en product',
            body: 'We maken complexe interne tools en klantplatforms overzichtelijk: gebruikersonderzoek, service design, interfaces, dashboards en datavisualisatie, en een designsystem waar uw ontwikkelaars direct mee verder kunnen.',
            cta: 'Meer over UX en product',
          },
          {
            title: 'DOME-tools',
            body: 'Werkende tools die we zelf bouwen en beheren: documentextractie, beoordeling door meerdere AI-modellen, dashboards met ingebouwde controles en een auditlaag die alles verbindt.',
            cta: 'Bekijk wat we bouwen',
          },
        ],
      },
      howWeWork: {
        eyebrow: 'Hoe we werken',
        heading: 'Eén methode, van eerste workshop tot productie',
        lead: 'Governance zit in elke fase. Zo hoeft er vlak voor de livegang niets meer te worden rechtgezet.',
        phaseLabel: 'Fase',
        phases: [
          { title: 'Discover', body: 'Het proces in kaart brengen: welke systemen het raakt en waar regelgeving geldt.' },
          { title: 'Orchestrate', body: 'De architectuur, de datastromen en de controles daaromheen ontwerpen.' },
          { title: 'Model', body: 'AI-componenten inrichten binnen afgesproken grenzen voor nauwkeurigheid en risico.' },
          { title: 'Execute', body: 'In gebruik nemen, koppelen en bewaken, met elke geautomatiseerde beslissing vastgelegd.' },
        ],
        governance: 'Governance in elke fase',
      },
      selectedWork: { eyebrow: 'Geselecteerd werk', heading: 'Recente opdrachten' },
      capabilities: {
        eyebrow: 'DOME-tools',
        heading: 'Tools die we zelf bouwen en beheren',
        lead: 'Onze eigen tools dekken het hele traject, van procesanalyse tot gecontroleerde uitvoering. U kunt ze uitproberen voordat een opdracht begint. En mogen gegevens uw netwerk niet verlaten, dan draaien drie ervan op een lokaal open-weight model in plaats van via een cloud-API.',
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
        heading: 'Eén eindverantwoordelijke. De juiste specialisten per opdracht.',
        lead: 'We stellen elk team samen rond het vraagstuk, niet rond een vaste bezetting. U werkt van begin tot eind met ervaren mensen, en het team groeit of krimpt mee met de omvang.',
        cta: 'Zo zijn we georganiseerd',
        items: [
          { title: 'Opdrachtleider', body: 'Eén ervaren lead is verantwoordelijk voor de opdracht, van het eerste gesprek tot de overdracht, en staat in voor het resultaat.' },
          { title: 'Netwerk van specialisten', body: 'UX-onderzoekers, ontwerpers, engineers en specialisten in data en compliance sluiten aan wanneer het werk daarom vraagt.' },
          { title: 'Uitvoeringspartner', body: 'Grotere programma’s voeren we uit met een gevestigd partnerbureau, zodat het team kan meegroeien met de omvang.' },
        ],
      },
      closing: {
        heading: 'Welk proces remt uw team af?',
        body: 'In een gesprek van 30 minuten weet u of we kunnen helpen.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },

    services: {
      breadcrumb: 'Diensten',
      aiProcessAutomation: {
        hero: {
          eyebrow: 'AI-procesautomatisering',
          heading: 'Automatiseer het routinewerk. De beslissingen blijven bij mensen.',
          lead: 'We brengen uw processen in finance, inkoop en compliance in kaart en analyseren ze. Daarna automatiseren we de stappen die duidelijk zijn afgebakend, met regels die u kunt lezen en een vastlegging van elke beslissing.',
          primary: 'Plan een automatiseringsscan',
          secondary: 'Zo werkt het',
        },
        intro: {
          eyebrow: 'Waar het helpt',
          heading: 'Processen die klaar zijn voor automatisering',
          items: [
            { title: 'Veel volume, duidelijke regels', body: 'Facturen verwerken, nieuwe leveranciers controleren, documenten classificeren: werk dat een vast beleid volgt, maar toch de tijd van specialisten opslokt.' },
            { title: 'Beslissingen die u moet kunnen verantwoorden', body: 'Goedkeuringen en uitzonderingen waar auditors en toezichthouders naar vragen, soms maanden later.' },
            { title: 'Gegevens die vastzitten in documenten', body: 'Contracten, certificaten en rapporten die iemand nu met de hand overtypt in een ander systeem.' },
          ],
        },
        band: {
          eyebrow: 'Governance ingebouwd',
          heading: 'Elke geautomatiseerde beslissing is te verklaren.',
          lead: 'Vraagt iemand waarom een factuur is goedgekeurd of een document is gemarkeerd? Dan ligt het antwoord al vast.',
          points: [
            'Een betrouwbaarheidsscore bij elk uitgelezen veld',
            'Beleidsregels buiten het model, leesbaar voor uw team',
            'Een medewerker keurt op naam goed waar het beleid dat eist',
            'Een audittrail die u per run kunt exporteren',
            'Draait op een lokaal open-weight model als gegevens uw netwerk niet mogen verlaten',
          ],
        },
        steps: {
          eyebrow: 'Hoe we het aanpakken',
          heading: 'Vier stappen, met u afgestemd voordat er iets draait',
          items: [
            { title: 'Het proces in kaart brengen en analyseren', body: 'We lopen het proces door met de mensen die het uitvoeren en analyseren volumes, kosten en risico’s. Zo wordt duidelijk welke stappen regels volgen, welke om een oordeel vragen en waar automatisering loont.' },
            { title: 'De controles ontwerpen', body: 'Regels, drempels voor betrouwbaarheid en goedkeuringsmomenten leggen we samen met u vast, nog voordat er één stap wordt geautomatiseerd.' },
            { title: 'Bouwen en koppelen', body: 'We sluiten aan op de systemen die u al gebruikt en houden de regels buiten het model, zodat uw team ze kan lezen en aanpassen.' },
            { title: 'Draaien en meten', body: 'Elke beslissing wordt vastgelegd. We bespreken de nauwkeurigheid met u en stellen de drempels bij als de volumes veranderen.' },
          ],
        },
        related: 'Automatisering in de praktijk',
        closing: {
          heading: 'Begin met één proces.',
          body: 'In een automatiseringsscan brengen we samen met uw team één proces in kaart, rekenen we de businesscase door en zeggen we eerlijk wat automatiseren oplevert en wat niet.',
          primary: 'Plan een automatiseringsscan',
        },
      },
      enterpriseUx: {
        hero: {
          eyebrow: 'Enterprise UX en product',
          heading: 'Interne tools waar uw teams graag mee werken.',
          lead: 'We ontwerpen complexe bedrijfsplatforms opnieuw, van inkoopprocessen en handelsschermen tot dashboards en datavisualisatie, rond de mensen die er elke dag mee werken.',
          primary: 'Plan een UX-scan',
          secondary: 'Zo werken we',
        },
        intro: {
          eyebrow: 'Wanneer het helpt',
          heading: 'Signalen dat een systeem zijn gebruikers tegenwerkt',
          items: [
            { title: 'Het systeem wordt gemeden', body: 'Mensen werken eromheen met spreadsheets en e-mail, omdat de tool hen bij hun werk in de weg zit.' },
            { title: 'Inwerken houdt nooit op', body: 'Elke nieuwe collega heeft weken begeleiding nodig, en de helpdesk krijgt steeds dezelfde vragen.' },
            { title: 'Elke wijziging is duur', body: 'Elke nieuwe eis wordt weer een maatwerkscherm, en met elke release wordt de interface lastiger te onderhouden.' },
          ],
        },
        deliver: {
          eyebrow: 'Wat we leveren',
          heading: 'Van onderzoek tot een designsystem waar uw ontwikkelaars mee verder kunnen',
          items: [
            { title: 'Gebruikersonderzoek en service design', body: 'Interviews, meelopen met gebruikers en journey maps die laten zien waar tijd en vertrouwen verloren gaan.' },
            { title: 'Interfaces, dashboards en datavisualisatie', body: 'Schermen en dashboards die passen bij het volume en de informatiedichtheid van zakelijk werk, met grafieken die de cijfers waarop mensen beslissen vooraan zetten. Getest met de mensen die ermee werken.' },
            { title: 'Designsystems', body: 'Een componentenbibliotheek met richtlijnen waar uw ontwikkelaars mee verder kunnen, zodat de consistentie ook de volgende release overleeft.' },
            { title: 'Invoering en gebruik', body: 'We blijven betrokken tijdens bouw en invoering, met trainingsmateriaal en metingen die laten zien of de nieuwe tool echt wordt gebruikt.' },
          ],
        },
        band: {
          eyebrow: 'Gemaakt voor gereguleerd werk',
          heading: 'Ontworpen voor beslissingen waarop mensen worden afgerekend.',
          lead: 'Tools voor finance, inkoop en compliance doen meer dan taken afhandelen. Ze dragen goedkeuringen, bewijs en verantwoordelijkheid, en de interface moet dat zichtbaar maken.',
          points: [
            'Standaard toegankelijk, volgens WCAG 2.1 AA',
            'Goedkeuringen en hun geschiedenis zichtbaar op het moment van beslissen',
            'Aparte weergaven voor aanvragers, goedkeurders en auditors',
            'Eén designsystem, zodat elk scherm zich hetzelfde gedraagt',
          ],
        },
        steps: {
          eyebrow: 'Hoe we het aanpakken',
          heading: 'Van eerste interview tot invoering',
          items: [
            { title: 'Observeren', body: 'We lopen mee met de mensen die het systeem gebruiken en brengen in kaart waar tijd en vertrouwen verloren gaan.' },
            { title: 'Ontwerpen', body: 'We ontwerpen processen en schermen samen met uw team, één proces tegelijk.' },
            { title: 'Valideren', body: 'We testen prototypes met echte gebruikers voordat er iets wordt gebouwd.' },
            { title: 'Invoeren', body: 'We ondersteunen de bouw, schrijven het trainingsmateriaal en meten na de lancering hoe de tool wordt gebruikt.' },
          ],
        },
        related: 'UX- en productwerk in de praktijk',
        closing: {
          heading: 'Begin met één proces.',
          body: 'In een UX-scan kijken we samen met uw team naar één proces. We laten zien waar het tijd verliest en wat u als eerste moet aanpakken.',
          primary: 'Plan een UX-scan',
        },
      },
    },
    dome: {
      hero: {
        eyebrow: 'Tools',
        heading: 'Werkende AI-tools, door ons gebouwd en beheerd.',
        lead: 'Met de DOME-tools laten we zien hoe controleerbare AI er in de praktijk uitziet. Vijf zijn live, één wordt uitgerold, en u kunt ze allemaal uitproberen voordat een opdracht begint.',
        primary: 'Plan een demo',
        secondary: 'Inloggen bij de tools',
      },
      blocks: {
        eyebrow: 'De bouwstenen',
        heading: 'Vier tools, elk voor een fase van de methode',
        openTool: 'Open de tool',
        details: 'Meer details',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Beschrijf een bedrijfsproces in uw eigen woorden en krijg een gestructureerde proceskaart, de betrokken systemen, hiaten in de governance en kansen voor automatisering.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Leg een strategische vraag voor aan drie AI-adviseurs. Ze redeneren eerst los van elkaar, toetsen daarna elkaars standpunten en komen tot een oordeel waarvan de hele redenering is vastgelegd.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Haalt gestructureerde velden uit facturen, contracten en rapporten, met een betrouwbaarheidsscore per veld en 16 governancecontroles.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Upload een spreadsheet en krijg een dashboard met ingebouwde controles. Een model classificeert de gegevens; de grafieken kiest een regelengine, niet het model.' },
        ],
      },
      agentFlow: {
        eyebrow: 'De methode in productie',
        badge: 'Besloten demo',
        heading: 'Agent Flow: van factuur tot goedkeuring, elke stap vastgelegd',
        lead: 'Agent Flow koppelt de bouwstenen tot één gecontroleerde workflow, waarin een medewerker op naam goedkeurt waar het beleid dat eist.',
        cta: 'Zo werkt Agent Flow',
        steps: [
          { title: 'Er komt een factuur binnen', body: 'Een zelf gehoste workflow pakt de factuur op en start een run die haar van begin tot eind volgt.' },
          { title: 'Uitgelezen en getoetst aan het beleid', body: 'Document Intelligence leest de factuur; een regelengine bepaalt de goedkeuringsroute op basis van bedrag, categorie, leverancier en inkooporder.' },
          { title: 'Eerst een advies, dan beslist een mens', body: 'Onduidelijke facturen en facturen met een hoog bedrag krijgen een beslisnotitie van meerdere AI-modellen. Daarna tekent een goedkeurder op naam af.' },
          { title: 'Eén dossier, stap voor stap te reconstrueren', body: 'Elke stap komt als één tijdlijn in het Governance Dashboard terecht.' },
        ],
      },
      governance: {
        eyebrow: 'De governancelaag',
        heading: 'Governance Dashboard',
        lead: 'Eén audittrail voor alle tools: elke gebeurtenis, betrouwbaarheidsscore en menselijke beslissing op één plek, met pdf-rapporten voor de interne audit.',
        openDashboard: 'Open het dashboard',
        details: 'Meer details',
      },
      standards: {
        eyebrow: 'Hoe de tools zijn gebouwd',
        heading: 'Dezelfde eisen als in ons werk voor klanten',
        items: [
          { title: 'Gehost in de EU', body: 'De demotools en hun gegevens draaien op infrastructuur binnen de Europese Unie.' },
          { title: 'Ook op uw eigen infrastructuur', body: 'Procesanalyse en document- en data-intelligence draaien desgewenst op een lokaal open-weight model via Ollama. Dat is een kwestie van configuratie, geen herbouw, en er hoeft niets uw netwerk te verlaten.' },
          { title: 'Niet vast aan één AI-leverancier', body: 'Claude, Azure OpenAI of een lokaal model, per implementatie gekozen. U kunt van model wisselen zonder de workflow of de controles eromheen opnieuw te ontwerpen.' },
          { title: 'Alles wordt vastgelegd', body: 'Elke tool legt vast wat hij deed, hoe zeker hij was en wie het resultaat heeft beoordeeld.' },
        ],
      },
      partner: {
        text: 'Grotere programma’s voeren we samen uit met onze partner, Ionita Consulting.',
        cta: 'Over de samenwerking',
      },
      closing: {
        heading: 'Zie de tools werken op uw eigen proces.',
        body: 'In een demo laten we uw eigen voorbeeld door de tools lopen en bespreken we wat een gecontroleerde invoering bij u zou inhouden.',
        primary: 'Plan een demo',
      },
    },
    caseStudies: {
      hero: {
        eyebrow: 'Cases',
        heading: 'Wat we bouwden, en wat het opleverde.',
        lead: 'Geanonimiseerde verslagen van ons werk: het probleem zoals de klant het beschreef, wat we deden en wat de opdracht aantoonbaar heeft opgeleverd.',
        primary: 'Bespreek uw project',
        secondary: 'Bekijk wat we bouwen',
      },
      groups: [
        { eyebrow: 'AI-procesautomatisering', heading: 'Werk dat een beleid volgt' },
        { eyebrow: 'Enterprise UX en product', heading: 'Platforms die mensen elke dag gebruiken' },
        { eyebrow: 'DOME-tools', heading: 'De methode van begin tot eind' },
      ],
      note: 'Klantgegevens zijn overal geanonimiseerd: we noemen de sector en de functie, nooit de organisatie. En we vermelden alleen resultaten die de opdracht echt heeft opgeleverd.',
      closing: {
        heading: 'Herkent u een van deze problemen?',
        body: 'Laat ons weten welk, dan vertellen we hoe wij het zouden aanpakken.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },
    caseStudy: {
      back: 'Cases',
      challenge: 'De uitdaging',
      whatWeDid: 'Wat we deden',
      outcomes: 'Resultaat',
      client: 'Klant',
      role: 'Onze rol',
      capabilities: 'Expertise',
      cta: 'Bespreek een vergelijkbaar project',
      readNext: 'Lees ook',
      notFound: 'Case niet gevonden',
      closing: {
        heading: 'Herkent u dit probleem?',
        body: 'Vertel ons waar uw proces vastloopt, dan vertellen we hoe wij het zouden aanpakken.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },
    about: {
      hero: {
        eyebrow: 'Over DOME',
        heading: 'Advies over AI en product voor gereguleerde organisaties.',
        lead: 'We helpen organisaties in gereguleerde sectoren software te ontwerpen waar mensen mee willen werken, en werk te automatiseren op een manier die auditors kunnen volgen.',
        primary: 'Neem contact op',
        secondary: 'Bekijk ons werk',
      },
      who: {
        eyebrow: 'Wie we zijn',
        heading: 'Complex werk, eenvoudiger in gebruik en veiliger te automatiseren.',
        paragraphs: [
          'DOME werkt met teams voor inkoop, finance, compliance en supply chain in gereguleerde sectoren. We combineren enterprise UX met AI-procesautomatisering, zodat de systemen waarmee mensen dagelijks werken helder zijn in het gebruik en controleerbaar voor de audit.',
          'We bouwen en beheren ook onze eigen AI-tools. Ons advies over automatisering komt dus uit systemen die we zelf draaien, niet uit presentaties.',
        ],
      },
      facts: [
        { figure: '3', label: 'diensten, van UX-onderzoek tot controleerbare automatisering' },
        { figure: '6', label: 'AI-tools die we zelf bouwen en beheren' },
        { figure: '3', label: 'modelleveranciers, inclusief open-weight modellen op uw eigen infrastructuur' },
        { figure: '10', label: 'jaar samenwerking met ons partnerbureau' },
      ],
      setup: {
        eyebrow: 'Zo zijn we georganiseerd',
        heading: 'Per opdracht het juiste team',
        lead: 'We hebben geen bank vol consultants die op werk wachten. Elke opdracht krijgt de specialisten die het vraagstuk nodig heeft, onder één eindverantwoordelijke.',
        items: [
          { title: 'Opdrachtleider', body: 'Een ervaren lead is verantwoordelijk voor elke opdracht, van het eerste gesprek tot de overdracht. U hebt één aanspreekpunt en één persoon die instaat voor het resultaat.' },
          { title: 'Netwerk van specialisten', body: 'Uit ons netwerk van zelfstandige consultants halen we UX-onderzoekers, interface-ontwerpers, engineers, dataspecialisten en complianceadviseurs erbij wanneer het werk daarom vraagt.' },
          { title: 'Uitvoeringspartner', body: 'Grotere programma’s voeren we uit met Ionita Consulting. Zo kunnen we langere of bredere opdrachten bemensen zonder onze manier van werken te veranderen.' },
        ],
      },
      expect: {
        eyebrow: 'Hoe we samenwerken',
        heading: 'Wat u van ons kunt verwachten',
        items: [
          { title: 'Kleine, ervaren teams', body: 'De mensen die u bij de start ontmoet, doen ook het werk.' },
          { title: 'Governance vanaf het begin', body: 'Controles en auditeisen sturen het ontwerp vanaf de eerste workshop, niet pas na de livegang.' },
          { title: 'Eerst bewijs, dan een besluit', body: 'U ziet werkende tools en eerdere resultaten voordat u zich ergens aan verbindt.' },
        ],
      },
      partner: {
        eyebrow: 'Onze uitvoeringspartner',
        heading: 'Ionita Consulting',
        body: 'Grotere programma’s voeren we uit samen met Ionita Consulting uit Utrecht, met wie we al tien jaar samenwerken. Samen nemen we opdrachten aan die meer specialisten of een langere looptijd vragen.',
      },
      leadership: {
        eyebrow: 'Leiding',
        heading: 'Wie het werk leidt',
        name: 'Francesco Prodomo',
        role: 'Oprichter en opdrachtleider',
        bio: 'Tien jaar ervaring met productontwerp voor grote organisaties en met inkoopsystemen, van gebruikersonderzoek tot oplevering.',
        linkedin: 'LinkedIn-profiel',
      },
      where: {
        eyebrow: 'Waar we werken',
        heading: 'Gevestigd in Florence, actief in heel Europa',
        lead: 'We werken met klanten in het Engels en het Italiaans, op locatie of op afstand.',
        cta: 'Bekijk onze cases',
      },
      closing: {
        heading: 'Welk proces remt uw team af?',
        body: 'In een gesprek van 30 minuten weet u of we kunnen helpen.',
        primary: 'Plan een kennismakingsgesprek',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        heading: 'Vertel ons over uw proces.',
        lead: 'Plan een gesprek van 30 minuten of stuur ons een bericht. U hoort binnen twee werkdagen van ons.',
        primary: 'Plan een gesprek',
        secondary: 'Bekijk ons werk',
      },
      book: { heading: 'Plan een gesprek', lead: 'Kies een moment dat u uitkomt en een onderwerp, zodat we ons kunnen voorbereiden.' },
      calendar: {
        topicLegend: 'Waarover wilt u praten?',
        notLoaded: 'De agenda is nog niet geladen. Hij opent hier zodra u een duur kiest.',
        show30: 'Toon beschikbare tijden (30 min)',
        show15: 'Liever 15 minuten',
        notice: 'De agenda wordt geleverd door',
        noticeEnd: 'en laadt pas als u klikt. Vanaf dat moment geldt het privacybeleid van Cal.com; daarvoor gaat er niets naar hen toe.',
      },
      details: {
        eyebrow: 'Andere manieren om ons te bereiken',
        heading: 'Bedrijfsgegevens',
        email: 'E-mail',
        pec: 'Gecertificeerde e-mail (PEC)',
        booking: 'Gesprek plannen',
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
        bookDemo: 'Plan een besloten demo',
        demoNote: 'Live gedemonstreerd op echte facturen, met toelichting.',
        steps: [
          { title: 'Er komt een factuur binnen', body: 'Een leverancier mailt een factuur naar de crediteureninbox, of iemand uploadt haar via het formulier van de workflow. Een zelf gehoste n8n-workflow pakt de factuur op en start een run met één workflow-id die haar van begin tot eind volgt.' },
          { title: 'Uitlezen, dan toetsen aan het beleid', body: 'Document Intelligence leest de velden en betrouwbaarheidsscores uit. Daarna bepaalt een regelengine, gestuurd door data, de goedkeuringsroute op basis van bedragcategorie, inkoopcategorie, land en btw, de lijst met goedgekeurde leveranciers, de match met de inkooporder, valuta en dubbele facturen.' },
          { title: 'Eerst een advies, dan een menselijke goedkeuring', body: 'Onduidelijke facturen en facturen met een hoog bedrag krijgen een beslisnotitie van LLM Council. Een goedkeurder tekent op naam af op een beoordelingspagina in de huisstijl; facturen met een laag risico worden volgens het beleid automatisch goedgekeurd. Elke stap komt als één reconstrueerbare tijdlijn in het Governance Dashboard.' },
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
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo, handelend als Dome · Florence, Italië · btw-nummer IT07242670482' },
          ],
        },
      ],
      sibling: '← Privacybeleid',
    },
  },
}
