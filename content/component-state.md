---
title: Avoid storing state in components
---

Make the controller own the state and handle changes to that state and keep the components really dumb. (components shouldnt mutate stuff it gets passed)

### Data Down Action Up

You should not change passed data in components but instead trigger actions that should change the data.
https://github.com/netguru/ember-styleguide#data-down-action-up

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

    {{my-component
      isOpen=dropdownOpen
      // `toggle` is a helper `from `DockYard/ember-composable-helpers`
      onToggle=(action (toggle 'dropdownOpen' this))
    }}
