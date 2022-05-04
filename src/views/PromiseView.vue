<template>
    <div>
        Promise의 예제
    </div>
</template>

<script>
    export default {

        data : () => ({
            cnt : 0
        }),

        created() {
            // promise의 chain을 구성하기 전
            // this.wrapPromise(this.createSetTimeOutFn);
            // this.wrapPromise(this.createSetTimeOutFn);
            // this.wrapPromise(this.createSetTimeOutFn);
            // this.wrapPromise(this.createSetTimeOutFn);

            // promise의 chain을 구성한 후 (이렇게 계속 then then then 이 되는 현상을 callback 지옥이라고 한다.)
            this.wrapPromise(this.createSetTimeOutFn)
                .then(() => {
                    this.wrapPromise(this.createSetTimeOutFn)
                        .then(()=> {
                            this.wrapPromise(this.createSetTimeOutFn)
                                .then(()=>{
                                    this.wrapPromise(this.createSetTimeOutFn);
                                });
                        });
                });
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