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

//On default, reads file 'testingtext.txt'
// and uses target $('#text')
var settings = {
	url:'testingtext.txt',
	target:'text'
};

function setTarget(id) {
	settings.target = id;
}

function setFile(url) {
	settings.url = url;
}

function loadMarkDown() {
	$.ajax({
		url: settings.url,
		success: function(data) {
			var converter = new showdown.Converter();
			appendContent(converter.makeHtml(data));
		}
	});
}

//internal
// creates reader
function createReader() {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		return reader = new FileReader();
	} else {
		return;	//undef for no support
	}
}

//internal
function setContent(content) {
	$('#' + settings.target).html(content);
}
