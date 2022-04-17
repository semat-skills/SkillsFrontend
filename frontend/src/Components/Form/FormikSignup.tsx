import React from "react";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Formik, FormikProps } from "formik";
import { Container } from "./FormikForm.style";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { signupValidationSchema } from "../../util/util";
import { signupData } from "../../Consts/generalConsts";
import { SignupValues } from "../../Consts/types";
import { addUser } from "../../actions/actions";
import { State } from "../../reducers/rootReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(10),
      borderColor: "while",
      padding: "20px",
    },
  })
);

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

const FormikSignup: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const users = useSelector((state: State) => state.users);

  const handleSignup = (values: SignupValues) => {
    if (!users.find((user) => user.email === values.email)) {
      const newUser = {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
      };
      dispatch(addUser(newUser));
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  return (
    <Container>
      <Formik<SignupValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSignup(values);
        }}
        validationSchema={signupValidationSchema}
        component={SignupForm}
      />
    </Container>
  );
};

const SignupForm: (props: FormikProps<SignupValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navToLogin = (event: React.MouseEvent<HTMLElement>) => {
    navigate(`/login`);
  };
  return (
    <form onSubmit={handleSubmit} className="needs-validation" data-testid="form">
      <Card className={classes.card}>
        <h2>
          {signupData.title}&nbsp;
          <strong>Hiker</strong>
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
                onChange={handleChange}
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <div className="terms-text">
                <label className="terms ml-auto">
                  I confirm that I have read the{" "}
                  <strong>
                    <a href="#">Terms and Conditions</a>
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
          <Button type="submit" text="Create New Account" />
        </div>
        <div className="center">
          <label>
            I already have an account{" "}
            <label onClick={navToLogin}>
              <strong className="click">Login</strong>
            </label>
          </label>
        </div>
      </Card>
    </form>
  );
};

export default FormikSignup;
