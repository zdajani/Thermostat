function currentTemp() {
  document.getElementById('temp').innerHTML = thermostat.temp + "&#8451";
  document.getElementById('temp').style.color = thermostat.colour;
  document.getElementById('powerSavingToggle').style.background = thermostat.powerColour;
}

var thermostat = new Thermostat();
currentTemp();

document.getElementById('raiseTemp').onclick = function(){
  thermostat.raise();
  currentTemp();
};

document.getElementById('lowerTemp').onclick = function(){
  thermostat.lower();
  currentTemp();
};

document.getElementById('resetButton').onclick = function(){
  thermostat.resetButton();
  currentTemp();
};

var button = document.getElementById('powerSavingToggle');
button.onclick = function(){
  thermostat.powerSavingToggle();
  thermostat.powerSavingColour();
  currentTemp();
  if (this.value === 'Power Saving On') { return this.value = 'Power Saving Off';}
  if (this.value === 'Power Saving Off') { return this.value = 'Power Saving On';}
};
