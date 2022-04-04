import React, { useReducer, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "../../Button/Button";
import { MyForm } from "../../../Consts/styles/Form.style";
import {Container} from './CardForm.style'
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(10),
      borderColor: "while",
      padding: "20px",
    },
  })
);

type State = {
  cardName: string;
  cardContent: string;
  cardImg:string;
  isButtonDisabled: boolean;
  helperText: string;
};

const initialState: State = {
    cardName: "",
    cardContent: "",
    cardImg:"",
  isButtonDisabled: true,
  helperText: "",
};

type Action =
  | { type: "setCardName"; payload: string }
  | { type: "setCardContent"; payload: string }
  | { type: "setCardImg"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setCardName":
      return {
        ...state,
        cardName: action.payload,
      };
    case "setCardContent":
      return {
        ...state,
        cardContent: action.payload,
      };
      case "setCardImg":
        return {
          ...state,
          cardImg: action.payload,
        };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
      };
  }
};

export const CardForm = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  useEffect(() => {
    if (state.cardName.trim() && state.cardContent.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.cardName, state.cardContent]);

  const handleLogin = () => {
    console.log(state.cardName);
    console.log(state.cardContent);
    if (state.cardName === "admin@email.com" && state.cardContent === "password") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
      navigate("/");
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect email or password",
      });
      console.log(state.helperText);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      console.log("test");
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleCardNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setCardName",
      payload: event.target.value,
    });
  };

  const handleCardContentChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setCardContent",
      payload: event.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required("Card Name is required"),
    cardContent: Yup.string()
      .required("Card Content is required"),
    //   .min(6, "Password must be at least 6 characters")
    //   .max(40, "Password must not exceed 40 characters"),
    cardImg: Yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: State) => {
    handleLogin();
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <Container 
    className="container"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.card}>
          <div>
            <div className="inputDiv">
              <label>Card Name</label>
              <input
                id="cardName"
                type="text"
                placeholder="Card Name"
                {...register("cardName")}
                onChange={handleCardNameChange}
                onKeyPress={handleKeyPress}
                className={`input-text form-control ${
                  errors.cardName ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.cardName?.message}</div>
            </div>
            <div className="inputDiv">
              <label>Card Content</label>
              {/* <textarea>

              </textarea> */}
              <textarea
                id="cardContent"
                // type="textarea"
                placeholder="Card Content"
                {...register("cardContent")}
                // onChange={handleCardContentChange}
                onKeyPress={handleKeyPress}
                className={`input-textarea input-text form-control ${
                  errors.cardContent ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.cardContent?.message}</div>
            </div>
            <div className="inputDiv">
              {/* <label>Password</label> */}
              <input
                id="cardImg"
                type="file"
                placeholder="Upload Card Image"
                {...register("cardImg")}
                // onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                className={`input-file input-text form-control ${
                  errors.cardImg ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.cardImg?.message}</div>
            </div>
          </div>
          <div className="center">
            <Button
              type="submit"
              disabled={state.isButtonDisabled}
              text="Create New Card"
            ></Button>
          </div>
        </Card>
      </form>
    </Container>
  );
};

export default CardForm;
