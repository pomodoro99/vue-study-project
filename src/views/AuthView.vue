<template>
    <div style="margin-top: 20px;">
        <input type="text" placeholder="이름을 입력하세요." @input="$store.dispatch('auth/setName', $event.target.value)">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>