var Thermostat = function(){
  this.temp = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.temperature = function () {
  return this.temp;
};



Thermostat.prototype.raise = function() {
  this.temp++;
};

Thermostat.prototype.lower = function () {
  if (this.temp > 10) {this.temp--};
};

