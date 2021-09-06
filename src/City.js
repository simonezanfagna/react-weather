import React from "react";
import { Card } from "react-bootstrap";

export default function City (props) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.temp}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}