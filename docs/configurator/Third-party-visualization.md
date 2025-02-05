---
title: Visualization IFrame API
sidebar_position: 3
---

With third party visualization, you can easily integrate Elfsquad with
external programs to visualize your configurations. For example, you can
use <a href="/blog/tutorial%20-%20verge3d%20viewer">Verge3D</a> or <a href="/blog/tutorial%20-%20sketchfab%20viewer">Sketchfab</a> 
to enhance your user experience and showcase your products in a more
compelling way.

To embed a third party viewer in Elfsquad, an iframe is used.
Communication between Elfsquad and the viewer is accomplished using the
iframe postmessage API.

## URL parameters

When Elfsquad loads the iframe, it allows you to pass parameters when creating the final URL.

Example URL: `https://example.com/viewer?configurationId=${CONFIGURATION_ID}&lang=${LANGUAGE}`

| Parameter | Description |
| --- | --- |
| `CONFIGURATION_ID` | The ID of the configuration that is being viewed |
| `LANGUAGE` | Selected language for the configuration |
| `CURRENCY` | Selected currency for the configuration |
| `MODEL_NAME` | The name of the model that is being viewed |

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

### `elfsquad.dragStarted`
This event is sent whenever a user starts dragging a feature from the
UI.

```ts
window.parent.addEventListener('message', function(e) {
    if (e.data && e.data.name === 'elfsquad.dragStarted') {
        const feature = e.data.args;
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
        configurationId: '00000000-0000-0000-0000-000000000000', // optional, defaults to the root configuration
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
        configurationId: '00000000-0000-0000-0000-000000000000', // optional, defaults to the root configuration
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

### `elfsquad.updateTextValue`
This command updates the text value of a node

```ts
window.top.postMessage({                    
    name: 'elfsquad.updateTextValue',
    args: {
        nodeId: {nodeId},
        textValue: 'text_value',
    },
}, '*');
```

### `elfsquad.updateLinkedConfigurationCardinality`
This command updates the cardinality of a linked configuration.


```ts
window.top.postMessage({                    
    name: 'elfsquad.updateLinkedConfigurationCardinality',
    args: {
        configurationId: '00000000-0000-0000-0000-000000000000', // optional, defaults to the root configuration
        parentNodeId: '00000000-0000-0000-0000-000000000000',
        cardinality: 2, // the new total count of configurations
        configurationCode: 'XYAZIQWP' // optional
    },
}, '*');
```

### `elfsquad.removeLinkedConfiguration`
This command removes a specific linked configuration from the parent
configuration.

```ts
window.top.postMessage({                    
    name: 'elfsquad.removeLinkedConfiguration',
    args: {
        configurationId: '00000000-0000-0000-0000-000000000000', // parent configuration id
        linkedConfigurationId: '00000000-0000-0000-0000-000000000000', // the id of the child configuration
    },
}, '*');
```
