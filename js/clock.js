//Clock Settings
function clock(){
  //date and time settings
  d = new Date();
  day = d.toDateString();
  h = ("0" + d.getHours()).slice(-2);
  m = ("0" + d.getMinutes()).slice(-2);
  s = ("0" + d.getSeconds()).slice(-2);
  time = h + ":" + m + ":" + s;
  //moments settings
  dday = moment("20220101", "YYYYMMDD").fromNow();
  bday = moment("0821", "MMDD").fromNow();
  //clock display
  document.getElementById('clock').innerHTML =
  day + " @ " + time + " | " +
  "DDay: " + dday + " | " +
  "BDay: " + bday + " | ";
}
setInterval(clock, 1000);
