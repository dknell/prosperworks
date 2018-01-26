const Promise = require('bluebird');
const _ = require('lodash');

module.exports = function(options) {

  if (!options.token || !options.email) {
    throw new Error('Please provide credentials');
  }

  const request = Promise.promisifyAll(require('request').defaults({
    baseUrl: 'https://api.prosperworks.com/developer_api/v1',
    json: true,
    headers: {
      'x-pw-accesstoken': options.token,
      'x-pw-application': 'developer_api',
      'x-pw-useremail': options.email,
      'content-type': 'application/json'
    }
  }));

  return {
    users: require('./users')(request),
    leads: {},
    people: require('./people')(request),
    companies: require('./companies')(request),
    opportunities: require('./opportunities')(request),
    projects: {},
    tasks: {},
    activities: {},
    other: require('./other')(request),
    webhooks: {}
  }
}
