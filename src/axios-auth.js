import axios from 'axios'

const instance = axios.create({
  baseURL: "https://vuejs-udemy-axios-d6bf5.firebaseio.com"
});

instance.defaults.headers.common['SOMETHING']='something'

export default instance

