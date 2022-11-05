<template>
    <div class="home_head">
        头部
        <div class="out" @click="quite">退出</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            quite(){
                localStorage.removeItem('user')
                this.$router.go(0)
            }
        },
    }
</script>

<style lang="less" scoped>
    .home_head{
        display: flex;
        justify-content: space-between;
        .out{
            cursor: pointer;

        }
    }
</style>