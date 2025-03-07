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
    title: "[UChicago](https://www.uchicago.edu/)-Indonesia System and AI Research Training Program (SYAIR)",
    event: "Garuda ACE (ACademic of Excellence)",
    year: 2024,
    description: "Selected as one of the top 50 Indonesia students in computer science and related fields for an international research training program led by Prof. Haryadi Gunawi of University of Chicago.",
    image: [{ src: "/images/awards/ace1.jpg" }, { src: "/images/awards/ace2.png" }],
  },
  {
    title: "Flagship Program Student of Department of Computer Science Year 202",
    event: "UDINUS Batch 2022 Flagship Program",
    year: 2023,
    description: " Selected as one of the top 50 out of 1855 computer science students in Dian Nuswantoro University Batch 2022 Flagship Program, an acceleration program for high-achieving students.",
    image: [{ src: "/images/awards/flagship1.jpg" }, { src: "/images/awards/flagship2.jpg" }],
  },
];
