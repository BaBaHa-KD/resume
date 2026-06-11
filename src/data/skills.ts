export interface SkillCategory {
  id: number;
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Programming Languages",
    skills: [
      "Java",
      "PHP",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL"
    ]
  },

  {
    id: 2,
    category: "Frontend",
    skills: [
      "React",
      "Twig",
      "Bootstrap",
      "HTML",
      "CSS"
    ]
  },

  {
    id: 3,
    category: "Backend",
    skills: [
      "Spring Boot",
      "Symfony",
      "Node.js",
      "Next.js"
    ]
  },

  {
    id: 4,
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle"
    ]
  },

  {
    id: 5,
    category: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Kubernetes",
      "GitHub"
    ]
  },

  {
    id: 6,
    category: "Languages",
    skills: [
      "Deutsch (Muttersprache)",
      "Englisch"
    ]
  }
];