// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('component', {

    description: 'ui component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your component name?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Which type of component are you want?',
        choices: ['basic', 'decorator'],
      },
    ],

    actions: function (data) {

      const templateFileAdapter = {
        'basic': 'plop/templates/component.basic.hbs',
        'decorator': 'plop/templates/component.decorator.hbs',
        default: 'plop/templates/component.basic.hbs'
      };

      return [
        {
          type: 'add',
          path: cust.path.components + '{{ properCase name }}/{{ properCase name }}.vue',
          templateFile: templateFileAdapter[data.type] || templateFileAdapter.default,
        },
        {
          type: 'add',
          path: cust.path.components + '{{ properCase name }}/index.js',
          templateFile: 'plop/templates/index.hbs',
        }
      ];
    }
  });
};
