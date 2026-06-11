import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="d-flex flex-column gap-4">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}