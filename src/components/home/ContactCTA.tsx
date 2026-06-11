import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { contactLinks }
  from "../../data/home";

export default function ContactCTA() {
  return (
    <Card className="shadow-sm text-center">
      <Card.Body>

        <h3>
          Let's Connect
        </h3>

        <p>
          Interested in working together?
        </p>

        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center"
        >
          <Button
            href={contactLinks.github}
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            href={contactLinks.linkedin}
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            variant="outline-primary"
            href={`mailto:${contactLinks.email}`}
          >
            Email
          </Button>
        </Stack>

      </Card.Body>
    </Card>
  );
}