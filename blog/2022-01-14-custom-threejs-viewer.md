---
slug: tutorial - custom three.js viewer
title: Tutorial - Custom THREE.JS viewer
author: Johannes Heesterman
author_title: Lead Software Engineer @ Elfsquad
author_url: https://github.com/johannesheesterman
author_image_url: https://avatars.githubusercontent.com/u/7443666?v=4
tags: [configurator, threejs]
---

## Quick overview
In this post I will provide a sample of how you can implement your own custom visualization using the [THREE.js](https://threejs.org/) library.

## Configuration model
Before we start creating the actual viewer project, let's start by creating a new configuration model that we can use to test our viewer.

Our model wil very simply consist of 2 *mandatory* features:
* Height (the feature should have a different max value than min value)
* Text value (the feature type should be set to 'text')

Configuration model result:
![Configuration model](/img/tutorial/custom-threejs-viewer/model.png)

## Custom viewer project

### Initialize new project
The first step is to initialize a new web project for your visualizations. 

Create a index.html file and open it with VS Code (or any other text editor) and save the following HTML boilerplate:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
    </style>
</head>
<body>

    <script>
       
    </script>

</body>
</html>
```

### Add a sample scene
Now in the script tag we can create a sample scene which we will later hook to a configuration model:

```javascript
var scene, camera, renderer, cube, textMesh, font;

function initializeScene(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff, 1 );
    renderer.antialias = true;
    document.body.appendChild( renderer.domElement );

    const controls = new THREE.OrbitControls(camera, renderer.domElement)

    const geometry = new THREE.BoxGeometry();
    const material  = new THREE.MeshLambertMaterial({
        color: 0x0aeedf
    });
    cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true;
    scene.add( cube );
    camera.position.z = 5;

    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/optimer_bold.typeface.json', (f) => {
        font = f;
        var text = new THREE.TextGeometry( 'Hello World', {
            font: font,
            size: 1,
            height: 1,
            curveSegments: 12,

            bevelThickness: 0.1,
            bevelSize: 0.1,
            bevelEnabled: true
        } );
        textMesh = new THREE.Mesh(text, material);

        textMesh.position.y = 2;
        textMesh.position.x = 2;

        scene.add(textMesh);
    });

    initializeLighting();
}

function initializeLighting(){
    scene.add(new THREE.AmbientLight(0x666666));

    var light;
    light = new THREE.DirectionalLight(0xdfebff, 1);
    light.position.set(300, 400, 50);
    light.position.multiplyScalar(1.3);

    light.castShadow = true;
    light.shadowCameraVisible = true;

    light.shadowMapWidth = 512;
    light.shadowMapHeight = 512;

    var d = 200;

    light.shadowCameraLeft = -d;
    light.shadowCameraRight = d;
    light.shadowCameraTop = d;
    light.shadowCameraBottom = -d;

    light.shadowCameraFar = 1000;
    light.shadowDarkness = 0.8;

    scene.add(light);
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

initializeScene();
animate();
```

Result:

![Sample Scene](/img/tutorial/custom-threejs-viewer/sample_scene.png)


### Add a configuration updated event listener
With the sample scene initialized, we can start listening to changes in the configuration and apply these changes to our scene:

```javascript
window.addEventListener('message', message => {

    if (message.data.name == 'elfsquad.configurationUpdated'){
        const configuration = message.data.args;

        cube.scale.y = configuration
            .values['4153c2b5-12a7-460e-0a23-08d9b49b598e']
            .value;

        if (textMesh){
            let textValue = configuration.textValues['3df61628-5511-4ef3-ce9b-08d9d763de24'];
            textMesh.geometry = new THREE.TextGeometry(textValue, {
                font: font,
                size: 1,
                height: 1,
                curveSegments: 12,
                bevelThickness: 0.1,
                bevelSize: 0.1,
                bevelEnabled: true
            } );
        }
    }

});
```

## Third party visualization step

