import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Footer() {
    return (
        <footer className="border-top py-2">
            <Container className="text-center">
                <Button
                    href="https://github.com/BaBaHa-KD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                    size="lg"
                >
                    GitHub
                </Button>

                <Button
                    href="https://linkedin.com/in/kevin-dohrn-7801a0224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                    size="lg"
                >
                    LinkedIn
                </Button>

                <Button
                    href="https://github.com/BaBaHa-KD/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-3"
                    size="lg"
                >
                    View Source code
                </Button>

            </Container>
        </footer>
    );
}