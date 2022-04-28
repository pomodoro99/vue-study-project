<template>
    <div id="panel">
        <p>현재 카운터의 값 : {{formatCnt}}</p>
        <p>현재 사용자의 이름 : {{name}}</p>
        <p>현재 사용자의 이름 : {{$store.state.auth.name}}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        computed: {
            ...mapGetters(['formatCnt']),
            ...mapGetters('auth' , ['name'])
        },
    }
</script>

<style>
    #panel {
        margin-bottom: 20px;
    }
</style>