import React from 'react'
import { useForm } from "react-hook-form";
import studentAddBg from '../assets/studentAdd.jpg'
import google from '../Images/icons/google.png'
import linkedin from '../Images/icons/linkedin.png'
import github from '../Images/icons/github.png'
import facebook from '../Images/icons/facebook.png'
// stylesheet
import { Form, Button } from "react-bootstrap"
import { PostData } from './axios';

function StudentAdd() {
  // hook form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const res = {
      path: "student/add",
      data: data,
    }
    PostData(res);
  };

  return (
    <div className="registration-wrapper">
      <div className="registration-left">
        <img src={studentAddBg} alt="" />
      </div>
      <div className="registration-right">
        <Form onSubmit={handleSubmit(onSubmit)} >
          <h1 >Registration student's</h1>
          <Form.Group className='mb-2' controlId='firstname'>
            <Form.Label className='form-label'>Firstname</Form.Label>
            <Form.Control name='firstname' type='firstname' placeholder='firstname' {...register("firstname", { required: true })} ></Form.Control>
            {errors.firstname && <Form.Text className="text-danger">
              Firstname is error
            </Form.Text>}
          </Form.Group>
          <Form.Group className='mb-2' controlId='lastname'>
            <Form.Label className='form-label'>Lastname</Form.Label>
            <Form.Control name='lastname' type='lastname' placeholder='lastname' {...register("lastname", { required: true })} ></Form.Control>
            {errors.lastname && <Form.Text className="text-danger">
              Lastname is error
            </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" {...register("email", { required: true })} />
            {errors.email && <Form.Text className="text-danger">
              email is error
            </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" {...register("password", { required: true })} />
            {errors.password && <Form.Text className="text-danger">
              password is error
            </Form.Text>}
          </Form.Group>
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

export default StudentAdd
