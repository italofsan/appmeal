import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useLocation, withRouter } from 'react-router-dom';

import ListPages from '../../components/ListPages';
import CardMeal from '../../components/CardMeal';
import Header from '../../components/Header';

import loadingImage from '../../assets/loading.gif';
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
  const location = useLocation<IProps>();
  const [meals, setMeals] = useState<IMeals[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mealsPerPage] = useState<number>(10);

  useEffect(() => {
    setLoading(true);
    fetchMeals();
  });

  const fetchMeals = async () => {
    try {
      api.get(`/filter.php?c=${location.state.name}`).then((response) => {
        const { data } = response;
        setMeals(data.meals);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  const indexOfLastMeal: number = currentPage * mealsPerPage;
  const indexOfFirstMeal: number = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <>
        <Header />
        <Grid
          item={true}
          xl={12}
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={loadingImage} alt='Loading' />
        </Grid>
      </>
    );
  }

  return (
    <>
      <Header />

      <Grid
        item={true}
        xl={12}
        xs={12}
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#FFCF99',
        }}
      >
        <div className={classes.title}>
          <Typography className={classes.titleText}>Category</Typography>
          <Typography className={classes.subtitleText}>
            {location.state.name}
          </Typography>
        </div>
      </Grid>

      <Grid container className={classes.container}>
        <Grid
          item={true}
          xl={12}
          xs={12}
          style={{
            width: '100%',
            flexWrap: 'wrap',
            display: 'flex',
            height: '100%',
          }}
        >
          {currentMeals.map((meal: IMeals) => (
            <Grid
              item={true}
              xs={12}
              lg={6}
              md={6}
              xl={6}
              className={classes.card}
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

        <ListPages
          mealsPerPage={mealsPerPage}
          totalMeals={meals.length}
          paginate={paginate}
        />
      </Grid>
    </>
  );
};

export default withRouter(MealsList);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#FFCF99',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
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
    card: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
    },
  })
);
