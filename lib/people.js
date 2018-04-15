const Promise = require('bluebird');

module.exports = function(request) {
  return {
    create: function(data) {
      return request.postAsync({
        body: data,
        method: 'POST',
        url: '/people'
      })
      .then(res => {
        if (res.statusCode >= 400) {
          throw new Error(JSON.stringify(res.body));
        }
        return res.body;
      })
    },
    update: function(id, data) {
      return request.putAsync({
        body: data,
        url: '/people/' + id,
      })
      .then(res => {
        return res.body;
      })
    },
    fetch: function(id) {
      return request.getAsync({
        url: '/people/' + id,
      })
      .then(res => {
        return res.body;
      })
    },
    list: function(data) {
      data = data || {};

      return request.postAsync({
        body: data,
        url: '/people/search'
      })
      .then(res => {
        return res.body;
      })
    }
  }
}
