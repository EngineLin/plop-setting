// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('component', {

    description: 'ui component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your component name?'
      },
      {
        type: 'input',
        name: 'type',
        message: 'Which of type component you want? selects: b or none for basic, d for decorator.'
      },
    ],

    actions: function (data) {
      const templateFileAdapter = {
        'b': 'plop/templates/component.basic.hbs',
        'd': 'plop/templates/component.decorator.hbs',
        default: 'plop/templates/component.basic.hbs'
      };

      return [
        {
          type: 'add',
          path: cust.path.views + '{{ properCase name }}',
        },
        {
          type: 'add',
          path: cust.path.views + '{{ properCase name }}/{{ properCase name }}.vue',
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
