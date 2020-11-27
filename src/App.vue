<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>
import Vheader from "./components/header";
export default {
  name: 'App',
  watch:{
  },
  components: {
    Vheader
  },
  methods:{

    
  },
  mounted(){
    try {
      var urlhash = window.location.hash;
      if (!urlhash.match("fromapp")) {
          let wechat = document.getElementsByClassName('wechat')[0]
          let qq = document.getElementsByClassName('qq')[0]
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
          // window.location = "https://www.dongdong66.com/mindex";
          wechat.style.display = 'none'
        }else{
          qq.style.display = 'none'
          wechat.style.paddingLeft = '65vw'
        }
      }
    }
    catch (err) {
    }

  },
  computed:{
    
  }
}
</script>

<style >
body{width: 100%;}
@media screen and (max-width: 801px) {
.header-h{font-size: 0.8rem!important}
.el-menu--popup{padding: 0!important}
#header{height: 3.6rem!important;}.header-h{padding-top: 1rem!important;}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
/* 标题字大小 */
.header-h img{width:27%!important;margin: 0 auto;vertical-align:middle} 
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column }
.header .el-submenu__title{height: 100%!important;line-height: 2.2rem!important;}
/* 导航字体大小 */
.el-submenu__title{font-size: .8rem}
.el-menu--horizontal .el-menu--popup{min-width: 4.5rem!important;}
/* 下拉出来的小导航条 */
/* .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .7rem} */
#app p{font-size: 1rem;}
.tree{background: none!important}
/* profile 的走马灯的手机高度 */
.el-carousel__container{height: 6.2rem!important;}
.el-menu--horizontal{z-index: 999!important;}
.logo .logosmall{width:1.8rem!important;height: 1.8rem!important;margin-left: 0rem!important;margin-top: -0.15rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 1377px) {
.header-h{font-size: 0.8rem!important}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left:.5rem!important;}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.logo .logosmall{width:1.8rem!important;height: 1.8rem!important;margin-left: 0rem!important;margin-top: -0.15rem!important;}
/* .el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .7rem} */
.el-carousel__container{height: 23rem!important;}
}@media screen and (max-width: 1011px) {
.header-h{font-size: 0.8rem!important}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-carousel__container{height: 6rem!important;}
.el-menu--popup{padding: 0!important}
/* .el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .7rem} */
.logo .logosmall{width:1.8rem!important;height: 1.8rem!important;margin-left: 0rem!important;margin-top: -0.15rem!important;}
.header-h img{width:20%!important;margin: 0 auto;vertical-align:middle}
}
@media screen and (max-width: 375px) {
.header-h{font-size: 0.8rem!important}
.logo .logosmall{width:1.8rem!important;height: 1.8rem!important;margin-left: 0rem!important;margin-top: -0.15rem!important;}
/* profile 的走马灯的手机高度 */
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-menu--popup{padding: 0!important}
.el-carousel__container{height: 5.5rem!important;}
/* .el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .7rem} */
.header-h img{width:20%!important;margin: 0 auto;vertical-align:middle}
}
@media screen and (max-width: 325px) {
.header-h{font-size: 0.8rem!important}
/* profile 的走马灯的手机高度 */
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left: 0!important;}
.el-menu--popup{padding: 0!important}
.el-carousel__container{height: 4.7rem!important;}
/* .el-menu--horizontal .el-menu .el-submenu__title{height: 1.5rem!important;line-height: 1.5rem!important;font-size: .7rem} */
.header-h img{width:30%!important;margin: 0 auto;vertical-align:middle}
}
/* body{background-image: url(https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/shadow-footer.png);width: 100%;height: 100%;} */
body{background-color: #e0ffe1;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e2fff2'/%3E%3Cstop offset='1' stop-color='%23e2fff2' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff5e3'/%3E%3Cstop offset='1' stop-color='%23fff5e3' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e9e4ff'/%3E%3Cstop offset='1' stop-color='%23e9e4ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e0ffe1'/%3E%3Cstop offset='1' stop-color='%23e0ffe1' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e3fdff'/%3E%3Cstop offset='1' stop-color='%23e3fdff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffe6f9'/%3E%3Cstop offset='1' stop-color='%23ffe6f9' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;width: 100%;height: 100%;}
/* 导航栏hover下面的宽度 */
.el-menu--horizontal .el-menu--popup{min-width:115px;text-align: center;}
.active{background-color: rgba(0,0,0,0)!important;}
.el-submenu__title{background-color: rgba(0,0,0,0)!important;}
#header{height: 15rem;background-color: #fff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;}
/* 导航下拉小图标 */
.el-submenu__title i{color:rgba(255, 255, 255, .2)!important}
.el-submenu__title:hover i{color:rgba(255, 255, 255,.7)!important}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left:.2rem!important;}
  
/*hover*/
abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    cursor: url('https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/favicon.ico'),auto;
}

h1,h2,h3,h4,h5,h6{font-weight:normal;line-height: 1.3;text-align: center;font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;}
.header-h{font-size: 2rem;font-weight: bold}

@media screen and (max-width: 801px) {
  .el-submenu__title{padding: 0!important}
.header-h{font-size: 0.8rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


/* 默认css */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font-family: "Microsoft Yahei","Hiragino Sans GB",tahoma,arial,;
  text-decoration: none;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	/* line-height: 1; */
  height:100%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* 侧边下拉条隐藏 */
.el-scrollbar__wrap {
  overflow-x: hidden!important;
}
.is-horizontal{display: none;}
.el-divider__text{background-color: transparent!important;}



/* feiji */

/* General stuff */
/* The airplane image */

.header_inner{
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    overflow: hidden;
}

.header_inner #airplane {
    display: block;
    /* The hover animation */
    
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
    position: absolute;
    height: 80px;
    left: 50%;
    top: 35%;
}
.header_inner .middle_child {
    width: 80px;
    height: 80px;
    transition: all 1s ease-out;
    background: url(./assets/angel.png);
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
  padding-left: 30%;color: #fefefe;font-size: 1rem;line-height: 100%;height: 100%;padding-top: 5%;
}
</style>
