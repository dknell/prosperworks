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
        //console.log(res.statusCode);
        if (res.statusCode >= 400) {
          throw new Error(JSON.stringify(res.body));
        }
        return res.body;
      })
      /*.then(res => {
        return res;
      })
      .catch(res => {
        return res.message;
      })*/
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
