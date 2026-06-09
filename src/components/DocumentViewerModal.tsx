
import Modal from "react-bootstrap/Modal";

interface DocumentViewerModalProps {
    show: boolean;
    title: string;
    filePath: string;
    onClose: () => void;
}

export default function DocumentViewerModal({
    show,
    title,
    filePath,
    onClose,
}: DocumentViewerModalProps) {
    return (
        <Modal
            show={show}
            onHide={onClose}
            size="xl"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body
                style={{
                    height: "80vh",
                }}
            >
                <iframe
                    src={filePath}
                    title={title}
                    width="100%"
                    height="100%"
                    style={{
                        border: "none",
                    }}
                />
            </Modal.Body>
        </Modal>
    );
}