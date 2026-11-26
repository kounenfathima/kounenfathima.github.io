// Add or remove entries freely. Newest first.
export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "July 2026",
    title: "Review published in Journal of Medical Systems",
    description:
      "Our systematic literature review on AI for automated ICD coding is out in Journal of Medical Systems.",
    link: "https://doi.org/10.1007/s10916-026-02429-7",
  },
  {
    date: "2026",
    title: "Three patent applications submitted",
    description:
      "Named inventor on three applications covering antibody-drug conjugate design, filed by WellMatix.",
  },
  {
    date: "February 2025",
    title: "Graduated with the NIIED Academic Excellence Award",
    description:
      "Completed the M.Eng at Inje University and received the Academic Excellence Award, selected among GKS graduating scholars nationwide.",
  },
];
