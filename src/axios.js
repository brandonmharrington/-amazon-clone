import axios from 'axios';

const instance = axios.create({
  // API URL (cloud function)
  baseURL: 'https://us-central1-clone-ca8c8.cloudfunctions.net/api',
  // 'http://localhost:5001/clone-ca8c8/us-central1/api',
});

export default instance;
