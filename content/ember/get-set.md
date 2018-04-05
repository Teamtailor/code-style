---
title: Use `get` and `set`
---

    // Good
    import { set, get } from '@ember/object';
    set(this, 'isSelected', true);

    // Bad
    this.set('isSelected', true);
