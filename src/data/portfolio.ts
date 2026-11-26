export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "constrained-protein-design",
    description:
      "Multi-objective design reports Pareto fronts, but some properties are gates rather than preferences. Do standard methods actually return designs that pass them? Benchmarked on ddPCA data, where folding and binding free energies are measured separately.",
    technologies: ["Python", "PyTorch", "ESM-2"],
    // codeUrl: "https://github.com/your-username/constrained-protein-design",
  },
  {
    title: "amp-under-shift",
    description:
      "Homology-controlled splits are standard in antimicrobial peptide benchmarking, and they break the exchangeability that calibrated uncertainty depends on. How badly, and what fixes it?",
    technologies: ["Python", "scikit-learn", "Conformal prediction"],
    // codeUrl: "https://github.com/your-username/amp-under-shift",
  },
];
