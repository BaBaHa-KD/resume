import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import type { SiteRoute } from '../config/site';
import { Button } from 'react-bootstrap';

export interface NavItem {
    label: string;
    path: string;
}

export interface NavigationBarProps {
    brandName: string;
    links: SiteRoute[];
}

export default function NavigationBar( { brandName, links }: NavigationBarProps) {
    return (
        <Navbar bg="primary" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                {brandName}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                 <Nav className="ms-auto">
                    {links.map((link) => (
                    <Nav.Link
                        key={link.path}
                        as={NavLink}
                        to={link.path}
                    >
                        {link.label}
                    </Nav.Link>
                    ))}
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Button variant='warning' href="mailto:kevin.dohrn01@gmail.com?subject=Job Opportunity" style={{ marginRight: "1rem" }}>
                Email Me!
            </Button>
        </Navbar>
    );
}