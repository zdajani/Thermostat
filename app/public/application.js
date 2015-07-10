$(window).load(function () {
  thermostat.temp = $('#temp').text();
  refreshColour();
  weatherApp();

  $('#powerSavingToggle').click(function(){
    thermostat.powerSavingToggle();
    thermostat.powerSavingColour();
    currentTemp();
    if (this.value === 'Power Saving On') { return this.value = 'Power Saving Off';}
    if (this.value === 'Power Saving Off') { return this.value = 'Power Saving On';}
  });

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

  $('#citySubmit').click(function() {
    city = $('#cityForm').val();
    weatherApp();
  });

  $('h1').click(function() {
    $('h1').fadeOut();
    $('h1').fadeIn();
  });


});

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

function currentTemp() {
  $.post('/', {'temperature': '' + thermostat.temp });
  $('#temp').html(thermostat.temp);
  refreshColour();
}

function refreshColour() {
  tempColor();
  $('#powerSavingToggle').css("background", thermostat.powerColour);
}

function weatherApp(){
  $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric',
   function (response) {
     $('#locationTemp').html(response.list[0].main.temp);
     $('#cityWeather').html(response.list[0].name);
   });
}

function tempColor(){
  if ( 18 >= thermostat.temp < 25) {
    $('#temp').removeClass();
    $('#temp').addClass('golden');}
  if ( thermostat.temp < 18) {
    $('#temp').removeClass();
    $('#temp').addClass('green');}
  if ( thermostat.temp >= 25) {
    $('#temp').removeClass();
    $('#temp').addClass('red');}
}
