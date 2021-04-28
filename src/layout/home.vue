
<template>
    <div class="wis-home">
        <h1> 前言</h1>
        <p>
            规范的UI一方面有助于提升开发的效率，另一方面也有助于培养用户的操作习惯，增加系统的友好性。
        </p>
        <p>
            wis-ui的UI规范，在主题、基础组件、表单组件、整体布局、其它等，五个类别上对系统做了一些规范。这些规范，覆盖了系统80%的页面。
        </p>

        <div style="text-align:center">
            <div id="main_echarts" style="width: 600px;height:500px;"></div>
        </div>
        
    </div>
</template>
<script>
    import * as echarts from 'echarts';

    export default {
        data() {
            return {

            }
        },        
        created() {
            setTimeout(()=>{
                this.initFunc();  // 初始化
            },1000);
        },  
        methods: {
            /**
             * 初始化 报表
             */
            initFunc: function(){
                var myChart = echarts.init(document.getElementById('main_echarts'));
                
                // 使用刚指定的配置项和数据显示图表。
                let _data={
                "name": "wis-ul规范",
                "children": [

                {
                "name": "主题",
                "children": [
                {"name": "Color颜色", "value": 1082},
                {"name": "字体", "value": 1336},
                {"name": "Icon图标", "value": 1681}
                ]
                },
                {
                "name": "基础组件",
                "children": [
                {"name": "按钮", "value": 1082},
                {"name": "Tabs标签页", "value": 1336},
                ]
                },

                {
                "name": "表单组件",
                "children": [
                {"name": "Input文本框", "value": 1082},
                {"name": "Select下下拉框", "value": 1336},
                {"name": "Radio", "value": 1681},
                {"name": "Checkbox", "value": 1681},
                    {"name": "日期选择器", "value": 1681},
                    {"name": "时间选择器", "value": 1681},
                    {"name": "文件上传", "value": 1681},
                ]
                },
                
                {
                "name": "整体布局",
                "children": [
                {"name": "系统整体布局", "value": 1082},
                {"name": "Table列表页", "value": 1336},
                    {"name": "表单提交页", "value": 1336},
                ]
                },     
                
                {
                "name": "其它",
                "children": [
                {"name": "全局提示", "value": 1082},
                {"name": "文件预览模块", "value": 1336},
                    {"name": "404页面", "value": 1336},
                            {"name": "Loading页面", "value": 1336},
                ]
                },  
                ]
                }


                myChart.setOption({
                    // tooltip: {
                    //     trigger: 'item',
                    //     triggerOn: 'mousemove'
                    // },
                    series: [
                        {
                            type: 'tree',

                            data: [_data],

                            top: '10%',
                            left: '27%',
                            bottom: '20%',
                            right: '30%',

                            symbolSize: 7,

                            label: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                    
                                fontSize: 12
                            },

                            leaves: {
                                label: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                }
                            },

                            emphasis: {
                                focus: 'descendant'
                            },

                            expandAndCollapse: true,
                            animationDuration: 650,
                            animationDurationUpdate: 750
                        }
                    ]
                });
            }
        }     
    }
</script>

<style lang="scss">
    .wis-home{
        padding: 50px 60px;

        h1{
            font-size: 36px;
            text-align: center;
            margin-bottom: 22px;
        }
        p{
            text-indent: 26px;
            font-size: 14px;
            text-align: justify;
            line-height: 1.7em;
            font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
            font-size: 14px;
            line-height: 1.5;
            color: #515a6e;
            -webkit-font-smoothing: antialiased;
            font-weight: 500;            
        }
    }
</style>