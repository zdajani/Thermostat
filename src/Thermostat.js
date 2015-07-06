var Thermostat = function(){
  this.temp = 20;
};

Thermostat.prototype.temperature = function () {
  return this.temp;
};

Thermostat.prototype.raise = function() {
  this.temp++;
};

Thermostat.prototype.lower = function () {
  this.temp--;
};
