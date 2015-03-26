var main = require('main-loop')
var Delegator = require('dom-delegator')
var vdom = {
  diff: require('virtual-dom/diff'),
  create: require('virtual-dom/create-element'),
  patch: require('virtual-dom/patch')
}

app.h = require('virtual-dom/h')
app.State = require('state-change')

module.exports = app;

function app (elem, state, render) {
  Delegator()
  var loop = main(state, render, vdom)
  elem.appendChild(loop.target)
  app.State.change(state, loop.update)
}