<template>
    <div>
        <p>로그인</p>
        <p>ID : <input type="text" v-model="id"></p>
        <p>PW : <input type="password" v-model="pwd"></p>
        <button @click="login">로그인하여 토큰 발급</button>
        <p>{{token}}</p>
    </div>
</template>

<script>
    import axios from "axios"
    // import mixins from "@/mixins";

    export default {

        // mixins : [mixins],

        data : () => ({
            id : '',
            pwd : '',
            token : ''
        }),

        methods : {
            async login(){

                const response = await this.$api('https://api.devcury.kr/auth/user', 'POST', {
                    id : this.id,
                    pwd : this.pwd
                });

                if(response.status === 200){
                    this.token = response.data.token;
                    alert('토큰 발급 성공');
                }

                // 바꾸기 전 소스
                // axios.post('https://api.devcury.kr/auth/user', {
                //     id : this.id,
                //     pwd : this.pwd
                // }).then(response => {
                //     this.token = response.data.token;
                //     alert('토큰 발급 성공');
                // }).catch(error => {
                //     alert(error.response.data.error);
                // });
            }
        }
    }
</script>

<style scoped>

</style>