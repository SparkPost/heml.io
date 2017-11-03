---
title: Block
description: "Use the block element for consistent sections in your emails"
---

The block element is useful for a safe way to add a generic block element into your content, like a `<div>` tag.

## Examples

### Default block

```xml
<block>I'm a block</block>
```


### Changing the background color

```xml
<heml>
  <head>
    <style>
      block {
        background: CornflowerBlue;
      }
    </style>
  </head>
  <body>
    <block>I'm a blue block</block>
  </body>
</heml>
```


## Attributes

This element supports the [global attributes](/elements/overview#global-attributes).

## Styling

The block supports the standard [block element styles](/docs/styling/using-css#block-elements).

## Pseudo elements

```
div::root
  table::table
    tr::row
      td::cell
```
