import React from "react";
import { Alert } from "react-bootstrap";

export default function Error(props) {
  return (
    <Alert variant="danger">
      Inserisci una città valida. "{props.errore}" non esiste!
    </Alert>
  );
}
