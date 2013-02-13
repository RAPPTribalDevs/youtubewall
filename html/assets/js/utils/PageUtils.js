/*
	Author:	Robbie Boyd
	Company:RAPP Tribal
	Version:1.0
	
	Some of these functions have been ported from the Casalib libraries for AS3. See http://casalib.org/
*/

var jsPageUtils = window.jsPageUtils || {};

jsPageUtils.utils = (function()
{
	var PageUtils = function()
	{
		
	}
	
	var existsInArray = function(array, string)
	{
		var returnObj = {};
		for(var i = 0; i < array.length; i++)
		{
			if(array[i] == string)
			{
				returnObj.bool = true;
				returnObj.key = i;
				break;
			} else {
				returnObj.bool = false;
			}
		}
		
		return returnObj;
	}
	
	return {
		PageUtils : PageUtils,
		
		existsInArray : existsInArray
	}
}());