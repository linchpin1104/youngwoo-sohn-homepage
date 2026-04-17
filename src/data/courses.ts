// Courses and teaching data for Professor Youngwoo Sohn - ATC-LAB

export interface KoreaUnivCourse {
  code: string;
  title: string;
  semester: string;
  year: number;
  active: boolean;
}

export interface PostechCourse {
  code: string;
  title: string;
  category: string;
}

export interface ExternalProgram {
  name: string;
  organization: string;
  description: string;
}

export const koreaUnivCourses: KoreaUnivCourse[] = [
  {
    code: "VEN704",
    title: "BUSINESS MODELING",
    semester: "Fall",
    year: 2024,
    active: true,
  },
  {
    code: "VEN702",
    title: "FUTURE TECHNOLOGY ENTREPRENEURIAL BUSINESS INSIGHT: Business AI",
    semester: "Spring",
    year: 2024,
    active: true,
  },
  {
    code: "PHY884",
    title: "Quantum Tech Startup",
    semester: "Spring",
    year: 2024,
    active: true,
  },
  {
    code: "VEN801",
    title: "DOCTORAL RESEARCH SEMINAR ON ENTREPRENEURSHIP",
    semester: "Spring, Fall",
    year: 2024,
    active: true,
  },
];

export const postechCourses: PostechCourse[] = [
  {
    code: "AIGS570",
    title: "AI Tech Startup",
    category: "AI Graduate School",
  },
  {
    code: "AIGS571",
    title: "Business AI",
    category: "AI Graduate School",
  },
  {
    code: "AIGS572",
    title: "AIX Solution Studio",
    category: "AI Graduate School",
  },
  {
    code: "IMEN411",
    title: "Entrepreneurship",
    category: "Industrial & Management Engineering",
  },
  {
    code: "CMEF499",
    title: "Future Entrepreneurship & Corporate Citizenship",
    category: "Convergence / Corporate Citizenship",
  },
  {
    code: "CITE306",
    title: "Business Model Studio",
    category: "Convergence IT Engineering",
  },
  {
    code: "CITE700J",
    title: "Social Impact Solution Studio",
    category: "Convergence IT Engineering",
  },
  {
    code: "ENTP451A",
    title: "Emerging Industry A: Tech. Startup",
    category: "Entrepreneurship",
  },
  {
    code: "ENTP451B",
    title: "Emerging Industry B: Service Startup",
    category: "Entrepreneurship",
  },
];

export const externalPrograms: ExternalProgram[] = [
  {
    name: "I-Corps Program",
    organization: "Ministry of Science and ICT",
    description:
      "Boot Camp Training, Customer Discovery, Mentoring, Instructor training course",
  },
  {
    name: "K-PEV (Planning the Entrepreneurial Venture, 벤처를 기획하다)",
    organization: "KOEF Kauffman Foundation",
    description: "Kauffman Foundation Entrepreneurship Education Program",
  },
  {
    name: "Startup Incubating School",
    organization: "POSCO Group University",
    description: "Startup Incubating School, Future entrepreneur training course",
  },
  {
    name: "Green Society Climate Tech Commercialization",
    organization: "CMK Foundation Green Society",
    description: "Climate Tech Commercialization Program",
  },
  {
    name: "Seoul Quantum Technical Entrepreneurship Program",
    organization: "Quantum Technology Support Center",
    description: "Seoul Quantum Technical Entrepreneurship Program (forthcoming)",
  },
];
