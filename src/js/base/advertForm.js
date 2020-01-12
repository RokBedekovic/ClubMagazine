let advertForm = $('.advert-form').on('submit', function(e){
	e.preventDefault();

	var advertIme = $('#advertName').val();
	var advertDatum = $('#advertDate').val();
	var advertBio = $('#advertInfo').val();

	$('#advertPit').append(advertIme);
	$('#advertPitDva').append(advertDatum);
	$('#advertPitTri').append(advertBio);
});

var Advert = function(){
	return {
		initAdvert: function(){
			advertForm();
		}
	}
}();

