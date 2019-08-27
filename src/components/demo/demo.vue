<template>
  <div id="demo">
    <el-row>
        <span>This is Demo</span>
    </el-row>
    <el-row>
        <canvas id="demo-canvas"></canvas>
    </el-row>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'Demo',
  data() {
    return{

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {

        var canvas = document.getElementById('demo-canvas')
        var renderer = new THREE.WebGLRenderer({canvas: canvas}) 
        renderer.setClearColor(new THREE.Color("rgb(0, 0, 0)"))
        renderer.setSize(1400, 700)

        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( 0, 0, 0 );

        var scene = new THREE.Scene();
        //create a blue LineBasicMaterial
        var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
        geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
        geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

        var geometry2 = new THREE.Geometry();
        geometry2.vertices.push(new THREE.Vector3( 0, 10, 0) );
        geometry2.vertices.push(new THREE.Vector3( 0, -20, 0) );

        var line = new THREE.Line( geometry, material );

        var line2 = new THREE.Line( geometry2, material );

        scene.add( line );
        scene.add( line2 );
        renderer.render( scene, camera );
    }
  }
}
</script>
<style>
#demo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>