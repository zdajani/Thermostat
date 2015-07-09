// $(document).ready(function() {
//
//
// });

navigator.geolocation.getCurrentPosition(currentLocation);

function currentLocation(Geoposition){
    latitude = Geoposition.coords.latitude;
    longitude = Geoposition.coords.longitude;
    currentWeather();
}

function currentWeather(){
  ($.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric',
   function (response) {
     $('#currentTemp').html(response.main.temp);
     $('#currentCity').html(response.name);
   }));
}


var thermostat = new Thermostat();


var city = 'London';
var latitude;
var longitude;



currentTemp();
weatherApp();

function currentTemp() {
  $('#temp').html(thermostat.temp + "&#8451");
  $('#temp').css("color", thermostat.colour);
  $('#powerSavingToggle').css("background", thermostat.powerColour);
}

$('#raiseTemp').click(function(){
  thermostat.raise();
  currentTemp();
});

$('#lowerTemp').click(function(){
  thermostat.lower();
  currentTemp();
});

$('#resetButton').click(function(){
  thermostat.resetButton();
  currentTemp();
});

$('#powerSavingToggle').click(function(){
  thermostat.powerSavingToggle();
  thermostat.powerSavingColour();
  currentTemp();
  if (this.value === 'Power Saving On') { return this.value = 'Power Saving Off';}
  if (this.value === 'Power Saving Off') { return this.value = 'Power Saving On';}
});

function weatherApp(){
  $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric',
   function (response) {
     $('#locationTemp').html(response.list[0].main.temp);
     $('#cityWeather').html(response.list[0].name);
   });
}

$('#citySubmit').click(function() {
  city = $('#cityForm').val();
  weatherApp();
});
