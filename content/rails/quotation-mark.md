---
title: Prefer double-quotes
language: rails
---

Prefer double-quotes unless your string literal contains `"` or escape characters you want to suppress.

```ruby
  # Good
  name = "Bozhidar"
  sarcasm = 'I "like" it.'

  # Bad
  name = 'Bozhidar'
  sarcasm = "I \"like\" it."
```
