<template>
<div class="map">
  <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:800px" @click="getClickInfo">

    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>

    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>

    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>

    <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
  </baidu-map>
  </div>
</template>
<script>
export default {
  name: 'v_header',
  data () {
    return {
	  msg: 'header',
	  center: {lng:0, lat:0},
      zoom:13,	  
    }
  },
  methods: {
handler ({BMap, map}) {
// var point = new BMap.Point(113.841232,22.641364);    
// map.centerAndZoom(point, 13);    
// var marker = new BMap.Marker(point);        // 创建标注  
// map.addOverlay(marker);                     // 将标注添加到地图中 


var opts = {    
    width : 250,     // 信息窗口宽度    
    height: 100,     // 信息窗口高度    
    title : "Hello"  // 信息窗口标题   
}    
var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象    
map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口



var driving = new BMap.TransitRoute(map, { 
    renderOptions: {
        map: map, 
        autoViewport: true 
} 
});
var start = new BMap.Point(113.841232, 22.641364);
var end = new BMap.Point(114.068543,22.541628);
driving.search(start, end);




	map.enableScrollWheelZoom(true)
	// var marker = new BMap.Marker(113.841232,22.641364);        // 创建标注    
	// map.addOverlay(marker); 
// 	this.center.lng =113.841232
//     this.center.lat =22.641364
//     this.zoom =this.zoom
},

    getClickInfo (e) {
	// console.log(e.point.lng)
	// console.log(e.point.lat)
	this.center.lng = e.point.lng
    this.center.lat = e.point.lat
    }


  },
components: {
},
  mounted () {

  }}
</script>
<style scoped>
  .bm-view {
	width:100%;
    height:300px;
  }
</style>
