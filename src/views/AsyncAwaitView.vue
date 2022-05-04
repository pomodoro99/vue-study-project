<template>
    <div>
        async & await
    </div>
</template>

<script>
    export default {

        data : () => ({
            cnt : 0
        }),

        async created() {
            // async await를 적용한 예
            await this.wrapPromise(this.createSetTimeOutFn);
            await this.wrapPromise(this.createSetTimeOutFn);
            await this.wrapPromise(this.createSetTimeOutFn);
            await this.wrapPromise(this.createSetTimeOutFn);
        },

        methods : { 

            createSetTimeOutFn(resolve, number){
                setTimeout(()=> {
                    console.log(number);
                    resolve();
                }, this.getRandomMilis());
            },

            wrapPromise(fn){
                return new Promise((resolve, reject)=>{
                    try {
                        fn(resolve, ++this.cnt);
                    } catch (error) {
                        reject();
                    }
                });
            },

            getRandomMilis(){
                return Math.ceil(Math.random() * 3000);
            }
        }
    }
</script>

<style scoped>

</style>