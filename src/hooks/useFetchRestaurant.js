import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchRestaurant = () => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRestaurant = async () => {
      await axios
        .get('https://strapi-eemi-home.herokuapp.com/restaurants')
        .then(res => {
          setData(res.data);
          setLoad(true);
          //console.log(data);
        })
        .catch(err => {
          setError(err.message);
          setLoad(true);
        });
    };
    fetchRestaurant();
  }, []);

  return [data, load, error];
};
export default useFetchRestaurant;
