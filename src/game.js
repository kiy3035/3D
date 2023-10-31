import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { PointerLockControls } from '../node_modules/three/examples/jsm/controls/PointerLockControls.js';
import * as TWEEN from '../node_modules/tween.js/src/Tween.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


// Three.js 설정
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// 바닥
const backgroundColor = new THREE.Color(0x8B4513);
scene.background = backgroundColor;


const loader = new GLTFLoader();
// GLTF 모델 파일 경로 설정
const modelPath = 'static/first/wood_table_001_4k.gltf';
loader.load(modelPath, (gltf) => {
    // 모델이 로드될 때 호출되는 콜백 함수
  
    // 로드된 모델은 gltf.scene에 있습니다.
    const model = gltf.scene;
  
    // 원하는 조작 및 추가 설정을 수행하고 모델을 Three.js 장면에 추가
    scene.add(model);
  }, undefined, (error) => {
    // 로딩 중 또는 로딩 실패 시 호출되는 콜백 함수
    console.error('GLTF 모델 로딩 중 오류 발생:', error);
  });


camera.position.set(0, 8, 0); // 카메라의 초기 위치를 (0, 10, 0)으로 설정 (x, y, z 좌표)
camera.lookAt(0, 0, 0); // 카메라가 (0, 0, 0)을 향하도록 설정

function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
  
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize(newWidth, newHeight);
  }
  
window.addEventListener('resize', onWindowResize);

// 무작위 위치에 10개의 작은 구체 생성
const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('static/first/1.jpg');

for (let i = 0; i < 10; i++) {
  const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // 무작위 위치 설정
  sphere.position.x = (Math.random() - 0.5) * 10; // x 좌표를 무작위로 설정
  sphere.position.y = Math.random() * 1.2 + 0.5; // 높이를 랜덤으로 설정 (바닥 위에 랜덤 높이로 생성)
  sphere.position.z = (Math.random() - 0.5) * 10; // z 좌표를 무작위로 설정
  sphere.castShadow = true; // 구체에 그림자가 투사되도록 설정
  scene.add(sphere);
}

// 카메라 위치 설정
camera.position.z = 5;

// OrbitControls 설정
const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = Math.PI / 6; // 원하는 최소 경사 각도로 설정
controls.minDistance = 3; // 최소 거리를 1 미터로 설정 (원하는 값으로 조절)



// 평면 생성 (바닥 대신 사용)
// const planeGeometry = new THREE.PlaneGeometry(10, 10);
// const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI / 2; // 바닥으로 배치
// plane.receiveShadow = true; // 그림자를 받도록 설정
// scene.add(plane);


// 이미지 텍스처 로드
const textureLoader2 = new THREE.TextureLoader();
const floorTexture = textureLoader2.load('static/first/soil.jpg');

// 평면 생성
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({
  map: floorTexture,  // 이미지 텍스처를 할당
  side: THREE.DoubleSide,
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // 바닥으로 배치
floor.receiveShadow = true; // 그림자를 받도록 설정
scene.add(floor);






// 조명 생성
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 주변 조명
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 태양 빛처럼 햇빛
directionalLight.position.set(1, 5, 1);
directionalLight.castShadow = true; // 그림자 투사 활성화
scene.add(directionalLight);

// 렌더러 설정 (그림자 활성화)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// 렌더링 함수
const animate = () => {
  requestAnimationFrame(animate);

   // OrbitControls 업데이트
   controls.update();

  // 각 구체를 회전
  scene.children.forEach((object) => {
    if (object instanceof THREE.Mesh && object !== floor) {
      object.rotation.x += 0.005;
      object.rotation.y += 0.005;
    }
  });

  
  renderer.render(scene, camera);
};

animate();