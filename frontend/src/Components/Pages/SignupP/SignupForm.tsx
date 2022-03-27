import React, { useReducer, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Button } from "../../Features/Button/Button";
import { MyForm } from "../../styles/Form.style";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(10),
      borderColor: 'while'
    },
  })
);


type State = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  isButtonDisabled: boolean;
  helperText: string;
};

const initialState: State = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
  isButtonDisabled: true,
  helperText: "",
};

type Action =
  | { type: "setFullname"; payload: string }
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setConfirmPassword"; payload: string }
  | { type: "setAcceptTerms"; payload: boolean }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setFullname":
      return {
        ...state,
        fullname: action.payload,
      };
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
      case "setConfirmPassword":
      return {
        ...state,
        confirmPassword: action.payload,
      };
      case "setAcceptTerms":
      return {
        ...state,
        acceptTerms: action.payload,
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

export const SignupForm = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();


  //todo
  useEffect(() => {
    if (state.email.trim() && state.password.trim()
    && state.fullname.trim() && state.confirmPassword.trim()
    ) {
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
  }, [state.fullname,state.email, state.password,state.confirmPassword]);

  //todo
  const handleSignup = () => {
    console.log(state.email);
    console.log(state.password);

    const newUser = {
      fullname:state.fullname,
      email:state.email,
      password: state.password
    }
    // if (state.email === "admin@email.com" && state.password === "password") {
      if (newUser) {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
      navigate("/login");
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
      state.isButtonDisabled || handleSignup();
    }
  };

  const handlefullnameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setFullname",
      payload: event.target.value,
    });
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
  const handleConfirmPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setConfirmPassword",
      payload: event.target.value,
    });
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<State>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: State) => {
    handleSignup();
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <MyForm className="container">
      <form
        onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.card}>
          <h3>
            Signup to <strong>Hicker</strong>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
            pellentesque purus viverra dignissim. Vel quam varius.
          </p>
          <div>
          <div className="inputDiv">
              <label>Full Name</label>
              <input
                id="fullname"
                type="text"
                placeholder="Full Name"
                {...register("fullname")}
                onChange={handlefullnameChange}
                onKeyPress={handleKeyPress}
                className={`input-text form-control ${
                  errors.fullname ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.fullname?.message}</div>
            </div>
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
            <div className="password">
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
            <div className="inputDiv">
              <label>Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                onChange={handleConfirmPasswordChange}
                onKeyPress={handleKeyPress}
                className={`input-text form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
            </div>

            <div className="inputDiv form-check">
              <div className="check-text">
              <input
                id="confirmPassword"
                type="checkbox"
                {...register("acceptTerms")}
                onKeyPress={handleKeyPress}
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label className="terms ml-auto">I confirm that I have read the <strong><a href="#" className="">Terms and Conditions</a></strong></label> 
              </div>
              <div className="invalid-feedback">{errors.acceptTerms?.message}</div>        
            </div>
            {/* <div className="invalid-feedback">{state.helperText}</div> */}
          </div>
          <div className="center">
            <Button
              type="submit"
              disabled={state.isButtonDisabled}
              text="Create New Account"
            ></Button>
          </div>
          <div className="center">
          <label>I already have an account <label onClick={(event: React.MouseEvent<HTMLElement>) => {
navigate(`/login`)
}}><strong>Login</strong></label></label>
          </div>
        </Card>
      </form>
    </MyForm>
  );
};

export default SignupForm;
