---
title: Meta Elements
---

All meta elements live inside the `<head>`. They set all the metadata about the email. All metadata is exported along with the rendered HTML and any errors. Check out the [usage](/docs/getting-started/usage) guide for accessing the metadata.

## Subject

This tag sets the subject of the email. It translates to the `<title>` tag and is used when sending emails via the CLI.

```xml
<head>
  <subject>Hi there!</subject>
</head>
```

### Exports

```json
"metadata": {
  "subject": "Hi there!"
}
```

---

## Preview

This sets the preview text for the email. This should not be used with preheader text as they are generally mutually exclusive. View [client support](https://litmus.com/blog/the-ultimate-guide-to-preview-text-support) to learn more.

```xml
<head>
  <preview>Please open my email!!</preview>
</head>
```

### Exports

```json
"metadata": {
  "preview": "Please open my email!!"
}
```

---

## Font

The `<font>` tag lets you import fonts from remote sources safely.

```xml
<head>
  <font href="https://fonts.googleapis.com/css?family=Muli" />
</head>
```


### Attributes
<div class="attributes-table">

| | |
| --- | --- |
| **href**<small>url</small> | Sets the url where the font styles live. |

</div>

### Exports

```json
"metadata": {
  "fonts": [ "https://fonts.googleapis.com/css?family=Muli" ... ]
}
```

---

## Base

This sets all relative urls in the `href` and `src` attributes to be absolute from the base's `href` attribute. For example, `<img src="/my-picture.png">` would become `<img src="https://example.com/my-picture.png">` if you set the base to `http://example.com`.

```xml
<head>
  <base href="http://example.com" />
</head>
```


### Attributes
<div class="attributes-table">

| | |
| --- | --- |
| **href**<small>url</small> | Sets the url to be used as the base for all relative links |

</div>

### Exports

```json
"metadata": {
  "base": "http://example.com"
}
```

---

## Meta

The `<meta>` element is used for defining any metadata that is not set by the other meta elements. This directly translates to the HTML `<meta>` tag.


```xml
<head>
  <meta name="author" content="Avi Goldman" />
</head>
```

By default HEML adds the following meta tags.

```xml
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

### Exports

```json
"metadata": {
  "meta": [ { "name": "author", "content": "Avi Goldman" } ... ]
}
```
