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
        description: "Manuscript ready upon request.",
        links: [],
      },
      {
        title: "Analyzing the Impact of Transpose Layers on CNN-Based Deep Learning ",
        authors: "Maulidya Ayu Ardiena, Sie Deta Dirganjaya, Guruh Fajar Shidik",
        description: "Manuscript ready upon request. ",
        links: [],
      },
    ],
  },
];
