describe("Thermostat", function() {
  var temp;
  var minTemp = 10;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it("should start at 20C", function() {
    expect(thermostat.temp).toEqual(20);

  });

  it(
    "should increase the temperature by one when the increase button is pushed",
    function() {
      thermostat.increaseByOne();
      expect(thermostat.temp).toEqual(21);
    });

  it(
    "should decrease the temperature by one when the decrease button is pushed",
    function() {
      thermostat.decreaseByOne();
      expect(thermostat.temp).toEqual(19);
    });

  it("has a minimum temperature of 10C", function() {
    expect(thermostat.tempMin).toEqual(10);
  });

  it("cannot go below minimum temperature", function() {
    for (var i = 20; i >= minTemp + 1; i--) {
      thermostat.decreaseByOne();
      // console.log(i);
      console.log(thermostat);
    }
    expect(function() {
      thermostat.decreaseByOne();
    }).toThrowError("Minimum temperature reached");
  });
  // expect(function() { thermostat.decreaseByOne.toThrowError("Minimum temperature reached");
  //   });
  // });
  // console.log(thermostat.temp);
});
