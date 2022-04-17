import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "../../Button/Button";
import { Container } from "./CardForm.style";
import { Formik, FormikProps } from "formik";
import { Input } from "../../Input/Input";
import { newCardValidationSchema } from "../../../util/util";
import { CardValues } from "../../../Consts/types";

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
  img: "",
  title: "",
  text: "",
};

export const FormikCard: React.FC = () => {
  const navigate = useNavigate();

  const handleNewCard = (values: CardValues) => {
    navigate("/functional");
  };
  return (
    <Container>
      <Formik<CardValues>
        initialValues={initialValues}
        onSubmit={(values) => {
          handleNewCard(values);
        }}
        validationSchema={newCardValidationSchema}
        component={NewCardForm}
      />
    </Container>
  );
};

const NewCardForm: (props: FormikProps<CardValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
}) => {
  const classes = useStyles();
  return (
    <Container className="container">
      <form onSubmit={handleSubmit} className="needs-validation" data-testid="form">
        <Card className={classes.card}>
          <div>
            <Input
              label="Card Name"
              inputId="cardName"
              inputName="cardName"
              inputType="text"
              placeholder="Card Name"
              value={values.title}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.title ? "is-invalid" : ""
              }`}
              inputErrors={errors.title}
              touched={touched.title}
            />
            <div className="inputDiv">
              <label>Card Content</label>
              <textarea
                id="cardContent"
                name="cardContent"
                placeholder="Card Content"
                className={`input-textarea input-text form-control ${
                  errors.text ? "is-invalid" : ""
                }`}
              />
              {errors.text && touched.text && (
                <div className="text-danger">{errors.text}</div>
              )}
            </div>
            <Input
              inputId="cardImg"
              inputName="cardImg"
              inputType="file"
              placeholder="PasscardImgword"
              value={values.img}
              onChange={handleChange}
              className={`input-file input-text form-control ${
                errors.img ? "is-invalid" : ""
              }`}
              inputErrors={errors.img}
              touched={touched.img}
            />
          </div>

          <div className="center">
            <Button type="submit" text="Create New Card" />
          </div>
        </Card>
      </form>
    </Container>
  );
};

export default FormikCard;
