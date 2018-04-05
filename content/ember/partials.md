---
title: Don’t use partials
---

Prefer components over partials. Argue for using partials.
~~Always use components.~~ Partials share variables from the parent view, a component will always have to be passed all variables it uses.

    ember g component stages
    ember g component stages/list
    ember g component stages/list/item ??
    <stages-list/item> ?? 😄

    stages
    stages/item (this is not global)
