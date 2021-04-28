<template>
  <div id="app">
    <input id='win_name' type='hidden' value='momMainFrame'/>
    <div class="layout">
        <Layout>
            <Header
              class="wis-header-bar"
            >
              <WisHeader 
                :commonMenuList="commonMenuList"
                @goHome="goHome"
                @commonMenuClick="commonMenuClick"
              />
            </Header>
            <Layout>
                <Sider 
                  hide-trigger 
                  class="menu-sider"
                  :style="
                    showMenu?
                    {
                      background: '#fff',
                      height:documentHeight2+'px',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                    }
                    :
                    {
                      height:documentHeight2+'px',
                      overflowY: 'auto',
                      overflowX: 'hidden',
                      background: '#fff',
                      flex:'0 !important',
                      maxWidth:'0 !important',
                      minWidth:'0 !important',
                      width:'0 !important'
                    }
                  "
                >
                  <WisMenu 
                    :showMenu="showMenu"
                    :menuData="menuList"
                    @addMenuHandle="addMenuHandle"
                    @menuMouseLeave="menuMouseLeave"
                  />

                  <!-- <img 
                    :style="
                      showMenu ?
                      {left:'-38px'}
                      :
                      {left:'0px'}
                    "
                    class="open-menu-btn"
                    :src="menuLogo" 
                    title="展开菜单" 
                    @mouseover="menuMouseOver"
                  /> -->

                </Sider>
                <Layout class="wis-content-container" 
                  :style=" tabsArray ?
                    {background:'#fff',padding:'46px 0px 0px 0px'}:
                    {background:'#fff',padding:'0px 0px 0px 0px'}
                  "
                >
                    <div class="wis-tabs-container">
                      <WisTabs 
                        @changeTabs="changeTabs"
                        @goHome="goHome"
                      />
                    </div>
                    <Content 
                      v-show="showPlatform"
                      :style="{overflow:'auto',height:documentHeight+'px',padding: '8px 8px', minHeight: '280px', background: '#fff'}"
                    >
                        <div class="content-iframe">
                          <iframe 
                            v-for="(o,index) in menuList" 
                            :key="index"
                            :src="o.platformHttps" 
                            :ref="o.platformName"
                            :class="(showPlatform==o.platformName)?'show':''"
                            frameborder="0"
                          >
                          </iframe>
                      </div>
                    </Content>
                    <Content 
                      
                      :style="{overflow:'auto',height:documentHeight+'px',padding: '8px 8px', minHeight: '280px', background: '#fff'}"
                    >
                      <keep-alive>
                        <router-view v-if='$route.meta.keepAlive'></router-view>
                      </keep-alive>
                      <router-view v-if='!$route.meta.keepAlive'></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
import WisHeader from '@src/layout/header.vue';  // 头
import WisMenu from '@src/layout/menu.vue';  // 菜单
import WisTabs from '@src/layout/tabs.vue';  // tabs

import MenuConfig from "./menu.js";  // 配置数据 菜单


export default {
  name: 'App',
  components: { 
    WisHeader, 
    WisMenu,
    WisTabs
  },
  data(_this) {
    return {
      showTabs:false,  // show tabs

      showMenu:true,  // 显示菜单
      menuLogo: require("@assets/images/open_menu.svg"), // logo
      commonMenuList:[],   // 常用菜单 List

      showPlatform:'',  // 显示的 platform
      menuList:[],  // 菜单
      isRefresh:true,  // 刷新
      documentHeight2:document.documentElement.clientHeight-(66),  // 窗口高度
      documentHeight:document.documentElement.clientHeight-(_this.tabsArray?116:68),  // 窗口高度
    }
  },
  computed: {
    tabsArray(){
      return this.$store.state.storeTabs.tbasList["length"];
    }     
  },   
  watch:{
    // 监听 tabs
    "$store.state.storeTabs.tbasList"(val){
      this.updataWindow();
    },
    // 监听路由
    '$route': {
      handler: function(val, oldVal){

        if(val["path"]=='/page1'){
          this.$store.dispatch("addTabs",{
            _this:this,
            label:"示例页面",
            name:"/page1",
            icon:"ios-analytics",
            // menuObj:option
          });
        }else{
          this.$store.dispatch("removeTabsAll");
        }
      },
      deep: true
    }


  },   
  created(){
    var that=this;
    
    this.menuInit();   // 菜单初始化
    this.commonMenuInit();  // 常用菜单 初始化
    // this.$router.push({name:'home',params:{}});

    window.onresize = function(){ 
      that.updataWindow();
    };

    /**
     * 页面跳转 监听
     */
    // this.$router.beforeEach((to, from, next) => {
    //     let tabsList=that.$store.state.storeTabs.tbasList;
    //     let action=tabsList.filter(o=>o["name"]==to['name']);

    //     // 已存在 
    //     if(action["length"]){
    //       that.$store.dispatch("selectTabs",to["name"]);
    //     }else{
    //       that.$store.dispatch("addTabs",{
    //         _this:that,
    //         label:(to["meta"]||{})["title"]||"未命名",
    //         name:to["name"],
    //         icon:"ios-bookmark-outline",
    //         params:to["params"]
    //       });      
    //     }

    //     // 刷新
    //     if( (to["params"]||{})["refresh"] ){
    //       that.isRefresh=false;
    //       that.$nextTick(()=>{
    //         that.isRefresh=true;
    //       });
    //     }
        
    //     next();
    // });

  },
  mounted(){

  },  
  methods:{
    /**
     * 到首页
    */
    goHome: function(){
      this.showPlatform="";
    },
    /**
     * 菜单 初始化
     */
    menuInit: function(){
      setTimeout(()=>{
          this.menuList=MenuConfig;

          this.$nextTick(()=>{
            this.iframeInit();
          });
      },300);
    },
    /**
     * tabs 切换
     */
    changeTabs: function(option){
      this.platformLink(option);
    },
    /**
     * iframe 初始化
     */
    iframeInit: function(){
      // console.log(123);
    },
    /**
     * 刷新 窗口
     */
    updataWindow: function(){
      this.documentHeight=document.documentElement.clientHeight-(this.tabsArray?116:68);  // 窗口高度
    },
    /**
     * add 菜单
     */
    addMenuHandle: function(option){
      this.$router.push({path:option["path"]});
      // let that=this;
      // this.$store.dispatch("addTabs",{
      //   _this:that,
      //   label:option["name"],
      //   name:option["pathURL"],
      //   icon:option["icon"],
      //   menuObj:option
      // });

      // this.commonMenu(option);
      // this.platformLink(option);
    },
    /**
     * 常用菜单 初始化
     */
    commonMenuInit:function(){
      try {
        if( !localStorage.getItem("commonMenuList") ){
          localStorage.setItem("commonMenuList","[]");
          return;
        }

        this.commonMenuList=JSON.parse(localStorage.getItem("commonMenuList"));                
      } catch (error) {
        console.error(error);     
      }
    },
    /**
     * 常用菜单 点击
     */
    commonMenuClick:function(option){
      this.addMenuHandle(option);
    },
    /**
     * 常用 菜单
     */
    commonMenu:function(option){
      let _list=this.commonMenuList;
      let _arr=_list.filter((o)=>o["platformHttps"]==option["platformHttps"]);
      let len=_arr.filter((o)=>o["pathURL"]==option["pathURL"])["length"];


      // 存在
      if(len) return;

      // 限制数量
      if(_list.length >=12 ) return;

      this.commonMenuList=[option].concat(_list);
      
      // 缓存
      this.$nextTick(()=>{
        try {
          localStorage.setItem("commonMenuList",JSON.stringify(this.commonMenuList));
        } catch (error) {
          console.error(error);     
        }
      });

    },
    /**
     * 平台 跳转
     */
    platformLink: function(option){
      console.log("页面切换");
      console.log(option);

      this.showPlatform=option["platformName"];  // 显示 iframe      


      // 有路由的页面
      if(!option["notRouter"]){
        // 平台页面跳转   option["platformHttps"]
        this.$refs[option.platformName][0].contentWindow.postMessage(option,"*");  // 向 iframe 传消息
      }else{
        this.$refs[option.platformName][0].src=option["pathURL"];  // 跳转页面
      }

    },
    /**
     * 菜单 移入
     */
    menuMouseOver:function(){
      this.$nextTick(()=>{
        this.showMenu=true;
      });      
    },
    /**
     * 移除 菜单
     */
    menuMouseLeave:function(active){
      this.$nextTick(()=>{
        this.showMenu=active;
      });
    }
  },
}
</script>

<style lang="scss">
  .ivu-layout-sider.menu-sider{
    transition: all .5s ease-in-out !important;
    // transition: all 3s ease-out-in !important;
  }

  .open-menu-btn{
    position: fixed;
    height: 30px;
    width: 30px;
    font-size: 16px;
    z-index: 999;
    top: 60px;
    left: 0px; 
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover{
      transform: scale(1.2,1.2);
    }      

  }

  .wis-header-bar{
    background: #515a6e;
  }

  .wis-content-container{
    width: 100%;
    position: relative;
    
    .wis-tabs-container{
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px; 
      height: 46px;
    }

    .content-iframe{
        height: 100%;
        position: relative;

        iframe{
          position: absolute;
          visibility: hidden;
          width: 100%;
          height: 100%;

          &.show{
            visibility: inherit;
          }
        }
    }
  }
</style>
