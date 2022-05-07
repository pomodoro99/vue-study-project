<template>
  <div>

  </div>
</template>

<script>
export default {
  created () {
    let myFirstPromise = new Promise((resolve, reject) => {
      //비동기 작업이 성공한 경우 resolve, 실패한 경우 reject 호출
      try {
        setTimeout(function () {
          resolve("성공!")
        }, 3000)
      } catch (error) {
        reject(error)
      }

    });

    myFirstPromise.then(message => {
      console.log(message);
    }).catch(error => {
      console.error(error)
    })
  }
}
</script>

<style scoped>
</style>