var Thermostat = function(){
  this.temp = 20;
  this.powerSavingMode = true;
  this.powerColour = 'green';
  this.maxtemp = 25;
  this.colour = 'GoldenRod';
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

Thermostat.prototype.powerSavingToggle = function () {
  if (this.powerSavingMode === true) {return this.powerSavingOff();}
  if (this.powerSavingMode === false) {return this.powerSavingOn();}
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
    this.colour = 'GoldenRod';}
  if ( this.temp < 18) {
    this.colour = 'green';}
  if ( this.temp >= 25) {
    this.colour = 'red';}
};

Thermostat.prototype.powerSavingColour = function() {
  if (this.powerSavingMode === true) {
      this.powerColour = 'green';}
  if (this.powerSavingMode === false) {
      this.powerColour = 'white';}
};
