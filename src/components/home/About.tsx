import Card from "react-bootstrap/Card";

import { aboutData } from "../../data/home";

export default function About() {
  return (
    <Card className="shadow-sm">
      <Card.Body>

        <Card.Title>
          About Me
        </Card.Title>

        <Card.Text>
          {aboutData.text}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}