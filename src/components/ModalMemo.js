import React, { useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";
import { Context } from "../contexts/Contexts";

function ModalMemo() {
  const { show } = useContext(Context);

  return (
    <>
      <Modal.Dialog show={show} className="options-modal">
        <Modal.Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Modal.Title>In memorial</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name of pet</Form.Label>
            <Form.Control type="name" placeholder="Name of pet" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Text</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write something about your pet"
              rows={3}
            />
          </Form.Group>
          <div className="center-upload-button">
            <Button className="modal-memo-upload">
              <Form.Label>
                <FaUpload className="upload-icon" /> Upload image
              </Form.Label>
              <input type="file" />
            </Button>
          </div>
        </Form>
        <Modal.Footer className="modal-footer-2">
          <Button
            variant="secondary"
            onClick={() => {}}
            className="ok-button-options"
          >
            OK
          </Button>
          <Button onClick={() => {}}>Cancel</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default ModalMemo;
