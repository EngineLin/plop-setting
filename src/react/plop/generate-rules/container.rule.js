const cust = require('../cust.config');

module.exports = plop => {
  plop.setGenerator('container', {
    description: 'Create container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your container name?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: cust.path.container +'{{ properCase name }}/{{ properCase name }}.js',
        templateFile: './templates/container.hbs'
      },
      {
        type: 'add',
        path: cust.path.container +'{{ properCase name }}/index.js',
        templateFile: './templates/index.hbs'
      }
    ] // array of actions
  })
}