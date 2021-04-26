<template>
    <div 
        :style="{height:'100%'}"
        @mouseleave="menuMouseLeave"
    >
        <Menu
            v-show="show"
            width="auto"
            style="height:100%;contain: content;"
            @on-select="selectHandle"
        >
            <menu-sun :menus="menuData"/>
        </Menu>
    </div>
</template>
<script>
import MenuSun from "@src/layout/menuList.vue";
export default {
    components: {
        MenuSun
    },
    data() {
        return {
            show:true,  // 显示
            // 菜单 数据
            // menuList: [
            //     {
            //         name: "SRM平台",
            //         id: "1",
            //         children: [
            //             {
            //                 id:"1-1",
            //                 name: "页面1", 
            //                 platform:'',
            //                 icon:"logo-buffer",
            //                 pathURL:"page1/qwqwq"            
            //             },
            //         ]
            //     },
            //     {
            //         name: "质量平台",
            //         id: "2",
            //         children: [
            //             {
            //                 id:"2-1",
            //                 name: "页面22", 
            //                 platform:'',
            //                 icon:"logo-buffer",
            //                 pathURL:"page2/qwqwq"            
            //             },
            //         ]
            //     },                
            //     // {
            //     //     name: "一级菜单",
            //     //     id: "1",
            //     //     children: [
            //     //         {
            //     //             id:"1-1",
            //     //             name: "表单示例", 
            //     //             icon:"logo-buffer",
            //     //             pathName:"page1"            
            //     //         },
            //     //         {
            //     //             name: "二级菜单",
            //     //             id: "1-2",
            //     //             children: [
            //     //                 {
            //     //                     name: "跳转示例1", 
            //     //                     id: "1-2-1",
            //     //                     icon:"ios-analytics",
            //     //                     pathName:"page2"            
            //     //                 }
            //     //             ]
            //     //         },
            //     //         {
            //     //             id:"1-3",
            //     //             name: "跳转示例2", 
            //     //             icon:"logo-buffer",
            //     //             pathName:"page3"            
            //     //         },
            //     //     ]
            //     // }
            // ]
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
         * 移除 菜单
         */
        menuMouseLeave:function(){
            this.$emit("menuMouseLeave",false);
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