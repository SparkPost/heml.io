---
title: Usage
---

## Using the online editor

Visit our online [editor](/editor) and code away! Just make sure to save your HEML and HTML locally before you leave.

## Using the Command Line

Install the `heml` package globally.

```sh
npm install heml -g
```

Create your HEML email in `email.heml`:

```html
<heml>
  <head>
    <subject>Email Rox!</subject>
    <style>
      body { background: SkyBlue; }
      h1 { color: DarkViolet; }
    </style>
  </head>
  <body>
    <container>
      <marquee><h1>Hello world 💌</h1></marquee>
    </container>
  </body>
</heml>
```

The CLI allows you to get started quickly. The `develop` command will watch for any changes you make and refresh the browser. It's great for iterating quickly at the beginning.

```sh
heml develop email.heml --open
```

Once you are happy with your email run the `build` command to get code ready to be sent off the inbox.

```
heml build email.heml
```

Use the `--help` flag to get an overview the commands and options the CLI offers.

```sh
heml --help
```

### Inlining

By default your CSS will be inlined. You can turn this off using the `--embed` flag in the CLI. To embed CSS regardless of that option see the [`<style>`](/docs/elements/style) element.


## Using Node

HEML at its core is an NPM module that you can install and use in Node.js. Install it locally to get started.

```sh
npm install heml
```

In your JavaScript file, import HEML and pass it as a string to be rendered.

```js
const heml = require('heml');

const options = {
  validate: 'soft', // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ]
};

heml(`
  <heml>
    <head>
      <subject>My Email</subject>
    </head>
    <body>
      <container>
        <row>
          <column><p>hi there!</p></column>
        </row>
      </container>
    </body>
  </heml>
`, options)
.then(({ html, metadata, errors }) => {

})
```


In the returned value, you can access the rendered HTML, the metadata exported from the head, and any validation errors that occurred.
