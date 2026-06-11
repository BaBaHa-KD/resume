import Container from "react-bootstrap/Container";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import FeaturedProjects
  from "../components/home/FeaturedProjects";
import SkillsSnapshot
  from "../components/home/SkillsSnapshot";
import ContactCTA
  from "../components/home/ContactCTA";

export default function Home() {
  return (
    <Container className="py-5">

      <Hero />

      <div className="my-5">
        <About />
      </div>

      <div className="my-5">
        <FeaturedProjects />
      </div>

      <div className="my-5">
        <SkillsSnapshot />
      </div>

      <div className="my-5">
        <ContactCTA />
      </div>

    </Container>
  );
}