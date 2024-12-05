
const topBarCenterText = ``;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["FF000F", "NWS Alert", "https://alerts.weather.gov/search?zone=SDC127", "1.7"],
  ["2196F3", "Air Quality", "https://gispub.epa.gov/airnow/?forecastcontours=forecasttomorrow&tab=loops&xmin=-11587177.532531567&xmax=-9708661.125395574&ymin=4873567.469572606&ymax=5612254.910920352&showlegend=no", "1"],
  ["2196F3", "River Level", "https://water.noaa.gov/wfo/fsd#@=-96.782939,42.7355704,6.8942545&b=topographic&g=obsFcst,1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!0!0!0!0!0,0.5,1!1!1!1!0,0,0&ab=0,0,#D94B4A,1,1,1,#cccccc,1,0,0,#B243B1,1,0,0,#98E09A,1&a=hydrologic,0.35&s=0,0,0.9,0.9&n=false,#72afe9,0.9,0,0.9,0,0.9&p=false,0.75,0,7,0,1,2024,12,4,0&d=0,0,1,1,1,1,1,1,#006EFF,1,#006EFF,1,#006EFF,1,#006EFF,1,#006EFF&q=wfo%3AFSD", "1", "R"],
  ["2196F3", "SkyWarn", "", "1", "R"],
  ["2196F3", "NOAA HRRR-Smoke", "https://apps.gsl.noaa.gov/smoke/", "1.2"],
  ["2196F3", "RADAR", "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON", "1", "R"],
  ["2196F3", "Traffic", "https://trafficview.org/live_traffic/#11/42.5594/-96.4652", "1", "R"],


];

// Dashboard items (12 placeholders)
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/UPPERMISSVLY_loop.gif"],
  ["Weather", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=4", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=5", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=6", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=7", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx&n=8", "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif"],
  ["Hazards", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=4", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=5", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=6", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=7", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=8"],
  ["Tornado & Severe Weather", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=tornadoprob&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=tornadoprob&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=totalsvrprob&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=totalsvrprob&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=totalsvrprob&n=3"],
  ["Tempurature", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=4", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=5", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=6", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=7", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t&n=8"],
  ["Rain Probobility", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=2"],
  ["Snow Probobility", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=2"],
  ["LIGHTNING LOCAL", "https://www.blitzortung.org/en/Images/image_b_mn.png"],
  ["Wind", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=4", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=5", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=6", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=7", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd&n=8"],
  ["Rain Total", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=4"],
  ["Snow Total", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=1", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=2", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=3", "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=4"],
  ["", "https://www.hamqsl.com/solar101vhf.php", "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544", "https://www.timeanddate.com/scripts/sunmap.php"]
];


// Image rotation intervals (12 values matching the tiles)
const tileDelay = [
  10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 
  10000, 10000, 10000, 10000
];
