//includes jQuery
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/////////////////////////////////////////////////////////////

//literal string, including https://
var trackerSite;

function setTrackerSite(site) {
  console.log("Setting new tracker site...");
  trackerSite = site;
}

function getTrackerSite() {
  return trackerSite
}

//returns json
function request() {
  console.log("Requesting from site: " + getTrackerSite());
  
  $.getJSON(trackerSite, function(rawdata) {
    //might not be the fastest way
    var data = JSON.parse(JSON.stringify(rawdata));
    
    writeData(data);
  }
}

function writeData(json) {
  return 0;
}
