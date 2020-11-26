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

const Categories: React.FC = () => {
  const classes = useStyles();

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchCategories();

    return console.log(categories);
  }, []);

  const fetchCategories = async () => {
    try {
      await api.get('/categories.php').then((response) => {
        console.log(response);
        const { data } = response;
        console.log(data.categories);
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
          xl={12}
          xs={12}
          style={{
            width: '100%',
            flexWrap: 'wrap',
            display: 'flex',
          }}
        >
          {categories.map((category: ICategory, index: number) => (
            <CardCategory
              key={index}
              id={category.idCategory}
              name={category.strCategory}
              description={category.strCategoryDescription}
              thumb={category.strCategoryThumb}
            />
          ))}
          {console.log(categories)}
          {/* <Grid
            item
            xs={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <CardCategory />
          </Grid>
          <Grid
            item
            xs={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <CardCategory />
          </Grid>
          <Grid
            item
            xs={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <CardCategory />
          </Grid>
          <Grid
            item
            xs={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <CardCategory />
          </Grid>
          <Grid
            item
            xs={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <CardCategory />
          </Grid>
          <Grid
            item
            xs={6}
            xl={4}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <CardCategory />
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#e6b439',
    height: '100vh',
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

export default Categories;
