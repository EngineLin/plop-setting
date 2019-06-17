// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('store.module', {

    description: 'generate store module',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your module name?'
      },
    ],

    actions: function (data) {
      return [
        {
          type: 'add',
          path: cust.path.modules + '{{ camelCase name }}.js',
          templateFile: 'plop/templates/store.module.basic.hbs',
        },
      ];
    }
  });
};
