---
title: Alias your model in the controller/components
language: ember
---

    // Good
    export default Controller.extend({
      job: computed.alias('model'),

      title: computed.alias('job.title'),
language: ember
    });

    // Bad, implied we're working with a `job` model
    export default Controller.extend({
      title: computed.alias('model.title'),
language: ember
    });

Can we enabled it with linter?