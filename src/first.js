import * as THREE from '../node_modules/three/build/three.module.js';
// import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { PointerLockControls } from '../node_modules/three/examples/jsm/controls/PointerLockControls.js';
import * as TWEEN from '../node_modules/tween.js/src/Tween.js';

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

// 카메라 시야 설정
camera.position.z = 0; // 카메라를 멀리서 설정
camera.fov = 90; // 시야각을 조절 (값을 늘리거나 줄이면 시야가 변경됩니다)
camera.updateProjectionMatrix(); // 시야각 설정을 업데이트

// 카메라가 어디를 보는지 설정
camera.lookAt(0, 0, 0); // 카메라가 (0, 0, 0)을 향하도록 설정

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  antialias: false,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// 반응형
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/*

 정육면체 방

*/

// 큐브 맵 이미지 로드
const cubeMapTexture = new THREE.CubeTextureLoader()
  .setPath('static/first/') // 큐브 맵 이미지 파일이 저장된 폴더 경로
  .load([
    'wall.jpg', 'wall.jpg',
    'top.jpg', 'gray.png',
    'wall.jpg', 'wall.jpg'
  ]);

cubeMapTexture.minFilter = THREE.LinearFilter;

scene.background = cubeMapTexture;


/*

 액자

*/

// 벽에 액자 이미지 로드
const frameTexture1 = new THREE.TextureLoader().load('static/first/homeFrame.png'); // left
const frameTexture2 = new THREE.TextureLoader().load('static/first/example.jpg'); // back
const frameTexture3 = new THREE.TextureLoader().load('static/first/example2.jpg'); // front
const frameTexture4 = new THREE.TextureLoader().load('static/first/game.jpg'); // right
const frameTexture5 = new THREE.TextureLoader().load('static/first/stars.jpg'); // top

const material1 = new THREE.MeshBasicMaterial({ map: frameTexture1 }); // front
const material2 = new THREE.MeshBasicMaterial({ map: frameTexture2 }); // back
const material3 = new THREE.MeshBasicMaterial({ map: frameTexture3 }); // left
const material4 = new THREE.MeshBasicMaterial({ map: frameTexture4 }); // right
const material5 = new THREE.MeshBasicMaterial({ map: frameTexture5 }); // top

const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.2);
const topGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.75);

const wall1 = new THREE.Mesh(geometry,material1);
const wall2 = new THREE.Mesh(geometry, material2); 
const wall3 = new THREE.Mesh(geometry, material3);
const wall4 = new THREE.Mesh(geometry, material4);
const wall5 = new THREE.Mesh(topGeometry, material5);

wall1.position.set(0, 0, -1);
wall2.position.set(0, 0, 1);
wall3.position.set(-1, 0, 0);
wall3.rotation.y = Math.PI / 2;
wall4.position.set(1, 0, 0);
wall4.rotation.y = Math.PI / 2;
wall5.position.set(0, 2, 0);

scene.add(wall1, wall2, wall3, wall4, wall5);

/*
  Raycaster
*/

// Raycaster 생성
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

document.addEventListener('click', onDocumentClick, false);

// 클릭 이벤트 핸들러
function onDocumentClick(event) {
  event.preventDefault();

  // 마우스 위치 계산
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  // Raycaster로 객체 선택
  raycaster.setFromCamera(mouse, camera);

  var intersectUni = raycaster.intersectObject(wall5); // top
  var intersectHome = raycaster.intersectObject(wall1); // front
  var intersectGame = raycaster.intersectObject(wall4); // right

  // 우주 클릭
  if (intersectUni.length > 0) {
    clickUniverse();
  }

  // 홈액자 클릭
  if (intersectHome.length > 0) {
    clickHome();
  }

  // 게임액자 클릭
  if (intersectGame.length > 0) {
    clickGame();
  }

}

/*
  우주 클릭시 애니메이션 효과
*/

function clickUniverse() {

  var scaleUp = 10;
  var animationDuration = 1000; // 애니메이션 지속 시간 (밀리초)

  var startTime = null;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    var progress = (currentTime - startTime) / animationDuration;

    if (progress < 1) {
      wall5.scale.set(
        scaleUp * progress,
        scaleUp * progress,
        scaleUp * progress
      );

      requestAnimationFrame(animate);
    } else {
      coverScreenWithOverlay();
    }

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);

}

function coverScreenWithOverlay() {
  const overlayGeometry = new THREE.PlaneGeometry(2, 2);
  const overlayMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000, // 배경색을 원하는 색으로 설정
    // transparent: true,
    // opacity: 1, // 초기 투명도
  });

  const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial);
  scene.add(overlay);

  var startTime = null;
  var animationDuration = 0; // 애니메이션 지속 시간 (밀리초) = 즉시 실행
  var initialOpacity = overlayMaterial.opacity;
  var targetOpacity = 1;

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    var progress = (currentTime - startTime) / animationDuration;

    if (progress < 1) {
      overlayMaterial.opacity = initialOpacity + (targetOpacity - initialOpacity) * progress;
      requestAnimationFrame(animate);
    } else {
      window.location.href = '/universe.html';
    }

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}

/*
  홈액자 클릭시 이동
*/

function clickHome() {
  window.location.href = '/';
}


/*
  게임액자 클릭시 이동
*/

function clickGame() {
  window.location.href = '/game.html';
}


// 애니메이션
const animate = () => {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);

};

animate();






/*

 마우스 이벤트

*/

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

let prevMouseX = 0;
let prevMouseY = 0;

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = mouseX - prevMouseX;
    const deltaY = mouseY - prevMouseY;

    // 수평 회전(좌우 이동)
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      camera.rotation.y -= deltaX * 0.01;
      // 수평 회전 각도 제한 (360도)
      camera.rotation.y = (camera.rotation.y + Math.PI * 2) % (Math.PI * 2);
    } else { // 상하 이동
      camera.rotation.x -= deltaY * 0.01;
      // 수직 회전 각도 제한 (300도)
      camera.rotation.x = Math.max(-Math.PI * 0.6, Math.min(Math.PI * 0.6, camera.rotation.x));
    }

    prevMouseX = mouseX;
    prevMouseY = mouseY;
  }
});

document.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    isDragging = true;
    prevMouseX = event.clientX;
    prevMouseY = event.clientY;
  }
});

document.addEventListener("mouseup", (event) => {
  if (event.button === 0) {
    isDragging = false;
  }
});