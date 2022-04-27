import React from "react";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Formik, FormikProps } from "formik";
import { Container } from "../NewCard Body/NewCardForm/CardForm.style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { contactValidationSchema } from "../../util/util";
import { ContactValues } from "../../Consts/types";
import axios from "axios";

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
  title: "",
  text: "",
};

const api = axios.create({
  baseURL: "http://localhost:3000/contact",
});

const FormikContact: React.FC = () => {
  const handleContact = async (values: ContactValues) => {
    const searchFor = 'hiking';
    const res = await api.post("/", {values, searchFor});
  };

  return (
    <Container>
      <Formik<ContactValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          handleContact(values);
        }}
        validationSchema={contactValidationSchema}
        component={ContactForm}
      />
    </Container>
  );
};

const ContactForm: (props: FormikProps<ContactValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // const navToLogin = (event: React.MouseEvent<HTMLElement>) => {
  //   navigate(`/login`);
  // };
  return (
    <Container className="container">
      <form
        onSubmit={handleSubmit}
        className="needs-validation"
        data-testid="form"
      >
        <Card className={classes.card}>
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

            <Input
              label="Title"
              inputId="title"
              inputName="title"
              inputType="title"
              placeholder="title"
              value={values.title}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.title ? "is-invalid" : ""
              }`}
              inputErrors={errors.title}
              touched={touched.title}
            />
            <Input
              label="Text"
              inputId="text"
              inputName="text"
              inputType="text"
              placeholder="Text"
              value={values.text}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.text ? "is-invalid" : ""
              }`}
              inputErrors={errors.text}
              touched={touched.text}
            />
          </div>

          <div className="center">
            <Button type="submit" text="Send New Note" />
          </div>
        </Card>
      </form>
    </Container>
  );
};

export default FormikContact;
