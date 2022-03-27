import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
// import Button from '@material-ui/core/Button';
import { MyButton } from '../../Features/MyButton/MyButton';
import { Button } from '../../Features/Button/Button';
import { MyForm } from '../../styles/Form.style';
// import { Button } from "../../Features/Button/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
      // color: 'white',
      // backgroundColor: 'yellow'
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10),
      // borderColor: 'while'
    },
    // center: {
    //     display: 'flex',
    //     justify-content: 'center',
    //     align-items: 'center',
    // },
  })
);

//state type

type State = {
  email: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  email: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setEmail', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setEmail': 
      return {
        ...state,
        email: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

export const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();

  useEffect(() => {
    if (state.email.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.email, state.password]);

  const handleLogin = () => {
    // event.preventDefault();
    console.log(state.email);
    console.log(state.password);
    if (state.email === 'admin@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
      navigate('/');
    } else {
      // e.preventDefautl();
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect email or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      console.log('test')
      // state.isButtonDisabled || handleLogin();
    }
  };

  const handleemailChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setEmail',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <MyForm className='container'>
    <form className={classes.container} autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login App" />
        <CardContent>
          <div>
            <input
              // error={state.isError}
              // fullWidth
              id="email"
              type="email"
              // label="email"
              placeholder="Email"
              // margin="normal"
              onChange={handleemailChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <div className='center'>
        <Button text='Login'></Button>
        </div>
        <CardActions>
          <Button
          // {/* <button */}
            // variant="contained"
            // size="large"
            // color="secondary"
            type='submit'
            className={classes.loginBtn}
            onClick={(e: React.MouseEvent<HTMLButtonElement>)=> {
              e.preventDefault();
              handleLogin();
            }}
            disabled={state.isButtonDisabled}
            text='Login'>
            Login
            {/* </button> */}
          </Button>
        </CardActions>
      </Card>
    </form>
    </MyForm>
  );
}

export default Login;