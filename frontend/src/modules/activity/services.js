import axios from 'axios';
import qs from 'querystring';
  
export const fetchActivity = id => axios.get('/Activity/api/activity', { params: { id } });

export const joinActivity = payload => axios.post('/Activity/api/participate', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const comment = payload => axios.post('/Activity/api/comment', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
