# plop-setting

## Install first
You need to install global plop and local plop.

- npm install -g plop

if using yarn

- yarn global add plop

## copy files to your project depend on your framework is Vue or React

if your project is vue

- copy src/vue/plop folder and src/vue/plopfile.js file to your project

if your project is react

- none... has ever used React yet

## usage

- basic usage:

just enter "plop" and follow bash selector

```bash
plop

// ... then you can generate as follow
❯ component - ui component
  view - page view component
  router - generate router
  service - generate api control service
  util - generate util
  store.module - generate store module
```

you can enter step by step, or just enter at once

```javascript
// util
plop util signup
```

- generate component:

ui component and page view has two type: 'basic' and 'decorator'

```bash
plop component <name> <type>

example:

// view
plop util login basic

// ui component
plop component singup decorator
```

- generate service:

servcie need to enter base url at last

```javascript
// service
plop service user /api/user
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

## customize template

find out /plop/templates and change the template you want.

follow [Handlebars](https://handlebarsjs.com/) rules
 


