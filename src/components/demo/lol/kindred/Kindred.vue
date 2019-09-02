<template>
  <div id="kindred">
    <el-row>
        <canvas id="kindred-canvas"></canvas>
    </el-row>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

export default {
  name: 'Kindred',
  data() {
    return{
        scene:null,
        camera:null,
        renderer:null,
        controls:null
        
    }
  },
  mounted() {
    this.init()
    this.render()
  },
  methods: {
    init() {
        const canvas = document.getElementById('kindred-canvas');
        this.renderer = new THREE.WebGLRenderer({canvas});
        this.renderer.setClearColor(new THREE.Color("rgb(215,236,241)"))
        this.renderer.setSize(window.innerWidth * 0.8 , window.innerHeight * 0.8)

        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
        this.camera.position.set(0, 10, 20);   

        this.scene = new THREE.Scene();
        this.addPlane();
        this.addHemisphereLight();
        this.addDirectionalLight();
        this.addOBJ();

        this.controls = new OrbitControls(this.camera, canvas);
        this.controls.target.set(0, 5, 0);
        this.controls.update();

    },
    render() {
        this.controls.update();

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.render);
    },
    addPlane() {
        const planeSize = 40;

        const loader = new THREE.TextureLoader();
        const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        const repeats = planeSize / 2;
        texture.repeat.set(repeats, repeats);

        const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
        const planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.rotation.x = Math.PI * -.5;
        this.scene.add(mesh);
    },
    addHemisphereLight() {
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 1;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        this.scene.add(light);
    },
    addDirectionalLight() {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 10, 0);
        light.target.position.set(-5, 0, 0);
        this.scene.add(light);
        this.scene.add(light.target);
    },
    addOBJ() {
        const objLoader = new OBJLoader();
        const mtlLoader = new MTLLoader();
        mtlLoader.load( '/lol/kindred/kindred-the-eternal-hunters-lol.mtl', (materials) => {
            objLoader.setMaterials(materials);
            objLoader.load('/lol/kindred/kindred-the-eternal-hunters-lol.obj', (event) => {
                this.scene.add(event);
            }); 
        }); 
    }
  }
}
</script>
<style>
#kindred {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>