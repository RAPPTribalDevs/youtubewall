/*
	Meka JS javascript framework
	Version 1.0
	RAPPTribal
	Author: Robbie Boyd

	AddressController
	Handle all the JQuery Address and page error checking
	
*/

jsScrape.youtube.addresscontroller = function()
{
	// consts
	
	// Public vars
	
	// Private vars
	
	// Constructor
	var AddressController = function()
	{
		return this;
	}
	
	/*
		public
		Any object that will handle a 'page change' calls this. The id will be a the id of the element
		
		@param		to		String page to browse to
	*/
	var changePage = function(to)
	{
		$.address.value(to);
	}
	
	var initJAddress = function()
	{
		$.address.init(function(event) {
		
		}).change(function(event) {
		  jAddressChange();
		});
		
		jAddressChange();
	}
	
	/*
		private
		Handles the JQuery Address. 
		Checks the query string to see if any page is after the #/ and if not reverts to use the 
		default START_PAGE that has been declared in the MainModel
	*/
	function jAddressChange()
	{
		//console.log($.address.value());
		var queryString = $.address.value().substring(1);
		var pageName = (queryString.length > 0) ? queryString : 'top-content' ;
		/*var exists = jsPageUtils.utils.existsInArray(_mainModel.allPageNames, pageName);
		if(exists.bool)
		{
			_mainModel.currentPageID = Number(exists.key);
		} else {
			pageName = "Page404";	
		}*/
		
		$.address.title(pageName);
		$.address.value(pageName);
		
		$('body').trigger('AddressController.UPDATE');
	}
	
	return {
		AddressController : AddressController,
		
		// return Public functions
		initJAddress : initJAddress,
		changePage : changePage
		
		// return 'static' consts
		
		// return Public vars
	}
};