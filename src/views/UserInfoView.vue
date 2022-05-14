<template>
    <div>
        <p>아이디 : {{id}}</p>
        <p>이름 : {{name}}</p>
    </div>
</template>

<script>
    import axios from "axios"
    import { mapGetters } from "vuex"

    export default {
        data : () => ({
            id : '',
            name : ''
        }),

        methods : {
            async callUser(){
                const response = await axios.get('https://api.devcury.kr/api/auth/user', {
                    headers : {
                        Authorization : `Bearer ${this.token}`
                    }
                });
                this.id = response.data.id;
                this.name = response.data.name;
            }
        },

        created() {
            this.callUser();
        },

        computed : {
            ...mapGetters(['token'])
        }
    }
</script>

<style scoped>

</style>