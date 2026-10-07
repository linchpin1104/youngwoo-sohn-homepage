// Publications data for Professor Youngwoo Sohn - ATC-LAB

export interface JournalPaper {
  id: number;
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  year: number;
  month?: string;
  status?: string;
  impactFactor?: number;
}

export interface ConferencePaper {
  id: number;
  title: string;
  venue: string;
  date: string;
  location?: string;
  note?: string;
}

export interface BookChapter {
  id: number;
  title: string;
  publisher: string;
  year: number;
  description?: string;
}

export const journalPapers: JournalPaper[] = [
  {
    id: 101,
    title:
      "Empirical Validation of Information, Service, and Personal Characteristics Influencing Adoption Intentions of Generative AI Services: A Focus on ChatGPT",
    journal: "Asia Pacific Journal of Information Systems",
    volume: "36",
    issue: "3",
    year: 2026,
    month: "September",
  },
  {
    id: 102,
    title:
      "Effect of Team Diversity and Social Capital of Laboratory Start-Up on Performance: Focusing on I-Corps",
    journal: "Engineering Management Journal",
    year: 2026,
    month: "March",
    status: "Accepted, SSCI",
  },
  {
    id: 103,
    title:
      "A Study on Innovation Intermediary Role Models for Open Innovation: Focusing on Resource Dependence Theory and Core Competence Theory",
    journal: "Journal of Technology Innovation",
    volume: "34",
    issue: "31",
    year: 2026,
    month: "March",
  },
  {
    id: 104,
    title:
      "A Case Study on Duolingo's Open Innovation Applying the Zone of Proximal Development (ZPD) Theory",
    journal: "Journal of Management & Economics",
    volume: "47",
    issue: "4",
    year: 2025,
    month: "November",
  },
  {
    id: 105,
    title:
      "A Study on the Influence of Founder Characteristics and Mentoring Factors on Entrepreneurial Satisfaction from a Social Learning Theory Perspective",
    journal:
      "The Journal of Korean Career·Entrepreneurship & Business Association",
    volume: "9",
    issue: "6",
    year: 2025,
    month: "November",
  },
  {
    id: 106,
    title:
      "Korean Automakers' Approach to Responsible Innovation in AAM Development Through Open Innovation",
    journal: "Journal of Management and Economics",
    volume: "13",
    issue: "3",
    year: 2025,
    month: "August",
  },
  {
    id: 107,
    title:
      "Economic Feasibility of Sustainable Aviation Fuel Adoption by Airline Size and Government Incentives",
    journal: "Journal of The Korean Society of Industry Convergence",
    volume: "25",
    issue: "1",
    year: 2025,
    month: "June",
  },
  {
    id: 108,
    title:
      "Study on the Role of Innovation Intermediaries in Open Innovation: From the Perspective of Resource Dependence Theory and Core Competency Theory",
    journal: "Asian Journal of Innovation and Policy",
    volume: "13",
    issue: "3",
    year: 2024,
    month: "December",
  },
  {
    id: 109,
    title:
      "Human Capital Signals, Network Position, and Digital Reputation in an Entrepreneurial Mentoring Platform",
    journal: "Asia-Pacific Journal of Business Venturing and Entrepreneurship",
    year: 2026,
    status: "Under Review, KCI",
  },
  {
    id: 110,
    title:
      "Demonstration of Obstacle Avoidance and Autonomous Flight Based on Monocular Vision and Domestically Produced On-Device AI",
    journal: "Journal of the Korean Society of Industry Convergence",
    year: 2026,
    status: "Under Review, KCI",
  },
  {
    id: 111,
    title:
      "Development of a Methodology for Quantifying Greenhouse Gas Emission Reductions from the Selective Collection and Material Recycling of Post-Consumer Paper Cups",
    journal: "Journal of Climate Change Research",
    year: 2026,
    status: "Under Review, KCI",
  },
  {
    id: 112,
    title:
      "When Patents Don't Pay: Scaling Signals and the Reconfiguration of Venture Capital Screening in Korea",
    journal: "Asian Business & Management",
    year: 2026,
    status: "Under Review, SSCI",
  },
  {
    id: 113,
    title:
      "Team Characteristics, Social Capital, and Founder's Experience: Drivers of Startup Performance in Technology-Based Startups",
    journal: "R&D Management",
    year: 2026,
    status: "Under Review, SSCI",
  },
  {
    id: 114,
    title:
      "Predicting Series B Funding Success Using Machine Learning: Insights for Sustainable Corporate Practices in Digital Transformation",
    journal: "Systems",
    year: 2026,
    status: "Under Review, SSCI",
  },
  {
    id: 115,
    title:
      "Can Museums Innovate Without Losing Their Identity? Exploring the National Museum of Korea Case",
    journal: "Curator",
    year: 2026,
    status: "Under Review, AHCI",
  },
  {
    id: 116,
    title:
      "Integrated Multi-Attribute Weighted Analysis Process Development for NPD Phase of a Manufacturing Startup",
    journal: "Asian Business & Management",
    year: 2026,
    status: "Under Review, SSCI",
  },
  {
    id: 2,
    title:
      "Predicting the First Episode's Viewer Ratings of Daily Dramas Using the Prophet Model",
    journal: "Information Systems Review",
    volume: "26",
    issue: "3",
    year: 2024,
  },
  {
    id: 3,
    title:
      "A Case Study on Growth Through Coupled Process Open Innovation in the Faculty Startup Ecosystem: From the Perspective of Core Competency Theory",
    journal:
      "Asia-Pacific Journal of Business Venturing and Entrepreneurship",
    volume: "19",
    issue: "3",
    year: 2024,
  },
  {
    id: 4,
    title:
      "Analysis of the success factors of open innovation from the perspective of cooperative game theory: Focusing on the case of collaboration between Korean large company 'G' and startup 'S'",
    journal:
      "Asia-Pacific Journal of Business Venturing and Entrepreneurship",
    volume: "19",
    issue: "2",
    year: 2024,
  },
  {
    id: 5,
    title:
      "The effect of team characteristics of technology-based startup programs on patent performance: focusing on team diversity",
    journal: "Knowledge Management Research",
    volume: "25",
    issue: "1",
    year: 2024,
  },
  {
    id: 6,
    title:
      "Development of Digital Twin and Intelligent Monorail Robot for Road Tunnel Smart Management",
    journal: "Journal of the Korean Society of Industry Convergence",
    volume: "27",
    issue: "1",
    year: 2024,
  },
  {
    id: 7,
    title:
      "A Case Study on Growth through Open Innovation in a Digital Healthcare Venture Business: From the Perspective of Transaction Cost Reduction in Neeuro",
    journal:
      "The Journal of Korean Career\u00B7Entrepreneurship & Business",
    volume: "7",
    issue: "1",
    year: 2024,
  },
  {
    id: 8,
    title:
      "The Impact of Social Capital and Laboratory Startup Team Diversity on Startup Performance Based on a Network Perspective: Focusing on the I-Corps Program",
    journal:
      "Asia-Pacific Journal of Business Venturing and Entrepreneurship",
    volume: "18",
    issue: "6",
    year: 2023,
  },
  {
    id: 9,
    title:
      "Development and Application of Artificial Intelligence Image Recognition Technology for Innovation in Retail Services",
    journal: "Journal of Korea Service Management Society",
    volume: "24",
    issue: "5",
    year: 2023,
  },
  {
    id: 10,
    title:
      "The Influence of Dependability in Cloud Computing Adoption: Focus on Similarities and Differences by IT Intensity and Service Type",
    journal: "The Journal of Supercomputing",
    year: 2022,
    month: "February",
    status: "SCI",
  },
  {
    id: 11,
    title:
      "Acceptance of public cloud storage services in South Korea: A multi-group analysis",
    journal: "International Journal of Information Management",
    volume: "51",
    year: 2020,
    month: "April",
    impactFactor: 21,
    status: "SSCI",
  },
  {
    id: 12,
    title:
      "A Bibliometric Study of International and Domestic Academic Research on Intellectual Property",
    journal:
      "International Journal of Innovative Technology and Exploring Engineering",
    volume: "8",
    issue: "8S2",
    year: 2019,
    month: "June",
  },
  {
    id: 13,
    title:
      "High-Performance Work Systems and Ambidextrous Capability and Innovation Performance: The Moderating Role of Innovative Organizational Culture",
    journal: "Journal of Business Research",
    volume: "34",
    issue: "4",
    year: 2019,
  },
  {
    id: 14,
    title:
      "Oil price and Macro economy: A Markov Switching Approach with Unobserved Component Model",
    journal: "International Journal of Management Science",
    volume: "14",
    issue: "2",
    year: 2008,
  },
  {
    id: 15,
    title:
      "An Empirical Study on Factors Influencing CRM Performance: Focusing on Customer Satisfaction and Customer Loyalty",
    journal: "Management Science",
    volume: "25",
    issue: "1",
    year: 2008,
  },
  {
    id: 16,
    title:
      "Implementation of a JIT Delivery System to Strengthen Distribution Competitiveness: DFSS Methodology",
    journal: "Journal of the Korean Data Analysis Society",
    volume: "8",
    issue: "6",
    year: 2006,
  },
  {
    id: 17,
    title:
      "A Study on the Composition Process of the Optimal Design for Each Market of Hotel Service Segment using Mixed Regression Model",
    journal: "Management Study",
    volume: "5",
    issue: "3",
    year: 2006,
  },
  {
    id: 18,
    title:
      "Promotion of e-Partnering of Supply Chain for the Implementation of a Collaboration System between Companies",
    journal: "Information System Review",
    volume: "6",
    issue: "2",
    year: 2004,
  },
  {
    id: 19,
    title:
      "An Analysis of the Economic Effects of the Introduction of E-Commerce Using Simulation Techniques",
    journal: "Management Informatics Research",
    volume: "13",
    issue: "1",
    year: 2003,
  },
];

export const conferencePapers: ConferencePaper[] = [
  {
    id: 101,
    title:
      "Analyzing Startup Investment Success Paths Based on Market Environment and Business Maturity: Focusing on Signal-Based Clustering and State Transition Analysis",
    venue: "한국경영학회 융합학술대회",
    date: "2026-08",
  },
  {
    id: 102,
    title: "Quantum TECH & Business @Sejong",
    venue: "중부권 과학기술혁신포럼",
    date: "2026-08",
  },
  {
    id: 103,
    title: "Food Tech Robot",
    venue: "World Food Tech 2026 ConfEx, KINTEX",
    date: "2026-06",
  },
  {
    id: 104,
    title:
      "Connection vs. Collaboration: An Exploratory Study of Innovation Intermediary Types and Startup Growth Patterns in AI-Driven Open Innovation",
    venue: "International R&D Management Workshop",
    date: "2026-05",
  },
  {
    id: 105,
    title: "Lab to Market 실험실 창업기업의 성과 지원 세션 좌장",
    venue: "창업관련학회 춘계통합학술대회",
    date: "2026-04",
  },
  {
    id: 106,
    title: "Quantum Tech & Business 양자산업의 현재와 미래",
    venue: "반도체물리학부 콜로퀴움, 고려대학교",
    date: "2026-03",
  },
  {
    id: 107,
    title: "AI x ESG Transforming Sustainability & Corporate Responsibility",
    venue: "Global ESG Conference",
    date: "2025-06",
  },
  {
    id: 108,
    title: "Pivot or Die 양자택일, 그리고 양자산업",
    venue: "피봇팅 지원 사업 성과공유, DSC 모빌리티 사업단",
    date: "2025-02",
  },
  {
    id: 109,
    title: "기업가정신과 과학기술실용화 (고려대학교 첨단기술비즈니스학과 세션) 좌장",
    venue: "기업가정신학회 추계학술대회",
    date: "2024-10",
  },
  {
    id: 1,
    title: "Applied AI @Business",
    venue: "Individual AI Research Seminar, Journal of Open Innovation, DIGIST",
    date: "2024-01-25",
  },
  {
    id: 2,
    title:
      "The effect of team characteristics of technology-based startup programs on patent performance",
    venue: "Conference of the Korean Knowledge Management Association",
    date: "2023-11-20",
  },
  {
    id: 3,
    title: "Food Tech Business Model",
    venue:
      "School of Convergence Science and Technology Seminar, POSTECH",
    date: "2023-11-17",
  },
  {
    id: 4,
    title: "Startup & BM for Value Creation",
    venue: "GRaND-K Start-up School, Hongneung Gangso Zone",
    date: "2023-06-21",
  },
  {
    id: 5,
    title: "Student Entrepreneurship and Entrepreneurship",
    venue: "Entrepreneurship Program, Korea University",
    date: "2023-05-22",
  },
  {
    id: 6,
    title: "Digital Transformation & Lab to Market",
    venue: "Graduate School of Artificial Intelligence Seminar, POSTECH",
    date: "2021-11-26",
  },
  {
    id: 7,
    title: "AI X Entrepreneurship",
    venue: "Graduate School of Artificial Intelligence Seminar, POSTECH",
    date: "2020-11-20",
  },
  {
    id: 8,
    title:
      "Development of an entrepreneurial business process repository system",
    venue: "Spring Conference on Management Information Systems",
    date: "2019-05-24",
    note: "Nominated for Best Paper",
  },
  {
    id: 9,
    title:
      "Bibliometric study of international and domestic academic research on intellectual property",
    venue:
      "The 8th International Conference on Convergence Technology (ICCT2018)",
    date: "2018-07-04",
  },
  {
    id: 10,
    title: "Entrepreneurial talent @ CiTE: Lab to Market",
    venue:
      "Creative ICT Convergence Talent Forum, Ministry of Science and ICT",
    date: "2018-05-26",
  },
  {
    id: 11,
    title: "Customer Relationships, Channels, Revenue Streams",
    venue:
      "I-Corp Boot Camp, Ministry of Science, ICT and Future Planning",
    date: "2017-05-26",
  },
  {
    id: 12,
    title: "Entrepreneurship of the Convergence Era",
    venue:
      "K-ICT Future Talent Forum 2016, Ministry of Science, ICT and Future Planning",
    date: "2016-05-19",
  },
  {
    id: 13,
    title: "Creative Entrepreneurship in Action",
    venue: "Global Entrepreneurship Week (GEW2016)",
    date: "2016-11-14",
  },
  {
    id: 14,
    title: "Contextual Marketing & Location Intelligence",
    venue: "Devmento O2O Update Seminar",
    date: "2015-08-28",
  },
  {
    id: 15,
    title:
      "Kauffman PEV Entrepreneurship Education Program Case Presentation",
    venue:
      "Entrepreneurship Education Teacher Training, Ministry of Education",
    date: "2014-02-20",
  },
  {
    id: 16,
    title:
      "Correct Approach on Adding Criteria in the Analytic Hierarchy Process",
    venue: "12th International Symposium on the Analytic Hierarchy Process",
    date: "2013-06-23",
    location: "Malaysia",
  },
  {
    id: 17,
    title:
      "Investment Plan for Fair Logistics Improvement Through Simulation",
    venue: "Fall Conference of the Korea Management Science Association",
    date: "2009-10-30",
  },
  {
    id: 18,
    title:
      "Study on the Improvement of Distribution Channels in the Industrial Goods Market",
    venue:
      "10th Integrated Conference of Management-related Associations",
    date: "2008-08-20",
  },
  {
    id: 19,
    title:
      "Management Innovation, Next Step: A Change in the way of working",
    venue:
      "Fall Conference of the Korean Association of Business Management",
    date: "2007-11-09",
  },
  {
    id: 20,
    title: "A Study on the Success Factors of E-Commerce Between Companies",
    venue: "Spring Conference of the Corporate Management Association",
    date: "2007-05-04",
  },
  {
    id: 21,
    title:
      "Determinants of B2B EC Success: An Empirical Analysis and Case Study",
    venue: "Conference of the Society of Management Information System",
    date: "2006-11",
  },
  {
    id: 22,
    title:
      "A Strategic Analysis of B2B e-Commerce: The Economic Impact of e-Marketplace Adoption",
    venue:
      "6th International Conference on Computers, Communications and Systems (ICCCS 2005)",
    date: "2005-11",
  },
  {
    id: 23,
    title:
      "Model Modification in Structure Equation Model is Right? Mixture Model Says NO!",
    venue: "INFORMS Marketing Science Conference",
    date: "2003-06",
    location: "USA",
  },
  {
    id: 24,
    title:
      "Ship building and Steel Company Strategy for Promotion of Steel e-Collaboration",
    venue:
      "Spring Conference of the Korean Management Information Society",
    date: "2003-06-20",
  },
  {
    id: 25,
    title:
      "Economic Effect Analysis of the Introduction of E-Commerce Using Simulation Techniques",
    venue:
      "Fall Conference of the Korean Management Information Society",
    date: "2002-11-14",
    note: "Nominated for Best Paper",
  },
];

export const bookChapters: BookChapter[] = [
  {
    id: 1,
    title: "ESG 시대의 지속가능경영: 기업시민",
    publisher: "플랜비 디자인",
    year: 2023,
    description: "ESG Era Sustainable Management: Corporate Citizenship",
  },
  {
    id: 2,
    title: "세상을 바꾸는 기업가정신, 창업 실무",
    publisher: "중소벤처기업부, 창업진흥원",
    year: 2022,
    description:
      "Entrepreneurship Changing the World, Startup Practices (High School Textbook)",
  },
  {
    id: 3,
    title: "Value Creation University 최고의 가치창출대학으로",
    publisher: "포항공과대학교 출판부 (POSTECH Publishing)",
    year: 2017,
    description: "Value Creation University",
  },
];
