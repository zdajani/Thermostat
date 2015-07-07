var thermostat = new Thermostat();

function currentTemp() {
  document.getElementById('temp').innerHTML = thermostat.temp + "&#8451";
}

currentTemp();

document.getElementById('raise').onclick = function(){
  thermostat.raise();
  currentTemp();
};




  // document.getElementById('raise').innerHTML = thermostat.raise();
