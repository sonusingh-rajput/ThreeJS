import * as THREE from 'three';
import gsap from 'gsap';
console.log(gsap)
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
// let time = Date.now();
// or
// Clock Mehord in THREE JS
// const time = new THREE.Clock();


// Animation

// Using GSAP
gsap.to(cubeA.position,{duration:2,delay:1,x:8});
gsap.to(cubeA.position,{duration:2,delay:3,x:0});

const animate = () => {

    
    // const elapseTime = time.getElapsedTime();
    // cubeA.position.y = elapseTime;
    // cubeA.position.x = Math.sin(elapseTime * 0.5);
    // cubeA.position.y = Math.cos(elapseTime);
    // camera.position.y = Math.sin(elapseTime);
    // camera.position.x = Math.sin(elapseTime);
    // camera.lookAt(group.position)
    
   
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate);
}

animate()