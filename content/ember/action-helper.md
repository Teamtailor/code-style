---
title: Always use the <code>action</code> keyword to pass actions.
language: ember
---

```handlebars
  {{! Good }}
  {{edit-page page=page onDeletePost=(action "handleDeletePost")}}

  {{! Bad, better bad example }}
  {{edit-page page=page onDeletePost="handleDeletePost"}}
```
