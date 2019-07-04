const cust = require('../cust.config');

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your component name?'
      }
    ], // array of inquirer prompts
    actions: [
        {
          type: 'add',
          path: cust.path.components +'{{ properCase name }}/{{ properCase name }}.js',
          templateFile: './templates/component.hbs'
        },
        {
          type: 'add',
          path: cust.path.components +'{{ properCase name }}/index.js',
          templateFile: './templates/index.hbs'
        }// array of actions
      ]
  });
}