module.exports = function(request) {
  return {
    list: function(data) {
      data = data || {};

      return request.postAsync({
        body: data,
        url: '/users/search',
      })
      .then(res => {
        return res.body;
      })
    }
  }
}
