// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('util', {

    description: 'generate util',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your util name?'
      },
    ],

    actions: function (data) {
      return [
        {
          type: 'add',
          path: cust.path.utils + '{{ camelCase name }}.js',
          templateFile: 'plop/templates/util.basic.hbs',
        },
      ];
    }
  });
};
