$(document).ready(function(){
	getSongs();	
});

var audio = document.getElementById('player');
var music;

console.log(audio);
function getSongs(){
	
	$.getJSON('js/app.json', function(mjson) {
		music = mjson;
		genList(music);
  		console.log("json recibido 2:",music);
	});	

}

function playSong(id){
	var long = music;

	if(id >= long.length){
		console.log('se acabaron las canciones');
		audio.pause();	
	}else{
		$('#img-album').attr('src',music.songs[id].img).css('width','300');	
		$('#player').attr('src',music.songs[id].song);
		audio.play();
		console.log('Hay mas canciones');
		scheduleSong(id);
	}

}

function genList(music){		
	
	$.each(music.songs,function(i,song){		 		
		$("#playlist").append('\
			<li class="list-group-item" id="'+i+'">'+song.name+'"</li>\
		');
	});

	$("#playlist li").click(function(){
		var selectedSong = $(this).attr('id');
		playSong(selectedSong);
	});
}

function scheduleSong(id){
	audio.onended = function(){
		console.log('termino la cancion');
		playSong(parseInt(id)+1);
	}
}

