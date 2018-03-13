// $(document).ready(function() {
// 	$('#getWeatherZip').click(function() {
// 		var zip = $('#zip').val();
// 		console.log(zip);
// 		if (zip != "") {
// 			$.ajax({
// 				url: 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + "&units=imperial" + "&APPID=ae36112ec88d99f153f8a75484b09f50",
// 				type: 'GET',
// 				dataType: 'json',
// 				success: function(abby) {
// 					var wind = abby.wind.speed;
// 					wind = wind.toFixed(0);
// 					var tempZ = abby.main.temp;
// 					var nameZ = abby.name;
// 					var fTempZ = abby.main.temp;
// 					fTempZ = fTempZ.toFixed(0);
// 					var cTempZ;
// 					cTempZ = (tempZ - 32) * 5 / 9;
// 					cTempZ = cTempZ.toFixed(0);
// 					var weatherZ = showWeather(abby);
// 					$('#error2').html('');
// 					$("#city2").html("<h2>in " + nameZ + "</h2>");
// 					$(".switchZip").html("<h3>Current Temp: " + fTempZ + "&#8457;</h3>");
// 					$(".switch2Zip").html("<h3>Current Temp: " + cTempZ + "&#8451;</h3>");
// 					$('#display2').html(weatherZ);
// 				}
// 			});
// 		} else {
// 			$('#error2').html('you must type a zip code');
// 		}
// 	});

// 	function showWeather(abby) {
// 		return "<h3>" + abby.weather[0].main + "</h3>" + "<h3>" + abby.weather[0].description + "<img src='https://openweathermap.org/img/w/" + abby.weather[0].icon + ".png'></h3>" + "<h3>Wind: " + abby.wind.speed.toFixed(0) + " mph</h3>" + "<h3>Humidity: " + abby.main.humidity + "%</h3>";
// 	}
// 	$("#tempSwitchZip").click(function() {
// 		$(".switchZip").toggle();
// 		$("#tempSwitchZip") + $(".switch2Zip").toggle();
// 	});
// });