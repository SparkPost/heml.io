---
title: Overview
---

Elements are the core of HEML. They are rendered into email-ready HTML.

## Overlapping HEML and HTML

Some HEML elements share the same tag names as HTML elements, such as `<button>` or `<style>`, to help HEML feel as natural as possible. If for some reason you want to use the HTML tag instead, add the `heml-ignore` attribute to it. This will not affect its children.

```xml
<button>I am a HEML button</button>
<button heml-ignore>I am a HTML button</button>
```

## HTML Attributes

All HEML elements support the following HTML attributes. These will be passed down directly to the rendered HTML.

**Note:** You can use inline styles on HEML elements

| | | | |
| --- | --- | --- | --- |
| `id` | `class` | `dir` | `lang` |
| `accesskey` | `tabindex` | `title` | `translate` |