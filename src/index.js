import temp from './temp';

const enter = document.querySelector('#location');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=DDO6wmRcjThYc6vRzRg6YFuHyCd0QOcR&s&s=Clouds', { mode: 'cors' })
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

const runTemp = () => {
  const input = document.querySelector('#location');
  temp(input.value);
};

const butt = document.querySelector('.locationButton');
butt.addEventListener('click', runTemp);

enter.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    runTemp();
  }
});