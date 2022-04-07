import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Container } from "./FormikForm.style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(10),
      borderColor: "while",
      padding: "20px",
    },
  })
);

const signupData = {
  title: "Sign Up to",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.",
};

type SignupValues = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};
const validationSchema = Yup.object({
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be 6 characters at minimum"),
  confirmPassword: Yup.string()
    .required("Required")
    .min(6, "Password must be 6 characters at minimum")
    .oneOf([Yup.ref("password"), null], "Passwords must Match"),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const FormikSignup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (values: SignupValues) => {

    const newUser = {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    };
      navigate("/login");

  };

  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };
  return (
    <Container>
      <Formik<SignupValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSignup(values);
        }}
        validationSchema={validationSchema}
        component={SignupForm}
      ></Formik>
    </Container>
  );
};

let SignupForm: (props: FormikProps<SignupValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
  isSubmitting,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit} className="needs-validation">
      <Card className={classes.card}>
        <h2>
          {signupData.title}&nbsp;
          <strong>Hicker</strong>
        </h2>
        <p>{signupData.text}</p>
        <div>
          <Input
            label="Full Name"
            inputId="fullname"
            inputName="fullname"
            inputType="text"
            placeholder="Full Name"
            value={values.fullname}
            onChange={handleChange}
            className={`input-text form-control ${
              errors.fullname ? "is-invalid" : ""
            }`}
            inputErrors={errors.fullname}
            touched={touched.fullname}
          />
          <Input
            label="Email"
            inputId="email"
            inputName="email"
            inputType="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className={`input-text form-control ${
              errors.email ? "is-invalid" : ""
            }`}
            inputErrors={errors.email}
            touched={touched.email}
          />
          <div className="password">
            <Input
              label="Password"
              inputId="password"
              inputName="password"
              inputType="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              inputErrors={errors.password}
              touched={touched.password}
            />
            <Input
              label="Confirm Password"
              inputId="confirmPassword"
              inputName="confirmPassword"
              inputType="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              inputErrors={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
          </div>

          <div className="inputDiv form-check">
            <div className="check-text">
              <Input
                inputId="acceptTerms"
                inputName="acceptTerms"
                inputType="checkbox"
                // value={values.acceptTerms}
                onChange={handleChange}
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <div className="terms-text">
                <label className="terms ml-auto">
                  I confirm that I have read the{" "}
                  <strong>
                    <a href="#" className="">
                      Terms and Conditions
                    </a>
                  </strong>
                </label>
                {errors.acceptTerms && touched.acceptTerms && (
                  <div className="text-danger">{errors.acceptTerms}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="center">
          <Button
            type="submit"
            text="Create New Account"
          />
        </div>
        <div className="center">
          <label>
            I already have an account{" "}
            <label
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                navigate(`/login`);
              }}
            >
              <strong className="click">Login</strong>
            </label>
          </label>
        </div>
      </Card>
    </form>
  );
};

export default FormikSignup;
