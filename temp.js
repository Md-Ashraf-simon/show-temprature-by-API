const Api_Key = `46ad7457603b9b0104e633e78cd60e16`;

const allCountryCityTemp = () => {
    const input = document.getElementById('serch-result');
    const city = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))

}

const showtemp = (id, Text) => {
    document.getElementById(id).innerText = Text;
}

const displayTemp = temp => {
    console.log(temp)
    showtemp('city', temp.name);
    showtemp('temp', temp.main.temp)
    showtemp('Clouds', temp.weather[0].main)

    // set the temp icon --->

    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const iconImage = document.getElementById('tempIcon');
    iconImage.setAttribute('src', url)
}