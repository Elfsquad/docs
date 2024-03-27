---
title: 📊 Generating 2D Step Images
sidebar_position: 3
sidebar_label: Generating 2D Step Images
slug: ./generating-2d-step-images
hide_table_of_contents: true
---

<CodeDoc>

<CodeDocSection>

# Generating 2D Step Images
This guide covers the process of setting up and generating 2D step images within the EMS. You will learn how to use the API to retrieve metadata and construct the step image effectively.

</CodeDocSection>

<CodeDocSection highlight="{1-3}">

### 1. Retrieve the `2dlayout`
To begin, you must retrieve the `2dlayout` from the designated endpoint.
This data structure contains URLs and z-index values essential for
constructing the step image. Ensure to include the `stepId` in your
query to retrieve the correct layout.

</CodeDocSection>

<CodeDocSection highlight="{8-15}">

### 2. Construct the step image
With the `2dlayout` retrieved, you can now stack the images based on
their z-values to construct the final step image. The example below
demonstrates how to use the HTML canvas element to achieve this.

</CodeDocSection>

<CodeDocSection highlight="{5-6,16}">

### 3. Result

Following the steps above, you will be able to generate a 2D step image
that dynamically updates based on the configuration. This method ensures
that your visualizations are always current and accurate.

</CodeDocSection>

<CodeBlock language="js">
{`const configuratorContext = new ConfiguratorContext();
const layout2d = configuratorContext.getLayout2d();
const sortedLayout = layout2d.sort((a, b) => a.z - b.z);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

for(const item of layout) {
  const img = new Image();
  img.src = item.url;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
}

const stepImage = canvas.toDataURL();`}
</CodeBlock>

</CodeDoc>

import { CodeDoc, CodeDocSection } from "@elfsquad/docusaurus-plugin-codedoc";
import CodeBlock from '@theme/CodeBlock';

