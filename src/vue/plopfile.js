const componentMixin = require('./plop/generate-rules/component.rule');
const viewMixin = require('./plop/generate-rules/view.rule');
const routerMixin = require('./plop/generate-rules/router.rule');
const serviceMixin = require('./plop/generate-rules/service.rule');
const utilMixin = require('./plop/generate-rules/util.rule');
const storeModuleMixin = require('./plop/generate-rules/store.module.rule');

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
  componentMixin(plop);

  // view generator
  viewMixin(plop)

  // router generator
  routerMixin(plop)

  // service generator
  serviceMixin(plop)

  // util generator
  utilMixin(plop)

  // store.module generator
  storeModuleMixin(plop)

};
