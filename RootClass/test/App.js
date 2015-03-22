define(
	["../RootClass", "components/MyComp"],
	function (RootClass, MyComp)
	{
		console.log("App running");
		new MyComp();

		return null;
	}
);