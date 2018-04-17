import axios from 'axios';

export const fetchActivities = category => axios.get('api/activity', { params: { category } });
