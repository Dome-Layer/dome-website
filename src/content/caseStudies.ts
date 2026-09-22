import type { Locale } from "../i18n/locales";
import type { MediaId } from "./media";

/**
 * The case studies, in both locales.
 *
 * Generated once from `_design/domelayer-redesign/content/cases.py`, the drafting source, and
 * maintained here from now on. **All anonymised**: sector descriptors only, never a client or firm
 * name, and only outcomes the source actually stated. Years are deliberately omitted. Ionita
 * approved the descriptions of their projects on 2026-09-22.
 *
 * `related` names other studies by id, so a detail page can offer a next read without a second
 * list to keep in step. `caseStudy(id)` and `caseStudyBySlug(slug)` are the only lookups.
 */
export type Segment = "ux" | "automation" | "dome";

export type Localised = Record<Locale, string>;
export type LocalisedList = Record<Locale, readonly string[]>;

export interface CaseStep {
  title: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  slug: Localised;
  segment: Segment;
  /** Sector or capability label above the title. Never a client name. */
  descriptor: Localised;
  title: Localised;
  summary: Localised;
  /** Who the work was for, described by sector and function. */
  client: Localised;
  /** What we did: the role, as the plan calls it. */
  role: Localised;
  /** The problem, as paragraphs. */
  challenge: LocalisedList;
  /** How we approached it. */
  steps: Record<Locale, readonly CaseStep[]>;
  outcomes: LocalisedList;
  capabilities: LocalisedList;
  /** Ids of two other studies to read next. */
  related: readonly string[];
  /** Manifest image, or the tablet mockup for the DOME capability study. */
  media: MediaId | "tabletMockup";
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: "procurement",
    slug: {
      en: "procurement-workflow-redesign",
      it: "riprogettazione-acquisti",
    },
    segment: "ux",
    descriptor: {
      en: "Retail procurement",
      it: "Acquisti nel retail",
    },
    title: {
      en: "Procurement workflow redesign for a European food retailer",
      it: "Riprogettazione dei flussi di acquisto per un retailer alimentare europeo",
    },
    summary: {
      en: "A research-led redesign of non-resale purchasing journeys across five enterprise platforms, rolled out with a standard training programme.",
      it: "Una riprogettazione basata sulla ricerca dei percorsi di acquisto indiretto su cinque piattaforme enterprise, accompagnata da un programma di formazione standard.",
    },
    client: {
      en: "European food retailer, head-office procurement",
      it: "Retailer alimentare europeo, acquisti di sede",
    },
    role: {
      en: "Journey mapping, content design, onboarding programme",
      it: "Mappatura dei percorsi, contenuti, programma di onboarding",
    },
    challenge: {
      en: [
        "Goods and services a retailer buys for its own use, from office supplies to consultancy, run through a separate purchasing process. Here that process spanned five enterprise platforms for intake, sourcing, expenses, planning and cost management.",
        "Employees who buy only occasionally struggled to find the right route, and the procurement team answered the same questions again and again. Every change also had to stay within the company’s buying policies.",
      ],
      it: [
        "Beni e servizi che un retailer acquista per uso interno, dalla cancelleria alla consulenza, seguono un processo di acquisto separato. In questo caso il processo coinvolgeva cinque piattaforme enterprise per richieste, sourcing, spese, pianificazione e gestione dei costi.",
        "Chi acquista solo occasionalmente faticava a trovare il percorso giusto, e il team acquisti rispondeva di continuo alle stesse domande. Ogni modifica doveva inoltre rispettare le policy di acquisto aziendali.",
      ],
    },
    steps: {
      en: [
        {
          title: "Map the journeys",
          body: "We followed requests from intake to purchase order across all five platforms, and recorded where people hesitated, backtracked or asked for help.",
        },
        {
          title: "Redesign intake to procure",
          body: "We restructured entry points around what people are buying, so each request starts on the right route instead of the most familiar one.",
        },
        {
          title: "Align content with policy",
          body: "We rewrote guidance and labels in line with the buying policies, so the compliant choice is also the obvious one.",
        },
        {
          title: "Build the onboarding programme",
          body: "We led the instructional design and produced short onboarding videos for each journey.",
        },
      ],
      it: [
        {
          title: "Mappare i percorsi",
          body: "Abbiamo seguito le richieste dall’inserimento all’ordine di acquisto su tutte e cinque le piattaforme, annotando dove le persone esitavano, tornavano indietro o chiedevano aiuto.",
        },
        {
          title: "Riprogettare il flusso dalla richiesta all’ordine",
          body: "Abbiamo riorganizzato i punti di accesso in base a cosa si acquista, così ogni richiesta parte dal percorso corretto e non da quello più familiare.",
        },
        {
          title: "Allineare i contenuti alle policy",
          body: "Abbiamo riscritto indicazioni ed etichette in linea con le policy di acquisto, così la scelta conforme è anche quella più ovvia.",
        },
        {
          title: "Costruire il programma di onboarding",
          body: "Abbiamo guidato la progettazione didattica e prodotto brevi video di onboarding per ciascun percorso.",
        },
      ],
    },
    outcomes: {
      en: [
        "Clearer journeys and stronger adoption of the purchasing platforms",
        "Less friction between request and purchase order",
        "Onboarding content adopted as the standard training for the procurement team",
      ],
      it: [
        "Percorsi più chiari e maggiore adozione delle piattaforme di acquisto",
        "Meno attriti tra richiesta e ordine di acquisto",
        "Contenuti di onboarding adottati come formazione standard del team acquisti",
      ],
    },
    capabilities: {
      en: [
        "User research",
        "Journey mapping",
        "Content design",
        "Instructional design",
      ],
      it: [
        "Ricerca utente",
        "Mappatura dei percorsi",
        "Content design",
        "Progettazione didattica",
      ],
    },
    related: ["platform", "training"],
    media: "caseProcurementWorkflowRedesign",
  },
  {
    id: "compliance",
    slug: {
      en: "ai-compliance-assessments",
      it: "valutazioni-conformita-ai",
    },
    segment: "automation",
    descriptor: {
      en: "Compliance",
      it: "Compliance",
    },
    title: {
      en: "AI-assisted compliance assessments",
      it: "Valutazioni di conformità assistite dall’AI",
    },
    summary: {
      en: "A regulatory library and assessment tools that help compliance teams find gaps faster, with an assistant that explains each finding.",
      it: "Una libreria normativa e strumenti di valutazione che aiutano i team di compliance a individuare le lacune più rapidamente, con un assistente che spiega ogni rilievo.",
    },
    client: {
      en: "Risk and compliance platform",
      it: "Piattaforma di rischio e compliance",
    },
    role: {
      en: "Discovery, prototyping, AI assessment design",
      it: "Discovery, prototipazione, progettazione delle valutazioni AI",
    },
    challenge: {
      en: [
        "Compliance managers, legal teams and business owners run assessments across risk, ESG, ethics and regulation. Much of that work meant reading regulations side by side with internal policies and assembling reports by hand.",
        "Assessments took weeks, remediation projects started late, and results were hard to compare from one assessment to the next.",
      ],
      it: [
        "Compliance manager, uffici legali e responsabili di business svolgono valutazioni su rischio, ESG, etica e normativa. Gran parte del lavoro consisteva nel confrontare le norme con le policy interne e nel compilare i report a mano.",
        "Le valutazioni richiedevano settimane, i progetti di remediation partivano in ritardo e i risultati erano difficili da confrontare tra una valutazione e l’altra.",
      ],
    },
    steps: {
      en: [
        {
          title: "Discovery",
          body: "We worked with compliance and legal users to map how assessments run today and where the time goes.",
        },
        {
          title: "Regulatory library",
          body: "We structured the relevant regulations into a searchable library that assessments can reference directly.",
        },
        {
          title: "Assessment tools",
          body: "We designed analytical tools that score an organisation against the library and show gaps in one view.",
        },
        {
          title: "Assistant for every finding",
          body: "We added an AI assistant that explains why a gap was flagged and points to the source text, so reviewers can check it.",
        },
      ],
      it: [
        {
          title: "Discovery",
          body: "Abbiamo lavorato con gli utenti di compliance e legali per mappare come si svolgono oggi le valutazioni e dove si perde tempo.",
        },
        {
          title: "Libreria normativa",
          body: "Abbiamo organizzato le norme rilevanti in una libreria consultabile, richiamabile direttamente dalle valutazioni.",
        },
        {
          title: "Strumenti di valutazione",
          body: "Abbiamo progettato strumenti analitici che misurano l’organizzazione rispetto alla libreria e mostrano le lacune in un’unica vista.",
        },
        {
          title: "Un assistente per ogni rilievo",
          body: "Abbiamo aggiunto un assistente AI che spiega perché una lacuna è stata segnalata e rimanda al testo di origine, così chi revisiona può verificarlo.",
        },
      ],
    },
    outcomes: {
      en: [
        "A working prototype covering the full cycle, from regulation to assessment report",
        "Every finding linked to the source text it relies on",
        "A validated basis for building the production platform",
      ],
      it: [
        "Un prototipo funzionante che copre l’intero ciclo, dalla norma al report di valutazione",
        "Ogni rilievo collegato al testo di origine su cui si basa",
        "Una base validata per sviluppare la piattaforma in produzione",
      ],
    },
    capabilities: {
      en: [
        "Discovery",
        "Prototyping",
        "Retrieval over regulations",
        "Explainable AI",
      ],
      it: [
        "Discovery",
        "Prototipazione",
        "Ricerca sulle norme",
        "AI spiegabile",
      ],
    },
    related: ["invoice", "platform"],
    media: "caseAiComplianceAssessments",
  },
  {
    id: "invoice",
    slug: {
      en: "governed-invoice-approval",
      it: "approvazione-fatture-governata",
    },
    segment: "dome",
    descriptor: {
      en: "Finance operations",
      it: "Operazioni finanziarie",
    },
    title: {
      en: "A governed invoice-to-approval workflow",
      it: "Un flusso governato dalla fattura all’approvazione",
    },
    summary: {
      en: "Extraction, policy rules, a multi-model review and a named approver, recorded as one audit trail you can reconstruct step by step.",
      it: "Estrazione, regole di policy, revisione multi-modello e un approvatore nominativo, registrati in un unico audit trail ricostruibile passo per passo.",
    },
    client: {
      en: "DOME reference build, no client data",
      it: "Realizzazione di riferimento DOME, senza dati di clienti",
    },
    role: {
      en: "Design, build and operation",
      it: "Progettazione, sviluppo e gestione",
    },
    challenge: {
      en: [
        "Finance teams want AI to take on invoice handling, but auditors need to know who approved what, on which evidence, and under which rule. Most automation keeps the speed and loses that record.",
        "We built this workflow to show that automation and a complete audit trail can come from the same system.",
      ],
      it: [
        "I team finance vogliono affidare all’AI la gestione delle fatture, ma i revisori devono sapere chi ha approvato cosa, su quali evidenze e secondo quale regola. Gran parte dell’automazione mantiene la velocità e perde questa traccia.",
        "Abbiamo costruito questo flusso per dimostrare che automazione e audit trail completo possono nascere dallo stesso sistema.",
      ],
    },
    steps: {
      en: [
        {
          title: "Extract",
          body: "Document Intelligence reads each invoice and returns structured fields with a confidence score for every value.",
        },
        {
          title: "Apply policy",
          body: "Rules check amounts, suppliers and duplicates, and route anything outside policy for review.",
        },
        {
          title: "Review with several models",
          body: "LLM Council asks more than one model to assess exceptions, and records where they agree and where they do not.",
        },
        {
          title: "Approve by name",
          body: "A named approver makes the final decision. The Governance Dashboard shows every step behind it.",
        },
      ],
      it: [
        {
          title: "Estrarre",
          body: "Document Intelligence legge ogni fattura e restituisce campi strutturati con un punteggio di affidabilità per ciascun valore.",
        },
        {
          title: "Applicare la policy",
          body: "Le regole controllano importi, fornitori e duplicati, e inviano in revisione tutto ciò che è fuori policy.",
        },
        {
          title: "Revisionare con più modelli",
          body: "LLM Council chiede a più modelli di valutare le eccezioni e registra dove concordano e dove no.",
        },
        {
          title: "Approvare con nome e cognome",
          body: "Un approvatore nominativo prende la decisione finale. Il Governance Dashboard mostra ogni passaggio che la precede.",
        },
      ],
    },
    outcomes: {
      en: [
        "Every decision traceable to its input, the rules applied, the model assessments and the approver",
        "Human approval kept for every exception, by design",
        "Now rolling out as Agent Flow, which prospective clients can try",
      ],
      it: [
        "Ogni decisione riconducibile al dato di partenza, alle regole applicate, alle valutazioni dei modelli e all’approvatore",
        "Approvazione umana mantenuta per ogni eccezione, per progettazione",
        "In fase di rilascio come Agent Flow, che i potenziali clienti possono provare",
      ],
    },
    capabilities: {
      en: [
        "Document Intelligence",
        "LLM Council",
        "Agent Flow",
        "Governance Dashboard",
      ],
      it: [
        "Document Intelligence",
        "LLM Council",
        "Agent Flow",
        "Governance Dashboard",
      ],
    },
    related: ["compliance", "metals"],
    media: "tabletMockup",
  },
  {
    id: "metals",
    slug: {
      en: "metals-trading-platform",
      it: "piattaforma-trading-metalli",
    },
    segment: "automation",
    descriptor: {
      en: "Trade finance",
      it: "Trade finance",
    },
    title: {
      en: "A trading platform for a metals consortium",
      it: "Una piattaforma di trading per un consorzio dei metalli",
    },
    summary: {
      en: "Automated settlement, stock monitoring and compliance alerts replaced paper-based steps shared by traders, financiers and insurers.",
      it: "Regolamento automatico, monitoraggio delle scorte e alert di conformità hanno sostituito passaggi cartacei condivisi da trader, finanziatori e assicuratori.",
    },
    client: {
      en: "Consortium of traders, financiers, insurers and logistics firms",
      it: "Consorzio di trader, finanziatori, assicuratori e operatori logistici",
    },
    role: {
      en: "Study, platform concept, desktop and mobile applications",
      it: "Studio, concept di piattaforma, applicazioni desktop e mobile",
    },
    challenge: {
      en: [
        "Metals trading depends on many parties agreeing on the same facts: price, ownership, where the material sits and whether it meets compliance rules. In this consortium most of that still moved on paper.",
        "Negotiation, hedging, settlement and stock checks each happened in a different place, so reconciling them was slow and error-prone.",
      ],
      it: [
        "Il trading di metalli richiede che molte parti concordino sugli stessi fatti: prezzo, proprietà, ubicazione del materiale e rispetto delle regole di conformità. In questo consorzio gran parte di queste informazioni viaggiava ancora su carta.",
        "Negoziazione, copertura, regolamento e controllo delle scorte avvenivano in luoghi diversi, e riconciliarli era lento e soggetto a errori.",
      ],
    },
    steps: {
      en: [
        {
          title: "Shared trade network",
          body: "We designed a private network where every member works from the same trade record.",
        },
        {
          title: "Automated settlement",
          body: "Interfaces handle hedging and end-of-day settlement without manual re-keying.",
        },
        {
          title: "Stock monitoring",
          body: "Warehouse stock is monitored and reconciled automatically, with dynamic pricing for storage and insurance.",
        },
        {
          title: "Compliance alerts",
          body: "Rules check ownership, provenance and compliance, and alert the right party when something does not match.",
        },
      ],
      it: [
        {
          title: "Una rete di trading condivisa",
          body: "Abbiamo progettato una rete privata in cui ogni membro lavora sullo stesso registro delle operazioni.",
        },
        {
          title: "Regolamento automatico",
          body: "Le interfacce gestiscono copertura e regolamento di fine giornata senza reinserimenti manuali.",
        },
        {
          title: "Monitoraggio delle scorte",
          body: "Le scorte in magazzino sono monitorate e riconciliate automaticamente, con prezzi dinamici per stoccaggio e assicurazione.",
        },
        {
          title: "Alert di conformità",
          body: "Le regole verificano proprietà, provenienza e conformità, e avvisano la parte interessata quando qualcosa non torna.",
        },
      ],
    },
    outcomes: {
      en: [
        "Paper-based steps replaced by one shared digital record",
        "Desktop and mobile applications for trade execution, positions and reporting",
        "Consortium members adopted the lessons in their daily operations",
      ],
      it: [
        "Passaggi cartacei sostituiti da un unico registro digitale condiviso",
        "Applicazioni desktop e mobile per esecuzione, posizioni e reportistica",
        "I membri del consorzio hanno integrato quanto appreso nelle attività quotidiane",
      ],
    },
    capabilities: {
      en: [
        "Process discovery",
        "Workflow automation",
        "Rules and alerts",
        "Mobile design",
      ],
      it: [
        "Analisi dei processi",
        "Automazione dei flussi",
        "Regole e alert",
        "Design mobile",
      ],
    },
    related: ["invoice", "traceability"],
    media: "caseMetalsTradingPlatform",
  },
  {
    id: "traceability",
    slug: {
      en: "food-traceability-platform",
      it: "piattaforma-tracciabilita-alimentare",
    },
    segment: "ux",
    descriptor: {
      en: "Food supply chain",
      it: "Filiera alimentare",
    },
    title: {
      en: "Traceability platform for a food retailer",
      it: "Piattaforma di tracciabilità per un retailer alimentare",
    },
    summary: {
      en: "UX lead and design system for a platform that traces products from supplier to shelf, rolled out across stores.",
      it: "Guida UX e design system per una piattaforma che traccia i prodotti dal fornitore allo scaffale, distribuita nei punti vendita.",
    },
    client: {
      en: "Food retailer and its supply chain partners",
      it: "Retailer alimentare e i suoi partner di filiera",
    },
    role: {
      en: "UX lead, interface design, design system",
      it: "Guida UX, interface design, design system",
    },
    challenge: {
      en: [
        "Shoppers increasingly want to know where their food comes from, and retailers want that information to be trustworthy. Producers, processors and validators each held part of the story.",
        "The platform needed two very different interfaces: a working tool for suppliers entering production data, and a simple view for shoppers scanning a product in store.",
      ],
      it: [
        "I consumatori vogliono sempre più sapere da dove arriva il cibo, e i retailer vogliono che l’informazione sia affidabile. Produttori, trasformatori e certificatori detenevano ciascuno una parte della storia.",
        "La piattaforma richiedeva due interfacce molto diverse: uno strumento di lavoro per i fornitori che inseriscono i dati di produzione e una vista semplice per chi scansiona un prodotto in negozio.",
      ],
    },
    steps: {
      en: [
        {
          title: "Supplier workflows",
          body: "We defined how each partner enters production data, keeping entry quick for people doing it alongside their main work.",
        },
        {
          title: "Shopper experience",
          body: "We designed the QR scanning flow so a product’s journey reads clearly on a phone in a few seconds.",
        },
        {
          title: "Design system",
          body: "We built a design system shared by both interfaces, so new products and partners could be added consistently.",
        },
      ],
      it: [
        {
          title: "Flussi per i fornitori",
          body: "Abbiamo definito come ogni partner inserisce i dati di produzione, mantenendo l’operazione rapida per chi la svolge accanto al proprio lavoro.",
        },
        {
          title: "Esperienza del consumatore",
          body: "Abbiamo progettato il flusso di scansione QR in modo che il percorso del prodotto si legga chiaramente sullo smartphone in pochi secondi.",
        },
        {
          title: "Design system",
          body: "Abbiamo creato un design system condiviso dalle due interfacce, così nuovi prodotti e partner si possono aggiungere in modo coerente.",
        },
      ],
    },
    outcomes: {
      en: [
        "Platform launched and adopted across stores",
        "Shoppers can see a product’s journey from supplier to shelf",
        "A reusable design system, and internal recognition with an award",
      ],
      it: [
        "Piattaforma lanciata e adottata nei punti vendita",
        "I consumatori vedono il percorso del prodotto dal fornitore allo scaffale",
        "Un design system riutilizzabile e un riconoscimento interno con un premio",
      ],
    },
    capabilities: {
      en: [
        "UX leadership",
        "Interface design",
        "Design systems",
        "Mobile design",
      ],
      it: ["Guida UX", "Interface design", "Design system", "Design mobile"],
    },
    related: ["procurement", "trading"],
    media: "caseFoodTraceabilityPlatform",
  },
  {
    id: "trading",
    slug: {
      en: "trading-app-redesign",
      it: "riprogettazione-app-trading",
    },
    segment: "ux",
    descriptor: {
      en: "Digital assets",
      it: "Asset digitali",
    },
    title: {
      en: "Trading app redesign for a digital assets platform",
      it: "Riprogettazione dell’app di trading per una piattaforma di asset digitali",
    },
    summary: {
      en: "A responsive redesign of a trading app for mobile and desktop, built on a modular design framework.",
      it: "Una riprogettazione responsive di un’app di trading per mobile e desktop, basata su un framework di design modulare.",
    },
    client: {
      en: "Digital assets trading platform",
      it: "Piattaforma di trading di asset digitali",
    },
    role: {
      en: "UX and UI redesign, front-end framework",
      it: "Riprogettazione UX e UI, framework front-end",
    },
    challenge: {
      en: [
        "The existing app had grown feature by feature and was built mainly for one screen size. Traders moved between phone and desktop during the day and met a different experience on each.",
        "Every new feature took longer to add than the one before.",
      ],
      it: [
        "L’app esistente era cresciuta una funzione alla volta ed era pensata soprattutto per un solo formato di schermo. I trader passavano da smartphone a desktop durante la giornata e trovavano un’esperienza diversa su ciascuno.",
        "Ogni nuova funzione richiedeva più tempo della precedente.",
      ],
    },
    steps: {
      en: [
        {
          title: "Rebuild the experience",
          body: "We redesigned the app from the ground up for mobile and desktop, around the tasks traders repeat most.",
        },
        {
          title: "Modular framework",
          body: "We organised the interface into modules that can be reused and rearranged as the product grows.",
        },
        {
          title: "Testing practice",
          body: "We put testing practices in place so changes can ship without breaking what already works.",
        },
      ],
      it: [
        {
          title: "Ricostruire l’esperienza",
          body: "Abbiamo riprogettato l’app da zero per mobile e desktop, intorno alle attività che i trader ripetono più spesso.",
        },
        {
          title: "Framework modulare",
          body: "Abbiamo organizzato l’interfaccia in moduli riutilizzabili e ricombinabili man mano che il prodotto cresce.",
        },
        {
          title: "Pratiche di test",
          body: "Abbiamo introdotto pratiche di test per rilasciare modifiche senza compromettere ciò che già funziona.",
        },
      ],
    },
    outcomes: {
      en: [
        "One consistent experience across mobile and desktop",
        "A modular framework that speeds up new features",
        "A foundation reusable beyond the digital assets product",
      ],
      it: [
        "Un’esperienza coerente tra mobile e desktop",
        "Un framework modulare che accelera lo sviluppo di nuove funzioni",
        "Una base riutilizzabile anche oltre il prodotto di asset digitali",
      ],
    },
    capabilities: {
      en: [
        "Interface design",
        "Responsive design",
        "Design systems",
        "Front-end architecture",
      ],
      it: [
        "Interface design",
        "Design responsive",
        "Design system",
        "Architettura front-end",
      ],
    },
    related: ["traceability", "procurement"],
    media: "caseTradingAppRedesign",
  },
  {
    id: "platform",
    slug: {
      en: "ai-procurement-platform",
      it: "piattaforma-acquisti-ai",
    },
    segment: "automation",
    descriptor: {
      en: "Procurement",
      it: "Acquisti",
    },
    title: {
      en: "AI-assisted procurement platform",
      it: "Piattaforma di acquisto assistita dall’AI",
    },
    summary: {
      en: "A proof of concept that brings requests, risk checks, contracts and suppliers into one flow, with machine learning taking on the manual steps.",
      it: "Un proof of concept che riunisce richieste, controlli di rischio, contratti e fornitori in un unico flusso, con il machine learning che si occupa dei passaggi manuali.",
    },
    client: {
      en: "Global procurement organisation",
      it: "Organizzazione acquisti globale",
    },
    role: {
      en: "Proof of concept: UX, software and machine learning",
      it: "Proof of concept: UX, software e machine learning",
    },
    challenge: {
      en: [
        "Requesters, risk managers, contract managers and suppliers each saw only their part of a purchase. Nobody had a clear view from request to delivery, including how much was spent.",
        "Much of the coordination between them was manual, which added workload and hid risk until late.",
      ],
      it: [
        "Richiedenti, risk manager, contract manager e fornitori vedevano ciascuno solo la propria parte di un acquisto. Nessuno aveva una visione chiara dalla richiesta alla consegna, compresa la spesa.",
        "Gran parte del coordinamento era manuale, con più carico di lavoro e rischi che emergevano tardi.",
      ],
    },
    steps: {
      en: [
        {
          title: "One flow for every role",
          body: "We designed a single journey that each role joins at its own step, with the full picture available when needed.",
        },
        {
          title: "Machine learning on manual steps",
          body: "Models take on classification and checks that people used to do by hand.",
        },
        {
          title: "Risk and spend in view",
          body: "Risk signals and spend are visible throughout the purchase, not only at the end.",
        },
      ],
      it: [
        {
          title: "Un flusso per ogni ruolo",
          body: "Abbiamo progettato un unico percorso in cui ogni ruolo interviene nel proprio passaggio, con il quadro completo disponibile quando serve.",
        },
        {
          title: "Machine learning sui passaggi manuali",
          body: "I modelli si occupano di classificazioni e controlli che prima si facevano a mano.",
        },
        {
          title: "Rischio e spesa sempre visibili",
          body: "Segnali di rischio e spesa restano visibili lungo tutto l’acquisto, non solo alla fine.",
        },
      ],
    },
    outcomes: {
      en: [
        "End-to-end visibility from request to delivery, including spend",
        "Less manual workload for each stakeholder group",
        "The proof of concept showed improvements across the procurement process",
      ],
      it: [
        "Visibilità completa dalla richiesta alla consegna, compresa la spesa",
        "Meno lavoro manuale per ogni gruppo coinvolto",
        "Il proof of concept ha mostrato miglioramenti lungo tutto il processo di acquisto",
      ],
    },
    capabilities: {
      en: [
        "Service design",
        "Machine learning",
        "Risk visibility",
        "Proof of concept",
      ],
      it: [
        "Service design",
        "Machine learning",
        "Visibilità del rischio",
        "Proof of concept",
      ],
    },
    related: ["procurement", "compliance"],
    media: "caseAiProcurementPlatform",
  },
  {
    id: "training",
    slug: {
      en: "ai-training-videos",
      it: "video-formativi-ai",
    },
    segment: "automation",
    descriptor: {
      en: "Enterprise training",
      it: "Formazione aziendale",
    },
    title: {
      en: "Training videos at scale for an enterprise system rollout",
      it: "Video formativi su larga scala per il rilascio di un sistema enterprise",
    },
    summary: {
      en: "A repeatable production process that turned complex system workflows into on-demand training videos with AI presenters.",
      it: "Un processo di produzione ripetibile che ha trasformato flussi di sistema complessi in video formativi on demand con presentatori AI.",
    },
    client: {
      en: "Enterprise organisation, internal systems",
      it: "Organizzazione enterprise, sistemi interni",
    },
    role: {
      en: "Scripting, production framework, delivery",
      it: "Sceneggiatura, framework di produzione, consegna",
    },
    challenge: {
      en: [
        "Training people one to one on a complex system does not scale, and every trainer explains it slightly differently. Written documentation was accurate but rarely read.",
        "New starters and existing users in several regions needed the same knowledge, at the moment they needed it.",
      ],
      it: [
        "Formare le persone una alla volta su un sistema complesso non è scalabile, e ogni formatore lo spiega in modo leggermente diverso. La documentazione scritta era corretta ma poco letta.",
        "Nuovi assunti e utenti esistenti in diverse regioni avevano bisogno delle stesse conoscenze, nel momento in cui servivano.",
      ],
    },
    steps: {
      en: [
        {
          title: "Validate the content",
          body: "We confirmed each workflow with system owners before writing a word.",
        },
        {
          title: "Script for the screen",
          body: "We wrote technical scripts matched to screen recordings of the real business logic.",
        },
        {
          title: "Produce with AI presenters",
          body: "We recorded high-fidelity walkthroughs and added AI presenters with professional narration.",
        },
        {
          title: "Deliver as a modular library",
          body: "Videos were organised as short modules, for onboarding and for later refreshers.",
        },
      ],
      it: [
        {
          title: "Validare i contenuti",
          body: "Abbiamo verificato ogni flusso con i responsabili del sistema prima di scrivere una sola riga.",
        },
        {
          title: "Scrivere per lo schermo",
          body: "Abbiamo scritto sceneggiature tecniche allineate alle registrazioni dello schermo sulla logica di business reale.",
        },
        {
          title: "Produrre con presentatori AI",
          body: "Abbiamo registrato dimostrazioni ad alta definizione e aggiunto presentatori AI con narrazione professionale.",
        },
        {
          title: "Consegnare una libreria modulare",
          body: "I video sono organizzati in brevi moduli, per l’onboarding e per i ripassi successivi.",
        },
      ],
    },
    outcomes: {
      en: [
        "A repeatable process: about one hour of production for each finished minute of video",
        "Consistent training across regions, available on demand",
        "Less time spent by experts repeating the same sessions",
      ],
      it: [
        "Un processo ripetibile: circa un’ora di produzione per ogni minuto di video finito",
        "Formazione coerente tra le regioni, disponibile on demand",
        "Meno tempo degli esperti speso a ripetere le stesse sessioni",
      ],
    },
    capabilities: {
      en: [
        "Instructional design",
        "Scripting",
        "AI video production",
        "Knowledge transfer",
      ],
      it: [
        "Progettazione didattica",
        "Sceneggiatura",
        "Produzione video con AI",
        "Trasferimento di conoscenze",
      ],
    },
    related: ["procurement", "platform"],
    media: "caseAiTrainingVideos",
  },
];

export const CASE_STUDY_IDS = CASE_STUDIES.map((study) => study.id);

export function caseStudy(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.id === id);
}

export function caseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(
    (study) => study.slug.en === slug || study.slug.it === slug,
  );
}

/** The studies in a segment, in order, optionally capped for a card row. */
export function caseStudiesFor(segment: Segment, limit?: number): CaseStudy[] {
  const matched = CASE_STUDIES.filter((study) => study.segment === segment);
  return limit ? matched.slice(0, limit) : matched;
}
