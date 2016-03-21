<!DOCTYPE: html>

<head>
	<title>Jordan Rust - Photographer</title>
	<!--import my css-->
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/sidebar.css">

	<!--import jquery-->
	<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script type="text/javascript" src="js/jquery.preload.js"></script>
</head>

<body>

<div id="wrapper">
	<div id="sidebar-wrapper">
		<?php include 'template-sidebar.php'; ?>
	</div>
	<?php include 'nav.php'; ?>
	<div id="content-wrapper">
		<div id="main-section">
			<img id="mainImg" src="media/gallery/colombia/IMG_0342_large.jpg">
		</div>
	</div>
</div>

<script>

$( document ).ready(function() {
	$.getJSON('/js/json/colombiagrid.json', function(gallObj){
		var sourceArray = [];
		for(i=0; i<Object.keys(gallObj.photos).length; i++){
			sourceArray.push(gallObj.photos[i].source);
		}
		$.preload(sourceArray);
	});
	$.getJSON('/js/json/hondurasgrid.json', function(gallObj){
		var sourceArray = [];
		for(i=0; i<Object.keys(gallObj.photos).length; i++){
			sourceArray.push(gallObj.photos[i].source);
		}
		$.preload(sourceArray);
	});
	$.getJSON('/js/json/vegasgrid.json', function(gallObj){
		var sourceArray = [];
		for(i=0; i<Object.keys(gallObj.photos).length; i++){
			sourceArray.push(gallObj.photos[i].source);
		}
		$.preload(sourceArray);
	});
	$.getJSON('/js/json/washingtongrid.json', function(gallObj){
		var sourceArray = [];
		for(i=0; i<Object.keys(gallObj.photos).length; i++){
			sourceArray.push(gallObj.photos[i].source);
		}
		$.preload(sourceArray);
	});
	$.getJSON('/js/json/anvikgrid.json', function(gallObj){
		var sourceArray = [];
		for(i=0; i<Object.keys(gallObj.photos).length; i++){
			sourceArray.push(gallObj.photos[i].source);
		}
		$.preload(sourceArray);
	});
});

</script>

</body>