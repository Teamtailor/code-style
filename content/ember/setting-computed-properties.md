---
title: When setting a computed property, provide a setter for it
language: ember
---

This will keep the ability of the property to be still computed

```javascript
// Good
fullName: computed('firstName', 'lastName', {
  get() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  },
  set(key, value) {
    return value;
  }
})
set(this, 'fullName', 'Roman Polansky');


// Bad
fullName: computed('user.firstName', 'user.lastName', {
    return `${this.get('firstName')} ${this.get('lastName')}`;
});
set(this, 'fullName', 'Louis C.K.');

```
