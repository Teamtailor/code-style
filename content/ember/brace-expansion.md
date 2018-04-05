---
title: Use brace expansion
language: ember
---

```javascript
// Good
fullName: computed('user.{firstName,lastName}', {
  // Code
});

// Bad
fullName: computed('user.firstName', 'user.lastName', {
  // Code
});
```
