// When user press ENTER Key
$(document).keypress(function (event){
    var keycode = event.keyCode ? event.keyCode : event.which;
    var input = $("#input").val();
    if (keycode == "13") {
        search(input);
      } 
})

// When user click on the search icon
$("#btn").on("click", function(){
    var input = $("#input").val();
    search(input);
});

// When user click on the city button
function locationbtn(input){
    var input = input[0].innerText;
    search(input);
}

// ajax call
function search(city){
    var apiURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=4561dbb858c01c0096262a7277c1ba4a";
    $.ajax({
        url: apiURL,
        method: "GET"
    }).done(function(data) {
        console.log(data);
        var lat = data.city.coord.lat;
        var lon = data.city.coord.lon;
        var dateArray = [];
        var iconArray = [];
        var id = [];
        for (i = 0; i < data.list.length; i++){
            var date = data.list[i].dt_txt.substring(0, 10);
            var icon = data.list[i].weather[0].icon;
            // Logic gate handle API output
            if (i === 0 || i % 8 === 0 || i === 39){
                dateArray.push(date);
                iconArray.push(icon);
                id.push(i);
            }
        }
        var location = data.city.name + " (" + dateArray[0] + ")" + "<img src='http://openweathermap.org/img/wn/" + iconArray[0] + "@2x.png' style='width: 5em;'>";
        var temperature1 = "Temperature: " + (data.list[0].main.temp - 273).toFixed(1) + String.fromCharCode(8451);
        var humidity1 = "Humidity: " + data.list[0].main.humidity + "%";
        var windspeed1 = "Wind Speed: " + data.list[0].wind.speed + " MPH";
        var uvurl = "http://api.openweathermap.org/data/2.5/uvi?appid=4561dbb858c01c0096262a7277c1ba4a&lat=" + lat + "&lon=" + lon;
        uvget(uvurl);
        $("#location-search").html(location);
        $("#temperature").text(temperature1);
        $("#humidity").text(humidity1);
        $("#windspeed").text(windspeed1);
        for (i = 0; i < 5; i++){
            var date = "Date: " + dateArray[i+1];
            var image = "http://openweathermap.org/img/wn/" + iconArray[i + 1] + "@2x.png";
            var temp = "Temp: " + (data.list[(id[i+1])].main.temp - 273).toFixed(1) + String.fromCharCode(8451);
            var humid = "Humidity: " + (data.list[(id[i+1])].main.humidity) + "%";
            $("#date" + (i + 1)).text(date);
            $("#image" + (i + 1)).attr("src", image);
            $("#temp" + (i + 1)).text(temp);
            $("#humid" + (i + 1)).text(humid);
        }
        $("#small-text").show();
    }).fail(function(){
        $("#location-search").text("No Result Searched, Please Try Again!!!!");
        $("#temperature").text("");
        $("#humidity").text("");
        $("#windspeed").text("");
        $("#uv").text("");
        $("#small-text").hide();
    })
}

function uvget(url){
    $.ajax({
    url: url,
    method: "GET"
}).done(function(data) {
    var uvValue = data.value;
    console.log(uvValue);
    if (uvValue < 3){
        var uvcardcolor = "bg-success";
    } else if (uvValue < 7){
        var uvcardcolor = "bg-warning";
    } else {
        var uvcardcolor = "bg-danger";
    }
    var uvcard = "<p>UV: </p>" + "<div class='card " + uvcardcolor + " text-white left'>" +
                    "<p class='card-text'>" + uvValue + "</p>" +
                "</div>"
    $("#uv").html(uvcard);

})
};

