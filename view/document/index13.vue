<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>列表查询页面</h1>
        <h2>概述</h2>

        <h3>一个完整的列表查询页面，分为头部查询模块、功能按钮模块、和table列表模块。也可以没有头部查询模块，或者功能按钮模块。</h3>

        <div class="content">
            <Button type="primary" style="margin-bottom:20px" @click="click">查看示例页面</Button>
            <img style="width:100%;" :src="list" alt="查询页面">
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
                list: require('@assets/images/list.png'), 

            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{
            click:function(){
                this.$router.push({path:'/page1'});
            }
        }
    }
</script>

