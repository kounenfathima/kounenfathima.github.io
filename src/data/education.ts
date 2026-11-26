export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2023—2025",
    institution: "Inje University",
    degree:
      "M.Eng in AI in Healthcare, Department of Digital Anti-Aging Health Care. GPA 4.45/4.5.",
    thesis:
      "Integrating Multi-Modal Data with LLM and RAG for Clinical Decision Support",
  },
  {
    year: "2017—2021",
    institution: "Osmania University",
    degree: "B.E in Information Technology. First Class with Distinction.",
  },
];
