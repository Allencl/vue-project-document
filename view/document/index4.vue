<style lang="scss">
    @import './index.scss';

    .wis-btn{
        padding-top: 20px !important;
        .ivu-btn{
            margin-right: 30px;
        }
    }
</style>
<template>
    <div class="document-page-html">
        <h1>按钮</h1>
        <h2>概述</h2>
        <h3>按钮类型有默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。根据不同的业务场景，选用不同类型，以及不同颜色的按钮。</h3>
        <div class="content wis-btn">
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </div>


        <h2>按钮尺寸</h2>
        <h3>按钮的尺寸分为三类：大尺寸按钮、标准按钮、小尺寸按钮。</h3>
        <div class="document-page-html">
            <Table highlight-row ref="currentRowTable" :columns="columns1" :data="data1"></Table>
        </div>
        <div class="document-page-html wis-btn">
            <Button type="primary" size="large">大尺寸按钮</Button>
            <Button type="primary" size="default">标准按钮</Button>
            <Button type="primary" size="small">小尺寸按钮</Button>

        </div>        


        <h2>幽灵按钮</h2>
        <h3>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</h3>
        <div class="content wis-btn" >
            <div style="    background: rgb(190, 200, 200);padding:30px 60px;">
                <Button type="default" ghost>Default</Button>
                <Button type="primary" ghost>Primary</Button>
                <Button type="dashed" ghost>Dashed</Button>
                <Button type="text" ghost>Text</Button>
                        <br><br>
                <Button type="info" ghost>Info</Button>
                <Button type="success" ghost>Success</Button>
                <Button type="warning" ghost>Warning</Button>
                <Button type="error" ghost>Error</Button>
            </div>
        </div>



        <h2>图标按钮</h2>
        <h3>通过在按钮里面放置icon图标，可更明确的表达按钮的意义。有助于培养用户的操作习惯。</h3>
        <div class="content wis-btn">
            <Button type="primary" shape="circle" icon="ios-search"></Button>
            <Button type="primary" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle" icon="ios-search">Search</Button>
            <Button type="primary" shape="circle">Circle</Button>
            <br><br>
            <Button shape="circle" icon="ios-search"></Button>
            <Button icon="ios-search">Search</Button>
            <Button shape="circle" icon="ios-search">Search</Button>
            <Button shape="circle">Circle</Button>
        </div>



        <h2>组合按钮</h2>
        <h3>在复杂的业务场景，使用组合按钮，可更简单的区分不同的业务。组合按钮的尺寸与单个按钮的尺寸、字号保持一致。只是按钮之间没有间距。</h3>
        <div class="content wis-btn">
            <RadioGroup v-model="buttonSize" type="button">
                <Radio label="large">Large</Radio>
                <Radio label="default">Default</Radio>
                <Radio label="small">small</Radio>
            </RadioGroup>
            <br><br>
            <Button :size="buttonSize" type="primary">Primary</Button>
            <Button :size="buttonSize" type="default">Default</Button>
            <Button :size="buttonSize" type="dashed">Dashed</Button>
            <Button :size="buttonSize" type="text">Text</Button>
            <br><br>
            <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
            <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
            <br><br>
            <ButtonGroup :size="buttonSize">
                <Button :size="buttonSize" type="primary">
                    <Icon type="ios-arrow-back" />
                    Backward
                </Button>
                <Button :size="buttonSize" type="primary">
                    Forward
                    <Icon type="ios-arrow-forward" />
                </Button>
            </ButtonGroup>
        </div>        
        
        
        <h2>不可编辑按钮</h2>
        <h3>在按钮不可编辑的情况下，需增加不可编辑的手势🚫，并使用不可编辑按钮。</h3>
        <div class="content wis-btn">
            <Button>Default</Button>
            <Button disabled>Default(Disabled)</Button>
              <br><br>
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>Primary(Disabled)</Button>
             <br><br>
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>Dashed(Disabled)</Button>
              <br><br>
            <Button type="text">Text</Button>
            <Button type="text" disabled>Text(Disabled)</Button>
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

                columns1: [
                    {
                        title: '类型',
                        key: 'type'
                    },
                    {
                        title: '字号',
                        key: 'size'
                    },
                    {
                        title: '颜色',
                        key: 'scene',
                        width:300
                    }
                ],
                data1: [    
                    {
                        type: '大尺寸按钮',
                        size:'16px',
                        scene: '#515a6e、#fff',
                    },  
                    {
                        type: '标准按钮',
                        size:'14px',
                        scene: '#515a6e、#fff',
                    },  
                    {
                        type: '小尺寸按钮',
                        size:'14px',
                        scene: '#515a6e、#fff',
                    },                                                                                                                 
                ],  

            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{

        }
    }
</script>

