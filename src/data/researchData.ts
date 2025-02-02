export interface ResearchLink {
  type: "publication" | "citation" | "code" | "video";
  url: string;
}

export interface ResearchProject {
  date: string;
  event: string;
  title: string;
  authors: string;
  summary: string;
  image: string;
  links: ResearchLink[];
}

export const researchProjects: ResearchProject[] = [
  {
    date: "Jun 2024",
    event: "PLDI",
    title: "Diffy: Data-Driven Bug Finding for Configurations",
    authors: "Siva Kakarla, Francis Y. Yan, Ryan Beckett",
    summary:
      "This research focuses on Diffy, a data-driven bug finding system designed to improve configuration management. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero earum alias minus blanditiis nam reprehenderit aut iusto adipisci, sequi ipsum laboriosam accusantium iste ipsa nisi qui cum laudantium harum voluptate, recusandae accusamus quisquam natus cumque perspiciatis. Voluptates facilis aut, quas corporis perspiciatis cum nobis, quis facere dolores praesentium natus nemo sunt esse sint dicta sed distinctio dignissimos.",
    image: "/images/research/placeholder.jpeg",
    links: [
      { type: "publication", url: "https://link-to-publication.com" },
      { type: "citation", url: "https://citation-link.com" },
      { type: "code", url: "https://github.com/repository" },
      { type: "video", url: "https://video-link.com" },
    ],
  },
  {
    date: "Jun 2024",
    event: "PLDI",
    title: "Diffy: Data-Driven Bug Finding for Configurations",
    authors: "Siva Kakarla, Francis Y. Yan, Ryan Beckett",
    summary:
      "This research focuses on Diffy, a data-driven bug finding system designed to improve configuration management. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero earum alias minus blanditiis nam reprehenderit aut iusto adipisci, sequi ipsum laboriosam accusantium iste ipsa nisi qui cum laudantium harum voluptate, recusandae accusamus quisquam natus cumque perspiciatis. Voluptates facilis aut, quas corporis perspiciatis cum nobis, quis facere dolores praesentium natus nemo sunt esse sint dicta sed distinctio dignissimos.",
    image: "/images/research/placeholder.jpeg",
    links: [
      { type: "publication", url: "https://link-to-publication.com" },
      { type: "citation", url: "https://citation-link.com" },
      { type: "code", url: "https://github.com/repository" },
      { type: "video", url: "https://video-link.com" },
    ],
  },
];
