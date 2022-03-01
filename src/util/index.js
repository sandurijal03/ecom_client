import { setAuthToken } from './setAuthToken';

const isDevelopment = window.location.hostname.includes('localhost');

const getServer = () => {
  return isDevelopment ? 'http://localhost:8848' : '';
};

export { getServer, setAuthToken };
