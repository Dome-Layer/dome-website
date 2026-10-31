import type { Locale } from "../i18n/locales";
import type { MediaId } from "./media";

/**
 * The case studies, in every locale.
 *
 * Generated once from `_design/domelayer-redesign/content/cases.py`, the drafting source, and
 * maintained here from now on. **All anonymised**: sector descriptors only, never a client or firm
 * name, and only outcomes the source actually stated. Years are deliberately omitted. Ionita
 * approved the descriptions of their projects on 2026-09-22.
 *
 * `related` names other studies by id, so a detail page can offer a next read without a second
 * list to keep in step. `caseStudy(id)` and `caseStudyBySlug(slug)` are the only lookups.
 *
 * The Italian is written, not translated: same meaning, Italian enterprise register, and kept near
 * the English length. Titles and summaries especially, because a summary is the page's meta
 * description and Italian that runs long gets truncated in search results. Use the terms the field
 * uses ("acquisti indiretti" for non-resale purchasing, "filiera" for supply chain, "esperienza
 * d'acquisto" for shopper experience) rather than a dictionary rendering, and address the reader
 * as "voi", never "tu".
 *
 * The Dutch and German follow the same approach: Netherlands Dutch addressing the reader as "u",
 * Germany German as "Sie", in the register of an IT director or compliance lead. German writes
 * "KI" for AI, as German enterprise readers do; Dutch keeps "AI". Tool names stay English.
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
  /** A shorter title for the browser tab and search results, where the title runs past about 60 characters. */
  metaTitle?: Partial<Localised>;
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
      nl: "herontwerp-inkoopproces",
      de: "neugestaltung-einkaufsprozesse",
    },
    segment: "ux",
    descriptor: {
      en: "Retail procurement",
      it: "Acquisti nel retail",
      nl: "Inkoop in de retail",
      de: "Einkauf im Handel",
    },
    title: {
      en: "Procurement workflow redesign for a European food retailer",
      it: "Acquisti indiretti ridisegnati per un retailer alimentare europeo",
      nl: "Inkoopproces opnieuw ingericht voor een Europese foodretailer",
      de: "Neu gestaltete Einkaufsprozesse für einen europäischen Lebensmittelhändler",
    },
    metaTitle: {
      en: "Procurement redesign for a European food retailer",
      it: "Acquisti ridisegnati per un retailer alimentare",
      nl: "Nieuw inkoopproces voor een Europese foodretailer",
      de: "Neue Einkaufsprozesse für einen Lebensmittelhändler",
    },
    summary: {
      en: "A research-led redesign of non-resale purchasing journeys across five enterprise platforms, rolled out with a standard training programme.",
      it: "Percorsi di acquisto indiretto ridisegnati su cinque piattaforme enterprise, con ricerca sul campo e un programma di formazione standard.",
      nl: "Indirecte inkoop opnieuw ontworpen op vijf enterpriseplatforms, op basis van gebruikersonderzoek en ingevoerd met een standaard trainingsprogramma.",
      de: "Indirekter Einkauf auf fünf Enterprise-Plattformen neu gestaltet, gestützt auf Nutzerforschung und eingeführt mit einem einheitlichen Schulungsprogramm.",
    },
    client: {
      en: "European food retailer, head-office procurement",
      it: "Retailer alimentare europeo, acquisti di sede",
      nl: "Europese foodretailer, inkoop op het hoofdkantoor",
      de: "Europäischer Lebensmittelhändler, Einkauf in der Zentrale",
    },
    role: {
      en: "Journey mapping, content design, onboarding programme",
      it: "Journey mapping, content design, programma di onboarding",
      nl: "Journey mapping, contentontwerp, onboardingprogramma",
      de: "Journey Mapping, Content Design, Onboarding-Programm",
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
      nl: [
        "Wat een retailer voor eigen gebruik koopt, van kantoorartikelen tot advieswerk, loopt via een apart inkoopproces. Hier besloeg dat proces vijf enterpriseplatforms: voor aanvragen, sourcing, declaraties, planning en kostenbeheer.",
        "Medewerkers die maar af en toe iets bestellen, konden de juiste route moeilijk vinden, en het inkoopteam beantwoordde steeds dezelfde vragen. Bovendien moest elke wijziging binnen het inkoopbeleid van het bedrijf blijven.",
      ],
      de: [
        "Was ein Händler für den Eigenbedarf kauft, von Büromaterial bis Beratung, läuft über einen eigenen Beschaffungsprozess. Hier verteilte er sich auf fünf Enterprise-Plattformen: für Bedarfsmeldung, Sourcing, Spesen, Planung und Kostenmanagement.",
        "Wer nur gelegentlich bestellt, fand den richtigen Weg oft nicht, und das Einkaufsteam beantwortete immer wieder dieselben Fragen. Zudem musste jede Änderung mit den Einkaufsrichtlinien des Unternehmens vereinbar bleiben.",
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
          title: "Dalla richiesta all’ordine",
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
      nl: [
        {
          title: "De routes in kaart brengen",
          body: "We volgden aanvragen van indiening tot inkooporder op alle vijf platforms en noteerden waar mensen aarzelden, terugkeerden of om hulp vroegen.",
        },
        {
          title: "Van aanvraag tot bestelling",
          body: "We deelden de ingangen in naar wat mensen kopen. Zo begint elke aanvraag op de juiste route, en niet op de route die iemand toevallig kent.",
        },
        {
          title: "Teksten afstemmen op het beleid",
          body: "We herschreven instructies en labels in lijn met het inkoopbeleid, zodat de keuze die aan de regels voldoet ook de meest voor de hand liggende is.",
        },
        {
          title: "Het onboardingprogramma opzetten",
          body: "We waren verantwoordelijk voor het didactisch ontwerp en maakten voor elke route korte onboardingvideo’s.",
        },
      ],
      de: [
        {
          title: "Wege erfassen",
          body: "Wir haben Anfragen von der Bedarfsmeldung bis zur Bestellung über alle fünf Plattformen verfolgt und festgehalten, wo Menschen zögerten, zurückgingen oder Hilfe brauchten.",
        },
        {
          title: "Von der Anfrage zur Bestellung",
          body: "Wir haben die Einstiegspunkte danach geordnet, was gekauft wird. So beginnt jede Anfrage auf dem richtigen Weg und nicht auf dem gewohnten.",
        },
        {
          title: "Inhalte an den Richtlinien ausrichten",
          body: "Wir haben Hinweise und Beschriftungen passend zu den Einkaufsrichtlinien neu geschrieben, damit die regelkonforme Wahl zugleich die naheliegende ist.",
        },
        {
          title: "Onboarding-Programm aufbauen",
          body: "Wir haben das didaktische Konzept verantwortet und für jeden Weg kurze Onboarding-Videos produziert.",
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
      nl: [
        "Duidelijkere routes en meer gebruik van de inkoopplatforms",
        "Minder frictie tussen aanvraag en inkooporder",
        "Het onboardingmateriaal is de standaardtraining van het inkoopteam geworden",
      ],
      de: [
        "Klarere Wege und eine stärkere Nutzung der Einkaufsplattformen",
        "Weniger Reibung zwischen Anfrage und Bestellung",
        "Die Onboarding-Inhalte sind heute die Standardschulung des Einkaufsteams",
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
      nl: [
        "Gebruikersonderzoek",
        "Journey mapping",
        "Contentontwerp",
        "Didactisch ontwerp",
      ],
      de: [
        "Nutzerforschung",
        "Journey Mapping",
        "Content Design",
        "Didaktisches Design",
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
      nl: "ai-compliancebeoordelingen",
      de: "ki-compliance-bewertungen",
    },
    segment: "automation",
    descriptor: {
      en: "Compliance",
      it: "Compliance",
      nl: "Compliance",
      de: "Compliance",
    },
    title: {
      en: "AI-assisted compliance assessments",
      it: "Valutazioni di conformità con AI",
      nl: "AI-ondersteuning bij compliancebeoordelingen",
      de: "KI-gestützte Compliance-Bewertungen",
    },
    summary: {
      en: "A regulatory library and assessment tools that help compliance teams find gaps faster, with an assistant that explains each finding.",
      it: "Una libreria normativa e strumenti di valutazione che aiutano i team compliance a trovare prima le lacune, con un assistente che spiega ogni rilievo.",
      nl: "Een bibliotheek met regelgeving en beoordelingstools waarmee complianceteams sneller hiaten vinden, met een assistent die elke bevinding toelicht.",
      de: "Eine Bibliothek der Regelwerke und Bewertungswerkzeuge, mit denen Compliance-Teams Lücken schneller finden, dazu ein Assistent, der jeden Befund erklärt.",
    },
    client: {
      en: "Risk and compliance platform",
      it: "Piattaforma risk e compliance",
      nl: "Platform voor risico- en compliancebeheer",
      de: "Plattform für Risiko- und Compliance-Management",
    },
    role: {
      en: "Discovery, prototyping, AI assessment design",
      it: "Discovery, prototipazione, design delle valutazioni AI",
      nl: "Discovery, prototyping, ontwerp van AI-beoordelingen",
      de: "Discovery, Prototyping, Konzeption der KI-Bewertung",
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
      nl: [
        "Compliancemanagers, juristen en business owners beoordelen risico’s, ESG, ethiek en de naleving van regelgeving. Een groot deel van dat werk bestond uit het naast elkaar lezen van wetgeving en intern beleid, en het handmatig samenstellen van rapporten.",
        "Beoordelingen duurden weken, herstelprojecten kwamen laat op gang en de uitkomsten waren moeilijk met elkaar te vergelijken.",
      ],
      de: [
        "Compliance-Verantwortliche, Rechtsabteilungen und Fachbereiche bewerten Risiken, ESG, Ethik und die Einhaltung von Vorschriften. Ein Großteil davon bestand darin, Vorschriften und interne Richtlinien nebeneinander zu lesen und Berichte von Hand zusammenzustellen.",
        "Bewertungen dauerten Wochen, Maßnahmen begannen spät, und die Ergebnisse ließen sich kaum miteinander vergleichen.",
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
          body: "Abbiamo mappato con i team compliance e legal come si svolgono oggi le valutazioni e dove si perde tempo.",
        },
        {
          title: "Libreria normativa",
          body: "Abbiamo organizzato le norme rilevanti in una libreria consultabile, richiamabile direttamente dalle valutazioni.",
        },
        {
          title: "Strumenti di valutazione",
          body: "Abbiamo progettato strumenti che misurano l’organizzazione rispetto alla libreria e mostrano le lacune in un’unica vista.",
        },
        {
          title: "Un assistente per ogni rilievo",
          body: "Abbiamo aggiunto un assistente AI che spiega perché una lacuna è segnalata e rimanda al testo di origine, verificabile da chi revisiona.",
        },
      ],
      nl: [
        {
          title: "Discovery",
          body: "Samen met gebruikers uit compliance en juridische zaken brachten we in kaart hoe beoordelingen nu verlopen en waar de tijd in gaat zitten.",
        },
        {
          title: "Bibliotheek met regelgeving",
          body: "We ordenden de relevante regelgeving in een doorzoekbare bibliotheek waar beoordelingen direct naar verwijzen.",
        },
        {
          title: "Beoordelingstools",
          body: "We ontwierpen analysetools die een organisatie toetsen aan die bibliotheek en de hiaten in één overzicht tonen.",
        },
        {
          title: "Een assistent bij elke bevinding",
          body: "Een AI-assistent legt uit waarom een hiaat is gesignaleerd en verwijst naar de brontekst, zodat beoordelaars het zelf kunnen nagaan.",
        },
      ],
      de: [
        {
          title: "Discovery",
          body: "Gemeinsam mit Nutzern aus Compliance und Recht haben wir erfasst, wie Bewertungen heute ablaufen und wo die Zeit verloren geht.",
        },
        {
          title: "Bibliothek der Regelwerke",
          body: "Wir haben die relevanten Vorschriften in einer durchsuchbaren Bibliothek geordnet, auf die sich Bewertungen direkt beziehen.",
        },
        {
          title: "Bewertungswerkzeuge",
          body: "Wir haben Analysewerkzeuge entworfen, die eine Organisation an dieser Bibliothek messen und Lücken in einer Ansicht zeigen.",
        },
        {
          title: "Ein Assistent für jeden Befund",
          body: "Ein KI-Assistent erklärt, warum eine Lücke markiert wurde, und verweist auf den Quelltext, sodass Prüfende das selbst nachvollziehen können.",
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
      nl: [
        "Een werkend prototype voor de hele cyclus, van regelgeving tot beoordelingsrapport",
        "Elke bevinding gekoppeld aan de brontekst waarop ze is gebaseerd",
        "Een gevalideerde basis voor de bouw van het productieplatform",
      ],
      de: [
        "Ein funktionsfähiger Prototyp für den gesamten Zyklus, von der Vorschrift bis zum Bewertungsbericht",
        "Jeder Befund mit dem Quelltext verknüpft, auf dem er beruht",
        "Eine validierte Grundlage für die Produktivplattform",
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
      nl: [
        "Discovery",
        "Prototyping",
        "Zoeken in regelgeving",
        "Uitlegbare AI",
      ],
      de: [
        "Discovery",
        "Prototyping",
        "Suche in Regelwerken",
        "Erklärbare KI",
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
      nl: "factuurgoedkeuring-met-governance",
      de: "rechnungsfreigabe-mit-governance",
    },
    segment: "dome",
    descriptor: {
      en: "Finance operations",
      it: "Operazioni finanziarie",
      nl: "Financiële processen",
      de: "Finanzprozesse",
    },
    title: {
      en: "A governed invoice-to-approval workflow",
      it: "Flusso governato dalla fattura all’approvazione",
      nl: "Een gecontroleerde workflow van factuur tot goedkeuring",
      de: "Ein kontrollierter Workflow von der Rechnung bis zur Freigabe",
    },
    metaTitle: {
      nl: "Een gecontroleerde workflow van factuur tot goedkeuring",
      de: "Kontrollierter Workflow von der Rechnung zur Freigabe",
    },
    summary: {
      en: "Extraction, policy rules, a multi-model review and a named approver, recorded as one audit trail you can reconstruct step by step.",
      it: "Estrazione, regole di policy, revisione multi-modello e un approvatore nominativo, in un unico audit trail ricostruibile passo per passo.",
      nl: "Extractie, beleidsregels, een beoordeling door meerdere modellen en een goedkeurder op naam, in één audittrail die u stap voor stap kunt nalopen.",
      de: "Extraktion, Regeln, Prüfung durch mehrere Modelle und eine namentliche Freigabe, in einem Audit-Trail, der sich Schritt für Schritt nachvollziehen lässt.",
    },
    client: {
      en: "DOME reference build, no client data",
      it: "Progetto di riferimento DOME, nessun dato di clienti",
      nl: "DOME-referentieproject, zonder klantgegevens",
      de: "DOME-Referenzprojekt, ohne Kundendaten",
    },
    role: {
      en: "Design, build and operation",
      it: "Progettazione, sviluppo e gestione",
      nl: "Ontwerp, bouw en beheer",
      de: "Konzeption, Entwicklung und Betrieb",
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
      nl: [
        "Financeteams willen facturen door AI laten verwerken, maar auditors moeten weten wie wat heeft goedgekeurd, op basis van welk bewijs en volgens welke regel. De meeste automatisering levert snelheid op en raakt dat spoor kwijt.",
        "Met deze workflow laten we zien dat automatisering en een volledige audittrail uit één systeem kunnen komen.",
      ],
      de: [
        "Finanzteams wollen die Rechnungsbearbeitung an KI übergeben. Prüfer müssen aber wissen, wer was auf welcher Grundlage und nach welcher Regel freigegeben hat. Die meisten Automatisierungen gewinnen Tempo und verlieren diesen Nachweis.",
        "Mit diesem Workflow zeigen wir, dass Automatisierung und ein lückenloser Audit-Trail aus demselben System kommen können.",
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
          title: "Approvazione nominativa",
          body: "Un approvatore nominativo prende la decisione finale. Il Governance Dashboard mostra ogni passaggio che la precede.",
        },
      ],
      nl: [
        {
          title: "Uitlezen",
          body: "Document Intelligence leest elke factuur en levert gestructureerde velden op, met een betrouwbaarheidsscore voor elke waarde.",
        },
        {
          title: "Beleid toepassen",
          body: "Regels controleren bedragen, leveranciers en dubbele facturen, en sturen alles wat buiten het beleid valt door voor beoordeling.",
        },
        {
          title: "Beoordelen met meerdere modellen",
          body: "LLM Council laat uitzonderingen door meer dan één model beoordelen en legt vast waar de modellen het eens zijn en waar niet.",
        },
        {
          title: "Goedkeuren op naam",
          body: "Een goedkeurder op naam neemt de eindbeslissing. Het Governance Dashboard toont elke stap die daaraan voorafging.",
        },
      ],
      de: [
        {
          title: "Auslesen",
          body: "Document Intelligence liest jede Rechnung aus und liefert strukturierte Felder mit einem Konfidenzwert für jeden Wert.",
        },
        {
          title: "Richtlinien anwenden",
          body: "Regeln prüfen Beträge, Lieferanten und Dubletten und leiten alles, was außerhalb der Richtlinie liegt, zur Prüfung weiter.",
        },
        {
          title: "Mit mehreren Modellen prüfen",
          body: "LLM Council lässt Ausnahmen von mehr als einem Modell bewerten und hält fest, wo die Modelle übereinstimmen und wo nicht.",
        },
        {
          title: "Namentlich freigeben",
          body: "Eine namentlich benannte Person trifft die endgültige Entscheidung. Das Governance Dashboard zeigt jeden Schritt, der dazu geführt hat.",
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
      nl: [
        "Elke beslissing herleidbaar tot de invoer, de toegepaste regels, de beoordelingen van de modellen en de goedkeurder",
        "Menselijke goedkeuring bij elke uitzondering, zo ontworpen",
        "Wordt nu uitgerold als Agent Flow, dat potentiële klanten kunnen uitproberen",
      ],
      de: [
        "Jede Entscheidung rückverfolgbar bis zur Eingabe, zu den angewandten Regeln, den Modellbewertungen und der freigebenden Person",
        "Menschliche Freigabe bei jeder Ausnahme, bewusst so angelegt",
        "Wird jetzt als Agent Flow eingeführt, den Interessenten ausprobieren können",
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
      nl: [
        "Document Intelligence",
        "LLM Council",
        "Agent Flow",
        "Governance Dashboard",
      ],
      de: [
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
      nl: "handelsplatform-metalen",
      de: "handelsplattform-metalle",
    },
    segment: "automation",
    descriptor: {
      en: "Trade finance",
      it: "Trade finance",
      nl: "Handelsfinanciering",
      de: "Handelsfinanzierung",
    },
    title: {
      en: "A trading platform for a metals consortium",
      it: "Piattaforma di trading per un consorzio metalli",
      nl: "Een handelsplatform voor een consortium in de metaalhandel",
      de: "Eine Handelsplattform für ein Konsortium im Metallhandel",
    },
    metaTitle: {
      nl: "Handelsplatform voor een metaalconsortium",
      de: "Handelsplattform für ein Metallkonsortium",
    },
    summary: {
      en: "Automated settlement, stock monitoring and compliance alerts replaced paper-based steps shared by traders, financiers and insurers.",
      it: "Regolamento automatico, monitoraggio scorte e alert di conformità al posto di passaggi cartacei condivisi tra trader, finanziatori e assicuratori.",
      nl: "Geautomatiseerde afwikkeling, voorraadbewaking en compliancemeldingen vervingen de papieren stappen van handelaren, financiers en verzekeraars.",
      de: "Automatisierte Abwicklung, Bestandsüberwachung und Compliance-Warnungen ersetzten Papierschritte, die Händler, Finanzierer und Versicherer teilten.",
    },
    client: {
      en: "Consortium of traders, financiers, insurers and logistics firms",
      it: "Consorzio di trader, finanziatori, assicuratori e operatori logistici",
      nl: "Consortium van handelaren, financiers, verzekeraars en logistieke bedrijven",
      de: "Konsortium aus Händlern, Finanzierern, Versicherern und Logistikunternehmen",
    },
    role: {
      en: "Study, platform concept, desktop and mobile applications",
      it: "Studio, concept di piattaforma, applicazioni desktop e mobile",
      nl: "Studie, platformconcept, desktop- en mobiele apps",
      de: "Studie, Plattformkonzept, Desktop- und Mobile-Apps",
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
      nl: [
        "Metaalhandel draait erom dat veel partijen het over dezelfde feiten eens zijn: de prijs, de eigenaar, de locatie van het materiaal en of het aan de complianceregels voldoet. In dit consortium ging het meeste daarvan nog op papier.",
        "Onderhandeling, hedging, afwikkeling en voorraadcontrole gebeurden elk ergens anders. Alles op elkaar afstemmen was traag en foutgevoelig.",
      ],
      de: [
        "Im Metallhandel müssen sich viele Parteien auf dieselben Fakten verlassen: Preis, Eigentum, Lagerort des Materials und die Einhaltung der Compliance-Regeln. In diesem Konsortium lief das meiste davon noch auf Papier.",
        "Verhandlung, Absicherung, Abwicklung und Bestandsprüfung fanden jeweils an anderer Stelle statt. Der Abgleich war langsam und fehleranfällig.",
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
          title: "Rete di trading condivisa",
          body: "Abbiamo progettato una rete privata in cui ogni membro lavora sullo stesso registro operazioni.",
        },
        {
          title: "Regolamento automatico",
          body: "Le interfacce gestiscono copertura e regolamento di fine giornata senza reinserimenti manuali.",
        },
        {
          title: "Monitoraggio scorte",
          body: "Le scorte in magazzino sono monitorate e riconciliate automaticamente, con prezzi dinamici per stoccaggio e assicurazione.",
        },
        {
          title: "Alert di conformità",
          body: "Le regole verificano proprietà, provenienza e conformità, e avvisano la parte interessata quando qualcosa non torna.",
        },
      ],
      nl: [
        {
          title: "Een gedeeld handelsnetwerk",
          body: "We ontwierpen een besloten netwerk waarin elk lid met hetzelfde handelsdossier werkt.",
        },
        {
          title: "Geautomatiseerde afwikkeling",
          body: "Koppelingen regelen hedging en de afwikkeling aan het eind van de dag, zonder handmatig overtypen.",
        },
        {
          title: "Voorraadbewaking",
          body: "Magazijnvoorraden worden automatisch bewaakt en afgestemd, met dynamische tarieven voor opslag en verzekering.",
        },
        {
          title: "Compliancemeldingen",
          body: "Regels controleren eigendom, herkomst en compliance, en waarschuwen de juiste partij als iets niet klopt.",
        },
      ],
      de: [
        {
          title: "Gemeinsames Handelsnetzwerk",
          body: "Wir haben ein geschlossenes Netzwerk entworfen, in dem alle Mitglieder mit demselben Handelsdatensatz arbeiten.",
        },
        {
          title: "Automatisierte Abwicklung",
          body: "Schnittstellen übernehmen Absicherung und Tagesendabrechnung, ohne dass jemand Daten von Hand überträgt.",
        },
        {
          title: "Bestandsüberwachung",
          body: "Lagerbestände werden automatisch überwacht und abgeglichen, mit dynamischen Preisen für Lagerung und Versicherung.",
        },
        {
          title: "Compliance-Warnungen",
          body: "Regeln prüfen Eigentum, Herkunft und Compliance und warnen die zuständige Partei, sobald etwas nicht stimmt.",
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
      nl: [
        "Papieren stappen vervangen door één gedeeld digitaal dossier",
        "Desktop- en mobiele apps voor handelsuitvoering, posities en rapportage",
        "De consortiumleden hebben de lessen overgenomen in hun dagelijkse werk",
      ],
      de: [
        "Papierschritte durch einen gemeinsamen digitalen Datensatz ersetzt",
        "Desktop- und Mobile-Apps für Handelsausführung, Positionen und Reporting",
        "Die Mitglieder des Konsortiums haben die Erkenntnisse in ihren Arbeitsalltag übernommen",
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
      nl: [
        "Procesverkenning",
        "Workflowautomatisering",
        "Regels en meldingen",
        "Mobiel ontwerp",
      ],
      de: [
        "Prozessanalyse",
        "Workflow-Automatisierung",
        "Regeln und Warnungen",
        "Mobile Design",
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
      nl: "traceerbaarheid-voedselketen",
      de: "rueckverfolgbarkeit-lebensmittel",
    },
    segment: "ux",
    descriptor: {
      en: "Food supply chain",
      it: "Filiera alimentare",
      nl: "Voedselketen",
      de: "Lebensmittelkette",
    },
    title: {
      en: "Traceability platform for a food retailer",
      it: "Tracciabilità di filiera per un retailer alimentare",
      nl: "Een traceerbaarheidsplatform voor een foodretailer",
      de: "Eine Plattform zur Rückverfolgung für einen Lebensmittelhändler",
    },
    metaTitle: {
      nl: "Traceerbaarheidsplatform voor een foodretailer",
      de: "Plattform zur Rückverfolgung im Lebensmittelhandel",
    },
    summary: {
      en: "UX lead and design system for a platform that traces products from supplier to shelf, rolled out across stores.",
      it: "Guida UX e design system per una piattaforma che traccia i prodotti dal fornitore allo scaffale, poi estesa ai punti vendita.",
      nl: "UX-leiding en designsystem voor een platform dat producten volgt van leverancier tot schap, uitgerold in de winkels.",
      de: "UX-Leitung und Designsystem für eine Plattform, die Produkte vom Lieferanten bis ins Regal verfolgt, eingeführt in den Filialen.",
    },
    client: {
      en: "Food retailer and its supply chain partners",
      it: "Retailer alimentare e i suoi partner di filiera",
      nl: "Foodretailer en zijn ketenpartners",
      de: "Lebensmittelhändler und seine Partner in der Lieferkette",
    },
    role: {
      en: "UX lead, interface design, design system",
      it: "Guida UX, interface design, design system",
      nl: "UX-lead, interfaceontwerp, designsystem",
      de: "UX-Leitung, Interface Design, Designsystem",
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
      nl: [
        "Consumenten willen steeds vaker weten waar hun eten vandaan komt, en retailers willen dat die informatie klopt. Producenten, verwerkers en certificeerders kenden elk een deel van het verhaal.",
        "Het platform had twee heel verschillende interfaces nodig: een werktool voor leveranciers die productiegegevens invoeren, en een eenvoudige weergave voor klanten die in de winkel een product scannen.",
      ],
      de: [
        "Kunden wollen zunehmend wissen, woher ihre Lebensmittel stammen, und Händler wollen sich auf diese Angaben verlassen können. Erzeuger, Verarbeiter und Prüfstellen kannten jeweils nur einen Teil der Geschichte.",
        "Die Plattform brauchte zwei sehr unterschiedliche Oberflächen: ein Arbeitswerkzeug für Lieferanten, die Produktionsdaten erfassen, und eine einfache Ansicht für Kunden, die im Markt ein Produkt scannen.",
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
          title: "Esperienza d’acquisto",
          body: "Abbiamo progettato la scansione QR perché la storia del prodotto si legga sullo smartphone in pochi secondi.",
        },
        {
          title: "Design system",
          body: "Abbiamo creato un design system condiviso dalle due interfacce, così nuovi prodotti e partner si possono aggiungere in modo coerente.",
        },
      ],
      nl: [
        {
          title: "Werkstromen voor leveranciers",
          body: "We legden vast hoe elke partner productiegegevens invoert, en hielden dat snel voor mensen die het naast hun eigenlijke werk doen.",
        },
        {
          title: "De ervaring voor klanten",
          body: "We ontwierpen de QR-scan zo dat de herkomst van een product binnen enkele seconden duidelijk op een telefoon staat.",
        },
        {
          title: "Designsystem",
          body: "We bouwden één designsystem voor beide interfaces, zodat nieuwe producten en partners er consistent bij konden komen.",
        },
      ],
      de: [
        {
          title: "Abläufe für Lieferanten",
          body: "Wir haben festgelegt, wie jeder Partner Produktionsdaten erfasst, und die Eingabe schnell gehalten, denn sie geschieht neben der eigentlichen Arbeit.",
        },
        {
          title: "Das Einkaufserlebnis",
          body: "Wir haben den QR-Scan so gestaltet, dass sich die Herkunft eines Produkts auf dem Smartphone in wenigen Sekunden erschließt.",
        },
        {
          title: "Designsystem",
          body: "Wir haben ein gemeinsames Designsystem für beide Oberflächen aufgebaut, damit neue Produkte und Partner einheitlich dazukommen konnten.",
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
      nl: [
        "Platform gelanceerd en in gebruik in de winkels",
        "Klanten zien de reis van een product van leverancier tot schap",
        "Een herbruikbaar designsystem, en een interne prijs als erkenning",
      ],
      de: [
        "Plattform gestartet und in den Filialen im Einsatz",
        "Kunden sehen den Weg eines Produkts vom Lieferanten bis ins Regal",
        "Ein wiederverwendbares Designsystem und eine interne Auszeichnung",
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
      nl: [
        "UX-leiding",
        "Interfaceontwerp",
        "Designsystems",
        "Mobiel ontwerp",
      ],
      de: [
        "UX-Leitung",
        "Interface Design",
        "Designsysteme",
        "Mobile Design",
      ],
    },
    related: ["procurement", "trading"],
    media: "caseFoodTraceabilityPlatform",
  },
  {
    id: "trading",
    slug: {
      en: "trading-app-redesign",
      it: "riprogettazione-app-trading",
      nl: "herontwerp-trading-app",
      de: "neugestaltung-trading-app",
    },
    segment: "ux",
    descriptor: {
      en: "Digital assets",
      it: "Asset digitali",
      nl: "Digitale activa",
      de: "Digitale Vermögenswerte",
    },
    title: {
      en: "Trading app redesign for a digital assets platform",
      it: "App di trading ridisegnata per una piattaforma di asset digitali",
      nl: "Trading-app opnieuw ontworpen voor een platform voor digitale activa",
      de: "Neugestaltung der Trading-App einer Plattform für digitale Vermögenswerte",
    },
    metaTitle: {
      it: "App di trading ridisegnata per asset digitali",
      nl: "Nieuwe trading-app voor digitale activa",
      de: "Neue Trading-App für digitale Vermögenswerte",
    },
    summary: {
      en: "A responsive redesign of a trading app for mobile and desktop, built on a modular design framework.",
      it: "Riprogettazione responsive di un’app di trading per mobile e desktop, su un framework di design modulare.",
      nl: "Een responsief herontwerp van een trading-app voor mobiel en desktop, gebouwd op een modulair ontwerpframework.",
      de: "Eine responsive Neugestaltung der Trading-App für Smartphone und Desktop, aufgebaut auf einem modularen Design-Framework.",
    },
    client: {
      en: "Digital assets trading platform",
      it: "Piattaforma di trading di asset digitali",
      nl: "Handelsplatform voor digitale activa",
      de: "Handelsplattform für digitale Vermögenswerte",
    },
    role: {
      en: "UX and UI redesign, front-end framework",
      it: "Riprogettazione UX e UI, framework front-end",
      nl: "Herontwerp van UX en UI, front-endframework",
      de: "UX- und UI-Neugestaltung, Frontend-Framework",
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
      nl: [
        "De bestaande app was functie voor functie gegroeid en vooral voor één schermformaat gebouwd. Traders wisselen overdag tussen telefoon en desktop, en kregen op elk apparaat een andere ervaring.",
        "Elke nieuwe functie kostte meer tijd dan de vorige.",
      ],
      de: [
        "Die bestehende App war Funktion für Funktion gewachsen und vor allem für eine Bildschirmgröße gebaut. Trader wechseln im Lauf des Tages zwischen Smartphone und Desktop und fanden auf jedem Gerät eine andere Oberfläche vor.",
        "Jede neue Funktion dauerte länger als die vorherige.",
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
      nl: [
        {
          title: "De ervaring opnieuw opbouwen",
          body: "We ontwierpen de app van de grond af opnieuw voor mobiel en desktop, rond de handelingen die traders het vaakst herhalen.",
        },
        {
          title: "Een modulair framework",
          body: "We deelden de interface op in modules die opnieuw te gebruiken en te herschikken zijn naarmate het product groeit.",
        },
        {
          title: "Een vaste testpraktijk",
          body: "We voerden testpraktijken in, zodat wijzigingen live kunnen zonder iets te breken wat al werkt.",
        },
      ],
      de: [
        {
          title: "Die Oberfläche neu aufbauen",
          body: "Wir haben die App von Grund auf für Smartphone und Desktop neu gestaltet, ausgerichtet auf die Aufgaben, die Trader am häufigsten erledigen.",
        },
        {
          title: "Modulares Framework",
          body: "Wir haben die Oberfläche in Module gegliedert, die sich wiederverwenden und neu anordnen lassen, wenn das Produkt wächst.",
        },
        {
          title: "Feste Testpraxis",
          body: "Wir haben Testverfahren eingeführt, damit Änderungen live gehen können, ohne Bestehendes zu beschädigen.",
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
      nl: [
        "Eén consistente ervaring op mobiel en desktop",
        "Een modulair framework waarmee nieuwe functies sneller klaar zijn",
        "Een basis die ook buiten het product voor digitale activa bruikbaar is",
      ],
      de: [
        "Eine einheitliche Oberfläche auf Smartphone und Desktop",
        "Ein modulares Framework, das neue Funktionen beschleunigt",
        "Eine Grundlage, die sich auch über das Produkt für digitale Vermögenswerte hinaus nutzen lässt",
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
      nl: [
        "Interfaceontwerp",
        "Responsive design",
        "Designsystems",
        "Front-endarchitectuur",
      ],
      de: [
        "Interface Design",
        "Responsive Design",
        "Designsysteme",
        "Frontend-Architektur",
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
      nl: "ai-inkoopplatform",
      de: "ki-einkaufsplattform",
    },
    segment: "automation",
    descriptor: {
      en: "Procurement",
      it: "Acquisti",
      nl: "Inkoop",
      de: "Einkauf",
    },
    title: {
      en: "AI-assisted procurement platform",
      it: "Piattaforma acquisti assistita dall’AI",
      nl: "Een inkoopplatform met AI-ondersteuning",
      de: "Eine KI-gestützte Einkaufsplattform",
    },
    summary: {
      en: "A proof of concept that brings requests, risk checks, contracts and suppliers into one flow, with machine learning taking on the manual steps.",
      it: "Un proof of concept che riunisce richieste, controlli di rischio, contratti e fornitori in un solo flusso, con il machine learning sui passaggi manuali.",
      nl: "Een proof of concept dat aanvragen, risicocontroles, contracten en leveranciers in één stroom samenbrengt, met machine learning voor het handwerk.",
      de: "Ein Proof of Concept, der Anfragen, Risikoprüfungen, Verträge und Lieferanten in einem Ablauf vereint; Machine Learning übernimmt die Handarbeit.",
    },
    client: {
      en: "Global procurement organisation",
      it: "Organizzazione acquisti globale",
      nl: "Wereldwijde inkooporganisatie",
      de: "Globale Einkaufsorganisation",
    },
    role: {
      en: "Proof of concept: UX, software and machine learning",
      it: "Proof of concept: UX, software e machine learning",
      nl: "Proof of concept: UX, software en machine learning",
      de: "Proof of Concept: UX, Software und Machine Learning",
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
      nl: [
        "Aanvragers, risicomanagers, contractmanagers en leveranciers zagen elk alleen hun eigen deel van een aankoop. Niemand had een helder beeld van aanvraag tot levering, inclusief de uitgaven.",
        "De afstemming tussen hen was grotendeels handwerk. Dat verhoogde de werkdruk en maakte risico’s pas laat zichtbaar.",
      ],
      de: [
        "Anfragende, Risikomanager, Vertragsmanager und Lieferanten sahen jeweils nur ihren Teil eines Einkaufs. Niemand hatte den Überblick von der Anfrage bis zur Lieferung, einschließlich der Ausgaben.",
        "Die Abstimmung zwischen ihnen lief größtenteils manuell. Das erhöhte die Arbeitslast und machte Risiken erst spät sichtbar.",
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
          body: "Abbiamo progettato un solo percorso in cui ogni ruolo interviene al proprio passaggio, con il quadro completo quando serve.",
        },
        {
          title: "Machine learning sui passaggi manuali",
          body: "I modelli si occupano di classificazioni e controlli che prima si facevano a mano.",
        },
        {
          title: "Rischio e spesa a vista",
          body: "Segnali di rischio e spesa restano visibili lungo tutto l’acquisto, non solo alla fine.",
        },
      ],
      nl: [
        {
          title: "Eén stroom voor elke rol",
          body: "We ontwierpen één traject waarin elke rol bij de eigen stap instapt, met het volledige beeld binnen handbereik wanneer dat nodig is.",
        },
        {
          title: "Machine learning voor het handwerk",
          body: "Modellen nemen classificaties en controles over die mensen eerder met de hand deden.",
        },
        {
          title: "Risico en uitgaven in beeld",
          body: "Risicosignalen en uitgaven zijn tijdens de hele aankoop zichtbaar, niet pas aan het eind.",
        },
      ],
      de: [
        {
          title: "Ein Ablauf für jede Rolle",
          body: "Wir haben einen durchgängigen Ablauf entworfen, in den jede Rolle bei ihrem Schritt einsteigt, mit dem Gesamtbild, sobald es gebraucht wird.",
        },
        {
          title: "Machine Learning statt Handarbeit",
          body: "Modelle übernehmen Klassifizierungen und Prüfungen, die bisher von Hand erledigt wurden.",
        },
        {
          title: "Risiko und Ausgaben im Blick",
          body: "Risikosignale und Ausgaben sind während des gesamten Einkaufs sichtbar, nicht erst am Ende.",
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
      nl: [
        "Zicht van aanvraag tot levering, inclusief de uitgaven",
        "Minder handwerk voor elke betrokken groep",
        "Het proof of concept liet verbeteringen zien in het hele inkoopproces",
      ],
      de: [
        "Durchgängiger Überblick von der Anfrage bis zur Lieferung, einschließlich der Ausgaben",
        "Weniger manuelle Arbeit für jede beteiligte Gruppe",
        "Der Proof of Concept zeigte Verbesserungen im gesamten Einkaufsprozess",
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
      nl: [
        "Service design",
        "Machine learning",
        "Zicht op risico",
        "Proof of concept",
      ],
      de: [
        "Service Design",
        "Machine Learning",
        "Risikotransparenz",
        "Proof of Concept",
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
      nl: "ai-trainingsvideos",
      de: "ki-schulungsvideos",
    },
    segment: "automation",
    descriptor: {
      en: "Enterprise training",
      it: "Formazione aziendale",
      nl: "Bedrijfsopleidingen",
      de: "Unternehmensschulung",
    },
    title: {
      en: "Training videos at scale for an enterprise system rollout",
      it: "Formazione video su larga scala per un rollout enterprise",
      nl: "Trainingsvideo’s op schaal voor de invoering van een bedrijfssysteem",
      de: "Schulungsvideos in Serie für die Einführung eines Unternehmenssystems",
    },
    metaTitle: {
      en: "Training videos at scale for an enterprise rollout",
      it: "Video formativi in serie per un rollout enterprise",
      nl: "Trainingsvideo’s op schaal voor een systeeminvoering",
      de: "Schulungsvideos in Serie für eine Systemeinführung",
    },
    summary: {
      en: "A repeatable production process that turned complex system workflows into on-demand training videos with AI presenters.",
      it: "Un processo ripetibile che trasforma flussi di sistema complessi in video formativi on demand con presentatori AI.",
      nl: "Een herhaalbaar productieproces dat complexe systeemprocessen omzette in trainingsvideo’s op aanvraag, met AI-presentatoren.",
      de: "Ein wiederholbarer Produktionsprozess, der komplexe Systemabläufe in Schulungsvideos auf Abruf verwandelte, mit KI-Moderatoren.",
    },
    client: {
      en: "Enterprise organisation, internal systems",
      it: "Organizzazione enterprise, sistemi interni",
      nl: "Grote organisatie, interne systemen",
      de: "Großunternehmen, interne Systeme",
    },
    role: {
      en: "Scripting, production framework, delivery",
      it: "Sceneggiatura, framework di produzione, consegna",
      nl: "Scripts, productieaanpak, oplevering",
      de: "Drehbücher, Produktionsablauf, Bereitstellung",
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
      nl: [
        "Eén-op-één trainingen op een complex systeem zijn niet op te schalen, en elke trainer legt het net iets anders uit. De schriftelijke documentatie klopte, maar werd zelden gelezen.",
        "Nieuwe en bestaande gebruikers in meerdere regio’s hadden dezelfde kennis nodig, op het moment dat ze die nodig hadden.",
      ],
      de: [
        "Einzelschulungen an einem komplexen System lassen sich nicht skalieren, und jeder Trainer erklärt es etwas anders. Die schriftliche Dokumentation war korrekt, wurde aber kaum gelesen.",
        "Neue und erfahrene Nutzer in mehreren Regionen brauchten dasselbe Wissen, genau dann, wenn sie es brauchten.",
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
          body: "Abbiamo validato ogni flusso con i responsabili di sistema prima di scrivere una riga.",
        },
        {
          title: "Scrivere per lo schermo",
          body: "Abbiamo scritto sceneggiature tecniche allineate alle registrazioni della logica di business reale.",
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
      nl: [
        {
          title: "De inhoud valideren",
          body: "Elk proces lieten we bevestigen door de systeemeigenaren, nog voordat we één woord schreven.",
        },
        {
          title: "Schrijven voor het scherm",
          body: "We schreven technische scripts die aansluiten op schermopnames van de echte bedrijfslogica.",
        },
        {
          title: "Produceren met AI-presentatoren",
          body: "We namen gedetailleerde walkthroughs op en voegden AI-presentatoren met een professionele voice-over toe.",
        },
        {
          title: "Opleveren als modulaire bibliotheek",
          body: "De video’s zijn ingedeeld in korte modules, voor onboarding en om later kennis op te frissen.",
        },
      ],
      de: [
        {
          title: "Inhalte validieren",
          body: "Jeden Ablauf haben wir mit den Systemverantwortlichen abgestimmt, bevor wir ein Wort geschrieben haben.",
        },
        {
          title: "Für den Bildschirm schreiben",
          body: "Wir haben technische Drehbücher geschrieben, abgestimmt auf Bildschirmaufnahmen der tatsächlichen Geschäftslogik.",
        },
        {
          title: "Mit KI-Moderatoren produzieren",
          body: "Wir haben detailgetreue Walkthroughs aufgezeichnet und KI-Moderatoren mit professioneller Sprecherstimme ergänzt.",
        },
        {
          title: "Als modulare Bibliothek bereitstellen",
          body: "Die Videos sind in kurze Module gegliedert, für das Onboarding und zum späteren Auffrischen.",
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
      nl: [
        "Een herhaalbaar proces: ongeveer een uur productie per minuut video",
        "Consistente training in alle regio’s, op elk moment beschikbaar",
        "Experts besteden minder tijd aan het herhalen van dezelfde sessies",
      ],
      de: [
        "Ein wiederholbarer Prozess: etwa eine Stunde Produktion pro fertiger Videominute",
        "Einheitliche Schulung in allen Regionen, jederzeit abrufbar",
        "Fachleute müssen dieselben Schulungen seltener wiederholen",
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
      nl: [
        "Didactisch ontwerp",
        "Scripts schrijven",
        "AI-videoproductie",
        "Kennisoverdracht",
      ],
      de: [
        "Didaktisches Design",
        "Drehbücher",
        "KI-Videoproduktion",
        "Wissenstransfer",
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
  return CASE_STUDIES.find((study) =>
    Object.values(study.slug).includes(slug),
  );
}

/** The studies in a segment, in order, optionally capped for a card row. */
export function caseStudiesFor(segment: Segment, limit?: number): CaseStudy[] {
  const matched = CASE_STUDIES.filter((study) => study.segment === segment);
  return limit ? matched.slice(0, limit) : matched;
}
