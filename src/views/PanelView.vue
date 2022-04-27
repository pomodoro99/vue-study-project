<template>
    <div id="panel">
        현재 카운터의 값 : {{formatCnt}}
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        computed: {
            ...mapGetters(['formatCnt'])
            
            // formatCnt() {
            //     return this.$store.getters.formatCnt // store getters의 값을 가져왔다.
            // }
        },
    }
</script>

<style>
    #panel {
        margin-bottom: 20px;
    }
</style>