

let timing = () => {

  let cityName = document.querySelector(`#cityName`).value;

  axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=""&method=8`)
    .then(function (response) {


      const api = response.data;
      console.log(api)

      document.querySelector(`#T-Zone`).innerHTML = `<h3 id="tZHead"> Time Zone : </h3>  <p idF="tZPara"> ${api.data.meta.timezone} </p> ` ;
      document.querySelector(`#dateH`).innerHTML = `   ${api.data.date.hijri.day}`;
      document.querySelector(`#monthH`).innerHTML = `   ${api.data.date.hijri.month.ar}`;
      document.querySelector(`#yearH`).innerHTML = `  ${api.data.date.hijri.year}`;
      document.querySelector(`#weekDay`).innerHTML = `  ${api.data.date.hijri.weekday.ar}`;
      document.querySelector(`#midNight`).innerHTML = ` <p class="pHead"> Midnight   </p> <p class="time"> ${api.data.timings.Midnight} </p> `;
      document.querySelector(`#Imsak`).innerHTML = ` <p class="pHead"> Imsak    </p>  <p class="time"> ${api.data.timings.Imsak} </p> `;
      document.querySelector(`#fajr`).innerHTML = ` <p class="pHead"> Fajr   </p>  <p class="time"> ${api.data.timings.Fajr} </p> `;
      document.querySelector(`#sunrise`).innerHTML = ` <p class="pHead"> Sunrise   </p>  <p class="time"> ${api.data.timings.Sunrise} </p> `;
      document.querySelector(`#duhur`).innerHTML = ` <p class="pHead"> Duhur  </p>  <p class="time"> ${api.data.timings.Dhuhr} </p> `;
      document.querySelector(`#asar`).innerHTML = ` <p class="pHead"> Asar   </p>  <p class="time"> ${api.data.timings.Asr} </p> `;
      document.querySelector(`#sunset`).innerHTML = ` <p class="pHead"> Sunset   </p>  <p class="time"> ${api.data.timings.Sunset} </p> `;
      document.querySelector(`#maghrib`).innerHTML = ` <p class="pHead"> Maghrib    </p>  <p class="time"> ${api.data.timings.Maghrib} </p> `;
      document.querySelector(`#isha`).innerHTML = ` <p class="pHead"> Isha    </p>  <p class="time"> ${api.data.timings.Isha} </p> `;


    })


}