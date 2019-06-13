  $(document).ready(function(){
    var thermostat = new Thermostat();
    $('.temp_disp').val(thermostat.temperature)
    var knobColour = 'orange';
    var city = 'London';
    var cityId = '2643743'
    

    var response;
    function Weather() {
      $.get('https://api.openweathermap.org/data/2.5/weather?id='+cityId+'&appid='+api_key, function(data) {
        response = data;
        console.log(response.weather[0]['main'])
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#weather_disp').attr('src',iconurl);
      });
    };

    Weather();

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
        "fgColor":"blue",
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
      $('.usage_disp').text(thermostat.usage());
    }) 

    $(".usage").click(function(){
      $(".usage_disp").toggle();
    });

    $('#cityPicker').change(function() {
      cityId = $('#cityPicker').val();
      Weather();
    });
});