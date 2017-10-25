---
title: Typography
description: Use the same HTML markup in HEML for your typography
---

When writing your content, use the same HTML markup tags you are accustomed to. It is important to note that HEML bundles fixes for common issues with these tags so you are free to use them safely in email. They all support the [global attributes](/elements/overview#global-attributes).

All text should be in a header, paragraph, or list for your styling to work as expected.


## Headers

```xml
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Paragraphs

```xml
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officia vero consequatur quibusdam quo consequuntur explicabo, impedit ex qui aperiam.</p>
```

## Text decoration elements

```xml
<p>
  <s>Strikethrough</s>
  <u>Underlined</u>
  <small>Small</small>
  <strong>Bold</strong>
  <em>Italicized</em>
</p>
```

## Lists

```xml
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```
