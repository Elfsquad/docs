---
title: Third party visualization
sidebar_position: 4
---

With third party visualization, you can easily integrate Elfsquad with
external programs to visualize your configurations. For example, you can
use <a href="/blog/tutorial%20-%20verge3d%20viewer">Verge3D</a> or <a href="/blog/tutorial%20-%20sketchfab%20viewer">Sketchfab</a> 
to enhance your user experience and showcase your products in a more
compelling way.

To embed a third party viewer in Elfsquad, an iframe is used.
Communication between Elfsquad and the viewer is accomplished using the
iframe postmessage API.

## Events

Elfsquad sends several events to the embedded iframe, such as when a
configuration is modified. 

Each event consists of two properties: the `name` property, which
identifies the type of event, and the `args` property, which contains the
relevant data.

### `elfsquad.configurationUpdated`
This event is sent whenever the configuration is modified. 

```ts
window.parent.addEventListener('message', function(e) {                
    if (e.data && e.data.name === 'elfsquad.configurationUpdated') {
        const configuration = e.data.args;
    }
});
```

### `elfsquad.stepChanged`
This event is sent whenever the user changes step.

```ts
window.parent.addEventListener('message', function(e) {
    if (e.data && e.data.name === 'elfsquad.stepChanged') {
        const step = e.data.args;
    }
});
```

## Commands

You can also instruct Elfsquad from within the viewer by sending
messages to it. These messages are similar to the event messages and
contain a `name` property for the name of the message and an `args` property
for the message arguments. 

By sending these messages, you can instruct Elfsquad to perform various
actions, such as updating the configuration.

### `elfsquad.triggerConfigurationUpdated`

This triggers a `elfsquad.configurationUpdated` event to be send,
without updating the configuration.

```ts
window.top.postMessage({
    name: 'elfsquad.triggerConfigurationUpdated'
}, '*')
```

### `elfsquad.updateRequirement`

This executes an update requirement API call.

```ts
window.top.postMessage({                    
    name: 'elfsquad.updateRequirement',
    args: {
        nodeId: {nodeId},
        value: {value}, 
        isSelection: false
    },
}, '*');
```

### `elfsquad.updateRequirements`

This executes an API call to update multiple requirements.

```ts
window.top.postMessage({                    
    name: 'elfsquad.updateRequirements',
    args: {
        ignoreConflicts: false,
        includeSearchbarResults: false,
        requirements: [
            { nodeId: {nodeId}, value: {value}, isSelection: false },
            { nodeId: {nodeId}, value: {value}, isSelection: false },
            { nodeId: {nodeId}, value: {value}, isSelection: false },
        ],
    },
}, '*');
```

### `elfsquad.updateImageValue`

This command uploads an image and assigns it as a image value to a node.

```ts
window.top.postMessage({                    
    name: 'elfsquad.updateImageValue',
    args: {
        nodeId: {nodeId},
        image: {base64EncodedImageData}
    },
}, '*');
```