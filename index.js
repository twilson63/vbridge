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
module.exports = app;

function state(data) {
  return Cursor.from(Immutable.fromJS(data));
}

function app(elem, state, render) {
  var observ = toObserv(state);
  var loop = main(observ(), render, extend({
    diff: diff,
    create: create,
    patch:patch
  }));
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
