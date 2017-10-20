<!-- ---
title: Targeting Clients
---


When building your email you may run into a situation where you need to add CSS for a specific email client or set of clients. HEML lets you do this really easily with client media queries.


You can write `@client` media queries and list out clients where you want the CSS to take effect. For example to change the background to blue on gmail and yahoo, you would write the following.

```css
@client gmail, yahoo {
  body {
    background: blue;
  }
} 
```

### Supported clients

<div class="fixed-table bordered-table">

| | | | | |
| --- | --- | --- | --- |  --- |
| Gmail | Yahoo | AOL | Outlook_365 | Outlook_com |

</div> -->