---
title: Style
description: Define CSS styles for the email in this element.
---

You can add styles to your email using the `<style>` element. These styles dicatate how your email will look. All your `<style>` elements should live inside the `<head>` of your email. To prevent HEML from modifying your CSS, add the `heml-ignore` attribute. **Note that it will still be inlined.** 

```xml
<style heml-ignore>
  /* HEML will not modify the CSS in here */
</style>
```

## Embedded CSS

By default your styles will be inlined. However, any media queries will not be inlined. It is important to note that if you inline your CSS any client-targeting CSS should be put in a style element with the `heml-embed` attribute.

```xml
<style heml-embed>
  /* I won't be inlined */
</style>
<style>
  /* I will be inlined */
</style>
```

## Attributes

<div class="attributes-table">

| | |
| --- | --- |
| **heml-embed**<small>boolean</small> | If present, the CSS will not be inlined. |

</div>
