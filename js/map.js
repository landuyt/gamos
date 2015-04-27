function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(39.2095699,20.165664),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    draggable: true
  }

  var xaralampos = new google.maps.LatLng(39.199993,20.168699);
  var erimitis = new google.maps.LatLng(39.203792,20.141201);

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var contentString_eri = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Erimitis Bar & Restaurant</h4>'+
      '<div id="bodyContent">'+
      '<p>Reception as of <b>7:00 pm</b></p>'+
      '<p><a href="http://www.erimitis.com" target="_blank">Website of Erimitis</a></p>'+
      '</div>'+
      '</div>';

  var infowindow_eri = new google.maps.InfoWindow({
      content: contentString_eri,
      maxWidth: 200
  });

    var marker_eri = new google.maps.Marker({
    position: erimitis,
    map: map,
    title:"Erimitis Bar & Restaurant",
    icon: {
        path: fontawesome.markers.HEART,
        scale: 0.4,
        strokeWeight: 0.2,
        strokeColor: '#2e5282',
        strokeOpacity: 1,
        fillColor: '#2e5282',
        fillOpacity: 1
    }
  });

  var contentString_xara = '<div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Church of Saint Charalambos</h4>'+
      '<div id="bodyContent">'+
      '<p>Ceremony at <b>5:00 pm</b></p>'+
      '</div>'+
      '</div>';

  var infowindow_xara = new google.maps.InfoWindow({
      content: contentString_xara,
      maxWidth: 200
  });


  var marker_xara = new google.maps.Marker({
    position: xaralampos,
    map: map,
    title:"Church of Agios Charalambos",
    icon: {
        path: fontawesome.markers.HEART,
        scale: 0.4,
        strokeWeight: 0.2,
        strokeColor: '#2e5282',
        strokeOpacity: 1,
        fillColor: '#2e5282',
        fillOpacity: 1
    }
  });

  google.maps.event.addListener(marker_eri, 'click', function() {
    infowindow_eri.open(map,marker_eri);
    infowindow_xara.close(map,marker_xara);
  });

  google.maps.event.addListener(marker_xara, 'click', function() {
    infowindow_xara.open(map,marker_xara);
    infowindow_eri.close(map,marker_eri);
  });

}
google.maps.event.addDomListener(window, 'load', initialize);