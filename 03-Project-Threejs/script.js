import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({canvas:document.querySelector('canvas')})
const size = {
    width:800,
    height:600
}
renderer.setSize(size.width,size.height)

const group = new THREE.Group();
scene.add(group);

// Cube
const cubeA = new THREE.Mesh(
    new THREE.BoxGeometry(3,2,2),
    new THREE.MeshBasicMaterial({color:0xff0000})
)

group.add(cubeA);

renderer.render(scene,camera);

// Time
let time = Date.now();

// Animation

const animate = () => {

    // All System are same Animaiton by using time factgor
    const currentTime = Date.now()
    const datltaTime = currentTime - time;
    time = currentTime;
    

    // console.log("animate");
    // cubeA.position.x += 0.01;
    // cubeA.position.y += 0.01;
    // cubeA.position.z += 0.01;
    // cubeA.rotation.x += 0.002 * datltaTime;
    cubeA.rotation.y += 0.002 * datltaTime;
    // cubeA.rotation.z += 0.01;
//    cubeA.scale.x += 0.01;
//    cubeA.scale.y += 0.01;
// cubeA.scale.z += 0.01;
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate);
}

animate()