// Author lists verified against PubMed, dblp, techscience and dbpia, Nov 2026.
// Your own name is wrapped in <b></b> so it stands out in the list.
export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "IEEE Access (under review)",
    title:
      "Integrating Multi-Modal Data with LLM and RAG for Clinical Decision Support",
    // Not yet public, so fill in your co-authors here.
    authors: "<b>Kounen Fathima</b>, et al.",
    tldr: "A clinical decision support system on MIMIC-IV that grounds predictive model outputs in retrieved literature, with the generated recommendations evaluated for faithfulness against that evidence.",
  },
  {
    year: "2026",
    conference: "Journal of Medical Systems, 50(113)",
    title:
      "Recent Advances in AI for Automated ICD Coding: A Systematic Literature Review",
    authors:
      "Abdul Rehman Khalid, Haider Ali, <b>Kounen Fathima</b>, Kouayep Sonia Carole, Hee-Cheol Kim",
    paperUrl: "https://doi.org/10.1007/s10916-026-02429-7",
    tldr: "Haider Ali, Kounen Fathima, Kouayep Sonia Carole and Hee-Cheol Kim contributed equally to this work.",
  },
  {
    year: "2025",
    conference: "Computers, Materials & Continua, 84(3), pp. 5445–5462",
    title:
      "A Semantic Evaluation Framework for Medical Report Generation Using Large Language Models",
    authors:
      "Haider Ali, Rashadul Islam Sumon, Abdul Rehman Khalid, <b>Kounen Fathima</b>, Hee-Cheol Kim",
    paperUrl: "https://doi.org/10.32604/cmc.2025.065992",
  },
  {
    year: "2024",
    conference: "ICACT 2024, IEEE",
    title: "Multi-Class Document Classification using LayoutLMv1 and V2",
    authors: "<b>Kounen Fathima</b>, Ali Athar, Hee-Cheol Kim",
    paperUrl: "https://ieeexplore.ieee.org/document/10471992",
    tldr: "A web document classifier and text extractor built on fine-tuned LayoutLMv2.",
  },
  {
    year: "2024",
    conference: "KICS Spring Conference, Incheon",
    title:
      "Music Track Recommendation System with Content-Based Filtering Approach",
    authors:
      "Yee Mon Oo, <b>Kounen Fathima</b>, Ziallah Khan, Hee-Cheol Kim",
    paperUrl:
      "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12036616",
  },
  {
    year: "2023",
    conference: "iMETA 2023, IEEE, Tartu, Estonia",
    title:
      "Anxiety and Depression Detection and Rehabilitation in the Metaverse: A BERT-Based Recommendation System",
    authors:
      "Ali Athar, Md Ariful Islam Mozumder, <b>Kounen Fathima</b>, Ali Hussain, Sikandar Ali, Hee-Cheol Kim",
    paperUrl: "https://ieeexplore.ieee.org/document/10294837",
  },
  {
    year: "2023",
    conference:
      "Workshop on Artificial Intelligence and Applications, Busan, Korea",
    title: "Advancements in NLP Language Model",
    authors: "<b>Kounen Fathima</b>, Dayal Aakanksha, Hee-Cheol Kim",
    paperUrl:
      "https://www.researchgate.net/publication/376191626_Advancements_in_NLP_language_model",
  },
  {
    year: "2023",
    conference: "IFSA 2023, Daegu, Korea",
    title:
      "Basic Application and Methodologies used for Sentiment Analysis: A Survey",
    authors:
      "Dayal Aakanksha, <b>Kounen Fathima</b>, Ali Athar, Hee-Cheol Kim",
    paperUrl: "https://www.researchgate.net/publication/376191489",
  },
];