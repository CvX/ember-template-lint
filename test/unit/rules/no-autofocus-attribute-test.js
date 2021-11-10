'use strict';

const generateRuleTests = require('../../helpers/rule-test-harness');

generateRuleTests({
  name: 'no-autofocus-attribute',

  config: true,

  good: [
    '<input />',
    '<input type="text" disabled="true" />',
    '<input type="password" disabled={{false}} />',
    '{{input type="text" disabled=true}}',
    '{{component "input" type="text" disabled=true}}',
    '<div></div>',
    '<h1><span>Valid Heading</span></h1>',
    '<CustomComponent />',
  ],

  bad: [
    {
      template: '<input autofocus />',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 7,
              "endColumn": 16,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus",
            },
          ]
        `);
      },
    },
    {
      template: '<input type="text" autofocus="autofocus" />',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 19,
              "endColumn": 40,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus=\\"autofocus\\"",
            },
          ]
        `);
      },
    },
    {
      template: '<input autofocus={{this.foo}} />',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 7,
              "endColumn": 29,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus={{this.foo}}",
            },
          ]
        `);
      },
    },
    {
      template: '{{input type="text" autofocus=true}}',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 20,
              "endColumn": 34,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus=true",
            },
          ]
        `);
      },
    },
    {
      template: '{{component "input" type="text" autofocus=true}}',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 32,
              "endColumn": 46,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus=true",
            },
          ]
        `);
      },
    },
    {
      template: '<div autofocus="true"></div>',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 5,
              "endColumn": 21,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus=\\"true\\"",
            },
          ]
        `);
      },
    },
    {
      template: '<h1 autofocus="autofocus"><span>Valid Heading</span></h1>',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 4,
              "endColumn": 25,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus=\\"autofocus\\"",
            },
          ]
        `);
      },
    },
    {
      template: '<CustomComponent autofocus={{this.foo}} />',
      verifyResults(results) {
        expect(results).toMatchInlineSnapshot(`
          Array [
            Object {
              "column": 17,
              "endColumn": 39,
              "endLine": 1,
              "filePath": "layout.hbs",
              "isFixable": false,
              "line": 1,
              "message": "No autofocus attribute allowed, as it reduces accessibility by moving users to an element without warning and context",
              "rule": "no-autofocus-attribute",
              "severity": 2,
              "source": "autofocus={{this.foo}}",
            },
          ]
        `);
      },
    },
  ],
});
