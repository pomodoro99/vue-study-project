<template>
    <div id="panel">
        현재 카운터의 값 : {{count}}
    </div>
</template>

<script>
    import { mapState } from "vuex" // mapState 활용을 위하여 추가됨.

    export default {
        computed: {

            ...mapState(['count']) // mapState 를 활용한 선언


            // 해당 count coumputed 값을 주석처리
            // count() {
            //     return this.$store.state.count // store의 count값을 가져옴.
            // }
        },
    }
</script>

<style>
    #panel {
        margin-bottom: 20px;
    }
</style>