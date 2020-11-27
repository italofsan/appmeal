import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import CardCategory from '../../components/CardCategory';

import loadingImage from '../../assets/loading.gif';
import api from '../../services/api';

interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

const Home: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    setLoading(true);
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      await api.get('/categories.php').then((response) => {
        const { data } = response;
        setCategories(data.categories);
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
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className={classes.welcomeTitle}>
            <Typography className={classes.welcomeTitleText}>
              Welcome!
            </Typography>
            <Typography className={classes.welcomeSubtitleText}>
              Choose your recipes by category
            </Typography>
          </div>
        </Grid>
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
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Header />
        <Grid
          item
          xl={12}
          xs={12}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className={classes.welcomeTitle}>
            <Typography className={classes.welcomeTitleText}>
              Welcome!
            </Typography>
            <Typography className={classes.welcomeSubtitleText}>
              Choose your recipes by category
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
          {categories.map((category: ICategory) => (
            <Grid
              item
              xs={12}
              lg={6}
              md={6}
              xl={6}
              className={classes.card}
              key={category.idCategory}
            >
              <CardCategory
                key={category.idCategory}
                id={category.idCategory}
                name={category.strCategory}
                description={category.strCategoryDescription}
                thumb={category.strCategoryThumb}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFCF99',
  },
  container: {
    height: '100%',
  },
  welcomeTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTitleText: {
    flexGrow: 1,
    fontSize: 48,
    textAlign: 'center',
  },
  welcomeSubtitleText: {
    flexGrow: 1,
    fontSize: 24,
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
});
