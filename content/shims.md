---
title: Prefer shims over destructuring (> Ember 2.16)
---

    // Ember < 2.16 - BAD
    import Ember from 'ember';
    const { Controller, service } = Ember;

    // Ember > 2.16 - GOOD
    import Controller from '@ember/controller';
    import { inject as service } from '@ember/service';

> JavaScript modules make the framework easier to document, make the distinction between public and private API much easier to maintain, and provide opportunities for performance work such as tree-shaking.
> https://emberjs.com/blog/2017/09/01/ember-2-15-released.html

Atom package that helps with importing https://atom.io/packages/ember-snippets
