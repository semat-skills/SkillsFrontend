import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";

import { SignupForm, SignUpStyle } from "./Signup.style";
import { Button } from '../../Features/Intro/Button/Button'

interface SignupProps {
  checked?: boolean | undefined;
}

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}


export const Login: React.FC<SignupProps> = ({}) => {
  return (
    <SignUpStyle
    className="d-lg-flex half"
    >
      <div className="bg order-1 order-md-2 ImgFrame"></div>
      <SignupForm className="contents order-2 order-md-1">

      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h3>
              Sign up <strong>Hicker</strong>
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
              adipisicing.
            </p>

          <MyForm message="Sign up" />
          </div>

        </div>
        </div>
      </SignupForm>
    </SignUpStyle>
  );
};


////////////////////////////////////
 // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
 const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      {/* <h1>{message}</h1> */}

      <div className="form-group first">
                <label >Full Name</label>
      <Field type="text" name="name" className="form-control" placeholder="Full Name"/>
      {touched.email && errors.email && <div>{errors.email}</div>}
      </div>

      <div className="form-group first">
                <label >Email</label>
      <Field type="email" name="email" className="form-control" placeholder="Email"/>
      {touched.email && errors.email && <div>{errors.email}</div>}
      </div>

      <div className="form-group last mb-3">
                <label >Password</label>
      <Field type="password" name="password" className="form-control" placeholder="Password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
      </div>

      <div className="form-group last mb-3">
                <label >Confirm Password</label>
      <Field type="password" name="confirm-password" className="form-control" placeholder="Confirm Password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
      </div>
  
  
      <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" 
                  // checked="checked"
                  />
                  <div className="control__indicator"></div>
                </label>
                <label className="ml-auto">I confirm that I have read the <strong><a href="#" className="forgot-pass">Terms and Conditions</a></strong></label> 
              </div>
  
    <button
    className="btn btn-block btn-primary"
      // <Button 
      type="submit" 
      disabled={isSubmitting}
      >
        Sign up
        </button>
      {/* </Button> */}
    <br></br>
      <label>I already have an account <strong>Login</strong></label>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  initialFullName?: string;
  initialConfirmPassword?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: props.initialPassword || '',
      name: props.initialFullName || '',
      confirmpassword: props.initialConfirmPassword|| '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
  },
})(InnerForm);
