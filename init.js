const URL = 'https://us-central1-vancouver-6aa33.cloudfunctions.net/api/cities'
function init() {
    const nav = document.getElementById('nav')
    fetch(URL)
      .then(result => result.json())
      .then(data => {
        const cities = data.result.cities;
        cities.forEach((city, i) => {
          const tab = document.createElement('li');
          tab.innerText = city.label;
          tab.className = ('tab');
          tab.id = i;
          nav.appendChild(tab)
        })
      })
  }
  
  init()
  
  