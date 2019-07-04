const componentMixin = require('./plop/generate-rules/component.rule');
const containerMixin = require('./plop/generate-rules/container.rule');
const pageMixin = require('./plop/generate-rules/page.rule');

module.exports = function (plop) {

  // component generator
  componentMixin(plop);

  // container generator
  containerMixin(plop);

  // page generator
  pageMixin(plop);
};
