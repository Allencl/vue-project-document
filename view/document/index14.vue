<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>表单页面布局</h1>
        <h2>概述</h2>

        <h3>1、所有的新增、编辑、或其它表单的操作页面。统一采用侧栏的展现形式，从系统右侧弹出。</h3>
        <h3>2、表单页面，使用栅格布局。等比例排列（注：总栅格数为24）。</h3> 
        <h3>3、字段少的页面一列排版（注：24x24x24）。</h3>
        <h3>4、字段多的页面，可多列布局，最多三列（注：即8x8x8）。</h3>
        <h3>5、侧栏宽度默认屏幕的50%，增加拖拽功能，可调整侧栏宽度。</h3>
        <h3>6、侧栏功能按钮，位于侧栏底部。</h3>
        <h3>7、侧栏右上角提供关闭侧栏功能。点击空白处，也可关闭侧栏。</h3>

        <div class="content">
            <Button type="primary" style="margin-right:16px" @click="editHandle('add')">少字段表单示例</Button>
            <Button type="primary" @click="editHandle2('add')">多字段表单示例</Button>

        </div>   

        <EditPage 
            v-model="showPage"
            @submit="submitHandle"
        />

        <EditPage2 
            v-model="showPage2"
            @submit="submitHandle2"
        />

    
    </div>
</template>
<script>
    import EditPage from './edit.vue';  // 新增|编辑
    import EditPage2 from './edit2.vue';  // 新增|编辑


    export default {
        components: { 
            EditPage,
            EditPage2      
        },         
        data () {
            return {
                showPage:false,  // 显示编辑页面
                showPage2:false,  // 显示编辑页面


            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{
            /**
             * 新增 |编辑
             */
            editHandle: function(){
                this.showPage=true;
            },
            editHandle2: function(){
                this.showPage2=true;
            },
        }
    }
</script>

