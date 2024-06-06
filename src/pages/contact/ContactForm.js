import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Modal from 'react-bootstrap/Modal';

import contactImage from "../../assets/images/bakery (1).png"
import styles from "../../styles/ContactForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    name: "",
    subject: "",
    email: "",
    content: "",
  });
  const { name, subject, email, message } = contactData;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.goBack();
  };
  const handleShow = () => setShow(true);

  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("email", email);
    formData.append("message", message);

    try {
      await axiosReq.post("/contact/", formData);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>What do you need help with?</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="message"
          value={message}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.message?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit" onClick={handleShow}>
        Send
      </Button>
    </div>
  );

  return (
    
    <Form onSubmit={handleSubmit}>
      <Col className={`justify-content-center ${styles.ContactImage}`}>
        <img
          alt="Baked bread"
          src={contactImage}
        />
      </Col>
      <h1 className={styles.ContactUsText}>Contact us!</h1>
      <Row className={styles.Row}>
        <Col className="col-md-7 col-lg-5 col-md-5">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message has been sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you! We will contact you as soon as possible!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Back to feed
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default ContactForm;