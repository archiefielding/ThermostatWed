

$(document).ready (function() {

  $( '#temp' ).text(thermostat.temp);

  $( '#up' ).click(function( event ) {
    thermostat.up();
    $( '#temp' ).text(thermostat.temp);
    $( '#temp' ).css("color", thermostat.colour);
  });

  $( '#down' ).click(function( event ) {
    thermostat.down();
    $( '#temp' ).text(thermostat.temp);
    $( '#temp' ).css("color", thermostat.colour);
  });

  $( '#psm' ).click(function( event ) {
    thermostat.powerSavingChange();
    $( '#temp' ).text(thermostat.temp);
    $( '#temp' ).css("color", thermostat.colour);
  });

  $( '#reset' ).click(function( event ) {
    thermostat.reset();
    $( '#temp' ).text(thermostat.temp);
    $( '#temp' ).css("color", thermostat.colour);
  });


});
