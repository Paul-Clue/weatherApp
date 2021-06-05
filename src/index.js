import temp from './temp'

//API KEY FOR GIF: DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR
//  API KEY FOR WEATHER: 6828c8e901ce61eba78b5d02535eeed1

// KEY USAGE WEATHER: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6828c8e901ce61eba78b5d02535eeed1
// KEY USAGE GIF: 'https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s=cats'


// let input = document.querySelector('.userInput');
// async function postData(url = ''){
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors',
//   })
//   return response.json();
// }

// const run = () => {
//   let grab = postData(`https://api.openweathermap.org/data/2.5/weather?q=${input}ca&appid=6828c8e901ce61eba78b5d02535eeed1&units=imperial`);

//   const weatherInfo = document.querySelector('.feedBack');
//   let temp = document.createElement('p');

//   grab.then(function(result){
//     temp.innerText = result.main.temp
//     weatherInfo.appendChild(temp);
//   });
// }

const runTemp = () => {
  let input = document.querySelector('#location');
  temp(input.value);
}

const butt = document.querySelector('.locationButton');
butt.addEventListener('click', runTemp);

const img = document.querySelector('.body');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=cloud', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      // img.setAttribute('background-color', response.data.images.original.url);
      document.body.style.backgroundImage = `url(${response.data.images.original.url})`;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      // img.style.backgroundImage =  response.data.images.original.url;

    });

