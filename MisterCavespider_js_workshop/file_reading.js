/************************************************************/
//includes jQuery
var script_q = document.createElement('script');
script_q.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script_q.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script_q);

//showdown
var script_t = document.createElement('script');
script_t.src = 'https://cdn.rawgit.com/showdownjs/showdown/1.6.3/dist/showdown.min.js';
script_t.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script_t);
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
			parseMD(data);
		}
	});
}

function parseText_TEXT(raw) {
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

	appendContent('</p>');
}

function parseMD(raw) {
	var converter = new showdown.Converter();
	appendContent(converter.makeHtml(raw));
}

function appendContent(content) {
	$('#text').append(content);
}
