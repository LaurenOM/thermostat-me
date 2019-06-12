
  $(document).ready(function(){
    var thermostat = new Thermostat();
    $('.temp_disp').val(thermostat.temperature)
    var knobColour = 'orange';

    function knobDisplay() {
      $('.temp_disp').val(thermostat.temperature).trigger('change')
    };

    $(".temp_disp").knob({
      'change' : function (v) { console.log(v); }
  });

  $('.temp_disp').trigger(
    'configure',
    {
        "min":10,
        "max":32,
        'readOnly': true,
        "fgColor":"green",
        'displayInput': true, 
        'angleArc:':15
    }
  );

    $('.up').on('click', function() {
      thermostat.up();
      knobDisplay();
    })

    $('.down').on('click', function() {
      thermostat.down();
      knobDisplay();
    }) 

    $(".power_save").on('click', function() {
      thermostat.powerSaveSwitch();
    });

    $(".power_save").click(function(){
      $("#ps_disp").toggle();
    });

    $('.reset').on('click', function() {
      thermostat.reset();
      $('.temp_disp').val(thermostat.temperature)
    }) 


    $('.usage').on('click', function() {

      $('.usage_disp').text(thermostat.usage()).css("color","green");
    }) 

    $(".usage").click(function(){
      $(".usage_disp").toggle();
    });
});