import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { useLocation } from 'react-router-dom';

import api from '../../services/api';

interface IProps {
  name: string;
}

const Meals: React.FC = () => {
  const location = useLocation<IProps>();

  // const nameCategory = location.state;

  useEffect(() => {
    fetchMeals();
    console.log(location.state.name);
  }, []);

  const fetchMeals = async () => {
    try {
      api.get(`/filter.php?c=${location.state.name}`).then((response) => {
        console.log(response);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <h1>Lista de Comidas</h1>
    </div>
  );
};

export default Meals;
