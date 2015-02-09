var page = require('page');
var h = require('bridge').h;
var recordService = require('services/record');
var writer = require('writelog');

function component(state) {
  state.set('recordform', {
    title: 'New Record'
  });

  // question/fact
  page('/records/new', function(ctx) {
    state.set('href', '/records/new');
    //state.set('spinning', true);
    //writer.post('activity', { action: 'list', model: 'home'})
  });

  page('/records/create', function(ctx) {
    state.set('spinning', true);
    writer.post('activity', { action: 'create', model: 'record', body: ctx.body})
  });

  // answer from service
  recordService.on('created', function(content) {
    page.redirect('/home');
  });

}

function render(state) {
  return h('form', { action: '/records/create' }, [

  ]);
}

component.render = render;
module.exports = component;

