---
title: BEM – block, element, modifier
language: css
---

We'are using BEM as our methodology for CSS and with that we get advantages of more structured CSS and UI that are easier to understand and adapt in a team.

**BEM**, or “Block-Element-Modifier”, is a _naming convention_ for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS.

**Block** - Standalone entity that is meaningful on its own.
_Examples - header, container, menu, checkbox, input_

**Element** - A part of a block that has no standalone meaning and is semantically tied to its block.
_Examples - menu item, list item, checkbox caption, header title_

**Modifier** - A flag on a block or element. Use them to change appearance or behavior.
_Examples - disabled, highlighted, checked, fixed, size big, color yellow_

In `.modules.scss` files 

1. _Dont add Block, it's added automatically in the output class._
2. _Use camelCase._
```scss
// button.module.scss

.__root {}

.--modifierName {}

.__iconArea--modifierName {}
```

In `.scss` files 

1. _Prefix with Block_
2. _Use kebab-case_

```scss
// button.scss

.button-name__root {}

.button-name--modifier-name {}

.button-name__icon-area--modifier-name {}
```

**Great readings**

* Harry Roberts' [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
