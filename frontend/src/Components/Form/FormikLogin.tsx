import React from "react";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Formik, FormikProps } from "formik";
import { Container } from "./FormikForm.style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { loginValidationSchema } from "../../util/util";
import { LoginValues } from "../../Consts/types";
import { loginData } from "../../Consts/generalConsts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(10),
      borderColor: "while",
      padding: "20px",
    },
  })
);

export const FormikLogin: React.FC = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values: LoginValues) => {
    if (values.email === "admin@email.com" && values.password === "password") {
      navigate("/functional");
    }
  };
  return (
    <Container>
      <Formik<LoginValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          handleLogin(values);
        }}
        validationSchema={loginValidationSchema}
        component={LoginForm}
      />
    </Container>
  );
};

const LoginForm: (props: FormikProps<LoginValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
  isSubmitting,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const navToSignup = (event: React.MouseEvent<HTMLElement>) => {
    navigate(`/`);
  }
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
              onClick={navToSignup}
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
