// import * as THREE from '../node_modules/three/src/three.js';
import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

camera.position.set(0, 0, 150);

scene.background = new THREE.Color('white');

const light = new THREE.DirectionalLight(0xffffff, 10);
scene.add(light);

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const loader = new GLTFLoader();
const modelPath = 'static/textures/ramenShop.gltf';

loader.load(modelPath, (gltf) => {
  const model = gltf.scene;
  scene.add(model);
}, undefined, (error) => {
  console.error('GLTF 모델 로딩 중 오류 발생:', error);
});
camera.position.set(0, 8, 0); // 카메라의 초기 위치를 (0, 10, 0)으로 설정 (x, y, z 좌표)
camera.lookAt(0, 0, 0); // 카메라가 (0, 0, 0)을 향하도록 설정

// 이미지 텍스처 로드
const textureLoader2 = new THREE.TextureLoader();
const floorTexture = textureLoader2.load('static/first/soil.jpg');

const animate = () => {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();