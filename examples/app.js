var app = require('bridge');
var page = require('page');

// get components
var homeComponent = require('./components/home-component');
var newRecordComponent = require('./components/new-record-component');

var state = app.state({
  title: 'BeepBoop',
  href: '/'
});

// init components
homeComponent(state);
newRecordComponent(state);

page();

// manage render tree
app(document.body, state, function(state) {
  var content = h('h1', 'Not Found');

  if (state.get('href') === '/home') {
    content = homeComponent.render(state.home);
  }

  return h('div.container', [
    // menu
    h('ul.menu', [
      h('li', [
        h('a', { href: '/home'}, 'Home'),
        h('a', { href: '/records/new'}, 'NewRecord')
      ])
    ]),
    content
  ])

})