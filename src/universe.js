import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { WEBGL } from './webgl'
// import { DragControls } from 'three/examples/jsm/controls/DragControls.js'

const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  80,
  (sizes.width / sizes.height) ,
  0.5,
  100
);

camera.position.z = 2.2;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  antialias: false,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color("#000000"), 1);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {

  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 지구 모양
const earthTexture = new THREE.TextureLoader().load('static/backgroundimages/earth.jpg');
const earthGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({
    map: earthTexture,
    side: THREE.DoubleSide
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

// 화성 모양
const marsTexture = new THREE.TextureLoader().load('static/backgroundimages/mars.jpg');
const marsGeometry = new THREE.SphereGeometry(0.1, 64, 64 , -0.9, Math.PI * 1.35);

const marsMaterial = new THREE.MeshBasicMaterial({
    map: marsTexture,
    side: THREE.DoubleSide, // 양면을 보이도록 설정

});

const mars = new THREE.Mesh(marsGeometry, marsMaterial);

// 화성 위치
const marsPosition = new THREE.Vector3(1.5, 0.9, 0);

mars.position.copy(marsPosition);
scene.add(mars);

// particle
const particlesGeometry = new THREE.BufferGeometry();
const loader = new THREE.TextureLoader();
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.height = 100;
canvas.width = 100;
ctx.fillStyle = "#fff";
ctx.beginPath(); // 도형 그리기 전 새로운 경로 시작. 경로 = 도형을 그리는 명령들의 연속
ctx.arc(50, 50, 25, 0, 2 * Math.PI); // x축, y축, 원의 반지름, 원 그리는 공식
ctx.fill(); // 현재 경로로 정의된 도형을 채움

let img = canvas.toDataURL("image/png"); // <canvas> 요소의 그림을 데이터 URL로 변환
const star = loader.load(img);
const particlesmaterial = new THREE.PointsMaterial({
  size: 0.01,
  map: star,
  transparent: true,
});

const particlesCnt = 8000; // 별 개수
const posArray = new Float32Array(particlesCnt * 3);

// 초기위치 무작위로 설정
for (let i = 0; i < particlesCnt * 3; i++) { 
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
}
particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);

const particlesMesh = new THREE.Points(particlesGeometry, particlesmaterial);
scene.add(particlesMesh);


// 클릭 이벤트 처리 함수
function onStarClick(event) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    // 마우스 클릭 위치로부터 Raycaster 생성
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
  
    // 별들에 Raycaster를 적용하여 교차(intersect)하는 별을 찾음
    const intersects = raycaster.intersectObject(particlesMesh);
  
    if (intersects.length > 0) {
      const intersectedStar = intersects[0];
      console.log('클릭한 별의 위치:', intersectedStar.point);
    }
  }
  
// 클릭 이벤트 리스너 추가
document.addEventListener('click', onStarClick);

  
// 마우스 이동
document.addEventListener("mousemove", animateParticles);

let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
  mouseY = event.clientY;
  mouseX = event.clientX;
}

// orbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 10; // 적절한 최대 거리 설정

// 마우스 드래그로 뷰 회전을 활성화
controls.enableDamping = true; // 부드러운 카메라 이동 활성화
controls.dampingFactor = 0.05;


// animate
const clock = new THREE.Clock(); // 프레임 간 경과된 시간 추적

const animate = () => {
  window.requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime(); // 초 단위로 경과된 시간 나타냄

  // 회전 속도 설정
  const rotationSpeed = 0.01; // 원하는 회전 속도로 조절

  earth.rotation.y = 0.5 * elapsedTime; // 지구 회전
  mars.rotation.z = 0.5 * elapsedTime; // 화성 회전

  particlesMesh.rotation.y = -1 * (elapsedTime * 0.1);

  // 마우스 회전
  if (mouseX > 0) {
    particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
    particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
  }

  controls.update();

  renderer.render(scene, camera);
};

animate();