var page = require('page');
var h = require('bridge').h;
var homeService = require('services/home');
var writer = require('writelog');

function component(state) {
  state.set('home', {
    title: 'Home Foo'
  });

  // question/fact
  page('/home', function(ctx) {
    state.set('href', '/home');
    state.set('spinning', true);
    writer.post('activity', { action: 'list', model: 'home'})
  });

  // answer from service
  homeService.on('content', function(content) {
    state.set('spinning', false);
    var homeState = state.get('home');
    homeState.set('content', content);
  });

}

function render(state) {
  return h('h1', 'Welcome Home');
}

component.render = render;
module.exports = component;

