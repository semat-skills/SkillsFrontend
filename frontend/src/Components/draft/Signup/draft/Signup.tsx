import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from '../../../Button/Button'
import { MainForm, PageStyle } from "../../Login/LoginStyled";

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


export const Signup: React.FC<SignupProps> = ({}) => {
  return (
    <PageStyle
    className="d-lg-flex half"
    >
      <div className="bg order-1 order-md-2 ImgFrame"></div>
      <MainForm className="contents order-2 order-md-1">

      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <h3>
              Sign up <strong>Hicker</strong>
            </h3>
            <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.
            </p>

          <MyForm message="Sign up" />
          </div>

        </div>
        </div>
      </MainForm>
    </PageStyle>
  );
};


////////////////////////////////////
 const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  let navigate = useNavigate();
  return (
    <Form>

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
                <label className="control control--checkbox mb-0">
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
    <label>I already have an account <label onClick={(event: React.MouseEvent<HTMLElement>) => {
navigate(`/login`)
}}><strong>Login</strong></label></label>
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

