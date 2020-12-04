const BASE_URL = 'http://kr-users-dev.vsan-apps.playcourt.id/api/user/v1';
const BASE_URL_DOCUMENTS = 'http://kr-document-api-dev.vsan-apps.playcourt.id/api/document/v1';

import { AUTH_USER, AUTH_PASS } from './index';

const axiosOptions = ({ method, url, data }) => ({
  method: method,
  url: url,
  data,
  auth: {
    username: AUTH_USER,
    password: AUTH_PASS
  }
});

const axiosOptionsToken = ({ method, url, data, token }) => ({
  method: method,
  url: url,
  data,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ token
  },
});

const services = {
  DUMMY_API: `${BASE_URL_DOCUMENTS}/documents/get-by-uploader`,

  axiosOptions,
  axiosOptionsToken
};

export default services;
