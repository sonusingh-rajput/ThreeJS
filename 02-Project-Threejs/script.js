import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

// scene

const scene = new THREE.Scene();

// Object

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'lightgreen'});
const mesh = new THREE.Mesh(geometry,material);

// Position 
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 0.6;
// OR
mesh.position.set(0.7,-0.6,0.6)

// Scale
// mesh.scale.x =2;
// mesh.scale.y =2;
// mesh.scale.z =2;
mesh.scale.set(2,0.5,0.5)

// Rotation
mesh.rotation.reorder('ZXY')
mesh.rotation.x =Math.PI *0.25
mesh.rotation.y =Math.PI * 0.25
// mesh.rotation.z =Math.PI

scene.add(mesh);
console.log(mesh.position.length())


// Sizes

const size = {
    width:1020,
    height:800
}

// Axis Helper
const axisHelper = new THREE.AxesHelper(1.5);
scene.add(axisHelper)

// Camera

const camera = new THREE.PerspectiveCamera(50,size.width/size.height);
// Positon 
camera.position.z = 6;
// camera.position.set(-2,1,9)

// lookAt
// camera.lookAt(new THREE.Vector3(0,0,0))
camera.lookAt(mesh.position);

scene.add(camera);
console.log(mesh.position.distanceTo(camera.position))

//  render
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(size.width,size.height);
renderer.render(scene,camera)