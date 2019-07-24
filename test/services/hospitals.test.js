const app = require('../../src/app');

describe('\'hospitals\' service', () => {
  it('registered the service', () => {
    const service = app.service('hospitals');
    expect(service).toBeTruthy();
  });
});
