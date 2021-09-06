import React from "react";
import { Card } from "react-bootstrap";

export default function City (props) {
    return(
        <Card style={{ width: '200px' }}>
            <Card.Img variant="top" src={"http://openweathermap.org/img/wn/" + props.iconId + "@4x.png"}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Temperatura: {props.temp} °C</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Vento: {Math.round(props.windSpeed * 3.6)} km/h</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}