---
title: Use <code>get</code> and <code>set</code>
language: ember
---

```javascript
// Good
import { set, get } from '@ember/object';
set(this, 'isSelected', true);

// Bad
this.set('isSelected', true);
```
