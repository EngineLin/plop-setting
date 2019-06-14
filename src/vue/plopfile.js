var path = require('path')

module.exports = function (plop) {

  // component generator
  plop.setGenerator('component', {
    description: 'ui component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, 'src/{{name}}.vue'),
        template: 'templates/component.basic.hbs'
      }
    ],
  });

  // view generator

};
