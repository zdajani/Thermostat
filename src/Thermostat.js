var Thermostat = function(){};

var temp = 20

// function Thermostat() {
//   this.temperature = 20;
// };

Thermostat.prototype.temperature = function () {
  return temp;
};

Thermostat.prototype.raise = function() {
  temp++;
};