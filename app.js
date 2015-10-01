

$(document).ready (function() {

  $( '#temp' ).text(thermostat.temp);

  $( '#up' ).click(function( event ) {
    thermostat.up();
    $( '#temp' ).text(thermostat.temp);
  });

  $( '#down' ).click(function( event ) {
    thermostat.down();
    $( '#temp' ).text(thermostat.temp);
  });

  $( '#psm' ).click(function( event ) {
    thermostat.powerSavingChange();
    $( '#temp' ).text(thermostat.temp);
  });

  $( '#reset' ).click(function( event ) {
    // if (thermostat.powerSavingState() === false) {
    //   $( '#psm' ).prop("checked", true);
    //   thermostat.powerSavingChange();
    // }
    thermostat.reset();
    $( '#temp' ).text(thermostat.temp);
  });

});
