import axios from 'axios';

export const search = term => axios.get('/api/search', { params: { term } });
