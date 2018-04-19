import axios from 'axios';

export const search = term => axios.get('/Activity/api/search', { params: { term } });

export const fetchHome = () => axios.get('/Activity/api/home');

export const createActivity = payload => {
  let data = new FormData();
  Object.keys(payload).forEach(key => {
    data.append(key, payload[key]);
  });
  return axios.post('/Activity/api/activity', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
