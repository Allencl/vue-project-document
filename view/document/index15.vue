<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>文件预览</h1>
        <h2>概述</h2>

        <h3>平台的文件预览系统，通过新开一个浏览器窗口，直接用浏览器的文件预览功能，完成文件的预览。</h3>
        <h3>现在浏览器支持预览的文件类型很多。常用的有：gif、png、jpg、webp、pdf、txt、等。</h3>

        <div class="content">
             <Button type="primary" style="margin-bottom:20px" @click="click">打开预览页面</Button>
            <img style="width:100%;" :src="preview" alt="预览页面">
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
                preview: require('@assets/images/preview.png'), 

            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{
            click:function(){
                window.open("http://182.168.1.221/preview.pdf");     
                // this.$router.push({path:'/ppp'});
            }
        }
    }
</script>

