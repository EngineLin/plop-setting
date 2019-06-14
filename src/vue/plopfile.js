// Project constructor setting
const cust = require('./cust.config');

// Default helpers is below.
// camelCase: changeFormatToThis
// snakeCase: change_format_to_this
// dashCase/kebabCase: change-format-to-this
// dotCase: change.format.to.this
// pathCase: change/format/to/this
// properCase/pascalCase: ChangeFormatToThis
// lowerCase: change format to this
// sentenceCase: Change format to this,
// constantCase: CHANGE_FORMAT_TO_THIS
// titleCase: Change Format To Thisd

module.exports = function (plop) {

  // component generator
  plop.setGenerator('component', {
    description: 'ui component',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'Which of type component you want? selects: b or none for basic, d for decorator.'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your component name?'
      }
    ],
    actions: function (data) {
      const actions = [];
      const templateFileAdapter = {
        'b': 'plop/templates/component.basic.hbs',
        'd': 'plop/templates/component.decorator.hbs',
        default: 'plop/templates/component.basic.hbs'
      };
      actions.push({
        type: 'add',
        path: cust.path.components + '{{ properCase name }}.vue',
        templateFile: templateFileAdapter[data.type] || templateFileAdapter.default,
      });

      return actions;
    }
  });

  // view generator

};
