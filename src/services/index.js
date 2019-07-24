const hospitals = require('./hospitals/hospitals.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(hospitals);
};
