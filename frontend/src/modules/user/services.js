import axios from 'axios';
import qs from 'querystring';
import md5 from 'md5';

export const fetchUser = id => axios.get('/Activity/api/user', { params: { id } });

export const changePassword = payload => {
  payload.password = md5(payload.password);
  payload.newpassword = md5(payload.newpassword);
  return axios.post('/Activity/api/change', qs.stringify(payload), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

export const updateParticle = payload => axios.post('/Activity/api/info', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
