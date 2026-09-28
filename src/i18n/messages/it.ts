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
        badge: 'Demo privata',
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
        lead: 'Un flusso n8n self-hosted che esegue un vero processo, dalla fattura all’approvazione, attraverso gli strumenti DOME: estrazione, motore di regole di policy, council multi-modello e approvazione umana. Ne risulta un audit trail completo, che la Governance Dashboard ricostruisce.',
        openQueue: 'Apri la coda di approvazione',
        bookDemo: 'Prenotate una demo privata',
        demoNote: 'Dal vivo, su fatture reali, in una sessione guidata.',
        steps: [
          { title: 'Arriva una fattura', body: 'Un fornitore invia la fattura alla casella del ciclo passivo, oppure la si carica dal modulo del flusso. Un flusso n8n self-hosted la prende in carico e apre un’esecuzione governata, con un unico identificativo dall’inizio alla fine.' },
          { title: 'Estrazione, poi verifica sulla policy', body: 'Document Intelligence estrae campi e confidenza; un motore di regole guidato dai dati sceglie poi il percorso di approvazione in base a fascia d’importo, categoria di spesa, paese e partita IVA, fornitori autorizzati, corrispondenza con l’ordine, valuta e duplicati.' },
          { title: 'Sintesi del Council, poi decide una persona', body: 'Le fatture ambigue o di importo elevato ricevono una sintesi multi-modello di LLM Council. Un approvatore nominativo firma su una pagina di revisione dedicata; quelle a basso rischio sono approvate in automatico secondo la policy. Ogni passaggio confluisce nella Governance Dashboard in un’unica sequenza ricostruibile.' },
        ],
      },
    },
    privacy: {
      back: '← Torna a domelayer.com',
      updated: 'Ultimo aggiornamento: aprile 2026',
      title: 'Informativa sulla privacy',
      appliesTo:
        'Si applica a: domelayer.com e a tutti i sottodomini (analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com)',
      sections: [
        {
          heading: 'Chi siamo',
          blocks: [
            { p: 'Dome è gestito da Francesco Prodomo, imprenditore individuale con sede in Italia (P.IVA 07242670482), che opera con la denominazione Dome. In questa informativa, i termini “Dome”, “noi” e “ci” si riferiscono a Francesco Prodomo, operante come Dome.' },
            { p: 'Sede: Firenze, Italia\nContatto per le questioni di privacy: [privacy@domelayer.com](mailto:privacy@domelayer.com)' },
            { p: 'Francesco Prodomo è il titolare del trattamento di tutti i dati personali raccolti tramite domelayer.com e gli strumenti collegati.' },
          ],
        },
        {
          heading: 'Ambito di questa informativa',
          blocks: [
            { p: 'Questa informativa spiega quali dati personali raccogliamo quando visitate domelayer.com o vi registrate per usare gli strumenti AI di Dome, perché li raccogliamo, per quanto tempo li conserviamo e quali diritti avete su di essi.' },
            { p: 'Questa informativa si applica esclusivamente a domelayer.com e agli strumenti del portfolio Dome. Non si applica ai sistemi AI o al software che Dome progetta e rilascia per clienti terzi: tali incarichi sono regolati da contratti e accordi sul trattamento dei dati distinti, negoziati per ciascun progetto.' },
            { p: 'Non vendiamo dati personali. Non usiamo dati personali a fini pubblicitari.' },
          ],
        },
        {
          heading: 'Quali dati raccogliamo e perché',
          blocks: [
            { h3: 'Visitatori del sito (senza account)' },
            { p: 'Quando visitate domelayer.com non impostiamo cookie analitici né script di tracciamento di terze parti. Può essere impostato un solo cookie funzionale, `dome-theme`, per ricordare la vostra preferenza per il tema chiaro o scuro. Questo cookie non contiene dati personali e non viene usato per il tracciamento.' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f) GDPR), per memorizzare una preferenza di visualizzazione e migliorare la navigazione.' },
            { p: 'In futuro potremmo adottare strumenti di analisi rispettosi della privacy e senza cookie, per comprendere l’utilizzo in forma aggregata. Questi strumenti non impostano cookie e non raccolgono dati personali. Se li introdurremo, aggiorneremo questa informativa. Non introdurremo mai strumenti di analisi basati su cookie o tracker pubblicitari senza aggiornare questa informativa e, ove la legge lo richieda, senza aver prima ottenuto il vostro consenso.' },
            { h3: 'Utenti registrati degli strumenti' },
            { p: 'Quando vi registrate per usare gli strumenti AI di Dome, raccogliamo e trattiamo i seguenti dati:' },
            { label: 'Indirizzo email' },
            { p: 'Raccolto quando richiedete l’accesso. Usato per inviarvi un magic link con cui autenticare il vostro account. Usato inoltre, con il vostro consenso esplicito, per inviarvi aggiornamenti sui prodotti o comunicazioni commerciali di Dome.' },
            { basis: 'Base giuridica: esecuzione di un contratto (art. 6, par. 1, lett. b) per l’autenticazione. Consenso (art. 6, par. 1, lett. a) per le comunicazioni di marketing.' },
            { label: 'Orari di accesso e metadati di sessione' },
            { p: 'A ogni autenticazione registriamo l’orario e il metodo di accesso, come prassi standard di sicurezza.' },
            { basis: 'Base giuridica: legittimo interesse (art. 6, par. 1, lett. f), per sicurezza, prevenzione delle frodi e integrità del servizio.' },
            { label: 'Dati che inserite negli strumenti' },
            { p: 'Quando usate uno strumento Dome potete caricare file, inserire testo o interagire con funzioni di AI. Raccogliamo e possiamo conservare i dati derivati da queste interazioni per fornire il servizio, tra cui lo stato della sessione, i risultati delle analisi, i risultati salvati, i metadati del registro di governance e gli altri dati strutturati necessari al funzionamento dello strumento.' },
            { p: 'Trattiamo questi dati per erogare il servizio. Non li usiamo per addestrare modelli AI, non li condividiamo con terzi a fini commerciali e non vi accediamo se non per fornire assistenza tecnica su vostra richiesta.' },
            { p: 'I dati conservati dipendono dallo strumento usato e dalle funzioni che utilizzate. Tutti i dati conservati sono associati al vostro account, protetti da controlli di sicurezza a livello di riga (row-level security) e accessibili solo dalla vostra sessione autenticata. Potete cancellare i dati salvati in qualsiasi momento dall’interno dello strumento.' },
            { basis: 'Base giuridica: esecuzione di un contratto (art. 6, par. 1, lett. b), per fornire le funzioni che avete richiesto.' },
            { label: 'Metadati del registro di governance' },
            { p: 'Ogni azione svolta in uno strumento Dome genera un evento di governance che contiene: un hash del vostro input (non l’input stesso), il tipo di azione, un timestamp e le regole di governance applicate. Questo record di metadati è l’audit trail su cui si fonda l’architettura di governance di Dome.' },
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
                'Non raccogliamo password. L’autenticazione avviene esclusivamente tramite magic link.',
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
            { p: '**Supabase Inc.**: database e autenticazione. I dati sono conservati nell’Unione Europea (Francoforte, Germania: eu-central-1; Parigi, Francia: eu-west-3). supabase.com/privacy' },
            { p: '**Vercel Inc.**: hosting del sito e delle applicazioni. vercel.com/legal/privacy-policy' },
            { p: '**Resend Inc.**: email transazionali. Usato per inviare i magic link e, con il vostro consenso, comunicazioni sui prodotti. resend.com/legal/privacy-policy' },
            { p: '**Anthropic PBC**: elaborazione AI. Quando usate uno strumento Dome, il vostro input viene trasmesso all’API di Anthropic per generare una risposta. Anthropic lo tratta secondo i propri termini sul trattamento dei dati per l’API. anthropic.com/privacy' },
            { p: 'Non utilizziamo reti pubblicitarie, tracker dei social media né data broker.' },
          ],
        },
        {
          heading: 'Trasferimenti internazionali',
          blocks: [
            { p: 'Tutti i dati personali sono conservati nell’Unione Europea, sull’infrastruttura Supabase di Francoforte e Parigi.' },
            { p: 'Vercel, Resend e Anthropic hanno sede negli Stati Uniti. I trasferimenti verso questi responsabili del trattamento sono regolati dalle clausole contrattuali standard (SCC) ai sensi dell’art. 46 GDPR.' },
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
                  ['Metadati del registro di governance', '90 giorni a scorrimento'],
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
            {
              table: {
                head: ['Cookie', 'Finalità', 'Durata', 'Consenso richiesto'],
                rows: [
                  ['`dome-theme`', 'Memorizza la preferenza per il tema chiaro o scuro', '1 anno', 'No: funzionale, nessun tracciamento'],
                  ['Sessione di autenticazione', 'Mantiene l’accesso attivo tra gli strumenti Dome', 'Sessione', 'No: strettamente necessario'],
                ],
              },
            },
            { p: 'Non vengono impostati cookie di terze parti.' },
          ],
        },
        {
          heading: 'Sicurezza',
          blocks: [
            { p: 'Adottiamo misure tecniche e organizzative adeguate a proteggere i vostri dati, tra cui la sicurezza a livello di riga su tutte le tabelle del database, la cifratura HTTPS dei dati in transito e l’autenticazione tramite magic link, senza password memorizzate.' },
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
            { p: '[privacy@domelayer.com](mailto:privacy@domelayer.com)\nFrancesco Prodomo, operante come Dome · Firenze, Italia · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: 'Termini di servizio →',
    },
    terms: {
      back: '← Torna a domelayer.com',
      updated: 'Ultimo aggiornamento: aprile 2026',
      title: 'Termini di servizio',
      appliesTo:
        'Si applicano a: analyzer.domelayer.com, llm-council.domelayer.com, document-intelligence.domelayer.com, data-intelligence.domelayer.com, governance.domelayer.com',
      sections: [
        {
          heading: 'Chi fornisce questi strumenti',
          blocks: [
            { p: 'Gli strumenti AI di Dome sono gestiti da Francesco Prodomo, imprenditore individuale con sede in Italia (P.IVA 07242670482), che opera con la denominazione Dome.' },
            { p: 'Sede: Firenze, Italia\nContatto: [hello@domelayer.com](mailto:hello@domelayer.com)' },
          ],
        },
        {
          heading: 'Ambito di questi termini',
          blocks: [
            { p: 'Registrandovi e usando uno qualsiasi degli strumenti AI di Dome, accettate questi termini. Leggeteli prima di registrarvi. Se non li accettate, non usate gli strumenti.' },
            { p: 'Questi termini si applicano agli strumenti del portfolio Dome disponibili ai sottodomini elencati sopra. Non regolano gli incarichi in cui Dome progetta o rilascia sistemi AI per organizzazioni terze: tali incarichi sono regolati da accordi di progetto distinti.' },
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
            { p: 'Vi registrate con il vostro indirizzo email. A ogni accesso vi inviamo un magic link: nessuna password viene richiesta o memorizzata. Siete responsabili della sicurezza del vostro account email.' },
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
            { p: 'Quando usate uno strumento Dome, i contenuti che inviate vengono trasmessi a un modello AI per l’elaborazione. Per fornire il servizio, Dome può conservare i dati derivati dall’uso degli strumenti, tra cui lo stato della sessione, le analisi salvate e i metadati di governance. Tutti i dettagli su quali dati vengono raccolti, come vengono usati e per quanto tempo vengono conservati sono riportati nell’[Informativa sulla privacy](privacy).' },
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
            { p: 'Nulla in questi termini esclude o limita la responsabilità per morte o lesioni personali causate da negligenza, per frode o per qualsiasi altra responsabilità che non possa essere esclusa ai sensi della legge italiana.' },
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
            { p: '[hello@domelayer.com](mailto:hello@domelayer.com)\nFrancesco Prodomo, operante come Dome · Firenze, Italia · P.IVA 07242670482' },
          ],
        },
      ],
      sibling: '← Informativa sulla privacy',
    },
  },
}
