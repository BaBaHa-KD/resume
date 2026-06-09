import { useState } from "react";

import Container from "react-bootstrap/Container";

import FileCard from "../components/FileCard";
import DocumentViewerModal from "../components/DocumentViewerModal";

import { FILES, type FileDocument, } from "../data/files";

export default function Files() {
    const [selectedFile, setSelectedFile] =
        useState<FileDocument | null>(
            null
        );

    return (
        <Container className="py-4">
            
            {FILES.map((file) => (
                <FileCard
                    key={file.filePath}
                    name={file.name}
                    description={
                        file.description
                    }
                    onClick={() =>
                        setSelectedFile(file)
                    }
                />
            ))}

            {selectedFile && (
                <DocumentViewerModal
                    show={true}
                    title={
                        selectedFile.name
                    }
                    filePath={
                        selectedFile.filePath
                    }
                    onClose={() =>
                        setSelectedFile(null)
                    }
                />
            )}
        </Container>
    );
}