import axios from 'axios';
import qs from 'querystring';

export const createActivity = payload => axios.post('/Activity/api/activity', qs.stringify(payload), {
    headers: {
        'Content-type': 'application/x-www-form-urlencoded',
    }
});