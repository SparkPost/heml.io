---
title: Layout
---

Layouts are key when designing emails. HEML provides a layout system driven by three elements: `<container>`, `<row>`, and `<column>`.

## Containers

All layouts should live inside this element. By default, all containers have a width of 100%, and a max width of 600px.

### Basic container
```xml
<container>
  <!-- put your layout in here -->
</container>
```

### Changing the maximum width

If you want to change the maximum width of your container, you can do with a small CSS snippet.

```xml
<heml>
  <head>
    <style>
      container {
        max-width: 800px;
      }
    </style>
  </head>
  <body>
    <container>
      <!-- now all containers will grow up to 800px -->
    </container>
  </body>
</heml>
```

### Styling

The container element supports the standard [block and text element styles](/docs/styling/using-css#block-elements).


## Rows

Rows wrap all columns in your layout. They separate your columns into sections.

```xml
<container>
  <row> <!-- columns here --> </row>
  <row> <!-- more columns here --> </row>
</container>
```

## Columns

Columns are exactly what they sound like. They break up content into different sections in a row. The grid system is based on a 12 column system similar to [Bootstrap](https://getbootstrap.com/). We suggest having no more then 4 columns per row to keep your design as flexible as possible. However, there may be cases where you want to divide it up more.

By default, columns will be distributed among the available space on desktop and will grow to fill the entire row on mobile.

### Auto sizing columns

```xml
<container>
  <row>
    <column>
      column 1
    </column>
    <column>
      column 2
    </column>
  </row>
</container>
```


### Defined sizes

You can use the `large` and `small` attributes to set the size on your columns on mobile and desktop.

```xml
<container>
  <row>
    <column large="8" small="8">I always take up 8 columns</column>
    <column large="4" small="4">I always take up 4 columns</column>
  </row>
</container>
```


### Mix and match

You can use a combination of defining exact column-sizing and auto-sizing to simplify your templates.

```xml
<container>
  <row>
    <column large="8" small="6">I have defined sizes</column>
    <column>I take up the remaining space</column>
  </row>
</container>
```

## Attributes

<div class="attributes-table">

| | |
| --- | --- |
| **small**<small>number</small> | Sets the column width on small screens |
| **large**<small>number</small> | Sets the column width on large screens |

</div>


### Styling

<div class="fixed-table bordered-table">

| | | | |
| --- | --- | --- | --- |
| padding | display | background | border |
| box-shadow | text | font | color |

</div>
