import './style.css';
import * as THREE from 'three';

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(0,0,0);

const scene = new THREE.Scene();

//  Lo siguiente que haremos sera definir un material.
//  Para las lineas tenemos que usar LineBasicMaterial o LineDashedMaterial.

//  create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

//  Despues del material necesitamos una geometria con algunos vertices:

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(10, 10, 10));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

/* Tenga en cuenta que las lineas se dibujan entre cada par de vertices consecutivos,
pero no entre el primero y el ultimo (la linea no esta cerrada).

Ahora que tenemos puntos para dos lienas y un material, podemos juntarlos para formar una linea.
*/

const line = new THREE.Line(geometry, material);

// Todo lo que queda es agregarlo a la escena y llamar a render.

scene.add(line);
renderer.render(scene, camera)