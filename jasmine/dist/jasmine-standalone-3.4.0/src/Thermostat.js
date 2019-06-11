function Thermostat () {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxTemp) {
    this.temperature = this.temperature + 1;
  } else {
    this.temperature = this.maxTemp;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.minTemp) {
    this.temperature = this.temperature - 1;
  }
};

Thermostat.prototype.powerSaveSwitch = function() {
  if (this.powerSavingMode === true) {
    this.powerSavingMode = false;
    this.maxTemp = 32;
  } else if (this.powerSavingMode === false) {
    this.powerSavingMode = true;
    this.maxTemp = 25;
  }
};