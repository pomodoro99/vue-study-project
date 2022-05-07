<template>
  <div>
    <p>회원삭제</p>
    <p>토큰 : <input
        type="text"
        v-model="token"
      ></p>

    <button @click="delUser">회원삭제</button>
    {{token}}
  </div>
</template>

<script>
import axios from "axios"
export default {

  data: () => ({
    id: '',
    pwd: '',
    token: ''
  }),
  methods: {
    delUser () {
      if (!confirm("정말 삭제하시겠습니까?")) {
        return false;
      }

      axios.delete('https://api.devcury.kr/api/auth/user', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).then(response => {
        //console.log(response.data)
        if (response.status === 200) {
          alert('삭제 성공');

        }
      }).catch(error => {
        alert(error.response.data.error);
      });
    }
  }
}
</script>

<style scoped>
</style>