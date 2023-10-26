import * as THREE from '../node_modules/three/src/three.js';

const scene = new THREE.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  80,
  sizes.width / sizes.height,
  0.5,
  100
);

camera.position.z = 1;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  antialias: false,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 큐브 맵 이미지 로드
const cubeMapTexture = new THREE.CubeTextureLoader()
  .setPath('static/textures/cubemap/') // 큐브 맵 이미지 파일이 저장된 폴더 경로
  .load([
    'elinia1.jpg', 'elinia1.jpg',
    'elinia1.jpg', 'elinia1.jpg',
    'elinia1.jpg', 'elinia1.jpg'
  ]);

scene.background = cubeMapTexture;
// 마우스 드래그 상태를 저장할 변수
let isDragging = false;

// 마우스의 이전 위치를 저장할 변수
let prevX = 0;
let prevY = 0;

// 마우스 클릭 이벤트 리스너
document.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    isDragging = true;
    prevX = event.clientX;
    prevY = event.clientY;
  }
});

// 마우스 이동 이벤트 리스너
document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const deltaX = event.clientX - prevX;
    const deltaY = event.clientY - prevY;
    
    // 마우스 이동에 따라 카메라 회전
    camera.rotation.y += deltaX * 0.01;
    camera.rotation.x += deltaY * 0.01;
    
    prevX = event.clientX;
    prevY = event.clientY;
  }
});

// 마우스 릴리스 이벤트 리스너
document.addEventListener("mouseup", (event) => {
  if (event.button === 0) {
    isDragging = false;
  }
});
let isCtrlPressed = false;


// Ctrl 키 뗌 이벤트 리스너
document.addEventListener("keyup", (event) => {
  if (event.key === "Control") {
    isCtrlPressed = false;
  }
});



// animate 함수 (이미 추가되어 있음)
const animate = () => {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
