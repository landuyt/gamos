function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(39.2095699,20.165664),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  }

  var xaralampos = new google.maps.LatLng(39.199993,20.168699);
  var erimitis = new google.maps.LatLng(39.203792,20.141201);

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: xaralampos,
    map: map,
    title:"Church of Agios Charalambos",
    icon: {
        path: fontawesome.markers.HEART,
        scale: 0.4,
        strokeWeight: 0.2,
        strokeColor: 'black',
        strokeOpacity: 1,
        fillColor: '#2e5282',
        fillOpacity: 1
    }
  });
  
  var marker = new google.maps.Marker({
    position: erimitis,
    map: map,
    title:"Erimitis Bar & Restaurant",
    icon: {
        path: fontawesome.markers.HEART,
        scale: 0.4,
        strokeWeight: 0.2,
        strokeColor: 'black',
        strokeOpacity: 1,
        fillColor: '#2e5282',
        fillOpacity: 1
    }
  });

}
google.maps.event.addDomListener(window, 'load', initialize);