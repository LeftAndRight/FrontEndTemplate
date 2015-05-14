// Docs: http://jasmine.github.io/2.3/introduction.html

// Example template is a text file loaded using the text requirejs plugin
// Useful for loading html snippets for testing stuff in the DOM
define(["underscore", "jquery", "src/js/index", "text!../resources/ExampleTemplate.tpl"], function(_, $, ExampleTemplate){

	console.log("ExampleTemplate: ", ExampleTemplate);

    describe("Example test suite", function() {

		beforeEach(function(){
			// Install the ajax mocker for each test
			jasmine.Ajax.install();
		});
		afterEach(function(){
			// Uninstall the ajax mocker for each test
			jasmine.Ajax.uninstall();
		});

        it("Example test with dummy ajax example", function() {
			// Create spy to inspect
			var successHandler = jasmine.createSpy("successHandler");

			// Run normal ajax call
			$.ajax({
				url		: "/someurl",
				success	: successHandler
			});

			// Manually respond to the last ajax call
			jasmine.Ajax.requests.mostRecent().respondWith({
				status			: 200,
				responseText	: JSON.stringify({name:"hello world"})
			});

			// Test success handler with arguments
			expect(successHandler).toHaveBeenCalledWith(
				jasmine.objectContaining({name:"hello world"}),
				"success",
				jasmine.any(Object)
			)
        });
    });
});