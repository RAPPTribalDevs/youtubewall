/*
	Author:	Robbie Boyd
	Company:RAPP Tribal
	Version:1.0
	
	Some of these functions have been ported from the Casalib libraries for AS3. See http://casalib.org/
*/

var jsStringUtils = window.jsStringUtils || {};

jsStringUtils.utils = (function()
{
	var StringUtils = function()
	{
		
	}
	
	/*
		// Casalib
		Replaces target characters with new characters.
		
		@param source: 		String to replace characters from.
		@param remove: 		String describing characters to remove.
		@param replaceWith: String to replace removed characters.
		@return String with characters replaced.
	*/
	var replaceAll = function(source, remove, replaceWith)
	{
		return source.split(remove).join(replaceWith);
	}
	
	/**
		// Casalib
		Returns a shortened String.
		
		@param source: String to shorten.
		@param trailing: The number of characters to remove from the end of the String.
		@param leading: The number of characters to remove from the begining of the String.
		@param separator: Characters to seperate the begining and the end of the String.
		@return The shortened String.
		@example
			<code>
				trace(StringUtil.truncate('Mississippi', 2, 3, '...')); // Traces "Mis...pi"
			</code>
	*/
	var truncate = function(source, trailing, leading, separator)
	{
		if(leading == null) leading = 0;
		if(separator == null) separator = "";
		if(source.length < (trailing + leading)) return source;
		
		var lead  = source.substr(0, leading);
		var trail = source.substr(-trailing, trailing);
		
		return lead + separator + trail;
	}
	
	return {
		StringUtils : StringUtils,
		replaceAll : replaceAll,
		truncate : truncate
	}
}());