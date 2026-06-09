import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface ProjectCardProps {
    title: string;
    description: string[];
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export default function ProjectCard({
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <Card className="h-100">
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>

                <Card.Text>
                    <ul>
    {description.map(item => (
        <li key={item}>{item}</li>
    ))}
</ul>
                </Card.Text>

                <Card.Text>
                    <strong>
                        Tech Stack:
                    </strong>
                    <br />
                    {techStack.join(", ")}
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                {githubUrl && (
                    <Button
                        variant="primary"
                        href={githubUrl}
                        target="_blank"
                        className="me-2"
                    >
                        GitHub
                    </Button>
                )}

                {liveUrl && (
                    <Button
                        variant="outline-primary"
                        href={liveUrl}
                        target="_blank"
                    >
                        Demo
                    </Button>
                )}
            </Card.Footer>
        </Card>
    );
}