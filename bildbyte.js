function bildbyte(input) {
  if (input == 1) {
    bytbild('customs.png', 5, 9)
  }
  else if (input == 2){
    bytbild('factory.jpg', 5, 9)
  }
  else if (input == 3){
    bytbild('thelab.png', 5, 9)
  }
  else if (input == 4){
    bytbild('interchange.jpg', 5, 9)
  }
  else if (input == 5){
    bytbild('woods.jpg', 5, 9)
  }
  else if (input == 6){
    bytbild('factory3d.jpg', 5, 9)
  }
  else if (input == 7){
    bytbild('reserve.png', 5, 9)
  }
  else if (input == 8){
    bytbild('shoreline.jpg', 5, 9)
  }
}

function bytbild(bild, x, y) {
  var bounds = [[0,0], [x, y ]];
  image = L.imageOverlay(bild, bounds).addTo(map);
}