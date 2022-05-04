<template>
  <div>
    비동기적 실행의 예
  </div>
</template>

<script>

export default {

  created() {

    // 순서가 보장되지 않는다.
    setTimeout(()=> {
      console.log(1);
    }, this.getRandomMilis());

    setTimeout(()=> {
      console.log(2);
    }, this.getRandomMilis());

    setTimeout(()=> {
      console.log(3);
    }, this.getRandomMilis());

    setTimeout(()=> {
      console.log(4);
    }, this.getRandomMilis());

  },

  methods: {
    getRandomMilis(){
      return Math.ceil(Math.random() * 5000);
    }
  },

  

}
</script>
