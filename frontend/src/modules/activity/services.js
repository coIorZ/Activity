import axios from 'axios';
import qs from 'querystring';
  
export const fetchActivity = id => axios.get('/Activity/api/activity', { params: { id } });

export const joinActivity = payload => axios.post('/Activity/api/participate', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const quitActivity = payload => axios.post('/Activity/api/unparticipate', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const deleteActivity = id => axios.delete('/Activity/api/activity', { data: id });

export const likeActivity = payload => axios.post('/Activity/api/likeActivity', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const dislikeActivity = payload => axios.post('/Activity/api/dislikeActivity', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const comment = payload => axios.post('/Activity/api/comment', qs.stringify(payload), {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
