var app = require('../../');
var h = app.h;
var state = app.state({
  channels: {
    beep: app.channel(function(state, value) {
      console.log(value);
      alert('beep');
    }, state),
    boop: app.channel(function(state, v) {
      console.log(v);
    }, state)
  }
});

//var foo = app.Delegator.allocateHandle(state.getIn(['channels','boop']).bind(null, state));

app(document.body, state, function(state) {
  return h('div', [
    h('button',{ 'ev-click': app.sendClick(
        state.getIn(['channels', 'beep'])
    )}, 'FooBAR'),
    h('input', { name: 'bam', 'ev-keyup': app.sendValue(
      state.getIn(['channels', 'boop'])
    )})
  ]);
})