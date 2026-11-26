export interface Patent {
  year: string;
  status: string;
  title: string;
  assignee?: string;
  note?: string;
}

export const patentData: Patent[] = [
  {
    year: "2026",
    status: "Submitted",
    title:
      "System and Method for Temporal and Synergy-Aware Design of Dual-Payload Antibody-Drug Conjugates",
    assignee: "WellMatix",
  },
  {
    year: "2026",
    status: "Submitted",
    title:
      "System and Method for Mode-Adaptive, Constraint-First, Active-Learning Design of Antibody-Conjugate Candidates Across Multiple Conjugate Modalities",
    assignee: "WellMatix",
  },
  {
    year: "2026",
    status: "Submitted",
    title:
      "System and Method for End-to-End Antibody-Drug Conjugate Design via Reinforcement-Learning CDR Optimization, Multi-Head Composite Scoring with Rationale Generation, and Molecular Docking Reranking",
    assignee: "WellMatix",
  },
];
