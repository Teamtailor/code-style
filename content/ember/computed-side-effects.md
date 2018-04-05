---
title: Don’t have side-effects in computed properties
language: ember
---

```javascript
export default Computed.extend({
  foo: null,

  foobar: computed('sick', function() {
    set(this, 'foo', 'bar'); // Side-effect!
    return get(this, 'sick');
  }),
});
```
