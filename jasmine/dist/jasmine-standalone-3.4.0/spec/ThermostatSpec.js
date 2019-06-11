describe("Thermostat", function() { 
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat).toEqual(jasmine.any(Thermostat));
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('up can increase temparature by 1', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
});