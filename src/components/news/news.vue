<template>
  <div class="news" style="height:100vh">
    <el-scrollbar style="height: 100%;"> <!-- 滚动条 -->
  <news_header></news_header>
  <div id="main">
    <dl class="classiclist">
     <router-link to="" class="classiclist-a">
      <dd class="classiclist-img"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/news1.jpg" alt="朱东东当你扛不住的时候"></dd>
      <dt class="classiclist-h">别动我</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news6" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/chip1.jpg" alt="看看中国“芯”"></dd>
      <dt class="classiclist-h">中国“芯”<svg t="1589599648395" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3518" width="30" height="30"><path d="M494.344 222.896h35.31v112.552h-35.31zM494.344 653.242h35.31v105.932h-35.31z" fill="#C83741" p-id="3519"></path><path d="M437.104 705.656c-18.086 0-36.174-6.878-49.948-20.654-27.518-27.55-27.518-72.344 0-99.862l24.966-24.982-49.932-49.932-24.966 24.966c-27.568 27.568-72.344 27.536-99.88 0-27.518-27.55-27.518-72.344 0-99.862 27.536-27.536 72.312-27.568 99.88 0l24.966 24.966 49.932-49.932-24.966-24.982c-27.536-27.536-27.536-72.326 0-99.862 27.536-27.526 72.312-27.542 99.88 0L512 310.482l24.966-24.966c27.568-27.542 72.344-27.526 99.88 0 27.536 27.536 27.536 72.326 0 99.862L611.88 410.36l49.932 49.932 24.966-24.966c27.568-27.568 72.344-27.536 99.88 0 27.518 27.518 27.518 72.312 0 99.862-27.518 27.55-72.326 27.55-99.88 0l-24.966-24.966-49.932 49.932 24.966 24.982c27.518 27.518 27.518 72.312 0 99.862-27.518 27.55-72.326 27.55-99.88 0L512 660.036 487.032 685c-13.772 13.776-31.86 20.656-49.928 20.656z m0-120.518l-24.982 24.966c-13.758 13.758-13.758 36.156 0 49.932 13.81 13.776 36.206 13.742 49.948 0l24.966-24.966-49.932-49.932z m99.862 49.932l24.966 24.966c13.758 13.776 36.188 13.742 49.948 0 13.758-13.776 13.758-36.174 0-49.932l-24.982-24.966-49.932 49.932z m-74.898-74.914L512 610.102l49.932-49.948L512 510.226l-49.932 49.93z m74.898-74.896l49.93 49.932 49.948-49.932-49.948-49.932-49.93 49.932z m-149.812 0l49.948 49.932 49.932-49.932-49.932-49.932-49.948 49.932z m299.622 0l24.966 24.966c13.724 13.742 36.156 13.758 49.948 0 13.758-13.776 13.758-36.174 0-49.932-13.776-13.776-36.206-13.742-49.948 0l-24.966 24.966z m-424.468 24.966c13.81 13.758 36.206 13.758 49.948 0l24.966-24.966-24.966-24.966c-13.758-13.758-36.188-13.776-49.948 0-13.758 13.758-13.758 36.154 0 49.932z m199.76-99.864L512 460.296l49.932-49.932L512 360.416l-49.932 49.946z m74.898-74.914l49.93 49.932 24.982-24.966c13.758-13.758 13.758-36.174 0-49.932-13.758-13.776-36.188-13.802-49.948 0l-24.964 24.966z m-99.862-35.292c-9.052 0-18.104 3.44-24.982 10.328-13.758 13.758-13.758 36.174 0 49.932l24.982 24.966 49.932-49.934-24.966-24.966a35.2 35.2 0 0 0-24.966-10.326z" fill="#FF4B4B" p-id="3520"></path><path d="M511.998 776.828m-35.31 0a35.31 35.31 0 1 0 70.62 0 35.31 35.31 0 1 0-70.62 0Z" fill="#FFCF65" p-id="3521"></path><path d="M512.058 812.138h-0.116c-19.926 0-36.524 15.274-38.18 35.13l-13.134 157.61c-0.858 10.296 7.262 19.122 17.594 19.122h67.556c10.328 0 18.452-8.828 17.594-19.12l-13.134-157.61c-1.656-19.858-18.256-35.132-38.18-35.132zM499.514 234.688l-45.652-45.652a17.656 17.656 0 0 1 0-24.968l45.652-45.652a17.656 17.656 0 0 1 24.968 0l45.652 45.652a17.656 17.656 0 0 1 0 24.968l-45.652 45.652a17.656 17.656 0 0 1-24.968 0z" fill="#FF4B4B" p-id="3522"></path><path d="M529.654 57.862V17.656c0-9.75-7.896-17.656-17.656-17.656s-17.656 7.906-17.656 17.656v40.208c-10.51 6.116-17.656 17.374-17.656 30.414 0 19.5 15.81 35.31 35.31 35.31s35.31-15.81 35.31-35.31c0.004-13.04-7.142-24.298-17.652-30.416z" fill="#C83741" p-id="3523"></path></svg></dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news13" class="classiclist-a">
      <dd class="classiclist-img"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/video1.png" alt="花钱使人快乐？"></dd>
      <dt class="classiclist-h">提前消费会幸福吗？<svg t="1590288971460" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11177" data-spm-anchor-id="a313x.7781069.0.i53" width="20" height="20"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-965.485714a453.485714 453.485714 0 1 0 453.485714 453.485714A453.485714 453.485714 0 0 0 512 58.514286z" fill="#d81e06" p-id="11178"></path><path d="M424.228571 737.28a73.142857 73.142857 0 0 1-36.571428-9.947429 72.118857 72.118857 0 0 1-36.571429-63.341714V360.009143a73.142857 73.142857 0 0 1 109.714286-63.341714l263.314286 151.990857a73.142857 73.142857 0 0 1 0 126.683428l-263.314286 151.990857a73.142857 73.142857 0 0 1-36.571429 9.947429z m0-392.045714a14.628571 14.628571 0 0 0-7.314285 2.048 14.628571 14.628571 0 0 0-7.314286 12.726857v303.981714a14.628571 14.628571 0 0 0 7.314286 12.726857 14.628571 14.628571 0 0 0 14.628571 0l263.314286-151.990857a14.628571 14.628571 0 0 0 0-25.453714l-263.314286-151.990857a14.628571 14.628571 0 0 0-7.314286-2.048z" fill="#d81e06" p-id="11179" data-spm-anchor-id="a313x.7781069.0.i54" class="selected"></path></svg></dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news10" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/news10.jpg" alt="如果你觉得自己过得惨，就去看看日本黑帮"></dd>
      <dt class="classiclist-h">如果你觉得自己过得惨，就去看看日本黑帮</dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news11" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/news4.png" alt="为无知买单"></dd>
      <dt class="classiclist-h">为无知买单</dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news12" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/news3.png" alt="专赚女人钱，毛利超过茅台"></dd>
      <dt class="classiclist-h">赚女人钱，毛利超茅台<img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/gif1.gif"></dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news4" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/172347349686.gif" alt="别乱买了，面膜真正的作用就这一个"></dd>
      <dt class="classiclist-h">别乱买了，面膜真正的作用就这一个</dt>
     </router-link>
    </dl>    
    <dl class="classiclist">
     <router-link to="/news9" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../../static/bigimg/news9.jpg" alt="只骗有钱人的童星捕手"></dd>
      <dt class="classiclist-h">只骗有钱人的童星捕手</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news8" class="classiclist-a">
      <dd class="classiclist-img"><img src="https://s3.ifanr.com/wp-content/uploads/2019/03/46749037faee1470eb11baa86b0b6497213b2582.jpg!720" alt="东BAT公司内部岗位级别和薪资结构"></dd>
      <dt class="classiclist-h">中介房源照片修图</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news2" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic19.jpg" alt="东BAT公司内部岗位级别和薪资结构"></dd>
      <dt class="classiclist-h">BAT公司内部岗位级别和薪资结构</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news5" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/news/1231.jpg" alt="你看不懂的眼镜"></dd>
      <dt class="classiclist-h">什么算好眼镜</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news3" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic26.jpg" alt="一个小格子一天500万"></dd>
      <dt class="classiclist-h">一个小格子一天500万</dt>
     </router-link>
    </dl>
    <dl class="classiclist">
     <router-link to="/news7" class="classiclist-a">
      <dd class="classiclist-img"><img src="https://p.nanrenwo.net/uploads/allimg/170925/8472-1F925150951.jpg" alt="女主播：月入十万，我还是很孤独"></dd>
      <dt class="classiclist-h">女主播：月入十万，我还是很孤独</dt>
     </router-link>
    </dl>        
    <!-- <dl class="classiclist">
     <router-link to="/news1" class="classiclist-a">
      <dd class="classiclist-img"><img src="../../assets/classic9.gif" alt="2019UI设计趋势"></dd>
      <dt class="classiclist-h">2019UI设计趋势</dt>
     </router-link>
    </dl> -->
  </div>  
    </el-scrollbar>
  </div>
</template>

<script>
import news_header from "./news_header";
export default {
  name: 'news',
  data () {
    return {
      msg: 'news'
    }
  },
  components:{
    news_header
  },
  mounted() {
    document.title = "有深度的好内容"
  }  
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column }
.classiclist{height: 13rem!important;width: 43%!important}
.classiclist-h{font-size: .8rem!important;line-height: 250%!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 

#main{width: 90%;height: 100%;display: flex;margin: 0 auto;justify-content: center;flex-wrap: wrap;padding-bottom: 50px;padding-top: 20px;}
.classiclist{height: 350px;
    width: 262px;
    overflow: hidden;
    background-color: rgba(255,255,255,1);
    border: 1px solid #e8f8ff;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 10px 15px rgba(0,0,0,.05);
    transition: all .2s;
    margin: 2rem .5em 0;}
.classiclist:hover{box-shadow: 0 5px 15px rgba(0,0,0,.3);}
.classiclist:hover .classiclist-h{background-color: rgba(19, 177, 225, 0.705);color: #fff;}
.classiclist-a{width: 100%;height: 100%;display: block;border-radius: 5px;overflow: hidden;position: relative;}
.classiclist-h{line-height:300%;text-align: center;height: 14%;
    font-size: 16px;
    color: #6c7b8b;
    text-indent: 0;}
.classiclist-img{overflow: hidden;height: 86%;transition: all .5s;}
.classiclist-h img{width: 20px;padding-left: 10px;}
.classiclist-img img{height: 86%;transition: all 1s ease-in-out;position: absolute;left: 0;top: 0; will-change: transform;}
.classiclist-img img:hover{height: 86%;position: absolute;left: 0;top: 0;transform: translate(-100%,0);margin-left: 100%;}
#header .header_p{font-size: .7rem;color: #666;text-align: center;padding-top: 1rem;}
</style>
