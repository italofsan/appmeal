import React, { useEffect } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

interface IProps {
  name: string;
}

const Meals: React.FC<IProps> = ({ name }) => {
  useEffect(() => {
    fetchMeals();
    console.log(name);
  }, []);

  const fetchMeals = async () => {
    try {
      api.get(`/filter.php?c=${name}`).then((response) => {
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
