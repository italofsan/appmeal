import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
      className={classes.root}
      onClick={() =>
        history.push({
          pathname: '/categories/listmeals',
          state: {
            name: name,
          },
        })
      }
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={thumb} title={name} />
        <CardContent>
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

const useStyles = makeStyles({
  root: {
    maxHeight: 320,
    maxWidth: 345,
    boxShadow: '0 0 2px 1px brown',
  },
  media: {
    width: '100%',
    height: 400,
    minHeight: '10%',
    maxHeight: 215,
  },
  cardTitle: {
    flexGrow: 1,
    fontSize: 16,
  },
  cardSubtitle: {
    flexGrow: 1,
    fontSize: 12,
    color: '#A9A9A9',
  },
});
