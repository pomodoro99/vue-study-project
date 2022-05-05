import axios from "axios";

export default {

    methods : {
        async $api(url, method, data, token, errorCallback) {

            return axios({
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: method
                , url
                , data
            }).catch(e => {
                if(errorCallback){
                    errorCallback(e.response);
                } else if(e.response?.data?.error){
                    alert(e.response.data.error);
                } else {
                    console.error(e);
                }
            });
            
        }
    }

}