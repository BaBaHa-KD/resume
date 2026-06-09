export interface FileDocument {
    name: string;
    description?: string;
    filePath: string;
}

export const FILES: FileDocument[] = [
    {
        name: "Lebenslauf",
        description: "Current software developer resume",
        filePath: "/files/Lebenslauf.pdf",
    },
    {
        name: "Zwischenzeugnis",
        description: "Work Report Card",
        filePath: "/files/Zwischenzeugnis.pdf",
    },
    {
        name: "Ausbildungszeugnis",
        description: "Ausbildung Report Card",
        filePath: "/files/Ausbildungszeugnis.pdf",
    },
    {
        name: "Abschlusszeugnis",
        description: "Final Report Card",
        filePath: "/files/Abschlusszeugnis.pdf",
    },
    {
        name: "Prüfungszeugnis",
        description: "Final Exam Report Card",
        filePath: "/files/Prüfungszeugnis.pdf",
    },
    {
        name: "DevNet Associate",
        description: "Cisco DevNet Associate Course Certificate",
        filePath: "/files/DevNet Associate.pdf",
    },
    {
        name: "PA Programming Essentials in Cpp",
        description: "Cisco C++ programming Essentials Course Certificate",
        filePath: "/files/PA Programming Essentials in Cpp.pdf",
    },
    {
        name: "Schulz von Thun - Professionell auftreten und kommunizieren",
        description: "Schulz von Thun Kommunikationsschulung 'Professionell auftreten und kommunizieren'",
        filePath: "/files/Schulz von Thun - Professionell auftreten und kommunizieren.pdf",
    },
];