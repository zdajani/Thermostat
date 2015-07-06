var Thermostat = function(){
  this.temp = 20;
  this.powerSavingMode = true;
};


Thermostat.prototype.temperature = function () {
  return this.temp;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.raise = function() {
  if (this.temp < 25 ) {this.temp++;}
};

Thermostat.prototype.lower = function () {
  if (this.temp > 10) {this.temp--;}
};
