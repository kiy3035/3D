import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { PointerLockControls } from '../node_modules/three/examples/jsm/controls/PointerLockControls.js';
// import * as TWEEN from 'tween.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


/*
    초기 세팅
*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// 클릭 이벤트를 감지할 DOM 요소를 선택합니다.
const domElement = renderer.domElement;




renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// OrbitControls 설정
const controls = new OrbitControls(camera, renderer.domElement);
controls.minPolarAngle = Math.PI / 6; // 원하는 최소 경사 각도로 설정
controls.minDistance = 3; // 최소 거리를 3 미터로 설정
// controls.maxDistance = 10000; // 더 큰 값으로 설정하여 더 크게 확대
controls.enablePan = false; // 화면 드래그로 이동 비활성화
controls.enableZoom = true; // 마우스 휠로 줌 가능하게 설정
controls.autoRotate = true; // 자동으로 회전하도록 설정
controls.autoRotateSpeed = 0.5; // 회전 속도 설정


/*
    파노라마 구체 생성
*/

const panoramaGroup = new THREE.Group();
scene.add(panoramaGroup);

// 부모 구체의 텍스처 생성
const parentTexture = new THREE.TextureLoader().load('static/homeIndex/universe.jpg');
parentTexture.minFilter = THREE.LinearFilter; // 화질 좋게
const parentMaterial = new THREE.MeshBasicMaterial({ map: parentTexture, side: THREE.DoubleSide });
const parentSphere = new THREE.Mesh(new THREE.SphereGeometry(1000, 60, 40), parentMaterial);
scene.add(parentSphere);


// 자식 구체 (오로라 모양)
const textureLoader = new THREE.TextureLoader();
const panoramaTexture = textureLoader.load('static/homeIndex/orora.jpg');
panoramaTexture.minFilter = THREE.LinearFilter;
const geometry = new THREE.SphereGeometry(400, 60, 40);
const material = new THREE.MeshBasicMaterial({ map: panoramaTexture, side: THREE.DoubleSide });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(100, 100, -100)
scene.add(sphere);

panoramaGroup.add(sphere);

// 자식 구체2 (창고 모양)
const textureLoader2 = new THREE.TextureLoader();
const panoramaTexture2 = textureLoader2.load('static/homeIndex/warehouse.jpg');
panoramaTexture2.minFilter = THREE.LinearFilter;
const geometry2 = new THREE.SphereGeometry(150, 30, 20);
const material2 = new THREE.MeshBasicMaterial({ map: panoramaTexture2, side: THREE.DoubleSide });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.set(-700, 300, -100)
scene.add(sphere2);
panoramaGroup.add(sphere2);

// 자식 구체3 (지구 모양)
const textureLoader3 = new THREE.TextureLoader();
const panoramaTexture3 = textureLoader3.load('static/homeIndex/sky.jpg'); // 파노라마 이미지 경로
panoramaTexture3.minFilter = THREE.LinearFilter; // 화질 좋게
const geometry3 = new THREE.SphereGeometry(150, 30, 20);
const material3 = new THREE.MeshBasicMaterial({ map: panoramaTexture3, side: THREE.DoubleSide });
const sphere3 = new THREE.Mesh(geometry3, material3);
sphere3.position.set(-700, -300, -100);
sphere3.rotation.y = -Math.PI / 9; // 45도를 라디안으로 표현한 값

scene.add(sphere3);
panoramaGroup.add(sphere3);

// 카메라 위치 설정
// camera.position.z = 900;
camera.position.z = 4;
controls.autoRotate = false;



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
    행성 클릭
*/

// 오로라 더블클릭
window.addEventListener('dblclick', dblClickOrora, false);

function dblClickOrora(event) {

    // 마우스 클릭 위치를 계산합니다.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycaster로 클릭 위치에서 레이를 쏩니다.
    raycaster.setFromCamera(mouse, camera);

    // 카메라의 위치
    const cameraPosition = camera.position.clone();

    const intersects = raycaster.intersectObject(sphere);
    
    // 카메라가 자식 Sphere 내부로 들어왔을 때만 클릭 이벤트 처리
    if (cameraPosition.distanceTo(sphere.position) < sphere.geometry.parameters.radius) {
        // 카메라가 자식 Sphere 내부에 있는 경우
        if (intersects.length > 0) {
            return
        }
    }else if(cameraPosition.distanceTo(sphere.position) >= sphere.geometry.parameters.radius){
        // 안으로 zoomin
        if (intersects.length > 0) {
            camera.position.set(-0.5, -1, 4);
            controls.autoRotate = false; // 회전 멈춤
        }
        
    }
    
}



// 창고 더블클릭
window.addEventListener('dblclick', dblClickWarehouse, false);

function dblClickWarehouse(event) {

    // 마우스 클릭 위치를 계산합니다.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycaster로 클릭 위치에서 레이를 쏩니다.
    raycaster.setFromCamera(mouse, camera);

    // 카메라의 위치
    const cameraPosition = camera.position.clone();

    const intersects = raycaster.intersectObject(sphere2)
    
        // 카메라가 자식 Sphere 내부로 들어왔을 때만 클릭 이벤트 처리
        if (cameraPosition.distanceTo(sphere2.position) < sphere2.geometry.parameters.radius) {
            // 카메라가 자식 Sphere 내부에 있는 경우
            if (intersects.length > 0) {
                return
            }
        }else if(cameraPosition.distanceTo(sphere2.position) >= sphere2.geometry.parameters.radius){
            // 화면 이동
            if (intersects.length > 0) {
                window.location.href = 'fourContainer.html'
            }
        }
    
}



// 지구 더블클릭
window.addEventListener('dblclick', dblClickEarth, false);

function dblClickEarth(event) {

    // 마우스 클릭 위치를 계산합니다.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycaster로 클릭 위치에서 레이를 쏩니다.
    raycaster.setFromCamera(mouse, camera);

    // 카메라의 위치
    const cameraPosition = camera.position.clone();

    const intersects = raycaster.intersectObject(sphere3)
    
        // 카메라가 자식 Sphere 내부로 들어왔을 때만 클릭 이벤트 처리
        if (cameraPosition.distanceTo(sphere3.position) < sphere3.geometry.parameters.radius) {
            // 카메라가 자식 Sphere 내부에 있는 경우
            if (intersects.length > 0) {
                return
            }
        }else if(cameraPosition.distanceTo(sphere3.position) >= sphere3.geometry.parameters.radius){
            // 화면 이동
            if (intersects.length > 0) {
                window.location.href = '/universe.html';
            }
        }
    
}



/*
    gltf 애들 생성
*/


// 눈사람1
let snowman;
const balloonDiv = document.getElementById('balloon-text');
balloonDiv.style.display = 'none';
let balloonPosition = new THREE.Vector3();

// GLTF 모델 파일 경로 설정
const snowmanPath = 'static/homeIndex/snowman_beginner.gltf';

// 모델 크기를 조절할 비율 설정
const snowmanScale = 0.1;

const loader = new GLTFLoader();

loader.load(snowmanPath, (gltf) => {

    snowman = gltf.scene;

    snowman.scale.set(snowmanScale, snowmanScale, snowmanScale);
  
    snowman.rotateY(Math.PI);

    snowman.position.set(100, 0, -100);

    scene.add(snowman);

    // 클릭 이벤트
    function onSnowmanClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(snowman, true);

        if (intersects.length > 0) {
            createBalloon();
        }
    }

    // 더블클릭 이벤트
    function onSnowmanRightClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(snowman, true);

        if (intersects.length > 0) {
            // 바깥으로 zoomout
            camera.position.z = 900;
            controls.autoRotate = true; // 재회전
        }
    }

        domElement.addEventListener('click', onSnowmanClick, false);
        domElement.addEventListener('contextmenu', onSnowmanRightClick, false);

        animate(snowman);
        
})



// 산타
let santa;

const santaPath = 'static/homeIndex/ChocoSantaClaus06_fbx/ChocoSantaClaus06.gltf';

const santaScale = 200;

loader.load(santaPath, (gltf) => {

    santa = gltf.scene;

    santa.scale.set(santaScale, santaScale, santaScale);
  
    santa.rotateY(Math.PI);

    santa.position.set(-50, 0, -100);

    scene.add(santa);

    // 클릭 이벤트
    function onSantaClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(santa, true);

        if (intersects.length > 0) {
            createHologram();
        }
    }

        domElement.addEventListener('click', onSantaClick, false);

        animate(santa);

})

// 주사위
let dice;

const dicePath = 'static/homeIndex/diceMan.gltf';

const diceScale = 1;

loader.load(dicePath, (gltf) => {

    dice = gltf.scene;

    dice.scale.set(diceScale, diceScale, diceScale);
  
    dice.rotateY(Math.PI);

    dice.position.set(700, 500, -150);

    scene.add(dice);

    // 클릭 이벤트
    function ondiceDblClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(dice, true);

        if (intersects.length > 0) {
            window.location.href = 'game.html';
        }
    }

        domElement.addEventListener('dblclick', ondiceDblClick, false);

        animate(dice);

})



/*
    말풍선
*/

function createBalloon() {

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

function onMouseClick() {
    closeBalloon();
    closeHologram();
}

// 아래의 동작시 말풍선 닫힘
domElement.addEventListener('click', onMouseClick, false);
domElement.addEventListener('dblclick', onMouseClick, false);
// domElement.addEventListener('mousedown', onMouseClick, false);
// domElement.addEventListener('wheel', onMouseClick, false);




// 말풍선을 닫는 함수
function closeBalloon() {
    if (balloonDiv) {
        balloonDiv.style.display = 'none';
    }
}




/*
    홀로그램
*/

let inputContainer;
let panel;

function createHologram(){

    // 얇은 직육면체 모델 생성
    const width = 3;
    const height = 1;
    const depth = 0.2;
    const panelGeometry = new THREE.BoxGeometry(width, height, depth);
    const panelMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xFFFFE0).set(0xFFFFE0, 0.8) });
    panel = new THREE.Mesh(panelGeometry, panelMaterial);
    scene.add(panel);
    
    // HTML 입력 필드 생성 및 3D 모델 위에 배치
    inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";
    document.body.appendChild(inputContainer);

    const idInput = document.createElement("input");
    idInput.type = "text";
    idInput.placeholder = "ID";
    inputContainer.appendChild(idInput);

    const pwInput = document.createElement("input");
    pwInput.type = "password";
    pwInput.placeholder = "Password";
    inputContainer.appendChild(pwInput);

    const div = document.createElement("div");
    const btnLogin = document.createElement("button");
    btnLogin.textContent = "Login";
    btnLogin.id = "idLogin";

    // 버튼 스타일 설정
    btnLogin.style.position = "absolute";
    btnLogin.style.left = "50%";
    btnLogin.style.top = "50%";
    btnLogin.style.transform = "translate(-50%, 180%)";
    inputContainer.appendChild(div);
    inputContainer.appendChild(btnLogin);

    btnLogin.addEventListener("click", clickLogin, true);

}

// 홀로그램 제거
function closeHologram(){
    if (inputContainer) {
        inputContainer.style.display = 'none';
        scene.remove(panel);
    }
}

function clickLogin(){

    const toast = document.getElementById("toast");
    toast.style.display = "block";
    toast.style.left = "50%";
    toast.style.top = "50%";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.width = "200px";
    toast.style.height = "40px";
    toast.textContent = "로그인 성공";
    toast.style.textAlign = "center";

    // 수직 가운데 정렬
    toast.style.display = "flex";
    toast.style.justifyContent = "center";
    toast.style.alignItems = "center";

    closeHologram();

    setTimeout(() => {
        toast.style.display = "none";
    }, 1000);
}



/*
    애니메이션
*/

const animate = (val) => {

    if(snowman && balloonDiv){
        // 눈사람 위치를 계속 추적
        snowman.getWorldPosition(balloonPosition);
    }

    if(snowman){
        snowman.rotation.y += 0.01;
    }

    if(santa){
        santa.rotation.y += 0.01;
    }

    if(dice){
        dice.rotation.x += 0.003;
        dice.rotation.y += 0.003;
        dice.rotation.z += 0.003;
    }

    controls.update();

    if(panel){
        panel.position.copy(controls.target);
    }

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