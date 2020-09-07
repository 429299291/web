<template>
  <div class="python">
<div class='solar-syst'>
  <div class='sun'></div>
  <div class='mercury'></div>
  <div class='venus'></div>
  <div class='earth'></div>
  <div class='mars'></div>
  <div class='jupiter'></div>
  <div class='saturn'></div>
  <div class='uranus'></div>
  <div class='neptune'></div>
  <div class='pluto'></div>
  <div class='asteroids-belt'></div>
</div>

  </div>
</template>
<script>

export default {
  name: 'python',
  data () {
    return {
      msg: 'python'
    }
  },
  mounted(){
  }
}
</script>
<style scoped lang = 'stylus'>
.python
  height 100vh
  width 100vw
  overflow hidden
  background radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%)
/*
  Malik Dellidj - @Dathink

  Solar System orbit animation true time scaled

  Revolution of planets in earth days (from Wikipedia)
  Mercury : ~87,5 days
  Venus : ~224,7 days
  Earth : ~365,2563 days
    + Moon : ~27,3216 days (around earth)
  Mars : ~687 days (~1,8 year)
  Jupiter : ~4 331 days (~12 years)
  Saturn : ~10 747 days (~30 years)
  Uranus : ~30 589 days (~84 years)
  Neptune : ~59 802 days (~165 years)
  Pluto : ~90 580 days (~248 years)
*/
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
}

body {
  font: normal 1em/1.45em "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #1C2837 0%, #050608 100%);
  background-attachment: fixed;
}

h1 {
  font-weight: 300;
  font-size: 2.5em;
  text-transform: uppercase;
  font-family: Lato;
  line-height: 1.6em;
  letter-spacing: .1em;
}

a, a:visited {
  text-decoration: none;
  color: white;
  opacity: .7;
}
a:hover, a:visited:hover {
  opacity: 1;
}
a.icon, a:visited.icon {
  margin-right: 2px;
  padding: 3px;
}


hr {
  margin: 26px 0;
  border: 0;
  border-top: 1px solid white;
  background: transparent;
  width: 25%;
  opacity: .1;
}

code {
  color: #ae94c0;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: .9em;
}

.solar-syst {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
}
.solar-syst:after {
  content: "";
  position: absolute;
  height: 2px;
  width: 2px;
  top: -2px;
  background: white;
  box-shadow: 1255px 554px 0 0px rgba(255, 255, 255, 0.315) , 1573px 1151px 0 0px rgba(255,255,255, 0.142) , 1402px 940px 0 0px rgba(255,255,255, 0.191) , 993px 1621px 0 0px rgba(255,255,255, 0.529) , 1024px 423px 0 0px rgba(255,255,255, 0.57) , 499px 700px 0 0px rgba(255,255,255, 0.909) , 1532px 592px 0 0px rgba(255,255,255, 0.413) , 1008px 567px 0 0px rgba(255,255,255, 0.757) , 144px 389px 0 0px rgba(255,255,255, 0.467) , 45px 733px 0 0px rgba(255,255,255, 0.015) , 1139px 1144px 0 0px rgba(255,255,255, 0.879) , 565px 1796px 0 0px rgba(255,255,255, 0.3) , 1069px 919px 0 0px rgba(255,255,255, 0.892) , 998px 1243px 0 0px rgba(255,255,255, 0.999) , 997px 1375px 0 0px rgba(255,255,255, 0.203) , 443px 659px 0 0px rgba(255,255,255, 0.055) , 1560px 436px 0 0px rgba(255,255,255, 0.806) , 513px 1437px 0 0px rgba(255,255,255, 0.943) , 1262px 1617px 0 0px rgba(255,255,255, 0.974) , 686px 232px 0 0px rgba(255,255,255, 0.732) , 752px 1705px 0 0px rgba(255,255,255, 0.234) , 703px 33px 0 0px rgba(255,255,255, 0.863) , 117px 1742px 0 0px rgba(255,255,255, 0.127) , 1268px 129px 0 0px rgba(255,255,255, 0.158) , 1564px 806px 0 0px rgba(255,255,255, 0.501) , 1027px 544px 0 0px rgba(255,255,255, 0.172) , 1388px 1195px 0 0px rgba(255,255,255, 0.172) , 24px 951px 0 0px rgba(255,255,255, 0.657) , 83px 362px 0 0px rgba(255,255,255, 0.073) , 1415px 333px 0 0px rgba(255,255,255, 0.447) , 371px 386px 0 0px rgba(255,255,255, 0.518) , 1092px 891px 0 0px rgba(255,255,255, 0.653) , 1584px 1481px 0 0px rgba(255,255,255, 0.083) , 558px 1731px 0 0px rgba(255,255,255, 0.441) , 342px 979px 0 0px rgba(255,255,255, 0.111) , 233px 1199px 0 0px rgba(255,255,255, 0.986) , 433px 1711px 0 0px rgba(255,255,255, 0.236) , 168px 424px 0 0px rgba(255,255,255, 0.631) , 111px 1057px 0 0px rgba(255,255,255, 0.4) , 67px 1471px 0 0px rgba(255,255,255, 0.737) , 186px 28px 0 0px rgba(255,255,255, 0.061) , 1205px 1578px 0 0px rgba(255,255,255, 0.636) , 660px 1739px 0 0px rgba(255,255,255, 0.97) , 95px 679px 0 0px rgba(255,255,255, 0.323) , 9px 942px 0 0px rgba(255,255,255, 0.724) , 1738px 209px 0 0px rgba(255,255,255, 0.726) , 606px 1106px 0 0px rgba(255,255,255, 0.406) , 1770px 271px 0 0px rgba(255,255,255, 0.761) , 490px 412px 0 0px rgba(255,255,255, 0.507) , 913px 29px 0 0px rgba(255,255,255, 0.298) , 357px 24px 0 0px rgba(255,255,255, 0.023) , 1511px 366px 0 0px rgba(255,255,255, 0.044) , 53px 285px 0 0px rgba(255,255,255, 0.307) , 360px 1317px 0 0px rgba(255,255,255, 0.983) , 801px 976px 0 0px rgba(255,255,255, 0.814) , 1179px 781px 0 0px rgba(255,255,255, 0.941) , 1672px 1783px 0 0px rgba(255,255,255, 0.293) , 1191px 1562px 0 0px rgba(255,255,255, 0.621) , 958px 1233px 0 0px rgba(255,255,255, 0.248) , 920px 1150px 0 0px rgba(255,255,255, 0.617) , 1243px 1756px 0 0px rgba(255,255,255, 0.076) , 587px 401px 0 0px rgba(255,255,255, 0.665) , 65px 124px 0 0px rgba(255,255,255, 0.014) , 1035px 1154px 0 0px rgba(255,255,255, 0.659) , 1377px 236px 0 0px rgba(255,255,255, 0.282) , 1281px 793px 0 0px rgba(255,255,255, 0.033) , 280px 1286px 0 0px rgba(255,255,255, 0.818) , 10px 1467px 0 0px rgba(255,255,255, 0.695) , 58px 942px 0 0px rgba(255,255,255, 0.166) , 789px 1091px 0 0px rgba(255,255,255, 0.32) , 513px 1751px 0 0px rgba(255,255,255, 0.118) , 979px 1287px 0 0px rgba(255,255,255, 0.746) , 1361px 106px 0 0px rgba(255,255,255, 0.709) , 211px 418px 0 0px rgba(255,255,255, 0.292) , 1394px 382px 0 0px rgba(255,255,255, 0.677) , 756px 1335px 0 0px rgba(255,255,255, 0.371) , 1474px 512px 0 0px rgba(255,255,255, 0.708) , 1106px 1559px 0 0px rgba(255,255,255, 0.088) , 746px 1044px 0 0px rgba(255,255,255, 0.569) , 1501px 920px 0 0px rgba(255,255,255, 0.658) , 892px 909px 0 0px rgba(255,255,255, 0.431) , 1406px 260px 0 0px rgba(255,255,255, 0.897) , 1041px 1494px 0 0px rgba(255,255,255, 0.08) , 966px 365px 0 0px rgba(255,255,255, 0.877) , 739px 1202px 0 0px rgba(255,255,255, 0.2) , 345px 1548px 0 0px rgba(255,255,255, 0.773) , 355px 118px 0 0px rgba(255,255,255, 0.836) , 1585px 351px 0 0px rgba(255,255,255, 0.393) , 546px 321px 0 0px rgba(255,255,255, 0.318) , 118px 1370px 0 0px rgba(255,255,255, 0.462) , 661px 459px 0 0px rgba(255,255,255, 0.787) , 1336px 252px 0 0px rgba(255,255,255, 0.812) , 1781px 834px 0 0px rgba(255,255,255, 0.603) , 217px 1080px 0 0px rgba(255,255,255, 0.191) , 1182px 654px 0 0px rgba(255,255,255, 0.473) , 1132px 170px 0 0px rgba(255,255,255, 0.736) , 167px 1579px 0 0px rgba(255,255,255, 0.052) , 113px 981px 0 0px rgba(255,255,255, 0.914) , 872px 1662px 0 0px rgba(255,255,255, 0.898) , 671px 902px 0 0px rgba(255,255,255, 0.545) , 400px 299px 0 0px rgba(255,255,255, 0.54) , 1782px 1591px 0 0px rgba(255,255,255, 0.125) , 995px 1256px 0 0px rgba(255,255,255, 0.569) , 632px 1231px 0 0px rgba(255,255,255, 0.833) , 1691px 1025px 0 0px rgba(255,255,255, 0.582) , 1384px 1324px 0 0px rgba(255,255,255, 0.707) , 841px 1108px 0 0px rgba(255,255,255, 0.051) , 557px 839px 0 0px rgba(255,255,255, 0.514) , 632px 1741px 0 0px rgba(255,255,255, 0.908) , 1073px 1154px 0 0px rgba(255,255,255, 0.719) , 1614px 422px 0 0px rgba(255,255,255, 0.678) , 1413px 1468px 0 0px rgba(255,255,255, 0.509) , 956px 1289px 0 0px rgba(255,255,255, 0.18) , 436px 989px 0 0px rgba(255,255,255, 0.942) , 1780px 1373px 0 0px rgba(255,255,255, 0.849) , 575px 1550px 0 0px rgba(255,255,255, 0.879) , 1310px 1426px 0 0px rgba(255,255,255, 0.835) , 888px 1562px 0 0px rgba(255,255,255, 0.038) , 382px 1434px 0 0px rgba(255,255,255, 0.732) , 1206px 311px 0 0px rgba(255,255,255, 0.86) , 497px 1728px 0 0px rgba(255,255,255, 0.921) , 1695px 53px 0 0px rgba(255,255,255, 0.598) , 1119px 1650px 0 0px rgba(255,255,255, 0.826) , 637px 601px 0 0px rgba(255,255,255, 0.421) , 94px 1324px 0 0px rgba(255,255,255, 0.207) , 815px 1180px 0 0px rgba(255,255,255, 0.131) , 729px 1102px 0 0px rgba(255,255,255, 0.758) , 145px 575px 0 0px rgba(255,255,255, 0.727) , 1147px 1477px 0 0px rgba(255,255,255, 0.069) , 1162px 374px 0 0px rgba(255,255,255, 0.184) , 200px 813px 0 0px rgba(255,255,255, 0.433) , 232px 1247px 0 0px rgba(255,255,255, 0.489) , 542px 85px 0 0px rgba(255,255,255, 0.071) , 295px 916px 0 0px rgba(255,255,255, 0.437) , 505px 1589px 0 0px rgba(255,255,255, 0.844) , 145px 1583px 0 0px rgba(255,255,255, 0.749) , 911px 1773px 0 0px rgba(255,255,255, 0.735) , 73px 1441px 0 0px rgba(255,255,255, 0.75) , 1233px 334px 0 0px rgba(255,255,255, 0.247) , 385px 1354px 0 0px rgba(255,255,255, 0.736) , 1549px 46px 0 0px rgba(255,255,255, 0.707) , 912px 378px 0 0px rgba(255,255,255, 0.302) , 1653px 172px 0 0px rgba(255,255,255, 0.707) , 686px 567px 0 0px rgba(255,255,255, 0.836) , 627px 1636px 0 0px rgba(255,255,255, 0.594) , 69px 781px 0 0px rgba(255,255,255, 0.275) , 1536px 1596px 0 0px rgba(255,255,255, 0.764) , 158px 1641px 0 0px rgba(255,255,255, 0.042) , 277px 131px 0 0px rgba(255,255,255, 0.461) , 895px 1575px 0 0px rgba(255,255,255, 0.63) , 1521px 512px 0 0px rgba(255,255,255, 0.359) , 713px 1076px 0 0px rgba(255,255,255, 0.354) , 769px 532px 0 0px rgba(255,255,255, 0.486) , 1229px 668px 0 0px rgba(255,255,255, 0.136) , 1090px 243px 0 0px rgba(255,255,255, 0.626) , 1251px 967px 0 0px rgba(255,255,255, 0.767) , 1455px 775px 0 0px rgba(255,255,255, 0.374) , 597px 22px 0 0px rgba(255,255,255, 0.136) , 1795px 940px 0 0px rgba(255,255,255, 0.177) , 425px 1213px 0 0px rgba(255,255,255, 0.804) , 640px 572px 0 0px rgba(255,255,255, 0.329) , 1354px 1338px 0 0px rgba(255,255,255, 0.593) , 982px 1256px 0 0px rgba(255,255,255, 0.544) , 712px 1071px 0 0px rgba(255,255,255, 0.309) , 1225px 816px 0 0px rgba(255,255,255, 0.946) , 383px 1086px 0 0px rgba(255,255,255, 0.211) , 817px 871px 0 0px rgba(255,255,255, 0.198) , 1531px 1576px 0 0px rgba(255,255,255, 0.398) , 1316px 831px 0 0px rgba(255,255,255, 0.934) , 415px 1178px 0 0px rgba(255,255,255, 0.073) , 312px 758px 0 0px rgba(255,255,255, 0.493) , 51px 262px 0 0px rgba(255,255,255, 0.424) , 1704px 161px 0 0px rgba(255,255,255, 0.946) , 703px 198px 0 0px rgba(255,255,255, 0.162) , 555px 1098px 0 0px rgba(255,255,255, 0.261) , 1057px 557px 0 0px rgba(255,255,255, 0.835) , 1531px 106px 0 0px rgba(255,255,255, 0.078) , 155px 412px 0 0px rgba(255,255,255, 0.284) , 37px 794px 0 0px rgba(255,255,255, 0.69) , 990px 1686px 0 0px rgba(255,255,255, 0.358) , 446px 519px 0 0px rgba(255,255,255, 0.01) , 1692px 1663px 0 0px rgba(255,255,255, 0.238) , 1787px 1719px 0 0px rgba(255,255,255, 0.048) , 1599px 139px 0 0px rgba(255,255,255, 0.513) , 1633px 380px 0 0px rgba(255,255,255, 0.523) , 1346px 195px 0 0px rgba(255,255,255, 0.68) , 447px 1240px 0 0px rgba(255,255,255, 0.86) , 1053px 902px 0 0px rgba(255,255,255, 0.342) , 180px 1673px 0 0px rgba(255,255,255, 0.93) , 249px 1431px 0 0px rgba(255,255,255, 0.761) , 332px 1066px 0 0px rgba(255,255,255, 0.283) , 508px 326px 0 0px rgba(255,255,255, 0.414) , 831px 487px 0 0px rgba(255,255,255, 0.005) , 1600px 937px 0 0px rgba(255,255,255, 0.901) , 601px 792px 0 0px rgba(255,255,255, 0.639) , 706px 559px 0 0px rgba(255,255,255, 0.881) , 621px 1382px 0 0px rgba(255,255,255, 0.304) , 308px 1108px 0 0px rgba(255,255,255, 0.607) , 142px 1266px 0 0px rgba(255,255,255, 0.858) , 1261px 1141px 0 0px rgba(255,255,255, 0.203) , 524px 26px 0 0px rgba(255,255,255, 0.247) , 1764px 348px 0 0px rgba(255,255,255, 0.626) , 1101px 1430px 0 0px rgba(255,255,255, 0.284) , 1494px 940px 0 0px rgba(255,255,255, 0.833) , 307px 605px 0 0px rgba(255,255,255, 0.109) , 1698px 931px 0 0px rgba(255,255,255, 0.859) , 838px 1079px 0 0px rgba(255,255,255, 0.053) , 805px 651px 0 0px rgba(255,255,255, 0.977) , 805px 516px 0 0px rgba(255,255,255, 0.666) , 1663px 23px 0 0px rgba(255,255,255, 0.286) , 1530px 1076px 0 0px rgba(255,255,255, 0.089) , 504px 636px 0 0px rgba(255,255,255, 0.696) , 1498px 1160px 0 0px rgba(255,255,255, 0.428) , 644px 390px 0 0px rgba(255,255,255, 0.965) , 182px 314px 0 0px rgba(255,255,255, 0.18) , 487px 1024px 0 0px rgba(255,255,255, 0.713) , 566px 1679px 0 0px rgba(255,255,255, 0.727) , 959px 1447px 0 0px rgba(255,255,255, 0.192) , 301px 1511px 0 0px rgba(255,255,255, 0.763) , 1703px 601px 0 0px rgba(255,255,255, 1) , 702px 1565px 0 0px rgba(255,255,255, 0.085) , 1056px 1265px 0 0px rgba(255,255,255, 0.441) , 1441px 103px 0 0px rgba(255,255,255, 0.433) , 519px 47px 0 0px rgba(255,255,255, 0.419) , 1603px 588px 0 0px rgba(255,255,255, 0.026) , 86px 1187px 0 0px rgba(255,255,255, 0.5) , 918px 150px 0 0px rgba(255,255,255, 0.629) , 768px 155px 0 0px rgba(255,255,255, 0.566) , 326px 627px 0 0px rgba(255,255,255, 0.243) , 829px 1137px 0 0px rgba(255,255,255, 0.858) , 592px 339px 0 0px rgba(255,255,255, 0.821) , 1785px 321px 0 0px rgba(255,255,255, 0.033) , 808px 1279px 0 0px rgba(255,255,255, 0.587) , 1746px 104px 0 0px rgba(255,255,255, 0.638) , 554px 135px 0 0px rgba(255,255,255, 0.836) , 249px 1507px 0 0px rgba(255,255,255, 0.848) , 78px 708px 0 0px rgba(255,255,255, 0.075) , 146px 1767px 0 0px rgba(255,255,255, 0.612) , 957px 1464px 0 0px rgba(255,255,255, 0.972) , 761px 319px 0 0px rgba(255,255,255, 0.068) , 458px 710px 0 0px rgba(255,255,255, 0.953) , 470px 1222px 0 0px rgba(255,255,255, 0.815) , 732px 1350px 0 0px rgba(255,255,255, 0.805) , 702px 1188px 0 0px rgba(255,255,255, 0.785) , 759px 1237px 0 0px rgba(255,255,255, 0.688) , 947px 798px 0 0px rgba(255,255,255, 0.571) , 205px 1015px 0 0px rgba(255,255,255, 0.164) , 632px 1246px 0 0px rgba(255,255,255, 0.955) , 229px 681px 0 0px rgba(255,255,255, 0.238) , 881px 1338px 0 0px rgba(255,255,255, 0.308) , 1740px 326px 0 0px rgba(255,255,255, 0.734) , 668px 1706px 0 0px rgba(255,255,255, 0.743) , 241px 1291px 0 0px rgba(255,255,255, 0.729) , 1007px 1677px 0 0px rgba(255,255,255, 0.975) , 471px 1563px 0 0px rgba(255,255,255, 0.924) , 1484px 922px 0 0px rgba(255,255,255, 0.372) , 388px 751px 0 0px rgba(255,255,255, 0.171) , 1749px 44px 0 0px rgba(255,255,255, 0.544) , 1166px 449px 0 0px rgba(255,255,255, 0.678) , 1709px 1401px 0 0px rgba(255,255,255, 0.168) , 1242px 1447px 0 0px rgba(255,255,255, 0.408) , 1625px 1033px 0 0px rgba(255,255,255, 0.854) , 1504px 263px 0 0px rgba(255,255,255, 0.918) , 535px 1380px 0 0px rgba(255,255,255, 0.495) , 28px 769px 0 0px rgba(255,255,255, 0.941) , 1523px 39px 0 0px rgba(255,255,255, 0.865) , 1274px 1416px 0 0px rgba(255,255,255, 0.275) , 523px 1176px 0 0px rgba(255,255,255, 0.303) , 1180px 1452px 0 0px rgba(255,255,255, 0.801) , 62px 845px 0 0px rgba(255,255,255, 0.006) , 337px 1582px 0 0px rgba(255,255,255, 0.394) , 993px 1213px 0 0px rgba(255,255,255, 0.715) , 1628px 1546px 0 0px rgba(255,255,255, 0.429) , 1763px 1568px 0 0px rgba(255,255,255, 0.787) , 861px 710px 0 0px rgba(255,255,255, 0.803) , 954px 438px 0 0px rgba(255,255,255, 0.237) , 868px 876px 0 0px rgba(255,255,255, 0.982) , 172px 1549px 0 0px rgba(255,255,255, 0.202) , 884px 89px 0 0px rgba(255,255,255, 0.375) , 1064px 1134px 0 0px rgba(255,255,255, 0.27) , 1773px 1518px 0 0px rgba(255,255,255, 0.17) , 590px 39px 0 0px rgba(255,255,255, 0.185) , 805px 984px 0 0px rgba(255,255,255, 0.169) , 624px 834px 0 0px rgba(255,255,255, 0.73) , 203px 1149px 0 0px rgba(255,255,255, 0.846) , 991px 951px 0 0px rgba(255,255,255, 0.192) , 794px 475px 0 0px rgba(255,255,255, 0.65) , 1512px 889px 0 0px rgba(255,255,255, 0.05) , 47px 781px 0 0px rgba(255,255,255, 0.591) , 1402px 1513px 0 0px rgba(255,255,255, 0.63) , 549px 883px 0 0px rgba(255,255,255, 0.434) , 631px 223px 0 0px rgba(255,255,255, 0.197) , 1047px 104px 0 0px rgba(255,255,255, 0.811) , 1100px 1655px 0 0px rgba(255,255,255, 0.2) , 90px 1169px 0 0px rgba(255,255,255, 0.787) , 1228px 726px 0 0px rgba(255,255,255, 0.627) , 538px 943px 0 0px rgba(255,255,255, 0.606) , 551px 1334px 0 0px rgba(255,255,255, 0.23) , 1096px 1463px 0 0px rgba(255,255,255, 0.999) , 141px 596px 0 0px rgba(255,255,255, 0.118) , 526px 17px 0 0px rgba(255,255,255, 0.363) , 298px 1213px 0 0px rgba(255,255,255, 0.709) , 1406px 1044px 0 0px rgba(255,255,255, 0.734) , 1345px 1381px 0 0px rgba(255,255,255, 0.522) , 1198px 852px 0 0px rgba(255,255,255, 0.628) , 1431px 1030px 0 0px rgba(255,255,255, 0.397) , 405px 1638px 0 0px rgba(255,255,255, 0.715) , 640px 139px 0 0px rgba(255,255,255, 0.643) , 488px 570px 0 0px rgba(255,255,255, 0.288) , 653px 494px 0 0px rgba(255,255,255, 0.064) , 1230px 1356px 0 0px rgba(255,255,255, 0.63) , 1504px 1162px 0 0px rgba(255,255,255, 0.405) , 1501px 1141px 0 0px rgba(255,255,255, 0.71) , 759px 1488px 0 0px rgba(255,255,255, 0.335) , 84px 201px 0 0px rgba(255,255,255, 0.89) , 200px 1053px 0 0px rgba(255,255,255, 0.882) , 1551px 1400px 0 0px rgba(255,255,255, 0.355) , 595px 1689px 0 0px rgba(255,255,255, 0.78) , 681px 235px 0 0px rgba(255,255,255, 0.434) , 406px 1321px 0 0px rgba(255,255,255, 0.415) , 1762px 634px 0 0px rgba(255,255,255, 0.394) , 386px 726px 0 0px rgba(255,255,255, 0.712) , 657px 1683px 0 0px rgba(255,255,255, 0.501) , 1727px 1440px 0 0px rgba(255,255,255, 0.12) , 1721px 494px 0 0px rgba(255,255,255, 0.378) , 585px 780px 0 0px rgba(255,255,255, 0.306) , 1604px 580px 0 0px rgba(255,255,255, 0.636) , 1261px 815px 0 0px rgba(255,255,255, 0.49) , 1252px 1561px 0 0px rgba(255,255,255, 0.184) , 1088px 1211px 0 0px rgba(255,255,255, 0.767) , 624px 125px 0 0px rgba(255,255,255, 0.08) , 1310px 1132px 0 0px rgba(255,255,255, 0.17) , 1198px 1268px 0 0px rgba(255,255,255, 0.807) , 683px 651px 0 0px rgba(255,255,255, 0.681) , 1528px 1588px 0 0px rgba(255,255,255, 0.533) , 1413px 747px 0 0px rgba(255,255,255, 0.734) , 887px 1432px 0 0px rgba(255,255,255, 0.244) , 380px 187px 0 0px rgba(255,255,255, 0.304) , 7px 598px 0 0px rgba(255,255,255, 0.12) , 1743px 1511px 0 0px rgba(255,255,255, 0.34) , 1617px 546px 0 0px rgba(255,255,255, 0.625) , 1157px 243px 0 0px rgba(255,255,255, 0.786) , 829px 1119px 0 0px rgba(255,255,255, 0.725) , 820px 945px 0 0px rgba(255,255,255, 0.108) , 1420px 1761px 0 0px rgba(255,255,255, 0.808) , 222px 227px 0 0px rgba(255,255,255, 0.73) , 1445px 514px 0 0px rgba(255,255,255, 0.284) , 360px 362px 0 0px rgba(255,255,255, 0.031) , 1275px 1800px 0 0px rgba(255,255,255, 0.556) , 492px 1693px 0 0px rgba(255,255,255, 0.094) , 985px 1411px 0 0px rgba(255,255,255, 0.204) , 1424px 1037px 0 0px rgba(255,255,255, 0.496) , 1495px 257px 0 0px rgba(255,255,255, 0.818) , 969px 851px 0 0px rgba(255,255,255, 0.022) , 1287px 1402px 0 0px rgba(255,255,255, 0.155) , 1464px 365px 0 0px rgba(255,255,255, 0.324) , 1020px 3px 0 0px rgba(255,255,255, 0.718) , 813px 1441px 0 0px rgba(255,255,255, 0.485) , 244px 1183px 0 0px rgba(255,255,255, 0.924) , 363px 649px 0 0px rgba(255,255,255, 0.655) , 1653px 1234px 0 0px rgba(255,255,255, 0.928) , 60px 1405px 0 0px rgba(255,255,255, 0.447) , 1791px 727px 0 0px rgba(255,255,255, 0.827) , 1662px 517px 0 0px rgba(255,255,255, 0.16) , 1140px 1233px 0 0px rgba(255,255,255, 0.038) , 1707px 319px 0 0px rgba(255,255,255, 0.3) , 1463px 1765px 0 0px rgba(255,255,255, 0.266) , 930px 1600px 0 0px rgba(255,255,255, 0.041) , 1397px 461px 0 0px rgba(255,255,255, 0.041) , 1683px 1450px 0 0px rgba(255,255,255, 0.471) , 957px 1750px 0 0px rgba(255,255,255, 0.532) , 1246px 1665px 0 0px rgba(255,255,255, 0.702) , 1461px 1795px 0 0px rgba(255,255,255, 0.492) , 1673px 1355px 0 0px rgba(255,255,255, 0.833) , 1700px 1132px 0 0px rgba(255,255,255, 0.466) , 600px 1394px 0 0px rgba(255,255,255, 0.309) , 1076px 1328px 0 0px rgba(255,255,255, 0.55) , 1615px 847px 0 0px rgba(255,255,255, 0.057) , 581px 912px 0 0px rgba(255,255,255, 0.407) , 174px 318px 0 0px rgba(255,255,255, 0.413) , 1121px 1759px 0 0px rgba(255,255,255, 0.574) , 145px 1571px 0 0px rgba(255,255,255, 0.867) , 1574px 364px 0 0px rgba(255,255,255, 0.407) , 291px 211px 0 0px rgba(255,255,255, 0.776) , 1544px 554px 0 0px rgba(255,255,255, 0.622) , 273px 1795px 0 0px rgba(255,255,255, 0.283) , 798px 1017px 0 0px rgba(255,255,255, 0.503) , 477px 317px 0 0px rgba(255,255,255, 0.08) , 400px 22px 0 0px rgba(255,255,255, 0.991) , 1704px 1304px 0 0px rgba(255,255,255, 0.748) , 1030px 631px 0 0px rgba(255,255,255, 0.336) , 736px 33px 0 0px rgba(255,255,255, 0.086) , 790px 95px 0 0px rgba(255,255,255, 0.9) , 1719px 216px 0 0px rgba(255,255,255, 0.466) , 334px 519px 0 0px rgba(255,255,255, 0.27) , 1654px 98px 0 0px rgba(255,255,255, 0.599) , 1002px 1559px 0 0px rgba(255,255,255, 0.157) , 462px 1548px 0 0px rgba(255,255,255, 0.371) , 1684px 601px 0 0px rgba(255,255,255, 0.936) , 812px 1567px 0 0px rgba(255,255,255, 0.339) , 860px 658px 0 0px rgba(255,255,255, 0.645) , 1440px 1112px 0 0px rgba(255,255,255, 0.183) , 425px 631px 0 0px rgba(255,255,255, 0.019) , 204px 283px 0 0px rgba(255,255,255, 0.072) , 1119px 1131px 0 0px rgba(255,255,255, 0.692) , 187px 1175px 0 0px rgba(255,255,255, 0.719) , 1147px 122px 0 0px rgba(255,255,255, 0.476) , 331px 61px 0 0px rgba(255,255,255, 0.309) , 538px 1046px 0 0px rgba(255,255,255, 0.35) , 930px 1621px 0 0px rgba(255,255,255, 0.37) , 737px 41px 0 0px rgba(255,255,255, 0.71) , 555px 1218px 0 0px rgba(255,255,255, 0.552) , 49px 934px 0 0px rgba(255,255,255, 0.935) , 1743px 154px 0 0px rgba(255,255,255, 0.287) , 847px 615px 0 0px rgba(255,255,255, 0.116) , 623px 378px 0 0px rgba(255,255,255, 0.211) , 1340px 1001px 0 0px rgba(255,255,255, 0.114) , 1603px 703px 0 0px rgba(255,255,255, 0.129) , 554px 660px 0 0px rgba(255,255,255, 0.637) , 960px 933px 0 0px rgba(255,255,255, 0.117) , 1564px 132px 0 0px rgba(255,255,255, 0.501) , 304px 427px 0 0px rgba(255,255,255, 0.553) , 159px 707px 0 0px rgba(255,255,255, 0.966) , 117px 1426px 0 0px rgba(255,255,255, 0.174) , 1800px 314px 0 0px rgba(255,255,255, 0.559) , 1614px 1530px 0 0px rgba(255,255,255, 0.825) , 1108px 758px 0 0px rgba(255,255,255, 0.238) , 1706px 959px 0 0px rgba(255,255,255, 0.102) , 551px 429px 0 0px rgba(255,255,255, 0.35) , 1393px 1364px 0 0px rgba(255,255,255, 0.977) , 1120px 762px 0 0px rgba(255,255,255, 0.279) , 609px 1589px 0 0px rgba(255,255,255, 0.054) , 423px 127px 0 0px rgba(255,255,255, 0.475) , 612px 1548px 0 0px rgba(255,255,255, 0.094) , 701px 211px 0 0px rgba(255,255,255, 0.999) , 707px 660px 0 0px rgba(255,255,255, 0.026) , 656px 1548px 0 0px rgba(255,255,255, 0.824) , 1416px 956px 0 0px rgba(255,255,255, 0.872) , 1637px 452px 0 0px rgba(255,255,255, 0.218) , 328px 1555px 0 0px rgba(255,255,255, 0.465) , 1129px 1725px 0 0px rgba(255,255,255, 0.412) , 862px 1124px 0 0px rgba(255,255,255, 0.994) , 1105px 294px 0 0px rgba(255,255,255, 0.086) , 1551px 105px 0 0px rgba(255,255,255, 0.124) , 506px 1624px 0 0px rgba(255,255,255, 0.525) , 856px 244px 0 0px rgba(255,255,255, 0.452) , 1450px 669px 0 0px rgba(255,255,255, 0.135) , 1542px 924px 0 0px rgba(255,255,255, 0.514) , 421px 279px 0 0px rgba(255,255,255, 0.33) , 952px 1263px 0 0px rgba(255,255,255, 0.625) , 1564px 635px 0 0px rgba(255,255,255, 0.54) , 760px 50px 0 0px rgba(255,255,255, 0.058) , 664px 1101px 0 0px rgba(255,255,255, 0.466) , 684px 149px 0 0px rgba(255,255,255, 0.23) , 221px 1323px 0 0px rgba(255,255,255, 0.863) , 584px 942px 0 0px rgba(255,255,255, 0.793) , 1624px 929px 0 0px rgba(255,255,255, 0.54) , 93px 287px 0 0px rgba(255,255,255, 0.035) , 1112px 860px 0 0px rgba(255,255,255, 0.459) , 1522px 1345px 0 0px rgba(255,255,255, 0.345) , 1034px 331px 0 0px rgba(255,255,255, 0.923) , 911px 692px 0 0px rgba(255,255,255, 0.679) , 395px 1067px 0 0px rgba(255,255,255, 0.645) , 1401px 1641px 0 0px rgba(255,255,255, 0.305) , 588px 1465px 0 0px rgba(255,255,255, 0.148) , 1498px 818px 0 0px rgba(255,255,255, 0.746) , 1400px 1680px 0 0px rgba(255,255,255, 0.08) , 209px 757px 0 0px rgba(255,255,255, 0.981) , 383px 389px 0 0px rgba(255,255,255, 0.354) , 582px 1052px 0 0px rgba(255,255,255, 0.128) , 1436px 1014px 0 0px rgba(255,255,255, 0.416) , 204px 1214px 0 0px rgba(255,255,255, 0.896) , 1668px 1127px 0 0px rgba(255,255,255, 0.21) , 1247px 354px 0 0px rgba(255,255,255, 0.953) , 149px 1610px 0 0px rgba(255,255,255, 0.026) , 1463px 1433px 0 0px rgba(255,255,255, 0.152) , 1153px 1056px 0 0px rgba(255,255,255, 0.652) , 757px 90px 0 0px rgba(255,255,255, 0.751) , 89px 1273px 0 0px rgba(255,255,255, 0.978) , 970px 1175px 0 0px rgba(255,255,255, 0.776) , 1114px 101px 0 0px rgba(255,255,255, 0.269) , 1082px 523px 0 0px rgba(255,255,255, 0.505) , 874px 143px 0 0px rgba(255,255,255, 0.21) , 1688px 453px 0 0px rgba(255,255,255, 0.865) , 955px 1033px 0 0px rgba(255,255,255, 0.563) , 1436px 1697px 0 0px rgba(255,255,255, 0.988) , 1657px 1507px 0 0px rgba(255,255,255, 0.295) , 1250px 822px 0 0px rgba(255,255,255, 0.604) , 1492px 1685px 0 0px rgba(255,255,255, 0.175) , 963px 1247px 0 0px rgba(255,255,255, 0.748) , 1796px 1713px 0 0px rgba(255,255,255, 0.627) , 1482px 674px 0 0px rgba(255,255,255, 0.295) , 943px 1433px 0 0px rgba(255,255,255, 0.005) , 214px 909px 0 0px rgba(255,255,255, 0.625) , 1094px 1244px 0 0px rgba(255,255,255, 0.108) , 768px 1669px 0 0px rgba(255,255,255, 0.358) , 360px 421px 0 0px rgba(255,255,255, 0.767) , 228px 1240px 0 0px rgba(255,255,255, 0.436) , 1733px 1264px 0 0px rgba(255,255,255, 0.534) , 1125px 926px 0 0px rgba(255,255,255, 0.933);
  border-radius: 100px;
}
.solar-syst div {
  border-radius: 1000px;
  top: 50%;
  left: 50%;
  position: absolute;
  z-index: 999;
}
.solar-syst div:not(.sun) {
  border: 1px solid rgba(102, 166, 229, 0.12);
}
.solar-syst div:not(.sun):before {
  left: 50%;
  border-radius: 100px;
  content: "";
  position: absolute;
}
.solar-syst div:not(.asteroids-belt):before {
  box-shadow: inset 0 6px 0 -2px rgba(0, 0, 0, 0.25);
}

.sun {
  background: radial-gradient(ellipse at center, #ffd000 1%, #f9b700 39%, #f9b700 39%, #e06317 100%);
  height: 40px;
  width: 40px;
  margin-top: -20px;
  margin-left: -20px;
  background-clip: padding-box;
  border: 0 !important;
  background-position: -28px -103px;
  background-size: 175%;
  box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
}

.mercury {
  height: 70px;
  width: 70px;
  margin-top: -35px;
  margin-left: -35px;
  -webkit-animation: orb 7.1867343561s linear infinite;
          animation: orb 7.1867343561s linear infinite;
}
.mercury:before {
  height: 4px;
  width: 4px;
  background: #9f5e26;
  margin-top: -2px;
  margin-left: -2px;
}

.venus {
  height: 100px;
  width: 100px;
  margin-top: -50px;
  margin-left: -50px;
  -webkit-animation: orb 18.4555338265s linear infinite;
          animation: orb 18.4555338265s linear infinite;
}
.venus:before {
  height: 8px;
  width: 8px;
  background: #BEB768;
  margin-top: -4px;
  margin-left: -4px;
}

.earth {
  height: 145px;
  width: 145px;
  margin-top: -72.5px;
  margin-left: -72.5px;
  -webkit-animation: orb 30s linear infinite;
          animation: orb 30s linear infinite;
}
.earth:before {
  height: 6px;
  width: 6px;
  background: #11abe9;
  margin-top: -3px;
  margin-left: -3px;
}
.earth:after {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 50%;
  top: 0px;
  margin-left: -9px;
  margin-top: -9px;
  border-radius: 100px;
  box-shadow: 0 -10px 0 -8px grey;
  -webkit-animation: orb 2.2440352158s linear infinite;
          animation: orb 2.2440352158s linear infinite;
}

.mars {
  height: 190px;
  width: 190px;
  margin-top: -95px;
  margin-left: -95px;
  -webkit-animation: orb 56.4261314589s linear infinite;
          animation: orb 56.4261314589s linear infinite;
}
.mars:before {
  height: 6px;
  width: 6px;
  background: #cf3921;
  margin-top: -3px;
  margin-left: -3px;
}

.jupiter {
  height: 340px;
  width: 340px;
  margin-top: -170px;
  margin-left: -170px;
  -webkit-animation: orb 355.7228171013s linear infinite;
          animation: orb 355.7228171013s linear infinite;
}
.jupiter:before {
  height: 18px;
  width: 18px;
  background: #c76e2a;
  margin-top: -9px;
  margin-left: -9px;
}

.saturn {
  height: 440px;
  width: 440px;
  margin-top: -220px;
  margin-left: -220px;
  -webkit-animation: orb 882.6952471456s linear infinite;
          animation: orb 882.6952471456s linear infinite;
}
.saturn:before {
  height: 12px;
  width: 12px;
  background: #e7c194;
  margin-top: -6px;
  margin-left: -6px;
}
.saturn:after {
  position: absolute;
  content: "";
  height: 2.34%;
  width: 4.676%;
  left: 50%;
  top: 0px;
  -webkit-transform: rotateZ(-52deg);
          transform: rotateZ(-52deg);
  margin-left: -2.3%;
  margin-top: -1.2%;
  border-radius: 50% 50% 50% 50%;
  box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
  -webkit-animation: orb 882.6952471456s linear infinite;
          animation: orb 882.6952471456s linear infinite;
  animation-direction: reverse;
  -webkit-transform-origin: 52% 60%;
          transform-origin: 52% 60%;
}

.uranus {
  height: 520px;
  width: 520px;
  margin-top: -260px;
  margin-left: -260px;
  -webkit-animation: orb 2512.4001967933s linear infinite;
          animation: orb 2512.4001967933s linear infinite;
}
.uranus:before {
  height: 10px;
  width: 10px;
  background: #b5e3e3;
  margin-top: -5px;
  margin-left: -5px;
}

.neptune {
  height: 630px;
  width: 630px;
  margin-top: -315px;
  margin-left: -315px;
  -webkit-animation: orb 4911.7838624549s linear infinite;
          animation: orb 4911.7838624549s linear infinite;
}
.neptune:before {
  height: 10px;
  width: 10px;
  background: #175e9e;
  margin-top: -5px;
  margin-left: -5px;
}

.asteroids-belt {
  opacity: .7;
  border-color: transparent !important;
  height: 300px;
  width: 300px;
  margin-top: -150px;
  margin-left: -150px;
  -webkit-animation: orb 179.9558282773s linear infinite;
          animation: orb 179.9558282773s linear infinite;
  overflow: hidden;
}
.asteroids-belt:before {
  top: 50%;
  height: 210px;
  width: 210px;
  margin-left: -105px;
  margin-top: -105px;
  background: transparent;
  border-radius: 140px !important;
  box-shadow: 86px 123px 0 -104px rgba(255, 255, 255, 0.505) , 57px -105px 0 -104px rgba(255,255,255, 0.64) , -59px -2px 0 -104px rgba(255,255,255, 0.351) , -7px 142px 0 -104px rgba(255,255,255, 0.6) , 42px 68px 0 -104px rgba(255,255,255, 0.003) , -37px -15px 0 -104px rgba(255,255,255, 0.092) , -78px -109px 0 -104px rgba(255,255,255, 0.877) , 127px 23px 0 -104px rgba(255,255,255, 0.081) , -103px -88px 0 -104px rgba(255,255,255, 0.912) , -38px -65px 0 -104px rgba(255,255,255, 0.255) , 13px -22px 0 -104px rgba(255,255,255, 0.917) , 61px -42px 0 -104px rgba(255,255,255, 0.262) , -95px 65px 0 -104px rgba(255,255,255, 0.914) , 44px 100px 0 -104px rgba(255,255,255, 0.867) , -21px -60px 0 -104px rgba(255,255,255, 0.79) , -106px 106px 0 -104px rgba(255,255,255, 0.821) , 78px -140px 0 -104px rgba(255,255,255, 0.669) , -13px -91px 0 -104px rgba(255,255,255, 0.343) , 57px 60px 0 -104px rgba(255,255,255, 0.624) , -142px 124px 0 -104px rgba(255,255,255, 0.067) , 96px -127px 0 -104px rgba(255,255,255, 0.523) , 95px -30px 0 -104px rgba(255,255,255, 0.639) , -42px -64px 0 -104px rgba(255,255,255, 0.283) , 23px 103px 0 -104px rgba(255,255,255, 0.139) , 94px 117px 0 -104px rgba(255,255,255, 0.093) , 100px 145px 0 -104px rgba(255,255,255, 0.576) , 143px 74px 0 -104px rgba(255,255,255, 0.563) , -101px 34px 0 -104px rgba(255,255,255, 0.584) , 123px 111px 0 -104px rgba(255,255,255, 0.217) , -19px -55px 0 -104px rgba(255,255,255, 0.834) , -134px -97px 0 -104px rgba(255,255,255, 0.701) , -100px 133px 0 -104px rgba(255,255,255, 0.81) , 48px -70px 0 -104px rgba(255,255,255, 0.778) , -17px 119px 0 -104px rgba(255,255,255, 0.299) , 12px -83px 0 -104px rgba(255,255,255, 0.729) , -96px 139px 0 -104px rgba(255,255,255, 0.164) , 124px 109px 0 -104px rgba(255,255,255, 0.431) , 17px 96px 0 -104px rgba(255,255,255, 0.176) , 27px -38px 0 -104px rgba(255,255,255, 0.785) , -66px -106px 0 -104px rgba(255,255,255, 0.881) , 39px -107px 0 -104px rgba(255,255,255, 0.984) , 87px -90px 0 -104px rgba(255,255,255, 0.975) , -54px -78px 0 -104px rgba(255,255,255, 0.803) , -85px -130px 0 -104px rgba(255,255,255, 0.78) , -45px -25px 0 -104px rgba(255,255,255, 0.032) , -107px -133px 0 -104px rgba(255,255,255, 0.433) , -144px 42px 0 -104px rgba(255,255,255, 0.318) , -64px 4px 0 -104px rgba(255,255,255, 0.015) , -63px -124px 0 -104px rgba(255,255,255, 0.376) , 41px 19px 0 -104px rgba(255,255,255, 0.9) , -66px -74px 0 -104px rgba(255,255,255, 0.33) , 12px -133px 0 -104px rgba(255,255,255, 0.355) , 134px -7px 0 -104px rgba(255,255,255, 0.992) , -41px -40px 0 -104px rgba(255,255,255, 0.991) , -124px 87px 0 -104px rgba(255,255,255, 0.57) , -118px 113px 0 -104px rgba(255,255,255, 0.779) , -104px 25px 0 -104px rgba(255,255,255, 0.502) , 89px -137px 0 -104px rgba(255,255,255, 0.103) , 42px -129px 0 -104px rgba(255,255,255, 0.612) , 108px 38px 0 -104px rgba(255,255,255, 0.25) , -140px 20px 0 -104px rgba(255,255,255, 0.012) , 21px -89px 0 -104px rgba(255,255,255, 0.455) , 80px -131px 0 -104px rgba(255,255,255, 0.687) , -56px -54px 0 -104px rgba(255,255,255, 0.083) , -38px -140px 0 -104px rgba(255,255,255, 0.889) , 49px 130px 0 -104px rgba(255,255,255, 0.01) , -142px -6px 0 -104px rgba(255,255,255, 0.029) , 125px -13px 0 -104px rgba(255,255,255, 0.852) , 41px 136px 0 -104px rgba(255,255,255, 0.922) , -33px -110px 0 -104px rgba(255,255,255, 0.331) , -74px 6px 0 -104px rgba(255,255,255, 0.113) , -10px -74px 0 -104px rgba(255,255,255, 0.097) , 17px 76px 0 -104px rgba(255,255,255, 0.571) , 77px -15px 0 -104px rgba(255,255,255, 0.541) , -117px 5px 0 -104px rgba(255,255,255, 0.105) , 105px -115px 0 -104px rgba(255,255,255, 0.814) , 34px 88px 0 -104px rgba(255,255,255, 0.121) , 107px 29px 0 -104px rgba(255,255,255, 0.663) , 145px -85px 0 -104px rgba(255,255,255, 0.716) , 72px -121px 0 -104px rgba(255,255,255, 0.753) , 129px -64px 0 -104px rgba(255,255,255, 0.804) , -144px 122px 0 -104px rgba(255,255,255, 0.71) , 74px -37px 0 -104px rgba(255,255,255, 0.594) , -60px 143px 0 -104px rgba(255,255,255, 0.616) , -55px -116px 0 -104px rgba(255,255,255, 0.437) , -124px 80px 0 -104px rgba(255,255,255, 0.021) , -54px 34px 0 -104px rgba(255,255,255, 0.466) , 137px -138px 0 -104px rgba(255,255,255, 0.589) , 105px 118px 0 -104px rgba(255,255,255, 0.199) , 26px 102px 0 -104px rgba(255,255,255, 0.282) , -143px -102px 0 -104px rgba(255,255,255, 0.059) , 96px -52px 0 -104px rgba(255,255,255, 0.835) , -13px 127px 0 -104px rgba(255,255,255, 0.668) , 32px -5px 0 -104px rgba(255,255,255, 0.397) , -36px -112px 0 -104px rgba(255,255,255, 0.456) , -68px 87px 0 -104px rgba(255,255,255, 0.845) , -51px 53px 0 -104px rgba(255,255,255, 0.923) , -75px 59px 0 -104px rgba(255,255,255, 0.15) , 26px -40px 0 -104px rgba(255,255,255, 0.956) , 130px -25px 0 -104px rgba(255,255,255, 0.813) , 132px -30px 0 -104px rgba(255,255,255, 0.004) , 11px 0px 0 -104px rgba(255,255,255, 0.191) , -109px -80px 0 -104px rgba(255,255,255, 0.144) , 23px 71px 0 -104px rgba(255,255,255, 0.119) , -19px -65px 0 -104px rgba(255,255,255, 0.595) , 28px -36px 0 -104px rgba(255,255,255, 0.823) , -92px 15px 0 -104px rgba(255,255,255, 0.951) , 77px 13px 0 -104px rgba(255,255,255, 0.865) , 126px 44px 0 -104px rgba(255,255,255, 0.909) , -10px -85px 0 -104px rgba(255,255,255, 0.543) , 40px 37px 0 -104px rgba(255,255,255, 0.725) , 111px -139px 0 -104px rgba(255,255,255, 0.265) , 69px -41px 0 -104px rgba(255,255,255, 0.036) , 53px 72px 0 -104px rgba(255,255,255, 0.182) , -130px 77px 0 -104px rgba(255,255,255, 0.449) , 122px -29px 0 -104px rgba(255,255,255, 0.212) , 31px 35px 0 -104px rgba(255,255,255, 0.577) , -143px -86px 0 -104px rgba(255,255,255, 0.229) , -36px -109px 0 -104px rgba(255,255,255, 0.627) , -38px -112px 0 -104px rgba(255,255,255, 0.029) , -130px -129px 0 -104px rgba(255,255,255, 0.54) , 22px 22px 0 -104px rgba(255,255,255, 0.854) , -56px -21px 0 -104px rgba(255,255,255, 0.234) , -74px -70px 0 -104px rgba(255,255,255, 0.549) , -21px 145px 0 -104px rgba(255,255,255, 0.353) , -13px 53px 0 -104px rgba(255,255,255, 0.834) , 142px -108px 0 -104px rgba(255,255,255, 0.959) , -137px -117px 0 -104px rgba(255,255,255, 0.412) , 139px -34px 0 -104px rgba(255,255,255, 0.661) , -8px 124px 0 -104px rgba(255,255,255, 0.476) , -1px 145px 0 -104px rgba(255,255,255, 0.375) , -74px 52px 0 -104px rgba(255,255,255, 0.754) , 126px -109px 0 -104px rgba(255,255,255, 0.064) , 58px 46px 0 -104px rgba(255,255,255, 0.115) , -124px 76px 0 -104px rgba(255,255,255, 0.397) , 110px -140px 0 -104px rgba(255,255,255, 0.273) , 5px -6px 0 -104px rgba(255,255,255, 0.507) , -24px 102px 0 -104px rgba(255,255,255, 0.028) , -32px -59px 0 -104px rgba(255,255,255, 0.556) , 68px 120px 0 -104px rgba(255,255,255, 0.407) , 135px 134px 0 -104px rgba(255,255,255, 0.278) , -104px -142px 0 -104px rgba(255,255,255, 0.039) , 41px -55px 0 -104px rgba(255,255,255, 0.106) , 143px -121px 0 -104px rgba(255,255,255, 0.861) , 43px -68px 0 -104px rgba(255,255,255, 0.925) , -6px -69px 0 -104px rgba(255,255,255, 0.339) , -3px 131px 0 -104px rgba(255,255,255, 0.511) , 40px -19px 0 -104px rgba(255,255,255, 0.007) , 13px 107px 0 -104px rgba(255,255,255, 0.254) , 30px 97px 0 -104px rgba(255,255,255, 0.047) , 67px 128px 0 -104px rgba(255,255,255, 0.772) , 92px 76px 0 -104px rgba(255,255,255, 0.409) , 43px -31px 0 -104px rgba(255,255,255, 0.709) , 23px 83px 0 -104px rgba(255,255,255, 0.914) , -14px -122px 0 -104px rgba(255,255,255, 0.247) , -14px -99px 0 -104px rgba(255,255,255, 0.846) , 52px -45px 0 -104px rgba(255,255,255, 0.885) , 138px -139px 0 -104px rgba(255,255,255, 0.368) , -11px 80px 0 -104px rgba(255,255,255, 0.447) , 60px -113px 0 -104px rgba(255,255,255, 0.77) , 138px 36px 0 -104px rgba(255,255,255, 0.635) , -71px -64px 0 -104px rgba(255,255,255, 0.305) , 4px 36px 0 -104px rgba(255,255,255, 0.311) , 107px -73px 0 -104px rgba(255,255,255, 0.436) , -62px -140px 0 -104px rgba(255,255,255, 0.442) , 31px -97px 0 -104px rgba(255,255,255, 0.64) , 114px 119px 0 -104px rgba(255,255,255, 0.525) , -99px 108px 0 -104px rgba(255,255,255, 0.079) , -34px -30px 0 -104px rgba(255,255,255, 0.522) , -107px -71px 0 -104px rgba(255,255,255, 0.322) , 141px 115px 0 -104px rgba(255,255,255, 0.209) , -96px 80px 0 -104px rgba(255,255,255, 0.633) , 112px -109px 0 -104px rgba(255,255,255, 0.022) , 43px -114px 0 -104px rgba(255,255,255, 0.192) , 131px 87px 0 -104px rgba(255,255,255, 0.709) , 122px 18px 0 -104px rgba(255,255,255, 0.648) , -115px 57px 0 -104px rgba(255,255,255, 0.912) , 112px -48px 0 -104px rgba(255,255,255, 0.653) , 88px -114px 0 -104px rgba(255,255,255, 0.902) , 14px 16px 0 -104px rgba(255,255,255, 0.891) , -22px -132px 0 -104px rgba(255,255,255, 0.509) , 90px 75px 0 -104px rgba(255,255,255, 0.767) , -64px -105px 0 -104px rgba(255,255,255, 0.675) , 31px 38px 0 -104px rgba(255,255,255, 0.651) , 60px -59px 0 -104px rgba(255,255,255, 0.487) , 54px -55px 0 -104px rgba(255,255,255, 0.248) , -60px -132px 0 -104px rgba(255,255,255, 0.358) , -104px -130px 0 -104px rgba(255,255,255, 0.768) , 75px -41px 0 -104px rgba(255,255,255, 0.439) , 86px -39px 0 -104px rgba(255,255,255, 0.899) , 41px 131px 0 -104px rgba(255,255,255, 0.818) , 132px 11px 0 -104px rgba(255,255,255, 0.67) , 34px -102px 0 -104px rgba(255,255,255, 0.969) , 80px -67px 0 -104px rgba(255,255,255, 0.189) , 20px -96px 0 -104px rgba(255,255,255, 0.286) , -36px -125px 0 -104px rgba(255,255,255, 0.415) , 74px -122px 0 -104px rgba(255,255,255, 0.853) , 100px -12px 0 -104px rgba(255,255,255, 0.109) , -9px 62px 0 -104px rgba(255,255,255, 0.315) , -141px -24px 0 -104px rgba(255,255,255, 0.008) , 21px 61px 0 -104px rgba(255,255,255, 0.108) , 27px -114px 0 -104px rgba(255,255,255, 0.875) , 92px -30px 0 -104px rgba(255,255,255, 0.342) , -13px 25px 0 -104px rgba(255,255,255, 0.994) , 117px -64px 0 -104px rgba(255,255,255, 0.792) , 100px -95px 0 -104px rgba(255,255,255, 0.255) , 95px 97px 0 -104px rgba(255,255,255, 0.677) , 41px -49px 0 -104px rgba(255,255,255, 0.115) , 70px 24px 0 -104px rgba(255,255,255, 0.992) , 119px -124px 0 -104px rgba(255,255,255, 0.93) , -61px 119px 0 -104px rgba(255,255,255, 0.335) , 77px -12px 0 -104px rgba(255,255,255, 0.349) , 55px -79px 0 -104px rgba(255,255,255, 0.597) , 32px -130px 0 -104px rgba(255,255,255, 0.486) , 122px 84px 0 -104px rgba(255,255,255, 0.726) , -61px 53px 0 -104px rgba(255,255,255, 0.748) , 65px 118px 0 -104px rgba(255,255,255, 0.8) , -53px -75px 0 -104px rgba(255,255,255, 0.093) , 46px 123px 0 -104px rgba(255,255,255, 0.603) , -91px 0px 0 -104px rgba(255,255,255, 0.64) , 136px -3px 0 -104px rgba(255,255,255, 0.726) , -25px -35px 0 -104px rgba(255,255,255, 0.61) , 126px -69px 0 -104px rgba(255,255,255, 0.257) , -124px 73px 0 -104px rgba(255,255,255, 0.515) , -92px 30px 0 -104px rgba(255,255,255, 0.25) , 120px 73px 0 -104px rgba(255,255,255, 0.552) , 102px 39px 0 -104px rgba(255,255,255, 0.341) , -105px -1px 0 -104px rgba(255,255,255, 0.105) , -42px -62px 0 -104px rgba(255,255,255, 0.63) , -137px -45px 0 -104px rgba(255,255,255, 0.057) , 28px 42px 0 -104px rgba(255,255,255, 0.358) , 83px 107px 0 -104px rgba(255,255,255, 0.39) , 118px -79px 0 -104px rgba(255,255,255, 0.798) , 54px -73px 0 -104px rgba(255,255,255, 0.281) , 117px -120px 0 -104px rgba(255,255,255, 0.424) , 131px -9px 0 -104px rgba(255,255,255, 0.304) , 95px 22px 0 -104px rgba(255,255,255, 0.486) , -113px -34px 0 -104px rgba(255,255,255, 0.816) , -91px -5px 0 -104px rgba(255,255,255, 0.317) , 2px 11px 0 -104px rgba(255,255,255, 0.025) , 110px 52px 0 -104px rgba(255,255,255, 0.882) , -95px 104px 0 -104px rgba(255,255,255, 0.347) , 119px 24px 0 -104px rgba(255,255,255, 0.202) , -11px 19px 0 -104px rgba(255,255,255, 0.42) , -71px -1px 0 -104px rgba(255,255,255, 0.212) , -126px 88px 0 -104px rgba(255,255,255, 0.702) , 87px 49px 0 -104px rgba(255,255,255, 0.709) , 52px -93px 0 -104px rgba(255,255,255, 0.238) , -20px 23px 0 -104px rgba(255,255,255, 0.338) , -10px 108px 0 -104px rgba(255,255,255, 0.982) , -62px -130px 0 -104px rgba(255,255,255, 0.391) , -6px 38px 0 -104px rgba(255,255,255, 0.545) , 64px -33px 0 -104px rgba(255,255,255, 0.04) , -2px -107px 0 -104px rgba(255,255,255, 0.753) , -97px 94px 0 -104px rgba(255,255,255, 0.547) , 44px -56px 0 -104px rgba(255,255,255, 0.676) , 129px 61px 0 -104px rgba(255,255,255, 0.612) , -102px -43px 0 -104px rgba(255,255,255, 0.725) , -44px -144px 0 -104px rgba(255,255,255, 0.169) , 87px 132px 0 -104px rgba(255,255,255, 0.212) , -138px -2px 0 -104px rgba(255,255,255, 0.578) , -26px -13px 0 -104px rgba(255,255,255, 0.43) , 129px 27px 0 -104px rgba(255,255,255, 0.193) , 51px -9px 0 -104px rgba(255,255,255, 0.38) , 131px -112px 0 -104px rgba(255,255,255, 0.235) , -31px 43px 0 -104px rgba(255,255,255, 0.934) , 133px -54px 0 -104px rgba(255,255,255, 0.978) , -3px -143px 0 -104px rgba(255,255,255, 0.566) , 74px -71px 0 -104px rgba(255,255,255, 0.121) , 145px 19px 0 -104px rgba(255,255,255, 0.221) , 85px -119px 0 -104px rgba(255,255,255, 0.574) , -20px -42px 0 -104px rgba(255,255,255, 0.035) , -7px 101px 0 -104px rgba(255,255,255, 0.74) , -96px 96px 0 -104px rgba(255,255,255, 0.746) , -40px 60px 0 -104px rgba(255,255,255, 0.485) , 73px -138px 0 -104px rgba(255,255,255, 0.856) , 82px -32px 0 -104px rgba(255,255,255, 0.175) , 141px -26px 0 -104px rgba(255,255,255, 0.768) , -28px -88px 0 -104px rgba(255,255,255, 0.051) , -21px -45px 0 -104px rgba(255,255,255, 0.593) , -88px 35px 0 -104px rgba(255,255,255, 0.699) , -32px -86px 0 -104px rgba(255,255,255, 0.058) , -8px -122px 0 -104px rgba(255,255,255, 0.939) , -141px 115px 0 -104px rgba(255,255,255, 0.339) , -142px -69px 0 -104px rgba(255,255,255, 0.193) , -122px -87px 0 -104px rgba(255,255,255, 0.951) , -138px 140px 0 -104px rgba(255,255,255, 0.511) , 13px 40px 0 -104px rgba(255,255,255, 0.902) , -127px 100px 0 -104px rgba(255,255,255, 0.657) , 80px -27px 0 -104px rgba(255,255,255, 0.073) , -96px 66px 0 -104px rgba(255,255,255, 0.178) , 66px 127px 0 -104px rgba(255,255,255, 0.15) , -5px 51px 0 -104px rgba(255,255,255, 0.012) , 100px 110px 0 -104px rgba(255,255,255, 0.374) , -30px -129px 0 -104px rgba(255,255,255, 0.13) , -94px 42px 0 -104px rgba(255,255,255, 0.792) , -120px 61px 0 -104px rgba(255,255,255, 0.886) , 62px 58px 0 -104px rgba(255,255,255, 0.578) , 58px -33px 0 -104px rgba(255,255,255, 0.736) , -20px 122px 0 -104px rgba(255,255,255, 0.585) , -99px 26px 0 -104px rgba(255,255,255, 0.343) , -98px -109px 0 -104px rgba(255,255,255, 0.354) , -70px 5px 0 -104px rgba(255,255,255, 0.681) , 107px -24px 0 -104px rgba(255,255,255, 0.297) , -131px -122px 0 -104px rgba(255,255,255, 0.592) , 126px 37px 0 -104px rgba(255,255,255, 0.878) , -47px -135px 0 -104px rgba(255,255,255, 0.229) , 67px 29px 0 -104px rgba(255,255,255, 0.997) , 145px -64px 0 -104px rgba(255,255,255, 0.525) , 45px 121px 0 -104px rgba(255,255,255, 0.908) , -138px 36px 0 -104px rgba(255,255,255, 0.593) , -113px -1px 0 -104px rgba(255,255,255, 0.454) , 93px 124px 0 -104px rgba(255,255,255, 0.205) , -70px 109px 0 -104px rgba(255,255,255, 0.834) , -38px 110px 0 -104px rgba(255,255,255, 0.143) , 140px 65px 0 -104px rgba(255,255,255, 0.121) , 30px -62px 0 -104px rgba(255,255,255, 0.901) , 6px 105px 0 -104px rgba(255,255,255, 0.136) , -56px -112px 0 -104px rgba(255,255,255, 0.666) , -142px -26px 0 -104px rgba(255,255,255, 0.922) , 136px 126px 0 -104px rgba(255,255,255, 0.214) , -18px -102px 0 -104px rgba(255,255,255, 0.05) , -107px -23px 0 -104px rgba(255,255,255, 0.037) , -18px -26px 0 -104px rgba(255,255,255, 0.087) , 42px -62px 0 -104px rgba(255,255,255, 0.008) , -125px -72px 0 -104px rgba(255,255,255, 0.086) , 78px -117px 0 -104px rgba(255,255,255, 0.29) , 77px -77px 0 -104px rgba(255,255,255, 0.307) , 12px 32px 0 -104px rgba(255,255,255, 0.34) , -120px 131px 0 -104px rgba(255,255,255, 0.522) , 86px 84px 0 -104px rgba(255,255,255, 0.738) , 87px 106px 0 -104px rgba(255,255,255, 0.474) , 20px -10px 0 -104px rgba(255,255,255, 0.042) , -101px 72px 0 -104px rgba(255,255,255, 0.45) , 47px -48px 0 -104px rgba(255,255,255, 0.982) , -141px 5px 0 -104px rgba(255,255,255, 0.272) , -80px 138px 0 -104px rgba(255,255,255, 0.095) , -121px 21px 0 -104px rgba(255,255,255, 0.301) , 142px -29px 0 -104px rgba(255,255,255, 0.386) , -25px 113px 0 -104px rgba(255,255,255, 0.485) , -128px -111px 0 -104px rgba(255,255,255, 0.347) , -120px -87px 0 -104px rgba(255,255,255, 0.462) , -5px 72px 0 -104px rgba(255,255,255, 0.537) , 122px 104px 0 -104px rgba(255,255,255, 0.152) , 88px -28px 0 -104px rgba(255,255,255, 0.513) , -54px -108px 0 -104px rgba(255,255,255, 0.219) , -95px -118px 0 -104px rgba(255,255,255, 0.915) , -67px 104px 0 -104px rgba(255,255,255, 0.112) , 114px 92px 0 -104px rgba(255,255,255, 0.146) , 41px -5px 0 -104px rgba(255,255,255, 0.889) , -83px -80px 0 -104px rgba(255,255,255, 0.347) , 105px 3px 0 -104px rgba(255,255,255, 0.713) , 2px -69px 0 -104px rgba(255,255,255, 0.28) , 12px -50px 0 -104px rgba(255,255,255, 0.746) , 136px -122px 0 -104px rgba(255,255,255, 0.621) , 27px -59px 0 -104px rgba(255,255,255, 0.691) , -61px -15px 0 -104px rgba(255,255,255, 0.169) , 9px -13px 0 -104px rgba(255,255,255, 0.058) , 129px -18px 0 -104px rgba(255,255,255, 0.607) , 18px -76px 0 -104px rgba(255,255,255, 0.351) , -137px 66px 0 -104px rgba(255,255,255, 0.296) , 123px 31px 0 -104px rgba(255,255,255, 0.636) , -67px -142px 0 -104px rgba(255,255,255, 0.147) , 12px 37px 0 -104px rgba(255,255,255, 0.693) , -144px 13px 0 -104px rgba(255,255,255, 0.498) , 98px -24px 0 -104px rgba(255,255,255, 0.583) , 96px -98px 0 -104px rgba(255,255,255, 0.522) , 59px 57px 0 -104px rgba(255,255,255, 0.103) , -67px -23px 0 -104px rgba(255,255,255, 0.069) , -66px -117px 0 -104px rgba(255,255,255, 0.594) , -97px 113px 0 -104px rgba(255,255,255, 0.486) , -134px 50px 0 -104px rgba(255,255,255, 0.283) , 116px 59px 0 -104px rgba(255,255,255, 0.233) , -119px 109px 0 -104px rgba(255,255,255, 0.258) , 102px -138px 0 -104px rgba(255,255,255, 0.991) , -136px -12px 0 -104px rgba(255,255,255, 0.436) , 42px -19px 0 -104px rgba(255,255,255, 0.606) , 3px -63px 0 -104px rgba(255,255,255, 0.368) , -139px -108px 0 -104px rgba(255,255,255, 0.987) , 63px 133px 0 -104px rgba(255,255,255, 0.94) , -88px 115px 0 -104px rgba(255,255,255, 0.582) , 29px -25px 0 -104px rgba(255,255,255, 0.385) , -111px -34px 0 -104px rgba(255,255,255, 0.643) , -109px 4px 0 -104px rgba(255,255,255, 0.738) , 8px 137px 0 -104px rgba(255,255,255, 0.581) , 103px -97px 0 -104px rgba(255,255,255, 0.97) , -83px 26px 0 -104px rgba(255,255,255, 0.163) , -11px -124px 0 -104px rgba(255,255,255, 0.802) , -117px -4px 0 -104px rgba(255,255,255, 0.775) , 121px -37px 0 -104px rgba(255,255,255, 0.181);
}

.pluto {
  height: 780px;
  width: 780px;
  margin-top: -450px;
  margin-left: -320px;
  -webkit-animation: orb 7439.7074054575s linear infinite;
          animation: orb 7439.7074054575s linear infinite;
}
.pluto:before {
  height: 3px;
  width: 3px;
  background: #fff;
  margin-top: -1.5px;
  margin-left: -1.5px;
}

.hide {
  display: none;
}


@-webkit-keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@keyframes orb {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

</style>
