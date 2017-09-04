(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global['redux-store-mixin'] = factory());
}(this, (function () { 'use strict';

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function getReduxStoreMixin(actionCreators) {
	var methodsRedux = {};

	var _loop = function _loop(method) {
		methodsRedux[method] = function () {
			this.$store.dispatch(actionCreators[method].apply(actionCreators, arguments));
		};
	};

	for (var method in actionCreators) {
		_loop(method);
	}

	var reduxStoreMixin = {
		methods: {
			actionsRedux: function actionsRedux() {
				var _methodsRedux$name;

				var name = arguments[0],
				    _arguments = Array.prototype.slice.call(arguments),
				    newArgs = _arguments.slice(1),
				    newArgs2 = [this].concat(toConsumableArray(newArgs));


				(_methodsRedux$name = methodsRedux[name]).call.apply(_methodsRedux$name, newArgs2);
			}
		}
	};

	return reduxStoreMixin;
}

return getReduxStoreMixin;

})));
