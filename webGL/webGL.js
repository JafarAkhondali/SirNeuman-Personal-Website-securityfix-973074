var camera, scene, renderer;
var geometry, material, mesh, geometryA, materialA, meshA;
var container = document.getElementById("container");

var spin

function init() {
    scene = new THREE.Scene();
    var width = 640;
    var height = 480;

    camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
    camera.position.set(0, 200, 1000);
    scene.add(camera);
    
    var spotlight = new THREE.SpotLight(0xffffff);
    spotlight.position.set(700, 800, 900);
    spotlight.shadowCameraVisible = true;
    spotlight.shadowDarkness = 0.2;
    spotlight.intensity = 4;
    spotlight.castShadow = true;
    scene.add(spotlight);
//    
////    var planeTexture = THREE.ImageUtils.loadTexture('images/marble-white.jpg');
//    planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
//    planeMaterial = new THREE.MeshLambertMaterial({map: planeTexture, side: THREE.DoubleSide});
//    plane = new THREE.Mesh(planeGeometry, planeMaterial);
//    plane.rotation.x = Math.PI / -2;
//    plane.receiveShadow = true;
//    scene.add(plane);

    geometry = new THREE.OctahedronGeometry(200, 0);
//    gemoetry.position.y = 75;
//    gemoetry.position.x = -250;
    var texture = THREE.ImageUtils.loadTexture('images/spiral.jpg');
    material = new THREE.MeshLambertMaterial({map: texture});
//    material = new THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
//    xpos = THREE.ImageUtils.loadTexture('images/Skybox-Right.jpg');
//    materialArray.push(new THREE.MeshBasicMaterial({map: xpos}));
//
//    xneg = THREE.ImageUtils.loadTexture('images/Skybox-Left.jpg');
//    materialArray.push(new THREE.MeshBasicMaterial({map: xneg}));
//
//    ypos = THREE.ImageUtils.loadTexture('images/Skybox-Top.jpg');
//    materialArray.push(new THREE.MeshBasicMaterial({map: ypos}));
//
//    yneg = THREE.ImageUtils.loadTexture('images/Skybox-Bottom.jpg');
//    materialArray.push(new THREE.MeshBasicMaterial({map: yneg}));
//
//    zpos = THREE.ImageUtils.loadTexture('images/Skybox-Back.jpg');
//    materialArray.push(new THREE.MeshBasicMaterial({map: zpos}));
//
//    zneg = THREE.ImageUtils.loadTexture('images/Skybox-Front.jpg');
//    materialArray.push(new THREE.MeshBasicMaterial({map: zneg}));
//
//    for (var i = 0; i < 6; i++) {
//        materialArray[i].side = THREE.BackSide;
//    }
//
//    var skyboxMaterial = new THREE.MeshFaceMaterial(materialArray);
//    var skyboxGeometry = new THREE.BoxGeometry(5000, 5000, 5000);
//    var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
//    scene.add(skybox);

    renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
    renderer.setSize(width, height);
//    
//    controls = new THREE.OrbitControls(camera, renderer.domElement);
//    
    document.body.appendChild(renderer.domElement);

}

function animate() {
    requestAnimationFrame(animate);
    

    mesh.rotation.y += 1;
    mesh.rotation.x += 0.005;

    renderer.render(scene, camera);
    
    controls.update();
}

init();
animate();