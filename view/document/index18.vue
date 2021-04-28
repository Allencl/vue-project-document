<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>Loading 提示</h1>
        <h2>概述</h2>

        <h3>1、前后端交互的数据请求。与用户操作无关的请求不显示Loading提示。与用户操作有关要全局显示Loading提示。例如：列表数据的初始化、表单页面的新增与编辑。</h3>
        <h3>2、Loading提示的蒙版，必须盖住屏幕可见的所有区域。</h3>


    
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

