import axios from 'axios';

export const fetchUser = id => axios.get('/Activity/api/user', { params: { id } });
