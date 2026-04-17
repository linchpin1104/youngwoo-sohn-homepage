// Projects data for Professor Youngwoo Sohn - ATC-LAB

export interface Project {
  id: number;
  title: string;
  titleEn?: string;
  funder: string;
  yearStart: number;
  yearEnd?: number | "ongoing";
  role?: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "과학기술사업화진흥원(과기부), 지역과학기술성과 실용화지원사업",
    titleEn: "Regional Science & Technology Commercialization Support",
    funder: "Ministry of Science and Technology",
    yearStart: 2023,
    yearEnd: "ongoing",
  },
  {
    id: 2,
    title: "한국연구재단(교육부), 창업교육혁신 선도대학(SCOUT)",
    titleEn: "Leading Universities for Startup Education Innovation (SCOUT)",
    funder: "National Research Foundation / Ministry of Education",
    yearStart: 2023,
    yearEnd: "ongoing",
  },
  {
    id: 3,
    title:
      "한국연구재단(과기부), 공공기술기반 시장연계 창업탐색지원사업 한국형 I-Corps",
    titleEn: "Korean I-Corps Program",
    funder: "National Research Foundation / Ministry of Science and Technology",
    yearStart: 2016,
    yearEnd: 2023,
    role: "Instructor",
  },
  {
    id: 4,
    title:
      "한국산업기술평가관리원(산업부), 디지털트윈 및 지능형 레일 로봇 개발",
    titleEn:
      "Digital Twin and Intelligent Rail Robot Development - BI Vehicle Movement Monitoring Platform",
    funder: "Korea Institute for Industrial Technology Evaluation",
    yearStart: 2021,
    yearEnd: 2023,
  },
  {
    id: 5,
    title: "연구개발특구진흥재단(과기부), 이노폴리스캠퍼스사업",
    titleEn: "Innopolis Campus Project - Preliminary Entrepreneur Training",
    funder: "Research and Development Special Zone Promotion Foundation",
    yearStart: 2020,
    yearEnd: "ongoing",
  },
  {
    id: 6,
    title: "정보통신기획평가원(과기부), ICT 혁신인재 4.0 사업",
    titleEn:
      "ICT Innovative Talent 4.0 Project - Industry-Academic Enterprise Development & Commercialization Education",
    funder: "Institute for Information & Communications Technology Planning & Evaluation (IITP)",
    yearStart: 2020,
    yearEnd: 2024,
  },
  {
    id: 7,
    title:
      "정보통신기획평가원(과기부), IT 명품인재양성사업 POSTECH-SUNY korea",
    titleEn:
      "Premium IT Talent Development POSTECH-SUNY Korea - Business Planning & Performance Presentation",
    funder: "Institute for Information & Communications Technology Planning & Evaluation (IITP)",
    yearStart: 2012,
    yearEnd: 2020,
  },
  {
    id: 8,
    title: "한국연구재단, 공공기술기반 시장연계 창업탐색 지원사업",
    titleEn: "Public Technology-Based Market-Linked Startup Exploration Support - POSTECH Node",
    funder: "National Research Foundation",
    yearStart: 2019,
    yearEnd: 2020,
    role: "Innovation Director",
  },
  {
    id: 9,
    title: "POSCO 융합기술위원회, 지곡벤처벨리 기반 Open Innovation 구축",
    titleEn:
      "Open Innovation Construction based on Jigok Venture Valley",
    funder: "POSCO Convergence Technology Committee",
    yearStart: 2019,
    yearEnd: "ongoing",
  },
  {
    id: 10,
    title: "POSCO, Smart Factory 구현을 위한 IoT 기반 솔루션",
    titleEn: "IoT-Based Solutions for Smart Factory Implementation",
    funder: "POSCO",
    yearStart: 2019,
  },
  {
    id: 11,
    title:
      "중소기업부, 근거리 무선통신 및 스마트폰을 이용한 ICT 연동형 생산관리 시스템",
    titleEn:
      "ICT-Linked Production Management System using Short-Range Wireless and Smartphones",
    funder: "Ministry of SMEs and Startups",
    yearStart: 2017,
    yearEnd: 2018,
  },
  {
    id: 12,
    title: "POSCO, 포스코의 인공지능(AI) 적용을 위한 가이드라인 개발",
    titleEn: "AI Application Guidelines Development for POSCO",
    funder: "POSCO",
    yearStart: 2016,
  },
  {
    id: 13,
    title:
      "POSCO, POSCO 기술기반 솔루션 마케팅을 위한 PSS개발연구",
    titleEn:
      "Product-Service System Development for POSCO Technology Marketing",
    funder: "POSCO",
    yearStart: 2014,
    yearEnd: 2015,
  },
  {
    id: 14,
    title: "POSCO ICT, BIG DATA 선행과제 분석모델 및 알고리즘 지원",
    titleEn: "Big Data Analysis Model & Algorithm Support",
    funder: "POSCO ICT",
    yearStart: 2013,
  },
  {
    id: 15,
    title: "POSCO, POSCO War Game 모델 개발 및 Workshop",
    titleEn: "POSCO War Game Model Development & Workshop",
    funder: "POSCO",
    yearStart: 2012,
  },
];
