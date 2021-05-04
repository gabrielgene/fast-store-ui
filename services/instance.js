import axios from 'axios';
import { SERVER_URI } from '~/apollo/client';

const strapiInstance = axios.create({
  baseURL: SERVER_URI,
});

strapiInstance.defaults.timeout = 30000;

export default strapiInstance;
