/*
	Author:	Robbie Boyd
	Company:RAPP Tribal
	Version:1.0
*/

var jsFlashUtils = window.jsFlashUtils || {};

jsFlashUtils.utils = (function()
{
	var jsFlashUtils = function()
	{
		
	}
	
	/**
		Embed a Flash swf into the page
		
		@param id: 			String	This SWF's Flash ID
		@param div: 		String	The div we want to embed into
		@param swf:			String	Path to the swf
		@param width:		Number	The width of the SWF. (Can be String "100%)".	
		@param height:		Number	The height of the SWF. (Can be String "100%)".
		@param vars:		Object	The Flash vars
		@attrClass:			String	A class name only appended if not null
	*/
	var embedSwf = function(id, div, swf, width, height, vars, attrClass)
	{
		// For version detection, set to min. required Flash Player version, or 0 (or 0.0.0), for no version detection. 
		var swfVersionStr = "11.1.0";
		// To use express install, set to playerProductInstall.swf, otherwise the empty string. 
		var xiSwfUrlStr = "playerProductInstall.swf";
		var flashvars = vars;
		var params = {};
		params.quality = "high";
		params.bgcolor = "#ffffff";
		params.allowscriptaccess = "always";
		params.allowfullscreen = "true";
		var attributes = {};
		attributes.id = id;
		attributes.name = id;
		attributes.align = "middle";
		attributes.class = attrClass;
		swfobject.embedSWF(
			swf, div, 
			width, height, 
			swfVersionStr, xiSwfUrlStr, 
			flashvars, params, attributes);
		// JavaScript enabled so display the flashContent div in case it is not replaced with a swf object.
		swfobject.createCSS("#"+div, "display:block;text-align:left;");
	}
	
	var debug = function(trace, showAlert)
	{
		console.log(trace);
		if(showAlert) alert(trace);
	}
	
	return {
		jsFlashUtils : jsFlashUtils,
		embedSwf : embedSwf,
		debug : debug
	}
}());