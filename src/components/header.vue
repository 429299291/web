<template>
  <div class="header header_native_index">
    <div class="logo" data-aos="zoom-in" data-aos-duration="2500">
      </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo nav nav_native_index"
      mode="horizontal"
      text-color="#fff"
      router
      background-color="rgba(60,120,160,0.3)"
      active-text-color=" rgba(52, 252, 105, 0.7)"
      @select="handleSelect"
      >
      <el-menu-item index="/index">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">简介</template>
        <el-menu-item index="/profile">小日记</el-menu-item>
        <el-menu-item index="/design">UI design</el-menu-item>
        <el-menu-item index="/web">前端开发</el-menu-item>
        <el-menu-item index="1-3" disabled="">小程序</el-menu-item>
        <el-menu-item index="/seo">SEO</el-menu-item>
        <el-menu-item index="/python">python</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="/news" class="tree">深度书本</el-menu-item> -->
      <el-submenu index="3" class="tree">
        <template slot="title">资讯</template>
        <el-menu-item index="/news">深度好文</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">大数据</template>
        <el-menu-item index="/data">base</el-menu-item>
        <el-menu-item index="/data_global">map</el-menu-item>
        <el-menu-item index="/data_3d">3D data</el-menu-item>
      </el-submenu>
    
      <div class="contact">
        <div class="qq">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=429299291&site=qq&menu=yes"><svg t="1589597972214" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21009" width="20" height="20"><path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08" p-id="21010"></path><path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08" p-id="21011"></path><path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000" p-id="21012"></path><path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017" fill="#000000" p-id="21013"></path><path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF" p-id="21014"></path><path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08" p-id="21015"></path><path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000" p-id="21016"></path><path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF" p-id="21017"></path><path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26" p-id="21018"></path><path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26" p-id="21019"></path></svg></a>
        </div>
        <div class="wechat">
          <svg t="1589597699656" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1035" width="20" height="20"><path d="M712.149333 352.234667c5.184 0 10.282667 0.064 15.381334 0.341333-26.944-146.837333-178.602667-259.2-361.642667-259.2-202.090667 0-365.888 137.002667-365.888 306.005333 0 99.093333 56.298667 187.178667 143.637333 243.093334l3.349334 2.133333-35.349334 110.72 132.266667-67.370667 6.229333 1.792a431.296 431.296 0 0 0 140.330667 14.848 237.141333 237.141333 0 0 1-11.626667-73.002666c0.021333-154.282667 149.290667-279.36 333.312-279.36z m-218.901333-107.968c28.373333 0 51.349333 22.250667 51.349333 49.728 0 27.456-22.976 49.770667-51.349333 49.770666-28.416 0-51.370667-22.293333-51.370667-49.770666-0.021333-27.498667 22.954667-49.728 51.370667-49.728z m-254.677333 99.477333c-28.394667 0-51.370667-22.293333-51.370667-49.770667 0-27.477333 22.997333-49.728 51.370667-49.728 28.394667 0 51.434667 22.250667 51.434666 49.728s-23.04 49.770667-51.434666 49.770667z" fill="#46AF35" p-id="1036"></path><path d="M405.76 633.408c0 142.805333 138.453333 258.56 309.162667 258.56a363.392 363.392 0 0 0 103.04-14.762667l111.701333 56.96-29.866667-93.589333 2.816-1.792c73.770667-47.232 121.344-121.621333 121.344-205.397333 0-142.741333-138.389333-258.496-309.056-258.496-170.688 0.042667-309.141333 115.776-309.141333 258.517333z m373.312-89.045333c0-23.168 19.413333-41.962667 43.370667-41.962667 24.021333 0 43.413333 18.816 43.413333 41.962667 0 23.253333-19.413333 42.090667-43.413333 42.090666-23.957333 0-43.370667-18.858667-43.370667-42.090666z m-215.146667 0c0-23.168 19.456-41.962667 43.413334-41.962667 23.978667 0 43.413333 18.816 43.413333 41.962667 0 23.253333-19.434667 42.090667-43.413333 42.090666-23.957333 0-43.413333-18.858667-43.413334-42.090666z" fill="#46AF35" p-id="1037"></path></svg>
          <img class="wechat_2" src="data:image/jpeg;base64,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" alt="">
        </div>
        </div>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "v_header",
  data() {
    return {
      msg: "header",
    };
  },
  methods:{
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }  ,

  },
  mounted(){
      // window.addEventListener('scroll',this.logo)
  }
};
</script>
<style scoped>
@media screen and (max-width: 801px) {
.logo{height:1.7rem!important;width: 1.7rem!important; background-size: contain!important;margin: .2rem 0 0.1rem;};
.nav li a {line-height:2.2rem!important;}
.header{height: 2.2rem!important;}
.nav li{height: 2.2rem!important;padding: 0 .5rem;line-height: 2.2rem;}
.header .el-submenu__title{height: 100%!important;line-height: 2.2rem!important;}
.nav{padding-left:1.7rem!important;background-color: rgba(60,120,160,0.3)!important;}
/* #app .nav{padding-left:2rem;  background-color: rgba(225, 190, 190, 0.8)!important;}.el-menu--popup a .el-menu-item{border-bottom: none;background-color: rgba(225, 190, 190, 0.8)!important} */
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 

.along{position:absolute;left: 0;top: 0;}
.header{width: 100%;height: 3.75rem;position: fixed;z-index: 9998;overflow: hidden;}
.nav{padding-left:3.75rem;z-index: 99;background-color: rgba(60,120,160,0.3)!important;position: relative;height: 100%;}
/* .header:hover .nav{display: block;transform: translateY(0);display: block;} */
/*nav*/
.nav > li {
  float: left;
  position: relative;
  height: 3.75rem;
}
#app .nav > li>.el-submenu__title {
  height: 3.75rem;
}
/* 圣诞树 */
.tree{
  background: url(https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/active_03.png) no-repeat 97% top;background-size: 15px;transition: all 0s;
}
.tree:hover{background: url(https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/active_03.png) no-repeat 97% bottom;background-size: 15px;}
.active::after,.el-menu-item::after {
  content: "";
  width: 0px;
  height: 1px;
  z-index: 999;
  background: rgba(255, 19, 19,.7);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,0);
  transition: all 0.5s;
}
.el-menu-item::before{
  content: "";
  width:0px;
  height: 1px;
  z-index: 999;
  background: rgba(255, 19, 19,.7);
  position: absolute;
  left: 50%;
  bottom: top;
  transform: translate(-50%,0);
  transition: all 0.5s;}
.el-menu-item:hover::before {
  width:100%;
  left: 50%;
}
.active:hover::after,.el-menu-item:hover::after {
  width:100%;
  left: 50%;
}
.nav li a {
  font-size: 16px;
  line-height: 3.75rem;
  font-weight: 500;
  display: block;
}

.sub_nav {
  width: 100px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  border-radius: 0 0 8px 8px;
  position: absolute;
  left: 50%;
  top: 3.75rem;
  overflow: hidden;
  display: none;
  transform: translate(-50%, 0);
}
/* .nav li{background-color: rgba(#255, #255, #255, 0)}
.nav li:hover{background-color: rgba(#255, #000, #000,.9)} */
/* 导航栏下 */
.el-menu--popup a .el-menu-item{
  border-top: 1px rgba(0, 0, 0, 0.1) dotted;
  border-bottom: 1px rgba(0, 0, 0, 0.1) dotted;
  text-align: center;
  /* background-color: rgba(255, 255, 255, 0); */
}
.el-menu--popup a .el-menu-item:hover{
  background-color: rgba(225, 19, 19, 0.1);
  color: rgba(225, 19, 19, 0.1);
}
/* logo */
.logo{background: url(https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/logo.png) 50% 50% no-repeat;height: 3.75rem;width:3.75rem;transition: all 1s ease-in-out;transition-delay:.5s;position: absolute;z-index: 1000;background-size: 70%;
}
.header:hover .logo{transform:rotate(30deg);}
/* 去掉单个菜单的对不齐问题 */
.el-menu--horizontal>.el-menu-item{border-bottom: none;}
/* .active{background-color: rgba(0,0,0,0)!important;} */
.el-submenu__title{background-color: rgba(0,0,0,0)!important;}
.active:hover{background-color: rgba(225, 19, 19, 0.3)!important; }
.el-menu-item:hover{background-color: rgba(225, 19, 19, 0.3)!important;color: #fff!important }
/* .active:hover .el-submenu__title{color: #fff!important } */
/* .el-menu--horizontal>.el-submenu:hover .el-submenu-title{color: #fff} */
/* .active1{transform: translateY(0rem)!important;} */
.contact{display: flex;justify-content: space-around;flex-direction:wrap;height:inherit;}
.wechat{margin-left: 1.3rem;display: flex;flex-direction: column;justify-content: center;}
.qq{height: 100%;display: flex;flex-direction: column;justify-content: center;}
.wechat i{font-size: 36px;color: #ccc;width: 100%;}
.wechat_2{position:fixed ;right: 15%;top: 60px;display: none;border: 1px dashed rgba(225, 19, 19, 1)}
.wechat :hover + .wechat_2{top: 0px;display: block;}
.news{background-color: rgba(0, 0, 0, 0);}

.header_inner{
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    overflow: hidden;
}

.header_inner #airplane {
    display: block;
    width: 80%;
    height: auto;
    margin: auto;
}
.header_inner .action {
    position: absolute;
    z-index: 1;
    height: 100%;
}
.header_inner .middle {
    width: 80px;
    position: fixed;
    height: 80px;
    right: 3%;
    top: 10%;
    z-index: 999;
}
.header_inner .middle_child {
    width: 80px;
    height: 80px;
    transition: all 1s ease-out;
    background: url(../assets/angel.png);
    position: absolute;
    left: 55%;
    transform: translate(-50%,-50%);
    top: 50%;
    background-repeat: no-repeat;
    background-size: 50px;
    background-position: 50% 50%;
}
/* 小女孩 */
.header_inner .middle:hover .middle_child{
    opacity: 0.5;
    left: 100%;
    top: -50%;
    transform:scale(0.7) ;
}
.header_inner .left {
  padding-left: 30%;color: #fefefe;font-size: 1rem;line-height: 100%;height: 100%;padding-top: 10%;
}

</style>
