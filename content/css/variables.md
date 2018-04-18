---
title: Variables
language: css
---

Try to use our variables for the app, this is due to keep a balanced and more consistent User Interface.

For colors, we try to not introduce a slightly different version of a color, if not really needed and synced within the team.

**Good**

```scss
// _variables.scss
$light-background-color: #eceff1;

// _component.scss
.c-my-component {
  $my-component-specific-variable: #888;

  background-color: $light-background-color;

  &__name {
    background-color: $my-component-specific-variable;
  }
}
```

**Bad**

```scss
// _component.scss
.c-my-component {
  background-color: #eceff1;

  &__name {
    background-color: #888;
  }
}
```
