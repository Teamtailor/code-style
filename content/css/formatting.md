---
title: Formatting
language: css
---

* Use soft tabs (2 spaces) for indentation
* Use dashes in class names.
* Do not use ID selectors
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put blank lines between rule declarations

**Bad**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}
.avatarInitial {
  ...;
}
#firstname {
  // ...
}
```

**Good**

```css
.avatar {
  border-radius: 50%;
  border: $ui-default-border;
}

.avatar__inital {
  ...;
}
```
