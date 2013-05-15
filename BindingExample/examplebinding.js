
//This is my ViewModel
function MyNameBinding() {
	self.myName = "Madhu";
}

//This is when KO does the bindings to UI.
ko.applyBindings(new MyNameBinding());
