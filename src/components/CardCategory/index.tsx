import React from 'react';
import {
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
  description: string;
  thumb: string;
}

const CardCategory: React.FC<IProps> = ({ id, name, description, thumb }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card
      className={classes.card}
      onClick={() =>
        history.push({
          pathname: `/categories/${name}`,
          state: {
            name: name,
          },
        })
      }
    >
      <CardActionArea
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia className={classes.media} image={thumb} title={name} />
        <CardContent className={classes.content}>
          <Typography className={classes.cardTitle}>{name}</Typography>
          <Typography className={classes.cardSubtitle}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(CardCategory);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: 300,
      width: '100%',
      boxShadow: '0 0 2px 1px brown',
      [theme.breakpoints.down('sm')]: {
        height: 140,
        width: '100%',
      },
    },
    media: {
      width: '40%',
      height: 300,
      [theme.breakpoints.down('sm')]: {
        height: 80,
        width: '40%',
        alignSelf: 'center',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '60%',
      height: 300,
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
