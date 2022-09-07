import React from 'react';
import imglogo from '../images/loginimg.svg'
import {Container, Row, Col,Form, Button} from 'react-bootstrap'
import { Link, NavLink,Redirect } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

function Login(){

  
    return (
      <>
        <Container  className='Loginmain mt-5'>
          <Row>
            <Col lg={5} md={6} sm={12}>
              <Form>
                <h1 className='text-center mt-5 mb-4'>Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><h3>Email address</h3></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><h3>Password</h3></Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <div className='fpassword'><a href="ForgotPassword"><NavLink to='/Forgotpwd'><h5>Forgot password?</h5></NavLink></a></div>
                </Form.Group>
                <Button variant="outline-success" type="submit" className='text-center'>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <img className='w-100 mt-5' src={imglogo} alt='imagessss' />
            </Col>
          </Row>
        </Container>
      </>      
    )
  }
export default Login;