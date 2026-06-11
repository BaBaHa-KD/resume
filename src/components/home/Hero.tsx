import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { heroData } from "../../data/home";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="text-center py-5">

      <h1 className="display-3">
        {heroData.name}
      </h1>

      <h3 className="text-muted mb-4">
        {heroData.title}
      </h3>

      <p className="lead mx-auto w-75">
        {heroData.description}
      </p>

      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center mt-4"
      >
        <Link to="/resume">
          <Button>
          View Resume
          </Button>
        </Link>

        <Link to="/projects">
        <Button
          variant="outline-primary"
        >
          View Projects
        </Button>
        </Link>
      </Stack>

    </div>
  );
}