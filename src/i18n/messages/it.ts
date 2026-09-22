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
      'DOME è una società di consulenza AI e di prodotto per imprese regolamentate, con sede a Firenze e attiva in tutta Europa. Progettiamo software enterprise che le persone usano volentieri e automazioni AI verificabili.',
    llmsIntro:
      'Lavoriamo su tre fronti: automazione dei processi con AI, UX enterprise e prodotto, e gli strumenti DOME. Gli strumenti li sviluppiamo e gestiamo noi (analisi dei processi, intelligenza su documenti e dati, un council multi-modello, un flusso agentico governato e una dashboard di governance): mostrano come realizziamo AI governata e non sono in vendita. Ogni strumento registra le proprie decisioni in un audit trail, e dove la policy lo richiede approva una persona con nome e cognome.',
    llmsSections: { pages: 'Pagine', tools: 'Strumenti che sviluppiamo e gestiamo', legal: 'Note legali' },
  },
  nav: {
    homeLabel: 'DOME, home',
    enterpriseUx: 'UX enterprise',
    aiAutomation: 'Automazione AI',
    dome: 'DOME',
    caseStudies: 'Casi studio',
    about: 'Chi siamo',
    contact: 'Contatti',
    signIn: 'Accedi',
    signOut: 'Esci',
    yourTools: 'I vostri strumenti',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
  },
  switcher: { label: 'Versione inglese di questa pagina' },
  footer: {
    tagline: 'AI operativa, con la governance integrata',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di servizio',
    rights: 'Tutti i diritti riservati.',
  },
  contactForm: {
    heading: 'Scriveteci',
    intro: 'Preferite scrivere? Raccontateci il vostro progetto e vi risponderemo.',
    nameLabel: 'Nome',
    namePlaceholder: 'Il vostro nome',
    emailLabel: 'Email di lavoro',
    emailPlaceholder: 'nome@azienda.com',
    companyLabel: 'Azienda',
    companyOptional: '(facoltativo)',
    companyPlaceholder: 'Nome dell’azienda',
    topicLabel: 'Argomento',
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Raccontateci il vostro progetto',
    privacyNote: 'Usiamo i vostri dati solo per rispondervi. Consultate la nostra',
    privacyLink: 'informativa sulla privacy',
    send: 'Invia messaggio',
    sending: 'Invio in corso',
    successTitle: 'Messaggio ricevuto',
    successBody: 'Grazie per averci scritto. Rispondiamo entro due giorni lavorativi.',
    sendAnother: 'Invia un altro messaggio',
    rateLimited: 'Avete raggiunto il limite del modulo di contatto. Riprovate tra un’ora.',
    genericError: 'Qualcosa è andato storto. Riprovate o scriveteci direttamente.',
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
      title: 'DOME | AI governata per imprese regolamentate',
      description:
        'DOME porta l’AI in produzione nelle imprese regolamentate, con la governance integrata: dall’automazione dei processi agli strumenti che gestiamo noi.',
      ogDescription:
        'Progettata per la produzione fin dal primo giorno. Aiutiamo le imprese regolamentate a usare l’AI con governance, supervisione e audit trail completo.',
      twitterDescription: 'AI pronta per la produzione, con la governance integrata, per le imprese regolamentate.',
      imageAlt: 'DOME: AI governata per le imprese regolamentate',
    },
    enterpriseUx: {
      name: 'UX enterprise e prodotto',
      title: 'Consulenza UX enterprise e prodotto | DOME',
      description:
        'Ricerca utente, service design e progettazione di interfacce per piattaforme enterprise complesse, con un design system pronto per il vostro team di sviluppo.',
      ogDescription:
        'Semplifichiamo strumenti interni e piattaforme complesse: ricerca, service design, progettazione di interfacce e un design system pronto per lo sviluppo.',
      imageAlt: 'DOME, consulenza UX enterprise e prodotto',
    },
    aiProcessAutomation: {
      name: 'Automazione dei processi con AI',
      title: 'Automazione dei processi con AI | DOME',
      description:
        'Mappiamo un processo, automatizziamo le parti con regole chiare e portiamo le altre al vostro team con una sintesi decisionale e un audit trail completo.',
      ogDescription:
        'Automatizzare un processo senza perderne il controllo: regole chiare dove si applicano, una decisione umana dove non bastano, e un audit trail completo.',
      imageAlt: 'DOME, automazione dei processi con AI',
    },
    dome: {
      name: 'Strumenti DOME',
      title: 'DOME: gli strumenti che costruiamo e gestiamo | DOME',
      description:
        'Sei strumenti operativi, dall’analisi del processo all’esecuzione verificabile. Sono la prova di come costruiamo AI governata, non prodotti da vendere.',
      ogDescription:
        'Analisi dei processi, document e data intelligence, un consiglio multi-modello, un flusso agentico governato e una dashboard di governance. Costruiti e gestiti da noi.',
      imageAlt: 'DOME: gli strumenti che costruiamo e gestiamo',
    },
    processAnalyzer: {
      name: 'Process Analyzer',
      title: 'Process Analyzer | DOME',
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
      title: 'Data Intelligence | DOME',
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
      title: 'LLM Council | DOME',
      description:
        'Sottoponete una domanda strategica a tre consulenti AI: deliberano separatamente, si confrontano e producono un verdetto governato con audit trail completo.',
      imageAlt: 'DOME LLM Council: deliberazione AI governata',
      twitterImageAlt: 'DOME LLM Council',
    },
    documentIntelligence: {
      name: 'Document Intelligence',
      title: 'Document Intelligence | DOME',
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
      title: 'Governance Dashboard | DOME',
      description:
        'Audit trail in tempo reale, report di conformità ed export PDF sui quattro strumenti DOME: ogni evento, indice di confidenza e decisione umana in un’unica vista.',
      ogDescription:
        'Audit trail, report di conformità ed esportazione in PDF per tutti e quattro gli strumenti AI di DOME. Ogni evento di governance e ogni decisione umana in un unico posto.',
      twitterDescription: 'Audit trail in tempo reale e report di conformità per tutti e quattro gli strumenti AI di DOME.',
      imageAlt: 'DOME Governance Dashboard: audit trail e report di conformità tra gli strumenti',
      twitterImageAlt: 'DOME Governance Dashboard',
    },
    agentFlow: {
      name: 'Agent Flow',
      title: 'Agent Flow | DOME',
      description:
        'Dalla fattura all’approvazione, governata: estrazione con Document Intelligence, motore di regole, LLM Council multi-modello e firma di una persona. Ogni passaggio resta agli atti.',
      ogDescription:
        'Un flusso governato dalla fattura all’approvazione tra gli strumenti DOME, con un’approvazione umana e un audit trail completo.',
      twitterDescription: 'Flusso governato dalla fattura all’approvazione, con approvazione umana e audit trail completo.',
      imageAlt: 'DOME Agent Flow: flusso governato dalla fattura all’approvazione',
      twitterImageAlt: 'DOME Agent Flow',
    },
    about: {
      name: 'Chi siamo',
      title: 'Chi siamo | DOME, consulenza AI e di prodotto per imprese regolamentate',
      description:
        'Consulenza AI e di prodotto, con sede a Firenze, al fianco di team acquisti, finance, compliance e supply chain in settori regolamentati in tutta Europa.',
      ogDescription:
        'Un responsabile dell’incarico, una rete di specialisti e un partner di delivery. Come siamo organizzati e che cosa potete aspettarvi.',
      imageAlt: 'Chi siamo, DOME',
    },
    contact: {
      name: 'Contatti',
      title: 'Contatti DOME | Prenotate una call o scriveteci',
      description:
        'Prenotate una call da 15 o 30 minuti, o scriveteci del vostro progetto. Rispondiamo entro due giorni lavorativi. Sede a Firenze, operiamo in tutta Europa.',
      ogDescription: 'Prenotate una call o scriveteci. Rispondiamo entro due giorni lavorativi.',
      imageAlt: 'Contatti DOME',
    },
    caseStudies: {
      name: 'Casi studio',
      title: 'Casi studio | DOME',
      description:
        'Progetti anonimizzati di UX enterprise e automazione AI: acquisti retail, trade finance, filiere alimentari, compliance e asset digitali.',
      ogDescription:
        'Che cosa abbiamo costruito e che cosa è cambiato. I dati dei clienti sono sempre anonimizzati.',
      imageAlt: 'Casi studio DOME',
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
    sendMessage: 'Scriveteci',
    relatedWork: 'Progetti collegati',
    anonymised: 'I dati dei clienti sono anonimizzati.',
    viewAllCaseStudies: 'Tutti i casi studio',
    topics: [
      'Automazione dei processi con AI',
      'UX enterprise e prodotto',
      'Strumenti DOME',
      'Altro',
    ],
  },
  pages: {
    home: {
      hero: {
        eyebrow: 'Consulenza AI e di prodotto per imprese regolamentate',
        heading: 'Software che le persone usano. AI che potete verificare.',
        lead: 'Aiutiamo le imprese regolamentate a ridisegnare processi complessi e ad automatizzarli con AI governata, misurabile e spiegabile.',
        primary: 'Prenotate una prima call',
        secondary: 'I nostri progetti',
      },
      sectors: {
        eyebrow: 'Settori in cui lavoriamo',
        items: [
          'Acquisti nel retail',
          'Commodity e trade finance',
          'Filiere alimentari e agricole',
          'Compliance e normativa',
          'Asset digitali',
        ],
      },
      services: {
        eyebrow: 'Che cosa facciamo',
        heading: 'Tre modi di lavorare insieme',
        items: [
          {
            title: 'Automazione dei processi con AI',
            body: 'Mappiamo un processo, automatizziamo le parti con regole chiare e portiamo le altre al vostro team con una sintesi decisionale e un audit trail completo.',
            cta: 'Scoprite l’automazione',
          },
          {
            title: 'UX enterprise e prodotto',
            body: 'Semplifichiamo strumenti interni e piattaforme complesse: ricerca utente, service design, progettazione di interfacce e un design system pronto per i vostri sviluppatori.',
            cta: 'Scoprite UX e prodotto',
          },
          {
            title: 'Strumenti DOME',
            body: 'Strumenti operativi che costruiamo e gestiamo noi: estrazione da documenti, revisione multi-modello, dashboard governate e un livello di audit che li tiene insieme.',
            cta: 'Guardate cosa costruiamo',
          },
        ],
      },
      howWeWork: {
        eyebrow: 'Come lavoriamo',
        heading: 'Un metodo solo, dal primo workshop alla produzione',
        lead: 'La governance fa parte di ogni fase, così non c’è nulla da recuperare prima del go-live.',
        phaseLabel: 'Fase',
        phases: [
          { title: 'Discover', body: 'Mappiamo il processo, i sistemi che tocca e dove si applica la normativa.' },
          { title: 'Orchestrate', body: 'Progettiamo architettura, flussi di dati e i controlli che li accompagnano.' },
          { title: 'Model', body: 'Configuriamo i componenti AI entro limiti concordati di accuratezza e rischio.' },
          { title: 'Execute', body: 'Rilasciamo, integriamo e monitoriamo, con ogni decisione automatica agli atti.' },
        ],
        governance: 'Governance in ogni fase',
      },
      selectedWork: { eyebrow: 'Progetti scelti', heading: 'Lavori recenti' },
      capabilities: {
        eyebrow: 'Strumenti DOME',
        heading: 'Strumenti che costruiamo e gestiamo',
        lead: 'I nostri strumenti coprono il percorso dall’analisi del processo all’esecuzione verificabile. Potete provarli prima di qualsiasi incarico e, dove i dati non possono uscire dalla vostra rete, tre di essi girano su un modello open-weight locale invece che su un’API cloud.',
        tools: [
          'Process Analyzer',
          'LLM Council',
          'Document Intelligence',
          'Data Intelligence',
          'Governance Dashboard',
          'Agent Flow (in rilascio)',
        ],
        cta: 'Scoprite gli strumenti DOME',
      },
      operatingModel: {
        eyebrow: 'Chi è DOME',
        heading: 'Un responsabile unico. Gli specialisti giusti per il lavoro.',
        lead: 'Componiamo il team intorno al problema, non a un organico fisso. Avete persone senior dall’inizio alla fine e una squadra che cresce o si riduce con il perimetro.',
        cta: 'Come siamo organizzati',
        items: [
          { title: 'Responsabile dell’incarico', body: 'Un senior segue l’incarico dalla prima call al passaggio di consegne e resta responsabile del risultato.' },
          { title: 'Rete di specialisti', body: 'Ricercatori UX, designer, sviluppatori, specialisti di dati e compliance entrano quando il lavoro lo richiede.' },
          { title: 'Partner di delivery', body: 'I programmi più grandi corrono con uno studio partner consolidato, così il team cresce con il perimetro.' },
        ],
      },
      closing: {
        heading: 'Raccontateci il processo che rallenta il vostro team.',
        body: 'Bastano 30 minuti per capire se possiamo aiutarvi.',
        primary: 'Prenotate una prima call',
      },
    },
    services: {
      breadcrumb: 'Servizi',
      aiProcessAutomation: {
        hero: {
          eyebrow: 'Automazione dei processi con AI',
          heading: 'Automatizzate la routine. Le decisioni restano alle persone.',
          lead: 'Automatizziamo i passaggi ben definiti nei processi di finance, acquisti e compliance, con regole leggibili e traccia di ogni decisione.',
          primary: 'Prenotate un assessment',
          secondary: 'Come funziona',
        },
        intro: {
          eyebrow: 'Dove serve davvero',
          heading: 'Processi pronti per essere automatizzati',
          items: [
            { title: 'Volumi alti, regole chiare', body: 'Ricezione fatture, controlli di onboarding fornitori, classificazione documenti: lavoro che segue una policy ma occupa comunque tempo specialistico.' },
            { title: 'Decisioni che vanno tracciate', body: 'Approvazioni ed eccezioni su cui auditor e autorità faranno domande, a volte mesi dopo.' },
            { title: 'Dati chiusi nei documenti', body: 'Contratti, certificati e report che oggi qualcuno reinserisce a mano in un altro sistema.' },
          ],
        },
        band: {
          eyebrow: 'Governance integrata',
          heading: 'Ogni decisione automatica si può spiegare.',
          lead: 'Quando qualcuno chiede perché una fattura è stata approvata o un documento segnalato, la risposta è già agli atti.',
          points: [
            'Un indice di confidenza su ogni campo estratto',
            'Regole di policy fuori dal modello, leggibili dal vostro team',
            'Una persona con nome e cognome firma dove la policy lo richiede',
            'Un audit trail esportabile per ogni esecuzione',
            'Gira su un modello open-weight locale se i dati non possono uscire dalla vostra rete',
          ],
        },
        steps: {
          eyebrow: 'Come lo facciamo',
          heading: 'Quattro passaggi, concordati prima che parta qualsiasi cosa',
          items: [
            { title: 'Mappare il processo', body: 'Percorriamo il flusso con chi lo gestisce e segniamo quali passaggi seguono regole, quali richiedono giudizio e dove sta il rischio.' },
            { title: 'Progettare i controlli', body: 'Regole, soglie di confidenza e punti di approvazione si concordano con voi prima di automatizzare qualsiasi passaggio.' },
            { title: 'Costruire e integrare', body: 'Ci colleghiamo ai sistemi che già usate e teniamo le regole fuori dal modello, così il vostro team può leggerle e cambiarle.' },
            { title: 'Far girare e misurare', body: 'Ogni decisione viene registrata. Rivediamo l’accuratezza con voi e aggiustiamo le soglie al variare dei volumi.' },
          ],
        },
        related: 'Automazione sul campo',
        closing: {
          heading: 'Partite da un processo solo.',
          body: 'In un assessment mappiamo un flusso con il vostro team e vi diciamo che cosa vale la pena automatizzare, e che cosa no.',
          primary: 'Prenotate un assessment',
        },
      },
      enterpriseUx: {
        hero: {
          eyebrow: 'UX enterprise e prodotto',
          heading: 'Strumenti interni che i team usano volentieri.',
          lead: 'Ridisegniamo piattaforme enterprise complesse, dai flussi di acquisto alle schermate di trading, intorno a chi le usa ogni giorno.',
          primary: 'Prenotate una UX review',
          secondary: 'Come lavoriamo',
        },
        intro: {
          eyebrow: 'Quando serve',
          heading: 'Segnali che un sistema lavora contro chi lo usa',
          items: [
            { title: 'L’adozione è bassa', body: 'Le persone aggirano il sistema con fogli di calcolo ed email, perché lo strumento si mette in mezzo al lavoro.' },
            { title: 'La formazione non finisce mai', body: 'Ogni nuovo arrivato richiede settimane di supporto e le stesse domande tornano all’help desk.' },
            { title: 'Ogni modifica costa', body: 'Ogni requisito diventa un’altra schermata su misura e l’interfaccia è sempre più difficile da mantenere.' },
          ],
        },
        deliver: {
          eyebrow: 'Che cosa consegniamo',
          heading: 'Dalla ricerca a un design system pronto per i vostri sviluppatori',
          items: [
            { title: 'Ricerca utente e service design', body: 'Interviste, affiancamento sul flusso e journey map che mostrano dove si perdono tempo e fiducia.' },
            { title: 'Interfacce e interazione', body: 'Schermate pensate per i volumi e la densità reali del lavoro enterprise, testate con chi le usa.' },
            { title: 'Design system', body: 'Una libreria di componenti e linee guida su cui i vostri sviluppatori possono costruire, così la coerenza sopravvive al rilascio successivo.' },
            { title: 'Rilascio e adozione', body: 'Restiamo durante sviluppo e rilascio, con materiali di formazione e misure che dicono se le persone usano davvero il nuovo strumento.' },
          ],
        },
        band: {
          eyebrow: 'Pensato per contesti regolamentati',
          heading: 'Progettato per decisioni di cui si risponde.',
          lead: 'Gli strumenti di finance, acquisti e compliance non portano solo attività. Portano approvazioni, evidenze e responsabilità, e l’interfaccia deve renderle chiare.',
          points: [
            'Accessibile per impostazione, secondo WCAG 2.1 AA',
            'Approvazioni e relativo storico visibili dove si decide',
            'Viste per ruolo: richiedenti, approvatori e auditor',
            'Un solo design system, così ogni schermata si comporta allo stesso modo',
          ],
        },
        steps: {
          eyebrow: 'Come lo facciamo',
          heading: 'Dalla prima intervista al rilascio',
          items: [
            { title: 'Osservare', body: 'Affianchiamo chi usa il sistema e mappiamo dove si perdono tempo e fiducia.' },
            { title: 'Progettare', body: 'Disegniamo flussi e schermate con il vostro team, un processo alla volta.' },
            { title: 'Validare', body: 'Testiamo i prototipi con utenti reali prima che qualcosa entri in sviluppo.' },
            { title: 'Rilasciare', body: 'Seguiamo lo sviluppo, scriviamo i materiali di formazione e misuriamo l’adozione dopo il lancio.' },
          ],
        },
        related: 'UX e prodotto sul campo',
        closing: {
          heading: 'Partite da un flusso solo.',
          body: 'In una UX review osserviamo un flusso con il vostro team e vi mostriamo dove perde tempo, e da cosa conviene partire.',
          primary: 'Prenotate una UX review',
        },
      },
    },
    dome: {
      hero: {
        eyebrow: 'Strumenti',
        heading: 'Strumenti AI veri, costruiti e gestiti da noi.',
        lead: 'DOME è l’insieme di strumenti che costruiamo per mostrare come funziona l’AI governata nella pratica. Cinque sono attivi e uno è in rilascio, e potete provarli prima di qualsiasi incarico.',
        primary: 'Prenotate una demo guidata',
        secondary: 'Accedete agli strumenti',
      },
      blocks: {
        eyebrow: 'I mattoni',
        heading: 'Quattro strumenti, uno per ogni fase del metodo',
        openTool: 'Apri lo strumento',
        details: 'Dettagli',
        items: [
          { phase: 'Discover', title: 'Process Analyzer', body: 'Descrivete un processo in linguaggio naturale e ottenete una mappa strutturata, i sistemi coinvolti, le lacune di governance e le opportunità di automazione.' },
          { phase: 'Orchestrate', title: 'LLM Council', body: 'Ponete una domanda strategica a tre consulenti AI. Ragionano separatamente, si mettono in discussione e restituiscono un verdetto con tutto il ragionamento agli atti.' },
          { phase: 'Model', title: 'Document Intelligence', body: 'Estrae campi strutturati da fatture, contratti e report, con un indice di confidenza per ogni campo e 16 controlli di governance.' },
          { phase: 'Model', title: 'Data Intelligence', body: 'Caricate un foglio di calcolo e ottenete una dashboard governata. Un modello classifica i dati; a scegliere i grafici è un motore di regole, non il modello.' },
        ],
      },
      agentFlow: {
        eyebrow: 'Il metodo in produzione',
        badge: 'In rilascio',
        heading: 'Agent Flow: dalla fattura all’approvazione, ogni passaggio agli atti',
        lead: 'Agent Flow mette in fila i mattoni in un unico flusso governato, con una persona che firma dove la policy lo richiede.',
        cta: 'Come funziona Agent Flow',
        steps: [
          { title: 'Arriva una fattura', body: 'Un flusso self-hosted la prende in carico e apre un’esecuzione governata che la segue dall’inizio alla fine.' },
          { title: 'Estratta e verificata sulla policy', body: 'Document Intelligence legge la fattura; un motore di regole decide il percorso di approvazione da importo, categoria, fornitore e ordine.' },
          { title: 'Una sintesi del council, poi decide una persona', body: 'Le fatture ambigue o di importo elevato ricevono una sintesi multi-modello, e firma un approvatore nominativo.' },
          { title: 'Un record ricostruibile', body: 'Ogni passaggio arriva nella Governance Dashboard come un’unica sequenza.' },
        ],
      },
      governance: {
        eyebrow: 'Il livello di governance',
        heading: 'Governance Dashboard',
        lead: 'Un solo audit trail su tutti gli strumenti: ogni evento, indice di confidenza e decisione umana in un unico punto, con report PDF per l’audit interno.',
        openDashboard: 'Apri la dashboard',
        details: 'Dettagli',
      },
      standards: {
        eyebrow: 'Come sono costruiti',
        heading: 'Gli stessi standard che portiamo dai clienti',
        items: [
          { title: 'Ospitati nell’UE', body: 'Gli strumenti dimostrativi e i loro dati girano su infrastruttura nell’Unione Europea.' },
          { title: 'Possono girare da voi', body: 'Analisi dei processi, document e data intelligence girano su un modello open-weight locale tramite Ollama: un cambio di configurazione, non una riscrittura. Niente deve uscire dalla vostra rete.' },
          { title: 'Non legati a un solo fornitore AI', body: 'Claude, Azure OpenAI o un modello locale, scelti per ogni installazione. I modelli cambiano senza ridisegnare il flusso né i controlli.' },
          { title: 'Tracciati per costruzione', body: 'Ogni strumento registra che cosa ha fatto, quanto era sicuro e chi ha rivisto il risultato.' },
        ],
      },
      partner: {
        text: 'I programmi più grandi sono realizzati insieme al nostro partner, Ionita Consulting.',
        cta: 'La partnership',
      },
      closing: {
        heading: 'Vedete gli strumenti al lavoro sul vostro processo.',
        body: 'In una demo guidata facciamo girare un vostro esempio negli strumenti e parliamo di cosa comporterebbe un rollout governato.',
        primary: 'Prenotate una demo guidata',
      },
    },
    caseStudies: {
      hero: {
        eyebrow: 'Casi studio',
        heading: 'Che cosa abbiamo costruito, e che cosa è cambiato.',
        lead: 'Racconti anonimizzati del lavoro: il problema come lo ha descritto il cliente, che cosa abbiamo fatto e i risultati che l’incarico ha davvero prodotto.',
        primary: 'Parliamo del vostro progetto',
        secondary: 'Guardate cosa costruiamo',
      },
      groups: [
        { eyebrow: 'Automazione dei processi con AI', heading: 'Lavoro che segue una policy' },
        { eyebrow: 'UX enterprise e prodotto', heading: 'Piattaforme che si usano ogni giorno' },
        { eyebrow: 'Strumenti DOME', heading: 'Il metodo dall’inizio alla fine' },
      ],
      note: 'I dati dei clienti sono sempre anonimizzati: descriviamo il settore e la funzione, mai l’organizzazione. Dichiariamo solo i risultati che l’incarico ha davvero prodotto.',
      closing: {
        heading: 'Riconoscete uno di questi problemi?',
        body: 'Diteci quale, e vi diciamo come lo affronteremmo.',
        primary: 'Prenotate una prima call',
      },
    },
    caseStudy: {
      back: 'Casi studio',
      challenge: 'Il problema',
      whatWeDid: 'Che cosa abbiamo fatto',
      outcomes: 'Risultati',
      client: 'Cliente',
      role: 'Il nostro ruolo',
      capabilities: 'Competenze',
      cta: 'Parliamo di un progetto simile',
      readNext: 'Da leggere dopo',
      notFound: 'Caso studio non trovato',
      closing: {
        heading: 'Riconoscete questo problema?',
        body: 'Diteci dove si blocca il vostro processo, e vi diciamo come lo affronteremmo.',
        primary: 'Prenotate una prima call',
      },
    },
    about: {
      hero: {
        eyebrow: 'Chi è DOME',
        heading: 'Consulenza AI e di prodotto per imprese regolamentate.',
        lead: 'Aiutiamo le imprese regolamentate a progettare software che le persone usano e ad automatizzare il lavoro in modo che un auditor possa seguirlo.',
        primary: 'Parliamone',
        secondary: 'I nostri progetti',
      },
      who: {
        eyebrow: 'Chi siamo',
        heading: 'Lavoro enterprise complesso, più semplice da usare e più sicuro da automatizzare.',
        paragraphs: [
          'DOME lavora con team acquisti, finance, compliance e supply chain in settori regolamentati. Mettiamo insieme UX enterprise e automazione dei processi con AI, così i sistemi che le persone usano ogni giorno sono chiari da usare e chiari da verificare.',
          'Costruiamo e gestiamo anche i nostri strumenti AI governati. I nostri consigli sull’automazione vengono da sistemi che teniamo in produzione, non dalle slide.',
        ],
      },
      facts: [
        { figure: '3', label: 'linee di servizio, dalla ricerca UX all’automazione verificabile' },
        { figure: '6', label: 'strumenti AI che costruiamo e gestiamo noi' },
        { figure: '3', label: 'fornitori di modelli, inclusi modelli open-weight sulla vostra infrastruttura' },
        { figure: '10', label: 'anni di lavoro con il nostro studio partner' },
      ],
      setup: {
        eyebrow: 'Come siamo organizzati',
        heading: 'Un team costruito intorno a ogni incarico',
        lead: 'Non teniamo consulenti fermi in attesa di lavoro. Ogni incarico riceve gli specialisti che il suo problema richiede, sotto un unico responsabile.',
        items: [
          { title: 'Responsabile dell’incarico', body: 'Un senior segue ogni incarico dalla prima call al passaggio di consegne. Avete un solo interlocutore e una sola persona che risponde del risultato.' },
          { title: 'Rete di specialisti', body: 'Coinvolgiamo ricercatori UX, designer di interfacce, sviluppatori, specialisti di dati e consulenti di compliance dalla nostra rete, quando il lavoro lo richiede.' },
          { title: 'Partner di delivery', body: 'I programmi più grandi sono realizzati con Ionita Consulting, che ci dà la capacità di coprire incarichi più lunghi o più ampi senza cambiare il modo di lavorare.' },
        ],
      },
      expect: {
        eyebrow: 'Come lavoriamo insieme',
        heading: 'Che cosa potete aspettarvi',
        items: [
          { title: 'Team piccoli e senior', body: 'Le persone che incontrate all’inizio sono quelle che fanno il lavoro.' },
          { title: 'Governance dall’inizio', body: 'Controlli ed esigenze di audit guidano il progetto dal primo workshop, non dopo il go-live.' },
          { title: 'Prove prima dell’impegno', body: 'Vedete strumenti funzionanti e risultati passati prima di impegnarvi in qualsiasi cosa.' },
        ],
      },
      partner: {
        eyebrow: 'Il nostro partner di delivery',
        heading: 'Ionita Consulting',
        body: 'I programmi più grandi sono realizzati insieme a Ionita Consulting, con sede a Utrecht, con cui lavoriamo da dieci anni. Insieme copriamo incarichi che richiedono più specialisti o tempi più lunghi.',
      },
      leadership: {
        eyebrow: 'Guida',
        heading: 'Chi guida il lavoro',
        name: 'Francesco Prodomo',
        role: 'Fondatore e responsabile degli incarichi',
        bio: 'Dieci anni di product design enterprise e sistemi di acquisto, dalla ricerca utente al rilascio.',
        linkedin: 'Profilo LinkedIn',
      },
      where: {
        eyebrow: 'Dove lavoriamo',
        heading: 'Con sede a Firenze, in tutta Europa',
        lead: 'Lavoriamo con i clienti in italiano e in inglese, in sede o da remoto.',
        cta: 'I nostri casi studio',
      },
      closing: {
        heading: 'Raccontateci il processo che rallenta il vostro team.',
        body: 'Bastano 30 minuti per capire se possiamo aiutarvi.',
        primary: 'Prenotate una prima call',
      },
    },
    contact: {
      hero: {
        eyebrow: 'Contatti',
        heading: 'Raccontateci il vostro processo.',
        lead: 'Prenotate una call da 30 minuti o scriveteci. Rispondiamo entro due giorni lavorativi.',
        primary: 'Prenotate una call',
        secondary: 'I nostri progetti',
      },
      book: { heading: 'Prenotate una call', lead: 'Scegliete un orario che vi va bene, e un argomento così ci prepariamo.' },
      calendar: {
        topicLegend: 'Di che cosa volete parlare?',
        notLoaded: 'Il calendario non è ancora caricato. Si apre qui quando scegliete una durata.',
        show30: 'Mostra gli orari (30 min)',
        show15: 'Bastano 15 minuti',
        notice: 'Il calendario è fornito da Cal.com e si carica solo quando cliccate.',
        noticeEnd: 'da quel momento si applica la loro informativa sulla privacy. Prima non viene inviato nulla.',
      },
      details: {
        eyebrow: 'Altri modi per raggiungerci',
        heading: 'Dati aziendali',
        email: 'Email',
        pec: 'PEC',
        booking: 'Prenotazioni',
        locationValue: 'Firenze, Italia',
        location: 'Sede',
        legal: 'Dome di Francesco Prodomo · P.IVA 07242670482',
      },
    },
  },
}
