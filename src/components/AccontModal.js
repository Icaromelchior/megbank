import React from "react";
import { Modal,Button, Form } from "react-bootstrap";

const AccontModal = ({show,handleClose}) => (
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Seu nome</Form.Label>
                <Form.Control type="text" placeholder="Seu nome" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seu email</Form.Label>
                <Form.Control type="email" placeholder="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Sua cidade</Form.Label>
                <Form.Control as="select">
                  <option value="1">Florianópolis - SC</option>
                  <option value="2">Curitiba - PR</option>
                  <option value="3">São Paulo - SP</option>
                  <option value="3">Rio de Janeiro - RJ</option>
                  <option value="3">Porto Alegra - RS</option>
                </Form.Control>
              </Form.Group>
              <Form.Check 
                  type="checkbox"
                  id="custom-checkbox"
                  label="Li e concordo com os termos"
              />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Criar conta
          </Button>
        </Modal.Footer>
      </Modal>
);


export default AccontModal;