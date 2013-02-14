var main;
var canSifr = false;
var isLoggedIntoFacebook = false;
var baseUrl = '';

$('#preloader').show();

Modernizr.load([
  // Presentational polyfills
  {
	  // Logical list of things we would normally need
	  test : !Modernizr.fontface || Modernizr.testforie,
	 
	  yep : ['assets/css/sifr.css'],
	
	  // Modernizr.load loads css and javascript by default
	  nope : ['assets/css/westpacfont.css']
  },
  // Functional polyfills
  {
	  // You can also give arrays of resources to load.
	  both : [
	  	// libs
		'assets/js/libs/jquery.pngFix.js',
		'assets/js/libs/jquery.uniform.min.js',
		'assets/js/libs/jquery.timeago.js',
      	'assets/js/libs/fancybox/jquery.fancybox-1.3.4.js',
        'assets/js/libs/tweenmax/TweenMax.js',
        'assets/js/libs/tweenmax/TimelineMax.js',
        'assets/js/libs/swfobject.js',
		
		// Site Meka
		'assets/js/utils/StringUtils.js',
		'assets/js/utils/PageUtils.js',
		'assets/js/utils/NumberUtils.js',
		'assets/js/utils/FlashUtils.js',
      	'assets/js/meka/Main.js',
		'assets/js/meka/controller/AddressController.js',
        'assets/js/meka/model/MainModel.js',
		'assets/js/meka/view/MainView.js',
		
		'//www.youtube.com/iframe_api'
	],
	complete : function () {
	  // Run this after everything in this group has downloaded
	  // and executed, as well everything in all previous groups
	  
		// Shifted to onYouTubeIframeAPIReady
	}
  }
]);

if(!Modernizr.fontface || Modernizr.testforie){
	document.write('\x3Cscript src="assets/js/sifr-config.js">\x3C/script>');
	canSifr = true;
}

/**
	Callback fired from the loaded YouTube player when loading it
*/
function onYouTubeIframeAPIReady()
{
	console.log("Init : onYouTubeIframeAPIReady");
	$(document).ready(function(e) {
		main = new jsScrape.youtube.Main();
		
		$('#preloader').hide();
					
		$(document).pngFix(); 
	});
}