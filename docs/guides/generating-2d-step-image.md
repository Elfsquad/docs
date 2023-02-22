---
title: Generating 2d step images
sidebar_position: 2
sidebar_label: Generating 2d step images
slug: ./generating-2d-step-images
---

Once you've set up the 2d visualization in the EMS, you need to  use the
API to retrieve metadata about the step image. This information can then
be used to build the step image.

### 1. Retrieve the `2dlayout`
The first step, is to retrieve what we call the `2dlayout`. This
endpoint will return an array that looks something like the one below.
It contains all the necessary information for constructing the final
step image.

```json
[
  {"url": "https://picsum.photos/210", "z": 0},
  {"url": "https://picsum.photos/130", "z": 1},
  {"url": "https://picsum.photos/280", "z": 2}
]
```

You can retrieve the layout, by calling the
[`2dlayout`
endpoint](/apis/configurator#tag/Configurator/paths/~1configurator~1{version}~1configurator~1{id}~12dlayout/get).

:::note 
Since the image is based on a step, you will need to include the
relevant `stepId`. This should be done by including a query parameter
called `stepId`.
:::

:::tip
To ensure the image is always up-to-date, you need to call this endpoint
everytime the configuration updates.
:::

### 2. Construct the step image
With the information retrieved in the previous step, it is possible to
construct the step image. The image is constructed by stacking the images
on top of each other, in the order of the `z` value.

In the example below, the image is constructed by making use of the [HTML
canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
element.

```js
const layout = [
  {"url": "https://picsum.photos/500", "z": 0},
  {"url": "https://picsum.photos/200", "z": 1},
  {"url": "https://picsum.photos/100", "z": 2}
].sort((a, b) => a.z - b.z);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')

for(const item of layout) {
  const img = new Image()
  img.src = item.url
  img.onload = () => {
    ctx.drawImage(img, 0, 0)
  }
}

const stepImage = canvas.toDataURL()
```
