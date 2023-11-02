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
// controls.autoRotate = true; // 자동으로 회전하도록 설정
controls.autoRotateSpeed = 1.0; // 회전 속도 설정


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


// 자식 구체
const textureLoader = new THREE.TextureLoader();
const panoramaTexture = textureLoader.load('static/homeIndex/orora.jpg'); // 파노라마 이미지 경로
panoramaTexture.minFilter = THREE.LinearFilter; // 화질 좋게
const geometry = new THREE.SphereGeometry(400, 60, 40);
const material = new THREE.MeshBasicMaterial({ map: panoramaTexture, side: THREE.DoubleSide });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(100, 100, -100)
scene.add(sphere);
panoramaGroup.add(sphere);

// 자식 구체2
const textureLoader2 = new THREE.TextureLoader();
const panoramaTexture2 = textureLoader2.load('static/homeIndex/warehouse.jpg'); // 파노라마 이미지 경로
panoramaTexture2.minFilter = THREE.LinearFilter; // 화질 좋게
const geometry2 = new THREE.SphereGeometry(150, 30, 20);
const material2 = new THREE.MeshBasicMaterial({ map: panoramaTexture2, side: THREE.DoubleSide });
const sphere2 = new THREE.Mesh(geometry2, material2);
sphere2.position.set(-700, 300, -100)
scene.add(sphere2);
panoramaGroup.add(sphere2);

// 자식 구체3
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
camera.position.z = 900





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
            createBallon();
        }
    }

    // 더블클릭 이벤트
    function onSnowmanDblClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(snowman, true);

        if (intersects.length > 0) {
            // 바깥으로 zoomout
            camera.position.z = 900;
        }
    }

        domElement.addEventListener('click', onSnowmanClick, false);
        domElement.addEventListener('dblclick', onSnowmanDblClick, false);

        animate();

})



// 산타
let santa;

// GLTF 모델 파일 경로 설정
const santaPath = 'static/homeIndex/ChocoSantaClaus06_fbx/ChocoSantaClaus06.gltf';

// 모델 크기를 조절할 비율 설정
const santaScale = 200;

loader.load(santaPath, (gltf) => {

    santa = gltf.scene;

    santa.scale.set(santaScale, santaScale, santaScale);
  
    santa.rotateY(Math.PI);

    santa.position.set(-50, 0, -100);

    scene.add(santa);

    // 클릭 이벤트
    function onSnowmanClick(event) {

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(santa, true);

        if (intersects.length > 0) {
            alert("로그인 페이지 준비중");
        }
    }

        domElement.addEventListener('click', onSnowmanClick, false);

        animate();

})

// 눈사람3
// let snowman3;

// loader.load(snowmanPath, (gltf) => {

//     snowman3 = gltf.scene;

//     snowman3.scale.set(snowmanScale, snowmanScale, snowmanScale);
  
//     snowman3.rotateY(Math.PI);

//     snowman3.position.set(-50, 30, 50);

//     scene.add(snowman3);

//     snowman3.addEventListener('click', () => {
//         onSnowmanClick(snowman3);
//     });

//     animate();

// })


/*
    오로라행성 클릭
*/

window.addEventListener('click', clickOrora, false);

function clickOrora(event) {

    // 마우스 클릭 위치를 계산합니다.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycaster로 클릭 위치에서 레이를 쏩니다.
    raycaster.setFromCamera(mouse, camera);

    // 카메라의 위치
    const cameraPosition = camera.position.clone();

    const intersects = raycaster.intersectObject(sphere)
    
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

        }
    }
}



/*
    창고행성 클릭
*/

window.addEventListener('click', clickWarehouse, false);

function clickWarehouse(event) {

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
                window.location.href = '/fourContainer.html';
            }
        }
    
}


/*
    지구행성 클릭
*/

window.addEventListener('click', clickEarth, false);

function clickEarth(event) {

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

function onMouseClick() {
    closeBalloon();
}

// 아래의 동작시 말풍선 닫힘
domElement.addEventListener('click', onMouseClick, false);
domElement.addEventListener('dblclick', onMouseClick, false);
domElement.addEventListener('mousedown', onMouseClick, false);
domElement.addEventListener('wheel', onMouseClick, false);




// 말풍선을 닫는 함수
function closeBalloon() {
    if (balloonDiv) {
        balloonDiv.style.display = 'none';
    }
}



/*
    애니메이션
*/

const animate = () => {

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