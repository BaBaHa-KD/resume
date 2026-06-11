import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { type Experience } from "../../data/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({
  experience
}: Props) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {experience.position}
            </Card.Title>

            <Card.Subtitle>
              {experience.company}
            </Card.Subtitle>
          </div>

          <small>
            {experience.startDate} - {experience.endDate}
          </small>
        </div>

        <ul className="mt-3">
          {experience.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mt-3">
          {experience.technologies.map((tech) => (
            <Badge
              key={tech}
              bg="secondary"
              className="me-2"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}