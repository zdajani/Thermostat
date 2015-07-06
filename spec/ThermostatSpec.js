describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature()).toBe(20);
    });

    it('can be raised', function() {
      thermostat.raise();
      expect(thermostat.temperature()).toBe(21);
    });

    it('can be lowered', function() {
      thermostat.lower();
      expect(thermostat.temperature()).toBe(19);
    });

    it("can't be lowered beyond 10", function() {
      thermostat.temp = 10;
      thermostat.lower();
      expect(thermostat.temperature()).toBe(10);
    });

  });

  describe('power saving mode', function() {

    it('is on by default', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('can be turned off and on again', function() {
      thermostat.powerSavingOff();
      expect(thermostat.powerSavingMode).toBe(false);
      thermostat.powerSavingOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('sets maximum temperature to 25 when on', function() {
      thermostat.temp = 25;
      thermostat.raise();
      expect(thermostat.temperature()).toBe(25);
    });

    it('allows maximum temperature above 25 when off', function(){
      thermostat.temp = 25;
      thermostat.powerSavingOff();
      thermostat.raise();
      expect(thermostat.temperature()).toBe(26);
    });

    it('raises maximum temperature to 32 when off', function(){
      thermostat.powerSavingOff();
      thermostat.temp = 32;
      thermostat.raise();
      expect(thermostat.temperature()).toBe(32);
    });

  });

  describe('temprature reset', function(){
    it ('resets thermostat to 20', function(){
      thermostat.temp = 27;
      thermostat.resetButton();
      expect(thermostat.temperature()).toBe(20);
    });

  });

});
