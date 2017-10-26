---
title: Using CSS
---

HEML styling is driven through CSS. You can write your CSS per usual, just as if you were using HTML. Your CSS will then be modified to be in a safe email format.

## Example

```css
block {
  padding: 10px;
  background-color: skyblue;
}
```

## What properties are allowed?

Each HEML element has a list of the CSS properties it specifically allows. They fall into two categories: block and text elements. It's safe to assume that elements will support the following properties. 

### Block elements

<div class="fixed-table bordered-table">

| | | | |
| --- | --- | --- | --- |
| margin | padding | width  | height |
| display | background | border | box-shadow |
| text | font | color | |

</div>

### Text elements

<div class="fixed-table bordered-table">

| | | | | |
| --- | --- | --- | --- | --- |
| background | border | color | text | font |
| display | | | |

</div>

## What color formats are supported?

You can use basically any color format in CSS. You want `rgba(0,0,0,0.5)`? You got it. You want `skyblue`? No problem. HEML supports all of them.

## What units are supported?

We suggest using only `px` and `%`. If you use other units such as `em` or `vh`, HEML will simply pass those through.

## Using media queries

You can use media queries safely in HEML. We suggest targeting anything smaller than `480px` as mobile.

**Note:** Since the styles that are not in media queries get inlined by default, you need to add `!important` to CSS properties that are overriding properties outside of media queries. A fix for this bug is in the works.

## Changing element displays

Because the markup is tied to specific display properties, it is not recommended to change the `display` property to `inline` for block elements, or to `block` for inline elements. You can use the `display` property to show and hide elements safely, though.

```css
/* You can hide the block element with display: none; */
block.hidden {
  display: none;
}

/* This is 100% 👌*/
block.show {
  display: block;
}

/* DO NOT DO THIS
 * it'll lead to weird things
 */
block.inline {
  display: inline-block;
}
```
