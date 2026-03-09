export const siteConfig = {
  name: "devops-engineering",
  creator: "@NotHarshhaa",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://devops-engineering.xyz",
  ogImage: "https://devops-engineering.xyz/opengraph-image.png",
  description:
    "Welcome to my DevOps Engineering Playground — a personal space dedicated to learning, experimenting, and evolving as a DevOps engineer.",
  keywords: [
    "DevOps",
    "CI/CD",
    "Cloud Native",
    "Automation",
    "Infrastructure as Code",
    "Containerization",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  links: {
    portfolio: "https://bytexllc.vercel.app",
    github: "",
  },
};

export type SiteConfig = typeof siteConfig;
