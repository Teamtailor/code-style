---
title: Avoid storing state in components
language: ember
---

Make the controller own the state and handle changes to that state and keep the components really dumb. (components shouldnt mutate stuff it gets passed)

### Data Down Action Up

You should not change passed data in components but instead trigger actions that should change the data.
https://github.com/netguru/ember-styleguide#data-down-action-up

```javascript
  // Bad
  export default Component.extend({
    isOpen: false,

    actions: {
      handleToggleMenu() {
        toggleProperty(this, 'isOpen');
      },
    },
  });

  // Good
  export default Component.extend({
    isOpen: null, // passed in the template
  });
```

```handlebars
  {{my-component
    isOpen=dropdownOpen
    // <code>toggle` is a helper `from `DockYard/ember-composable-helpers</code>
    onToggle=(action (toggle 'dropdownOpen' this))
  }}
```
