import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bgImg from '../assets/vecteezy_man-entering-cloud-server-data-password_4689082.jpg'
import axios from "axios";
import { login } from "../redux/reducers/userSlice";
// stylesheet import
import '../sass/login.scss'

function StudentLogin() {
  const [user, setUser] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('click');
    console.log(user);

    axios.post("http://localhost:5001/student/login", user)
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data))
        navigate('/')
      })
      .catch((err) => console.log(err))
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
            <Form.Control name="email" type="email"  placeholder="Enter email" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control name="password" type="password"  placeholder="Password"  onChange={handleChange} />
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

export default StudentLogin;
