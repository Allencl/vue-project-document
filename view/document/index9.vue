<style lang="scss">
    @import './index.scss';

    .wis-date{
        width: 600px;
    }
</style>
<template>
    <div class="document-page-html">
        <h1>表单组件-日期及时间选择器</h1>
        <h2>概述</h2>
        <h3>日期及时间选择器布局风格，颜色、字体、字号，表单校验提示等基础属性，与文本框保持一致。</h3>
        <h3>当日期及时间，是组合出现时。应当在一个组件内完成交互操作，不能拆分成两个独立组件。</h3>
        
        <div class="content wis-date">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="160">


                        <FormItem label="开始及结束日期" prop="date">
                                <DatePicker type="datetimerange" placeholder="请选择" v-model="formValidate.date"></DatePicker>
                            </FormItem>
            
                        <FormItem label="开始及结束时间" prop="time">
                        <TimePicker confirm type="timerange" placeholder="请选择" v-model="formValidate.time"></TimePicker>
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
                formValidate: {
   
                    date: [],
                  time:[]

                },
                ruleValidate: {
      
           date: [{
             required: true,
             type: 'array',
             message: "字段必填！",
             trigger: 'blur',
             fields: {
               0: {type: "date", required: true, message: "请选择开始日期！"},
               1: {type: "date", required: true, message: "请选择结束日期！"}
             }
           }],
                             time: [{
             required: true,
             type: 'array',
             message: "字段必填！",
             trigger: 'blur',
             fields: {
               0: {type: "string", required: true, message: "请选择开始时间！"},
               1: {type: "string", required: true, message: "请选择结束时间！"}
             }
           }]
       
                }
            }
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
            }
        }
    }
</script>

