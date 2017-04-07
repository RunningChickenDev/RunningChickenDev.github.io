/************************************************************/
//includes jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/************************************************************/

/**
 * literal string
 */
var tracker = {
	site: 'https://freegeoip.net/json/',
	handler: function(data) {
		alert(JSON.stringify(data));
	}
};

function setSite(site) {
  	tracker.site = site;
}

function setHandler(handler) {
	tracker.handler = handler;
}

//returns json
function request() {
  	$.getJSON(trackerSite, function(data) {
    	tracker.handler(data);
  	});
}
