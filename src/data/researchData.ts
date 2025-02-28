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
    date: "Des 2024",
    event: "AI Research and Development Group (Bengkel Koding)",
    title: "VSA: Virtual Smart Assistant",
    authors: "Open for public.",
    summary:
      "Mental disorders among university students are an increasing issue, with more and more students experiencing depression. To address this issue, this research aims to develop a Virtual Smart Assistant (VSA), a personal assistant designed to accompany and assist students of Dian Nuswantoro University. VSA is equipped with the ability to detect emotions through facial recognition and emotion tracking, and is able to respond appropriately to students' emotional conditions through chatbot technology integrated with text-to-speech. With this system, VSA is expected to become a responsive and supportive virtual companion for students in facing academic and personal challenges.",
    image: "/images/research/vsa.png",
    links: [
      { type: "code", url: "https://github.com/BengkelKoding22" },
      { type: "video", url: "https://drive.google.com/file/d/1PvOtNctHdrPcrSiCYjoz9GzvMNhyDnIO/view?usp=drive_link" },
    ],
  },
  {
    date: "Nov 2024",
    event: "Dian Nuswantoro Research Center",
    title: "Optimizing Artificial Neural Network with Grid Search for Predicting Stunting Among Toddlers ",
    authors: "Open for public.",
    summary:
      "Stunting in children under five remains a critical global nutrition issue, reflecting chronic malnutrition during early growth stages and significantly impacting both physical and cognitive development into adulthood. This study explores the application of Artificial Neural Networks (ANN) for predicting stunting, emphasizing the role of hyperparameter normalization and optimization in enhancing model accuracy and reliability. Utilizing data from the 2023 Indonesian Demographic and Health Survey (IDHS), the dataset was balanced using SMOTE and normalized with MinMaxScaler to ensure robust model performance. Through GridSearchCV optimization, the ANN model achieved an accuracy of 81.9%, a recall of 88.1%, and an F1-score of 82.9%, outperforming other comparative models. These results highlight the effectiveness of ANNs in capturing complex non-linear relationships among stunting determinants, offering a strong foundation for refining policy interventions and accelerating efforts to reduce stunting in Central Java.",
    image: "/images/research/stunting.png",
    links: [{ type: "code", url: "https://drive.google.com/drive/folders/17KIkVrd1wioGTmOtg9EyfSJNonzYZSJg?usp=sharing" }],
  },
  {
    date: "Jul 2024",
    event: "AI Research and Development Group (Bengkel Koding)",
    title: "CLCM: Custom Lightweight CNN Model for low-end edge devices",
    authors: "Open for public.",
    summary:
      "Low-end edge devices such as the Jetson Nano are constrained by limited computing power, memory, and graphics processing capacity, posing challenges for running complex models efficiently. To overcome these limitations, lightweight and fast models are essential to ensure real-time performance without lag, enabling timely and accurate emotional responses for users. In this research, we introduce the Custom Lightweight CNN Model (CLCM), a CNN-based face recognition model optimized for speed and efficiency while maintaining high accuracy. The results demonstrate that CLCM outperforms well-known pre-trained models like ResNet50 and VGG16, achieving emotion recognition speeds three times faster, with an average real-time detection time of 13 ms. Additionally, the model maximizes GPU utilization on the Jetson Nano, reaching 90% efficiency through CUDA integration, further enhancing performance without compromising device limitations.",
    image: "/images/research/clcm.png",
    links: [
      { type: "code", url: "https://github.com/SieDeta/VSA-FaceR-FER" },
      { type: "video", url: "https://drive.google.com/file/d/1ICI2hbX4HN_E80Bsi7ZC_9u3pyiqUlua/view?usp=drive_link" },
    ],
  },
  {
    date: "Nov 2024",
    event: "Dian Nuswantoro Research Center",
    title: "Analyzing the Impact of Transpose Layers on CNN-Based Deep Learning",
    authors: "Not avaiable due to privacy concerns.",
    summary:
      "Effective road maintenance is important in transportation safety. In this paper, we presented a detailed evaluation of YOLOv5 and improved models of YOLOv8 with transpose layers on the road pothole detector. We make use of a dataset from Kaggle, which includes 2105 images of road potholes, to train and test these models, comparing their precision, recall, and F1 scores. Results also indicated that, with the addition of transpose layers, detection accuracy improves, with both YOLOv5 and YOLOv8 scoring higher F1 scores. In this respect, YOLOv5 with transpose layers recorded P = 77.7%, R = 83.8%, with an F1 score of 0.840, while YOLOv8 with transpose layers returned P = 85.9%, R = 56.0%, with an F1 score of 0.677. These results indicate that the best balance of precision and recall, in comparison with the YOLOv8 model, is obtained using YOLOv5 with transpose layers, which therefore turns it into the most effective model in detecting road potholes in different conditions. The current study has underlined that improved CNN models could have a potential application for real-time road maintenance, solving once and for all a reliable road pothole detection that would improve road safety.",
    image: "/images/research/transpose.png",
    links: [{ type: "code", url: "https://drive.google.com/drive/folders/1zexVPE-xtaJtyZsrq-FHd2DXnZHWRfyh?usp=sharing" }],
  },
  {
    date: "Des 2023",
    event: "Faculty of Computer Science, Dian Nuswantoro University",
    title: "Indonesia regional minimum wage prediction",
    authors: "Open for public.",
    summary:
      "The Regional Minimum Wage in Indonesia exhibits a consistent pattern of annual percentage increases. To analyze and predict these trends, I developed a system that leverages Minimum Wage data from over 60 regions across Indonesia, spanning from 1997 to 2022. This data is processed using the Seasonal Autoregressive Integrated Moving Average (SARIMA) algorithm, which generates accurate wage predictions for selected regions and years, along with projected variations in wage values. When the system's 2023 predictions were compared with official data from government websites across various regions, the results showed a minimal discrepancy of only 1% to 3% from the official figures, demonstrating the system's high level of accuracy.",
    image: "/images/research/umr.png",
    links: [{ type: "code", url: "https://github.com/SieDeta/prediksi_umr_indonesia" }],
  },
  {
    date: "Jul 2023",
    event: "CV Sanjaya Utama, Semarang",
    title: "APM: Automatic Promo Maker",
    authors: "Not avaiable due to privacy concerns.",
    summary:
      "Following the COVID-19 pandemic, CV Sanjaya Utama faced a significant revenue decline of up to 60%, primarily due to accumulated stock and low sales during the pandemic period. To address this issue, I collaborated with the company's finance department to develop an Automatic Promotion Generator System utilizing the Apriori algorithm. This system analyzes item pairings based on the past three years of sales data to identify frequently purchased item combinations. These insights are then leveraged to create targeted promotional offers aimed at reducing excess inventory and boosting overall company revenue.",
    image: "/images/research/apm.png",
    links: [{ type: "code", url: "https://github.com/SieDeta/cv-sanjaya-utama-apriori" }],
  },
];
