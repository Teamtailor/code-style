---
title: Import computed macros directly
language: ember
---

```javascript
  // Good
  import { alias } from '@ember/object/computed';

  export default Controller.extend({
    job: alias('model'),
  });

  // Bad, invoke macro thought computed in logic
  export default Controller.extend({
    job: computed.alias('model'),
  });
```
