import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

import { skillCategories }
  from "../../data/skills";

export default function SkillsSnapshot() {
  return (
    <Card className="shadow-sm">
      <Card.Body>

        <Card.Title>
          Skills Snapshot
        </Card.Title>

        <div className="d-flex flex-wrap gap-2 mt-3">

          {skillCategories
            .flatMap(category => category.skills)
            .slice(0, 12)
            .map(skill => (
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
  );
}