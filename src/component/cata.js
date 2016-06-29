
function loadProps(properties) {
  for (var prop in properties) {
    var catagory = prop.split(':')
    if (catagory[0] == "CyCatagory") {
      catagoryActions.update(catagory[1], catagory[2], [properties[prop]])
      delete properties[prop]
    }
  }
}
