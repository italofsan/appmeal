import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

interface IProps {
  mealsPerPage: number;
  totalMeals: number;
  paginate: {
    (pageNumber: number): void;
  };
}

const ListPages: React.FC<IProps> = ({
  mealsPerPage,
  totalMeals,
  paginate,
}) => {
  const classes = useStyles();
  const pageNumbers = [];
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    paginate(value);
    setPage(value);
  };

  for (let i = 1; i <= Math.ceil(totalMeals / mealsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid item xl={12} xs={12} className={classes.paginationContainer}>
      <Pagination
        count={Math.ceil(totalMeals / mealsPerPage)}
        color='secondary'
        page={page}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default ListPages;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
  })
);
