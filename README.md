# redux-store-mixin
[![NPM](https://nodei.co/npm/redux-store-mixin.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/redux-store-mixin)

[![npm version](https://img.shields.io/npm/v/redux-store-mixin.svg?style=flat-square)](https://www.npmjs.com/package/redux-store-mixin)
[![npm downloads](https://img.shields.io/npm/dm/redux-store-mixin.svg?style=flat-square)](https://www.npmjs.com/package/redux-store-mixin)

Mixin for integrate action creators in methods of vue component

## Install

```js
npm install --save redux-store-mixin

```

## Usage

**1.** Import mixin
```js
import reduxStoreMixin from "redux-store-mixin";
```

**2.** Import our actionCreators
```js
import {actionCreators} from "store/store";
```

**3.** Import mapState-method for useful connect with props from redux-store
```js
import { mapState } from "vuex";
```

**4.** Create vue instance
```js
new Vue({
  mixins: [
                ...
		reduxStoreMixin(actionCreators),
                ...
  ],
  computed: {
		...mapState({
			prop1: state => state.redux.map.prop1,
	      		...
	      		propN: state => state.redux.map.propN
	    	}),
	    	...
  },
  ...
});
```

### Example

Call action:

```js
...
methods: {
  someMethod: function () {
    this.reduxActions("actionName", [...argsForAction]);
  }
},
...
```

For more information [see](https://habrahabr.ru/post/336352/)
