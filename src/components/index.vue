<template>
  <div class="index">
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
      <h1 style="font-size: 0;">前端开发和设计师朱东东</h1>
      <div class="hero" data-aos="fade-down"
        data-aos-duration="1500">
        <h1 data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="3000" data-aos-delay="2000" >看得越远</h1>
        <p>So we have to be more humble and stand in awe of</p>
      </div>
          <i class="chevron bottom"></i>
      <small class="beian"><a href="http://www.beian.miit.gov.cn" target="view_frame"><el-image :src="beian" fit="contain"></el-image>粤ICP备 18068542号</a></small>
    </div>
  </div>
</template>

<script>
import remoteLoad from '../js/vuejs/remoteLoad'
export default {
  name: "indexq",
  data() {
    return {
      msg: "index1",
      beian: require('../assets/beian.png'),
    };
  },
  methods: {
    threeyun(){
// 3D雲彩
      // Promise.all([remoteLoad('../../static/js/yunjs/ThreeWebGL.js', 'script'), remoteLoad('../../static/js/yunjs/ThreeExtras.js', 'script'), remoteLoad('../../static/js/yunjs/Detector.js', 'script'), remoteLoad('../../static/js/yunjs/RequestAnimationFrame.js', 'script')]).then(() => {
        if (!Detector.webgl) Detector.addGetWebGLMessage()
        // Bg gradient
        var canvas = document.createElement('canvas')
        canvas.width = 32
        canvas.height = window.innerHeight
        var context = canvas.getContext('2d')
        var gradient = context.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, '#1e4877')

        gradient.addColorStop(0.5, '#4584b4')
        context.fillStyle = gradient

        context.fillRect(0, 0, canvas.width, canvas.height)
        

        // document.body.style.background = 'url(' + canvas.toDataURL('image/png') + ')'

        // Clouds

        var container

        var camera, scene, renderer, sky, mesh, geometry, material,

          i, h, color, colors = [], sprite, size, x, y, z

        var mouseX = 0, mouseY = 0

        var start_time = new Date().getTime()

        var windowHalfX = window.innerWidth / 2

        var windowHalfY = window.innerHeight / 2

        init()
        animate()

        function init () {
          container = document.createElement('div')
          container.className = 'threeyundom'
          var domelememt = document.getElementsByClassName('index')[0]
          domelememt.appendChild(container)
          camera = new THREE.Camera(30, window.innerWidth / window.innerHeight, 1, 3000)
          camera.position.z = 6000
          scene = new THREE.Scene()
          geometry = new THREE.Geometry()
          var texture = THREE.ImageUtils.loadTexture('../../static/bigimg/cloud10.png')
          texture.magFilter = THREE.LinearMipMapLinearFilter
          texture.minFilter = THREE.LinearMipMapLinearFilter
          var fog = new THREE.Fog(0x4584b4, -100, 3000)
          material = new THREE.MeshShaderMaterial({
            uniforms: {

              'map': {type: 't', value: 2, texture: texture},

              'fogColor': {type: 'c', value: fog.color},

              'fogNear': {type: 'f', value: fog.near},

              'fogFar': {type: 'f', value: fog.far}

            },

            vertexShader: ` varying vec2 vUv;



    void main() {



      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );



    }`,

            fragmentShader: ` uniform sampler2D map;



    uniform vec3 fogColor;

    uniform float fogNear;

    uniform float fogFar;



    varying vec2 vUv;



    void main() {



      float depth = gl_FragCoord.z / gl_FragCoord.w;

      float fogFactor = smoothstep( fogNear, fogFar, depth );



      gl_FragColor = texture2D( map, vUv );

      gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );

      gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );



    }
`,

            depthTest: false

          })

          var plane = new THREE.Mesh(new THREE.Plane(64, 64))

          for (i = 0; i < 8000; i++) {

            plane.position.x = Math.random() * 1000 - 500

            plane.position.y = -Math.random() * Math.random() * 200 - 15

            plane.position.z = i

            plane.rotation.z = Math.random() * Math.PI

            plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5

            GeometryUtils.merge(geometry, plane)

          }

          mesh = new THREE.Mesh(geometry, material)

          scene.addObject(mesh)

          mesh = new THREE.Mesh(geometry, material)

          mesh.position.z = -8000

          scene.addObject(mesh)

          renderer = new THREE.WebGLRenderer({antialias: false})

          renderer.setSize(window.innerWidth, window.innerHeight)

          container.appendChild(renderer.domElement)

          document.addEventListener('mousemove', onDocumentMouseMove, false)

          window.addEventListener('resize', onWindowResize, false)

        }
        function onDocumentMouseMove (event) {

          mouseX = (event.clientX - windowHalfX) * 0.25

          mouseY = (event.clientY - windowHalfY) * 0.15

        }

        function onWindowResize (event) {

          camera.aspect = window.innerWidth / window.innerHeight

          camera.updateProjectionMatrix()

          renderer.setSize(window.innerWidth, window.innerHeight)

        }

        function animate () {
          requestAnimationFrame(animate)
          render()
        }
        function render () {
          var position = ((new Date().getTime() - start_time) * 0.03) % 8000
          camera.position.x += (mouseX - camera.target.position.x) * 0.01
          camera.position.y += (-mouseY - camera.target.position.y) * 0.01
          camera.position.z = -position + 8000
          camera.target.position.x = camera.position.x
          camera.target.position.y = camera.position.y
          camera.target.position.z = camera.position.z - 1000
          renderer.render(scene, camera)
        }
      // })
    },

  },
  computed: {},
  mounted() {
    document.title = "朱东东❤"
    var scroll = document.getElementsByClassName("hero__scroll")[0];
    var header = document.getElementsByClassName("header")[0];
    // header.onmouseover = function() {
    //   scroll.style.top = "-10%";
    // };
    // header.onmouseout = function() {
    //   scroll.style.top = "0%";
    // };
    document.body.height = document.body.clientWidth
    /*百度统计*/
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?d203c417657377868eabea2f9e0276c5";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();

  this.threeyun()
  }
};
</script>

<style scoped>
@media screen and (max-width: 1025px) {
  .headcanvas {
    transform: scale(0.2) !important;
    top: 20% !important;
  }

} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */
@media screen and (max-width: 1200px) {
  .headcanvas {
    transform: scale(0.2) !important;
    top: 20% !important;
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
  top: 55%;  
  z-index: 999;
  left: 50%;
  padding-top: 15rem;
  transform: translate(-50%,-50%)!important;
  mix-blend-mode: var(--mix-blend-mode);
}
.hero h1{font-weight:900;}
.hero p{padding-top: 20px;font-size: 40px!important;font-weight: bold;}
.beian {
  position: absolute;
  left: 50%;
  transform: translate(-50% ,0);
  bottom: 10px;
  z-index: 999;
  /* display: none; */
}
.beian a{color:rgba(200, 200, 200, 0.9);font-size: 14px;}
.beian .el-image{padding-right: 0.2rem!important;width: 0.9rem!important;}
/* .canvas-h3{position: absolute;left: 50%;top: 20%;width: 480px;height: 89px;background: url(../assets/dong.png) 50% 50% no-repeat;transform: translate(-50% ,0);} */
/*下拉三角*/

.chevron,.chevron {
  display: block;
  -webkit-animation: pulse linear 2s infinite;
  animation: pulse linear 2s infinite;
  color: rgba(225, 19, 19, 0.8);

  position: absolute;
  margin: auto;
  display: block;
  /* cursor: pointer; */
  left: 50%;
  top: 4%;
  z-index: 88;
  transition: all 0.5s;
  transform: translate(-50%, 0%);
  text-transform: uppercase;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}
.chevron::before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: "";
  display: inline-block;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  vertical-align: top;
  width: 20px;
}

.chevron.bottom:before {
  top: 0;
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}
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
  top: 20%;
  width: 100%;
  transform: scale(0.3);
  display: flex;
  justify-content: center;
  z-index: 100;
  align-items: flex-start;
}

/* 3D云彩 */
			body {
				background-color: #326696;
				margin: 0px;
				overflow: hidden;
				font-family:Monospace;
				font-size:13px;
				text-align:center;
				font-weight: bold;
				text-align:center;
			}
			a {
				color:#0078ff;
			}

</style>
