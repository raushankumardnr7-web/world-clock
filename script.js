const timeZones = {
  india: "Asia/Kolkata",
  usa: "America/New_York",
  japan: "Asia/Tokyo",
  china: "Asia/Shanghai",
  russia: "Europe/Moscow",
  germany: "Europe/Berlin",
  france: "Europe/Paris",
  uk: "Europe/London",
  canada: "America/Toronto",
  australia: "Australia/Sydney",
  dubai: "Asia/Dubai",
  singapore: "Asia/Singapore"
};

let interval;

function showTime() {

  clearInterval(interval);

  const country =
    document.getElementById("country")
    .value
    .toLowerCase()
    .trim();

  const zone = timeZones[country];

  if(!zone){
    alert("Country not found!");
    return;
  }

  document.getElementById("location")
  .innerText = country.toUpperCase();

  function updateClock(){

    const time = new Date()
      .toLocaleTimeString("en-US",{
        timeZone: zone
      });

    document.getElementById("time")
    .innerText = time;
  }

  updateClock();

  interval = setInterval(updateClock,1000);
}