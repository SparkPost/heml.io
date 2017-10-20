---
title: Link
description: Use the <a> element to add a link to another page or a section in the email.
---


## Examples

### Basic link

```xml
<a href="https://heml.io">Click me!!</a>
```

## Attributes

This element supports the [global attributes](/elements/overview#global-attributes).

<div class="attributes-table">

| | |
| --- | --- |
| **href**<small>url</small> | Set the destination address for when the link is clicked. Defaults to `#`. |

</div>

## Styling

The button supports the standard [text element styles](/docs/styling/using-css#text-elements).

## Pseudo elements

```
a::link
  span::text
```
