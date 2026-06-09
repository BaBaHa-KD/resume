export interface Project {
    title: string;
    description: string[];
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        title: "Webtool zur Ablösung eines Legacy-Systems",
        description: [
            "Umsetzung von Features wie Dashboards, Monitoring und Datenmanipulation.",  "Verbesserung von Benutzerfreundlichkeit und Wartbarkeit gegenüber dem Altsystem",],
        techStack: [
            "PHP",
            "Symfony",
            "Twig",
        ],
        
    },
    {
        title: "REST API zur Automatisierung von Systemprozessen",
        description: [
            "Automatisierung wiederkehrender Prozesse zur Effizienzsteigerung.", "Fokus auf saubere API-Struktur und Wartbarkeit", ],
        techStack: [
            "Java",
            "Spring Boot",
            "Automic Automation",
        ],
    },
    {
        title: "Buchungssystem für Sportanlagen",
        description: [
            "Backend-Logik zur Verwaltung von Buchungen und Nutzern.", ],
        techStack: [
            "Next.JS",
            "TypeScript",
            "PostgreSQL",
            "Vercel",
            "Supabase",
        ],
        githubUrl:
            "https://github.com/BaBaHa-KD/booking-vsv",
    },
    {
        title: "Digitaler Lebenslauf",
        description: [
            "Personal portfolio website built with React, TypeScript and React-Bootstrap.", ],
        techStack: [
            "React",
            "TypeScript",
            "React-Bootstrap",
            "GitHub Pages",
        ],
        githubUrl:
            "https://github.com/yourusername/portfolio",
    },

    
];