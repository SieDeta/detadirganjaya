export interface PublicationLink {
  type: "publication" | "citation";
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  description: string;
  links: PublicationLink[];
}

export interface PublicationYear {
  year: string;
  publication: Publication[];
}

export const publications: PublicationYear[] = [
  {
    year: "2024",
    publication: [
      {
        title: "Publication 1",
        authors: "Author A, Author B",
        description: "Description of publication 1",
        links: [
          { type: "publication", url: "https://link-to-publication.com" },
          { type: "citation", url: "https://citation-link.com" },
        ],
      },
      {
        title: "Publication 2",
        authors: "Author C, Author D",
        description: "Description of publication 2",
        links: [
          { type: "publication", url: "https://link-to-publication.com" },
          { type: "citation", url: "https://citation-link.com" },
        ],
      },
    ],
  },
  {
    year: "2023",
    publication: [
      {
        title: "Publication 1",
        authors: "Author A, Author B",
        description: "Description of publication 1",
        links: [
          { type: "publication", url: "https://link-to-publication.com" },
          { type: "citation", url: "https://citation-link.com" },
        ],
      },
      {
        title: "Publication 2",
        authors: "Author C, Author D",
        description: "Description of publication 2",
        links: [
          { type: "publication", url: "https://link-to-publication.com" },
          { type: "citation", url: "https://citation-link.com" },
        ],
      },
    ],
  },
];
