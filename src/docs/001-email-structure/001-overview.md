---
title: Overview
---


HEML follows the same structure as HTML. Every HEML email opens with a `<heml>` element, similarly to the `<html>` tag in HTML. Inside the `<heml>` element should live a single `<head>` and a `<body>`. The head will contain all metadata and non-visible content about the email. The body will hold all content for the email.

```xml
<heml>
  <head>
  <!-- metadata -->
  </head>
  <body>
    <!-- your content -->
  </body>
</heml>
```

Throughout the email you can use valid HTML anywhere. This means you get to keep all the power found in writing vanilla HTML emails while still getting to use the awesomeness of HEML. Keep in mind that some HEML elements share the same tag as HTML elements such as `<button>`. To use it as HTML, add the [`heml-ignore`](/docs/elements/overview#overlapping-heml-and-html) tag. This will not apply to its children, e.g. in the following example, only the `<body>` element will be affected.

```xml
<heml>
  <head>
  </head>
  <body heml-ignore>
    <button>I am still a HEML button</button>
  </body>
</heml>
```
