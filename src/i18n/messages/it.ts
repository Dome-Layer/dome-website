import type { Messages } from './types'

// Draft Italian, pending native review (plan phase 1d). Marketing copy addresses the reader as
// "voi"; tool names stay in English.
export const it: Messages = {
  site: {
    description:
      'DOME è una società di consulenza AI e di prodotto per le imprese regolamentate, con sede a Firenze e al lavoro in tutta Europa. Progettiamo software aziendale che le persone usano e realizziamo automazioni dei processi con AI che potete verificare.',
    llmsIntro:
      'Lavoriamo in tre ambiti: UX enterprise e prodotto, automazione dei processi con AI e capacità DOME. Le capacità sono strumenti AI che sviluppiamo e gestiamo direttamente (analisi dei processi, intelligenza su documenti e dati, un council multi-modello, un flusso agentico governato e una dashboard di governance). Mostrano come realizziamo AI governata e non sono in vendita come prodotti. Ogni strumento registra le proprie decisioni in un audit trail e una persona nominativa approva dove la policy lo richiede.',
    llmsSections: { pages: 'Pagine', tools: 'Strumenti che sviluppiamo e gestiamo', legal: 'Note legali' },
  },
  nav: {
    homeLabel: 'Home di DOME',
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
  switcher: { label: 'Leggi questa pagina in inglese' },
  footer: {
    eyebrow: 'Contatti',
    heading: 'Iniziamo a parlarne',
    intro: 'Raccontateci il vostro progetto o la vostra sfida. Vi risponderemo entro 24 ore.',
    emailLabel: 'Email',
    emailPlaceholder: 'nome@azienda.it',
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Raccontateci il vostro progetto…',
    send: 'Invia il messaggio',
    sending: 'Invio in corso',
    successTitle: 'Messaggio ricevuto',
    successBody: 'Grazie per averci scritto. Vi ricontatteremo a breve.',
    sendAnother: 'Invia un altro messaggio',
    rateLimited: 'Avete raggiunto il limite di messaggi. Riprovate tra un’ora.',
    genericError: 'Qualcosa è andato storto. Riprovate o scriveteci direttamente.',
    tagline: 'AI operativa guidata dalla governance',
    privacy: 'Informativa privacy',
    terms: 'Termini di servizio',
    rights: 'Tutti i diritti riservati.',
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
      title: 'DOME | AI governata per le imprese regolamentate',
      description:
        'DOME aiuta le imprese regolamentate a portare l’AI in produzione con la governance integrata, dall’automazione dei processi agli strumenti che sviluppiamo e gestiamo direttamente.',
      ogDescription:
        'Progettata per la produzione fin dal primo giorno. Aiutiamo le imprese regolamentate a usare l’AI con governance, supervisione e audit trail completo.',
      twitterDescription: 'AI pronta per la produzione, con la governance integrata, per le imprese regolamentate.',
      imageAlt: 'DOME: AI governata per le imprese regolamentate',
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
        'Caricate un foglio di calcolo e ricevete una dashboard di analisi governata, con scelta automatica dei grafici e un pannello di domande in linguaggio naturale.',
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
        'Sottoponete una domanda strategica a tre consulenti AI. Deliberano in modo indipendente, si confrontano tra loro e producono un verdetto governato con audit trail completo.',
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
        'Audit trail in tempo reale, report di conformità ed esportazione in PDF per tutti e quattro gli strumenti AI di DOME. Ogni evento di governance, punteggio di affidabilità e decisione umana in un unico posto.',
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
        'Un flusso governato dalla fattura all’approvazione: estrazione con Document Intelligence, un motore di regole di policy, un LLM Council multi-modello e un’approvazione umana, con ogni passaggio registrato.',
      ogDescription:
        'Un flusso governato dalla fattura all’approvazione tra gli strumenti DOME, con un’approvazione umana e un audit trail completo.',
      twitterDescription: 'Flusso governato dalla fattura all’approvazione, con approvazione umana e audit trail completo.',
      imageAlt: 'DOME Agent Flow: flusso governato dalla fattura all’approvazione',
      twitterImageAlt: 'DOME Agent Flow',
    },
    privacy: {
      name: 'Informativa privacy',
      title: 'Informativa privacy | DOME',
      description:
        'Come DOME raccoglie, usa e protegge i dati personali dei visitatori del sito e degli utenti registrati degli strumenti, e come esercitare i diritti previsti dal GDPR.',
      imageAlt: 'DOME',
    },
    terms: {
      name: 'Termini di servizio',
      title: 'Termini di servizio | DOME',
      description:
        'I termini che si applicano all’uso degli strumenti DOME: account, uso consentito, elaborazione con AI, limitazioni di responsabilità e legge applicabile.',
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
