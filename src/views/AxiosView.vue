<template>
    <div>
        <input type="text" v-model="search" @keyup.enter="callData">
        <button @click="callData">검색</button>

        <table>
            <tr>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tr v-for="(item, index) in list" :key="index">
                <td>
                    <a :href="item.url" target='_blank'>
                        <span v-html="item.title"></span>
                    </a>
                </td>
                <td>
                    <span v-html="item.contents"></span>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data : ()=> ({
            search : '',

            list : []
        }),

        methods : {
            callData(){
                axios.get(`https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=10&sort=recency`,{
                    headers: {
                        Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
                    }
                }).then(response=>{
                    console.log(response);
                    this.list = response.data.documents;
                }).catch(error=>{
                    console.error(error);
                });
            },


        }
    }
</script>

<style scoped>

</style>