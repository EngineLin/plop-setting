// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('router', {

    description: 'generate router',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your router name?'
      },
    ],

    actions: function (data) {
      return [
        {
          type: 'add',
          path: cust.path.router + '{{ camelCase name }}.router.js',
          templateFile: 'plop/templates/router.basic.hbs',
        },
      ];
    },
  });
};
