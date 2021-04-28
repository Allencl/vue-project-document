<template>
    <div>
        <wisTable
            :columns="columns"
            :data1="data"
        >
            <template v-slot:search-container>
                <SearchPage 
                    @search="searchHandle"
                />
            </template>
            <template v-slot:button-container>
                <Button type="info" @click="editHandle('add')">新增</Button>
                <Button type="success" @click="editHandle('edit')">编辑</Button>
                <Button type="error" @click="deleteHandle">删除</Button>
            </template>
        </wisTable>

        <EditPage 
            v-model="showPage"
            @submit="submitHandle"
        />

    </div>
</template>
<script>

import SearchPage from './search.vue';  // 查询头
import EditPage from './edit.vue';  // 新增|编辑



export default {
    components: { 
        SearchPage,
        EditPage      
    },    
    data () {
        return {
            showPage:false,  // 显示编辑页面

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

    },
    methods:{
        /**
         * 新增 |编辑
         */
        editHandle: function(){
            this.showPage=true;
        },
        /**
         * 查询
        */
        searchHandle: function(form){
            this.$Notice.open({
                title: '查询的数据',
                desc: JSON.stringify(form)
            });
        },
        /**
         * 提交
         */
        submitHandle: function(data){
            this.$Notice.open({
                title: '保存成功！',
                desc: JSON.stringify(data)
            });   
        },
        /**
         * 删除
         */
        deleteHandle: function(){
            this.$Modal.confirm({
                title: '删除',
                content: '<p>删除后数据将无法恢复，确定删除！</p>',
                onOk: () => {
                    this.$Message.info('Clicked ok');
                },
                onCancel: () => {
                    this.$Message.info('Clicked cancel');
                }
            });            
        }
    }
}
</script>

<style lang="scss">

</style>