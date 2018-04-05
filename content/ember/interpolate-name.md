---
title: Don’t interpolate names of components
language: ember
---

Using interpolation makes it really hard to grep through the code and know which components are actually in use.

    export default Controller.extend({
      type: 'foobar',

      // Bad
      componentName: function('type', function() {
        const type = get(this, 'type');
        return <code>my-${type}-component</code>;
      }),

      // Good
      componentName: function('type', function() {
        const type = get(this, 'type');
        switch (type) {
          'foobar':
            return 'my-foobar-component';
        }
      }),
    });

Calling <code>grep my-foobar-component</code> will match in the second example and not the first one.
