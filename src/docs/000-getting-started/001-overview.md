---
title: Overview
---

Email is hard. With dozens of popular email clients, each of which has its own quirks, it can be overwhelming to build an email that looks good and works well. Add in the challenge of getting your email to the inbox quickly, and it's enough to make anyone give up.

SparkPost has been working on getting emails to the inbox for close to two decades. HEML is our attempt to help solve the other half of the email problem: writing clean, well designed emails.

HEML is a XML-based markup language designed for building emails. The goal is to make building emails feel as natural as building websites.

## Philosophy

HEML is built on 3 core principles. Each decision about the architecture and element design is made with these in mind.

<div class="fixed-table">

| <h3>Native Feel</h3> | <h3>Forward Thinking</h3> | <h3>Extendable</h3>  |
| --- | --- | --- |
| Do you know HTML and CSS? Check out our docs and you're off to the races! No special rules or styling paradigms to master. | HEML is designed to take advantage of all that email can do while still providing a solid experience for all clients. | You can create your own powerful elements and style rules. Share them with the world, or keep 'em to yourself. Your choice. |

</div>

## How does it work?
There is a lot of magic going on under the hood. We'd love for you to poke around and maybe even submit a PR! 🎉 On a high level, here's how it works.

### The HEML
Each HEML element is equivalent to some predefined HTML. The rendering engine goes through, finds all the HEML elements, and converts them to HTML.

### The CSS

The CSS contained in style tags is parsed and transformed to fix as many simple issues as possible. A good example of this is using fully expanded, uppercase hexadecimal colors (`#33AABB`) instead of the shorthand, lowercase values (`#3ab`).
<br>**See:** [hemlstyles](https://github.com/SparkPost/heml/tree/master/packages/heml-styles)

Any CSS that targets a HEML element is then transformed into new selectors, to properly style the rendered HTML. Finally, any pseudo-element selectors are replaced with the proper CSS selectors, making the CSS work as expected.
<br>**See:** [postcss-element-expander](https://github.com/SparkPost/heml/tree/master/packages/heml-styles/src/plugins/postcss-element-expander)
