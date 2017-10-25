---
title: Pseudo-Elements
---

**Disclaimer: When styling HEML pseudo-elements it is up to you to verify that the styles hold up across email clients. You are entering uncharted territory.**

In some cases you may want to style a HEML element in a way that just isn't possible. This stems from the fact that each HEML element has a one-to-many relationship with HTML tags. Because of this the different properties have to belong to different tags. To allow for you to apply more advanced styling, HEML elements  have pseudo-elements to let you style the rendered HTML with more control.

These psuedo elements work like the `::before` and `::after` pseudo-elements. They allow us to style elements that we didn't explicitly create. We can use CSS to style these in any way we want. 

### Example

This CSS will style the text in the button so that it has a blue background. 

```css
button::text {
  background: blue;
}
```

This allows you to use the full power of CSS on the rendered element. You could make the text background change when you hover over the button, or change only when you hover over the text.

```css
/* hover over the button to change the text background */
button:hover::text {
  background: orange;
}

/* hover over the text only to change the text background */
button::text:hover {
  background: orange;
}
```
