<template>
  <div>
    <input
      type="text"
      v-model="search"
      @keyup.enter="callData"
    >
    <button @click="callData">검색</button>

    <table>
      <tr>
        <th>제목</th>
        <th>내용</th>
      </tr>
      <tr
        v-for="(item, index) in list"
        :key="index"
      >
        <td>
          <!-- <a
            :href="item.url"
            target='_blank'
          > -->
          <!-- <span v-html="item.title"></span> -->
          <!--v-html : xss 보안 취약점 고려하기-->
          <span>{{item.display_sitename}}</span>
          <!-- </a> -->
        </td>
        <td>
          <!-- <span v-html="item.image_url"></span> -->
          <img
            :src="item.image_url"
            width="100"
            heigh="100"
          >{{item.image_url}}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import axios from "axios";
//const REST_API_KEY = '8552cb275b50dc6962b9db31a11d429e'

export default {

  data: () => ({
    search: '',

    list: []
  }),

  methods: {
    callData () {
      axios.get(`https://dapi.kakao.com/v2/search/image?query=${this.search}`, {      //axios의 결과가  promise이다
        headers: {
          //Authorization: `KakaoAK ${REST_API_KEY}`
          Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}` //.env.local에서 가져옴 이름이 VUE_APP_으로 시작해야 함.
        }
      }).then(response => {
        console.log(response)
        this.list = response.data.documents;
      }).catch(error => {
        console.error(error)
      })
    },


  }
}
</script>

<style scoped>
</style>