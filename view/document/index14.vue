<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>表单页面布局</h1>
        <h2>概述</h2>

        <p>1、所有的新增、编辑、或其它表单的操作页面。统一采用侧栏的展现形式，从系统右侧弹出。</p>
        <p>2、表单页面，使用栅格布局。等比例排列（注：总栅格数为24）。</p> 
        <p>3、字段少的页面一列排版（注：24x24x24）。</p>
        <p>4、字段多的页面，可多列布局，最多三列（注：即8x8x8）。</p>
        <p>5、侧栏宽度默认屏幕的50%，增加拖拽功能，可调整侧栏宽度。</p>
        <p>6、侧栏功能按钮，位于侧栏底部。</p>
        <p>7、侧栏右上角提供关闭侧栏功能。点击空白处，也可关闭侧栏。</p>
    
    
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

