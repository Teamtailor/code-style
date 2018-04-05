---
title: How to indent handlebars?
language: ember
---

```handlebars
  {{#if true}}
    <span>True!</span>
  {{else}}
    <span>False!</span>
  {{/if}}

  {{my-component foo=1 bar=2 foo=1 bar=2 foo=1 bar=2 foo=1 bar=2 foo=1 bar=2}}

  {{#my-component
    foo=1
    bar=2
  }}
    <span></span>
  {{/my-component}}
```

Split on lines when line is longer than some limit (80)?
Also ending <code>}}</code> in block form should be on new line
