<template>
    <div 
        :style="{height:'100%'}"
        @mouseleave="menuMouseLeave"
    >
        <!-- <Menu
            v-show="show"
            width="auto"
            style="height:100%;contain: content;"
            @on-select="selectHandle"
        >
            <menu-sun :menus="menuData"/>
        </Menu> -->

        <Menu 
            :theme="theme" 
            width="200px" 
            @on-select="menuSelect"
        >
            <MenuGroup title="主题"> 
                <MenuItem name="/document/color">
                    <Icon type="ios-color-palette" />
                    Color 颜色
                </MenuItem>
                <MenuItem name="/document/font">
                    <Icon type="logo-tumblr" />
                    字体
                </MenuItem>
                <MenuItem name="/document/icon">
                    <Icon type="md-rose" />
                    Icon 图标
                </MenuItem>  
            </MenuGroup>           
            <MenuGroup title="基础组件">
                <MenuItem name="/document/button">
                    <Icon type="md-american-football" />
                    按钮
                </MenuItem>
                <MenuItem name="/document/tabs">
                    <Icon type="ios-albums-outline" />
                    标签页
                </MenuItem>
            </MenuGroup>
            <MenuGroup title="表单组件">
                <MenuItem name="/document/input">
                    <Icon type="md-leaf" />
                    文本框
                </MenuItem>
                <MenuItem name="/document/select">
                    <Icon type="ios-cube" />
                    Select下拉框
                </MenuItem>
                <MenuItem name="/document/radio">
                    <Icon type="md-crop" />
                    Radio 、Checkbox
                </MenuItem>
                <MenuItem name="/document/date">
                    <Icon type="ios-alarm" />
                    日期及时间选择器
                </MenuItem>
                <MenuItem name="/document/upload">
                    <Icon type="md-cloud-upload" />
                    文件上传
                </MenuItem>                
            </MenuGroup>  

            <MenuGroup title="平台整体框架布局"> 
                <MenuItem name="/document/layout">
                    <Icon type="md-browsers" />
                    平台整体框架布局
                </MenuItem>  
                <MenuItem name="/document/table">
                    <Icon type="md-apps" />
                    Table 表格
                </MenuItem>  
                <MenuItem name="/document/list">
                    <Icon type="ios-card-outline" />
                    列表查询页面
                </MenuItem>  
                <MenuItem name="/document/form">
                    <Icon type="ios-create-outline" />
                    表单页面布局
                </MenuItem>  
             </MenuGroup>  

             <MenuGroup title="其它"> 
                <MenuItem name="/document/preview">
                    <Icon type="ios-eye" />
                    文件预览
                </MenuItem>      
                <MenuItem name="/document/message">
                    <Icon type="md-warning" />
                    全局提示
                </MenuItem>   
                <MenuItem name="/document/errorPage">
                    <Icon type="ios-send" />
                    404页面  
                </MenuItem>  
                <MenuItem name="/document/loading">
                    <Icon type="ios-loading" />
                    Loading 提示 
                </MenuItem>                  

                           
             </MenuGroup>  
                    
        </Menu>


    </div>
</template>
<script>
// import MenuSun from "@src/layout/menuList.vue";
export default {
    components: {
        // MenuSun
    },
    data() {
        return {
            show:true,  // 显示
            theme: 'light'

        };
    },
    watch: {
        // 监听 
        'showMenu'(value){
            this.show=value;
        },
    },
    methods:{
        /**
         * 菜单 跳转
         */
        menuSelect:function(name){
            this.$router.push({path:name});


            // 滚动条
            if(document.querySelector("#content1")){
                
                setTimeout(()=>{
                document.querySelector("#content1").scrollTop =0;
                },100);        
            }

        },
        /**
         * 移除 菜单
         */
        menuMouseLeave:function(){
            // this.$emit("menuMouseLeave",false);
        },
        /**
         * 菜单 点击
         */
        selectHandle: function(option){
            this.$emit("addMenuHandle",option);
        }
    },
    props:{
        menuData:{
            type: Array,
            default:()=>[]
        },
        showMenu:{
            type: Boolean,
            default:()=>false
        }
    }
};
</script>