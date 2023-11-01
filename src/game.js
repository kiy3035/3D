import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { PointerLockControls } from '../node_modules/three/examples/jsm/controls/PointerLockControls.js';
import * as TWEEN from '../node_modules/tween.js/src/Tween.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


/*
    초기 세팅
*/
let trollPrevPosition = { x : 40, y : 0, z : 40};
console.log(trollPrevPosition)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// 배경
const backgroundColor = new THREE.Color(0xDEB887);
scene.background = backgroundColor;


camera.position.set(0, 120, 0); // 카메라 초기 위치
camera.lookAt(0, 0, 0);


// OrbitControls 설정
const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = Math.PI / 6; // 원하는 최소 경사 각도로 설정
controls.minDistance = 3; // 최소 거리를 3 미터로 설정


/*
    말판 생성
*/

let troll;

const loader = new GLTFLoader();

// GLTF 모델 파일 경로 설정
const modelPath = 'static/first/Troll.gltf';

// 모델 크기를 조절할 비율 설정 (예: 0.5로 설정하면 원래 크기의 반으로 줄어듭니다)
const scaleRatio = 0.05;

loader.load(modelPath, (gltf) => {

    troll = gltf.scene;

    troll.scale.set(scaleRatio, scaleRatio, scaleRatio);
  
    troll.rotateY(Math.PI);

    troll.position.set(40, 0, 40);

    scene.add(troll);

}, undefined, (error) => {
    console.error('GLTF 모델 로딩 중 오류 발생:', error);
});



/*
    윷판 생성
*/

const textureLoader2 = new THREE.TextureLoader();
const floorTexture = textureLoader2.load('static/first/yutBoard.jpg');

// 평면 생성
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshStandardMaterial({
  map: floorTexture,
  side: THREE.DoubleSide,
});

const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2; // 바닥으로 배치
floor.receiveShadow = true; // 그림자를 받도록 설정
scene.add(floor);



/*
    윷 생성
*/

const modelPath2 = 'static/first/diceFBX.gltf';

// 모델 크기를 조절할 비율 설정 (예: 0.5로 설정하면 원래 크기의 반으로 줄어듭니다)
const scaleRatio2 = 10;

loader.load(modelPath2, (gltf) => {

    const dice = gltf.scene;

    dice.scale.set(scaleRatio2, scaleRatio2, scaleRatio2);
  
    dice.rotateY(Math.PI);

    dice.position.set(0, 20, 0);

    scene.add(dice);

    // 클릭 이벤트
    function onClick(event) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(dice, true);

        if (intersects.length > 0) {
            throwDice(dice);
        }
    }

        // 클릭 이벤트를 감지할 DOM 요소를 선택합니다.
        const domElement = renderer.domElement;

        // 클릭 이벤트를 등록합니다.
        domElement.addEventListener('click', onClick, false);

}, undefined, (error) => {
    console.error('GLTF 모델 로딩 중 오류 발생:', error);
});

 
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
    코너 생성
*/


// 코너1
let corner1;
let corner1x;
let corner1y;
let corner1z;

// GLTF 모델 파일 경로 설정
const cornerPath = 'static/first/Sandbox.glb';

// 모델 크기를 조절할 비율 설정
const cornerScale = 10;

loader.load(cornerPath, (gltf) => {

    corner1 = gltf.scene;

    corner1.scale.set(cornerScale, cornerScale, cornerScale);
  
    corner1.rotateY(Math.PI);

    corner1.position.set(50, 30, -50);

    scene.add(corner1);

    corner1x = corner1.position.x;
    corner1y = corner1.position.y;
    corner1z = corner1.position.z;

    // 모델 로드가 완료되면 animate 함수를 호출
    animate();

})



// 코너2
let corner2;
let corner2x;
let corner2y;
let corner2z;

loader.load(cornerPath, (gltf) => {

    corner2 = gltf.scene;

    corner2.scale.set(cornerScale, cornerScale, cornerScale);
  
    corner2.rotateY(Math.PI);

    corner2.position.set(-50, 30, -50);

    scene.add(corner2);

    corner2x = corner1.position.x;
    corner2y = corner1.position.y;
    corner2z = corner1.position.z;

    animate();

})

// 코너3
let corner3;
let corner3x;
let corner3y;
let corner3z;

loader.load(cornerPath, (gltf) => {

    corner3 = gltf.scene;

    corner3.scale.set(cornerScale, cornerScale, cornerScale);
  
    corner3.rotateY(Math.PI);

    corner3.position.set(-50, 30, 50);

    scene.add(corner3);

    corner3x = corner1.position.x;
    corner3y = corner1.position.y;
    corner3z = corner1.position.z;

    animate();

})


/*
    애니메이션
*/

const animate = () => {

    const corners = [corner1, corner2, corner3];

    corners.forEach((corner) => {
        if (corner) {
            corner.rotation.y += 0.01; // 각 프레임마다 0.01 라디안만큼 y축으로 회전
        }
    });

    controls.update();
    
    renderer.render(scene, camera);

    requestAnimationFrame(animate);

};

animate();


/*
    주사위 관련 함수
*/

// 던지는 애니메이션 함수
function throwDice(dice) {
    
    const animationDuration = 1000; // 애니메이션 지속 시간 (밀리초)
    const targetRotation = Math.PI * 2 * 5; // 목표 회전값 (5회전)

    let startTime = null;

    function animate(time) {
        if (!startTime) {
            startTime = time;
        }

        const progress = (time - startTime) / animationDuration;
        const rotation = targetRotation * progress;

        // 주사위 회전
        dice.rotation.x = rotation;
        dice.rotation.y = rotation;
        dice.rotation.z = rotation;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);

    // 던지는 중간에 올라가는 높이 설정
    const position = new THREE.Vector3();
    position.copy(dice.position);
    position.y += 20;

    function animatePosition() {
        let positionStartTime = null;

        function positionAnimate(time) {
            if (!positionStartTime) {
                positionStartTime = time;
            }

            const positionProgress = (time - positionStartTime) / (animationDuration / 2);
            const positionY = position.y + (20 * positionProgress);

            dice.position.y = positionY;

            if (positionProgress < 1) {
                requestAnimationFrame(positionAnimate);
            } else {
                returnToInitialPosition(dice);
            }
        }

        requestAnimationFrame(positionAnimate);
    }

    // 중간 위치로 이동
    animatePosition();
}


// 주사위를 초기 위치로 돌려주는 애니메이션 함수
function returnToInitialPosition(dice) {

    const animationDuration = 1000; // 애니메이션 지속 시간 (밀리초)
    const startPosition = dice.position.clone();
    const targetPosition = new THREE.Vector3(0, 20, 0); // 초기 위치
    const randomIndex = Math.floor(Math.random() * 6) + 1; // 1~6 랜덤 숫자

    let startTime = null;
    let positionProgress = 0;

    function positionAnimate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / animationDuration;
        positionProgress = Math.min(progress, 1);
        dice.position.lerpVectors(startPosition, targetPosition, positionProgress);

        if (positionProgress < 1) {
            requestAnimationFrame(positionAnimate);
        } else {
            console.log(randomIndex , "!!")
            switch (randomIndex) {
                case 1:
                    dice.rotation.set(Math.PI / 2, 0, 0);
                    moveTroll(1);
                    break;
                case 2:
                    dice.rotation.set(0, 0, 0);
                    moveTroll(2);
                    break;
                case 3:
                    dice.rotation.set(0, 0, Math.PI / 2);
                    moveTroll(3);
                    break;
                case 4:
                    dice.rotation.set(Math.PI, 0, 0);
                    moveTroll(4);
                    break;
                case 5:
                    dice.rotation.set(0, 0, -Math.PI / 2);
                    moveTroll(5);
                    break;
                case 6:
                    dice.rotation.set(-Math.PI / 2, 0, 0);
                    moveTroll(6);
                    break;
                default:
                    break;
            }
            
        }
    }

    requestAnimationFrame(positionAnimate);
}


/*
    말판 이동
*/

/*  
    트롤  : (40, 0, 40)
    코너1 : (50, 30, -50)
    코너2 : (-50, 30, -50)
    코너3 : (-50, 30, 50)
*/

function moveTroll(number){

    // console.log('원래 위치', trollPrevPosition);

    let trollPosition = troll.position; // 이동 후 위치
    let move = 15; // 이동 간격
    let minus; // 전에 값 - 지금 값

    // console.log('이동 후 위치', trollPosition);
    if(trollPosition.x == 40 && trollPosition.z >= -20){
        console.log("코너1 이전")
        trollPosition.z -= move * number; // 이동
    }

    // 코너1 멈췄을 때
    if(trollPosition.x == 40 && (trollPosition.z <= -35 && trollPosition.z > -50)){
        console.log("코너1 멈췄을때")
        troll.rotateY(Math.PI / 1.5); // 45도 회전
    }

    // 코너1 넘어갔을 때
    if(trollPosition.x == 40 && trollPosition.z <= -40){
        console.log("코너1 넘어갔을 때")
        troll.rotateY(Math.PI / 2); // 좌회전
        // minus = Math.abs(trollPrevPosition.z - trollPosition.z) // 절댓값 계산
        // console.log("마이너스" , minus);
        // console.log(trollPrevPosition.x );
        trollPosition.z = -40
        trollPosition.x = trollPosition.x - ( number - (5 - number) * move);
    }

    // 코너2 멈췄을 때
    // else if(trollPosition.x == 40 && (trollPosition.z <= -35 && trollPosition.z > -50)){
        
    // }
    // 코너2 넘어갔을 때

    if(trollPosition.z == -40 && trollPosition.x < -35){
        console.log("코너2 넘어갔을 때")
        troll.rotateY(Math.PI / 2); // 좌회전
        // minus = Math.abs(trollPrevPosition.z - trollPosition.z) // 절댓값 계산
        // console.log("마이너스" , minus);
        // console.log(trollPrevPosition.x );
        trollPosition.x = -40
        trollPosition.z = trollPosition.z + ((number - 5) * move);
    }


    console.log('지금 나의 위치', trollPosition);






        // 전에 값 저장하기 위해서
        trollPrevPosition.x = trollPosition.x;
        trollPrevPosition.y = trollPosition.y;
        trollPrevPosition.z = trollPosition.z;
}







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