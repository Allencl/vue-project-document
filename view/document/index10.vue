<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>表单组件-文件上传</h1>
        <h2>概述</h2>
        <h3>上传文件方式，可通过选择文件或者拖拽文件到上传区域，完成上传。可支持限定上传的文件的大小、类型，以及数量。</h3>
        <h3>上传形式，采用前端form表单缓存。所有上传的文件，先缓存在浏览器里面，再点击保存按钮，统一上传到数据库。</h3>

        <div class="content">
            <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Click or drag files here to upload</p>
                </div>
            </Upload>
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
        methods:{

        }
    }
</script>

