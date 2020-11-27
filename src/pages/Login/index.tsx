import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import backgroundImage from '../../assets/background.jpg';

interface ILogin {
  email: string;
  password: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [login, setLogin] = useState<ILogin>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof ILogin) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLogin({ ...login, [prop]: event.target.value });
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <div className={classes.inputContainer}>
          <FormControl className={classes.input} variant='outlined'>
            <InputLabel color='secondary'>E-mail</InputLabel>
            <OutlinedInput
              id='email'
              color='secondary'
              type='email'
              value={login.email}
              onChange={handleChange('email')}
              labelWidth={55}
            />
          </FormControl>
          <FormControl className={classes.input} variant='outlined'>
            <InputLabel color='secondary'>Password</InputLabel>
            <OutlinedInput
              id='password'
              color='secondary'
              type='password'
              value={login.password}
              onChange={handleChange('password')}
              labelWidth={80}
            />
          </FormControl>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            variant='outlined'
            color='secondary'
            size='small'
            onClick={() => history.push('/home')}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    },
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '30vh',
      width: '20vw',
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      [theme.breakpoints.down('sm')]: {
        height: '40vh',
        width: '70vw',
      },
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70%',
    },
    input: {
      marginTop: 20,
      width: '90%',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
