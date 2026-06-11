export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "q.Beyond AG",
    position: "Fachinformatiker Anwendungsentwicklung",
    startDate: "Jan 2025",
    endDate: "Jun 2026",
    location: "Hamburg",

    highlights: [
      "Entwicklung und Weiterentwicklung von Backend-Anwendungen mit Java und Spring Boot",
      "Konzeption und Implementierung von REST APIs",
      "Automatisierung von Geschäftsprozessen zur Effizienzsteigerung",
      "Mitentwicklung eines modernen Webtools auf Basis von PHP (Symfony) zur Ablösung eines Legacy-Systems (20 Jahre alt)"
    ],

    technologies: [
      "Java - Spring Boot",
      "PHP - Symfony",
      "Automic Automation",
      "HTML, CSS, Javascript"
    ]
  },

  {
    id: 2,
    company: "q.Beyond AG",
    position: "Auszubildender Fachinformatiker Anwendungsentwicklung",
    startDate: "Sep 2022",
    endDate: "Jan 2025",
    location: "Hamburg",

    highlights: [
      "Entwicklung von Softwarelösungen mit Java",
      "Umsetzung einer REST API mit Spring Boot im Rahmen des Abschlussprojekts",
      "Mitarbeit an Automatisierungslösungen"
    ],

    technologies: [
      "Java - Spring Boot",
      "Automic Automation"
    ]
  },
  {
    id: 3,
    company: "Diverse Arbeitgeber",
    position: "Tätigkeiten im Einzelhandel und Lager",
    startDate: "Jan 2020",
    endDate: "Sep 2022",
    location: "Buxtehude",

    highlights: [
    ],

    technologies: [
    ]
  }
];