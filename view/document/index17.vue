<style lang="scss">
    @import './index.scss';

    .message{
        button{
            margin-right: 16px;
        }
    }
</style>
<template>
    <div class="document-page-html">
        <h1>全局提示</h1>
        <h2>概述</h2>

        <h3>1、提供成功、警告、错误三种全局提示。</h3>
        <h3>2、每种提示，都带有手动关闭的按钮。</h3>
        <h3>3、若用户没有手动关闭提示，10s后提示自动关闭。</h3>
        <h3>4、全局提示应显示在页面的最高层级上，并且居中显示。</h3>


        <div class="content message">
            <Button @click="background('info')" type="primary">显示普通提示</Button>
            <Button @click="background('success')" type="success">显示成功提示</Button>
            <Button @click="background('warning')" type="warning">显示警告提示</Button>
            <Button @click="background('error')" type="error">显示错误提示</Button>
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
            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods: {
            background (type) {
                this.$Message[type]({
                    background: true,
                    transfer:true,
                    duration: 3,
                    closable: true,
                    content: '这是一条带背景色的通知'
                });
            }
        }
    }
</script>

