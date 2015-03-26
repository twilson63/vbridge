var app = require('../');
var h = app.h
var state = app.State({foo: 'bar'})

app(document.body, state, function (state) {
  return h('h1', state.get('foo'))
})

setTimeout(function() {
  state.set('foo', 'bam')
}, 4000)

window.state = state;

