import type { Messages } from './types'

// Italian copy, written rather than translated: it follows the English meaning but uses Italian
// enterprise register and is kept at or below the English length, because Italian runs about 15%
// longer by default and the meta descriptions were being truncated in search results.
//
// Rules: address the reader as "voi" throughout, never "tu" (both slipped in before). Keep the
// English technical terms Italian professionals actually keep, audit trail, compliance, governance,
// UX, AI. Tool names stay in English. Prefer dropping articles and auxiliaries to padding.
export const it: Messages = {
  site: {
    description:
      'DOME è un progetto personale di Francesco Prodomo, con base a Firenze: strumenti AI funzionanti che mostrano come l’AI può lavorare dentro processi regolamentati restando governata, misurabile e spiegabile. Ogni strumento registra le proprie decisioni in un unico audit trail.',
    llmsIntro:
      'DOME è un insieme di strumenti AI costruiti e gestiti da una sola persona, Francesco Prodomo, come progetto sull’AI governata. Ogni strumento copre una fase di un metodo (discover, orchestrate, model, execute): analisi dei processi, un consiglio multi-modello, document e data intelligence, e Agent Flow, un flusso governato dalla fattura all’approvazione. Ogni strumento registra le proprie decisioni in un unico audit trail, visibile nella Governance Dashboard, e una persona nominata firma dove la policy lo richiede. Cinque strumenti si provano gratis dopo l’accesso; Agent Flow è una demo privata. Il codice è pubblico su GitHub. Il lavoro di consulenza di Francesco è su francescoprodomo.com.',
    llmsSections: { pages: 'Pagine', tools: 'Gli strumenti', legal: 'Note legali' },
    knowsAbout: ['Governance dell’AI', 'Flussi AI governati', 'Audit trail per l’AI', 'Approvazione con una persona nel ciclo', 'Document intelligence', 'Analisi dei processi', 'Revisione AI multi-modello', 'Design system'],
  },
  nav: {
    homeLabel: 'DOME, home',
    tools: 'Strumenti',
    agentFlow: 'Agent Flow',
    dome: 'DOME',
    about: 'Il progetto',
    contact: 'Contatti',
    signIn: 'Accedi',
    signOut: 'Esci',
    yourTools: 'I vostri strumenti',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    switchToLight: 'Passa al tema chiaro',
    switchToDark: 'Passa al tema scuro',
  },
  switcher: {
    language: 'Lingua',
    readIn: {
      en: 'Versione inglese di questa pagina',
      it: 'Versione italiana di questa pagina',
      nl: 'Versione olandese di questa pagina',
      de: 'Versione tedesca di questa pagina',
    },
  },
  footer: {
    tagline: 'Un progetto personale sull’AI governata, di Francesco Prodomo.',
    navLabel: 'Piè di pagina',
    project: 'Progetto',
    elsewhere: 'Altrove',
    workWith: 'Lavora con Francesco',
    github: 'Codice su GitHub',
    linkedin: 'Francesco su LinkedIn',
    pec: 'PEC',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di servizio',
    cookies: 'Cookie policy',
    rights: 'Tutti i diritti riservati.',
  },
  cookieNotice: {
    lead: 'Dome usa solo cookie tecnici.',
    body: 'Uno mantiene l’accesso, due ricordano tema e lingua. Contiamo le visite in forma aggregata, senza cookie. Nessun tracciamento, nessuna pubblicità.',
    link: 'Leggete la cookie policy',
    dismiss: 'Ho capito',
  },
  contactForm: {
    heading: 'Scrivetemi',
    intro: 'Scegliete un argomento, così so di che cosa si tratta.',
    nameLabel: 'Nome',
    namePlaceholder: 'Il vostro nome',
    emailLabel: 'Email',
    emailPlaceholder: 'nome@esempio.it',
    topicLabel: 'Argomento',
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Che cosa volete dirmi?',
    privacyNote: 'Uso i vostri dati solo per rispondervi. Per i dettagli, leggete la mia',
    privacyLink: 'informativa sulla privacy',
    send: 'Invia messaggio',
    sending: 'Invio in corso',
    successTitle: 'Messaggio ricevuto',
    successBody: 'Grazie per avermi scritto. Rispondo entro due giorni lavorativi.',
    sendAnother: 'Invia un altro messaggio',
    rateLimited: 'Avete raggiunto il limite del modulo di contatto. Riprovate tra un minuto.',
    genericError: 'Qualcosa non ha funzionato. Riprovate o scrivetemi direttamente.',
  },
  errors: {
    notFoundTitle: 'Pagina non trovata',
    notFoundBody: 'La pagina che cercate non esiste.',
    errorTitle: 'Qualcosa è andato storto',
    errorBody: 'Ricaricate la pagina.',
    homeLink: 'Torna alla home',
  },
  breadcrumbHome: 'Home',
  meta: {
    home: {
      name: 'Home',
      title: 'DOME | Strumenti di AI funzionanti, verificabili',
      description:
        'Progetto personale di Francesco Prodomo: strumenti AI funzionanti che mostrano come l’AI può lavorare in processi regolamentati restando governata e spiegabile.',
      ogDescription:
        'Sei strumenti AI e un solo audit trail. Provateli gratis, o guardate una fattura passare dall’arrivo a un approvatore nominativo.',
      twitterDescription: 'Strumenti di AI funzionanti, che potete verificare. Provarli è gratis.',
      imageAlt: 'DOME: strumenti di AI funzionanti, verificabili',
    },
    dome: {
      name: 'Strumenti',
      title: 'Gli strumenti: AI governata da provare | DOME',
      description:
        'Sei strumenti operativi, dalla scoperta del processo all’esecuzione verificabile: cinque aperti a chiunque acceda, e Agent Flow come demo privata.',
      ogDescription:
        'Analisi dei processi, document e data intelligence, un consiglio multi-modello, un flusso agentico governato e una dashboard di governance.',
      imageAlt: 'Gli strumenti DOME',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer: mappatura dei processi con l’AI | DOME',
      description:
        'Trasforma la descrizione in linguaggio naturale di un processo aziendale in una mappa strutturata, con analisi di governance e valutazione dell’automazione.',
      ogDescription:
        'Descrivete un processo aziendale in linguaggio naturale. Ottenete una mappa strutturata, l’analisi delle lacune di governance e una valutazione dell’automazione con AI.',
      twitterDescription:
        'Descrivete un processo in linguaggio naturale. Ricevete una mappa strutturata, le lacune di governance e le opportunità di automazione.',
      imageAlt: 'DOME Process Analyzer: mappatura dei processi guidata dalla governance',
      twitterImageAlt: 'DOME Process Analyzer',
    },
    dataIntelligence: {
      name: 'Data Intelligence',
      title: 'Data Intelligence: dashboard AI verificabili | DOME',
      description:
        'Caricate un foglio di calcolo e ricevete una dashboard governata: grafici scelti automaticamente e domande in linguaggio naturale.',
      ogDescription:
        'Caricate un foglio di calcolo. Ricevete una dashboard di analisi governata, con scelta deterministica dei grafici e domande in linguaggio naturale, senza configurazione manuale.',
      twitterDescription:
        'Caricate un foglio di calcolo. Ottenete una dashboard governata con grafici automatici e domande in linguaggio naturale, senza configurazione.',
      imageAlt: 'DOME Data Intelligence: dashboard di analisi governata',
      twitterImageAlt: 'DOME Data Intelligence',
    },
    llmCouncil: {
      name: 'LLM Council',
      title: 'LLM Council: decisioni discusse da più modelli AI | DOME',
      description:
        'Sottoponete una domanda strategica a tre consulenti AI: deliberano separatamente, si confrontano e producono un verdetto governato con audit trail completo.',
      imageAlt: 'DOME LLM Council: deliberazione AI governata',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence: estrazione dati con audit | DOME',
      description:
        'Estrae dati strutturati da qualsiasi documento: fatture, referti di laboratorio, bollette, contratti. Con validazione di governance e audit trail completo.',
      ogDescription:
        'Caricate un documento e ricevete un’estrazione strutturata e governata: valori dei campi, punteggi di affidabilità e un report di governance su 16 regole, in pochi secondi.',
      twitterDescription:
        'Dati strutturati da qualsiasi documento. Validazione di governance, punteggi di affidabilità e audit trail completo, senza modelli predefiniti.',
      imageAlt: 'DOME Document Intelligence: estrazione governata dai documenti',
      twitterImageAlt: 'DOME Document Intelligence',
    },
    governanceDashboard: {
      name: 'Governance Dashboard',
      title: 'Governance Dashboard: audit trail delle decisioni AI | DOME',
      description:
        'Audit trail in tempo reale, report di conformità ed export PDF su tutti gli strumenti DOME: ogni evento, confidenza e decisione umana in un’unica vista.',
      ogDescription:
        'Audit trail, report di conformità ed esportazione in PDF per tutti e quattro gli strumenti AI di DOME. Ogni evento di governance e ogni decisione umana in un unico posto.',
      twitterDescription: 'Audit trail in tempo reale e report di conformità per tutti e quattro gli strumenti AI di DOME.',
      imageAlt: 'DOME Governance Dashboard: audit trail e report di conformità tra gli strumenti',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow: dalla fattura all’approvazione, governata | DOME',
      description:
        'Dalla fattura all’approvazione, governata: estrazione dei dati, regole di policy, council multi-modello e firma di una persona. Ogni passaggio resta agli atti.',
      ogDescription:
        'Un flusso governato dalla fattura all’approvazione tra gli strumenti DOME, con un’approvazione umana e un audit trail completo.',
      twitterDescription: 'Flusso governato dalla fattura all’approvazione, con approvazione umana e audit trail completo.',
      imageAlt: 'DOME Agent Flow: flusso governato dalla fattura all’approvazione',
      twitterImageAlt: 'DOME Agent Flow',
    },
    about: {
      name: 'Il progetto',
      title: 'DOME, un progetto personale sull’AI governata | DOME',
      description:
        'Perché DOME esiste e chi lo costruisce: un progetto personale di Francesco Prodomo sull’AI che resta governata dentro processi regolamentati.',
      ogDescription:
        'Sei strumenti, quattro lingue e un solo audit trail, costruiti da una persona.',
      imageAlt: 'Il progetto DOME',
    },
    contact: {
      name: 'Contatti',
      title: 'Contatti | DOME',
      description:
        'Un feedback sugli strumenti, l’accesso alla demo di Agent Flow o una domanda su come funziona qualcosa. Rispondo entro due giorni lavorativi.',
      ogDescription:
        'Scrivetemi degli strumenti. Rispondo entro due giorni lavorativi.',
      imageAlt: 'Contatti DOME',
    },
    privacy: {
      name: 'Informativa privacy',
      title: 'Informativa privacy | DOME',
      description:
        'Come DOME raccoglie, usa e protegge i dati personali di visitatori e utenti registrati, e come esercitare i diritti previsti dal GDPR.',
      imageAlt: 'DOME',
    },
    terms: {
      name: 'Termini di servizio',
      title: 'Termini di servizio | DOME',
      description:
        'I termini d’uso degli strumenti DOME: account, uso consentito, elaborazione con AI, responsabilità e legge applicabile.',
      imageAlt: 'DOME',
    },
    cookies: {
      name: 'Cookie policy',
      title: 'Cookie policy | DOME',
      description:
        'I cookie e le voci di memoria del browser usati da domelayer.com e dagli strumenti DOME: che cosa contengono, quanto durano e perché non serve consenso.',
      imageAlt: 'DOME',
    },
  },
  media: {
    homeHeroStill: 'Due colleghi esaminano un flusso di approvazione su un laptop',
    aiProcessAutomationHero:
      'Scrivania amministrativa con un monitor che mostra un diagramma di approvazione e una pila di fatture',
    enterpriseUxHero: 'Designer che applica un post-it blu su una parete di wireframe',
    capabilitiesHero: 'Corridoio di una sala server illuminato di bianco e blu',
    aboutHero: 'I tetti di Firenze e la cupola del Duomo visti dalla finestra di uno studio',
    caseStudiesHero: 'Mappe di processo e una dashboard su tablet su un tavolo di legno chiaro',
    contactHero: 'Sala riunioni con tavolo rotondo accanto a una finestra su Firenze',
    caseProcurementWorkflowRedesign:
      'Specialista acquisti al lavoro su due monitor con un’interfaccia di acquisto',
    caseAiComplianceAssessments:
      'Analista che esamina una norma evidenziata su tablet accanto a un raccoglitore',
    caseMetalsTradingPlatform:
      'Magazzino di lingotti di alluminio con un tablet che mostra grafici dei prezzi',
    caseFoodTraceabilityPlatform:
      'Mano che scansiona un’etichetta QR su una cassetta di verdure in un centro di distribuzione',
    caseTradingAppRedesign:
      'Smartphone con un’app di trading e grafici dei prezzi, sullo sfondo una strada di città',
    caseAiProcurementPlatform: 'Tre colleghi davanti a uno schermo con un diagramma di flusso',
    caseAiTrainingVideos:
      'Piccolo studio video con telecamera, luce e un monitor con una schermata formativa',
    francescoProdomo: 'Francesco Prodomo',
    tabletMockup: 'Uno strumento DOME su un tablet',
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'Immagine generata con AI',

  common: {
    topics: ['Feedback', 'Accesso alla demo', 'Altro'],
    tryTool: 'Prova uno strumento',
    watchRun: 'Guarda il flusso',
    askDemo: 'Chiedi l’accesso alla demo',
    run: {
      badge: 'Demo privata',
      diagramLabel: 'Il flusso, in ordine: arrivo, estrazione, regole della policy, sintesi del council, approvatore nominativo',
      stages: ['Arrivo', 'Estrazione', 'Regole', 'Council', 'Approvatore'],
      steps: [
        { title: 'Arriva una fattura', body: 'Un flusso self-hosted la prende in carico e apre un’esecuzione governata che la segue dall’inizio alla fine.' },
        { title: 'Estratta e verificata sulla policy', body: 'Document Intelligence legge la fattura; un motore di regole decide il percorso di approvazione da importo, categoria, fornitore e ordine.' },
        { title: 'Una sintesi del council, poi decide una persona', body: 'Le fatture ambigue o di importo elevato ricevono una sintesi multi-modello, e firma un approvatore nominativo.' },
        { title: 'Un record ricostruibile', body: 'Ogni passaggio arriva nella Governance Dashboard come un’unica sequenza.' },
      ],
    },
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'AI governata, nella pratica',
        heading: 'Strumenti di AI funzionanti, che potete verificare.',
        lead: 'DOME mostra, con strumenti che funzionano, come l’AI può lavorare dentro processi regolamentati restando governata, misurabile e spiegabile.',
        note: 'Provarli è gratis. Accedete con un magic link, Google o GitHub.',
        scrollCue: 'Scorri',
      },
      method: {
        eyebrow: 'Il metodo DOME',
        heading: 'Quattro fasi, un solo audit trail.',
        lead: 'Ogni strumento copre una fase, dalla mappa di un processo alla sua esecuzione. La governance fa parte di ogni fase, così ogni esecuzione finisce nello stesso registro.',
        phaseLabel: 'Fase',
        phases: [
          { title: 'Discover', body: 'Descrivete un processo in linguaggio naturale e ottenete una mappa, i sistemi coinvolti e le lacune di governance.' },
          { title: 'Orchestrate', body: 'Ponete una domanda difficile a tre modelli che si mettono in discussione a vicenda, con il ragionamento agli atti.' },
          { title: 'Model', body: 'Estraete i campi dai documenti e classificate i dati, con un indice di confidenza su ogni risultato.' },
          { title: 'Execute', body: 'Portate una fattura dall’arrivo a un approvatore nominativo, con ogni passaggio registrato.' },
        ],
        governance: 'Governance Dashboard: un solo audit trail per tutte le fasi',
        openDashboard: 'Apri la dashboard',
      },
      tools: {
        eyebrow: 'Gli strumenti',
        heading: 'Strumenti funzionanti, aperti a chiunque acceda.',
        lead: 'Gli strumenti coprono il percorso dalla scoperta del processo all’esecuzione verificabile. Cinque si possono provare; Agent Flow è una demo privata.',
        all: 'Vedi tutti gli strumenti',
      },
      run: {
        eyebrow: 'Il flusso in azione',
        heading: 'Una fattura dalla casella all’approvazione, tutto agli atti.',
        lead: 'Agent Flow mette in fila gli strumenti in un unico flusso governato. Ogni esecuzione segue una fattura reale dall’arrivo alla persona nominata che la approva.',
        cta: 'Come funziona Agent Flow',
      },
      closing: {
        heading: 'Provate uno strumento, o guardate il flusso.',
        body: 'Cinque strumenti sono aperti a chiunque acceda. Agent Flow è una demo privata: guardate come funziona, o chiedete l’accesso.',
      },
      hire: 'Volete lavorare con Francesco? Il suo lavoro di consulenza è su',
    },
    dome: {
      hero: {
        eyebrow: 'Gli strumenti',
        heading: 'Strumenti di AI funzionanti per un’automazione governata.',
        lead: 'DOME è un insieme di strumenti che costruisco e gestisco per mostrare com’è, in pratica, l’AI governata. Cinque sono attivi; il sesto, Agent Flow, è una demo privata.',
        primary: 'Accedi per provarli',
        secondary: 'Guarda il flusso',
        note: 'Gratis. Accedete con un magic link, Google o GitHub; nessuna password da ricordare.',
      },
      blocks: {
        eyebrow: 'I mattoni',
        heading: 'Quattro strumenti, uno per ogni fase del metodo.',
        openTool: 'Apri lo strumento',
        details: 'Come funziona',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Descrivete un processo in linguaggio naturale e ottenete una mappa strutturata, i sistemi coinvolti, le lacune di governance e le opportunità di automazione.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Ponete una domanda strategica a tre consulenti AI. Ragionano separatamente, si mettono in discussione e restituiscono un verdetto con tutto il ragionamento agli atti.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Estrae campi strutturati da fatture, contratti e report, con un indice di confidenza per ogni campo e 16 controlli di governance.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Caricate un foglio di calcolo e ottenete una dashboard governata. Un modello classifica i dati; a scegliere i grafici è un motore di regole, non il modello.' },
        ],
      },
      agentFlow: {
        eyebrow: 'Il metodo dall’inizio alla fine',
        heading: 'Agent Flow: dalla fattura all’approvazione, ogni passaggio agli atti.',
        lead: 'Agent Flow mette in fila i mattoni in un unico flusso governato, con una persona che firma dove la policy lo richiede.',
        cta: 'Come funziona Agent Flow',
      },
      governance: {
        eyebrow: 'Il livello di governance',
        heading: 'Governance Dashboard',
        lead: 'Un solo audit trail su tutti gli strumenti: ogni evento, indice di confidenza e decisione umana in un unico punto, con report PDF per l’audit interno.',
        openDashboard: 'Apri la dashboard',
        details: 'Come funziona',
      },
      standards: {
        eyebrow: 'Come sono costruiti',
        heading: 'Governati fin dal progetto, non dopo.',
        items: [
          { title: 'Ospitati nell’UE', body: 'Gli strumenti e i loro dati girano su infrastruttura nell’Unione europea; account e lavori salvati stanno a Francoforte.' },
          { title: 'Tracciati per costruzione', body: 'Ogni strumento registra che cosa ha fatto, quanto era sicuro e chi ha rivisto il risultato.' },
          { title: 'Più di un fornitore AI', body: 'Claude, di Anthropic, fa il lavoro AI in ogni strumento; LLM Council aggiunge OpenAI e Google, così tre fornitori si controllano a vicenda.' },
          { title: 'Codice in chiaro', body: 'Il codice di ogni strumento è pubblico su GitHub, con i suoi test e la sua CI.' },
        ],
      },
      closing: {
        heading: 'Provateli su un vostro esempio.',
        body: 'Accedete e provate gratis uno qualsiasi dei cinque strumenti. Per Agent Flow, chiedete l’accesso alla demo e vi preparo tutto io.',
      },
      hire: 'Volete una dimostrazione sul vostro processo? Fa parte della revisione dell’automazione su',
    },
    about: {
      hero: {
        eyebrow: 'Il progetto DOME',
        heading: 'Un progetto personale sull’AI governata.',
        lead: 'Costruisco DOME per mostrare che l’AI può lavorare dentro processi regolamentati e restare governata: ogni decisione tracciabile, ogni eccezione affidata a una persona, e il codice pubblico.',
      },
      why: {
        eyebrow: 'Il progetto',
        heading: 'Perché esiste',
        paragraphs: [
          'Quasi tutte le demo di AI saltano proprio ciò che preoccupa un team regolamentato: chi ha approvato cosa, su quali prove, in base a quale regola. DOME parte da lì.',
          'Ogni strumento copre una fase di un metodo, dalla mappa di un processo alla sua esecuzione, e ogni esecuzione finisce nello stesso audit trail. Agent Flow li mette in fila in un unico flusso, con una persona nominata a decidere.',
          'È anche il posto dove imparo. Ogni strumento è un’occasione per provare un nuovo modello, uno schema di agenti o un’idea di design, e per tenere traccia di ciò che ha funzionato.',
        ],
      },
      facts: [
        { figure: '6', label: 'strumenti: cinque aperti a chiunque acceda, una demo privata' },
        { figure: '4', label: 'lingue su questo sito: inglese, italiano, olandese e tedesco' },
        { figure: '1', label: 'audit trail condiviso da tutti gli strumenti' },
      ],
      builder: {
        eyebrow: 'Chi lo costruisce',
        heading: 'Una persona, dall’inizio alla fine.',
        name: 'Francesco Prodomo',
        bio: 'Costruisce e gestisce DOME: gli strumenti, il design system e il sito. Dieci anni di product design enterprise e sistemi di procurement.',
        workWith: 'Lavora con me su francescoprodomo.com',
        github: 'Il codice su GitHub',
        linkedin: 'LinkedIn',
      },
      closing: {
        heading: 'Provate uno strumento, o guardate il flusso.',
        body: 'Cinque strumenti sono aperti a chiunque acceda. Agent Flow è una demo privata: guardate come funziona, o chiedete l’accesso.',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contatti',
        heading: 'Scrivetemi degli strumenti.',
        lead: 'Un feedback, l’accesso alla demo di Agent Flow o una domanda su come funziona qualcosa. Rispondo entro due giorni lavorativi.',
      },
      details: {
        heading: 'Altri modi per contattarmi',
        email: 'Email',
        pec: 'Posta certificata (PEC)',
        location: 'Base',
        locationValue: 'Firenze, Italia',
        code: 'Codice e segnalazioni',
        legal: 'Francesco Prodomo · P.IVA 07242670482',
      },
      hire: {
        heading: 'Volete lavorare con me?',
        text: 'La mia consulenza, e la prenotazione di una call, sono su',
      },
    },
    tools: {
      back: 'Strumenti',
      whatItDoes: 'Cosa fa',
      howItWorks: 'Come funziona',
      method: 'Metodo DOME',
      processAnalyzer: {
        phase: 'Discover',
        lead: 'Trasforma la descrizione in linguaggio naturale di un processo aziendale in una mappa strutturata, con analisi di governance e valutazione dell’automazione.',
        open: 'Apri Process Analyzer',
        whatItDoes:
          'Process Analyzer prende descrizioni di processo non strutturate e restituisce output visivi e strutturati, su cui responsabili operativi e process owner possono agire subito. Individua i sistemi coinvolti in ogni passaggio, stima i tempi di lavorazione e segnala dove i controlli di governance mancano o sono insufficienti. Valuta inoltre quali parti del processo si prestano all’automazione con AI, indicando con chiarezza quale supervisione servirebbe prima di automatizzare.',
        howItWorks: {
          heading: 'Tre passaggi dalla descrizione alla mappa.',
          steps: [
            { title: 'Descrivete il processo', body: 'Descrivete a parole qualsiasi processo aziendale: un flusso di acquisto, una catena di approvazioni, un onboarding. Nessun modello o input strutturato.' },
            { title: 'Ricevete una mappa strutturata', body: 'Lo strumento genera un diagramma di flusso (Mermaid.js), individua i sistemi coinvolti, stima i tempi di ogni fase e fa emergere i punti scoperti sul piano della governance.' },
            { title: 'Individuate cosa automatizzare', body: 'Ogni passaggio viene valutato per il potenziale di automazione con AI, con un indice di confidenza e una spiegazione chiara delle misure di governance necessarie prima del rilascio.' },
          ],
        },
        method: {
          phase: 'Discover',
          body: 'La fase Discover mappa ciò che esiste davvero prima di progettare qualsiasi architettura AI. Process Analyzer ne è l’applicazione pratica: costruisce l’inventario dei processi, fa emergere le lacune normative e di governance e produce la base strutturata su cui poggiano tutte le fasi successive di DOME. Non si progetta un rilascio senza aver prima capito i processi.',
        },
      },
      llmCouncil: {
        phase: 'Orchestrate',
        lead: 'Ponete una domanda strategica a tre consulenti AI. Ragionano separatamente, si confrontano e restituiscono un verdetto governato, con audit trail completo.',
        open: 'Apri LLM Council',
        whatItDoes:
          'LLM Council struttura la deliberazione assistita dall’AI sulle decisioni ad alto impatto. Invece della risposta di un singolo modello, riunisce tre consulenti che ragionano in modo indipendente, contestano le reciproche posizioni e risolvono il disaccordo con un contraddittorio strutturato. Il risultato non è solo una risposta: è una deliberazione verificabile. Ogni passaggio del ragionamento, ogni obiezione e ogni punto di consenso o di dissenso resta registrato e disponibile per la revisione di governance. Chi decide riceve un verdetto da mettere alla prova, non solo da accettare.',
        howItWorks: {
          heading: 'Chiedere, deliberare, decidere.',
          steps: [
            { title: 'Ponete una domanda strategica', body: 'Sottoponete qualsiasi questione ad alto impatto, come l’ingresso in un mercato, una valutazione del rischio o un compromesso di policy. Nessun formato richiesto: basta scrivere a parole.' },
            { title: 'Tre consulenti deliberano in autonomia', body: 'Tre consulenti AI analizzano la domanda da prospettive diverse. Prima ragionano ciascuno per conto proprio, poi si confrontano sulle rispettive posizioni, facendo emergere il disaccordo invece di nasconderlo.' },
            { title: 'Un verdetto governato, con audit trail completo', body: 'Il Council produce un verdetto di sintesi che riporta i punti di consenso e documenta le posizioni dissenzienti. Ogni passaggio del ragionamento è registrato: l’intera deliberazione resta disponibile per la revisione e l’approvazione di governance.' },
          ],
        },
        method: {
          phase: 'Orchestrate',
          body: 'La fase Orchestrate garantisce che le decisioni rilevanti non siano affidate alla risposta di un singolo modello. LLM Council applica questo principio: impone un disaccordo strutturato, richiede un ragionamento indipendente prima di cercare il consenso e produce un audit trail conforme ai requisiti di governance. Se le altre fasi di DOME limitano ciò che l’AI può fare, Orchestrate governa il modo in cui arriva alle conclusioni, rendendo verificabile il ragionamento stesso.',
        },
      },
      documentIntelligence: {
        phase: 'Model',
        lead: 'Estrae dati strutturati da qualsiasi documento: fatture, referti di laboratorio, bollette, contratti. Con validazione di governance e audit trail completo.',
        open: 'Apri Document Intelligence',
        whatItDoes:
          'Document Intelligence trasforma documenti non strutturati in dati strutturati e validati, senza inserimento manuale né modelli su misura. Riconosce in automatico tipo di documento e settore, estrae ogni campo rilevante con un indice di confidenza e applica un motore di regole di governance che controlla anomalie, campi obbligatori mancanti, date scadute, importi elevati, possibile esposizione di dati personali e altro. Ogni estrazione viene salvata in uno storico consultabile per l’audit. Il risultato è un dataset governato ed esportabile, pronto per i sistemi a valle.',
        howItWorks: {
          heading: 'Caricare, estrarre, validare.',
          steps: [
            { title: 'Caricate o fotografate un documento', body: 'Caricate un PDF o un’immagine, oppure acquisite il documento direttamente dalla fotocamera. Il sistema accetta fatture, referti, bollette, contratti, estratti conto e altro. Nessun modello o configurazione.' },
            { title: 'Estrazione e validazione di governance', body: 'I campi vengono estratti con il relativo indice di confidenza, tipo di documento e settore sono riconosciuti in automatico e 16 regole di governance segnalano anomalie, dati mancanti, date scadute, importi elevati e possibili criticità di compliance.' },
            { title: 'Verificate, salvate, esportate', body: 'Controllate ogni campo estratto con sezione, tipo e indice di confidenza. Esaminate le segnalazioni di governance per gravità. Esportate in CSV per i processi a valle o salvate nello storico per audit e tracciabilità.' },
          ],
        },
        method: {
          phase: 'Model',
          body: 'La fase Model è quella in cui le decisioni AI governate producono risultati operativi. Document Intelligence è il punto d’ingresso per le organizzazioni che devono ricavare, su larga scala, dati strutturati da documenti non strutturati. Invece di fidarsi dell’estrazione grezza del modello, ogni output viene validato da un motore di regole deterministico prima di arrivare ai sistemi a valle: ciò che entra nei vostri flussi è verificabile, coerente e difendibile. È qui che il ciclo DOME trasforma la mappatura dei processi in esecuzione governata.',
        },
      },
      dataIntelligence: {
        phase: 'Orchestrate & Model',
        lead: 'Caricate un foglio di calcolo e ottenete una dashboard analitica governata, con scelta automatica dei grafici e domande in linguaggio naturale.',
        open: 'Apri Data Intelligence',
        whatItDoes:
          'Data Intelligence trasforma i dati di un foglio di calcolo in una dashboard analitica governata, senza configurazione manuale. Il sistema classifica ogni colonna per tipo (data, categoria, metrica), poi un motore di regole stabilisce quali grafici sono appropriati. La scelta dei grafici è deterministica e verificabile: gli stessi dati producono sempre le stesse scelte, e ogni regola di governance applicata viene registrata. Un pannello di domande in linguaggio naturale permette agli analisti di interrogare i dati una volta generata la dashboard.',
        howItWorks: {
          heading: 'Caricare, classificare, analizzare.',
          steps: [
            { title: 'Caricate un foglio di calcolo', body: 'Caricate un file CSV, XLSX o XLS. Lo strumento riceve nomi delle colonne, tipi di dato, valori di esempio e aggregati. Le righe grezze vengono scartate subito e mai conservate.' },
            { title: 'Una dashboard generata con governance', body: 'Un modello linguistico classifica ogni colonna. Poi è un motore di regole deterministico, non il modello, a scegliere il grafico adatto a ogni relazione tra i dati. Il modello suggerisce, la governance decide.' },
            { title: 'Domande in linguaggio naturale', body: 'Generata la dashboard, fate domande sui dati a parole. Il pannello lavora sul riepilogo delle colonne classificate, non sui dati grezzi.' },
          ],
        },
        method: {
          phase: 'Orchestrate & Model',
          body: 'Le fasi Orchestrate e Model definiscono come i componenti AI vengono coordinati e configurati all’interno di un quadro di governance. Data Intelligence lo dimostra in pratica: il modello linguistico si limita a classificare le colonne, un compito circoscritto e a basso rischio, mentre le decisioni che contano sulla presentazione dei dati spettano a un motore di regole deterministico. Questa separazione delle responsabilità è lo schema architetturale che DOME applica a ogni rilascio di AI governata.',
        },
      },
      governanceDashboard: {
        phase: 'Govern',
        lead: 'Il livello di osservazione e compliance su tutti gli strumenti AI di DOME. Un’unica vista autenticata di ogni evento di governance, indice di confidenza e decisione umana, con export PDF per audit e autorità di vigilanza.',
        open: 'Apri la Governance Dashboard',
        whatItDoes:
          'La Governance Dashboard è il livello di osservazione trasversale dell’intera piattaforma DOME. Raccoglie gli eventi di governance generati da tutti e quattro gli strumenti AI in un unico audit trail consultabile. Responsabili operativi, compliance officer e auditor possono esaminare ogni decisione dell’AI, analizzare la distribuzione della confidenza, vedere quali regole sono scattate e segnalare le azioni che richiedono un intervento umano, senza entrare nei singoli strumenti. I report PDF si generano su richiesta, per qualsiasi periodo e gruppo di strumenti.',
        howItWorks: {
          heading: 'Dall’uso degli strumenti al report di compliance.',
          steps: [
            { title: 'Usate gli strumenti come sempre', body: 'Usate uno qualsiasi dei quattro strumenti DOME: Process Analyzer, LLM Council, Data Intelligence o Document Intelligence. Ogni richiesta genera in automatico un evento di governance con l’azione, l’indice di confidenza, le regole applicate e l’eventuale raccomandazione di revisione umana.' },
            { title: 'Esaminate l’audit trail', body: 'L’Event Log mostra ogni evento di governance dal più recente. Filtrate per strumento, periodo, tipo di azione, soglia di confidenza o stato della revisione umana. Aprite un evento per consultare il record completo della decisione.' },
            { title: 'Esportate per la compliance', body: 'Generate con un clic un report di audit in PDF per qualsiasi periodo e gruppo di strumenti, con sintesi, distribuzione della confidenza e tabella completa degli eventi e delle decisioni di revisione: pronto per l’audit interno o per le autorità di vigilanza.' },
          ],
        },
        method: {
          phase: 'Govern',
          body: 'Il livello Govern è il filo che attraversa tutte le altre fasi di DOME. Se Discover mappa i processi, Orchestrate coordina le decisioni e Model estrae o analizza i dati, Govern registra ciò che è davvero accaduto e garantisce che si possa spiegare, verificare e contestare. La Governance Dashboard rende concreto questo livello: un registro vivo e consultabile che trasforma l’attività dell’AI in prove documentate, la base di qualsiasi rilascio in un contesto regolamentato.',
        },
      },
      agentFlow: {
        phase: 'Execute',
        heading: 'Agent Flow governato',
        lead: 'Un flusso n8n self-hosted che esegue un vero processo, dalla fattura all’approvazione, attraverso gli strumenti DOME: estrazione, motore di regole di policy, council multi-modello e approvazione umana. Ne risulta un audit trail completo, che la Governance Dashboard ricostruisce.',
        openQueue: 'Apri la coda di approvazione',
        askDemo: 'Chiedi l’accesso alla demo',
        demoNote: 'È una demo privata, su fatture reali. Chiedetela e vi preparo l’accesso.',
        steps: [
          { title: 'Arriva una fattura', body: 'Un fornitore invia la fattura alla casella del ciclo passivo, oppure la si carica dal modulo del flusso. Un flusso n8n self-hosted la prende in carico e apre un’esecuzione governata, con un unico identificativo dall’inizio alla fine.' },
          { title: 'Estrazione, poi verifica sulla policy', body: 'Document Intelligence estrae campi e confidenza; un motore di regole guidato dai dati sceglie poi il percorso di approvazione in base a fascia d’importo, categoria di spesa, paese e partita IVA, fornitori autorizzati, corrispondenza con l’ordine, valuta e duplicati.' },
          { title: 'Sintesi del Council, poi decide una persona', body: 'Le fatture ambigue o di importo elevato ricevono una sintesi multi-modello di LLM Council. Un approvatore nominativo firma su una pagina di revisione dedicata; quelle a basso rischio sono approvate in automatico secondo la policy. Ogni passaggio confluisce nella Governance Dashboard in un’unica sequenza ricostruibile.' },
        ],
      },
    },
    privacy: {
      back: '← Torna a domelayer.com',
      updated: 'Ultimo aggiornamento: novembre 2026',
      title: 'Informativa sulla privacy',
      appliesTo:
        'Si applica a: domelayer.com e a tutti i sottodomini (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      sections: [
        {
          heading: 'Chi siamo',
          blocks: [
            { p: 'Dome è un progetto personale di Francesco Prodomo, libero professionista con partita IVA italiana (P.IVA 07242670482). In questa informativa, i termini “Dome”, “noi” e “ci” si riferiscono a Francesco Prodomo.' },
            { p: 'Sede: Firenze, Italia\nContatto per le questioni di privacy: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo è il titolare del trattamento di tutti i dati personali raccolti tramite domelayer.com e gli strumenti collegati.' },
          ],
        },
        {
          heading: 'Ambito di questa informativa',
          blocks: [
            { p: 'Questa informativa spiega quali dati personali raccogliamo quando visitate domelayer.com o vi registrate per usare gli strumenti AI di Dome, perché li raccogliamo, per quanto tempo li conserviamo e quali diritti avete su di essi.' },
            { p: 'Questa informativa si applica esclusivamente a domelayer.com e agli strumenti del portfolio Dome. Non si applica alle consulenze per clienti, in cui Francesco Prodomo progetta e rilascia sistemi AI o software: tali incarichi sono regolati da contratti e accordi sul trattamento dei dati distinti, negoziati per ciascun progetto.' },
            { p: 'Non vendiamo dati personali. Non usiamo dati personali a fini pubblicitari.' },
          ],
        },
        {
          heading: 'Quali dati raccogliamo e perché',
          blocks: [
            { h3: 'Visitatori del sito (senza account)' },
            { p: 'Quando visitate domelayer.com non impostiamo cookie analitici né script di tracciamento di terze parti; contiamo le visite in forma aggregata, senza cookie (vedi sotto). Possono essere impostati due cookie funzionali: `dome-theme` ricorda la vostra preferenza per il tema chiaro o scuro e `dome_locale` ricorda la lingua che avete scelto. Nessuno dei due contiene dati personali né viene usato per il tracciamento. L’elenco completo, compreso ciò che resta nella memoria del browser, è nella [cookie policy](cookies).' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f) GDPR), per memorizzare una preferenza di visualizzazione che avete scelto.' },
            { p: 'Come per qualsiasi sito web, i nostri fornitori di hosting conservano i normali log del server, che includono il vostro indirizzo IP, per motivi di sicurezza e per mantenere il servizio in funzione. Se una pagina non funziona, il nostro sistema di monitoraggio degli errori riceve un rapporto tecnico (ad esempio il tipo di browser e l’indirizzo della pagina). I rapporti di errore non includono il vostro nome né il vostro indirizzo email.' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f), per la sicurezza e l’affidabilità del sito.' },
            { h3: 'Modulo di contatto' },
            { p: 'Se ci scrivete tramite il modulo di contatto o per email, riceviamo il vostro nome, il vostro indirizzo email e il messaggio (dal modulo, anche l’argomento), e li usiamo solo per rispondervi. Per proteggere il modulo dagli abusi, il nostro fornitore di hosting conta gli invii per indirizzo IP nell’arco di un minuto; il conteggio non viene conservato.' },
            { basis: 'Base giuridica: misure precontrattuali adottate su vostra richiesta (art. 6, par. 1, lett. b) e legittimo interesse (art. 6, par. 1, lett. f) a rispondere alle richieste commerciali e a proteggere il modulo dagli abusi.' },
            { p: '**Misurazione aggregata.** Contiamo le visite a domelayer.com con Umami, senza cookie e senza conservare il vostro indirizzo IP, che serve solo a ricavare una posizione approssimativa e un codice di visitatore che cambia ogni mese. Vediamo solo dati complessivi, mai le singole persone. I dettagli sono nella [cookie policy](cookies). Non introdurremo mai strumenti di analisi basati su cookie o tracker pubblicitari senza aggiornare questa informativa e, ove la legge lo richieda, senza aver prima ottenuto il vostro consenso.' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f GDPR), a comprendere in forma aggregata come viene usato il sito.' },
            { h3: 'Utenti registrati degli strumenti' },
            { p: 'Quando vi registrate per usare gli strumenti AI di Dome, raccogliamo e trattiamo i seguenti dati:' },
            { label: 'Indirizzo email' },
            { p: 'Raccolto quando vi registrate, direttamente via email (magic link) oppure tramite il vostro account Google o GitHub. Usato per autenticare il vostro account. Usato inoltre, con il vostro consenso esplicito, per inviarvi aggiornamenti sui prodotti o comunicazioni commerciali di Dome.' },
            { label: 'Accesso con Google o GitHub' },
            { p: 'Se scegliete di accedere con Google o GitHub, il fornitore ci comunica il vostro indirizzo email, il vostro nome, il link alla vostra immagine del profilo e un identificativo dell’account. Li usiamo solo per creare e riconoscere il vostro account. Google e GitHub trattano il vostro accesso secondo le proprie informative sulla privacy, in qualità di titolari autonomi del trattamento. Non vediamo mai la vostra password di Google o GitHub.' },
            { basis: 'Base giuridica: esecuzione di un contratto (art. 6, par. 1, lett. b) per l’autenticazione, compreso l’accesso con Google o GitHub. Consenso (art. 6, par. 1, lett. a) per le comunicazioni di marketing.' },
            { label: 'Orari di accesso e metadati di sessione' },
            { p: 'A ogni autenticazione registriamo l’orario e il metodo di accesso, come prassi standard di sicurezza.' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f), per sicurezza, prevenzione delle frodi e integrità del servizio.' },
            { label: 'Dati che inserite negli strumenti' },
            { p: 'Quando usate uno strumento Dome potete caricare file, inserire testo o interagire con funzioni di AI. Raccogliamo e possiamo conservare i dati derivati da queste interazioni per fornire il servizio, tra cui lo stato della sessione, i risultati delle analisi, i risultati salvati, i metadati del registro di governance e gli altri dati strutturati necessari al funzionamento dello strumento.' },
            { p: 'Trattiamo questi dati per erogare il servizio. Non li usiamo per addestrare modelli AI, non li condividiamo con terzi a fini commerciali e non vi accediamo se non per fornire assistenza tecnica su vostra richiesta.' },
            { p: 'I dati conservati dipendono dallo strumento usato e dalle funzioni che utilizzate. Tutti i dati conservati sono associati al vostro account, protetti da controlli di sicurezza a livello di riga (row-level security) e accessibili solo dalla vostra sessione autenticata. Potete cancellare i dati salvati in qualsiasi momento dall’interno dello strumento.' },
            { basis: 'Base giuridica: esecuzione di un contratto (art. 6, par. 1, lett. b), per fornire le funzioni che avete richiesto.' },
            { label: 'Metadati del registro di governance' },
            { p: 'Ogni azione svolta in uno strumento Dome genera un evento di governance che contiene: un hash del vostro input (non l’input stesso), il tipo di azione, un timestamp, le regole di governance applicate e attivate, una breve sintesi del risultato e metadati tecnici come i punteggi di confidenza. Questo record di metadati è l’audit trail su cui si fonda l’architettura di governance di Dome.' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f), per l’integrità del servizio e il controllo di qualità.' },
            { label: 'Registro del consenso al marketing' },
            { p: 'Se al momento della registrazione acconsentite alle comunicazioni di marketing, conserviamo traccia di tale consenso: la data, la vostra scelta e la versione del testo di consenso che vi è stato mostrato.' },
            { basis: 'Base giuridica: obbligo legale (art. 6, par. 1, lett. c), per documentare il consenso come richiesto dal GDPR.' },
          ],
        },
        {
          heading: 'Cosa non facciamo',
          blocks: [
            {
              list: [
                'Non raccogliamo né conserviamo password. Accedete con un magic link inviato alla vostra email oppure tramite il vostro account Google o GitHub.',
                'Non raccogliamo dati di pagamento. Tutti gli strumenti Dome sono gratuiti.',
                'Non usiamo i vostri dati per addestrare modelli AI.',
                'Non condividiamo i vostri dati con terzi a fini commerciali o pubblicitari.',
                'Non raccogliamo consapevolmente dati di minori di 18 anni.',
              ],
            },
          ],
        },
        {
          heading: 'Con chi condividiamo i vostri dati',
          blocks: [
            { p: 'Per gestire Dome ci avvaliamo dei seguenti fornitori terzi. Ciascuno opera come responsabile del trattamento in base a un accordo sul trattamento dei dati:' },
            { p: '**Supabase Inc.**: database e autenticazione. I dati sono conservati nell’Unione Europea (Francoforte, Germania: eu-central-1). supabase.com/privacy' },
            { p: '**Cloudflare Inc.**: hosting di questo sito e degli strumenti Dome, compresi il modulo di contatto e la sua protezione dagli abusi, e inoltro delle email inviate ai nostri indirizzi domelayer.com. cloudflare.com/privacypolicy' },
            { p: '**Railway Corp.**: hosting dei servizi back-end degli strumenti Dome. railway.com/legal/privacy' },
            { p: '**Resend Inc.**: invio delle email. Usato per inviare i magic link, per recapitarci i messaggi inviati tramite il modulo di contatto, per recapitarvi le nostre risposte ai messaggi che ci scrivete e, con il vostro consenso, comunicazioni sui prodotti. resend.com/legal/privacy-policy' },
            { p: '**Functional Software Inc. (Sentry)**: monitoraggio degli errori del sito e degli strumenti. I dati sugli errori sono conservati nell’Unione Europea (Germania). sentry.io/privacy' },
            { p: '**Umami Software, Inc.**: misurazione aggregata delle visite a questo sito, senza cookie. Dati ospitati nell’Unione europea (Germania). umami.is/privacy' },
            { h3: 'La nostra casella email' },
            { p: 'I messaggi che ci inviate, tramite il modulo di contatto o per email, arrivano in una casella Google (Gmail), dove li leggiamo e vi rispondiamo. Google li tratta secondo i propri termini e la propria informativa sulla privacy. policies.google.com/privacy' },
            { h3: 'Elaborazione AI' },
            { p: 'Quando usate uno strumento Dome, il vostro input viene trasmesso a un fornitore AI per generare una risposta. Ciascun fornitore lo tratta secondo i propri termini sul trattamento dei dati per l’API e, per impostazione predefinita, non usa i dati ricevuti via API per addestrare i propri modelli.' },
            { p: '**Anthropic PBC**: tutti gli strumenti Dome. anthropic.com/privacy' },
            { p: '**OpenAI**: solo LLM Council, come uno dei tre consulenti indipendenti. openai.com/policies/privacy-policy' },
            { p: '**Google (Gemini API)**: solo LLM Council, come uno dei tre consulenti indipendenti. policies.google.com/privacy' },
            { p: 'Non utilizziamo reti pubblicitarie, tracker dei social media né data broker.' },
          ],
        },
        {
          heading: 'Trasferimenti internazionali',
          blocks: [
            { p: 'Il vostro account e i dati che salvate negli strumenti sono conservati nell’Unione Europea, sull’infrastruttura Supabase di Francoforte. Anche i dati del monitoraggio degli errori sono conservati nell’Unione Europea.' },
            { p: 'Cloudflare, Railway, Resend, Umami, Anthropic, OpenAI e Google hanno sede negli Stati Uniti o vi trattano dati. I trasferimenti verso di loro si basano sul Data Privacy Framework UE-USA quando il fornitore vi aderisce e, negli altri casi, sulle clausole contrattuali standard (SCC) ai sensi dell’art. 46 GDPR.' },
            { p: '**Utenti nel Regno Unito:** i trasferimenti tra Regno Unito e UE sono coperti dalla decisione di adeguatezza UK-UE attualmente in vigore. Gli utenti del Regno Unito possono presentare reclamo all’Information Commissioner’s Office (ico.org.uk).' },
          ],
        },
        {
          heading: 'Per quanto tempo conserviamo i dati',
          blocks: [
            {
              table: {
                head: ['Dati', 'Conservazione'],
                rows: [
                  ['Indirizzo email e dati dell’account', 'Fino alla vostra richiesta di cancellazione dell’account'],
                  ['Orari di accesso', '12 mesi a scorrimento'],
                  ['Dati di sessione e output salvati', 'Finché non li cancellate o fino alla cancellazione dell’account'],
                  ['Metadati del registro di governance', '12 mesi a scorrimento'],
                  ['Messaggi che ci inviate (modulo di contatto o email)', 'Fino a 24 mesi dall’ultimo scambio'],
                  ['Contatore per la limitazione degli invii (indirizzo IP)', '1 minuto, non conservato'],
                  ['Misurazione del sito (Umami): pagine viste ed eventi, senza indirizzo IP', '6 mesi'],
                  ['Log del server e degli errori', 'Fino a 90 giorni'],
                  ['Registro del consenso al marketing', 'Per la durata dell’account, più 3 anni dalla cancellazione'],
                ],
              },
            },
            { p: 'In caso di cancellazione dell’account, cancelliamo i vostri dati personali entro 30 giorni, salvo i casi in cui la legge ne imponga la conservazione.' },
          ],
        },
        {
          heading: 'I vostri diritti',
          blocks: [
            { p: 'Per esercitare uno qualsiasi dei vostri diritti, scrivete a [privacy@domelayer.com](mailto:privacy@domelayer.com) dall’indirizzo associato al vostro account. Rispondiamo entro 30 giorni.' },
            {
              list: [
                '**Accesso**: chiedere una copia di tutti i dati personali che conserviamo su di voi.',
                '**Rettifica**: chiederci di correggere dati inesatti.',
                '**Cancellazione**: chiederci di cancellare i vostri dati entro 30 giorni.',
                '**Limitazione**: chiederci di sospendere il trattamento finché una contestazione non è risolta.',
                '**Portabilità**: ricevere i vostri dati in un formato strutturato e leggibile da dispositivo automatico.',
                '**Opposizione**: opporvi al trattamento basato sul legittimo interesse.',
                '**Revoca del consenso**: revocare in qualsiasi momento il consenso al marketing tramite il link di disiscrizione presente in ogni email o scrivendo a privacy@domelayer.com.',
              ],
            },
            { p: '**Reclamo**: proporre reclamo a un’autorità di controllo:' },
            {
              list: [
                'Italia: Garante per la protezione dei dati personali (garante.privacy.it)',
                'Regno Unito: Information Commissioner’s Office (ico.org.uk)',
                'Potete rivolgervi anche all’autorità del vostro paese di residenza.',
              ],
            },
          ],
        },
        {
          heading: 'Cookie',
          blocks: [
            { p: 'Tutti i cookie e le voci di memoria del browser che usiamo sono elencati, con finalità e durata, nella nostra [cookie policy](cookies). In sintesi: un cookie mantiene l’accesso, due ricordano tema e lingua, e nessuno viene usato per tracciamento o pubblicità. Durante la navigazione non vengono impostati cookie di terze parti.' },
          ],
        },
        {
          heading: 'Sicurezza',
          blocks: [
            { p: 'Adottiamo misure tecniche e organizzative adeguate a proteggere i vostri dati, tra cui la sicurezza a livello di riga su tutte le tabelle del database, la cifratura HTTPS dei dati in transito e l’accesso senza password (magic link, Google o GitHub), senza password memorizzate.' },
            { p: 'Nessun sistema è sicuro al 100%. Se ritenete che il vostro account sia stato compromesso, scrivete subito a [privacy@domelayer.com](mailto:privacy@domelayer.com).' },
          ],
        },
        {
          heading: 'Modifiche a questa informativa',
          blocks: [
            { p: 'Potremmo aggiornare questa informativa per riflettere cambiamenti nelle nostre pratiche o negli obblighi di legge. In caso di modifiche sostanziali, lo comunicheremo via email agli utenti registrati almeno 30 giorni prima che entrino in vigore. La data di “ultimo aggiornamento” in cima a questa pagina indica la versione in vigore.' },
          ],
        },
        {
          heading: 'Contatti',
          blocks: [
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo · Firenze, Italia · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: 'Termini di servizio →',
    },
    cookies: {
      back: '← Torna a domelayer.com',
      updated: 'Ultimo aggiornamento: novembre 2026',
      title: 'Cookie policy',
      appliesTo:
        'Si applica a: domelayer.com e a tutti i sottodomini (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      sections: [
        {
          heading: 'In sintesi',
          blocks: [
            { p: 'Usiamo tre cookie e alcune voci nella memoria del vostro browser. Sono tutti impostati da noi, sul nostro dominio, per uno di tre motivi: mantenere l’accesso, ricordare una scelta che avete fatto o far funzionare una pagina. Nessuno serve a tracciarvi, a profilarvi o a mostrarvi pubblicità, e nessuno viene condiviso con altri.' },
            { p: 'Per questo il sito non mostra un banner di consenso. Cookie e memorizzazioni di questo tipo sono tecnici: ai sensi dell’art. 122 del Codice privacy e delle Linee guida cookie del Garante del giugno 2021 non richiedono consenso, ma solo questa informativa. La misurazione delle visite (descritta più sotto) non usa né cookie né memoria del browser ed è configurata per rispettare le condizioni alle quali il Garante equipara gli strumenti di analisi ai cookie tecnici.' },
            { p: 'Alla prima visita non viene impostato nulla. Tutto ciò che segue compare solo dopo una vostra azione: l’accesso, il cambio di tema o di lingua, la chiusura dell’avviso sui cookie o l’uso di uno strumento. C’è un’eccezione: se il vostro browser preferisce un’altra lingua in cui il sito è pubblicato e aprite una pagina in inglese, vi portiamo una sola volta alla pagina in quella lingua e impostiamo `dome_locale` per non ripeterlo.' },
          ],
        },
        {
          heading: 'Cookie',
          blocks: [
            {
              table: {
                head: ['Cookie', 'A cosa serve', 'Durata', 'Tipo'],
                rows: [
                  ['`dome_auth_token`', 'Mantiene l’accesso attivo su domelayer.com e negli strumenti Dome. Impostato al momento dell’accesso, per tutti i sottodomini di domelayer.com.', 'Fino alla scadenza dell’accesso, al massimo 8 ore', 'Strettamente necessario'],
                  ['`dome-theme`', 'Ricorda se avete scelto il tema chiaro o scuro, sul sito e negli strumenti. Impostato quando cambiate tema.', '1 anno', 'Funzionale: una preferenza vostra'],
                  ['`dome_locale`', 'Ricorda la lingua. Impostato quando cambiate lingua, oppure una sola volta quando portiamo un browser che preferisce un’altra lingua del sito alla versione in quella lingua. Solo su domelayer.com.', '1 anno', 'Funzionale: una preferenza vostra'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Memoria del browser',
          blocks: [
            { p: 'Alcune informazioni restano nella memoria locale del browser, che dura finché non la cancellate, o nella memoria di sessione, che dura finché non chiudete la scheda. Ogni voce viene letta solo dalla pagina che l’ha scritta.' },
            {
              table: {
                head: ['Voce', 'Dove', 'Che cosa contiene', 'Durata'],
                rows: [
                  ['`dome-theme`', 'Memoria locale, su domelayer.com e in ogni strumento', 'Il tema scelto, copia dell’omonimo cookie', 'Finché non la cancellate'],
                  ['`dome-cookie-notice-dismissed`', 'Memoria locale, domelayer.com', 'Il fatto che avete chiuso l’avviso sui cookie, perché non ricompaia', 'Finché non la cancellate'],
                  ['`dome_pending_consent`', 'Memoria locale, domelayer.com', 'Alla registrazione: la versione dei termini accettata e la vostra scelta sugli aggiornamenti di prodotto, finché non vengono salvate nel vostro account', 'Fino al completamento della registrazione'],
                  ['`dome_consent_accepted`', 'Memoria locale, domelayer.com', 'La versione dei termini accettata, perché questo dispositivo non ve la richieda', 'Finché non la cancellate'],
                  ['`sb-…-auth-token`, `sb-…-code-verifier`', 'Memoria locale, domelayer.com', 'Un record temporaneo creato dal nostro fornitore di autenticazione, Supabase, durante l’accesso', 'Rimosso ad accesso completato, di solito entro pochi minuti'],
                  ['`dome_auth_redirect`', 'Memoria di sessione, domelayer.com', 'La pagina dello strumento a cui riportarvi dopo l’accesso', 'Fino alla chiusura della scheda'],
                  ['`react-router-scroll-positions`', 'Memoria di sessione, domelayer.com', 'Il punto in cui eravate su ogni pagina, perché il tasto Indietro vi riporti lì', 'Fino alla chiusura della scheda'],
                  ['`dome_doc_result_…`', 'Memoria di sessione, document-intelligence.domelayer.com', 'Il risultato dell’ultima estrazione e il nome del file, per la pagina dei risultati', 'Fino alla chiusura della scheda'],
                  ['`dome_session_…`', 'Memoria di sessione, data-intelligence.domelayer.com', 'Le righe del foglio di calcolo caricato e la relativa analisi, perché la dashboard si apra senza interrogare di nuovo il server', 'Fino alla chiusura della scheda'],
                ],
              },
            },
          ],
        },
        {
          heading: 'Misurazione',
          blocks: [
            { p: 'Misuriamo le visite a domelayer.com in forma aggregata con **Umami** (Umami Software, Inc.), con i dati ospitati nell’Unione europea. Umami non imposta cookie e non salva nulla nel vostro browser. Lo script è servito dal nostro dominio e invia un breve rapporto a ogni pagina vista, e uno quando inviate un messaggio, seguite un link alla pagina dei contatti, avviate l’accesso o cambiate lingua.' },
            { p: 'Il vostro indirizzo IP non viene conservato. Umami lo usa solo per ricavare una posizione approssimativa (paese, regione e città) e per riconoscere le visite dello stesso browser nel corso di un mese, tramite un codice non reversibile che cambia ogni mese. Vediamo solo dati complessivi, mai le singole persone: quante visite, da dove arrivano, quali pagine e servizi interessano, quanti messaggi ne derivano. Non usiamo questi dati per profilarvi, non li incrociamo con altri dati e non li condividiamo. Umami li conserva per 6 mesi.' },
            { p: 'Se il vostro browser invia il segnale Do Not Track, non misuriamo nulla. Le pagine di accesso vengono registrate senza i parametri dell’indirizzo. Gli strumenti Dome non sono misurati: lì contiamo soltanto le esecuzioni che ogni strumento registra nel proprio audit trail, come descritto nell’[informativa sulla privacy](privacy).' },
          ],
        },
        {
          heading: 'Altri servizi',
          blocks: [
            { p: '**Cloudflare**, che ospita questo sito, non vi imposta cookie. Per proteggere il modulo di contatto dagli abusi conta gli invii per indirizzo IP nell’arco di un minuto; il conteggio non viene conservato.' },
            { p: '**Sentry**, il nostro servizio di monitoraggio degli errori (regione UE), invia un rapporto tecnico se una pagina non funziona. Non imposta cookie e non salva nulla nel browser.' },
            { p: '**I caratteri** sono serviti dai nostri domini. Nessuna pagina carica risorse da Google Fonts.' },
          ],
        },
        {
          heading: 'Le vostre scelte',
          blocks: [
            { p: 'Potete cancellare cookie e memoria del browser in qualsiasi momento dalle impostazioni del browser, oppure bloccarli del tutto. Cancellare `dome_auth_token` vi disconnette; cancellare gli altri azzera soltanto il tema, la lingua, l’avviso sui cookie o la posizione nella pagina.' },
          ],
        },
        {
          heading: 'Modifiche e contatti',
          blocks: [
            { p: 'Aggiorniamo questa pagina ogni volta che aggiungiamo, modifichiamo o rimuoviamo un cookie o una voce di memoria, e prima che una nuova venga usata. La data in alto indica la versione in vigore.' },
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo · Firenze, Italia · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: 'Informativa sulla privacy →',
    },
    terms: {
      back: '← Torna a domelayer.com',
      updated: 'Ultimo aggiornamento: ottobre 2026',
      title: 'Termini di servizio',
      appliesTo:
        'Si applicano a: analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com',
      sections: [
        {
          heading: 'Chi fornisce questi strumenti',
          blocks: [
            { p: 'Gli strumenti AI di Dome sono un progetto personale, gestito da Francesco Prodomo, libero professionista con partita IVA italiana (P.IVA 07242670482).' },
            { p: 'Sede: Firenze, Italia\nContatto: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'Ambito di questi termini',
          blocks: [
            { p: 'Registrandovi e usando uno qualsiasi degli strumenti AI di Dome, accettate questi termini. Leggeteli prima di registrarvi. Se non li accettate, non usate gli strumenti.' },
            { p: 'Questi termini si applicano agli strumenti del portfolio Dome disponibili ai sottodomini elencati sopra. Non regolano le consulenze in cui Francesco Prodomo progetta o rilascia sistemi AI per altre organizzazioni: tali incarichi sono regolati da accordi di progetto distinti.' },
            { p: 'Questi termini si applicano insieme alla nostra [Informativa sulla privacy](privacy), che vi è richiamata e ne costituisce parte integrante.' },
          ],
        },
        {
          heading: 'Gli strumenti',
          blocks: [
            { p: 'Dome mette a disposizione una serie di strumenti gratuiti assistiti dall’AI per esplorare i principi dell’AI operativa guidata dalla governance, tra cui analisi dei processi, intelligenza su documenti e dati e dimostrazioni correlate.' },
            { p: 'Gli strumenti sono forniti gratuitamente, “così come sono”, a fini dimostrativi e di valutazione.' },
          ],
        },
        {
          heading: 'Il vostro account',
          blocks: [
            { p: 'Vi registrate con il vostro indirizzo email, richiedendo un magic link oppure accedendo con il vostro account Google o GitHub. Nessuna password Dome viene richiesta o memorizzata. Siete responsabili della sicurezza del vostro account email, Google o GitHub.' },
            { p: 'Potete registrare un solo account per indirizzo email. Non potete condividere il vostro account né registrarvi per conto di un’altra persona a sua insaputa o senza il suo consenso.' },
            { p: 'Ci riserviamo il diritto di sospendere o chiudere gli account che violano questi termini, che vengono usati in modo dannoso per altri o che compromettono l’integrità del servizio.' },
          ],
        },
        {
          heading: 'Uso consentito',
          blocks: [
            { p: 'Vi impegnate a usare gli strumenti Dome solo per scopi leciti e nel rispetto di questi termini.' },
            { label: 'Non potete:' },
            {
              list: [
                'Caricare file o inserire contenuti che non avete il diritto di trattare. Se i contenuti includono dati personali di terzi, spetta a voi garantire di avere una base giuridica ai sensi del GDPR o della normativa applicabile per trattarli tramite un servizio AI di terze parti.',
                'Caricare contenuti che includono categorie particolari di dati personali (dati sanitari, dati biometrici, opinioni politiche, convinzioni religiose o simili), salvo che disponiate di una base giuridica documentata e, ove richiesto, del consenso esplicito delle persone interessate.',
                'Tentare di decodificare i sistemi AI sottostanti, estrarne i pesi del modello o sondarli in modo sistematico.',
                'Usare gli strumenti per generare contenuti illeciti, diffamatori, fraudolenti o dannosi per altri.',
                'Accedere agli strumenti con mezzi automatizzati su una scala tale da compromettere la disponibilità del servizio.',
                'Tentare di accedere ai dati di un altro utente o di aggirare i controlli di autenticazione.',
              ],
            },
          ],
        },
        {
          heading: 'Dati ed elaborazione AI',
          blocks: [
            { p: 'Quando usate uno strumento Dome, i contenuti che inviate vengono trasmessi a un modello AI per l’elaborazione: Anthropic per tutti gli strumenti e, in aggiunta, OpenAI e Google per LLM Council. Per fornire il servizio, Dome può conservare i dati derivati dall’uso degli strumenti, tra cui lo stato della sessione, le analisi salvate e i metadati di governance. Tutti i dettagli su quali dati vengono raccolti, come vengono usati e per quanto tempo vengono conservati sono riportati nell’[Informativa sulla privacy](privacy).' },
            { p: 'Mantenete la piena titolarità di tutti i contenuti che inviate e di tutti gli output generati a partire da essi. Dome non rivendica alcuna licenza o diritto sui vostri input o output.' },
            { p: 'Spetta a voi assicurarvi che i contenuti inviati non includano informazioni riservate di terzi che non siete autorizzati a condividere con un servizio esterno di elaborazione AI.' },
          ],
        },
        {
          heading: 'Output dell’AI: avvertenza importante',
          blocks: [
            { warning: '**Gli output dell’AI non costituiscono consulenza professionale.** Nulla di quanto prodotto dagli strumenti Dome costituisce consulenza legale, finanziaria, in materia di acquisti, di compliance, operativa o professionale di altro tipo. Non agite sulla base di output generati dall’AI senza una verifica indipendente da parte di un professionista qualificato.' },
            { p: 'Gli strumenti Dome usano modelli linguistici di grandi dimensioni per generare analisi, sintesi, classificazioni e raccomandazioni. Questi output sono generati automaticamente e forniti a solo scopo informativo e dimostrativo.' },
            { p: 'Dome non garantisce l’accuratezza, la completezza o l’idoneità allo scopo di alcun output generato dall’AI. I modelli AI possono commettere errori e produrre output che sembrano plausibili ma sono inesatti nei fatti. Siete gli unici responsabili della valutazione degli output prima di farvi affidamento.' },
            { p: 'Questa avvertenza è particolarmente importante nei contesti regolamentati (acquisti, finanza, compliance commerciale, ambito legale e settori simili) in cui un output errato può avere conseguenze rilevanti.' },
          ],
        },
        {
          heading: 'Disponibilità e modifiche',
          blocks: [
            { p: 'Gli strumenti Dome sono forniti gratuitamente e possono essere modificati, interrotti o dismessi in qualsiasi momento. Cercheremo di dare un preavviso ragionevole prima di modifiche significative o chiusure, ma non assumiamo impegni su continuità di servizio, disponibilità o mantenimento delle funzioni.' },
            { p: 'Possiamo aggiungere, modificare o rimuovere funzioni in qualsiasi momento.' },
          ],
        },
        {
          heading: 'Proprietà intellettuale',
          blocks: [
            { p: 'Il nome Dome, il logo, il sito web e le interfacce degli strumenti sono di proprietà di Francesco Prodomo. Non potete riprodurli o usarli senza autorizzazione scritta.' },
            { p: 'Tutti i diritti sui contenuti che inviate e sugli output derivati restano a voi.' },
          ],
        },
        {
          heading: 'Limitazione di responsabilità',
          blocks: [
            { p: 'Nella misura massima consentita dalla legge applicabile, Francesco Prodomo e Dome non rispondono di danni indiretti, incidentali, consequenziali o punitivi derivanti dall’uso degli strumenti, comprese le perdite dovute all’affidamento su output generati dall’AI.' },
            { p: 'La nostra responsabilità complessiva nei vostri confronti per qualsiasi pretesa derivante dall’uso degli strumenti non potrà superare zero euro, dato che gli strumenti vi sono forniti gratuitamente.' },
            { p: 'Nulla in questi termini esclude o limita la responsabilità per dolo o colpa grave (art. 1229 del Codice civile), per morte o lesioni personali causate da negligenza, per frode o per qualsiasi altra responsabilità che non possa essere esclusa ai sensi della legge italiana.' },
          ],
        },
        {
          heading: 'Legge applicabile e foro competente',
          blocks: [
            { p: 'Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia relativa a questi termini o all’uso degli strumenti Dome è competente in via esclusiva il Tribunale di Firenze.' },
            { p: 'Se siete consumatori residenti in un altro Stato membro dell’UE o nel Regno Unito, conservate le tutele inderogabili previste dalla legge del vostro paese di residenza.' },
          ],
        },
        {
          heading: 'Modifiche a questi termini',
          blocks: [
            { p: 'Potremmo aggiornare periodicamente questi termini. In caso di modifiche sostanziali, ve lo comunicheremo via email almeno 30 giorni prima che entrino in vigore. L’uso continuato degli strumenti dopo tale data costituisce accettazione dei termini aggiornati.' },
            { p: 'La versione in vigore è sempre disponibile su [domelayer.com/it/termini](terms).' },
          ],
        },
        {
          heading: 'Contatti',
          blocks: [
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo · Firenze, Italia · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: '← Informativa sulla privacy',
    },
  },
}
