// Initializes the `hospitals` service on path `/hospitals`
const createService = require('feathers-mongodb');
const hooks = require('./hospitals.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/hospitals', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hospitals');

  mongoClient.then(db => {
    service.Model = db.collection('hospitals');
  });

  service.hooks(hooks);
};
