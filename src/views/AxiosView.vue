<template>
    <div>
        <select v-model="type">
            <option value="1">웹문서</option>
            <option value="2">이미지</option>
        </select>

        <input type="text" v-model="search" @keyup.enter="callData">
        <button @click="callData">검색</button>

        <div v-if="type == 1">
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

        <div v-else-if="type == 2">
            <table>
                <tr>
                    <th>제목</th>
                    <th>이미지</th>
                </tr>
                <tr v-for="(item, index) in list" :key="index">
                    <td>
                        <a :href="item.doc_url" target='_blank'>
                            {{item.display_sitename}}
                        </a>
                    </td>
                    <td>
                        <img :src="item.thumbnail_url">
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data : ()=> ({
            type : '1',

            search : '',

            list : []
        }),

        methods : {
            callData(){
                switch(this.type){
                    case '1' :
                        this.callWebDoc();
                        break;
                    case '2' : 
                        this.callImg();
                        break;
                }
            },

            async callWebDoc() {

                try {
                    const response = await axios.get(`https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=10&sort=recency`,{
                                                        headers: {
                                                            Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
                                                        }
                                                    });
                    
                    this.list = response.data.documents;
                } catch (error) {
                    console.error(error);
                }


                //기존 코드
                // axios.get(`https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=10&sort=recency`,{
                //     headers: {
                //         Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
                //     }
                // }).then(response=>{
                //     this.list = response.data.documents;
                // }).catch(error=>{
                //     console.error(error);
                // });
            },

            async callImg() {

                try {
                    const response = await axios.get(`https://dapi.kakao.com/v2/search/image?query=${this.search}&page=1&size=10&sort=recency`,{
                                    headers: {
                                        Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
                                    }
                                });

                    this.list = response.data.documents;
                } catch (error) {
                    console.error(error);
                }


                // axios.get(`https://dapi.kakao.com/v2/search/image?query=${this.search}&page=1&size=10&sort=recency`,{
                //     headers: {
                //         Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`
                //     }
                // }).then(response=>{
                //     this.list = response.data.documents;
                // }).catch(error=>{
                //     console.error(error);
                // });
            }


        }
    }
</script>

<style scoped>

</style>