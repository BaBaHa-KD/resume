import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Files from "../pages/Files";

export interface SiteRoute {
  label: string;
  path: string;
  element: React.ReactNode;
}

export const NAV_LINKS: SiteRoute[] = [
  {
    label: "Home",
    path: "/",
    element: <Home />,
  },
  {
    label: "Resume",
    path: "/resume",
    element: <Resume />,
  },
  {
    label: "Projects",
    path: "/projects",
    element: <Projects />,
  },
  {
    label: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    label: "Files",
    path: "/files",
    element: <Files />,
  },
];

export const SITE_NAME = "Kevin Dohrn";