import React from 'react'
import {Form,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function ForgotPassword() {
  const mystyle={
    marginTop:'10%'
  
    
  }
  return (
    <>
    <div style={mystyle} className='height:100px width:100% stylecss'>
      
    <div>
      <h2 className='haid'>Forgot Password</h2>
    <Form className='text-align: center;'>
  <Form.Group    className="  mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group> */}
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    </div>
    </>
    
  )
}
