<template>
    <div>
        <button @click="increase">증가</button>
        <button @click="decrease" style="margin-left: 10px;">감소</button>
    </div>
</template>

<script>
    export default {
        methods : {
            increase() {
                this.$store.state.count++; // store에 있는 값을 증가 시켜준다.
            },

            decrease() {
                this.$store.state.count--; // store에 있는 값을 감소 시켜준다.
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>