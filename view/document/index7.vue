<style lang="scss">
    @import './index.scss';
    .wis-select{
        width: 600px;
    }
</style>
<template>
    <div class="document-page-html">
        <h1>表单组件-Select下拉框</h1>
        <h2>概述</h2>
        <h3>下拉框布局风格，颜色、字体、字号，表单校验提示等基础属性，与文本框保持一致。</h3>
        <h3>使用场景上，分为单选下拉框、多选下拉框、远程搜索下拉框。</h3>
        
        <div class="content wis-select">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="160">

                <FormItem label="下拉框单选" prop="city">
                    <Select v-model="formValidate.city" placeholder="请选择">
                        <Option value="beijing">北京</Option>
                        <Option value="shanghai">伦敦</Option>
                        <Option value="shenzhen">悉尼</Option>
                    </Select>
                </FormItem>

            <FormItem label="下拉框多选" prop="citys">
                    <Select v-model="formValidate.citys" placeholder="请选择" multiple>
                        <Option value="beijing">北京</Option>
                        <Option value="shanghai">伦敦</Option>
                        <Option value="shenzhen">悉尼</Option>
                    </Select>
                </FormItem>
            
            <FormItem label="带远程搜索下拉框" prop="ajax">
                <Select
                    v-model="formValidate.ajax"
                    multiple
                    filterable
                        placeholder="请选择"
                    :remote-method="remoteMethod2"
                    :loading="loading2">
                    <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
                </Select>        
            </FormItem>

                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>            
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
              list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
                       loading2: false,
               options2: [],
              formValidate: {
                  city:'',
                  citys:[],
                  ajax:[],
 
 
                },
                ruleValidate: {
                    city: [
                        { required: true, message: '字段必填！', trigger: 'blur' }
                    ],
                     citys: [
                        { required: true,type: 'array', message: '字段必填！', trigger: 'blur' }
                    ],
                    ajax: [
                        { required: true,type: 'array', message: '字段必填！', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('表单校验成功!');
                    } else {
                        this.$Message.error('表单校验失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
             remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
    
        }
    }
</script>

