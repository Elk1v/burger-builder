import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://burger-builder-58017.firebaseio.com/',
});

export default instance;
