import * as THREE from 'three'
import { WEBGL } from './webgl'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './modal'

if (WEBGL.isWebGLAvailable()) {
  var camera, scene, renderer, controls
  var plane
  var mouse, raycaster, isShiftDown = false

  var rollOverMesh, rollOverMaterial
  var cubeGeo, cubeMaterial
  var objects = []

  init()
  render()

  // setTransData, setPrevData 에서 쓰이는 전역변수
  var cube; 
  var cubeUUIDList = [];
  
  function init() {
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    camera.position.set(500, 800, 1300)
    camera.lookAt(0, 0, 0)

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf0f0f0)

    var rollOverGeo = new THREE.BoxBufferGeometry(50, 50, 50)
    rollOverMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      opacity: 0.5,
      transparent: true,
    })
    rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial)
    scene.add(rollOverMesh)

    cubeGeo = new THREE.BoxBufferGeometry(50, 50, 50)
    cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xfeb74c,
      map: new THREE.TextureLoader().load('static/textures/square.png'),
    })

    var gridHelper = new THREE.GridHelper(1000, 20)
    scene.add(gridHelper)

    raycaster = new THREE.Raycaster()
    mouse = new THREE.Vector2()

    var geometry = new THREE.PlaneBufferGeometry(1000, 1000)
    geometry.rotateX(-Math.PI / 2)

    plane = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ visible: false })
    )
    scene.add(plane)

    objects.push(plane)

    var ambientLight = new THREE.AmbientLight(0x606060)
    scene.add(ambientLight)

    var directionalLight = new THREE.DirectionalLight(0xffffff)
    directionalLight.position.set(1, 0.75, 0.5).normalize()
    scene.add(directionalLight)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    // OrbitControls 추가
    controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', render)

    // DragControls 추가
    var dragControls = new DragControls(objects, camera, renderer.domElement)
    dragControls.addEventListener('drag', function (event) {
      // 객체를 드래그 중일 때 실행되는 코드
      // 여기서 객체의 위치를 업데이트하거나 추가 작업을 수행할 수 있습니다.
    })

    document.addEventListener('mousemove', onDocumentMouseMove, false)
    document.addEventListener('mousedown', onDocumentMouseDown, false)
    document.addEventListener('keydown', onDocumentKeyDown, false)
    document.addEventListener('keyup', onDocumentKeyUp, false)
    window.addEventListener('resize', onWindowResize, false)

  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function onDocumentMouseMove(event) {
    mouse.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    )
    raycaster.setFromCamera(mouse, camera)

    var intersects = raycaster.intersectObjects(objects)

    if (intersects.length > 0) {
      var intersect = intersects[0]
      rollOverMesh.position.copy(intersect.point).add(intersect.face.normal)
      rollOverMesh.position
        .divideScalar(50)
        .floor()
        .multiplyScalar(50)
        .addScalar(25)
    }

    render()
  }

  function onDocumentMouseDown(event) {
    mouse.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    )
    raycaster.setFromCamera(mouse, camera)
    
    var intersects = raycaster.intersectObjects(objects)

    if (intersects.length > 0) {
      var intersect = intersects[0]
      
      if (isShiftDown) {
        if (intersect.object !== plane) {
          scene.remove(intersect.object)
          objects.splice(objects.indexOf(intersect.object), 1)
        }
      } else {
        var voxel = new THREE.Mesh(cubeGeo, cubeMaterial)
        voxel.position.copy(intersect.point).add(intersect.face.normal)
        voxel.position
        .divideScalar(50)
        .floor()
        .multiplyScalar(50)
        .addScalar(25)
        if (voxel.position.y < 0) {
          return; // Y 좌표가 음수일 경우 더 이상 처리하지 않고 종료
        }
        scene.add(voxel)
        objects.push(voxel)
        console.log(voxel)
      }

      render()
    }
  }

  function onDocumentKeyDown(event) {
    switch (event.keyCode) {
      case 16:
        isShiftDown = true
        break
    }
  }

  function onDocumentKeyUp(event) {
    switch (event.keyCode) {
      case 16:
        isShiftDown = false
        break
    }
  }

  function render() {
    renderer.render(scene, camera)
  }
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}

// 적용 버튼 함수
window.setTransData = function(value) {

  var value2 = value.map(str => parseInt(str)); // String -> int 변환

  var intersects = raycaster.intersectObjects(objects);
  var intersect;

  if (intersects.length > 0) {
    intersect = intersects[0]
  }

  cube = new THREE.Mesh(cubeGeo, cubeMaterial);

  cube.scale.set(value2[0], value2[2], value2[1]);
  cube.position.set(value2[3], value2[5], value2[4]);
  scene.add(cube);

  cubeUUIDList.push(cube.uuid);
  console.log(cube)
}

// 이전 버튼 함수
window.setPrevData = function() {

  if (cubeUUIDList.length > 0) {
    var lastCubeUUID = cubeUUIDList.pop();
    var cubeToRemove = scene.getObjectByProperty("uuid", lastCubeUUID);
    
    if (cubeToRemove) {
      scene.remove(cubeToRemove);
      cubeToRemove.geometry.dispose();
      cubeToRemove.material.dispose();
    }
  }

}

// 초기화 버튼 함수
window.setResetData = function() {

  for (var i = 0; i < cubeUUIDList.length; i++) {
    var cubeUUID = cubeUUIDList[i];
    var cubeToRemove = scene.getObjectByProperty("uuid", cubeUUID);

    if (cubeToRemove) {
      scene.remove(cubeToRemove);
      cubeToRemove.geometry.dispose();
      cubeToRemove.material.dispose();
    }
  }
  
  cubeUUIDList = []; // 배열 초기화
  
}