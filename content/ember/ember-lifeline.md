---
title: Use ember-lifeline in for runloop functions
language: ember
---

Ember-lifeline while take care of the objects (components/routes) lifecycle and cancel any queued functions if the object is destroyed.

```js
// GOOD
import Component from '@ember/component';
import { runTask, DisposableMixin } from 'ember-lifeline';

export default Component.extend(DisposableMixin, {
  init() {
    this._super(...arguments);
    runTask(this, () => {
      this.set('date', new Date);
    }, 500);
  },
});

// BAD

import Component from '@ember/component';
import { run } from '@ember/runloop';

export default Component.extend({
  init() {
    this._super(...arguments);
    run.later(() => {
      // First, check if this object is even valid
      if (this.isDestroyed) { return; }
      this.set('date', new Date);
    }, 500);
  }
});
```
