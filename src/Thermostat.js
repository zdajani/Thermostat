var Thermostat = function(){
  this.temp = 20;
  this.powerSavingMode = true;
  this.maxtemp = 25;
  this.colour = 'yellow';
};


Thermostat.prototype.temperature = function () {
  return this.temp;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSavingMode = false;
  this.maxtemp = 32;
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSavingMode = true;
  this.maxtemp = 25;
  if (this.temp > 25) {this.temp = 25;}
};

Thermostat.prototype.raise = function() {
  if (this.temp < this.maxtemp ) {this.temp++;}
  this.selectColour();
};

Thermostat.prototype.lower = function () {
  if (this.temp > 10) {this.temp--;}
  this.selectColour();
};

Thermostat.prototype.resetButton = function () {
  this.temp = 20;
  this.selectColour();
};

Thermostat.prototype.selectColour = function() {
  if ( 18 >= this.temp < 25) {
    this.colour = 'yellow';
  };
  if ( this.temp < 18) {
    this.colour = 'green';
  };
  if ( this.temp >= 25) {
    this.colour = 'red';
  };
};
