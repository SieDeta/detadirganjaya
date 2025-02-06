export interface AwardImage {
  src: string;
}

export interface Award {
  title: string;
  event: string;
  year: number;
  description: string;
  image: AwardImage[];
}

export const awards: Award[] = [
  {
    title: "UChicago-Indonesia System and AI Research Training Program (SYAIR)",
    event: "Garuda ACE (ACademic of Excellence)",
    year: 2024,
    description: "Selected as 1 of 50 students in Indonesia to participate in the UChicago - Indonesia research training program, focuses on enhancing students' research skills at the international level.",
    image: [{ src: "/images/awards/ace1.jpg" }, { src: "/images/awards/ace2.png" }],
  },
  {
    title: "Flagship Program Participant",
    event: "UDINUS Batch 2022 Flagship Program",
    year: 2023,
    description: "Participated in UDINUS's Batch 2022 Flagship Program, an acceleration program for high-achieving students.",
    image: [{ src: "/images/awards/flagship1.jpg" }, { src: "/images/awards/flagship2.jpg" }],
  },
];
