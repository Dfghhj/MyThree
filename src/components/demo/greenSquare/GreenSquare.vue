<template>
  <div id="square">
    <canvas id="square-canvas"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'GreenSquare',
  data() {
    return{
        scene: null,
        camera: null,
        renderer: null,
        geometry:null,
        material:null,
        cube:null
    }
  },
  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
                
        this.canvas = document.getElementById('square-canvas')
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas}) 
        this.renderer.setClearColor(new THREE.Color("rgb(0, 0, 0)"))
        this.renderer.setSize(400,400)

		this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
		this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		this.cube = new THREE.Mesh( this.geometry, this.material );
		this.scene.add( this.cube );

		this.camera.position.z = 5;

		
    },
    animate() {
        window.requestAnimationFrame( this.animate.bind(this));

		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;

		this.renderer.render( this.scene, this.camera );
    }
  }
}
</script>
<style>
#square {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>