console.log("Javascript de web!!!");

// Procesar resultados del webservice
    function webServiceResult(data){
      $("#resultado_json").empty();    
      $("#resultado_json").append("Nombre: "+data.name+"<br>");
      $("#resultado_json").append("Pais: "+data.sys.country+"<br>");
      $("#resultado_json").append("Longitud: "+data.coord.lon+"<br>");
      $("#resultado_json").append("Latitud: "+data.coord.lat+"<br>");
      $("#resultado_json").append("Tiempo: "+data.weather[0].main+"<br>");
      $("#resultado_json").append("&nbsp;&nbsp;"+data.weather[0].description+"<br>");
      $("#resultado_json").append("Humedad: "+data.main.humidity+"<br>");
      var tmin = Math.round(10*(data.main.temp_min -273.15)) / 10;
      var tmax = Math.round(10*(data.main.temp_max -273.15)) / 10 ;
      $("#resultado_json").append("Temp. minima: "+tmin+"<br>");
      $("#resultado_json").append("Temp. maxima: "+tmax+"<br>");
    }     
    // Llamada al webservice
    function callWebService(){
      try{ 
        $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather",
          data:
          {
              q: "Cordoba,es",
          },
          type: "get",
          async: true,
          contentType: "text/json; charset=utf-8",
          dataType: "jsonp",        
          success: function(msg) { webServiceResult(msg) },
          error: function(jqXmlHttpRequest, textStatus, errorThrown) { alert("Error leyendo datos."); }
        });
      } 
      catch (err) 
      {
        alert(err);
      }
    }