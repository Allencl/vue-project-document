<style lang="scss">
    @import './index.scss';


    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <div class="document-page-html">
        <h1>Loading 提示</h1>
        <h2>概述</h2>

        <h3>1、前后端交互的数据请求。与用户操作无关的请求不显示Loading提示。与用户操作有关要全局显示Loading提示。例如：列表数据的初始化、表单页面的新增与编辑。</h3>
        <h3>2、Loading提示的蒙版，必须盖住屏幕可见的所有区域。</h3>

        <div class="content" >
            <Button type="primary" style="margin-bottom:20px" @click="handleSpinShow">整页显示，3秒后关闭</Button>
            <Row style="height:300px">
                <Col class="demo-spin-col" span="24">
                    <Spin fix>
                        <Icon type="ios-loading" size=36 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </Col>
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
            handleSpinShow () {
              this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 36
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
        }
    }
</script>

