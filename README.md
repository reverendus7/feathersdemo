# feathersdemo

> A demonstration project about FeathersJS

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Demo steps

### Step 0 - Installing the CLI

```
npm install @feathersjs/cli -g
feathers --version
```

### Step 1 - Create the app

```
feathers generate app
```

Take a look at

- `package.json`
- `config/default.json`
- `config/production.json`
- `public/index.html`
- `src/index.js`
- `src/app.js`
- `src/app.hooks.js`

### Step 2 - Generate a service

```
feathers generate service
```

Take a look at

- `package.json`: Some dependencies has been added
- `config/default.json`, `src/mongodb.js` and `src/app.js`: DB references appear
- `src/services/index.js` and `src/services/hospitals`: The service has been added

You can use the `PostmanCollection.js` in order to test the service

### Step 3 - Let's use Hooks

```
feathers generate hook
```

Take a look at

- `src/services/hospitals/hospitals.hooks.js`
- `src/hooks/add-timestamp.js`

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/feathersdemo; npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

**0.1.0**

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
