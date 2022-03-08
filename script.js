let tiempo = {
  apiKey: "c86ec7e8e063f8673a9634667bcfad3f",
  fetchTiempo: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No se encuentra el tiempo.");
          throw new Error("No se encuentra el tiempo.");
        }
        return response.json();
      })
      .then((data) => this.displayTiempo(data));
  },

  displayTiempo: function(data) {
  	const { name, visibility } = data;
  	const { temp, humidity } = data.main;
  	const { speed } = data.wind;
  	const { description } = data.weather[0];
  	console.log(name, temp, humidity, speed, visibility, description)
  	document.querySelector(".city").innerText = "El tiempo en " + name;
  	document.querySelector(".temperatura").innerText = "Temperatura: " + temp + "ºC";
    document.querySelector(".humedad").innerText = "Humedad: " + humidity + "%";
    document.querySelector(".viento").innerText = "Velocidad viento: " + speed + "km/h";
    document.querySelector(".visibilidad").innerText = "Visibilidad: " + visibility + "km";
    document.querySelector(".descripcion").innerText = "Descripcion " + description;
  },
  search: function(){
    this.fetchTiempo(document.querySelector(".ciudad").value);
  },

};

document.querySelector(".ciudad").addEventListener("click",function () {
  tiempo.search();

});

document.querySelector(".ciudad").addEventListener("keyup", function(event){
  if (event.key == "click") {
    tiempo.search();
  }

});

tiempo.fetchTiempo("Malaga");
 

