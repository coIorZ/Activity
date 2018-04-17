import axios from 'axios';
import qs from 'querystring';
import md5 from 'md5';

export const register = payload => {
  payload.password = md5(payload.password);
  return axios.post('/Activity/api/user', qs.stringify(payload), {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  });
};
