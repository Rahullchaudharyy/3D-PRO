
// Get a reference to the container element
const container = document.getElementById('3d-container');

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load(
    "scene.glft",
    (gltf) => {
        scene.add(gltf.scene);
    },
    // Error handling
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('Error loading model:', error);
    }
);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
