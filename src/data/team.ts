// Team data for Professor Youngwoo Sohn - ATC-LAB

export interface Student {
  name: string;
  year: number;
  department: string;
}

export interface Alumnus {
  name: string;
  year?: number;
  department?: string;
  currentPosition?: string;
}

export interface Collaboration {
  organization: string;
  description?: string;
}

export const phdStudents: Student[] = [
  // Dept. of Future Science & Technology Business
  {
    name: "SHIN YOUCHUL",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "OH JAEYOUN",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Kong Do-An",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "BAN MOONJIN",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "CHO YEONHWA",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Lee YOUNG-GEUN",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "LEE ON",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "SEO Jae Yong",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "RYU MIN SIK",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "HONG SOONYEOB",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  // Program in Science & Technology Studies
  {
    name: "Kim Tae-Yong",
    year: 2023,
    department: "Program in Science & Technology Studies",
  },
];

export const msStudents: Student[] = [
  // Dept. of Future Science & Technology Business
  {
    name: "Kwun Sunchel",
    year: 2023,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "KIM Yanggwi",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Seo Jinuk",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "LEE WONJAE",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Lee Jae-Hong",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Lee Hyungju",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "KANG jihyun",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Na Yunhwan",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  {
    name: "Han Seung-Yeol",
    year: 2024,
    department: "Department of Future Science & Technology Business",
  },
  // Program in Science & Technology Studies
  {
    name: "Sa Seung-Hoon",
    year: 2024,
    department: "Program in Science & Technology Studies",
  },
];

export const alumni: Alumnus[] = [];

export const collaborations: Collaboration[] = [
  {
    organization: "School of Convergence Science and Technology @POSTECH",
  },
  {
    organization: "School of Quantum @ Korea University",
  },
  {
    organization: "Digital HUSS @ College of Liberal Art, Korea University",
  },
  {
    organization: "Smart LAB, Dept. of Big Data Analytics @ Kyunghee Univ.",
  },
  {
    organization: "Green Society Program @ HD Moter CMK Foundation",
  },
  {
    organization: "Startup Incubating School @POSCO Group University",
  },
  {
    organization: "AI Research Society @KMIS",
  },
  {
    organization:
      "Journal of Open Innovation: Technology, Market, and Complexity @SOI",
  },
  {
    organization:
      "Journal of the Korean Society of Industry Convergence @KSIC",
  },
  {
    organization:
      "Korea Academy of SME and Startup Policy, Academy of Entrepreneurship",
  },
];
