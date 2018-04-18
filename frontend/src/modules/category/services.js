import axios from 'axios';

export const fetchActivities = category => axios.get('/Activity/api/activity', { params: { category } });
