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
    title: "Flagship Program Participant",
    event: "UDINUS Batch 2022 Flagship Program",
    year: 2023,
    description:
      "Participated in UDINUS's Batch 2022 Flagship Program, an acceleration program for high-achieving students.",
    image: [
      { src: "/images/awards/placeholder.jpeg" },
      { src: "/images/awards/placeholder.jpeg" },
    ],
  },
  {
    title: "Garuda ACE Program",
    event: "Garuda ACE (ACademic of Excellence)",
    year: 2024,
    description:
      "Selected as a participant in the Garuda ACE program, focusing on advanced technology skills.",
    image: [
      { src: "/images/awards/placeholder.jpeg" },
      { src: "/images/awards/placeholder.jpeg" },
    ],
  },
];
