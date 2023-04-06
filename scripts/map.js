function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAIz3YNbJxmlycsKveL6UpQMgFpYVEeMcs&callback=initMap';
    document.body.appendChild(script);
  }
  //initialize and center the map
  function initMap() {
    var carlsbad = {lat: 33.158093, lng: -117.350594};
    var map = new google.maps.Map(document.querySelector('#map'), {
      zoom: 12,
      center: carlsbad
    });
    //add a marker at the location
    var marker = new google.maps.Marker({
      position: carlsbad,
      map: map,
      title: 'Carlsbad, CA'
    });
  }
  
  loadScript();