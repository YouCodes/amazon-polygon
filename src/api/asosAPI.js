/* eslint-disable consistent-return */
import axios from 'axios';

export const getProducts = async() => {
  try {
    const { data: { data } } = await axios.get(`https://asos2.p.rapidapi.com/products/v2/list`, {
   params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'asos2.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
