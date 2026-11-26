export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Kounen Fathima",
  title: "M.Eng, AI in Healthcare",
  institution: "Inje University",
  institutionUrl: "https://www.inje.ac.kr/eng/",
  description:
    "I work on generative and predictive modelling for biological design: protein engineering, therapeutic conjugates and peptides. My interest is in design problems where objectives conflict and experimental validation is expensive.<br/><br/>Most recently I was the sole AI developer at a therapeutics startup, where I built design pipelines end to end, from structure and binding prediction through reinforcement-learning-guided generation to candidates taken forward for testing. The questions that stayed with me sit between a model's output and an experiment worth running: which candidates to prioritise, how to estimate uncertainty honestly, and how experimental results should revise the model that produced them. My work has been entirely computational.<br/><br/>I am based in Hyderabad, India, and applying to research PhD programmes for Fall 2027.",
  email: "kounenfathima00@gmail.com",
  // PHOTO: put your image at public/images/profile.jpg, then uncomment the next line.
  // A portrait crop works best; the layout uses a 3:4 frame.
  imageUrl: "/images/profile.jpg",
  //
  // CV: put your PDF at public/cv.pdf, then uncomment the next line.
  // cvUrl: "/cv.pdf",
  //
  // GITHUB: replace with your username once your repos are public.
  // githubUsername: "your-username",
  linkedinUsername: "kounen-fathima",
  // googleScholarUrl: "",
};
