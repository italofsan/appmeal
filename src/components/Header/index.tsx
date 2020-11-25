import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid xl={12} xs={12} className={classes.header}>
      <AppBar position='static'>
        <Toolbar
          style={{
            backgroundColor: '#3a0a18',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex' }}>
            <Typography className={classes.headerTitle}>OneSight</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;

const useStyles = makeStyles({
  header: {
    flexGrow: 1,
  },
  headerTitle: {
    flexGrow: 1,
    fontSize: 18,
  },
});
