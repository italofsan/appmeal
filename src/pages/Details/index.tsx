import React, { useState, useEffect } from 'react';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';

import loadingImage from '../../assets/loading.gif';
import api from '../../services/api';

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <Grid
          item
          xl={12}
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={loadingImage} alt='Loading Image' />
        </Grid>
      </>
    );
  }

  return (
    <>
      <Header />
      <Grid item xs={12} xl={12} className={classes.contentContainer}>
        <img
          src={meal?.strMealThumb}
          className={classes.contentImage}
          alt={meal?.strMeal}
        />
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
            <div className={classes.contentInstructionsContainer}>
              <Typography className={classes.contentInstructions}>
                {meal?.strInstructions}
              </Typography>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button variant='outlined' color='secondary' size='small'>
              <Link href={meal?.strYoutube} target='_blank' underline='none'>
                <Typography className={classes.buttonText}>
                  See the video
                </Typography>
              </Link>
            </Button>
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
      height: '65vh',
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        height: 300,
        width: '100%',
        borderRadius: 0,
      },
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
    contentInstructionsContainer: {
      overflow: 'auto',
      height: '30vh',
    },
    contentInstructions: {
      textAlign: 'justify',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 10,
    },
    buttonText: {
      color: '#000',
      fontSize: 12,
    },
  })
);
