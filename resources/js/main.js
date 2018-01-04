var x = document.getElementById("demo");

function getLocation()
{
  // geo = navigator.geolocation
  // This return a geo object.
  if (navigator.geolocation)
  {
    // getCurrentPosition() method is used to get the current position of the device.
    // getCurrentPosition takes in a Position Object as its input parameter
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  // There is no Geo object
  else
  {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position)
{
  x.innerHTML = "Latitude: " + position.coords.latitude
  + "<br>Longitude: " + position.coords.longitude;
}
