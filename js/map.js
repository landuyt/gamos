function initialize() {
  var mapCanvas = document.getElementById('map-canvas');

  var isDraggable = $(document).width() > 480 ? true : false;

  var mapOptions = {
    center: new google.maps.LatLng(39.2095699,20.165664),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    draggable: isDraggable,
    scrollwheel: false
  }

  var vlaherna = new google.maps.LatLng(39.208586,20.16348);
  var erimitis = new google.maps.LatLng(39.203792,20.141201);
  var buslakka = new google.maps.LatLng(39.2330597,20.1354557);
  var buspaxosbeach = new google.maps.LatLng(39.191004,20.197076);
  var busgaios = new google.maps.LatLng(39.1978165,20.1855785);

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
      '<h4 id="firstHeading" class="firstHeading">Church of Panagia Vlaherna</h4>'+
      '<div id="bodyContent">'+
      '<p>Ceremony at <b>5:00 pm</b></p>'+
      '</div>'+
      '</div>';

  var infowindow_xara = new google.maps.InfoWindow({
      content: contentString_xara,
      maxWidth: 200
  });


  var marker_xara = new google.maps.Marker({
    position: vlaherna,
    map: map,
    title:"Church of Panagia Vlaherna",
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

  var contentString_buslakka = '<div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Bus from Lakka</h4>'+
      '<div id="bodyContent">'+
      '<p>Leaves at <b>4:30 pm</b></p>'+
      '</div>'+
      '</div>';

  var infowindow_buslakka = new google.maps.InfoWindow({
      content: contentString_buslakka,
      maxWidth: 200
  });


  var marker_buslakka = new google.maps.Marker({
    position: buslakka,
    map: map,
    title:"Bus from Lakka",
    icon: {
        path: fontawesome.markers.BUS,
        scale: 0.4,
        strokeWeight: 0.2,
        strokeColor: '#2e5282',
        strokeOpacity: 1,
        fillColor: '#2e5282',
        fillOpacity: 1
    }
  });

  var contentString_buspaxosbeach = '<div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Bus from Paxos Beach Hotel</h4>'+
      '<div id="bodyContent">'+
      '<p>Leaves at <b>4:20 pm</b></p>'+
      '</div>'+
      '</div>';

  var infowindow_buspaxosbeach = new google.maps.InfoWindow({
      content: contentString_buspaxosbeach,
      maxWidth: 200
  });


  var marker_buspaxosbeach = new google.maps.Marker({
    position: buspaxosbeach,
    map: map,
    title:"Bus from Paxos Beach Hotel",
    icon: {
        path: fontawesome.markers.BUS,
        scale: 0.4,
        strokeWeight: 0.2,
        strokeColor: '#2e5282',
        strokeOpacity: 1,
        fillColor: '#2e5282',
        fillOpacity: 1
    }
  });

  var contentString_busgaios = '<div id="content">'+
      '<h4 id="firstHeading" class="firstHeading">Bus from Gaios</h4>'+
      '<div id="bodyContent">'+
      '<p>Leaves at <b>4:50 pm</b></p>'+
      '</div>'+
      '</div>';

  var infowindow_busgaios = new google.maps.InfoWindow({
      content: contentString_busgaios,
      maxWidth: 200
  });


  var marker_busgaios = new google.maps.Marker({
    position: busgaios,
    map: map,
    title:"Bus from Gaios",
    icon: {
        path: fontawesome.markers.BUS,
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
    infowindow_buslakka.close(map,marker_buslakka);
    infowindow_buspaxosbeach.close(map,marker_buspaxosbeach);
    infowindow_busgaios.close(map,marker_busgaios);
  });

  google.maps.event.addListener(marker_xara, 'click', function() {
    infowindow_eri.close(map,marker_eri);
    infowindow_xara.open(map,marker_xara);
    infowindow_buslakka.close(map,marker_buslakka);
    infowindow_buspaxosbeach.close(map,marker_buspaxosbeach);
    infowindow_busgaios.close(map,marker_busgaios);
  });

  google.maps.event.addListener(marker_buslakka, 'click', function() {
    infowindow_eri.close(map,marker_eri);
    infowindow_xara.close(map,marker_xara);
    infowindow_buslakka.open(map,marker_buslakka);
    infowindow_buspaxosbeach.close(map,marker_buspaxosbeach);
    infowindow_busgaios.close(map,marker_busgaios);
  });

  google.maps.event.addListener(marker_buspaxosbeach, 'click', function() {
    infowindow_eri.close(map,marker_eri);
    infowindow_xara.close(map,marker_xara);
    infowindow_buslakka.close(map,marker_buslakka);
    infowindow_buspaxosbeach.open(map,marker_buspaxosbeach);
    infowindow_busgaios.close(map,marker_busgaios);
  });

  google.maps.event.addListener(marker_busgaios, 'click', function() {
    infowindow_eri.close(map,marker_eri);
    infowindow_xara.close(map,marker_xara);
    infowindow_buslakka.close(map,marker_buslakka);
    infowindow_buspaxosbeach.close(map,marker_buspaxosbeach);
    infowindow_busgaios.open(map,marker_busgaios);
  });

}
google.maps.event.addDomListener(window, 'load', initialize);