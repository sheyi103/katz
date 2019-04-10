function initMap() {
var uluru = {lat: -26.397, lng: 135.644};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 7,
  center: uluru,
  styles: [
	{elementType: 'geometry', stylers: [{color: '#ededed'}]},
	{elementType: 'labels.text.stroke', stylers: [{color: 'transparent'}]},
	{elementType: 'labels.text.fill', stylers: [{color: '#333333'}]},
	{featureType: 'road',elementType: 'geometry',stylers: [{color: '#ffffff'}]
	},
  ]
});
var marker = new google.maps.Marker({
	position: uluru,
	map: map,
	icon: ''
});
}