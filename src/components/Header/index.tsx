import React, { memo } from 'react';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid xl={12} xs={12} className={classes.header}>
      <AppBar position='static'>
        <Toolbar
          style={{
            backgroundColor: '#3a0a18',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={classes.listHeaderButtons}>
            <IconButton>
              <ArrowBackIos
                className={classes.iconButton}
                onClick={() => history.goBack()}
              />
            </IconButton>
          </div>
          <div style={{ display: 'flex' }}>
            <Typography className={classes.headerTitle}>OneSight</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default memo(Header);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      flexGrow: 1,
    },
    headerTitle: {
      flexGrow: 1,
      fontSize: 18,
    },
    listHeaderButtons: {
      position: 'absolute',
      flexDirection: 'row',
      display: 'none',
      left: 0,
      marginLeft: 10,
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
      },
    },
    iconButton: {
      color: '#FFF',
    },
  })
);
