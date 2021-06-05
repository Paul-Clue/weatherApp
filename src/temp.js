import removeAllChildNodes from './removeAllChildNodes'

let tempType = [];
if (localStorage.getItem('tempType') === null) {
  localStorage.setItem('tempType', JSON.stringify([]));
} else {
  tempType = JSON.parse(localStorage.getItem('tempType'));
}


const fahCel = document.querySelector('.fahCel');
let fahCel2 = '';
tempType = JSON.parse(localStorage.getItem('tempType'));

if(tempType[0] === undefined){
  fahCel.value = 'Get Celsius';
  fahCel2 = 'imperial';
}else{
  
  if(tempType[0] === 'Get Fahrenheit'){
    
    fahCel.value = 'Get Celsius';
    fahCel2 = 'metric';
  }else{
    fahCel.value = 'Get Fahrenheit';
    fahCel2 = 'imperial';
  }
  fahCel.value = tempType[0];
}

const changeTemp = () => {
  if(fahCel.value === 'Get Fahrenheit'){
    tempType = JSON.parse(localStorage.getItem('tempType'));
    tempType[0] = 'Get Fahrenheit';
    fahCel.value = 'Get Celsius';
    fahCel2 = 'imperial';
    localStorage.setItem('tempType', JSON.stringify(tempType));

  }else{
    tempType = JSON.parse(localStorage.getItem('tempType'));
    tempType[0] = 'Get Celsius';
    fahCel.value = 'Get Fahrenheit';
    fahCel2 = 'metric';
    localStorage.setItem('tempType', JSON.stringify(tempType));
  }
}

let changeBut = document.querySelector('.fahCel');
changeBut.addEventListener('click', changeTemp);

const temp = async (input) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6828c8e901ce61eba78b5d02535eeed1&units=${fahCel2}`;

  const grab = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  })

  let grab2 = grab.json();
  

  const weatherInfo = document.querySelector('.feedBackDiv');
  let place = document.createElement('p');
  let temp = document.createElement('p');

  let condition = document.createElement('p');

  let degree = document.createElement('span');
  if(fahCel.value === 'Get Fahrenheit'){
    degree.innerHTML = '&nbsp;  &#176; C';
  }else{
    degree.innerHTML = '&nbsp;  &#176; F';
  }
  
  degree.setAttribute('color', 'whitesmoke');
 
  degree.setAttribute('font-size', '1rem');

  

  grab2.then(function(result){
    place.innerText = result.name + ' ' +  result.sys.country;
    condition.innerText = result.weather[0].main;
    
    temp.innerText = result.main.temp;
    temp.appendChild(degree);
    if(weatherInfo.firstChild === null){
      weatherInfo.firstChild = null;
      weatherInfo.appendChild(place);
      weatherInfo.appendChild(condition);
      weatherInfo.appendChild(temp);
    }else{
      removeAllChildNodes(weatherInfo);
      weatherInfo.appendChild(place);
      weatherInfo.appendChild(condition);
      weatherInfo.appendChild(temp);
    }

    let weather = ''
    if(result.weather[0].main === "Clear"){
      weather = 'sun';
    }
    else{
       weather = result.weather.main;
    }

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=${weather}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {

      document.body.style.backgroundImage = `url(${response.data.images.original.url})`;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
    });
  });
}

export default temp;
