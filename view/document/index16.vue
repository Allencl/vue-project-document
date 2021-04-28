<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>404页面</h1>
        <h2>概述</h2>

        <h3>404页面是网页设计中必不可少的一部分，良好的404页面，能够提供良好的用户体验，让你的产品更友好些。</h3>

        <div class="content">
             <Button type="primary" style="margin-bottom:20px" @click="click">打开404页面</Button>
            <img style="width:100%;" :src="img404" alt="404页面">
        </div>

    
    </div>
</template>
<script>
    /**
     * 颜色
     */
    export default {
        data () {
            return {
                img404: require('@assets/images/404.png'), 

            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{
            click:function(){
                this.$router.push({path:'/ppp'});
            }
        }
    }
</script>

