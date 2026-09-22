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
    ionitaLogo: 'Ionita Consulting',
  },
  aiGeneratedLabel: 'Immagine generata con AI',
}
