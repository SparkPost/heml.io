---
title: Image
description: The <img> element adds an image in your email.
---

Images are a powerful tool in your emails. However, they are widely misused. You should not use images for displaying text, buttons, or anything else that has a native equivalent. This leads to bloated emails, invisible content, and accessibility issues. Each image translates to a `<img />` tag in HTML.

## Examples

### Basic image 

```xml
<img src="http://example.com/my-image.jpg" alt="my image" width="100" />
```

### Inferring the width

HEML lets you infer the width from the image file. If you don't want to set the width value manually, `infer` will set it for you.

```xml
<img src="http://example.com/my-image.jpg" alt="my image" infer />
```

If you are using a retina sized image you can set `infer=retina` which will set the width to half of what the image file width actually is.

```xml
<img src="http://example.com/my-image.jpg" alt="my image" infer="retina" />
```

## Attributes

This element supports the [global attributes](/elements/overview#global-attributes).

<div class="attributes-table">

| | |
| --- | --- |
| **src**<small>url</small> | Sets the image source. **This is required.** |
| **alt**<small>string</small> | Sets the image description. Defaults to `""`. |
| **width**<small>pixels</small> | Sets the exact width of the image. |
| **height**<small>pixels</small> | Sets the exact height of the image. |
| **infer**<small>string/boolean</small> | This should be used instead of the width and height. If present, the image width will be set to the exact width of the actual image. If set to `retina`, its width will be half of the image width.  |
| **srcset**<small>list</small> | Directly passes through to the image. See the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset) for more. |

</div>

## Styling

All styles given directly apply to the HTML `<img>` tag.
