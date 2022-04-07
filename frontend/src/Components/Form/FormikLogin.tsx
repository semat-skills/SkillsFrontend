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

const loginData = {
  title: "Login to",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum gravida scelerisque nunc senectus ac. Aliquam auctor lacinia pellentesque purus viverra dignissim. Vel quam varius.",
};

type LoginValues = {
  email: string;
  password: string;
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be 6 characters at minimum"),
});

export const FormikLogin: React.FC = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values: LoginValues) => {
    if (values.email === "admin@email.com" && values.password === "password") {
      navigate("/");
    }
  };
  return (
    <Container>
      <Formik<LoginValues>
        initialValues={initialValues}
        onSubmit={(values) => {

          handleLogin(values);
        }}
        validationSchema={validationSchema}
        component={LoginForm}
      ></Formik>
    </Container>
  );
};

let LoginForm: (props: FormikProps<LoginValues>) => JSX.Element = ({
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
          {loginData.title}&nbsp;
          <strong>Hicker</strong>
        </h2>
        <p>{loginData.text}</p>
        <div>
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
          <div>
            <label
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                navigate(`/`);
              }}
            >
              <strong className="click">Forgot Password</strong>
            </label>
          </div>
        </div>
        <div className="center">
          <Button type="submit" disabled={isSubmitting} text="Login" />
        </div>
        <div className="center">
          <label>I don't have an account yet! &nbsp;</label>
          <label
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              navigate(`/signup`);
            }}
          >
            <strong className="click"> Sign Up</strong>
          </label>
        </div>
      </Card>
    </form>
  );
};

export default FormikLogin;
