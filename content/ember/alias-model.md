---
title: Alias your model in the controller/components
language: ember
---

```javascript
  // Good
  export default Controller.extend({
    job: computed.alias('model'),

    title: computed.alias('job.title'),
  });

  // Bad, implied we're working with a <code>job</code> model
  export default Controller.extend({
    title: computed.alias('model.title'),
  });
```

Can we enabled it with linter?
