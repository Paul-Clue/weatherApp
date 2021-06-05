import temp from './temp'

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=Clouds`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      document.body.style.backgroundImage = `url(${response.data.images.original.url})`;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
    });

const runTemp = () => {
  let input = document.querySelector('#location');
  temp(input.value);
}

const butt = document.querySelector('.locationButton');
butt.addEventListener('click', runTemp);

const img = document.querySelector('.body');

