<style lang="scss">
    @import './index.scss';

    .wis-input{
        width: 500px;
    }
</style>
<template>
    <div class="document-page-html">
        <h1>表单组件-文本框</h1>
        <h2>概述</h2>

        <h3>1、文本框的使用场景，分为单行文本框和多行文本框。输入字数在30以内的，使用单行文本框，超过30的使用多行文本框。</h3>
        <h3>2、表单里的文本框布局，标题靠左，输入框靠右。 </h3>
        <h3>3、文本框宽度使用栅格布局，可参考表单页面布局的章节。</h3>
        <h3>4、文本框要有提示文字，如是特殊的文本框，提示文字要跟字段意思保持一致。</h3>
        <div class="content wis-input">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入..."></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="请输入邮箱..."></Input>
                </FormItem>


                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>            
        </div>
    
        <h2>输入提示</h2>
        <h3>必填字段，要有填写提示。如是有特殊意义的字段，提示文字要和字段意义保持一致。</h3>
        <div class="content wis-input">
            <Form ref="formValidate2" :model="formValidate2" :rules="ruleValidate2" :label-width="80">
                <FormItem label="姓名" prop="name">
                    <Input v-model="formValidate2.name" placeholder="请输入..."></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate2.mail" placeholder="请输入邮箱..."></Input>
                </FormItem>


                <FormItem>
                    <Button type="primary" @click="handleSubmit2('formValidate2')">提交</Button>
                    <Button @click="handleReset2('formValidate2')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>            
        </div>

        <h2>特殊输入框</h2>
        <h3>特殊输入框，可带有前缀、后缀、图标等。如查询的输入框可使用。</h3>
        <div class="content wis-input">
            <div>
                <Input search placeholder="查询..." />
            <br><br>
                <Input search enter-button placeholder="查询..." />
            <br>
                <Input search enter-button="查询" placeholder="查询..." />
                    
            <br>

            <Input v-model="value11">
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
            </Input>
            <br>
            <Input v-model="value12">
                <Select v-model="select1" slot="prepend" style="width: 80px">
                    <Option value="http">http://</Option>
                    <Option value="https">https://</Option>
                </Select>
                <Select v-model="select2" slot="append" style="width: 70px">
                    <Option value="com">.com</Option>
                    <Option value="org">.org</Option>
                    <Option value="io">.io</Option>
                </Select>
            </Input>
            <br>
            <Input v-model="value13">
                <Select v-model="select3" slot="prepend" style="width: 80px">
                    <Option value="day">天</Option>
                    <Option value="month">月</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>    
            
            </div>
         </div>    


        <h2>多行文本输入框</h2>
        <h3>当输入的文本字数超过30时，使用多文本输入框。多文本输入框，默认显示3行，最多显示9行。</h3>
        <div class="content wis-input">
            <Form ref="formValidate3" :model="formValidate3" :rules="ruleValidate3" :label-width="80">
                <FormItem label="注释" prop="annotation">
                <Input v-model="formValidate3.annotation" type="textarea" :autosize="{minRows: 3,maxRows: 9}" placeholder="请输入..." />
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit3('formValidate3')">提交</Button>
                    <Button @click="handleReset3('formValidate3')" style="margin-left: 8px">重置</Button>
                </FormItem>
            </Form>            
        </div>

        <h2>不可编辑文本框</h2>
        <h3>当文本框不可编辑时，当鼠标移入时，应提示不可编辑手势  。并使用不可编辑的文本框。</h3>
        <div class="content wis-input">
            <Form ref="formValidate4" :model="formValidate4" :rules="ruleValidate4" :label-width="80">
                <FormItem label="姓名" prop="name">
                    <Input v-model="formValidate4.name" disabled  placeholder="请输入..."></Input>
                </FormItem>
                <FormItem label="注释" prop="annotation">
                    <Input v-model="formValidate4.annotation" disabled  type="textarea" :autosize="{minRows: 3,maxRows: 9}" placeholder="请输入..." />
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit3('formValidate4')">提交</Button>
                    <Button @click="handleReset3('formValidate4')" style="margin-left: 8px">重置</Button>
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
                    name: '',
                    mail: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '字段必填！', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '字段必填!', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
                    ],
 
                },

                formValidate2: {
                    name: '',
                    mail: '',
 
                },
                ruleValidate2: {
                    name: [
                        { required: true, message: '字段必填！', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '字段必填!', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
                    ],
 
                },

                formValidate3: {
                  annotation:''
                },
                ruleValidate3: {
                    annotation: [
                        { required: true, message: '字段必填！', trigger: 'blur' }
                    ]
 
                },

                formValidate4: {
                  annotation:'',
                  name:''
                },
                ruleValidate4: {
                    annotation: [
                        { required: true, message: '字段必填！', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '字段必填！', trigger: 'blur' }
                    ],
 
                },


                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'


            }
        },
        created(){
            // console.log("刷新了111");
        },
        methods:{
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
            handleSubmit2 (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('表单校验成功!');
                    } else {
                        this.$Message.error('表单校验失败!');
                    }
                })
            },
            handleReset2 (name) {
                this.$refs[name].resetFields();
            },
            handleSubmit3 (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('表单校验成功!');
                    } else {
                        this.$Message.error('表单校验失败!');
                    }
                })
            },
            handleReset3 (name) {
                this.$refs[name].resetFields();
            },
            handleSubmit4 (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('表单校验成功!');
                    } else {
                        this.$Message.error('表单校验失败!');
                    }
                })
            },
            handleReset4(name) {
                this.$refs[name].resetFields();
            }                          
        }
    }
</script>

