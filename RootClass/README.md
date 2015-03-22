RootClass
=========

Stand alone base class for javascript classes to allow extension.


Partially copied from Backbone's view, model and router implementations.

###Use:
```javascript
var MyClass = RootClass.extend({
  myInstanceFunc:function()
  {
    // code here
  }
},
{
  myStaticFunc : function()
  {
    
  }
});

// Extension and overriding
var MyExtendedClass = MyClass.extend({
  myInstanceFunc:function()
  {
    // caling the super definition
    this.callSuper(MyClass, "myInstanceFunc", arguments);
  }
});

// To register on the window or as an amd module use:
MyExtendedClass.registerClass(MyExtendedClass, "MyExtendedClass", ["underscore", "../../RootClass"]);
// window.MyExtendedClass will now be available
```

