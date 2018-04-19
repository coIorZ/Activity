import axios from 'axios';

export const searchActivities = term => axios.get('/Activity/api/search', { params: { term } });
