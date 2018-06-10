module.exports = function(request) {
  return {
    pipelines: function(data) {
      data = data || {};

      return request.getAsync({
        body: data,
        url: '/pipelines',
      })
      .then(res => {
        return res.body;
      })
    },
    custom_field_definitions: function(data) {
      data = data || {};

      return request.getAsync({
        body: data,
        url: '/custom_field_definitions',
      })
      .then(res => {
        return res.body;
      })
    },
    contact_types: function(data) {
      data = data || {};

      return request.getAsync({
        body: data,
        url: '/contact_types',
      })
      .then(res => {
        return res.body;
      })
    },
    activity_types: function(data) {
      data = data || {};

      return request.getAsync({
        body: data,
        url: '/activity_types',
      })
      .then(res => {
        return res.body;
      })
    }
  }
}
