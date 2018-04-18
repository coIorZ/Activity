import axios from 'axios';
import qs from 'querystring';
  
export const fetchActivity = activityId => axios.get('/Activity/api/activity', { params: { id: activityId } });

export const joinActivity = payload => axios.post('/Activity/api/participate', qs.stringify(payload), {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
});

export const comment = payload => axios.post('/Activity/api/comment', qs.stringify(payload), {
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  },
});
