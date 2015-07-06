describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('temperature', function(){

    it('starts at 20 degrees', function(){
      expect(thermostat.temperature()).toBe(20);
    });

    it('can be raised', function() {
      thermostat.raise();
      expect(thermostat.temperature()).toBe(21);
    });

  });

});
