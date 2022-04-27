<template>
    <div style="margin-top: 20px;">
        <input type="text" placeholder="이름을 입력하세요." @input="test">
    </div>
</template>

<script>
    export default {    

        methods : {
            test(event){
                this.$store.dispatch('auth/setName', event.target.value);
            }
        }
        
    }
</script>

<style>

</style>