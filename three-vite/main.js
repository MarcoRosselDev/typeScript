import './style.css';
import * as THREE from 'three';

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();
//console.log(loadre);

// add light
const light = new THREE.AmbientLight( 0x404040 );

loader.load('path/tested.glb', function (gltf) {
    scene.add(light)
    scene.add(gltf.scene);
    renderer.render(scene, camera)
}), undefined, function (error) {
    console.error(error)
}