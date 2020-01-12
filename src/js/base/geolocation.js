"use strict" 

var handleGeolocation = function(){
		getPosition();

	function getPosition(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(displayOnMap);
		}else{
			console.log("Geolokacija nije podrzana u tvom pregledniku")	
		}
	}
	
	function displayOnMap(position){
		var lat = position.coords.latitude;	
		var lng = position.coords.longitude;	
		
		var options = {
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		
		var mapContainer = document.getElementById("map");
		
		var map = new google.maps.Map(mapContainer, options);
		
		var initLocation = new google.maps.LatLng(lat, lng);
		
		var marker = new google.maps.Marker({
			position: initLocation,
			map: map,
			title: 'Moja trenutna lokacija'
			});
			
		map.setCenter(initLocation);
	};
};

var Geolocation = function(){
	return {
		initGeolocation: function(){
			handleGeolocation();
		}
	}
}();