<template>
  <div class="profile">
    <div id="header">
      <h2 class="header-h">❤西西</h2>
    </div>
    <div id="main">
      <div class="main-inner">
        <el-carousel :interval="4000" type="card" height="18rem" class="main-inner-item">
          <el-carousel-item v-for="item in items" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <img :src="item" alt="唐西西">
          </el-carousel-item>
        </el-carousel>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/love/1.jpg" alt="">
          </div>
          <p class="main-text">感觉不是很好看
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/love/2.jpg" alt="">
          </div>
          <p class="main-text">这腿爱了爱了
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/love/4.jpg" alt="">
          </div>
          <p class="main-text">这就很漂亮了
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/love/3.jpg" alt="">
          </div>
          <p class="main-text">想牵着你去历史上的名胜古迹旅行
          </p>
        </div>
        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/love/6.jpg" alt="">
          </div>
          <p class="main-text">以后有什么好吃的好玩的能不能算我一个
          </p>
        </div>

        <div class="main-one">
          <div
            class="main-pic"
            data-aos-easing="ease-out-back"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/gif1.gif" alt="东东的梦想">
          </div>
          <p class="main-text">入我相思门，知我相思苦，长相思兮长相忆，短相思兮无穷极
          </p>
        </div>
        <p id="regtime"></p>
  <el-timeline :reverse="reverse" class="center">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"

      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xixi",
  data() {
    return {
      msg: "xixi",
      items: [
        "/static/bigimg/love1.jpg",
        "/static/bigimg/love4.jpg",
        "/static/bigimg/love2.jpg",
      ],
        activities: [{
          content: '我们认识的第一天JK渔夫帽',
          timestamp: '2020-08-07',
          type: 'primary ',
          icon: 'el-icon-s-flag'
        }, {
          content: '晚上有人敲门吓到你了，我却睡着了,对不起',
          timestamp: '2020-08-10',
          type: 'danger ',
          icon: 'el-icon-close'
        }, {
          content: '我希望今晚能做你的门神',
          timestamp: '2020-08-11',
          type: 'success ',
          icon: 'el-icon-check'
        }, {
          content: '被你赶出了门，我知道错了，以后再喜欢也不敢乱来了',
          timestamp: '2020-08-14',
          type: 'warning  ',
          icon: 'el-icon-close'
        }, {
          content: '在我满眼都是你的时候，却把你弄丢了，夜深了，如果不能给你幸福，那就默默祝福你吧',
          timestamp: '2020-08-17',
          type: 'danger  ',
          icon: 'el-icon-close'
        }, {
          content: '我想每天叫你起床，喂你吃早餐，明早我送旺仔到你家门前，希望你能看见',
          timestamp: '2020-08-18',
          type: 'info  ',
          icon: 'el-icon-star-on'
        }, {
          content: '以后和你一起的每一件事我都要记录下来',
          timestamp: '2079-08-07',
          type: 'primary',
          icon: 'el-icon-more'
        }]

    };
  },
  mounted() {

    var self = this
    document.title = '♥已成回忆';
    setInterval(function(){
      self.time("2020/08/07 20:10:10");
    },10000)
  },
  methods: {
    addZero(time) {
      if (time < 10) {
        return "0" + time;
      } else {
        return time;
      }
    },
    time(regtime) {
        var regtime = new Date(regtime);
        var newtime = new Date();
        var timesecond = parseInt(newtime.getTime() - regtime.getTime()) / 1000;
        var d = parseInt(timesecond / (24 * 60 * 60));
        var h = parseInt((timesecond / (60 * 60)) % 24);
        var m = parseInt((timesecond / 60) % 60);
        var s = parseInt(timesecond % 60);
        d = this.addZero(d);
        h = this.addZero(h);
        m = this.addZero(m);
        // s = this.addZero(s);
        document.getElementById("regtime").innerText = 
          "你让我痴迷了" + d + "天" + h + "小时" + m + "分"
    }
  }
};
</script>
<style scoped>
@import "../../public/css/love.css";
.center{padding-top: 3rem;}
</style>
