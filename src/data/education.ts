export interface Education {
  id: number;
  school: string;
  degree: string;
  graduationDate: string;
  location: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    id: 1,
    school: "Berufliche Schule ITECH WIlhelmsburg",
    degree: "Fachinformatiker Anwendungsentwicklung",
    graduationDate: "Jan 2025",
    location: "Hamburg",

    achievements: [
      "Ausbildung mit Fokus auf Softwareentwicklung, objektorientierte Programmierung und Datenbanken. "
    ]
  },
  {
    id: 2,
    school: "BBS3 Stade",
    degree: "Fachhochschulreife",
    graduationDate: "Aug 2020",
    location: "Stade",

    achievements: [
      "Fachhochschulreife im Bereich Technik/Informatik"
    ]
  },
  {
    id: 3,
    school: "Realschule Süd Buxtehude",
    degree: "Erweiterter Sekundarabschluss I",
    graduationDate: "Aug 2018",
    location: "Buxtehude",

    achievements: [
      "Erweiterter Sekundarabschluss I"
    ]
  },

];