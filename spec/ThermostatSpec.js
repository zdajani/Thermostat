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

});
