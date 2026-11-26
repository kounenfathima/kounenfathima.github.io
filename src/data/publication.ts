// NOTE: the `authors` field needs your real co-author lists. I did not have them,
// so co-authored papers are marked TODO below and the author position from your CV
// is noted in a comment on each entry. Replace the TODO strings before you publish,
// and wrap your own name in <b>...</b> if you want it emphasised.
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
    // 1st author
    year: "2026",
    conference: "IEEE Access (under review)",
    title:
      "Integrating Multi-Modal Data with LLM and RAG for Clinical Decision Support",
    authors: "<b>Kounen Fathima</b>, et al.",
    tldr: "A clinical decision support system on MIMIC-IV that grounds predictive model outputs in retrieved literature, with the generated recommendations evaluated for faithfulness against that evidence.",
  },
  {
    // 3rd author
    year: "2026",
    conference: "Journal of Medical Systems, Vol. 50, Article 113",
    title:
      "Recent Advances in AI for Automated ICD Coding: A Systematic Literature Review",
    authors: "TODO: full author list, Kounen Fathima is 3rd author",
    paperUrl: "https://doi.org/10.1007/s10916-026-02429-7",
  },
  {
    // 4th author
    year: "2025",
    conference: "Computers, Materials & Continua, Vol. 84(3), pp. 5445–5462",
    title:
      "A Semantic Evaluation Framework for Medical Report Generation Using Large Language Models",
    authors: "TODO: full author list, Kounen Fathima is 4th author",
    paperUrl:
      "https://www.sciencedirect.com/org/science/article/pii/S1546221825006915",
  },
  {
    // 1st author
    year: "2024",
    conference: "ICACT 2024, IEEE",
    title: "Multi-Class Document Classification using LayoutLMv1 and V2",
    authors: "<b>Kounen Fathima</b>, et al.",
    paperUrl: "https://ieeexplore.ieee.org/document/10471992",
    tldr: "A web document classifier and text extractor built on fine-tuned LayoutLMv2.",
  },
  {
    // 2nd author
    year: "2024",
    conference: "KICS Spring Conference, Incheon",
    title:
      "Music Track Recommendation System with Content-Based Filtering Approach",
    authors: "TODO: full author list, Kounen Fathima is 2nd author",
    paperUrl:
      "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE12036616",
  },
  {
    // 3rd author
    year: "2023",
    conference: "iMETA 2023, IEEE",
    title:
      "Anxiety and Depression Detection and Rehabilitation in the Metaverse: A BERT-Based Recommendation System",
    authors: "TODO: full author list, Kounen Fathima is 3rd author",
    paperUrl: "https://ieeexplore.ieee.org/document/10294837",
  },
  {
    // 1st author
    year: "2023",
    conference:
      "Workshop on Artificial Intelligence and Applications, Busan, Korea",
    title: "Advancements in NLP Language Model",
    authors: "<b>Kounen Fathima</b>, et al.",
    paperUrl:
      "https://www.researchgate.net/publication/376191626_Advancements_in_NLP_language_model",
  },
  {
    // 2nd author
    year: "2023",
    conference: "IFSA 2023, Daegu, Korea",
    title:
      "Basic Application and Methodologies used for Sentiment Analysis: A Survey",
    authors: "TODO: full author list, Kounen Fathima is 2nd author",
    paperUrl: "https://www.researchgate.net/publication/376191489",
  },
];
