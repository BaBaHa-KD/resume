import Card from "react-bootstrap/Card";

import { type Education } from "../../data/education";

interface Props {
  education: Education;
}

export default function EducationCard({
  education
}: Props) {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>
          {education.degree}
        </Card.Title>

        <Card.Subtitle>
          {education.school}
        </Card.Subtitle>

        <p className="mt-2">
          {education.graduationDate}
        </p>

        {education.achievements && (
          <ul>
            {education.achievements.map(
              (achievement, index) => (
                <li key={index}>
                  {achievement}
                </li>
              )
            )}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}