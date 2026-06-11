import { education } from "../../data/education";
import EducationCard from "./EducationCard";

export default function EducationTimeline() {
  return (
    <div className="d-flex flex-column gap-4">
      {education.map((item) => (
        <EducationCard
          key={item.id}
          education={item}
        />
      ))}
    </div>
  );
}