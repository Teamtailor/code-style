'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const StaticSiteJson = require('broccoli-static-site-json');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  let contentsJson = new StaticSiteJson(`content`, {
    contentFolder: `content`,
    type: 'contents',
    references: ['language'],
    collections: [
      {
        src: `content`,
        output: `all.json`,
      },
    ],
  });

  let languageJson = new StaticSiteJson(`language`, {
    contentFolder: `language`,
    type: 'languages',
    collections: [
      {
        src: `language`,
        output: `all.json`,
      },
    ],
  });

  app.import('node_modules/github-markdown-css/github-markdown.css');

  return new BroccoliMergeTrees([app.toTree(), contentsJson, languageJson]);
};
