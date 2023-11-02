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
const panoramaTexture = textureLoader.load('static/game2/web2gether.jpg'); // 패노라마 이미지 경로

const geometry = new THREE.SphereGeometry(500, 60, 40);
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
    눈사람 생성
*/


// 눈사람1
let snowman1;
const balloonDiv = document.getElementById('balloon-text');
balloonDiv.style.display = 'none';
let balloonPosition = new THREE.Vector3();

// GLTF 모델 파일 경로 설정
const snowmanPath = 'static/game2/snowman_beginner.gltf';

// 모델 크기를 조절할 비율 설정
const snowmanScale = 0.1;

const loader = new GLTFLoader();

loader.load(snowmanPath, (gltf) => {

    snowman1 = gltf.scene;

    snowman1.scale.set(snowmanScale, snowmanScale, snowmanScale);
  
    snowman1.rotateY(Math.PI);

    snowman1.position.set(50, 30, -50);

    scene.add(snowman1);

    // 클릭 이벤트
    function onSnowmanClick(event) {

        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(snowman1, true);

        if (intersects.length > 0) {
            createBallon();
        }
    }

        domElement.addEventListener('click', onSnowmanClick, false);

        animate();

})



// 눈사람2
let snowman2;

loader.load(snowmanPath, (gltf) => {

    snowman2 = gltf.scene;

    snowman2.scale.set(snowmanScale, snowmanScale, snowmanScale);
  
    snowman2.rotateY(Math.PI);

    snowman2.position.set(-50, 30, -50);

    scene.add(snowman2);

    snowman2.addEventListener('click', () => {
        onSnowmanClick(snowman2);
    });

    animate();

})

// 눈사람3
let snowman3;

loader.load(snowmanPath, (gltf) => {

    snowman3 = gltf.scene;

    snowman3.scale.set(snowmanScale, snowmanScale, snowmanScale);
  
    snowman3.rotateY(Math.PI);

    snowman3.position.set(-50, 30, 50);

    scene.add(snowman3);

    snowman3.addEventListener('click', () => {
        onSnowmanClick(snowman3);
    });

    animate();

})


/*
    말풍선
*/

function createBallon() {

    if (balloonDiv) {

        // 말풍선 위치 설정
        const screenPosition = balloonPosition.clone().project(camera);
        const width = window.innerWidth, height = window.innerHeight;
        const x = (screenPosition.x * 0.5 + 0.5) * width;
        const y = (1 - (screenPosition.y * 0.5 + 0.5)) * height;

        // 말풍선 업데이트
        balloonDiv.style.display = 'block';
        balloonDiv.innerText = '나는야 눈사람맨';
        balloonDiv.style.left = x + 'px';
        balloonDiv.style.top = y + 'px';

    }

}










/*
    애니메이션
*/

const animate = () => {

    if (snowman1 && balloonDiv) {
        // 눈사람 위치를 계속 추적
        snowman1.getWorldPosition(balloonPosition);
    }

    const snowmans = [snowman1, snowman2, snowman3];

    snowmans.forEach((snowman) => {
        if (snowman) {
            snowman.rotation.y += 0.01; // 각 프레임마다 0.01 라디안만큼 y축으로 회전
        }
    });

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