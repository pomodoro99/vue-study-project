<template>
    <div>
        동기적 실행의 예
    </div>
</template>

<script>
    export default {
        created() {
            //순서대로 출력된다.
            console.log(1);
            console.log(2);
            console.log(3);
            console.log(4);
            console.log(5);
            console.log(6);
            console.log(7);
        }
    }
</script>

<style scoped>

</style>