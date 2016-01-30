<!DOCTYPE: html>

<head>
	<title>Washington</title>
	<!--import my css-->
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/photogrid.css">
	<link rel="stylesheet" href="css/gallery.css">

	<!--import jquery-->
	<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

	<!--import my js-->
	<script src="js/photogrid.js"></script>
	<script src="js/gallery.js"></script>
</head>

<body>

<div id="wrapper">
	<div id="sidebar-wrapper">
		<?php include 'template-gallery.php'; ?>
		<?php include 'template-sidebar.php'; ?>
	</div>
	<div id="content-wrapper">
		<div id="main-section">
			
		</div>
	</div>
</div>


<script>
createPhotoGrid('washintongrid');
setJsonSource('washingtongallery');
</script>

</body>