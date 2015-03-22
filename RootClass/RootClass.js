/**
 * VERSION: 0.0.1
 */
(function(){
	// Create local var for this
	var window		= this;
	// Setup the constructor and call initialize
	var RootClass	= function () {
		this.initialize.apply(this, arguments);
	};
	function extend(source, additional){
		if (source && additional) {
			for (var propName in additional) source[propName] = additional[propName];
		}
	}
	// Add extended calls
	extend(RootClass.prototype, {
		initialize : function() {},

		callSuper : function(superClass, methodName, arguments){
			superClass.prototype[methodName].apply(this, arguments);
		}
	});
	// Setup extension prototype manipulation
	RootClass.extend = function(instanceProps, staticProps) {
		var parent	= this;
		var child;
		if (instanceProps && instanceProps.hasOwnProperty("constructor")) {
			child	= instanceProps.constructor;
		} else {
			child	= function(){ parent.apply(this, arguments); };
		}
		extend(child, parent);
		extend(child, staticProps);
		var Surrogate		= function(){ this.constructor = child; };
		Surrogate.prototype	= parent.prototype;
		child.prototype		= new Surrogate;

		if (instanceProps) extend(child.prototype, instanceProps);
		child.__super__		= parent.prototype;
		return child;
	};
	// Add registration static method
	extend(RootClass, {
		registerClass : function(classDef, classPath, dependencies){
			// Node module definition
			if ( typeof module === "object" && module && typeof module.exports === "object" ) {
				module.exports = classDef;
			}
			// AMD module definition
			else if (typeof define === "function" && define.amd){
				define((dependencies || []), function () { return classDef; } );
			}
			// Standard window definition
			if (typeof window === "object" && typeof window.document === "object") {
				if (classPath){
					if (classPath.indexOf(".") != -1){
						var obj		= window;
						var split	= classPath.split(".");
						for (var i = 0; i < split.length; i++){
							if (i == split.length - 1){
								obj[split[i]] = classDef;
							}
							else{
								if (obj[split[i]] == null){
									obj[split[i]] = {};
								}
								obj = obj[split[i]];
							}
						}
					}
					else{
						window[classPath] = classDef;
					}
				}
			}
		}
	});
	RootClass.registerClass(RootClass, "RootClass");
}).call(this);
