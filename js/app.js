$(document).ready(function(){

getSongs();

});

var audio;
var music;

function getSongs(){
	$.getJSON("js/app.json",function(mjson){
		musioc = mjson;
		console.log(music);
	})
}
