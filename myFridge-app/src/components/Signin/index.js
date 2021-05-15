import React from 'react';
//import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SigninElements';

/*const SignIn = () => {
    return (
        <>
          <Container> 
              <FormWrap>
                  <Icon to="/">MyFridge</Icon>
                  <FormContent>
                      <Form action="#">
                          <FormH1>Sign in to your account</FormH1>
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' required />
                          <FormLabel htmlRor='for'>Password</FormLabel>
                          <FormInput type='password' required />
                          <FormButton type='submit'>Continue</FormButton>
                          <Text>Forgot password</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>
        </>
    )
}*/

import Signup from "../Signup";
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from "../Login"
import PrivateRoute from '../PrivateRoute'
import ForgotPassword from '../ForgotPassword'
import UpdateProfile from '../UpdateProfile';

const SignIn = () => {
  return (  
    
   <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh" }}>       {/* loads up Signup code inside container*/}
      <dif className="w-100" style={{ maxWidth: "450px"}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </dif>
    </Container>
  )  
}

export default SignIn;
