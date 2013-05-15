
//This is my ViewModel
function MyNameBinding() {
	self.myName = ko.observable("Madhu");
	
	//This listens for the name changes (Input element changes the name)
	self.myName.subscribe(function () {
		alert("Name Chnaged");
	});

}

//This is when KO does the bindings to UI.
ko.applyBindings(new MyNameBinding());
