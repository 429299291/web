<template>
  <div class="index">
      <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
  <div id='title' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-delay="500">
    <span>HELLO WORLD</span>
    <br>
    <span class="textmain">The more me see, the more you understand humility and admiration</span>
  </div>
    <div id="banner">
      <div class="headcanvas">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
        <div class="line line5"></div>
        <div class="line line6"></div>
        <div class="line line7"></div>
        <div class="line line8"></div>
        <div class="line line9"></div>
        <div class="line line10"></div>
        <div class="line line11"></div>
        <div class="line line12"></div>
        <div class="line line13"></div>
        <div class="line line14"></div>
        <div class="line line15"></div>
        <div class="line line16"></div>
        <div class="line line17"></div>
        <div class="line line18"></div>
        <div class="line line19"></div>
        <div class="line line20"></div>
        <div class="line line21"></div>
        <div class="line line22"></div>
        <div class="line line23"></div>
        <div class="line line24"></div>
        <div class="line line25"></div>
        <div class="line line26"></div>
        <div class="line line27"></div>
        <div class="line line28"></div>
        <div class="line line29"></div>
        <div class="line line30"></div>
      </div>
      <!-- <div class="hero" data-aos="fade-down"
        data-aos-duration="1500">
        <h5 class="animate__animated animate__bounce" >看得越远</h5>
        <p>So have to be more humble and stand in awe of</p>
      </div> -->
      <small data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-delay="15000" class="beian"><a href="http://www.beian.miit.gov.cn" target="view_frame"><el-image :src="beian" fit="contain"  class='beian_img'></el-image>粤ICP备 18068542号</a></small>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexq",
  data() {
    return {
      msg: "index1",
      beian: require('../assets/beian.png'),
    };
  },
  methods: {
  },
  computed: {},
  mounted() {
    document.title = "猪弟弟❤";
  }
};
</script>

<style scoped>
@media screen and (max-width: 1025px) {
  .headcanvas {
    transform: scale(0.1) !important;
    top: 15% !important;
  }
  span{font-size: 2rem;}

} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */
@media screen and (max-width: 1200px) {
  .headcanvas {
    transform: scale(0.1) !important;
    top: 15% !important;
  }
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */
/* body{height: 100%;overflow: hidden;width: 100%;} */
@keyframes dongdong {
  0% {
    position: absolute;
    left: 45%;
    bottom: 5px;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  50% {
    position: absolute;
    left: 50%;
    bottom: 5px;
    opacity: 1;
    width: 3px;
    height: 1px;
  }
  100% {
    position: absolute;
    left: 55%;
    bottom: 5px;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
}
@keyframes dongdong1 {
  0% {
    position: absolute;
    left: 45%;
    bottom: 5px;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  50% {
    position: absolute;
    left: 50%;
    bottom: 5px;
    opacity: 1;
    width: 3px;
    height: 1px;
  }
  100% {
    position: absolute;
    left: 55%;
    bottom: 5px;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
}

:root {
  --filter: invert(20%);
  --mix-blend-mode: overlay;
  --black: #000;
  --white: #fff;
}
.index {height: 100vh;overflow: hidden;}
/*banner*/
#banner {
  width: 100%;
  /* height: 100vh; */
  background-size: cover;

  /* 融合背景大字 */
  color: var(--black);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  /* min-height: 100vh; */
  background-repeat: no-repeat;
  background-size: cover;
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB", "Montserrat", Arial, serif;
  /* filter: var(--filter); */
  }
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bolder;
  font-size: 7vmin;
  display: block;
  margin: 0 auto;
  position: absolute;
  width: 100%;
  top: 43%;  
  z-index: 999;
  left: 50%;
  padding-top: 15rem;
  transform: translate(-50%,-50%)!important;
  mix-blend-mode: var(--mix-blend-mode);
}
.hero h5{font-weight:700;font-size: 1.5rem;opacity: 0.5;}
.hero p{padding-top: 20px;font-size: 1rem;width: 100%;opacity: 0.3;}
.beian {
  position: absolute;
  left: 50%;
  transform: translate(-50% ,0);
  bottom: 10px;
  z-index: 999;
  /* display: none; */
}
.beian a{color:rgba(200, 200, 200, 0.9);font-size: 0.5rem;}
.beian .el-image{padding-right: 0.2rem!important;width: 0.8rem!important}

/*headcanvas*/
.line {
  margin-top: 30px;
  background-color: #31d2f7;
  height: 5px;
  position: absolute;
  animation: 🌀;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 300px;
  border-radius: 3px;
}

@keyframes 🌀 {
  0% {
    top: 0;
    transform: rotateZ(0deg);
    background-color: tomato;
  }
  25% {
    top: 200px;
    transform: rotateZ(90deg);
    background-color: mediumslateblue;
  }
  50% {
    top: 0;
    transform: rotateZ(180deg);
    background-color: mediumspringgreen;
  }
  75% {
    top: 200px;
    transform: rotateZ(270deg);
    background-color: mediumslateblue;
  }
  100% {
    top: 0;
    transform: rotateZ(360deg);
    background-color: tomato;
  }
}

.line1 {
  animation-delay: 100ms;
  width: 300px;
}
.line2 {
  animation-delay: 200ms;
}
.line3 {
  animation-delay: 300ms;
}
.line4 {
  animation-delay: 400ms;
}
.line5 {
  animation-delay: 500ms;
}
.line6 {
  animation-delay: 600ms;
}
.line7 {
  animation-delay: 700ms;
}
.line8 {
  animation-delay: 800ms;
}
.line9 {
  animation-delay: 900ms;
}

.line10 {
  animation-delay: 1000ms;
}

.line11 {
  animation-delay: 1100ms;
}
.line12 {
  animation-delay: 1200ms;
}
.line13 {
  animation-delay: 1300ms;
}
.line14 {
  animation-delay: 1400ms;
}
.line15 {
  animation-delay: 1500ms;
}
.line16 {
  animation-delay: 1600ms;
}
.line17 {
  animation-delay: 1700ms;
}
.line18 {
  animation-delay: 1800ms;
}
.line19 {
  animation-delay: 1900ms;
}
.line20 {
  animation-delay: 2000ms;
}
.line21 {
  animation-delay: 2100ms;
}
.line22 {
  animation-delay: 2200ms;
}
.line23 {
  animation-delay: 2300ms;
}
.line24 {
  animation-delay: 2400ms;
}
.line25 {
  animation-delay: 2500ms;
}
.line26 {
  animation-delay: 2600ms;
}
.line27 {
  animation-delay: 2700ms;
}
.line28 {
  animation-delay: 2800ms;
}
.line29 {
  animation-delay: 2900ms;
}
.line30 {
  animation-delay: 3000ms;
}
.headcanvas {
  position: absolute;
  top: 15%;
  width: 100%;
  transform: scale(0.15);
  display: flex;
  justify-content: center;
  z-index: 100;
  align-items: flex-start;
}
/*星空---------------------------------*/
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
.index {
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1388px 1581px #FFF , 830px 1128px #FFF , 163px 1072px #FFF , 1009px 1297px #FFF , 659px 518px #FFF , 1653px 6px #FFF , 1249px 1705px #FFF , 1851px 1022px #FFF , 1928px 1241px #FFF , 1422px 1335px #FFF , 1542px 222px #FFF , 1979px 1188px #FFF , 266px 1618px #FFF , 559px 33px #FFF , 1877px 1965px #FFF , 328px 652px #FFF , 50px 1123px #FFF , 1268px 1899px #FFF , 346px 708px #FFF , 94px 952px #FFF , 492px 450px #FFF , 1319px 923px #FFF , 696px 1017px #FFF , 631px 1450px #FFF , 1695px 120px #FFF , 361px 1423px #FFF , 303px 122px #FFF , 1062px 976px #FFF , 184px 946px #FFF , 1900px 1625px #FFF , 1520px 1833px #FFF , 1584px 889px #FFF , 1454px 790px #FFF , 1818px 501px #FFF , 1193px 1842px #FFF , 1299px 1890px #FFF , 815px 394px #FFF , 1968px 84px #FFF , 1628px 1266px #FFF , 1045px 682px #FFF , 828px 1907px #FFF , 786px 503px #FFF , 839px 1692px #FFF , 1344px 1263px #FFF , 626px 1995px #FFF , 759px 1866px #FFF , 1249px 1415px #FFF , 1971px 412px #FFF , 561px 57px #FFF , 541px 1084px #FFF , 1272px 1804px #FFF , 1878px 375px #FFF , 655px 145px #FFF , 1629px 249px #FFF , 1495px 1656px #FFF , 636px 399px #FFF , 1308px 590px #FFF , 809px 187px #FFF , 220px 532px #FFF , 276px 1499px #FFF , 429px 1377px #FFF , 910px 153px #FFF , 472px 1780px #FFF , 818px 151px #FFF , 969px 57px #FFF , 332px 16px #FFF , 1439px 212px #FFF , 1794px 716px #FFF , 570px 1398px #FFF , 1983px 1088px #FFF , 617px 804px #FFF , 239px 488px #FFF , 511px 921px #FFF , 1184px 28px #FFF , 804px 1084px #FFF , 840px 1854px #FFF , 1195px 1847px #FFF , 1810px 420px #FFF , 822px 1575px #FFF , 923px 618px #FFF , 1123px 1423px #FFF , 1390px 398px #FFF , 1903px 591px #FFF , 1989px 1507px #FFF , 940px 495px #FFF , 1871px 732px #FFF , 1783px 470px #FFF , 534px 832px #FFF , 1841px 1735px #FFF , 780px 1807px #FFF , 83px 902px #FFF , 1905px 79px #FFF , 769px 14px #FFF , 55px 1827px #FFF , 1px 1364px #FFF , 1335px 1015px #FFF , 1873px 1026px #FFF , 715px 1528px #FFF , 1948px 240px #FFF , 920px 286px #FFF , 821px 1824px #FFF , 1806px 537px #FFF , 1658px 108px #FFF , 985px 590px #FFF , 1600px 1357px #FFF , 356px 1315px #FFF , 682px 1357px #FFF , 1169px 8px #FFF , 842px 1288px #FFF , 89px 659px #FFF , 1580px 1910px #FFF , 944px 890px #FFF , 1683px 839px #FFF , 1018px 210px #FFF , 1689px 1356px #FFF , 1804px 1808px #FFF , 1206px 1949px #FFF , 974px 1475px #FFF , 1340px 1856px #FFF , 476px 586px #FFF , 1201px 14px #FFF , 1783px 263px #FFF , 1559px 259px #FFF , 679px 1585px #FFF , 141px 1930px #FFF , 1691px 1967px #FFF , 1145px 935px #FFF , 94px 1184px #FFF , 870px 1994px #FFF , 806px 308px #FFF , 1351px 557px #FFF , 1582px 1721px #FFF , 909px 745px #FFF , 1612px 1636px #FFF , 1245px 1030px #FFF , 1640px 991px #FFF , 259px 1063px #FFF , 553px 115px #FFF , 669px 1751px #FFF , 686px 1901px #FFF , 1042px 1322px #FFF , 1840px 1207px #FFF , 517px 840px #FFF , 818px 1206px #FFF , 444px 1912px #FFF , 406px 1417px #FFF , 176px 358px #FFF , 1976px 128px #FFF , 19px 1095px #FFF , 584px 1483px #FFF , 441px 1968px #FFF , 1404px 1473px #FFF , 1119px 28px #FFF , 753px 1269px #FFF , 355px 344px #FFF , 1385px 1748px #FFF , 1868px 1134px #FFF , 1601px 1535px #FFF , 1834px 866px #FFF , 1428px 1318px #FFF , 1557px 1611px #FFF , 1764px 534px #FFF , 825px 1861px #FFF , 1255px 1061px #FFF , 87px 1144px #FFF , 1789px 405px #FFF , 1398px 420px #FFF , 976px 1444px #FFF , 6px 509px #FFF , 1116px 1343px #FFF , 700px 1257px #FFF , 1452px 842px #FFF , 1091px 820px #FFF , 367px 1819px #FFF , 95px 1727px #FFF , 882px 1577px #FFF , 664px 1385px #FFF , 516px 738px #FFF , 1441px 1822px #FFF , 895px 1883px #FFF , 973px 741px #FFF , 219px 82px #FFF , 1917px 1520px #FFF , 1371px 902px #FFF , 979px 1578px #FFF , 1352px 1225px #FFF , 341px 764px #FFF , 497px 1865px #FFF , 83px 1072px #FFF , 126px 1910px #FFF , 306px 1458px #FFF , 707px 938px #FFF , 1470px 1458px #FFF , 1345px 867px #FFF , 668px 912px #FFF , 68px 1380px #FFF , 1069px 1674px #FFF , 1039px 1256px #FFF , 290px 1644px #FFF , 776px 1607px #FFF , 588px 495px #FFF , 8px 989px #FFF , 433px 1581px #FFF , 910px 51px #FFF , 1890px 521px #FFF , 792px 1829px #FFF , 57px 1652px #FFF , 1371px 843px #FFF , 1045px 1983px #FFF , 1340px 514px #FFF , 915px 648px #FFF , 134px 1041px #FFF , 1289px 393px #FFF , 1364px 1799px #FFF , 1923px 61px #FFF , 1764px 277px #FFF , 1838px 1528px #FFF , 1319px 1484px #FFF , 263px 974px #FFF , 327px 707px #FFF , 1258px 911px #FFF , 111px 987px #FFF , 753px 470px #FFF , 1732px 1691px #FFF , 1993px 1853px #FFF , 532px 661px #FFF , 570px 1441px #FFF , 1729px 111px #FFF , 128px 494px #FFF , 1168px 1665px #FFF , 420px 128px #FFF , 862px 651px #FFF , 1558px 1275px #FFF , 1742px 1379px #FFF , 135px 617px #FFF , 1977px 1570px #FFF , 1208px 1502px #FFF , 1999px 511px #FFF , 993px 1124px #FFF , 697px 1990px #FFF , 1444px 801px #FFF , 1096px 716px #FFF , 1592px 1941px #FFF , 89px 1328px #FFF , 1540px 43px #FFF , 950px 405px #FFF , 1379px 246px #FFF , 1003px 441px #FFF , 9px 1677px #FFF , 262px 1122px #FFF , 266px 1559px #FFF , 623px 143px #FFF , 1134px 548px #FFF , 1846px 315px #FFF , 131px 1614px #FFF , 1376px 875px #FFF , 590px 1686px #FFF , 1780px 1724px #FFF , 1881px 1209px #FFF , 758px 1498px #FFF , 1982px 500px #FFF , 15px 1352px #FFF , 1249px 1805px #FFF , 1121px 1671px #FFF , 1535px 1320px #FFF , 1505px 300px #FFF , 1666px 769px #FFF , 699px 14px #FFF , 1050px 1029px #FFF , 1375px 1657px #FFF , 1743px 1px #FFF , 454px 810px #FFF , 1149px 578px #FFF , 1304px 201px #FFF , 633px 1832px #FFF , 309px 1311px #FFF , 950px 1154px #FFF , 643px 134px #FFF , 1842px 1100px #FFF , 1314px 664px #FFF , 1419px 1311px #FFF , 801px 994px #FFF , 111px 1119px #FFF , 1267px 401px #FFF , 1211px 245px #FFF , 1804px 628px #FFF , 546px 626px #FFF , 3px 1588px #FFF , 1700px 1684px #FFF , 1482px 341px #FFF , 198px 1290px #FFF , 1779px 1446px #FFF , 286px 1443px #FFF , 1860px 1221px #FFF , 1400px 309px #FFF , 862px 1592px #FFF , 1752px 1671px #FFF , 1472px 450px #FFF , 1119px 970px #FFF , 827px 919px #FFF , 418px 1541px #FFF , 635px 825px #FFF , 439px 1335px #FFF , 591px 248px #FFF , 994px 654px #FFF , 1017px 118px #FFF , 1288px 1291px #FFF , 250px 1948px #FFF , 1116px 440px #FFF , 1642px 1161px #FFF , 1174px 447px #FFF , 98px 1893px #FFF , 73px 753px #FFF , 1226px 1972px #FFF , 1120px 1445px #FFF , 1210px 376px #FFF , 1019px 1822px #FFF , 1683px 1096px #FFF , 1857px 1682px #FFF , 718px 68px #FFF , 887px 969px #FFF , 1110px 506px #FFF , 1048px 1710px #FFF , 1604px 995px #FFF , 533px 501px #FFF , 1964px 1102px #FFF , 1337px 51px #FFF , 1259px 1297px #FFF , 1003px 1413px #FFF , 421px 1876px #FFF , 1274px 1867px #FFF , 786px 953px #FFF , 1509px 317px #FFF , 1987px 1321px #FFF , 399px 912px #FFF , 939px 1668px #FFF , 679px 1460px #FFF , 157px 1459px #FFF , 435px 121px #FFF , 1106px 1770px #FFF , 453px 621px #FFF , 910px 1069px #FFF , 1819px 1209px #FFF , 1530px 422px #FFF , 21px 728px #FFF , 1818px 1560px #FFF , 295px 1873px #FFF , 1958px 231px #FFF , 1903px 353px #FFF , 693px 1160px #FFF , 107px 571px #FFF , 142px 1291px #FFF , 1761px 161px #FFF , 1099px 239px #FFF , 999px 1397px #FFF , 1871px 672px #FFF , 656px 756px #FFF , 747px 1624px #FFF , 1514px 735px #FFF , 1455px 1888px #FFF , 1583px 1255px #FFF , 797px 1720px #FFF , 1360px 1558px #FFF , 101px 1580px #FFF , 712px 660px #FFF , 1681px 1054px #FFF , 1159px 889px #FFF , 1895px 287px #FFF , 763px 1075px #FFF , 8px 1011px #FFF , 61px 1339px #FFF , 345px 1937px #FFF , 1307px 1808px #FFF , 1568px 1729px #FFF , 1707px 1616px #FFF , 1486px 1921px #FFF , 358px 1331px #FFF , 785px 1954px #FFF , 1833px 1710px #FFF , 1560px 1526px #FFF , 1221px 311px #FFF , 822px 63px #FFF , 1022px 845px #FFF , 1470px 1639px #FFF , 1337px 1156px #FFF , 1978px 771px #FFF , 1092px 1426px #FFF , 1760px 1679px #FFF , 710px 1573px #FFF , 1275px 1686px #FFF , 276px 452px #FFF , 1521px 1258px #FFF , 562px 318px #FFF , 1136px 1184px #FFF , 939px 1723px #FFF , 1734px 577px #FFF , 1962px 661px #FFF , 336px 944px #FFF , 1002px 395px #FFF , 1638px 557px #FFF , 1175px 1787px #FFF , 174px 1869px #FFF , 1953px 1048px #FFF , 769px 144px #FFF , 1930px 1326px #FFF , 757px 1527px #FFF , 1532px 1465px #FFF , 1179px 779px #FFF , 1597px 1926px #FFF , 1829px 1042px #FFF , 1169px 795px #FFF , 802px 592px #FFF , 340px 1439px #FFF , 689px 1496px #FFF , 1136px 947px #FFF , 1369px 379px #FFF , 1493px 1784px #FFF , 1192px 652px #FFF , 1410px 251px #FFF , 576px 625px #FFF , 289px 357px #FFF , 554px 627px #FFF , 656px 1865px #FFF , 1282px 1501px #FFF , 1324px 694px #FFF , 798px 721px #FFF , 989px 1320px #FFF , 213px 288px #FFF , 138px 375px #FFF , 1687px 393px #FFF , 1092px 2000px #FFF , 396px 909px #FFF , 816px 1312px #FFF , 848px 1276px #FFF , 1520px 1301px #FFF , 97px 883px #FFF , 1804px 1449px #FFF , 1777px 1172px #FFF , 1659px 220px #FFF , 911px 590px #FFF , 1855px 1422px #FFF , 225px 1730px #FFF , 1464px 1527px #FFF , 1084px 334px #FFF , 1775px 273px #FFF , 122px 1007px #FFF , 1999px 346px #FFF , 492px 964px #FFF , 1397px 42px #FFF , 316px 1546px #FFF , 1876px 1772px #FFF , 1514px 599px #FFF , 355px 1320px #FFF , 157px 639px #FFF , 950px 1110px #FFF , 1756px 1090px #FFF , 1373px 1392px #FFF , 1438px 1175px #FFF , 96px 1958px #FFF , 1757px 764px #FFF , 647px 1439px #FFF , 1654px 1795px #FFF , 310px 1197px #FFF , 803px 281px #FFF , 774px 1224px #FFF , 1532px 914px #FFF , 2px 1734px #FFF , 1898px 1816px #FFF , 1668px 1175px #FFF , 1181px 445px #FFF , 663px 1039px #FFF , 1261px 35px #FFF , 104px 710px #FFF , 754px 1629px #FFF , 656px 1526px #FFF , 115px 356px #FFF , 1262px 1800px #FFF , 358px 759px #FFF , 1721px 697px #FFF , 338px 330px #FFF , 365px 1898px #FFF , 1623px 89px #FFF , 1335px 1662px #FFF , 1875px 1799px #FFF , 1473px 213px #FFF , 503px 822px #FFF , 537px 1389px #FFF , 763px 1298px #FFF , 245px 1839px #FFF , 1196px 824px #FFF , 1460px 586px #FFF , 350px 1792px #FFF , 1905px 966px #FFF , 826px 117px #FFF , 382px 487px #FFF , 1263px 1744px #FFF , 361px 1935px #FFF , 1167px 286px #FFF , 1294px 155px #FFF , 1571px 1471px #FFF , 1011px 1140px #FFF , 256px 1031px #FFF , 598px 639px #FFF , 45px 1373px #FFF , 1195px 261px #FFF , 351px 964px #FFF , 1497px 1289px #FFF , 1259px 1817px #FFF , 1014px 1728px #FFF , 1512px 87px #FFF , 1581px 855px #FFF , 1467px 976px #FFF , 50px 1643px #FFF , 1519px 1977px #FFF , 347px 1573px #FFF , 722px 877px #FFF , 217px 1549px #FFF , 1780px 1869px #FFF , 185px 1727px #FFF , 1533px 1997px #FFF , 76px 336px #FFF , 663px 1687px #FFF , 1px 612px #FFF , 1818px 92px #FFF , 1064px 178px #FFF , 605px 928px #FFF , 1282px 1120px #FFF , 1671px 748px #FFF , 1587px 1211px #FFF , 1494px 98px #FFF , 1365px 357px #FFF , 1485px 1283px #FFF , 1804px 508px #FFF , 919px 873px #FFF , 1772px 1377px #FFF , 1858px 1855px #FFF , 653px 575px #FFF , 1784px 140px #FFF , 830px 126px #FFF , 1995px 1861px #FFF , 333px 741px #FFF , 628px 588px #FFF , 1918px 1915px #FFF , 646px 877px #FFF , 597px 1556px #FFF , 1052px 762px #FFF , 226px 979px #FFF , 443px 216px #FFF , 540px 121px #FFF , 385px 986px #FFF , 1766px 311px #FFF , 235px 1997px #FFF , 1989px 659px #FFF , 296px 720px #FFF , 103px 1024px #FFF , 566px 1153px #FFF , 995px 130px #FFF , 582px 1308px #FFF , 695px 1962px #FFF , 1885px 1349px #FFF , 682px 358px #FFF , 1534px 1035px #FFF , 541px 332px #FFF , 1825px 1538px #FFF , 1393px 373px #FFF , 1545px 1053px #FFF , 1472px 1237px #FFF , 1652px 124px #FFF , 1017px 1090px #FFF , 973px 1818px #FFF , 1507px 1180px #FFF , 1049px 1038px #FFF , 1543px 1056px #FFF , 498px 1610px #FFF , 931px 960px #FFF , 692px 863px #FFF , 1339px 25px #FFF , 1156px 1398px #FFF , 945px 669px #FFF , 334px 1918px #FFF , 121px 1624px #FFF , 308px 1244px #FFF , 524px 1581px #FFF , 532px 1141px #FFF , 838px 343px #FFF , 1895px 1347px #FFF , 954px 231px #FFF , 137px 534px #FFF , 57px 1805px #FFF , 328px 637px #FFF , 589px 1013px #FFF , 620px 283px #FFF , 1440px 1170px #FFF , 1691px 1726px #FFF , 1226px 135px #FFF , 1791px 1933px #FFF , 1424px 1281px #FFF , 530px 1610px #FFF , 972px 1725px #FFF , 1281px 1484px #FFF , 480px 1308px #FFF , 108px 939px #FFF , 82px 291px #FFF , 1425px 1845px #FFF , 736px 1545px #FFF , 1312px 1854px #FFF , 1789px 442px #FFF , 575px 1430px #FFF , 86px 366px #FFF , 900px 1405px #FFF , 100px 898px #FFF , 350px 1976px #FFF , 1892px 1311px #FFF , 341px 1469px #FFF , 1836px 1284px #FFF , 203px 1031px #FFF , 170px 1108px #FFF , 1569px 1085px #FFF , 1830px 14px #FFF , 496px 1089px #FFF , 1087px 740px #FFF , 943px 604px #FFF , 1888px 1582px #FFF , 39px 677px #FFF , 139px 306px #FFF , 118px 1608px #FFF , 1021px 326px #FFF , 1613px 1104px #FFF , 1001px 1043px #FFF , 982px 1675px #FFF , 1246px 553px #FFF , 1787px 1005px #FFF , 1501px 1128px #FFF , 1118px 253px #FFF , 1777px 876px #FFF , 1673px 455px #FFF , 305px 613px #FFF , 1459px 325px #FFF , 1453px 144px #FFF , 291px 1149px #FFF , 1262px 1317px #FFF , 1492px 292px #FFF , 1610px 945px #FFF , 53px 417px #FFF , 1741px 777px #FFF , 1786px 218px #FFF , 859px 1366px #FFF , 1336px 861px #FFF , 1285px 1596px #FFF , 651px 474px #FFF , 1457px 595px #FFF , 641px 449px #FFF , 1849px 1456px #FFF , 1295px 1933px #FFF , 919px 781px #FFF , 1684px 1209px #FFF , 971px 177px #FFF , 906px 12px #FFF , 712px 1501px #FFF , 1534px 111px #FFF , 465px 1705px #FFF , 1134px 1074px #FFF , 1075px 1958px #FFF , 589px 1372px #FFF , 1950px 1297px #FFF , 1495px 1080px #FFF , 1813px 895px #FFF , 1284px 53px #FFF , 381px 1585px #FFF , 952px 1686px #FFF , 371px 935px #FFF , 561px 1869px #FFF , 1596px 79px #FFF , 1704px 1960px #FFF , 1414px 888px #FFF , 127px 1069px #FFF , 272px 977px #FFF , 1951px 1311px #FFF , 1791px 365px #FFF , 309px 1231px #FFF , 1689px 1645px #FFF , 1306px 1798px #FFF , 1103px 286px #FFF , 1085px 550px #FFF , 605px 1019px #FFF , 420px 1546px #FFF , 686px 1515px #FFF , 864px 1040px #FFF , 1407px 1094px #FFF , 1721px 681px #FFF , 1503px 1795px #FFF , 942px 43px #FFF , 1471px 776px #FFF , 518px 1339px #FFF , 214px 568px #FFF , 247px 216px #FFF , 1089px 1599px #FFF , 179px 1521px #FFF , 941px 167px #FFF , 990px 1930px #FFF;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1388px 1581px #FFF , 830px 1128px #FFF , 163px 1072px #FFF , 1009px 1297px #FFF , 659px 518px #FFF , 1653px 6px #FFF , 1249px 1705px #FFF , 1851px 1022px #FFF , 1928px 1241px #FFF , 1422px 1335px #FFF , 1542px 222px #FFF , 1979px 1188px #FFF , 266px 1618px #FFF , 559px 33px #FFF , 1877px 1965px #FFF , 328px 652px #FFF , 50px 1123px #FFF , 1268px 1899px #FFF , 346px 708px #FFF , 94px 952px #FFF , 492px 450px #FFF , 1319px 923px #FFF , 696px 1017px #FFF , 631px 1450px #FFF , 1695px 120px #FFF , 361px 1423px #FFF , 303px 122px #FFF , 1062px 976px #FFF , 184px 946px #FFF , 1900px 1625px #FFF , 1520px 1833px #FFF , 1584px 889px #FFF , 1454px 790px #FFF , 1818px 501px #FFF , 1193px 1842px #FFF , 1299px 1890px #FFF , 815px 394px #FFF , 1968px 84px #FFF , 1628px 1266px #FFF , 1045px 682px #FFF , 828px 1907px #FFF , 786px 503px #FFF , 839px 1692px #FFF , 1344px 1263px #FFF , 626px 1995px #FFF , 759px 1866px #FFF , 1249px 1415px #FFF , 1971px 412px #FFF , 561px 57px #FFF , 541px 1084px #FFF , 1272px 1804px #FFF , 1878px 375px #FFF , 655px 145px #FFF , 1629px 249px #FFF , 1495px 1656px #FFF , 636px 399px #FFF , 1308px 590px #FFF , 809px 187px #FFF , 220px 532px #FFF , 276px 1499px #FFF , 429px 1377px #FFF , 910px 153px #FFF , 472px 1780px #FFF , 818px 151px #FFF , 969px 57px #FFF , 332px 16px #FFF , 1439px 212px #FFF , 1794px 716px #FFF , 570px 1398px #FFF , 1983px 1088px #FFF , 617px 804px #FFF , 239px 488px #FFF , 511px 921px #FFF , 1184px 28px #FFF , 804px 1084px #FFF , 840px 1854px #FFF , 1195px 1847px #FFF , 1810px 420px #FFF , 822px 1575px #FFF , 923px 618px #FFF , 1123px 1423px #FFF , 1390px 398px #FFF , 1903px 591px #FFF , 1989px 1507px #FFF , 940px 495px #FFF , 1871px 732px #FFF , 1783px 470px #FFF , 534px 832px #FFF , 1841px 1735px #FFF , 780px 1807px #FFF , 83px 902px #FFF , 1905px 79px #FFF , 769px 14px #FFF , 55px 1827px #FFF , 1px 1364px #FFF , 1335px 1015px #FFF , 1873px 1026px #FFF , 715px 1528px #FFF , 1948px 240px #FFF , 920px 286px #FFF , 821px 1824px #FFF , 1806px 537px #FFF , 1658px 108px #FFF , 985px 590px #FFF , 1600px 1357px #FFF , 356px 1315px #FFF , 682px 1357px #FFF , 1169px 8px #FFF , 842px 1288px #FFF , 89px 659px #FFF , 1580px 1910px #FFF , 944px 890px #FFF , 1683px 839px #FFF , 1018px 210px #FFF , 1689px 1356px #FFF , 1804px 1808px #FFF , 1206px 1949px #FFF , 974px 1475px #FFF , 1340px 1856px #FFF , 476px 586px #FFF , 1201px 14px #FFF , 1783px 263px #FFF , 1559px 259px #FFF , 679px 1585px #FFF , 141px 1930px #FFF , 1691px 1967px #FFF , 1145px 935px #FFF , 94px 1184px #FFF , 870px 1994px #FFF , 806px 308px #FFF , 1351px 557px #FFF , 1582px 1721px #FFF , 909px 745px #FFF , 1612px 1636px #FFF , 1245px 1030px #FFF , 1640px 991px #FFF , 259px 1063px #FFF , 553px 115px #FFF , 669px 1751px #FFF , 686px 1901px #FFF , 1042px 1322px #FFF , 1840px 1207px #FFF , 517px 840px #FFF , 818px 1206px #FFF , 444px 1912px #FFF , 406px 1417px #FFF , 176px 358px #FFF , 1976px 128px #FFF , 19px 1095px #FFF , 584px 1483px #FFF , 441px 1968px #FFF , 1404px 1473px #FFF , 1119px 28px #FFF , 753px 1269px #FFF , 355px 344px #FFF , 1385px 1748px #FFF , 1868px 1134px #FFF , 1601px 1535px #FFF , 1834px 866px #FFF , 1428px 1318px #FFF , 1557px 1611px #FFF , 1764px 534px #FFF , 825px 1861px #FFF , 1255px 1061px #FFF , 87px 1144px #FFF , 1789px 405px #FFF , 1398px 420px #FFF , 976px 1444px #FFF , 6px 509px #FFF , 1116px 1343px #FFF , 700px 1257px #FFF , 1452px 842px #FFF , 1091px 820px #FFF , 367px 1819px #FFF , 95px 1727px #FFF , 882px 1577px #FFF , 664px 1385px #FFF , 516px 738px #FFF , 1441px 1822px #FFF , 895px 1883px #FFF , 973px 741px #FFF , 219px 82px #FFF , 1917px 1520px #FFF , 1371px 902px #FFF , 979px 1578px #FFF , 1352px 1225px #FFF , 341px 764px #FFF , 497px 1865px #FFF , 83px 1072px #FFF , 126px 1910px #FFF , 306px 1458px #FFF , 707px 938px #FFF , 1470px 1458px #FFF , 1345px 867px #FFF , 668px 912px #FFF , 68px 1380px #FFF , 1069px 1674px #FFF , 1039px 1256px #FFF , 290px 1644px #FFF , 776px 1607px #FFF , 588px 495px #FFF , 8px 989px #FFF , 433px 1581px #FFF , 910px 51px #FFF , 1890px 521px #FFF , 792px 1829px #FFF , 57px 1652px #FFF , 1371px 843px #FFF , 1045px 1983px #FFF , 1340px 514px #FFF , 915px 648px #FFF , 134px 1041px #FFF , 1289px 393px #FFF , 1364px 1799px #FFF , 1923px 61px #FFF , 1764px 277px #FFF , 1838px 1528px #FFF , 1319px 1484px #FFF , 263px 974px #FFF , 327px 707px #FFF , 1258px 911px #FFF , 111px 987px #FFF , 753px 470px #FFF , 1732px 1691px #FFF , 1993px 1853px #FFF , 532px 661px #FFF , 570px 1441px #FFF , 1729px 111px #FFF , 128px 494px #FFF , 1168px 1665px #FFF , 420px 128px #FFF , 862px 651px #FFF , 1558px 1275px #FFF , 1742px 1379px #FFF , 135px 617px #FFF , 1977px 1570px #FFF , 1208px 1502px #FFF , 1999px 511px #FFF , 993px 1124px #FFF , 697px 1990px #FFF , 1444px 801px #FFF , 1096px 716px #FFF , 1592px 1941px #FFF , 89px 1328px #FFF , 1540px 43px #FFF , 950px 405px #FFF , 1379px 246px #FFF , 1003px 441px #FFF , 9px 1677px #FFF , 262px 1122px #FFF , 266px 1559px #FFF , 623px 143px #FFF , 1134px 548px #FFF , 1846px 315px #FFF , 131px 1614px #FFF , 1376px 875px #FFF , 590px 1686px #FFF , 1780px 1724px #FFF , 1881px 1209px #FFF , 758px 1498px #FFF , 1982px 500px #FFF , 15px 1352px #FFF , 1249px 1805px #FFF , 1121px 1671px #FFF , 1535px 1320px #FFF , 1505px 300px #FFF , 1666px 769px #FFF , 699px 14px #FFF , 1050px 1029px #FFF , 1375px 1657px #FFF , 1743px 1px #FFF , 454px 810px #FFF , 1149px 578px #FFF , 1304px 201px #FFF , 633px 1832px #FFF , 309px 1311px #FFF , 950px 1154px #FFF , 643px 134px #FFF , 1842px 1100px #FFF , 1314px 664px #FFF , 1419px 1311px #FFF , 801px 994px #FFF , 111px 1119px #FFF , 1267px 401px #FFF , 1211px 245px #FFF , 1804px 628px #FFF , 546px 626px #FFF , 3px 1588px #FFF , 1700px 1684px #FFF , 1482px 341px #FFF , 198px 1290px #FFF , 1779px 1446px #FFF , 286px 1443px #FFF , 1860px 1221px #FFF , 1400px 309px #FFF , 862px 1592px #FFF , 1752px 1671px #FFF , 1472px 450px #FFF , 1119px 970px #FFF , 827px 919px #FFF , 418px 1541px #FFF , 635px 825px #FFF , 439px 1335px #FFF , 591px 248px #FFF , 994px 654px #FFF , 1017px 118px #FFF , 1288px 1291px #FFF , 250px 1948px #FFF , 1116px 440px #FFF , 1642px 1161px #FFF , 1174px 447px #FFF , 98px 1893px #FFF , 73px 753px #FFF , 1226px 1972px #FFF , 1120px 1445px #FFF , 1210px 376px #FFF , 1019px 1822px #FFF , 1683px 1096px #FFF , 1857px 1682px #FFF , 718px 68px #FFF , 887px 969px #FFF , 1110px 506px #FFF , 1048px 1710px #FFF , 1604px 995px #FFF , 533px 501px #FFF , 1964px 1102px #FFF , 1337px 51px #FFF , 1259px 1297px #FFF , 1003px 1413px #FFF , 421px 1876px #FFF , 1274px 1867px #FFF , 786px 953px #FFF , 1509px 317px #FFF , 1987px 1321px #FFF , 399px 912px #FFF , 939px 1668px #FFF , 679px 1460px #FFF , 157px 1459px #FFF , 435px 121px #FFF , 1106px 1770px #FFF , 453px 621px #FFF , 910px 1069px #FFF , 1819px 1209px #FFF , 1530px 422px #FFF , 21px 728px #FFF , 1818px 1560px #FFF , 295px 1873px #FFF , 1958px 231px #FFF , 1903px 353px #FFF , 693px 1160px #FFF , 107px 571px #FFF , 142px 1291px #FFF , 1761px 161px #FFF , 1099px 239px #FFF , 999px 1397px #FFF , 1871px 672px #FFF , 656px 756px #FFF , 747px 1624px #FFF , 1514px 735px #FFF , 1455px 1888px #FFF , 1583px 1255px #FFF , 797px 1720px #FFF , 1360px 1558px #FFF , 101px 1580px #FFF , 712px 660px #FFF , 1681px 1054px #FFF , 1159px 889px #FFF , 1895px 287px #FFF , 763px 1075px #FFF , 8px 1011px #FFF , 61px 1339px #FFF , 345px 1937px #FFF , 1307px 1808px #FFF , 1568px 1729px #FFF , 1707px 1616px #FFF , 1486px 1921px #FFF , 358px 1331px #FFF , 785px 1954px #FFF , 1833px 1710px #FFF , 1560px 1526px #FFF , 1221px 311px #FFF , 822px 63px #FFF , 1022px 845px #FFF , 1470px 1639px #FFF , 1337px 1156px #FFF , 1978px 771px #FFF , 1092px 1426px #FFF , 1760px 1679px #FFF , 710px 1573px #FFF , 1275px 1686px #FFF , 276px 452px #FFF , 1521px 1258px #FFF , 562px 318px #FFF , 1136px 1184px #FFF , 939px 1723px #FFF , 1734px 577px #FFF , 1962px 661px #FFF , 336px 944px #FFF , 1002px 395px #FFF , 1638px 557px #FFF , 1175px 1787px #FFF , 174px 1869px #FFF , 1953px 1048px #FFF , 769px 144px #FFF , 1930px 1326px #FFF , 757px 1527px #FFF , 1532px 1465px #FFF , 1179px 779px #FFF , 1597px 1926px #FFF , 1829px 1042px #FFF , 1169px 795px #FFF , 802px 592px #FFF , 340px 1439px #FFF , 689px 1496px #FFF , 1136px 947px #FFF , 1369px 379px #FFF , 1493px 1784px #FFF , 1192px 652px #FFF , 1410px 251px #FFF , 576px 625px #FFF , 289px 357px #FFF , 554px 627px #FFF , 656px 1865px #FFF , 1282px 1501px #FFF , 1324px 694px #FFF , 798px 721px #FFF , 989px 1320px #FFF , 213px 288px #FFF , 138px 375px #FFF , 1687px 393px #FFF , 1092px 2000px #FFF , 396px 909px #FFF , 816px 1312px #FFF , 848px 1276px #FFF , 1520px 1301px #FFF , 97px 883px #FFF , 1804px 1449px #FFF , 1777px 1172px #FFF , 1659px 220px #FFF , 911px 590px #FFF , 1855px 1422px #FFF , 225px 1730px #FFF , 1464px 1527px #FFF , 1084px 334px #FFF , 1775px 273px #FFF , 122px 1007px #FFF , 1999px 346px #FFF , 492px 964px #FFF , 1397px 42px #FFF , 316px 1546px #FFF , 1876px 1772px #FFF , 1514px 599px #FFF , 355px 1320px #FFF , 157px 639px #FFF , 950px 1110px #FFF , 1756px 1090px #FFF , 1373px 1392px #FFF , 1438px 1175px #FFF , 96px 1958px #FFF , 1757px 764px #FFF , 647px 1439px #FFF , 1654px 1795px #FFF , 310px 1197px #FFF , 803px 281px #FFF , 774px 1224px #FFF , 1532px 914px #FFF , 2px 1734px #FFF , 1898px 1816px #FFF , 1668px 1175px #FFF , 1181px 445px #FFF , 663px 1039px #FFF , 1261px 35px #FFF , 104px 710px #FFF , 754px 1629px #FFF , 656px 1526px #FFF , 115px 356px #FFF , 1262px 1800px #FFF , 358px 759px #FFF , 1721px 697px #FFF , 338px 330px #FFF , 365px 1898px #FFF , 1623px 89px #FFF , 1335px 1662px #FFF , 1875px 1799px #FFF , 1473px 213px #FFF , 503px 822px #FFF , 537px 1389px #FFF , 763px 1298px #FFF , 245px 1839px #FFF , 1196px 824px #FFF , 1460px 586px #FFF , 350px 1792px #FFF , 1905px 966px #FFF , 826px 117px #FFF , 382px 487px #FFF , 1263px 1744px #FFF , 361px 1935px #FFF , 1167px 286px #FFF , 1294px 155px #FFF , 1571px 1471px #FFF , 1011px 1140px #FFF , 256px 1031px #FFF , 598px 639px #FFF , 45px 1373px #FFF , 1195px 261px #FFF , 351px 964px #FFF , 1497px 1289px #FFF , 1259px 1817px #FFF , 1014px 1728px #FFF , 1512px 87px #FFF , 1581px 855px #FFF , 1467px 976px #FFF , 50px 1643px #FFF , 1519px 1977px #FFF , 347px 1573px #FFF , 722px 877px #FFF , 217px 1549px #FFF , 1780px 1869px #FFF , 185px 1727px #FFF , 1533px 1997px #FFF , 76px 336px #FFF , 663px 1687px #FFF , 1px 612px #FFF , 1818px 92px #FFF , 1064px 178px #FFF , 605px 928px #FFF , 1282px 1120px #FFF , 1671px 748px #FFF , 1587px 1211px #FFF , 1494px 98px #FFF , 1365px 357px #FFF , 1485px 1283px #FFF , 1804px 508px #FFF , 919px 873px #FFF , 1772px 1377px #FFF , 1858px 1855px #FFF , 653px 575px #FFF , 1784px 140px #FFF , 830px 126px #FFF , 1995px 1861px #FFF , 333px 741px #FFF , 628px 588px #FFF , 1918px 1915px #FFF , 646px 877px #FFF , 597px 1556px #FFF , 1052px 762px #FFF , 226px 979px #FFF , 443px 216px #FFF , 540px 121px #FFF , 385px 986px #FFF , 1766px 311px #FFF , 235px 1997px #FFF , 1989px 659px #FFF , 296px 720px #FFF , 103px 1024px #FFF , 566px 1153px #FFF , 995px 130px #FFF , 582px 1308px #FFF , 695px 1962px #FFF , 1885px 1349px #FFF , 682px 358px #FFF , 1534px 1035px #FFF , 541px 332px #FFF , 1825px 1538px #FFF , 1393px 373px #FFF , 1545px 1053px #FFF , 1472px 1237px #FFF , 1652px 124px #FFF , 1017px 1090px #FFF , 973px 1818px #FFF , 1507px 1180px #FFF , 1049px 1038px #FFF , 1543px 1056px #FFF , 498px 1610px #FFF , 931px 960px #FFF , 692px 863px #FFF , 1339px 25px #FFF , 1156px 1398px #FFF , 945px 669px #FFF , 334px 1918px #FFF , 121px 1624px #FFF , 308px 1244px #FFF , 524px 1581px #FFF , 532px 1141px #FFF , 838px 343px #FFF , 1895px 1347px #FFF , 954px 231px #FFF , 137px 534px #FFF , 57px 1805px #FFF , 328px 637px #FFF , 589px 1013px #FFF , 620px 283px #FFF , 1440px 1170px #FFF , 1691px 1726px #FFF , 1226px 135px #FFF , 1791px 1933px #FFF , 1424px 1281px #FFF , 530px 1610px #FFF , 972px 1725px #FFF , 1281px 1484px #FFF , 480px 1308px #FFF , 108px 939px #FFF , 82px 291px #FFF , 1425px 1845px #FFF , 736px 1545px #FFF , 1312px 1854px #FFF , 1789px 442px #FFF , 575px 1430px #FFF , 86px 366px #FFF , 900px 1405px #FFF , 100px 898px #FFF , 350px 1976px #FFF , 1892px 1311px #FFF , 341px 1469px #FFF , 1836px 1284px #FFF , 203px 1031px #FFF , 170px 1108px #FFF , 1569px 1085px #FFF , 1830px 14px #FFF , 496px 1089px #FFF , 1087px 740px #FFF , 943px 604px #FFF , 1888px 1582px #FFF , 39px 677px #FFF , 139px 306px #FFF , 118px 1608px #FFF , 1021px 326px #FFF , 1613px 1104px #FFF , 1001px 1043px #FFF , 982px 1675px #FFF , 1246px 553px #FFF , 1787px 1005px #FFF , 1501px 1128px #FFF , 1118px 253px #FFF , 1777px 876px #FFF , 1673px 455px #FFF , 305px 613px #FFF , 1459px 325px #FFF , 1453px 144px #FFF , 291px 1149px #FFF , 1262px 1317px #FFF , 1492px 292px #FFF , 1610px 945px #FFF , 53px 417px #FFF , 1741px 777px #FFF , 1786px 218px #FFF , 859px 1366px #FFF , 1336px 861px #FFF , 1285px 1596px #FFF , 651px 474px #FFF , 1457px 595px #FFF , 641px 449px #FFF , 1849px 1456px #FFF , 1295px 1933px #FFF , 919px 781px #FFF , 1684px 1209px #FFF , 971px 177px #FFF , 906px 12px #FFF , 712px 1501px #FFF , 1534px 111px #FFF , 465px 1705px #FFF , 1134px 1074px #FFF , 1075px 1958px #FFF , 589px 1372px #FFF , 1950px 1297px #FFF , 1495px 1080px #FFF , 1813px 895px #FFF , 1284px 53px #FFF , 381px 1585px #FFF , 952px 1686px #FFF , 371px 935px #FFF , 561px 1869px #FFF , 1596px 79px #FFF , 1704px 1960px #FFF , 1414px 888px #FFF , 127px 1069px #FFF , 272px 977px #FFF , 1951px 1311px #FFF , 1791px 365px #FFF , 309px 1231px #FFF , 1689px 1645px #FFF , 1306px 1798px #FFF , 1103px 286px #FFF , 1085px 550px #FFF , 605px 1019px #FFF , 420px 1546px #FFF , 686px 1515px #FFF , 864px 1040px #FFF , 1407px 1094px #FFF , 1721px 681px #FFF , 1503px 1795px #FFF , 942px 43px #FFF , 1471px 776px #FFF , 518px 1339px #FFF , 214px 568px #FFF , 247px 216px #FFF , 1089px 1599px #FFF , 179px 1521px #FFF , 941px 167px #FFF , 990px 1930px #FFF;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 808px 1714px #FFF , 283px 1709px #FFF , 801px 489px #FFF , 158px 422px #FFF , 1613px 450px #FFF , 1329px 1351px #FFF , 1355px 1565px #FFF , 328px 673px #FFF , 924px 276px #FFF , 1834px 1318px #FFF , 808px 1241px #FFF , 1938px 245px #FFF , 1709px 374px #FFF , 1971px 762px #FFF , 1548px 1658px #FFF , 201px 1801px #FFF , 1907px 356px #FFF , 1212px 153px #FFF , 1289px 37px #FFF , 1947px 828px #FFF , 862px 1188px #FFF , 1785px 1518px #FFF , 1462px 180px #FFF , 728px 1059px #FFF , 1578px 970px #FFF , 1792px 118px #FFF , 629px 538px #FFF , 1771px 1583px #FFF , 359px 152px #FFF , 604px 492px #FFF , 737px 1335px #FFF , 63px 1532px #FFF , 1030px 1890px #FFF , 257px 1614px #FFF , 1474px 458px #FFF , 667px 3px #FFF , 1633px 1841px #FFF , 1308px 48px #FFF , 1968px 1201px #FFF , 932px 906px #FFF , 695px 880px #FFF , 412px 965px #FFF , 1703px 791px #FFF , 1822px 266px #FFF , 103px 1210px #FFF , 111px 344px #FFF , 332px 1794px #FFF , 296px 1612px #FFF , 457px 1030px #FFF , 1738px 268px #FFF , 1393px 1963px #FFF , 772px 1545px #FFF , 1796px 1211px #FFF , 1223px 1064px #FFF , 78px 647px #FFF , 213px 1532px #FFF , 1560px 1060px #FFF , 1114px 451px #FFF , 1619px 869px #FFF , 84px 604px #FFF , 188px 1737px #FFF , 1848px 643px #FFF , 51px 1276px #FFF , 231px 1165px #FFF , 422px 452px #FFF , 620px 1525px #FFF , 1310px 608px #FFF , 1896px 1151px #FFF , 1140px 812px #FFF , 56px 1119px #FFF , 284px 386px #FFF , 295px 19px #FFF , 800px 1240px #FFF , 1384px 1315px #FFF , 1619px 57px #FFF , 1226px 1273px #FFF , 798px 825px #FFF , 1148px 1741px #FFF , 1094px 408px #FFF , 1422px 1104px #FFF , 1764px 1224px #FFF , 294px 1175px #FFF , 798px 872px #FFF , 812px 1494px #FFF , 955px 188px #FFF , 8px 251px #FFF , 1818px 985px #FFF , 230px 1473px #FFF , 251px 594px #FFF , 1195px 1620px #FFF , 1423px 659px #FFF , 1914px 1554px #FFF , 290px 1542px #FFF , 1094px 1653px #FFF , 2000px 931px #FFF , 384px 838px #FFF , 631px 573px #FFF , 408px 1793px #FFF , 887px 1665px #FFF , 1470px 62px #FFF , 1385px 496px #FFF , 398px 1842px #FFF , 1445px 1095px #FFF , 1712px 468px #FFF , 1618px 234px #FFF , 963px 1897px #FFF , 272px 216px #FFF , 1993px 1155px #FFF , 1857px 1099px #FFF , 565px 569px #FFF , 1336px 831px #FFF , 976px 1055px #FFF , 424px 257px #FFF , 1105px 442px #FFF , 1901px 1305px #FFF , 1962px 943px #FFF , 1159px 1462px #FFF , 504px 1792px #FFF , 96px 1977px #FFF , 1472px 1448px #FFF , 1751px 281px #FFF , 1896px 1535px #FFF , 1844px 1534px #FFF , 1820px 446px #FFF , 1131px 358px #FFF , 750px 1954px #FFF , 211px 109px #FFF , 378px 1703px #FFF , 678px 1077px #FFF , 1805px 635px #FFF , 1901px 1972px #FFF , 270px 306px #FFF , 31px 781px #FFF , 468px 499px #FFF , 1357px 1551px #FFF , 341px 273px #FFF , 740px 1781px #FFF , 981px 1304px #FFF , 1774px 1423px #FFF , 511px 514px #FFF , 606px 192px #FFF , 411px 1021px #FFF , 764px 1953px #FFF , 796px 862px #FFF , 292px 1298px #FFF , 1540px 828px #FFF , 467px 1953px #FFF , 930px 1078px #FFF , 1905px 699px #FFF , 994px 1986px #FFF , 1885px 850px #FFF , 1889px 219px #FFF , 1643px 710px #FFF , 1517px 1814px #FFF , 539px 743px #FFF , 1948px 116px #FFF , 1334px 1622px #FFF , 1274px 854px #FFF , 1174px 1252px #FFF , 505px 27px #FFF , 705px 1899px #FFF , 1512px 1352px #FFF , 374px 775px #FFF , 1382px 1965px #FFF , 1769px 1957px #FFF , 1162px 688px #FFF , 1814px 961px #FFF , 1369px 868px #FFF , 433px 689px #FFF , 552px 457px #FFF , 763px 1432px #FFF , 815px 541px #FFF , 624px 1902px #FFF , 963px 1878px #FFF , 158px 740px #FFF , 261px 1630px #FFF , 515px 625px #FFF , 1300px 169px #FFF , 856px 385px #FFF , 1259px 458px #FFF , 1332px 1587px #FFF , 1115px 255px #FFF , 456px 676px #FFF , 1944px 943px #FFF , 611px 1564px #FFF , 929px 497px #FFF , 779px 1906px #FFF , 1564px 1510px #FFF , 1314px 48px #FFF , 509px 815px #FFF , 1324px 504px #FFF , 470px 781px #FFF , 532px 1249px #FFF , 1868px 1850px #FFF , 193px 1401px #FFF , 1356px 1306px #FFF , 359px 1651px #FFF , 1571px 401px #FFF , 1356px 309px #FFF , 1377px 1650px #FFF;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 808px 1714px #FFF , 283px 1709px #FFF , 801px 489px #FFF , 158px 422px #FFF , 1613px 450px #FFF , 1329px 1351px #FFF , 1355px 1565px #FFF , 328px 673px #FFF , 924px 276px #FFF , 1834px 1318px #FFF , 808px 1241px #FFF , 1938px 245px #FFF , 1709px 374px #FFF , 1971px 762px #FFF , 1548px 1658px #FFF , 201px 1801px #FFF , 1907px 356px #FFF , 1212px 153px #FFF , 1289px 37px #FFF , 1947px 828px #FFF , 862px 1188px #FFF , 1785px 1518px #FFF , 1462px 180px #FFF , 728px 1059px #FFF , 1578px 970px #FFF , 1792px 118px #FFF , 629px 538px #FFF , 1771px 1583px #FFF , 359px 152px #FFF , 604px 492px #FFF , 737px 1335px #FFF , 63px 1532px #FFF , 1030px 1890px #FFF , 257px 1614px #FFF , 1474px 458px #FFF , 667px 3px #FFF , 1633px 1841px #FFF , 1308px 48px #FFF , 1968px 1201px #FFF , 932px 906px #FFF , 695px 880px #FFF , 412px 965px #FFF , 1703px 791px #FFF , 1822px 266px #FFF , 103px 1210px #FFF , 111px 344px #FFF , 332px 1794px #FFF , 296px 1612px #FFF , 457px 1030px #FFF , 1738px 268px #FFF , 1393px 1963px #FFF , 772px 1545px #FFF , 1796px 1211px #FFF , 1223px 1064px #FFF , 78px 647px #FFF , 213px 1532px #FFF , 1560px 1060px #FFF , 1114px 451px #FFF , 1619px 869px #FFF , 84px 604px #FFF , 188px 1737px #FFF , 1848px 643px #FFF , 51px 1276px #FFF , 231px 1165px #FFF , 422px 452px #FFF , 620px 1525px #FFF , 1310px 608px #FFF , 1896px 1151px #FFF , 1140px 812px #FFF , 56px 1119px #FFF , 284px 386px #FFF , 295px 19px #FFF , 800px 1240px #FFF , 1384px 1315px #FFF , 1619px 57px #FFF , 1226px 1273px #FFF , 798px 825px #FFF , 1148px 1741px #FFF , 1094px 408px #FFF , 1422px 1104px #FFF , 1764px 1224px #FFF , 294px 1175px #FFF , 798px 872px #FFF , 812px 1494px #FFF , 955px 188px #FFF , 8px 251px #FFF , 1818px 985px #FFF , 230px 1473px #FFF , 251px 594px #FFF , 1195px 1620px #FFF , 1423px 659px #FFF , 1914px 1554px #FFF , 290px 1542px #FFF , 1094px 1653px #FFF , 2000px 931px #FFF , 384px 838px #FFF , 631px 573px #FFF , 408px 1793px #FFF , 887px 1665px #FFF , 1470px 62px #FFF , 1385px 496px #FFF , 398px 1842px #FFF , 1445px 1095px #FFF , 1712px 468px #FFF , 1618px 234px #FFF , 963px 1897px #FFF , 272px 216px #FFF , 1993px 1155px #FFF , 1857px 1099px #FFF , 565px 569px #FFF , 1336px 831px #FFF , 976px 1055px #FFF , 424px 257px #FFF , 1105px 442px #FFF , 1901px 1305px #FFF , 1962px 943px #FFF , 1159px 1462px #FFF , 504px 1792px #FFF , 96px 1977px #FFF , 1472px 1448px #FFF , 1751px 281px #FFF , 1896px 1535px #FFF , 1844px 1534px #FFF , 1820px 446px #FFF , 1131px 358px #FFF , 750px 1954px #FFF , 211px 109px #FFF , 378px 1703px #FFF , 678px 1077px #FFF , 1805px 635px #FFF , 1901px 1972px #FFF , 270px 306px #FFF , 31px 781px #FFF , 468px 499px #FFF , 1357px 1551px #FFF , 341px 273px #FFF , 740px 1781px #FFF , 981px 1304px #FFF , 1774px 1423px #FFF , 511px 514px #FFF , 606px 192px #FFF , 411px 1021px #FFF , 764px 1953px #FFF , 796px 862px #FFF , 292px 1298px #FFF , 1540px 828px #FFF , 467px 1953px #FFF , 930px 1078px #FFF , 1905px 699px #FFF , 994px 1986px #FFF , 1885px 850px #FFF , 1889px 219px #FFF , 1643px 710px #FFF , 1517px 1814px #FFF , 539px 743px #FFF , 1948px 116px #FFF , 1334px 1622px #FFF , 1274px 854px #FFF , 1174px 1252px #FFF , 505px 27px #FFF , 705px 1899px #FFF , 1512px 1352px #FFF , 374px 775px #FFF , 1382px 1965px #FFF , 1769px 1957px #FFF , 1162px 688px #FFF , 1814px 961px #FFF , 1369px 868px #FFF , 433px 689px #FFF , 552px 457px #FFF , 763px 1432px #FFF , 815px 541px #FFF , 624px 1902px #FFF , 963px 1878px #FFF , 158px 740px #FFF , 261px 1630px #FFF , 515px 625px #FFF , 1300px 169px #FFF , 856px 385px #FFF , 1259px 458px #FFF , 1332px 1587px #FFF , 1115px 255px #FFF , 456px 676px #FFF , 1944px 943px #FFF , 611px 1564px #FFF , 929px 497px #FFF , 779px 1906px #FFF , 1564px 1510px #FFF , 1314px 48px #FFF , 509px 815px #FFF , 1324px 504px #FFF , 470px 781px #FFF , 532px 1249px #FFF , 1868px 1850px #FFF , 193px 1401px #FFF , 1356px 1306px #FFF , 359px 1651px #FFF , 1571px 401px #FFF , 1356px 309px #FFF , 1377px 1650px #FFF;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1973px 74px #FFF , 1846px 1610px #FFF , 1165px 1220px #FFF , 13px 927px #FFF , 219px 990px #FFF , 159px 920px #FFF , 743px 757px #FFF , 547px 740px #FFF , 263px 914px #FFF , 1855px 1006px #FFF , 1668px 161px #FFF , 1593px 123px #FFF , 308px 1009px #FFF , 148px 430px #FFF , 1040px 1532px #FFF , 1688px 301px #FFF , 1752px 91px #FFF , 1543px 900px #FFF , 189px 289px #FFF , 1774px 1903px #FFF , 34px 1626px #FFF , 1909px 1040px #FFF , 76px 1724px #FFF , 323px 1405px #FFF , 1771px 1272px #FFF , 1360px 1156px #FFF , 240px 605px #FFF , 1457px 1903px #FFF , 1544px 888px #FFF , 559px 1462px #FFF , 1783px 1837px #FFF , 1620px 1394px #FFF , 223px 534px #FFF , 227px 348px #FFF , 1274px 1665px #FFF , 1689px 641px #FFF , 9px 856px #FFF , 66px 972px #FFF , 888px 1148px #FFF , 438px 1803px #FFF , 1912px 1993px #FFF , 192px 2px #FFF , 1811px 1399px #FFF , 791px 905px #FFF , 1974px 1285px #FFF , 442px 1579px #FFF , 836px 1277px #FFF , 971px 1583px #FFF , 769px 1757px #FFF , 1342px 1355px #FFF , 1976px 26px #FFF , 578px 1687px #FFF , 1410px 851px #FFF , 399px 361px #FFF , 1393px 998px #FFF , 1387px 1430px #FFF , 76px 526px #FFF , 832px 795px #FFF , 1091px 1261px #FFF , 1208px 1837px #FFF , 849px 321px #FFF , 1584px 206px #FFF , 720px 1990px #FFF , 247px 554px #FFF , 437px 849px #FFF , 1476px 31px #FFF , 1886px 124px #FFF , 1371px 35px #FFF , 1313px 1510px #FFF , 242px 1820px #FFF , 1726px 1181px #FFF , 1990px 1946px #FFF , 1463px 1080px #FFF , 1089px 1920px #FFF , 1034px 1404px #FFF , 1088px 334px #FFF , 1153px 1929px #FFF , 1178px 1870px #FFF , 176px 217px #FFF , 1613px 1825px #FFF , 165px 1521px #FFF , 216px 572px #FFF , 1135px 142px #FFF , 952px 1180px #FFF , 277px 455px #FFF , 254px 886px #FFF , 1577px 585px #FFF , 1810px 63px #FFF , 1533px 260px #FFF , 155px 1251px #FFF , 901px 243px #FFF , 690px 645px #FFF , 861px 619px #FFF , 1753px 1515px #FFF , 1676px 351px #FFF , 120px 1732px #FFF , 435px 361px #FFF , 526px 1174px #FFF , 1984px 1055px #FFF , 244px 1293px #FFF;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1973px 74px #FFF , 1846px 1610px #FFF , 1165px 1220px #FFF , 13px 927px #FFF , 219px 990px #FFF , 159px 920px #FFF , 743px 757px #FFF , 547px 740px #FFF , 263px 914px #FFF , 1855px 1006px #FFF , 1668px 161px #FFF , 1593px 123px #FFF , 308px 1009px #FFF , 148px 430px #FFF , 1040px 1532px #FFF , 1688px 301px #FFF , 1752px 91px #FFF , 1543px 900px #FFF , 189px 289px #FFF , 1774px 1903px #FFF , 34px 1626px #FFF , 1909px 1040px #FFF , 76px 1724px #FFF , 323px 1405px #FFF , 1771px 1272px #FFF , 1360px 1156px #FFF , 240px 605px #FFF , 1457px 1903px #FFF , 1544px 888px #FFF , 559px 1462px #FFF , 1783px 1837px #FFF , 1620px 1394px #FFF , 223px 534px #FFF , 227px 348px #FFF , 1274px 1665px #FFF , 1689px 641px #FFF , 9px 856px #FFF , 66px 972px #FFF , 888px 1148px #FFF , 438px 1803px #FFF , 1912px 1993px #FFF , 192px 2px #FFF , 1811px 1399px #FFF , 791px 905px #FFF , 1974px 1285px #FFF , 442px 1579px #FFF , 836px 1277px #FFF , 971px 1583px #FFF , 769px 1757px #FFF , 1342px 1355px #FFF , 1976px 26px #FFF , 578px 1687px #FFF , 1410px 851px #FFF , 399px 361px #FFF , 1393px 998px #FFF , 1387px 1430px #FFF , 76px 526px #FFF , 832px 795px #FFF , 1091px 1261px #FFF , 1208px 1837px #FFF , 849px 321px #FFF , 1584px 206px #FFF , 720px 1990px #FFF , 247px 554px #FFF , 437px 849px #FFF , 1476px 31px #FFF , 1886px 124px #FFF , 1371px 35px #FFF , 1313px 1510px #FFF , 242px 1820px #FFF , 1726px 1181px #FFF , 1990px 1946px #FFF , 1463px 1080px #FFF , 1089px 1920px #FFF , 1034px 1404px #FFF , 1088px 334px #FFF , 1153px 1929px #FFF , 1178px 1870px #FFF , 176px 217px #FFF , 1613px 1825px #FFF , 165px 1521px #FFF , 216px 572px #FFF , 1135px 142px #FFF , 952px 1180px #FFF , 277px 455px #FFF , 254px 886px #FFF , 1577px 585px #FFF , 1810px 63px #FFF , 1533px 260px #FFF , 155px 1251px #FFF , 901px 243px #FFF , 690px 645px #FFF , 861px 619px #FFF , 1753px 1515px #FFF , 1676px 351px #FFF , 120px 1732px #FFF , 435px 361px #FFF , 526px 1174px #FFF , 1984px 1055px #FFF , 244px 1293px #FFF;
}

#title {
  position: absolute;
  top: 55%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.textmain{font-size: 1rem;letter-spacing: normal;}
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

</style>
