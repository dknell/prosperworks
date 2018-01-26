module.exports = function(request) {
  return {
    create: function(data) {
      return request.postAsync({
        body: data,
        url: '/companies',
      })
      .then(res => {
        return res.body;
      })
    },
    fetch: function(id) {
      return request.getAsync({
        url: '/companies/' + id,
      })
      .then(res => {
        return res.body;
      })
    },
    list: function(data) {
      data = data || {};

      return request.postAsync({
        body: data,
        url: '/companies/search',
      })
      .then(res => {
        return res.body;
      })
    }
  }
}
