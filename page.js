console.log("load page.js");
$(document).ready(function(){
	console.log("load page.js");
	$("#settime").submit(function(){
		var start = document.getElementById("start").value;	
		var end = document.getElementById("end").value;
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {start_time: start, end_time: end}, function(response) {
    			alert("finish sending value!" + start_time + "to" + end_time);
  			});
		});
	});
});