
//This is my ViewModel
function LisTExampleModel() {
	
	var self= this;
	//this list is got from a central repo ?
	self.list_persons = ko.observableArray( [{name: "Madhu" , emp: "xyz"},{name: "Marty", emp: "xyz"},{name:"Arun" , emp: "xyz2"},{name:"prashant", emp: "xyzwdfsdf"}] );
	
	//this is what we will dosplay and based on list_persons this will change
	self.list_names = ko.computed(function() {
		lists = [];
		for (var i = 0, len = self.list_persons().length; i<len; i++) {
	       lists.push({name : self.list_persons()[i]["name"]});
	    }; 
		return lists;
	});
	
	// add the content to central repo
	self.updateList =  function() {
		self.list_persons.push({name: "Madhu", emp: "yyy"});
	};
}

//This is when KO does the bindings to UI.
ko.applyBindings(new LisTExampleModel());

