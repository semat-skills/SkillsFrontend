import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { MainForm, PageStyle } from "./LoginStyled";
import { Button } from "../../Features/Button/Button";

interface LoginProps {
  checked?: boolean | undefined;
  className?: string;
}

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
  message: string; 
}
export const Login1: React.FC<LoginProps> = ({}) => {
  return (
    <PageStyle className="d-lg-flex half">
      <div className="bg order-1 order-md-2 ImgFrame"></div>
      <MainForm className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h3>
                Login to <strong>Hicker</strong>
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum gravida scelerisque nunc senectus ac. Aliquam auctor
                lacinia pellentesque purus viverra dignissim. Vel quam varius.
              </p>
              <MyForm message="Login" />
            </div>
          </div>
        </div>
      </MainForm>
    </PageStyle>
  );
};

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  let navigate = useNavigate();
  return (
    <Form>
      <div className="form-group first">
        <label>Email</label>
        <Field
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
        />
        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>

      <div className="form-group last mb-3">
        <label>Password</label>
        <Field
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>

      <div className="d-flex mb-5 align-items-center">
        <label className="control control--checkbox mb-0">
          <span className="caption"> Remember me</span>
          <input
            type="checkbox"
            // checked="checked"
          />
          <div className="control__indicator"></div>
        </label>
       <label className="ml-auto"
         onClick={(event: React.MouseEvent<HTMLElement>) => {
           navigate(`/login`);
         }}
       >
         <strong>Forgot Password</strong>
        </label>
      </div>

        <Button 
        // className="btn btn-block btn-primary"
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </Button>
      <br></br>
      <label
      >
        I don't have an account yet!{" "}
        <label
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            navigate(`/signup`);
          }}
        >
          <strong>Sign Up</strong>
        </label>
      </label>
    </Form>
  );
};

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: props.initialPassword || "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    }
    // } else if (!isValidEmail(values.email)) {
    //   errors.email = 'Invalid email address';
    // }
    // if (!values.password) {
    //   errors.password = "Required";
    // }
    return errors;
  },

  handleSubmit: (values) => {
    // console.log('hello')
    // console.log(values.email)
    // do submitting things
  },
})(InnerForm);


