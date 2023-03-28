import React, { useState } from "react";
import img2 from "../Images/svg/image2.svg";

import google from "../Images/icons/google.png";
import linkedin from "../Images/icons/linkedin.png";
import github from "../Images/icons/github.png";
import facebook from "../Images/icons/facebook.png";

function StudentAdd() {
  const [teacherInfo, setTeacherInfo] = useState({});

  const [studentInfo, setStudentInfo] = useState({})

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;

    const value = e.target.value;
    
      setTeacherInfo({ ...teacherInfo, [name]: value });
        setStudentInfo({ ...studentInfo, [name]: value });
  };
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/student/add", user)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
  };

  return (
    <div className="registration-wrapper">
      <div className="registration-left">
        <img src={studentAddBg} alt="" />
      </div>

      <div className="registration-right">
        <Form onSubmit={handleSubmit}>
          <h1>Registration student's</h1>
          <Form.Group className="mb-2" controlId="firstname">
            <Form.Label className="form-label">Firstname</Form.Label>
            <Form.Control
              name="firstname"
              type="firstname"
              placeholder="firstname"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" controlId="lastname">
            <Form.Label className="form-label">Lastname</Form.Label>
            <Form.Control
              name="lastname"
              type="lastname"
              placeholder="lastname"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="ielts">
            <Form.Label className="form-label">English level</Form.Label>
            <Form.Control
              name="ielts"
              type="number"
              placeholder="IELTS"
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Text className="text-danger">error</Form.Text>
          <Form.Group>
            <div className="social-media__icons">
              <img src={google} alt="404" />
              <img src={linkedin} alt="404" />
              <img src={facebook} alt="404" />
              <img src={github} alt="404" />
            </div>
          </Form.Group>
          <Button className="btn-grad" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default StudentAdd;
