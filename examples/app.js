var app = require('../');
var h = app.h

var state = app(document.body, {foo: 'bar'}, function (state) {
  return h('h1', state.get('foo'))
})

setTimeout(function() {
  state.set('foo', 'bam')
}, 4000)

window.state = state;

