import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { PointerLockControls } from '../node_modules/three/examples/jsm/controls/PointerLockControls.js';
import * as TWEEN from '../node_modules/tween.js/src/Tween.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


/*
    초기 세팅
*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer();

// 클릭 이벤트를 감지할 DOM 요소를 선택합니다.
const domElement = renderer.domElement;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


/*
    파노라마 배경
*/

const textureLoader = new THREE.TextureLoader();
const panoramaTexture = textureLoader.load('static/game2/ho1.jpg'); // 패노라마 이미지 경로
panoramaTexture.minFilter = THREE.LinearFilter; 

const geometry = new THREE.SphereGeometry(50, 60, 40);
const material = new THREE.MeshBasicMaterial({ map: panoramaTexture, side: THREE.DoubleSide });
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 0.1;


// OrbitControls 설정
const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = Math.PI / 6; // 원하는 최소 경사 각도로 설정
controls.minDistance = 3; // 최소 거리를 3 미터로 설정


/*
    조명 생성
*/

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 주변 조명
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // 태양 빛처럼 햇빛
directionalLight.position.set(1, 5, 1);
directionalLight.castShadow = true; // 그림자 투사 활성화
scene.add(directionalLight);

// 렌더러 설정 (그림자 활성화)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;












/*
    애니메이션
*/

const animate = () => {


    controls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

};

animate();





/*
    반응형
*/

function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
  
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize(newWidth, newHeight);
}
  
window.addEventListener('resize', onWindowResize);