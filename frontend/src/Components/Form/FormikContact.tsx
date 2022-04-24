import React from "react";
import Card from "@material-ui/core/Card";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Formik, FormikProps } from "formik";
import { Container } from "../NewCard Body/NewCardForm/CardForm.style";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { contactValidationSchema } from "../../util/util";
import { signupData } from "../../Consts/generalConsts";
import { ContactValues } from "../../Consts/types";
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
  title: "",
  text: "",
  img: "",
};

const FormikContact: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // const users = useSelector((state: State) => state.users);

  const handleContact = (values: ContactValues) => {
    // if (!users.find((user) => user.email === values.email)) {
    //   const newUser = {
    //     fullname: values.fullname,
    //     email: values.email,
    //     password: values.password,
    //   };
    //   dispatch(addUser(newUser));
    //   navigate("/login");
    // } else {
    console.log(values);
    handleIntegration();
    // navigate("/");
    // }
  };
  const query = "{ boards (limit:5) {name id} }";
  const query2 =
    "{boards(limit:1) { name id description items { name column_values{title id type text } } } }";

  const query3 =
    'mutation{ create_item (board_id:2584878813, item_name:"WHAT IS UP MY FRIENDS!") { id } }';

  const query4 =
    "mutation ($myItemName: String!) { create_item (board_id:2584878813, item_name:$myItemName) { id } }";
  const vars = { myItemName: "Hello, world!" };

  const query5 =
    "mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2584960742, item_name:$myItemName, column_values:$columnVals) { id } }";
  const vars2 = {
    myItemName: "Hello!",
    columnVals: JSON.stringify({
      Text: {text: "First Last"},
      email: {text: "admin@email.com"},
      contacttext:{text: "bla bla"},
      img: { text: "imgURL" },
    
    }),
  };
  const handleIntegration = () => {
    fetch("https://api.monday.com/v2", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE1NzE4NzkxOCwidWlkIjoyODY2MjMxOCwiaWFkIjoiMjAyMi0wNC0yNFQxMDoyNDoyNi4wNTNaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.3R7Xde6GJM1PBcvyPsjOkRq5UgBFUaFIvN5TrxyEFEU",
      },
      body: JSON.stringify({
        query: query5,
        variables: JSON.stringify(vars2),
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(JSON.stringify(res, null, 2)));
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
          {/* <h2>
          {signupData.title}&nbsp;
          <strong>Hiker</strong>
        </h2>
        <p>{signupData.text}</p> */}
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
            <Input
              label="Image URL"
              inputId="img"
              inputName="img"
              inputType="img"
              placeholder="Image URL"
              value={values.img}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.img ? "is-invalid" : ""
              }`}
              inputErrors={errors.img}
              touched={touched.img}
            />

            {/* <div className="inputDiv form-check">
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
          </div> */}
          </div>

          <div className="center">
            <Button type="submit" text="Send New Note" />
          </div>
          {/* <div className="center">
          <label>
            I already have an account{" "}
            <label onClick={navToLogin}>
              <strong className="click">Login</strong>
            </label>
          </label>
        </div> */}
        </Card>
      </form>
    </Container>
  );
};

export default FormikContact;
