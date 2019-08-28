<template>
  <div id="cube">
    <canvas id="cube-canvas"/>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'GreenCube',
  data() {
    return{
        scene: null,
        camera: null,
        renderer: null,
        cube:[]
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
        this.canvas = document.getElementById('cube-canvas')
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas}) 
        this.renderer.setClearColor(new THREE.Color("rgb(215,236,241)"))
        this.renderer.setSize(window.innerWidth * 0.8 , window.innerHeight * 0.8)

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        this.camera.position.z = 5

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.cube  = [
          this.makeCube(geometry, 0x44aa88,  0),
          this.makeCube(geometry, 0x8844aa, -2),
          this.makeCube(geometry, 0xaa8844,  2),
        ];

        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity)
        light.position.set(-1, 2, 4)
        this.scene.add(light)
    },
    animate() {
        this.cube.forEach((cube, ndx) => {
          cube.rotation.x += 0.01 * (ndx + 3)
          cube.rotation.y += 0.01 * (ndx + 3)
        });
        this.resizeRendererToDisplaySize()
        this.renderer.render( this.scene, this.camera )
        
        // window.requestAnimationFrame( this.animate.bind(this))
        requestAnimationFrame( this.animate)
    },
    makeCube(geometry, color, x) {
      const material = new THREE.MeshPhongMaterial({color})
    
      const cube = new THREE.Mesh(geometry, material)
      this.scene.add(cube)
    
      cube.position.x = x
    
      return cube;
    },
    resizeRendererToDisplaySize() {
      const canvas = this.renderer.domElement
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const needResize = canvas.width !== width || canvas.height !== height
      if (needResize) {
        this.renderer.setSize(width, height, false)
      }
      return needResize
    }
  }
}
</script>
<style>
#cube {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>