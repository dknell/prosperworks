module.exports = function(request) {
  return {
    create: function(data) {
      return request.postAsync({
        body: data,
        url: '/opportunities',
      })
      .then(res => {

        return res.body;
      })
    },
    fetch: function(id) {
      return request.getAsync({
        url: '/opportunities/' + id,
      })
      .then(res => {
        return res.body;
      })
    },
    list: function(data) {
      data = data || {};

      return request.postAsync({
        body: data,
        url: '/opportunities/search',
      })
      .then(res => {
        return res.body;
      })
    }
  }
}
