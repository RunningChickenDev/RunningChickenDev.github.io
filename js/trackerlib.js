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
	handlers: []
};

function setSite(site) {
  	tracker.site = site;
}

function addHandler(handler) {
	tracker.handlers.push(handler);
}

//returns json
function request() {
  	$.getJSON(tracker.site, function(data) {
    	for(i=0;i<tracker.handlers.length;i++) {
			h = tracker.handlers[i];
			h(data);
		}
  	});
}
