import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useLocation, useHistory, withRouter } from 'react-router-dom';

import CardMeal from '../../components/CardMeal';
import Header from '../../components/Header';
import api from '../../services/api';

interface IProps {
  name: string;
}

interface IMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const MealsList: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation<IProps>();
  const [meals, setMeals] = useState<IMeals[]>([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      api.get(`/filter.php?c=${location.state.name}`).then((response) => {
        const { data } = response;
        setMeals(data.meals);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Grid container className={classes.container}>
      <Header />
      <Grid
        item
        xl={12}
        xs={12}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className={classes.title}>
          <Typography className={classes.titleText}>Category</Typography>
          <Typography className={classes.subtitleText}>
            {location.state.name}
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xl={12}
        xs={12}
        style={{
          width: '100%',
          flexWrap: 'wrap',
          display: 'flex',
        }}
      >
        {meals.map((meal: IMeals) => (
          <Grid
            item
            xs={12}
            xl={6}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 10,
            }}
            key={meal.idMeal}
          >
            <CardMeal
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              thumb={meal.strMealThumb}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default withRouter(MealsList);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#FFCF99',
      height: '100%',
    },
    title: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      flexGrow: 1,
      fontSize: 36,
    },
    subtitleText: {
      flexGrow: 1,
      fontSize: 24,
    },
  })
);
