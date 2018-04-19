import axios from 'axios';
import qs from 'querystring';

export const search = term => axios.get('/api/search', { params: { term } });

export const fetchHome = () => axios.get('/api/home');

export const createActivity = payload => axios.post('/Activity/api/activity', qs.stringify(payload), {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
