describe('Thermostat', function() {

  var Thermostat

    describe('temperature', function(){

      it('starts at 20 degrees', function(){
        thermostat = new Thermostat();
        expect(thermostat.temperature).toBe(20)
      });

    });

});