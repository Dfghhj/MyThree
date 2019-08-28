<template>
  <div id="triangle">
    <canvas id="triangle-canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'Triangle',
  data() {
    return{
        height:400,
        width:400,
        canvas:null,
        renderer:null,
        scene:null,
        camera:null,
        triangleShape:null,
        geo:null,
        mat:null,
        mesh:null,
        currentAngle: 0,
        lasT: Date.now()
    }
  },
  mounted() {
        this.init()
        this.render()
  },
  methods: {
    init() {
      this.canvas = document.getElementById('triangle-canvas')
      this.renderer = new THREE.WebGLRenderer({canvas: this.canvas}) 
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      this.renderer.setClearColor(new THREE.Color("rgb(215,236,241)"))
      this.renderer.setSize(window.innerWidth * 0.8 , window.innerHeight * 0.8)
      this.triangleShape = new THREE.Shape()
      this.triangleShape.moveTo(0, 10)
      this.triangleShape.lineTo(-10, -10)
      this.triangleShape.lineTo(10, -10)
      this.triangleShape.lineTo(0, 10)
      this.geo = new THREE.ShapeGeometry(this.triangleShape)
      this.mat = new THREE.MeshPhongMaterial({
          color: 0xff0000,
          side: THREE.DoubleSide
          })
      this.mesh = new THREE.Mesh(this.geo, this.mat)
      this.mesh.position.x = 0
      this.mesh.position.y = 0
      this.mesh.position.z = 0
      this.scene.add(this.mesh)
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(0, 0, 100);
      this.scene.add(light);
      this.camera.position.x = 0
      this.camera.position.y = 0
      this.camera.position.z = 50
      this.camera.lookAt(new THREE.Vector3(0,0,0))
    },
    changeAngle() {
        var now = Date.now()
        var du = now - this.lasT
        this.lasT = now
        this.currentAngle = this.currentAngle + du/1000 * Math.PI
    },
    render() {
        this.changeAngle()
        this.mesh.rotation.set(0,this.currentAngle, 0)
        this.renderer.render(this.scene, this.camera)
        requestAnimationFrame(this.render)
    }
  }
}
</script>
<style>
#triangle {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>