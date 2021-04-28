<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>Table 表格</h1>
        <h2>概述</h2>
        <h3>1、表格有带分页，和不带分页的应用场景。</h3>
        <h3>2、提供上一页、下一页、每页条数、跳至第几页的功能。</h3>
        <h3>3、数据默认居中显示，金额靠右显示。</h3>
        <h3>4、超长文字自动换行。</h3>
        <h3>5、超链接文本，移入时显示点击手势 ，字体蓝色。</h3>
        <h3>6、带有按钮的行数据，选用小号按钮，可参考按钮章节。</h3>
        <h3>7、数据显示使用斑马线，区分单、双数行。</h3>
        <h3>8、移入行时，改变行背景色。</h3>
        <h3>9、带有数据操作的Table，第一列加入Checkbox框。</h3>

        <div class="content">
            <wisTable
                :data1="data"
                :columns="columns"
            >    
            </wisTable>        
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
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '地址',
                        key: 'name'
                    },
                    {
                        title: '金额',
                        key: 'num',
                        align:"right"
                    },
                    {
                        title: '网站',
                        key: 'http',
                        render: (h, params) => {
                            return h('a', 'www.baidu.com');
                        }
                    },
                    {
                        title: '操作',
                        key: 'active',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type:"error",
                                        size:"small"
                                    },
                                },'删除'),
                            ]);
                        }
                    }
                ],   
                
                data:[
                    {
                        name:"上海市普陀区云岭东路235号上海跨国采购中心3号楼13A层",
                        num:'200,878',
                        http:"www.baidu.com"
                    },
                    {
                        name:"北京市",
                        num:'911,267',
                        http:"www.baidu.com"
                    },
                    {
                        name:"南京市",
                        num:'820,922',
                        http:"www.baidu.com"
                    }
                ]
            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{

        }
    }
</script>

