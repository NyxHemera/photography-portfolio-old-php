<!DOCTYPE: html>

<head>
	<title>Colombia</title>
	<!--import my css-->
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/photogrid.css">
	<link rel="stylesheet" href="css/gallery.css">

	<!--import jquery-->
	<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script type="text/javascript" src="js/jquery.preload.js"></script>

	<!--import my js-->
	<script src="js/photogrid.js"></script>
	<script src="js/gallery.js"></script>
</head>

<body>

<div id="wrapper">
	<?php include 'template-gallery.php'; ?>
	<div id="sidebar-wrapper">
		<?php include 'template-sidebar.php'; ?>
	</div>
	<div id="content-wrapper">
		<div id="main-section">
			
		</div>
	</div>
</div>

<script>
createPhotoGrid('colombiagrid');
setJsonSource('colombia');

$( document ).ready(function() {
	$.getJSON('/js/json/colombiagallery.json', function(gallObj){
		var sourceArray = [];
		for(i=0; i<Object.keys(gallObj.photos).length; i++){
			sourceArray.push(gallObj.photos[i].source);
		}
		$.preload(sourceArray);
	});
});

</script>

</body>