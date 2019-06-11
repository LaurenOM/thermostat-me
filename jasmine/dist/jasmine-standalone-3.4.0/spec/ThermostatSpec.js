describe("Thermostat", function() { 
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('is a instance of Thermostat', function() {
    expect(thermostat).toEqual(jasmine.any(Thermostat));
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('up can increase temparature by 1', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('down can decrease temparature by 1', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('down doesn\'t allow temp to go below 10', function(){
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.temperature).toEqual(10);
  });

  it('up doesn\'t allow temp to go above 25 in power saving mode', function(){
    thermostat.temperature = 25;
    thermostat.up();
    expect(thermostat.temperature).toEqual(25);
  });

  it('sets power saving mode to false when turned off', function() {
    thermostat.powerSaveSwitch();
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('up doesn\'t allow temp to go above 32 without power saving mode', function(){
    thermostat.powerSaveSwitch();
    thermostat.temperature = 32;
    thermostat.up();
    expect(thermostat.temperature).toEqual(32);
  });
});