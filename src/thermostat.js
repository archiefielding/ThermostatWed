function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
  this.colour = 'yellow'
}

Thermostat.prototype.up = function() {
  if (this.temp < this.maxTemp) {
    this.temp += 1;
  } else {
    throw ("Cannot exceed the maximum temperature");
  }
  this.setColour();
};

Thermostat.prototype.down = function() {
    if (this.temp > this.MIN_TEMP) {
      this.temp -= 1;
    } else {
      throw ("Minimum temperature reached");
    }
    this.setColour();
  };

Thermostat.prototype.powerSavingOff = function() {
  this.maxTemp = 32;
  this.powerSavingMode = false;
  this.setColour();
};

Thermostat.prototype.powerSavingOn = function() {
  this.maxTemp = 25;
  this.powerSavingMode = true;
  this.setColour();
};

Thermostat.prototype.powerSavingChange = function() {
  if (this.powerSavingMode === false) {
    this.powerSavingMode = true;
    this.maxTemp = 25;
    if (this.temp > 25) {
      this.temp = 25;
    }
  }
  else {
    this.powerSavingMode = false;
    this.maxTemp = 32;
  }
  this.setColour();
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
  this.setColour();
  if (this.powerSavingMode === false) {
    this.powerSavingMode = true;
    document.getElementById("psm").checked = true;
  }
};

Thermostat.prototype.setColour = function() {
  if (this.temp < 18) {
    this.colour = 'green';
  }
  else if (this.temp < 25) {
    this.colour = 'yellow';
  }
  else {
    this.colour = 'red';
  }
};

Thermostat.prototype.powerSavingState = function() {
  this.powerSavingMode
};


var thermostat = new Thermostat();
