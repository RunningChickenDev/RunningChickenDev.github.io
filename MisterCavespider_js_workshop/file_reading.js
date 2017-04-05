/************************************************************/
//includes jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/************************************************************/

// creates reader
function createReader() {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		return reader = new FileReader();
	} else {
		return;	//undef for no support
	}
}

function readWholeFile(userUrl) {
	console.log('trying to read ' + userUrl);
	$.ajax({
		url: userUrl,
		success: function(data) {
			console.log('loaded: ' + data);
			parseText(data);
		}
	});
}

function parseText(raw) {
	var p_count = 0;

	console.log('appending content');

	appendContent('<p id=\"__p__' + p_count + '\">');
	p_count++;

	for(var i = 0, len = raw.length; i < len; i++) {
		var char = raw[i];
		if (char == '\n') {
			appendContent('</p><p id=\"__p__' + p_count + '\">');
			p_count++;
		} else {
			appendContent(char);
		}
	}
}

function appendContent(content) {
	$('#text').append(content);
}
