export default function getReduxStoreMixin(actionCreators) {
	let methodsRedux = {};

	for (let method in actionCreators) {
		methodsRedux[method] = function() {
			this.$store.dispatch(actionCreators[method](...arguments));
		}
	};

	const reduxStoreMixin = {
		methods: {
			actionsRedux: function() {
				let name = arguments[0],
				[, ...newArgs] = arguments,
				newArgs2 = [this, ...newArgs];

				methodsRedux[name].call(...newArgs2);
			},
		}
	};

	return reduxStoreMixin;
};