Blacklight.onLoad(function() {
  $('[data-map="item"]').each(function(i, element) {

    // get viewer module from protocol value and capitalize to match class name
    var viewerName = $(element).data().protocol,
      viewer;
    viewerName = viewerName.charAt(0).toUpperCase() + viewerName.substring(1);

    // get new viewer instance and pass in element
    viewer = new window['GeoBlacklight']['Viewer'][viewerName](element);
  });

  $('.truncate-abstract').readmore({
    maxHeight: 60
  });
});
