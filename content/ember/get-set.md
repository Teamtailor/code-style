---
title: Use `get` and `set`
language: ember
---

    // Good
    import { set, get } from '@ember/object';
    set(this, 'isSelected', true);

    // Bad
    this.set('isSelected', true);
