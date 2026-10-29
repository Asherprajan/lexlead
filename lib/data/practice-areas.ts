export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: "Scale" | "Landmark" | "Users" | "House" | "Building2" | "FileText";
  image: string;
  scope: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    shortDescription: "Legal representation and support in civil disputes and proceedings.",
    longDescription:
      "Civil litigation requires disciplined factual investigation, comprehensive evidence collation, and articulate courtroom advocacy. We represent clients across original suits, interlocutory applications, and statutory appeals before civil courts and appellate forums in Kerala.",
    iconName: "Scale",
    image: "/images/practice-civil.jpg",
    scope: [
      "Original suits for declaration, recovery of money, and permanent injunctions",
      "Interlocutory relief petitions and emergency stay applications",
      "Appellate advocacy before Subordinate Courts, District Courts, and the High Court",
      "Execution petitions for decree enforcement and satisfaction",
      "Landlord-tenant litigation and contractual dispute resolution",
    ],
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    shortDescription: "Legal assistance and representation in criminal matters.",
    longDescription:
      "Criminal proceedings directly involve personal liberty and constitutional rights. Our chambers provide methodical defense counsel, ensuring procedural justice under the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Code of Criminal Procedure (CrPC).",
    iconName: "Landmark",
    image: "/images/practice-criminal.jpg",
    scope: [
      "Anticipatory bail applications before Sessions Courts and the High Court of Kerala",
      "Regular bail petitions and modification of bail conditions",
      "Trial defense before Judicial First Class Magistrates and Sessions Courts",
      "Criminal revision petitions, appeals, and quashing proceedings",
      "Private complaint filings and statutory offense representations",
    ],
  },
  {
    slug: "family-and-matrimonial-law",
    title: "Family and Matrimonial Law",
    shortDescription: "Guidance relating to family disputes and matrimonial matters.",
    longDescription:
      "Family disputes demand high discretion, emotional restraint, and pragmatic dispute resolution. We assist parties before Family Courts across Kerala with dignity, prioritizing the welfare of children and realistic settlement conciliation.",
    iconName: "Users",
    image: "/images/practice-family.jpg",
    scope: [
      "Mutual consent divorce petitions and contested matrimonial proceedings",
      "Interim and permanent maintenance petitions for spouse and dependent children",
      "Child custody, visitation rights, and guardianship applications",
      "Mediation representation and amicable settlement negotiations",
      "Proceedings under domestic violence legislation and protection orders",
    ],
  },
  {
    slug: "property-and-real-estate",
    title: "Property and Real Estate",
    shortDescription: "Support relating to property transactions, disputes, and documentation.",
    longDescription:
      "Property transactions and land tenure in Kerala involve complex statutory and revenue considerations. We conduct rigorous due diligence, trace ancestral titles, and represent parties in partition, boundary, and title disputes.",
    iconName: "House",
    image: "/images/practice-property.jpg",
    scope: [
      "Comprehensive 30-year title verification, encumbrance tracing, and legal scrutiny",
      "Partition suits among family co-owners and legal heirs",
      "Boundary demarcation, easement rights, and trespass litigation",
      "Representation before Land Tribunals and Revenue Authorities in Kerala",
      "Sale deed, settlement deed, lease, and mortgage documentation scrutiny",
    ],
  },
  {
    slug: "corporate-and-commercial-law",
    title: "Corporate and Commercial Law",
    shortDescription: "Legal support for business and commercial matters.",
    longDescription:
      "We provide strategic commercial counsel to emerging ventures, partnerships, and established businesses in Kerala. Our practice focuses on risk prevention, contractual clarity, and expeditious commercial dispute resolution.",
    iconName: "Building2",
    image: "/images/practice-corporate.jpg",
    scope: [
      "Commercial contract formulation, NDA agreements, and vendor pacts",
      "Partnership deed drafting, LLP formation, and founding member agreements",
      "MSME payment delay resolution and conciliation proceedings",
      "Commercial breach of warranty and supply chain dispute mediation",
      "Arbitration notice formulation and arbitral tribunal representation",
    ],
  },
  {
    slug: "contract-and-documentation-support",
    title: "Contract and Documentation Support",
    shortDescription: "Drafting, reviewing, and guidance relating to legal documents and agreements.",
    longDescription:
      "Statutory precision in legal drafting prevents future liabilities and litigation. We formulate, review, and audit high-value agreements, deeds, and statutory notices with painstaking attention to detail.",
    iconName: "FileText",
    image: "/images/practice-contract.jpg",
    scope: [
      "Commercial agreements, service contracts, and consultancy pacts",
      "General and Special Power of Attorney instruments",
      "Wills, codicils, family settlement deeds, and trust instruments",
      "Legal notices, formal reply notices, and rejoinder communications",
      "Independent legal review of agreements drafted by opposing parties",
    ],
  },
  {
    slug: "constitutional-and-writ-matters",
    title: "Constitutional and Writ Matters",
    shortDescription: "Extraordinary writ remedies and fundamental rights enforcement before the High Court of Kerala under Articles 226 and 227.",
    longDescription:
      "The High Court of Kerala exercises supervisory and plenary constitutional jurisdiction under Articles 226 and 227 of the Constitution of India. Our chambers provide strategic counsel and articulate courtroom advocacy in invoking extraordinary prerogative writ remedies—securing prompt interim protection against arbitrary state action, statutory excess, and infringements of fundamental rights.",
    iconName: "Scale",
    image: "/images/hero-chamber.jpg",
    scope: [
      "Writ Petitions (Civil & Criminal) under Article 226 of the Constitution of India",
      "Prerogative Writs: Mandamus, Certiorari, Prohibition, Quo Warranto, and Habeas Corpus",
      "Emergency interim stays, status quo directions, and mandatory orders against government bodies",
      "Constitutional challenges to statutory enactments, administrative orders, and municipal rules",
      "Supervisory jurisdiction and appellate proceedings before the Division Bench under Article 227",
    ],
  },
  {
    slug: "administrative-matters",
    title: "Administrative Matters",
    shortDescription: "Representation in government service disputes, administrative tribunals, and regulatory proceedings.",
    longDescription:
      "Administrative law governs the exercise of public authority, statutory discretion, and government employer-employee relationships. We represent civil servants, public sector personnel, educational institutions, and citizens before the Central Administrative Tribunal (CAT), Kerala Administrative Tribunal (KAT), and state regulatory authorities in Thiruvananthapuram and Ernakulam.",
    iconName: "Landmark",
    image: "/images/editorial-desk.jpg",
    scope: [
      "Representation before the Central Administrative Tribunal (CAT) and Kerala Administrative Tribunal (KAT)",
      "Service jurisprudence: promotion disputes, disciplinary inquiries, suspensions, and seniority conflicts",
      "Pensions, gratuity, voluntary retirement benefits, and terminal settlement adjudications",
      "Right to Information (RTI) appeals and regulatory compliance before State Commissions",
      "Administrative representations to Government Secretariats, District Collectors, and statutory boards",
    ],
  },
];
