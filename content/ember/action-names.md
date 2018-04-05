---
title: Always name actions to passed to components ` handle``{``Action `}
language: ember
---

    export default Controller.extend({
      actions: {
        handleDropdownClose() {}, // Good, handleDelte, onDelete for compontent
        submitForm() {},

        dropdownClose() {}, // Bad
        submitForm() {},
      }
    });
