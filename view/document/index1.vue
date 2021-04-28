<style lang="scss">
    @import './index.scss';

    .i-color-1{
        padding: 20px 0px;

        li:nth-child(2){
            background: rgb(92, 173, 255);
        }

        li:nth-child(3){
            background: rgb(92, 173, 255);
        }        

        li{
            list-style: none;
            width: 25%;
            height: 80px;
            background: rgb(45, 140, 240);
            border-radius: 4px;
            font-size: 14px;
            box-sizing: border-box;
            font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
            font-size: 14px;
            line-height: 1.5;
            
            i-color: #fff;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            margin-right: 5%;
            padding-top: 20px;



            span{
                display: block;
                padding: 1px 22px;
            }
        }
    }
</style>
<template>
    <div class="document-page-html">
        <h1>Color 颜色</h1>
        <h2>概述</h2>
        <h3>使用一套特定的规定颜色，可以使产品提供一致的外观视觉感受。wis-ui主要品牌颜色是鲜艳、友好的蓝色。</h3>
        
        <h2>主色</h2>
        <h3>使用较为安全的蓝色作为主色调，其中 Light Primary 用于hover，Dark Primary用于 active。</h3>
        <div class="content">
            <Row>
                <i-col span="8" style="padding-right: 18px;">
                    <Card style="background:rgb(45, 140, 240);">
                        <p style="color:#fff">Primary</p>
                        <p style="color:#fff;opacity: .7;">#2d8cf0</p>
                    </Card>
                </i-col>
                <i-col span="8" style="padding-right: 18px;">
                    <Card style="background:rgb(92, 173, 255);">
                        <p style="color:#fff">Light Primary</p>
                        <p style="color:#fff;opacity: .7;">#5cadff</p>
                    </Card>
                </i-col>
                <i-col span="8" style="padding-right: 18px;">
                    <Card style="background:rgb(43, 133, 228);">
                        <p style="color:#fff">Dark Primary</p>
                        <p style="color:#fff;opacity: .7;">#2b85e4</p>
                    </Card>
                </i-col>        
            </Row>
        </div>

        <h2>辅助色</h2>
        <h3>辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</h3>
        <div class="content">
            <Row>
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(45, 183, 245);">
                        <p style="color:#fff">Info</p>
                        <p style="color:#fff;opacity: .7;">#2db7f5</p>
                    </Card>
                </i-col>
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(25, 190, 107);">
                        <p style="color:#fff">Success</p>
                        <p style="color:#fff;opacity: .7;">#19be6b</p>
                    </Card>
                </i-col>
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(255, 153, 0);">
                        <p style="color:#fff">Warning</p>
                        <p style="color:#fff;opacity: .7;">#ff9900</p>
                    </Card>
                </i-col>     
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(237, 64, 20);">
                        <p style="color:#fff">Error</p>
                        <p style="color:#fff;opacity: .7;">#ed4014</p>
                    </Card>
                </i-col>                     
            </Row>
        </div>        
        
        <h2>中性色</h2>
        <h3>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</h3>
         <div class="content">
            <Row>
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(23, 35, 61);">
                        <p style="color:#fff">标题 Title</p>
                        <p style="color:#fff;opacity: .7;">#17233d</p>
                    </Card>
                </i-col>
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(81, 90, 110);">
                        <p style="color:#fff">正文 Content</p>
                        <p style="color:#fff;opacity: .7;">#515a6e</p>
                    </Card>
                </i-col>
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(128, 134, 149);">
                        <p style="color:#fff">辅助/图标 Sub Color</p>
                        <p style="color:#fff;opacity: .7;">#808695</p>
                    </Card>
                </i-col>     
                <i-col span="6" style="padding-right: 18px;">
                    <Card style="background: rgb(197, 200, 206);">
                        <p style="color:#fff">失效 Disabled</p>
                        <p style="color:#fff;opacity: .7;">#c5c8ce</p>
                    </Card>
                </i-col>                     
            </Row>
            <Row style="padding-top: 18px;">
                <i-col span="8" style="padding-right: 18px;">
                    <Card style="    background: rgb(220, 222, 226);">
                        <p style="color:#657180">边框 Border</p>
                        <p style="color:#657180;opacity: .7;">#dcdee2</p>
                    </Card>
                </i-col>
                <i-col span="8" style="padding-right: 18px;">
                    <Card style="    background: rgb(232, 234, 236);">
                        <p style="color:#657180">分割线 Divider</p>
                        <p style="color:#657180;opacity: .7;">#e8eaec</p>
                    </Card>
                </i-col>
                <i-col span="8" style="padding-right: 18px;">
                    <Card style="    background: rgb(248, 248, 249);">
                        <p style="color:#657180">背景 Background</p>
                        <p style="color:#657180;opacity: .7;">#f8f8f9</p>
                    </Card>
                </i-col>        
            </Row>            
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

