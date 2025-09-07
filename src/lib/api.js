import axios from 'axios';
import { mockCompany } from '../data/mockDataCompany.js';

const api = axios.create({ baseURL: '/api', timeout: 10000 });
// Example wrapper
const fetchCompany = async (params = {}) => {
// replace with real endpoint
// return api.get('/company', { params }).then(r => r.data);
// mock for demo
await new Promise(r => setTimeout(r, 250));
return {
data: mockCompany,
meta: { total: mockCompany.length }
};
};