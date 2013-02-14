/*
	Meka JS javascript framework
	Version 1.0
	RAPPTribal
	Author: Robbie Boyd

	MainModel
	Handle all the external data loads. 
	Static 'consts' are here as well.
*/

jsScrape.youtube.model = function()
{
	// consts
	var START_PAGE = 'top-content';
	var DOMAIN = String("");
	
	// Public vars
	var pagesData = [];
	var currentPageID = START_PAGE;
	var allPageNames = [];
	
	var videoSliderData = {};
	
	// Private vars
	var _addressController;
	var _dataPath = ["data/data.json", "http://gdata.youtube.com/feeds/api/videos/-"];
	var _searchKey = "";
	
	// Constructor
	var MainModel = function(ac)
	{
		_addressController = ac;
		
		return this;
	}
	
	var init = function()
	{
		
	}
	
	/**
		public
		Load the init data. eg. Pages or config
	*/
	var loadData = function()
	{
		var phrase = "harlem shake";
		var wordsArray = phrase.split(' ');
		var words = "";
		for(var i=0; i < wordsArray.length; i++)
		{
			words += '/%7Bhttp%3A%2F%2Fgdata.youtube.com%2Fschemas%2F2007%2Fkeywords.cat%7D'+wordsArray[i];
		}
		words += '?max-results=35&alt=json&format=5';
		console.log('words : ' + _dataPath[1]+words);
		$.ajax({
		 url: _dataPath[1]+words,
		 dataType: 'json',
		 contentType: 'application/json',
		 success: loadDataSuccess,
		 error : function(jqXHR, textStatus, errorThrown)
		 {
			 loadDataError(errorThrown);
		 }
		});
	}
	
	/**
		private
		Called if the init data fails to load
		@param		error		Error message	
	*/
	function loadDataError(error)
	{
		console.log('Load Error : ' + error);
	}
	
	/**
		private
		Called when the init data successfully loads
		@param		data 		Data Object, most likely a JSON Object	
	*/
	function loadDataSuccess(data)
	{
		/*
		 Example : Parse JSON data that represents a page
		*/
		videoSliderData = new Array();
		videoSliderData = data.feed.entry;
		
		// Tell View to init
		$('body').trigger('initView');
	}
	
	/**
		public
		@param		id		Number The id of particular entry we want
		
		returns		Array
	*/	
	var getVideoSliderData = function(id)
	{
		return (id == undefined) ? videoSliderData : videoSliderData[id] ; 
	}
	
	return {
		MainModel : MainModel,
		
		// return Public functions
		init : init,
		loadData : loadData,
		
		// return 'static' consts
		START_PAGE : START_PAGE,
		DOMAIN : DOMAIN,
		
		// return Public vars
		pagesData : pagesData,
		allPageNames : allPageNames,
		currentPageID : currentPageID,
		
		getVideoSliderData : getVideoSliderData
	}
};