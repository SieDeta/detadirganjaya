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
    year: "Coming Soon",
    publication: [
      {
        title: "Metaheuristic-Based Hyperparameter Tuning for Projective Transformation Rectification Networks in Medical Image Processing",
        authors: "Sie Deta Dirganjaya, Guruh Fajar Shidik, Radhitya Marendratama, Chandra Lukita Buana, Aisyah Nuraini, Edi Jaya Kusuma",
        description: "IEEE Access. [Drafting manuscript]",
        links: [
          { type: "publication", url: "" },
          { type: "citation", url: "" },
        ],
      },
      {
        title: "Analyzing the Impact of Transpose Layers on CNN-Based Deep Learning ",
        authors: "Maulidya Ayu Ardiena, Sie Deta Dirganjaya, Guruh Fajar Shidik",
        description: "Proceedings of the IEEE. [Ready for submission]",
        links: [
          { type: "publication", url: "https://drive.google.com/file/d/1RynWUQoDjXBXA3-vM47RuVCNj9_V4oyp/view?usp=drive_link" },
          { type: "citation", url: "" },
        ],
      },
    ],
  },
];
