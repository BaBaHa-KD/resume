import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import ExperienceTimeline
  from "../components/resume/ExperienceTimeline";

import EducationTimeline
  from "../components/resume/EducationTimeline";

import SkillsSection
  from "../components/resume/SkillsSection";

import { type ResumeSection }
  from "../types/resume";

export default function Resume() {
  const [activeSection, setActiveSection] =
    useState<ResumeSection>("experience");

  const sections = [
    {
      id: "experience",
      label: "Experience"
    },
    {
      id: "education",
      label: "Education"
    },
    {
      id: "skills",
      label: "Skills & Technologies"
    }
  ] as const;

  const sectionComponents = {
    experience: <ExperienceTimeline />,
    education: <EducationTimeline />,
    skills: <SkillsSection />
};

  return (
    <Container className="py-5">
      <Row>

        <Col md={3}>
          <Nav
            variant="pills"
            className="flex-column position-sticky top-0"
          >
            {sections.map((section) => (
              <Nav.Link
                key={section.id}
                active={
                  activeSection === section.id
                }
                onClick={() =>
                  setActiveSection(section.id)
                }
              >
                {section.label}
              </Nav.Link>
            ))}
          </Nav>
        </Col>

        <Col md={9}>
          {sectionComponents[activeSection]}
        </Col>

      </Row>
    </Container>
  );
}