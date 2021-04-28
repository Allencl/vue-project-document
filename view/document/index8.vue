<style lang="scss">
    @import './index.scss';

    .wis-radio{
        width: 700px;
    }
</style>
<template>
    <div class="document-page-html">
        <h1>表单组件- Radio 、Checkbox</h1>
        <h2>概述</h2>
        <h3>Radio 、Checkbox提供带图标和不带图标两种模式。</h3>
        <h3>Radio、Checkbox布局风格，颜色、字体、字号，表单校验提示等基础属性，与文本框保持一致。</h3>
        
        <div class="content wis-radio">

            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="160">
        
                <FormItem label="Radio不带图标" prop="gender">
                    <RadioGroup v-model="formValidate.gender">
                <Radio label="apple">

                    <span>Apple</span>
                </Radio>
                <Radio label="android">
        
                    <span>Android</span>
                </Radio>
                <Radio label="windows">

                    <span>Windows</span>
                </Radio>

                    </RadioGroup>
                </FormItem>
                    <FormItem label="Radio带图标" prop="gender2">
            <RadioGroup v-model="formValidate.gender2">
                <Radio label="apple">
                    <Icon type="logo-apple"></Icon>
                    <span>Apple</span>
                </Radio>
                <Radio label="android">
                    <Icon type="logo-android"></Icon>
                    <span>Android</span>
                </Radio>
                <Radio label="windows">
                    <Icon type="logo-windows"></Icon>
                    <span>Windows</span>
                </Radio>

                    </RadioGroup>
                </FormItem>
            
            
                <FormItem label="Checkbox不带图标" prop="interest">
                    <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="twitter">
            
                    <span>Twitter</span>
                </Checkbox>
                <Checkbox label="facebook">
            
                    <span>Facebook</span>
                </Checkbox>
                <Checkbox label="github">
        
                    <span>Github</span>
                </Checkbox>
                <Checkbox label="snapchat">

                    <span>Snapchat</span>
                </Checkbox>
                    </CheckboxGroup>
                </FormItem>
            
                    <FormItem label="Checkbox带图标" prop="interest2">
                    <CheckboxGroup v-model="formValidate.interest2">
                <Checkbox label="twitter">
                    <Icon type="logo-twitter"></Icon>
                    <span>Twitter</span>
                </Checkbox>
                <Checkbox label="facebook">
                    <Icon type="logo-facebook"></Icon>
                    <span>Facebook</span>
                </Checkbox>
                <Checkbox label="github">
                    <Icon type="logo-github"></Icon>
                    <span>Github</span>
                </Checkbox>
                <Checkbox label="snapchat">
                    <Icon type="logo-snapchat"></Icon>
                    <span>Snapchat</span>
                </Checkbox>
                    </CheckboxGroup>
                </FormItem>
            

                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
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
                formValidate: {
        
                    gender: '',
                     gender2: '',

                    interest: [],
                    interest2: [],

       
                },
                ruleValidate: {
                    gender2: [
                        { required: true, message: '字段必填！', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '字段必填！', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '字段必填！', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个', trigger: 'change' }
                    ],
                                      interest2: [
                        { required: true, type: 'array', min: 1, message: '字段必填！', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个', trigger: 'change' }
                    ],
     
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

