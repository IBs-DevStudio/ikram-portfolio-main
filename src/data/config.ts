const config = {
  title: "Ikram | Full Stack AI Developer",
  description: {
    long: "Turning complex AI into clean, usable products. Full-stack dev who bridges the gap between cutting-edge models and real user experiences.",
    short: "Full-stack developer building the next wave of AI-native SaaS.",
  },
  keywords: [
    "Next.js",
    "AI",
    "ML",
    "LangChain",
    "RAG",
    "Full Stack",
    "React",
    "TypeScript",
    "Vapi",
    "Pinecone",
  ],
  author: "Ikram Banadar",
  email: "ikrambanadar04@email.com",
  site: "https://ikrambagban.me",

  // for github stars button
  githubUsername: "IBs-DevStudio",
  githubRepo: "ikram-portfolio-Site",

  get ogImg() {
    return this.site + "/assets/seo/intro-port.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/ikrambanadarwebdev/",
    instagram: "https://www.instagram.com/ikram_71011",
    facebook: "",
    github: "https://github.com/IBs-DevStudio",
  },
};
export { config };
