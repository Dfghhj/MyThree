<template>
  <div id="text">
    <canvas id="text-canvas"/>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeDimensionalText',
  data() {
    return{
      scene: null,
      camera:null,
      renderer:null,
      objects: [],
      spread: 15
    }
  },
  mounted() {
    this.init()
    this.render()
  },
  methods: {
    init() {
      const canvas = document.getElementById('text-canvas')
      this.renderer = new THREE.WebGLRenderer({canvas: canvas}) 
      this.renderer.setClearColor(new THREE.Color("rgb(215,236,241)"))
      this.renderer.setSize(window.innerWidth * 0.8 , window.innerHeight * 0.8)

      this.camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 0.1, 1000);
      this.camera.position.z = 50;

      this.scene = new THREE.Scene()

      const light1 = new THREE.DirectionalLight( 0xFFFFFF, 1)
      light1.position.set(-1, 2, 4)
      this.scene.add(light1)
      const light2 = new THREE.DirectionalLight( 0xFFFFFF, 1)
      light2.position.set(1, -2, -4)
      this.scene.add(light2)

      const loader = new THREE.FontLoader();
      loader.load('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new THREE.TextBufferGeometry('Hello world', {
          font: font,
          size: 3.0,
          height: .2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.15,
          bevelSize: .3,
          bevelSegments: 5,
        });

        this.addSolidGeometry(-.5, 0, geometry);

        const mesh = new THREE.Mesh(geometry, this.createMaterial());
        geometry.computeBoundingBox();
        //使其旋转中心位于对象的中心
        geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

        const parent = new THREE.Object3D();
        parent.add(mesh);

        this.addObject(.5, 0, parent);
      })
    },
    addObject(x, y, obj) {
      obj.position.x = x * this.spread;
      obj.position.y = y * this.spread;

      this.scene.add(obj);
      this.objects.push(obj);
    },
    createMaterial() {
      const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
      });
      material.color.setHSL(Math.random(), 1, .5);
      return material;
    },
    addSolidGeometry(x, y, geometry) {
      const mesh = new THREE.Mesh(geometry, this.createMaterial());
      this.addObject(x, y, mesh);
    },
    render(time) {
      time *= 0.001;

      this.objects.forEach((obj, ndx) => {
        const speed = .5 + ndx * .05;
        const rot = time * speed;
        obj.rotation.x = rot;
        obj.rotation.y = rot;
      });

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(this.render);
    }
  }
}
</script>
<style>
#text {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>