import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

// scene

const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
scene.add(group);
group.position.y = -1;
group.scale.y = 2;
group.rotation.x = Math.PI * 0.25;
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff0000})
)
group.add(cube1);
cube1.position.x = -2
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x00ff00})
)
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x0000ff})
)
group.add(cube3)
cube3.position.x= 2
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
// camera.lookAt(mesh.position);

// scene.add(camera);
// console.log(mesh.position.distanceTo(camera.position))

//  render
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

renderer.setSize(size.width,size.height);
renderer.render(scene,camera)