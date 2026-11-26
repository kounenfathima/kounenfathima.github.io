export enum Section {
  Education = "education",
  Experience = "experience",
  Portfolio = "portfolio",
  Publication = "publication",
  Patent = "patent",
  News = "news",
}

// Reorder these lines to reorder the sections on the page.
export const sectionOrder = [
  Section.News,
  Section.Education,
  Section.Experience,
  Section.Publication,
  Section.Patent,
  Section.Portfolio,
];
