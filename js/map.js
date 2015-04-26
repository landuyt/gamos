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

  var contentString_eri = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Erimitis</h3>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow_eri = new google.maps.InfoWindow({
      content: contentString_eri
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
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Charalambos</h3>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow_xara = new google.maps.InfoWindow({
      content: contentString_xara
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