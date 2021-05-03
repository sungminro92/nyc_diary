let manholeLayer;
let eventLayer;
let placeLayer;
let foodLayer;

window.onload = (event) => {
  console.log("page connected with JS");

  let url = 'http://thenewschool.carto.com/u/tjdals504/api/v2/viz/b0d53334-4181-44e0-9942-285c59f4da19/viz.json'


  cartodb.createVis('map', url, {
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
      // let manholeLayer = layers[1];
      // document.getElementById('manholes')
      let mapLayers = vis.getLayers();
      console.log(mapLayers);
      
      layers[1].setInteraction(true);
      // manholeLayer = layers[1].getSubLayer(0);
      // console.log(manholeLayer);
      layers[1].on('featureOver', function(lat, long, pos, data, layerNumber) {
      console.log(lat, long, pos, data, layerNumber);


      });

      // let manholeButton = document.getElementById('manholes');

      // $('#manholes').click(function() {
      //   manholeLayer.setSQL('SELECT * FROM category WHERE category = "manhole"');
      // });
      //
      // $('#reset').click(function() {
      //   manholeLayer.setSQL('SELECT * FROM category');
      // });
      // let resetButton = document.getElementById('reset');
      // a
      // resetButton.addEventListener("click", function() {
      //   manholeLayer.setSQL('SELECT * FROM category')
      // });


    });
};
