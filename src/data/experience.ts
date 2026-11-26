export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string; // lead-in paragraph, optional
  bullets?: string[]; // bullet list under the lead-in, optional. Basic HTML allowed.
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025—2026",
    title: "AI Developer",
    company: "WellMatix",
    companyUrl: "https://well-matix.com/",
    description:
      "Sole architect of the biology AI stack: all design modules, backend APIs and computational pipelines, shipping 18+ production pipelines across molecular generation, protein engineering and therapeutic design.",
    bullets: [
      "<b>Peptide engineering.</b> Antimicrobial peptide activity prediction from protein language model embeddings with structural similarity scoring. Top-ranked candidates were taken forward to wet-lab testing.",
      "<b>IL-15 mutein engineering.</b> A three-stage pipeline using ESM-2 saturation scanning and Rosetta DDG rescoring, then multi-objective PPO to balance conflicting receptor-affinity and escape objectives.",
      "<b>Antibody-drug conjugates.</b> End-to-end pipelines spanning antibody and antigen engineering, epitope prediction, linker-payload pairing, and RL-based linker generation tuned to protease cleavage sites and conjugation chemistry.",
      "<b>Small molecule generation.</b> De novo generation via reinforcement learning, with a binding affinity pipeline that fine-tunes protein language models to predict binding sites before automated docking and ranking.",
      "<b>Text2Prot.</b> A generative protein design pipeline driven by free-text prompts, combining language model embeddings and diffusion, with a retrieval fallback for out-of-distribution inputs.",
      "<b>Deployment.</b> All FastAPI endpoints putting each pipeline into production, plus a retrieval-augmented insight engine placing simulation outputs against published evidence.",
    ],
  },
  {
    date: "2023—2025",
    title: "Graduate Research Assistant",
    company: "SC Lab, Inje University",
    bullets: [
      "Built a multimodal clinical decision support system on MIMIC-IV, pairing XGBoost predictive models over HAIM embeddings with a retrieval pipeline over Neo4j and PubMed and a locally hosted LLM, evaluating the generated recommendations for faithfulness against the retrieved evidence.",
      "Built DocDoc, a web document classifier and text extractor on fine-tuned LayoutLMv2, published at ICACT 2024.",
      "Contributed to six further peer-reviewed publications across LLM evaluation for medical report generation, transformer-based clinical and behavioural models, automated ICD coding and NLP survey work.",
    ],
  },
];
