<template>
    <div>
        <button @click="changeCnt(2)">증가</button>
        <button @click="changeCnt(-2)" style="margin-left: 10px;">감소</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex"
    export default {
        methods : {
            ...mapActions(['changeCnt'])
        }
    }
</script>

<style lang="stylus" scoped>

</style>