var app = require('../../');

var state = app.state({
  title: 'Hello World!'
});

app(document.body, state, function(state) {
  return app.h('h1', state.get('title'))
});
