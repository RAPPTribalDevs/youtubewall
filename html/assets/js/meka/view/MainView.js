/*
	Meka JS javascript framework
	Version 1.0
	RAPPTribal
	Author: Robbie Boyd

	MainView
	Handle all View 
*/

jsScrape.youtube.view = function()
{	
	// Private vars
	var _mainModel;
	var _addressController;
	
	var _animateInTimeLine;
	
	// Public vars
	var playerArray = [];
	var countint = 0;
	
	// Constructor
	var MainView = function(ac, mm)
	{
		_addressController = ac;
		_mainModel = mm;
		
		$('body').bind('initView', init);
		
		console.log("MainView");
		
		return this;
	}
	
	/*
		public
		Show/Hide the preloader if loading in dynamic content
	*/
	var handlePreloader = function(show)
	{
		if(show)
		{
			$("#preloader").show();
		} else {
			$("#preloader").hide();
		}
	}
	
	/*
		public
		Fired from the Model once all data has been loaded. Start displaying elements
	*/
	var init = function()
	{
		$('body').unbind('initView', init); 
			
		handlePreloader(false);
		addListeners();	
		_addressController.initJAddress();
	}
	
	var animateIn = function()
	{
		
	}
	
	var animateOut = function()
	{
		
	}
	
	/*
		public
		Add event listeners
	*/
	var addListeners = function()
	{
		$('body').bind('AddressController.UPDATE', handleMainContent);
	}
	
	/*
		public
		Remove event listeners
	*/
	var removeListeners = function()
	{
		
	}
	
	/*
		public
		Update page content.
		
		@param		pageID		The Page ID to update the content from. Usually will be called from the AddressController but 
								can be updated from anywhere. The advantage with using the AddressController is the URL will be updated
	*/
	var handleMainContent = function()
	{
		var divs = "";
		var data = _mainModel.getVideoSliderData();
		
		createVideoHandler();
		
		var i = 0;
		for(i = 0; i < data.length; i++)
		{
			var vidDiv = '<div id="video_'+i.toString()+'" class="videoishere"></div>';	
			
			divs += vidDiv;
		}
		
		$('#wrapper').append(divs);
		
		i = 0;
		for(i = 0; i < data.length; i++)
		{
			var loop = (i == 0) ? 1 : 0;
			var ytID = data[i].id.$t.split("/")[6];
			var youtubePlayer = new YT.Player('video_'+String(i), {
			width: '250px',
			height: '141px',
			wmode: 'transparent',
			videoId: ytID.toString(),
			playerVars : {controls : 2, rel : 0, showinfo : 0, modestbranding : 1, fs : 0, wmode: 'transparent', controls:0, disablekb:1, cc_load_policy:0 , iv_load_policy:3, loop:loop},
			events: {
				'onReady': onPlayerReady
				}
			});
			playerArray.push(youtubePlayer);
		}
	}
	
	function createVideoHandler()
	{
		$('#wrapper').append('<div id="video_handler" class="videoishere"></div>');
		var youtubePlayer = new YT.Player('video_handler', {
			width: '250px',
			height: '141px',
			wmode: 'transparent',
			videoId: '0IJoKuTlvuM',
			playerVars : {controls : 2, rel : 0, showinfo : 0, modestbranding : 1, fs : 0, wmode: 'transparent', controls:0, disablekb:1, cc_load_policy:0 , iv_load_policy:3},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
				}
			});
		playerArray.push(youtubePlayer);
	}
	
	function loadVideo(id)
	{
		playerArray[id].playVideo();
		playerArray[id].setPlaybackQuality('small');
		if(id > 0) playerArray[id].setVolume(0);
		playerArray[id].pauseVideo();
	}
	
	function onPlayerReady(ev)
	{
		countint++;
		if(countint == playerArray.length)
		{
			for(var i = 0; i < playerArray.length; i++)
			{
				setTimeout(loadVideo(i), 50*i);
			}		
			
			$('#wrapper').append('<a href="javascript:void(0)" class="play">Play</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
			$('#wrapper').append('<a href="javascript:void(0)" class="pause">Pause</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
			$('#wrapper').append('<a href="javascript:void(0)" class="again">Again</a>');	
			
			$('a.play').click(function()
			{
				i = 0;
				for(i = 0; i < playerArray.length; i++)
				{
					playerArray[i].playVideo();
				}
			});
			
			$('a.pause').click(function()
			{
				i = 0;
				for(i = 0; i < playerArray.length; i++)
				{
					playerArray[i].pauseVideo();
				}
			});
			
			$('a.again').click(function()
			{
				i = 0;
				for(i = 0; i < playerArray.length; i++)
				{
					playerArray[i].seekTo(0);
				}
			});
			
		}
	}
	
	function onPlayerStateChange(ev)
	{
		
		switch(ev.data)
		{
			case YT.PlayerState.ENDED :
				for(var i = 0; i < playerArray.length; i++)
				{
					playerArray[i].seekTo(0);
				}	
			break;
			
			case YT.PlayerState.PLAYING :
				
			break;
			
			case YT.PlayerState.PAUSED :
			
			break;
			
			case YT.PlayerState.BUFFERING :
			
			break;
			
			case YT.PlayerState.CUED :
			
			break;
			
			case -1 :
			break;
		}
	}
	
	return {
		MainView : MainView, 
		
		// Public Functions
		init : init,
		handlePreloader : handlePreloader,
		animateIn : animateIn,
		animateOut : animateOut,
		addListeners : addListeners,
		removeListeners : removeListeners,
		handleMainContent : handleMainContent
		
		// public vars
	}
};