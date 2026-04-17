// Profile data for Professor Youngwoo Sohn - ATC-LAB

export interface ResearchSubItem {
  text: string;
}

export interface ResearchArea {
  title: string;
  items: ResearchSubItem[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface ResearchDomain {
  id: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  department: string;
  university: string;
  bio: string[];
  recruitmentText: string;
  researchAreas: ResearchArea[];
  contact: ContactInfo;
  portraitUrl: string;
  universityLogoUrl: string;
  externalLinks: ExternalLink[];
  researchDomains: ResearchDomain[];
}

export const profile: Profile = {
  name: "Youngwoo Sohn",
  title: "Assistant Professor",
  department: "Department of Future Science & Technology Business",
  university: "Korea University Graduate School",
  bio: [
    "I am an associate professor in the department of Future Science & Technology Business at Korea University Graduate School. My research areas include Commercialization for Advanced Technology, Research Methodology using Non-linear Datamining, Business Model Innovation, and Innovation Dynamics and its Applications.",
    "I received M.S. in Management Engineering from KAIST and Ph.D. in Business Administration from KUBS. I worked as a Research Fellow at Daewoo Economic Research Institute, LG CNS, and POSCO Research Institute from 1996 to 2012. Subsequently, I served at POSTECH in various roles including research associate professor and director of the I-Corps Program from 2012 to 2023, before joining Korea University.",
    "I am leading Advanced Technology Commercialization LAB (atCL) at Korea University.",
  ],
  recruitmentText: "I am actively looking for outstanding graduate and undergraduate students and postdoctoral researchers for the projects listed below. When you contact me, please include an up-to-date CV and what project(s) in our group you are interested in.",
  researchAreas: [
    {
      title: "Commercialization for Advanced Technology",
      items: [
        {
          text: "Laboratory to Market Strategy: AI(LLM/NPL), Quantum (Computing/Sensing/Comm.), Mobility(UAV/SDV), Bio & Healthcare(+Food) and Climate adaptation TECH",
        },
        {
          text: "Technology Acceptance Model for Deep technology, Cloud computing and ...",
        },
        {
          text: "Data-driven VC, Intellectual Property, Corporate Venturing, Startup Process Repository, Team Diversity, Social Capital, Innovative methodology",
        },
      ],
    },
    {
      title: "Research Methodology using Non-linear Datamining",
      items: [
        { text: "Venture Database Development and its Applications" },
        { text: "Machine learning or Hybrid research analysis" },
        {
          text: "Feature oriented Multiple Quantitative Factor Analysis for Startups",
        },
      ],
    },
    {
      title: "Business Model Innovation",
      items: [
        { text: "Business Model Conceptual Framework and Components" },
        {
          text: "Business Valuation Techniques for early-stage TECH Startup",
        },
        { text: "DT/DX and IT Business Solution, Platform Business" },
      ],
    },
    {
      title: "Innovation Dynamics and its Applications",
      items: [
        {
          text: "Open Innovation and Startup Eco System (N-Helix Model, ESG)",
        },
        { text: "System Dynamics Simulation, Complex Networks Analysis" },
        { text: "Open Innovation Dynamics to Individual AI" },
        {
          text: "Academia-Industry Collaboration, Information Literacy, Organic Business",
        },
      ],
    },
  ],
  contact: {
    address: "145 Anam-ro, Seongbuk-gu, Seoul 02841, South Korea",
    phone: "+82-2-3290-4422",
    email: "ywsohn@korea.ac.kr",
  },
  portraitUrl: "https://eliott331.github.io/ATC-LAB/YoungWoo%20Sohn.png",
  universityLogoUrl: "https://eliott331.github.io/ATC-LAB/Korea_University.png",
  externalLinks: [
    {
      label: "ResearchGate",
      url: "https://www.researchgate.net/profile/Youngwoo-Sohn",
    },
    {
      label: "Korea University Faculty",
      url: "http://ywsohn.korea.edu/",
    },
    {
      label: "atCL @ Venture Portal",
      url: "https://venture.korea.ac.kr/venture/intro/intro.do",
    },
  ],
  researchDomains: [
    { id: "ai", label: "AI" },
    { id: "quantum", label: "Quantum" },
    { id: "mobility", label: "Mobility" },
    { id: "bio-healthcare", label: "Bio & Healthcare" },
    { id: "climate-tech", label: "Climate TECH" },
  ],
};
