import Card from "react-bootstrap/Card";

interface FileCardProps {
    name: string;
    description?: string;
    onClick: () => void;
}

export default function FileCard({
    name,
    description,
    onClick,
}: FileCardProps) {
    return (
        <Card
            className="mb-3"
            style={{
                cursor: "pointer",
            }}
            onClick={onClick}
        >
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>

                {description && (
                    <Card.Text>
                        {description}
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}