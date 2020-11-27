import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import CardCategory from '../../components/CardCategory';

import api from '../../services/api';

interface ICategory {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

const Home: React.FC = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      await api.get('/categories.php').then((response) => {
        const { data } = response;
        setCategories(data.categories);
      });
    } catch (error) {
      alert(error.message);
    }
  };

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
              Seja bem-vindo!
            </Typography>
            <Typography className={classes.welcomeSubtitleText}>
              Escolha suas receitas por categoria
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
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 10,
              }}
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
  },
  container: {
    backgroundColor: '#FFCF99',
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
  },
  welcomeSubtitleText: {
    flexGrow: 1,
    fontSize: 24,
    textAlign: 'center',
  },
});
