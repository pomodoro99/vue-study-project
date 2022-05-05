<template>
  <div id="app">
    <ModalVue :on="true">
      <template v-slot:title>slot 활용 제목입니다.</template>
      <template #sub-title>부제목입니다.</template>
      <template>
        <div> 
          <span>이름을 입력하세요 : </span><input type="text">
        </div>
      </template>
    </ModalVue>
  </div>
</template>

<script>
import ModalVue from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    ModalVue
  }
}
</script>

<style>

</style>
