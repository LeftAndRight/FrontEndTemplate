(function(){
	var MyComp = RootClass.extend({
		initialize : function()
		{
			console.log("MyComp: initialize: " + _);
		}
	});

	MyComp.registerClass(MyComp, "MyComp", ["underscore", "../../RootClass"]);
	console.log("MyComp registered");
})();