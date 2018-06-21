export default function PubSub() {
	this._listeners = {};
}

PubSub.prototype = {
	on: function(name, func, priority) {
		var l = this._listeners;
		priority = priority === undefined ? l.length : priority;
		if (l[name] === undefined) l[name] = [];
		l[name].splice(priority, 0, func);
	},
	off: function(name, func) {
		var l = this._listeners;
		if (l[name]) l[name].splice(l[name].indexOf(func), 1);
	},
	once: function(name, func) {
		var me = this;
		//use a dummy function with "on" that way it can be referenced and removed after execution
		me.on(name, function _fn() {
			//named functions can reference themselves by their name
			me.off(name, _fn);
			func.apply(this, arguments);
		});
	},
	emit: function(name, message) {
		if (this._listeners[name] === undefined) return;
		var i,
			l = this._listeners[name],
			len = l.length;
		for (i = 0; i < len; i++) {
			l[i].call(this, message); //pass deep copy
		}
	}
};
