# vBridge

A modular collection of libraries that embrace the component like pattern of application building using ImmutableJS, Virtual-DOM, and HyperScript.  Inspired by Mercury and allows the implementor to choose their own eventing/routing system, `Bridge` just focuses on state and rendering.

``` js
var app = require('vbridge');
var h = app.h;

var initialState = {
  title: 'Hello World' 
};

var state = app(document.body, initialState, function render(state) {
  return app.h('h1', state.get('title'));
});
```

The state is an ImmutableJS Cursor which enables you to get and set based on getters and setters.

## What about events and routing?

* [page.js]() works great with bridge and there are some examples to take a look.
=======

## Install

``` js
npm install vbridge
```

## In the Wild

* [http://html2hscript.herokuapp.com/](http://html2hscript.herokuapp.com/) [Gitub](https://github.com/twilson63/html2hscript.herokuapp.com)
