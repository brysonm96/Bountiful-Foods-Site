const url = 'https://api.openweathermap.org/data/2.5/forecast?zip=92008,us&appid=3b1b19053e48d18e28493beef10873c1&units=imperial';

//request to OpenWeatherMap API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const forecast = document.querySelector("#forecast");
    
    //display forecast for the next 3 days
    for (let i = 0; i < 3; i++) {
        const date = new Date(data.list[i*8].dt_txt); 
        const temp = data.list[i*8].main.temp; 
        
        const options = { weekday: 'long' }; 
        const weekday = new Intl.DateTimeFormat('en-US', options).format(date); 
      
      const div = document.createElement("div");
      div.setAttribute("id", "day" + (i+1));
      
      div.innerHTML = `
      <p>${weekday}</p>
      <p>Temperature: ${temp} &#8457;</p>`;
        
      forecast.appendChild(div);//append the new div to the forecast element
    }
  })
  .catch(error => console.error(error));