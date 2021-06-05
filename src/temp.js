import removeAllChildNodes from './removeAllChildNodes'

const temp = async (input) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=6828c8e901ce61eba78b5d02535eeed1&units=imperial`;

  const grab = await fetch(url, {
    method: 'GET',
    mode: 'cors',
  })

  let grab2 = grab.json();
  

  const weatherInfo = document.querySelector('.feedBack');
  let temp = document.createElement('p');

  let degree = document.createElement('span');
  degree.innerHTML = '&nbsp;  &#176;';
  degree.setAttribute('color', 'whitesmoke');
  // degree.setAttribute('font-weight', 'bolder');
  degree.setAttribute('font-size', '1rem');

  

  grab2.then(function(result){
    console.log(result);
    temp.innerText = result.main.temp
    temp.appendChild(degree);
    removeAllChildNodes(weatherInfo);
    weatherInfo.appendChild(temp);
  });
}

export default temp;
