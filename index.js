var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');
var extend = require('extend');
var main = require('main-loop');
var diff = require('virtual-dom/vtree/diff');
var patch = require('virtual-dom/vdom/patch');
var create = require('virtual-dom/vdom/create-element');
var h = require('virtual-dom/virtual-hyperscript');

app.h = h;
app.state = state;

app.Delegator = require('dom-delegator');

app.channel = function(fn, state) {
  return app.Delegator.allocateHandle(fn.bind(null, state));
};
/* event handlers */
app.send = require('value-event/event');
app.sendValue = require('value-event/value');
app.sendClick = require('value-event/click');
//app.sendSubmit = require('value-event/submit');
//app.sendChange = require('value-event/change');
//app.sendKey = require('value-event/key');

module.exports = app;

function state(data) {
  var cursor = Cursor.from(Immutable.fromJS(data));
  return cursor;
}

function app(elem, state, render, opts) {
  var observ = toObserv(state);
  app.Delegator(opts);
  var loop = main(observ(), render, extend({
    diff: diff,
    create: create,
    patch: patch
  }, opts));
  if (elem) {
    elem.appendChild(loop.target);
  }
  return observ(loop.update);
}

function toObserv(cursor) {
  return function observ(listener) {
    if (!listener) {
      return cursor.deref();
    }

    cursor._onChange = function onChange(data) {
      cursor._rootData = data;
      listener(data);
    };
  };
}
