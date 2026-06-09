import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectCard from "../components/ProjectCard";

import { PROJECTS } from "../data/projects";

export default function Projects() {
    return (
        <Container className="py-4">
            <h1 className="mb-4">
                Projects
            </h1>

            <Row className="g-4">
                {PROJECTS.map((project) => (
                    <Col
                        key={project.title}
                        md={6}
                    >
                        <ProjectCard
                            {...project}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}