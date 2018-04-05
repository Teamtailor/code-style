---
title: Always name actions to passed to a component's <code>handle{Action}</code>
language: ember
---

```javascript
export default Controller.extend({
  actions: {
    handleDropdownClose() {}, // Good, handleDelte, onDelete for compontent
    submitForm() {},

    dropdownClose() {}, // Bad
    submitForm() {},
  },
});
```
