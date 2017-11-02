---
title: Button
description: "Use the button element to add a button-styled link."
---


## Examples

### Default button

```xml
<button href="https://heml.io">Click me!!</button>
```

### Center a button

```xml
<button href="https://heml.io" style="margin: auto;">Click me!!</button>
```


### Changing the background color

```xml
<heml>
  <head>
    <style>
      .secondary-button {
        background: CornflowerBlue;
      }
    </style>
  </head>
  <body>
    <button href="https://heml.io" class="secondary-button">Click me!!</button>
  </body>
</heml>
```


## Attributes

This element supports the [global attributes](/elements/overview#global-attributes).

<div class="attributes-table">

| | |
| --- | --- |
| **href**<small>url</small> | Set the destination address for when the button is clicked. Defaults to `#`. |

</div>

## Styling

The button supports the standard [block and text element styles](/docs/styling/using-css#block-elements).

## Pseudo elements

```
table::root
  table::table
    td::cell
      a::link
```
