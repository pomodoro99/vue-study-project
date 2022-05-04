<template>
    <div>
        <p>회원가입</p>
        <p>ID : <input type="text" v-model="id"></p>
        <p>PW : <input type="password" v-model="pwd"></p>
        <p>이름 : <input type="text" v-model="name"></p>
        <button @click="signUp">가입</button>
    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data : () => ({
            id : '',
            pwd : '',
            name : ''
        }),

        methods : {
            signUp() {
                axios.post('https://api.devcury.kr/auth/user/new', {
                    id : this.id,
                    pwd : this.pwd,
                    name : this.name
                }).then(response => {   
                    if(response.status === 201){
                        alert('회원가입 성공');
                    }
                }).catch(error=>{
                    alert(error.response.data.error);
                });
            }
        }
    }
</script>

<style scoped>

</style>