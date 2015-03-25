function initialize_gmaps() {
    // create styles. Styled Map Wizard: http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
    var styles = [
      {
        "featureType": "water",
        "stylers": [
          { "color": "#0b014d" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "landscape",
        "stylers": [
          { "color": "#ea8080" }
        ]
      },{
        "elementType": "labels",
        "stylers": [
          { "weight": 0.1 },
          { "color": "#000000" },
          { "visibility": "off" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi.park",
        "stylers": [
          { "visibility": "on" }
        ]
      },{
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ];

    // icons
    var pin = {
        url: "icons/maps.png",
        scaledSize: new google.maps.Size(40, 50),
    };

    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.704989,-74.009609);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles,
        draggable: false,
        scrollwheel: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!",
        icon: pin
    });

    // info window markup
    var infoWindowString = '<div>Hello World!</div>';

    var infowindow = new google.maps.InfoWindow({
      content: infoWindowString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });


    // Add the marker to the map by calling setMap()
    marker.setMap(map);

}

$(document).ready(function() {
    initialize_gmaps();
});