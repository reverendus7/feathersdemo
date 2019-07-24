

const addTimestamp = require('../../hooks/add-timestamp');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [addTimestamp({ name: 'createdAt' })],
    update: [addTimestamp({ name: 'updatedAt' })],
    patch: [addTimestamp({ name: 'updatedAt' })],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
