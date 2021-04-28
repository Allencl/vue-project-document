<template>
    <div>
        <Drawer
            v-model="value"
            title="编辑"
            width="50%"
            class-name="wis-drawer"
            :styles="styles"
            draggable 
            @on-close="cancelHandle"
        >
            <Form 
                ref="form"
                :model="formData" 
                :rules="ruleValidate" 
                :label-width="120"
            >
                <Row>
                    <i-col span="24">
                        <FormItem label="文本框只读" prop="name" >
                            <Input 
                                v-model="formData.name" 
                                clearable
                                placeholder="请输入" 
                                :maxlength="30"
                                show-word-limit
                            />
                        </FormItem>
                    </i-col>
                    <i-col span="24">
                        <FormItem label="只读" prop="readonly" >
                            <Input 
                                v-model="formData.readonly" 
                                readonly
                                disabled
                            />
                        </FormItem>
                    </i-col>     

                    <i-col span="24">
                        <FormItem label="日期不可编辑">
                            <DatePicker 
                                v-model="formData.date1" 
                                disabled
                                type="date" 
                                placeholder="请选择"
                            >
                            </DatePicker>
                        </FormItem>
                    </i-col>                    
                    <i-col span="24">
                        <FormItem label="普通日期" prop="date">
                            <DatePicker 
                                v-model="formData.date" 
                                type="date" 
                                placeholder="请选择"
                            >
                            </DatePicker>
                        </FormItem>
                    </i-col>  
                    <i-col span="24">
                        <FormItem label="日期时间" prop="dateTime">
                            <DatePicker 
                                v-model="formData.dateTime" 
                                type="datetime" 
                                format="yyyy-MM-dd HH:mm" 
                                placeholder="请选择" 
                            >
                            </DatePicker>
                        </FormItem>                        
                    </i-col>          
                </Row>
            </Form>
            <div class="wis-drawer-footer">
                <Button @click="submitHandle('save')">保存</Button>
                <Button type="primary" @click="submitHandle('submit')">提交</Button>
            </div>
        </Drawer>    
    </div>
</template>
<script>
    export default {
        model: {
			prop: 'value',
			event: 'cv'
		},
        data () {
            return {
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },


                // 表单数据
                formData: {
                    cascaderDisabled: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                    cascader:[],
                    selectDisabled:1,
                    InputNumber:1,  // 默认值 必须的
                    readonly:"这是一个只读的文本框",
                    date1: new Date("2020-03-11")
                },

                // 表单校验
                ruleValidate: {
                    cascader:[
                        { type:'array',required: true,message:'该项必填！', trigger:'change'}
                    ],
                    selectAll: [
                        { type:'array',required: true,message:'该项必填！', trigger:'change'}
                    ],                    
                    select: [
                        { type:'number',required: true,message:'该项必填！', trigger:'change'}
                    ],                    
                    InputNumber: [
                        {required:true,type:'number',message:'该项必填！',trigger:'blur'}
                    ],
                    name: [
                        {required:true,message:'该项必填！',trigger:'blur'}
                    ],
                    date: [
                        { required: true, type: 'date', message: '该项必填！', trigger: 'change' }
                    ],
                    dateTime: [
                        { required: true, type: 'date', message: '该项必填！', trigger: 'change' }
                    ],  
                    datetimerange: [
                        {  
                            type: 'array',
                            required: true,
                            message: "该项必填！",
                            fields: {
                                0: { required: true,  type: 'date',message: "开始时间不能为空", trigger: 'change' },
                                1: { required: true,  type: 'date',message: '结束时间不能为空', trigger: 'change' }
                            }
                        }
                    ],                                       
                }
            }
        },
        created(){
    
        },
        methods:{
            /**
             * 关闭 
             */
            cancelHandle: function(){
                this.$emit("cv",false);
            },
            /**
             * 提交 |保存
             */
            submitHandle:function(){
                console.log( this.formData );
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        this.$emit("submit",this.formData);
                    } else {
                        this.$Message.error('表单不完整！');
                    }
                })

            }
        },
        props:{
            value:{
                type:Boolean,
                default:()=>false              
            }
        }
    }
</script>
<style lang="scss">

</style>