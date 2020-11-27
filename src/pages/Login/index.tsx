import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <Button onClick={() => history.push('/home')}>Shazam</Button>
    </div>
  );
};

export default Login;
