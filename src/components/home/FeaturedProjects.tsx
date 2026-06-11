import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { featuredProjects }
  from "../../data/home";

export default function FeaturedProjects() {
  return (
    <>
      <h2 className="mb-4">
        Featured Projects
      </h2>

      <Row className="g-4">

        {featuredProjects.map(project => (
          <Col md={4} key={project.id}>
            <Card className="h-100 shadow-sm">

              <Card.Body>

                <Card.Title>
                  {project.title}
                </Card.Title>

                <Card.Text>
                  {project.description}
                </Card.Text>

              </Card.Body>

              <Card.Footer>
                <Button
                  href={project.route}
                  size="sm"
                >
                  Learn More
                </Button>
              </Card.Footer>

            </Card>
          </Col>
        ))}

      </Row>
    </>
  );
}