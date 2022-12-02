import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Options() {
  return (
    <span>
      <Modal.Header>
        <Modal.Title>Farewell options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Check
            type="radio"
            id="cremation"
            name="group1"
            label="Cremation"
          />
          <Form.Check type="radio" id="burial" name="group1" label="Burial" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {}}>
          OK
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Cancel
        </Button>
      </Modal.Footer>
    </span>
  );
}

export default Options;
