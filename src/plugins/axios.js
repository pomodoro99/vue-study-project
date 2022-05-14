import axios from 'axios'

axios.defaults.baseURL = 'https://dapi.kakao.com/v2/search';
axios.defaults.headers.common['Authorization'] = `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;