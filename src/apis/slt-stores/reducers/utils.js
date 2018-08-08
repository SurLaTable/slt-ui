export function haversineDistance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1 / 180;
  var radlat2 = Math.PI * lat2 / 180;
  var theta = lon1 - lon2;
  var radtheta = Math.PI * theta / 180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == "K") {
    dist = dist * 1.609344;
  }
  if (unit == "N") {
    dist = dist * 0.8684;
  }
  return dist;
}

export function haversineSort(data, latlng) {
  var distances = {};
  return {
    data: data.slice().sort(function(a, b) {

      //checks to make sure we haven't already calculated the distance
      if (distances.hasOwnProperty(a.storeId) == false) {
        distances[a.storeId] = haversineDistance(latlng.lat, latlng.lng, a.location.lat, a.location.lng);
      }
      if (distances.hasOwnProperty(b.storeId) == false) {
        distances[b.storeId] = haversineDistance(latlng.lat, latlng.lng, b.location.lat, b.location.lng);
      }
      return distances[a.storeId] - distances[b.storeId];
    }),
    distances
  };
}

export function removeInnactiveStores(storeData) {
  return storeData.filter(function(val) {
    //remove invalid data
    if (val.location && val.location.address1 && val.location.lat && val.location.long) {
      val.location.lat = + val.location.lat;
      val.location.long = + val.location.long;
      val.location.lng = val.location.long;

      //mapping
      //TODO I'd prefer removing the store prefix
      val.storeName = val.name;

      var storeId = String(val.id).padStart(3, '0');
      val.storeId = storeId;
      val.culinary.cookingClasses = val.culinary.cookingClasses.toLowerCase() === "yes";
      //TODO I think the result is better than the spec for this
      val.culinary.cookingPhoneNumber = val.culinary.phoneNumber;
      return true;
    }
    return false;
  })
}

export default {haversineDistance, haversineSort, removeInnactiveStores};
