---
title: Nested selectors
language: css
---

Do not nest selectors more than needed!

**Bad**

```scss
.avatar {
  .avatar__container {
    .avatar__image {
      a {
        ...
      }
    }
  }
}
```

**Better**

```scss
.avatar {
  .avatar__link {
    ...
  }
}
```

When selectors become **too long**, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) _—OR—_
* Overly specific (powerful) _—OR—_
* Not reusable

And: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.
