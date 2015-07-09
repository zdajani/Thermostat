function currentTemp() {
  $('#temp').html(thermostat.temp + "&#8451");
  $('#temp').css("color", thermostat.colour);
  $('#powerSavingToggle').css("background", thermostat.powerColour);
}

var thermostat = new Thermostat();
currentTemp();

$('#raiseTemp').on("click", function(){
  thermostat.raise();
  currentTemp();
});

$('#lowerTemp').on("click", function(){
  thermostat.lower();
  currentTemp();
});

$('#resetButton').on("click", function(){
  thermostat.resetButton();
  currentTemp();
});

$('#powerSavingToggle').on("click", function(){
  thermostat.powerSavingToggle();
  thermostat.powerSavingColour();
  currentTemp();
  if (this.value === 'Power Saving On') { return this.value = 'Power Saving Off';}
  if (this.value === 'Power Saving Off') { return this.value = 'Power Saving On';}
});

$.getJSON('http://api.openweathermap.org/data/2.5/find?q=London&units=metric',
 {},
 function (response) {
   console.log(response.list[0].main.temp);
 });
