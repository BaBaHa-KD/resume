import { Container } from "react-bootstrap";


export default function Home() {
    return (
        <>
        <Container className="mt-3"> 
            <h2>Software Developer</h2>

            <p>Backend-focused developer with experience in
            Java, databases, networking and enterprise software.</p>

            

            <h5 className="mt-5">Highlights</h5>
            <hr/>
            <ul>
                <li>Completed Ausbildung as Fachinformatiker*in Anwendungsentwicklung</li>
                <li>Cisco DevNet Associate</li>
                <li>Passion for backend systems and software architecture</li>
            </ul>
        </Container>

        </>
    );
}