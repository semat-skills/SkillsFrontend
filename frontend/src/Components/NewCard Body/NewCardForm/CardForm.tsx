import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "../../Button/Button";
import { Container } from "./CardForm.style";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { Input } from "../../Input/Input";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(10),
      borderColor: "while",
      padding: "20px",
    },
  })
);

type CardValues = {
  cardName: string;
  cardContent: string;
  cardImg: string;
};

const validationSchema = Yup.object({
  cardName: Yup.string().required("Required"),
  cardImg: Yup.mixed().required("File is required"),
});

export const FormikCard: React.FC = () => {
  const navigate = useNavigate();
  const initialValues = {
    cardName: "",
    cardContent: "",
    cardImg: "",
  };

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
        validationSchema={validationSchema}
        component={NewCardForm}
      ></Formik>
    </Container>
  );
};

let NewCardForm: (props: FormikProps<CardValues>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  touched,
  isSubmitting,
}) => {
  const classes = useStyles();
  return (
    <Container className="container">
      <form onSubmit={handleSubmit} className="needs-validation">
        <Card className={classes.card}>
          <div>
            <Input
              label="Card Name"
              inputId="cardName"
              inputName="cardName"
              inputType="text"
              placeholder="Card Name"
              value={values.cardName}
              onChange={handleChange}
              className={`input-text form-control ${
                errors.cardName ? "is-invalid" : ""
              }`}
              inputErrors={errors.cardName}
              touched={touched.cardName}
            />
            <div className="inputDiv">
              <label>Card Content</label>
              <textarea
                id="cardContent"
                name="cardContent"
                placeholder="Card Content"
                className={`input-textarea input-text form-control ${
                  errors.cardContent ? "is-invalid" : ""
                }`}
              />
              {errors.cardContent && touched.cardContent && (
                <div className="text-danger">{errors.cardContent}</div>
              )}
            </div>
            <Input
              inputId="cardImg"
              inputName="cardImg"
              inputType="file"
              placeholder="PasscardImgword"
              value={values.cardImg}
              onChange={handleChange}
              className={`input-file input-text form-control ${
                errors.cardImg ? "is-invalid" : ""
              }`}
              inputErrors={errors.cardImg}
              touched={touched.cardImg}
            />
          </div>

          <div className="center">
            <Button type="submit" text="Create New Card"></Button>
          </div>
        </Card>
      </form>
    </Container>
  );
};

export default FormikCard;
