function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.maxTemp = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function() {
  if (this.temp < this.maxTemp) {
    this.temp += 1;
  } else {
    throw ("Cannot exceed the maximum temperature");
  }
};

Thermostat.prototype.down = function() {
    if (this.temp > this.MIN_TEMP) {
      this.temp -= 1;
    } else {
      throw ("Minimum temperature reached");
    }
  };

Thermostat.prototype.powerSavingOff = function() {
  this.maxTemp = 32;
  this.powerSavingMode = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.maxTemp = 25;
  this.powerSavingMode = true;
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
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
  if (this.powerSavingMode === false) {
    this.powerSavingMode = true;
    document.getElementById("psm").checked = true;
  }
};

Thermostat.prototype.energyRating = function() {
  if (this.temp < 18) {
    return "low-usage";
  }
  else if (this.temp < 25) {
    return "medium-usage";
  }
  else {
    return "high-usage";
  }
};

Thermostat.prototype.powerSavingState = function() {
  this.powerSavingMode
};


var thermostat = new Thermostat();
