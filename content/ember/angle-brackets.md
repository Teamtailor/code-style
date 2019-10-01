---
title: Use angle bracket component syntax for all new components
language: ember
---

But don't use the new syntax for components that already exists with the old syntax, i.e one syntax per component

```handlebars
  {{! Good }}
  <EditPage @page={{page}} class="u-display--flex" />

  {{! Bad }}
  {{edit-page page=page class="u-display--flex"}}
```
