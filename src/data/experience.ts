export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
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
      "Sole architect of the biology AI stack: all design modules, backend APIs and computational pipelines, shipping 18+ production pipelines across molecular generation, protein engineering and therapeutic design. Antimicrobial peptide activity prediction from protein language model embeddings with structural similarity scoring, with top-ranked candidates taken to wet-lab testing. IL-15 mutein engineering through ESM-2 saturation scanning and Rosetta DDG rescoring, then multi-objective PPO balancing conflicting receptor-affinity and escape objectives. Antibody-drug conjugate pipelines spanning antibody and antigen engineering, epitope prediction, linker-payload pairing and RL-based linker generation tuned to protease cleavage sites. De novo small molecule generation, a binding affinity pipeline that fine-tunes protein language models to predict binding sites before automated docking and ranking, and a generative protein design pipeline driven by free-text prompts with a retrieval fallback for out-of-distribution inputs.",
  },
  {
    date: "2023—2025",
    title: "Graduate Research Assistant",
    company: "SC Lab, Inje University",
    description:
      "Built a multimodal clinical decision support system on MIMIC-IV, pairing XGBoost predictive models over HAIM embeddings with a retrieval pipeline over Neo4j and PubMed and a locally hosted LLM, evaluating the generated recommendations for faithfulness against the retrieved evidence. Also built DocDoc, a web document classifier on fine-tuned LayoutLMv2, and contributed to six further peer-reviewed publications across LLM evaluation for medical report generation, transformer-based clinical and behavioural models, automated ICD coding and NLP survey work.",
  },
];
