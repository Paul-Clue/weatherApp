import removeAllChildNodes from './removeAllChildNodes';

let tempType = [];
if (localStorage.getItem('tempType') === null) {
  localStorage.setItem('tempType', JSON.stringify([]));
} else {
  tempType = JSON.parse(localStorage.getItem('tempType'));
}

const fahCel = document.querySelector('.fahCel');
let fahCel2 = '';
tempType = JSON.parse(localStorage.getItem('tempType'));

if (tempType[0] === undefined) {
  fahCel.value = 'Get Celsius';
  fahCel2 = 'imperial';
} else {
  if (tempType[0] === 'Get Fahrenheit') {
    fahCel.value = 'Get Celsius';
    fahCel2 = 'metric';
  } else {
    fahCel.value = 'Get Fahrenheit';
    fahCel2 = 'imperial';
  }
  fahCel.value = tempType[0];// eslint-disable-line
}

const weatherInfo = document.querySelector('.feedBackDiv');
const place = document.createElement('p');

const condition = document.createElement('p');

const degree = document.createElement('span');
if (fahCel.value === 'Get Fahrenheit') {
  degree.innerHTML = '&nbsp;  &#176; C';
} else {
  degree.innerHTML = '&nbsp;  &#176; F';
}

degree.setAttribute('color', 'whitesmoke');

degree.setAttribute('font-size', '1rem');

const temp2 = document.createElement('p');

let input2 = '';

const temp = async (input) => {
  input2 = input;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6828c8e901ce61eba78b5d02535eeed1&units=${fahCel2}`;

  const grab = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  }).then((response) => {
    if (!response.ok) {
      alert(response.statusText);
      throw Error(response.statusText);
    }
    return response;
  });

  const grab2 = grab.json();

  grab2.then((result) => {
    place.innerText = `${result.name} ${result.sys.country}`;
    condition.innerText = result.weather[0].main;

    temp2.innerText = result.main.temp;
    temp2.appendChild(degree);
    if (weatherInfo.firstChild === null) {
      weatherInfo.firstChild = null;
      weatherInfo.appendChild(place);
      weatherInfo.appendChild(condition);
      weatherInfo.appendChild(temp2);
    } else {
      removeAllChildNodes(weatherInfo);
      weatherInfo.appendChild(place);
      weatherInfo.appendChild(condition);
      weatherInfo.appendChild(temp2);
    }

    let weather = '';
    if (result.weather[0].main === 'Clear') {
      weather = 'sun';
    } else {
      weather = result.weather[0].main;
    }

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=${weather}`, { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          alert(response.statusText + " Retry");
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        document.body.style.backgroundImage = `url(${response.data.images.original.url})`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
      });
  });
};

const changeTemp = async () => {
  if (fahCel.value === 'Get Fahrenheit') {
    tempType = JSON.parse(localStorage.getItem('tempType'));
    tempType[0] = 'Get Celsius';
    fahCel.value = 'Get Celsius';
    fahCel2 = 'imperial';
    localStorage.setItem('tempType', JSON.stringify(tempType));
    degree.innerHTML = '&nbsp;  &#176; F';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=6828c8e901ce61eba78b5d02535eeed1&units=${fahCel2}`;

    const grab = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    }).then((response) => {
      if (!response.ok) {
        alert(response.statusText + " Retry");
        throw Error(response.statusText);
      }
      return response;
    });

    const grab2 = grab.json();

    grab2.then((result) => {
      place.innerText = `${result.name} ${result.sys.country}`;
      temp2.innerText = result.main.temp;

      temp2.appendChild(degree);
    });
  } else {
    tempType = JSON.parse(localStorage.getItem('tempType'));
    tempType[0] = 'Get Fahrenheit';
    fahCel.value = 'Get Fahrenheit';
    fahCel2 = 'metric';
    localStorage.setItem('tempType', JSON.stringify(tempType));
    degree.innerHTML = '&nbsp;  &#176; C';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=6828c8e901ce61eba78b5d02535eeed1&units=${fahCel2}`;

    const grab = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    }).then((response) => {
      if (!response.ok) {
        alert(response.statusText);
        throw Error(response.statusText + " Retry");
      }
      return response;
    });

    const grab2 = grab.json();

    grab2.then((result) => {
      place.innerText = `${result.name} ${result.sys.country}`;
      temp2.innerText = result.main.temp;

      temp2.appendChild(degree);

      if (weatherInfo.firstChild === null) {
        weatherInfo.firstChild = null;
        weatherInfo.appendChild(place);
        weatherInfo.appendChild(condition);
        weatherInfo.appendChild(temp2);
      } else {
        removeAllChildNodes(weatherInfo);
        weatherInfo.appendChild(place);
        weatherInfo.appendChild(condition);
        weatherInfo.appendChild(temp2);
      }
    });
  }
};

const changeBut = document.querySelector('.fahCel');
changeBut.addEventListener('click', changeTemp);

export default temp;
