var jsScrape = window.jsScrape || {};

jsScrape.youtube = (function()
{
	// Public vars
	var mainModel;
	var mainView;
	var addressController;
	
	// Private vars
	
	// Constructor
	var Main = function()
	{
		/*
			Init Class paths
		*/
		this.addressController = jsScrape.youtube.addresscontroller().AddressController();
		this.mainModel = jsScrape.youtube.model().MainModel(this.addressController);
		this.mainView = jsScrape.youtube.view().MainView(this.addressController, this.mainModel);
		
		// Tell Model to load the initial data
		this.mainModel.init();
		this.mainModel.loadData();
	}
	
	return {
		Main : Main, 
		
		addressController : addressController,
		mainModel : mainModel,
		mainView : mainView
	}
}());