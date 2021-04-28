<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>基础组件-标签页</h1>
        <h2>概述</h2>
        <h3>标签页常用于平级区域大块内容的收纳和展现。在一些复杂的页面，使用标签页来区分不同模块，可提升页面操作的清晰性。</h3>
        <div class="content" style="margin-top:30px">
            <Tabs value="name1">
                <TabPane label="页面一" name="name1">页面一的内容</TabPane>
                <TabPane label="页面二" name="name2">页面二的内容</TabPane>
                <TabPane label="页面三" name="name3">页面三的内容</TabPane>
            </Tabs>


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

