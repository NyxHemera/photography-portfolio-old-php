<!DOCTYPE: html>
<head>
	<script>
	    // Preload configuration
	    $( document ).on( "mobileinit", function() {
	        $.mobile.ajaxEnabled = false;
	        $.mobile.loader.prototype.options.disabled = true;
	        $.mobile.loading( "hide" );
	    });
	</script>
	
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css" />
	
</head>

<body>
	<div id="gallery-wrapper" class="noselect">
		<div class="displayed-img" id="even-img">
		</div>
		<div class="displayed-img" id="odd-img">
		</div>
	</div>
</body>