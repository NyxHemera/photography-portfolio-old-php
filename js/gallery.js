var currentNum = 0;
var jsonSource = '';
var first = true;
var even = true;
var pageName = '';

function initializeGallery(photoNum) {
	currentNum = photoNum;
	loadGallery();
}

function loadGallery() {
	$.getJSON(jsonSource, updateImg);
}

function setJsonSource(jsonName) {
	jsonSource = "/js/json/" + jsonName + "gallery.json";
	pageName = jsonName;
}

function updateImg(galleryObj) {
	var source = getImgSource(galleryObj);
	if(first){
		if(even){
			$('#even-img').css('background-image', 'url(' + source + ')');
			setSize('#even-img', source);
			$("#even-img").fadeTo(500,1,function(){});
		}else {
			$('#odd-img').css('background-image', 'url(' + source + ')');
			setSize('#odd-img', source);
			$("#odd-img").fadeTo(500,1,function(){});
		}
		$('#gallery-wrapper').css('visibility', 'visible');
		$('#gallery-wrapper').css('opacity', '1');
		first = false;
	}else{
		if(even){
			$('#even-img').css('background-image', 'url(' + source + ')');
			setSize('#even-img', source);
			$("#even-img").fadeTo(500,1,function(){});
			$("#odd-img").fadeTo(500,0,function(){});
		}else {
			$('#odd-img').css('background-image', 'url(' + source + ')');
			setSize('#odd-img', source);
			$("#odd-img").fadeTo(500,1,function(){});
			$("#even-img").fadeTo(500,0,function(){});
		}
	}
	
		
}

function setSize(target, source) {
	var img = new Image();
	img.src = source;
	console.log($('#gallery-wrapper').height());
	img.onload = function() {
		console.log($('#gallery-wrapper').height());
		if( $('#gallery-wrapper').height() < img.height ) {
			console.log("contain");
			console.log(img.height);
		    $(target).css('background-size','contain');
		}else{
			console.log("auto");
			console.log(img.height);
		    $(target).css('background-size','auto');
		}
	}
}

function getImgSource(galleryObj) {
	var numCells = Object.keys(galleryObj.photos).length;
	if(currentNum >= numCells){
		currentNum = currentNum-numCells;
	}else if(currentNum < 0){
		currentNum = currentNum + numCells;
	}
	even = !even;
	return galleryObj.photos[currentNum].source;
}

function right() {
	currentNum++;
	loadGallery();
}

function left() {
	currentNum--;
	loadGallery();
}

function reloadGrid() {
	var mainElements = "";
	mainElements += '<div id="sidebar-wrapper"></div> ';
	mainElements += '<div id="content-wrapper"> ';
	mainElements += '<div id="main-section"></div> ';
	mainElements += '</div>';
	$('#wrapper').html(mainElements);
	$( '#sidebar-wrapper' ).load("template-sidebar.php #sidebar");
	var gridName = pageName + 'grid';
	createPhotoGrid(gridName);
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#gallery-wrapper').css('opacity', '0');
        setTimeout(function(){$('#gallery-wrapper').css("visibility", "hidden");}, 500);
        first = true;
        $("#even-img").fadeTo(500,0,function(){
        	$('#even-img').css('background-image', 'none');
        });
        $("#odd-img").fadeTo(500,0,function(){
        	$('#odd-img').css('background-image', 'none');
        });
    }
});

$(document).keyup(function(e) {
     if (e.keyCode == 37) { // left key
        left();
    }
});

$(document).keyup(function(e) {
     if (e.keyCode == 39) { // right key
        right();
    }
});



$(document).on('pageinit', function(event){
   $('#gallery-wrapper').on("swipeleft",function(){
	  right();
	});

   $('#gallery-wrapper').on("swiperight",function(){
	console.log("swiped right");
	  left();
	});

});