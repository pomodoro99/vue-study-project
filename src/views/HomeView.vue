<template>

</template>

<script>

export default {
  name: 'HomeView',

  created() {

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
      return Math.ceil(Math.random() * 10000);
    }
  },

  

}
</script>
