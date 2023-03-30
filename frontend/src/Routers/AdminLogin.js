import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import adminBg from '../assets/adminBg.jpg'
import { login } from "../redux/reducers/userSlice";

function AdminLogin() {
  const [admin, setAdmin] = useState()
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    /*
    axios
      .post("http://localhost:5001/teacher/login", user)
      .then((res) => {
        dispatch(login(res.data))
        navigate('/')
      })
      .catch((err) => setError(err.response.data.msg)) */
  }

  return (
    <div className="teacher login-wrapper">
      <div className="login-left">
        <img src={adminBg} alt=""/>
      </div>
      <div className="login-right">
        <Form onSubmit={handleSubmit} >
          <h1 >Log <span>in</span></h1>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange} />
            <Form.Text className="text-danger">
              {error && <p>{error}</p>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
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

export default AdminLogin;