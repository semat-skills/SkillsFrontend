import React, { useReducer, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "../../Components/Button/Button";
import { Container } from "../../Assets/styles/Form.style";
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
  email: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
};

const initialState: State = {
  email: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
};

type Action =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
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

export const LoginForm = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  useEffect(() => {
    if (state.email.trim() && state.password.trim()) {
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
  }, [state.email, state.password]);

  const handleLogin = () => {
    console.log(state.email);
    console.log(state.password);
    if (state.email === "admin@email.com" && state.password === "password") {
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

  const handleemailChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setEmail",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.card}>
          <h2>
            Login to <strong>Hicker</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
            pellentesque purus viverra dignissim. Vel quam varius.
          </p>
          <div>
            <div className="inputDiv">
              <label>Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
                onChange={handleemailChange}
                onKeyPress={handleKeyPress}
                className={`input-text form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
            <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="inputDiv">
              <label>Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                className={`input-text form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div>
              <label
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  navigate(`/`);
                }}
              >
                <strong>Forgot Password</strong>
              </label>
            </div>
          </div>
          <div className="center">
            <Button
              type="submit"
              disabled={state.isButtonDisabled}
              text="Login"
            ></Button>
          </div>
          <div className="center">
            <label>I don't have an account yet! &nbsp;</label>
            <label
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                navigate(`/signup`);
              }}
            >
              <strong> Sign Up</strong>
            </label>
          </div>
        </Card>
      </form>
    </Container>
  );
};

export default LoginForm;
