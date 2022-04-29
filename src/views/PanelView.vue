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
        },
    }
</script>