window.onload = (event) => {
  console.log("page connected with JS");
  cartodb.createVis('map', 'http://thenewschool.carto.com/u/tjdals504/api/v2/viz/b0d53334-4181-44e0-9942-285c59f4da19/viz.json', {
    shareable: true,
    title: true,
    description: true,
    search: true,
    infowindow: true,
    tiles_loader: true,
    center_lat: 40.75182384801933,
    center_lon: -73.94135520197045,
    zoom: 12
  })
    .done(function(vis, layers) {
      // layer 0 is the base layer, layer 1 is cartodb layer
      // when setInteraction is disabled featureOver is triggered
      layers[1].setInteraction(true);
      layers[1].on('featureOver', function(e, latlng, pos, data, layerNumber) {
        console.log(e, latlong, pos, data, layerNumber);
      });

    })
};
