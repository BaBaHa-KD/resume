import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import {
  skillCategories
} from "../../data/skills";

export default function SkillsSection() {
  return (
    <div className="d-flex flex-column gap-4">

      {skillCategories.map(category => (
        <Card
          key={category.id}
          className="shadow-sm"
        >
          <Card.Body>

            <Card.Title>
              {category.category}
            </Card.Title>

            <div className="d-flex flex-wrap gap-2 mt-3">

              {category.skills.map(skill => (
                <Badge
                  key={skill}
                  bg="secondary"
                >
                  {skill}
                </Badge>
              ))}

            </div>

          </Card.Body>
        </Card>
      ))}

    </div>
  );
}