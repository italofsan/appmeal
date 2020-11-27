import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

import { useHistory, withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  id?: string;
  name: string;
  thumb: string;
}

const CardMeal: React.FC<IProps> = ({ id, name, thumb }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardActionArea
        style={{
          width: '40%',
        }}
      >
        <CardMedia className={classes.media} image={thumb} title={name} />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography className={classes.cardTitle}>{name}</Typography>
        <Button
          size='small'
          variant='contained'
          className={classes.button}
          onClick={() =>
            history.push({
              pathname: `/categories/${name}/${id}`,
              state: {
                id: id,
              },
            })
          }
        >
          <Typography style={{ fontSize: 12 }}>More Details</Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default withRouter(CardMeal);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'row',
      height: 320,
      width: '100%',
      boxShadow: '0 0 2px 1px brown',
      [theme.breakpoints.down('sm')]: {
        height: 140,
        width: '100%',
      },
    },
    media: {
      width: '100%',
      height: 320,
      [theme.breakpoints.down('sm')]: {
        height: 140,
        width: '100%',
        alignSelf: 'center',
      },
    },
    button: {
      backgroundColor: '#FFC07F',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '60%',
      height: 320,
      [theme.breakpoints.down('sm')]: {
        height: 140,
        width: '60%',
      },
    },
    cardTitle: {
      flexGrow: 1,
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        height: '20%',
      },
    },
    cardSubtitle: {
      flexGrow: 1,
      fontSize: 12,
      color: '#A9A9A9',
      [theme.breakpoints.down('sm')]: {
        height: '80%',
        overflow: 'hidden',
      },
    },
  })
);
