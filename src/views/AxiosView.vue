<template>
    <div>
        <input type="text" v-model="search" @keyup.enter="callData">
        <button @click="callData">검색</button>

        <table>
            <tr>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tr v-for="(item, index) in list" :key="index">
                <td>
                    <a :href="item.url" target='_blank'>
                        <span v-html="item.title"></span>
                    </a>
                </td>
                <td>
                    <span v-html="item.contents"></span>
                </td>
            </tr>
        </table>

    </div>
</template>

<script>

    export default {

        data : ()=> ({
            search : '',

            list : []
        }),

        methods : {
            callData(){
                
            },


        }
    }
</script>

<style scoped>

</style>