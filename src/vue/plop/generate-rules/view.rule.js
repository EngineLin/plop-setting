// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('view', {

    description: 'page view component',

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
        'basic': 'plop/templates/view.basic.hbs',
        'decorator': 'plop/templates/view.decorator.hbs',
        default: 'plop/templates/component.basic.hbs'
      };

      return [
        {
          type: 'add',
          path: cust.path.views + '{{ properCase name }}/{{ properCase name }}Page.vue',
          templateFile: templateFileAdapter[data.type] || templateFileAdapter.default,
        },
        {
          type: 'add',
          path: cust.path.views + '{{ properCase name }}/index.js',
          templateFile: 'plop/templates/index.hbs',
        }
      ];
    }
  });
};
