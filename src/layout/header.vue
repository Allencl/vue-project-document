<template>
    <header class="wis-header-container">
        <div class="left-box">
   
            <img style="cursor:pointer;" :src="logo" alt="西息信息" @click="toHome">
   
            <span class="text-content">西信信息</span>
        </div>
        <div  class="right-box">
            <Avatar style="margin-right:18px;" :src="user" />


            <Dropdown
                placement="bottom-end"
                transfer
                @on-click="menuClick"
                @on-visible-change="MenuDropdownChange"
            >
                <img 
                    :class="`common-menu-btn ${rotate?'rotate':''}`"
                    :src="menuLogo"
                    title="常用菜单"
                />
                <DropdownMenu slot="list">
                    <DropdownItem
                        v-for="(o,i) in commonMenuList"
                        :key="i"
                        :name="o"
                    >
                        <div>
                            <Icon :type="o.icon" />
                            <span style="padding:0px 10px 0px 12px" :title="o.name">{{o.name}}</span>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>            

            <Dropdown
                placement="bottom-end"
                transfer
            >
                <Icon class="head-more-icon" style="color:#fff" type="md-settings" />
                <DropdownMenu slot="list">
                    <DropdownItem>
                        <Icon type="ios-log-out" style="margin-right:8px" />
                        <span>退出登录</span>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </header>
</template>
<script>
    export default {
        data () {
            return {
                rotate:false,  
                menuLogo: require("@assets/images/open_menu_1.svg"), // logo

                headerHeight:60,  // 头部高度
                logo: require("@assets/images/logo-header.png"), // logo
                user: require("@assets/images/user.png"), // logo

            }
        },
        // watch: {
        //     // 监听 
        //     'commonMenuList'(list){
        //        console.log(list);
        //     },
        // },        
        methods:{
            // to home
            toHome: function(){
                this.$store.dispatch("removeTabsAll",{});
                this.$router.push({name:'home',params:{}});
                this.$emit("goHome");

            },
            /**
             * 菜单 点击
             */
            menuClick:function(option){
                this.$emit("commonMenuClick",option);
            },
            /**
             * 菜单 切换
             */
            MenuDropdownChange:function(active){
                this.rotate=active;
            }
        },
        props:{
            commonMenuList:{
                type: Array,
                default:()=>[]                
            }
        }
    }
</script>

<style lang="scss">
    .head-more-icon{
        margin-left: 16px;
        position: relative;
        font-size: 26px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        /* margin-top: 0px; */
        top: 5px;
        margin-right: 10px;
    }

    .ivu-layout-header{
        padding: 0px 16px;
    }

    .wis-header-container{
 
        display:flex;
        padding: 0px;

        .common-menu-btn{
            cursor: pointer;
            width: 29px;
            position: relative;
            top: 12px;
            left: 6px;
            transition: all 0.2s ease-in-out;


            &.rotate{
                transform: rotate(90deg);
            }
        }

        >div{
            flex:1;
        }

        .left-box{
            text-align: left;

            img{
                position: relative;
                /* margin-top: 10px; */
                top: 14px;
                width: 80px;
        
            }

            .text-content{
     
                color: #fff;
                font-size: 16px;
                display: inline-block;
                font-weight: 500;
                padding-left: 30px;

            }
        }

        .right-box{
            text-align: right;

            .user-box{
                background: yellow;
                height: 100%;
                display: inline-block;
                width: 60px;
            }
        }
    }
</style>