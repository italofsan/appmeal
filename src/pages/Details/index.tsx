import React, { useState, useEffect } from 'react';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';

interface IProps {
  id: string;
}

interface IMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions: string;
  strYoutube: string;
}

const Details: React.FC = () => {
  const classes = useStyles();
  const location = useLocation<IProps>();
  const [meal, setMeal] = useState<IMeal>();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      api.get(`/lookup.php?i=${location.state.id}`).then((response) => {
        const { data } = response;
        const { meals } = data;
        setMeal({
          idMeal: meals[0].idMeal,
          strMeal: meals[0].strMeal,
          strCategory: meals[0].strCategory,
          strMealThumb: meals[0].strMealThumb,
          strInstructions: meals[0].strInstructions,
          strYoutube: meals[0].strYoutube,
        });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Header />
      <Grid xs={12} xl={12} className={classes.contentContainer}>
        <img src={meal?.strMealThumb} className={classes.contentImage} />
        <Grid item xs={12} className={classes.content}>
          <Typography className={classes.contentName}>
            {meal?.strMeal}
          </Typography>
          <Typography className={classes.contentCategory}>
            Category: {meal?.strCategory}
          </Typography>
          <div className={classes.instructionsContainer}>
            <Typography className={classes.instructionsTitle}>
              Instructions
            </Typography>
            <Typography className={classes.contentInstructions}>
              {meal?.strInstructions}
            </Typography>
          </div>
          <div className={classes.buttonContainer}>
            <Button>See the video</Button>
            {/* <Link href={meal?.strYoutube}>See the video</Link> */}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFCF99',
      width: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      padding: 20,
      borderRadius: 20,
    },
    contentImage: {
      width: '100%',
      height: '100vh',
      [theme.breakpoints.down('sm')]: {
        height: 300,
        width: '100%',
      },
    },
    contentName: {
      flexGrow: 1,
      fontSize: 36,
      color: '#721121',
    },
    contentCategory: {
      flexGrow: 1,
      marginTop: 10,
    },
    instructionsContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    instructionsTitle: {
      flexGrow: 1,
      fontSize: 24,
      margin: 10,
    },
    contentInstructions: {
      flexGrow: 1,
      textAlign: 'justify',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 10,
    },
  })
);
