// Project constructor setting
const cust = require('../cust.config');

module.exports = (plop) => {

  plop.setGenerator('service', {

    description: 'generate api control service',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your service name?'
      },
      {
        type: 'input',
        name: 'baseUrl',
        message: 'What\'s your baseUrl path of this service?'
      },
    ],

    actions: function (data) {
      return [
        {
          type: 'add',
          path: cust.path.services + '/{{ properCase name }}Service.js',
          templateFile: 'plop/templates/service.basic.hbs',
        },
      ];
    }
  });
};
