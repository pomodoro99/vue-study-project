<template>
    <div>
        <button @click="changeCnt(1)">증가</button>
        <button @click="changeCnt(-1)" style="margin-left: 10px;">감소</button>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        methods : {
            ...mapMutations(['changeCnt'])
        }
    }
</script>

<style lang="stylus" scoped>

</style>