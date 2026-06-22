import { ModelRotator } from "../../../scripts/model-rotator.js"

let dog= new ModelRotator('dog-3d');
let model="/images/Duck.glb"
let scale=2;
let position={
    x:4,
    y:3,
    z:-5,
};

//dog.loadCube();
dog.load(model, scale)
dog.loadFloor();
dog.cameraPosition(position);
dog.animate();