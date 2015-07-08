function currentTemp() {
  document.getElementById('temp').innerHTML = thermostat.temp + "&#8451";
  document.getElementById('temp').style.color = thermostat.colour;
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

document.getElementById('powerSavingOn').onclick = function(){
  thermostat.powerSavingOn();
  currentTemp();
};

document.getElementById('powerSavingOff').onclick = function(){
  thermostat.powerSavingOff();
  currentTemp();
};
