# plop-setting

## Install first
You need to install global plop.

- npm install -g plop

if using yarn

- yarn global add plop

## copy files to your project depend on your framework is Vue or React

if your project is vue

- copy src/vue/plop folder and src/vue/plopfile.js file to your project

if your project is react

- none... has ever used React yet

## usage

- generate component:

type can be "b" for basic vanilla javascript Vue or "d" for decorator Vue component
that was build by "vue-property-decorator".

```bash
plop component <type> <name>

example:

plop component -d user
```

## customize project constructor

you can setting /plop/cust.config.js file to help plop know where you want to put the generated file.

```javascript
// /plop/cust.config.js

module.exports = {
  path: {
    components: "src/components/",
    views: "src/views/",
    services: "src/services/",
    utils: "src/utils/",
    router: "src/router/",
    modules: "src/store/modules/",
  },
  ...
};
```
you can change the config file to fit your own project constructor.

*Notice* make sure the path string close with '/'
 


