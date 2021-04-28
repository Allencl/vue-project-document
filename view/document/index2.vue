<style lang="scss">
    @import './index.scss';

</style>
<template>
    <div class="document-page-html">
        <h1>字体</h1>
        <h2>概述</h2>
        <h3>wis-ui对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。</h3>
        <h3>我们推荐macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。</h3>
        <h2>中文字体</h2>
        <div class="document-page-html">
            <img width="100%" :src="font1" alt="中文字体">
        </div>

        <h2>英文字体</h2>
        <div class="document-page-html">
            <img width="100%" :src="font2" alt="英文字体">
        </div>        


        <h2>字体代码</h2>
        <div class="document-page-html">
            <div
                style="background:#f7f7f7;padding:15px;"
            >
                <span>
                    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                </span>
            </div>
        </div>          

        <h2>中文字体使用规范</h2>
        <div class="document-page-html">
            <Table highlight-row ref="currentRowTable" :columns="columns1" :data="data1"></Table>
        </div>



        <h2>英文字体使用规范</h2>
        <div class="document-page-html">
            <Table highlight-row ref="currentRowTable" :columns="columns2" :data="data2"></Table>
        </div>    
    </div>
</template>
<script>
    /**
     * 按钮
     */
    export default {
        data () {
            return {
                font1: require('@assets/images/font1.png'), 
                font2: require('@assets/images/font2.png'), 


                columns1: [
                    {
                        title: '中文字体',
                        key: 'font'
                    },
                    {
                        title: '示例',
                        key: 'example',
                        render: (h, params) => {
                            var json={};
                            switch (params["index"]) {
                                case 0:
                                    json={
                                        color: 'rgb(70, 76, 91)',
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }
                                    break;
                                case 1:
                                    json={
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: 'rgb(70, 76, 91)'
                                    }
                                    break;
                                case 2:
                                    json={
                                        color: 'rgb(70, 76, 91)',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }
                                    break;     
                                case 3:
                                    json={
                                        color: 'rgb(101, 113, 128)',
                                        fontSize: '12px',
                                    }
                                    break;  
                                case 4:
                                    json={
                                        color: 'rgb(158, 167, 180)',
                                        fontSize: '12px',
                                    }
                                    break;  
                                case 5:
                                    json={
                                        color: 'rgb(195, 203, 214)',
                                        fontSize: '12px',
                                    }
                                    break;  
                                case 6:
                                    json={
                                        cursor: 'pointer',
                                        color: '#2b85e4',
                                        fontSize: '12px',
                                    }
                                    break;                                                                                                              
                                    
                                default:
                                    break;
                            }

                            return h('div',{
                                style:json
                            },params.row[params.column.key]);
                        }
                    },
                    {
                        title: '粗细',
                        key: 'weight'
                    },
                    {
                        title: '颜色',
                        key: 'color'
                    },
                    {
                        title: '字号',
                        key: 'size'
                    }
                ],
                data1: [
                    {
                        font: '主标题',
                        example: '我是标题',
                        weight: '加粗',
                        color: '#464c5b',
                        size:'16px',
                    },
                    {
                        font: '次级标题',
                        example: '我是标题',
                        weight: '加粗',
                        color: '#464c5b',
                        size:'14px',
                    },
                    {
                        font: '小标题',
                        example: '我是标题',
                        weight: '加粗',
                        color: '#464c5b',
                        size:'12px',
                    },    
                    {
                        font: '正文',
                        example: '我是正文',
                        weight: '默认',
                        color: '#657180',
                        size:'12px',
                    },     
                    {
                        font: '辅助文字',
                        example: '我是辅助文字',
                        weight: '默认',
                        color: '#9ea7b4',
                        size:'12px',
                    },  
                    {
                        font: '失效文字',
                        example: '我是失效文字',
                        weight: '默认',
                        color: '#c3cbd6',
                        size:'12px',
                    }, 
                    {
                        font: '链接文字',
                        example: '我是链接文字',
                        weight: '默认',
                        color: '#3399ff',
                        size:'12px',
                    },                                                                                              
                ],

                columns2: [
                    {
                        title: '英文字体',
                        key: 'font'
                    },
                    {
                        title: '示例',
                        key: 'example',
                        width:200,
                        render: (h, params) => {
                            var json={};
                            switch (params["index"]) {
                                case 0:
                                    json={
                                        color: 'rgb(70, 76, 91)',
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }
                                    break;
                                case 1:
                                    json={
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: 'rgb(70, 76, 91)'
                                    }
                                    break;
                                case 2:
                                    json={
                                        color: 'rgb(70, 76, 91)',
                                        fontSize: '12px',
                                        fontWeight: 'bold'
                                    }
                                    break;     
                                case 3:
                                    json={
                                        color: 'rgb(101, 113, 128)',
                                        fontSize: '12px',
                                    }
                                    break;  
                                case 4:
                                    json={
                                        color: 'rgb(158, 167, 180)',
                                        fontSize: '12px',
                                    }
                                    break;  
                                case 5:
                                    json={
                                        color: 'rgb(195, 203, 214)',
                                        fontSize: '12px',
                                    }
                                    break;  
                                case 6:
                                    json={
                                        cursor: 'pointer',
                                        color: '#2b85e4',
                                        fontSize: '12px',
                                    }
                                    break;                                                                                                              
                                    
                                default:
                                    break;
                            }

                            return h('div',{
                                style:json
                            },params.row[params.column.key]);
                        }
                    },
                    {
                        title: '粗细',
                        key: 'weight'
                    },
                    {
                        title: '颜色',
                        key: 'color'
                    },
                    {
                        title: '字号',
                        key: 'size'
                    }
                ],
                data2: [
                    {
                        font: 'Main Head',
                        example: 'This is an example',
                        weight: 'bold',
                        color: '#464c5b',
                        size:'16px',
                    },
                    {
                        font: 'Sub Head',
                        example: 'This is an example',
                        weight: 'bold',
                        color: '#464c5b',
                        size:'14px',
                    },
                    {
                        font: 'Small Head',
                        example: 'This is an example',
                        weight: 'bold',
                        color: '#464c5b',
                        size:'12px',
                    },    
                    {
                        font: 'Text',
                        example: 'This is an example',
                        weight: 'normal',
                        color: '#657180',
                        size:'12px',
                    },     
                    {
                        font: 'Help',
                        example: 'This is an example',
                        weight: 'normal',
                        color: '#9ea7b4',
                        size:'12px',
                    },  
                    {
                        font: 'Disabled',
                        example: 'This is an example',
                        weight: 'normal',
                        color: '#c3cbd6',
                        size:'12px',
                    }, 
                    {
                        font: 'Link',
                        example: 'This is an example',
                        weight: 'normal',
                        color: '#3399ff',
                        size:'12px',
                    },                                                                                              
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

