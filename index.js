var main = require('main-loop')
var Delegator = require('dom-delegator')
var State = require('state-change')
var vdom = {
  diff: require('virtual-dom/diff'),
  create: require('virtual-dom/create-element'),
  patch: require('virtual-dom/patch')
}

app.h = require('virtual-dom/h')
module.exports = app;

function app (elem, state, render) {
  Delegator()
  var cursor = State(state)
  var loop = main(cursor, render, vdom)
  if (elem) elem.appendChild(loop.target)
  State.change(cursor, loop.update)
  return cursor
}