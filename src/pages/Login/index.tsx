import React from 'react';
import { Button } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Button onClick={() => history.push('/home')}>Shazam</Button>
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
    },
  })
);
