import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bgImg from '../assets/vecteezy_man-entering-cloud-server-data-password_4689082.jpg'


function TeacherLogin() {
  // const [data, setData] = useState()

  // const handleChange = (e) => {
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('click');
  }

  return (
    <div className="teacher login-wrapper">
      <div className="login-left">
        <img src={bgImg} alt="" />
      </div>

      <div className="login-right">
        <Form onSubmit={handleSubmit} >
          <h1 >Log <span>in</span></h1>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="btn-grad" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div >
  );
}

export default TeacherLogin;
