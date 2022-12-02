import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Options() {
  const [showCreamatory, setShowCrematory] = useState(false);
  const [showBurial, setShowBurial] = useState(false);

  const showCrematoryForm = () => {
    if (!showCreamatory && !showBurial) {
      setShowCrematory(true);
    } else {
      setShowCrematory(false);
    }
  };

  const showBurialForm = () => {
    if (!showBurial && !showCreamatory) {
      setShowBurial(true);
    } else {
      setShowBurial(false);
    }
  };

  return (
    <>
      <Modal.Dialog className="options-modal">
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
              onClick={() => {
                showCrematoryForm();
              }}
            />
            <Form.Check
              type="radio"
              id="burial"
              name="group1"
              label="Burial"
              onClick={() => {
                showBurialForm();
              }}
            />
          </Form>
          {showCreamatory && (
            <Form>
              <Form.Group className="mb-3 w-70" controlId="formBasicEmail">
                <Form.Label>Type of pet</Form.Label>
                <Form.Control type="type" placeholder="Enter type of pet" />
                <Form.Label>Pets name</Form.Label>
                <Form.Control type="name" placeholder="Enter pets name" />
                <Form.Label>Pets size</Form.Label>
                <Form.Control type="size" placeholder="Enter pets size" />
                <Form.Label>Pets weight</Form.Label>
                <Form.Control type="weight" placeholder="Enter pets weight" />
                <Form.Label>Adress of owner</Form.Label>
                <Form.Control type="adress" placeholder="Enter owners adress" />
              </Form.Group>
            </Form>
          )}
          {showBurial && (
            <Form>
              <Form.Group className="mb-3 w-70" controlId="formBasicEmail">
                <Form.Label>Type of pet</Form.Label>
                <Form.Control type="type" placeholder="Enter type of pet" />
                <Form.Label>Pets name</Form.Label>
                <Form.Control type="name" placeholder="Enter pets name" />
                <Form.Label>Pets size</Form.Label>
                <Form.Control type="size" placeholder="Enter pets size" />
                <Form.Label>Pets weight</Form.Label>
                <Form.Control type="weight" placeholder="Enter pets weight" />
                <Form.Label>Adress of owner</Form.Label>
                <Form.Control type="adress" placeholder="Enter owners adress" />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {}}
            className="ok-button-options"
          >
            OK
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default Options;
