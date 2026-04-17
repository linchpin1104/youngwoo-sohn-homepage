// Events data for Professor Youngwoo Sohn - ATC-LAB

export interface LabEvent {
  id: number;
  title: string;
  date: string;
  imageSrc: string;
  description?: string;
}

// Images are hosted on the original GitHub Pages site — referenced directly to
// keep this repo lightweight. Next.js `images.unoptimized` + <img> tags handle
// remote URLs without domain allowlisting.
const SRC = "https://eliott331.github.io/ATC-LAB/img";

export const events: LabEvent[] = [
  {
    id: 1,
    title: "SusHi Tech TOKYO 2024",
    date: "2024",
    imageSrc: `${SRC}/SusHi Tech TOKYO 2024.jpeg`,
  },
  {
    id: 2,
    title: "Startup Japan EXPO 2024",
    date: "2024",
    imageSrc: `${SRC}/Startup Japan EXPO 2024.jpeg`,
  },
  {
    id: 3,
    title: "Wrtn Generative AI Ideathon",
    date: "2024-05-17",
    imageSrc: `${SRC}/Wrtn Generative AI Ideathon(2024.5.17).jpeg`,
  },
  {
    id: 4,
    title: "SKERIC-KTH WP3 Meeting",
    date: "2024-05-13",
    imageSrc: `${SRC}/SKERIC-KTH WP3 Meeting(2024.5.13).jpeg`,
  },
  {
    id: 5,
    title: "Business Modeling Class",
    date: "2024-05-11",
    imageSrc: `${SRC}/Business Modeling Class (2024.5.11).jpeg`,
  },
  {
    id: 6,
    title: "벤처창업연구세미나",
    date: "2024-05-10",
    imageSrc: `${SRC}/벤처창업연구세미나(2024.5.10).jpeg`,
    description: "Venture Startup Research Seminar",
  },
  {
    id: 7,
    title: "Green Society Meetup Day",
    date: "2024-03-28",
    imageSrc: `${SRC}/Green Society Meetup Day(2024.3.28).jpeg`,
  },
  {
    id: 8,
    title: "AI_TECH_DAY_2023",
    date: "2023",
    imageSrc: `${SRC}/AI_TECH_DAY_2023.png`,
  },
];
