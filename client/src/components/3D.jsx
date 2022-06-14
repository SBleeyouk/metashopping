import React from 'react';
import * as THREE from 'three';
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Viewer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const width = window.innerWidth - 1;
        const height = window.innerHeight - 1;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);

        this.element.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        //const objLoader = new GLTFLoader();
        //const cube = objLoader.load('../../public/armchairGray.gltf');
        //const colorTexture = 
        scene.add(cube);

        camera.position.z = 5;

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.cube = cube;
        this.animate();
    }

    animate = () => {
        this.renderer.render(this.scene, this.camera);
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        requestAnimationFrame(this.animate);
    }

    render() {
        return (
        <div ref={el => this.element = el} style={{ width: '100%', height: '100%'}} />
        );
    }
}

export default Viewer;