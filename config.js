
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
  ["2196F3", "Road Conditions", "https://www.sd511.org/#&lon=-96.99146026120707&lat=42.79564603930697&zoom=8.676597756805556&road-cond", "1"],
  ["2196F3", "Outlook", "https://www.climate.gov/news-features/understanding-climate/us-climate-outlook-january-2025", "1"],
  ["2196F3", "RADAR", "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON", "1", "R"],
  ["2196F3", "Traffic", "https://trafficview.org/live_traffic/#11/42.5594/-96.4652", "1", "R"],
  ["2196F3", "Air Traffic", "https://www.flightradar24.com/multiview/42.71,-96.53/9", "1", "R"],


];

// Function to generate the URLs for each category
function generateUrls(baseUrl, startIndex, endIndex) {
  let urls = [];
  for (let i = startIndex; i <= endIndex; i++) {
    urls.push(`${baseUrl}&n=${i}`);
  }
  return urls;
}

// Dashboard items (12 placeholders)
const aIMG = [
  ["", 
    "https://radar.weather.gov/ridge/standard/UPPERMISSVLY_loop.gif", 
    "https://www.cpc.ncep.noaa.gov/products/predictions/threats/temp_probhazards_d8_14_contours.png", 
    "https://www.cpc.ncep.noaa.gov/products/predictions/threats/precip_probhazards_d8_14_contours.png", 
    "https://www.cpc.ncep.noaa.gov/products/predictions/threats/snow_probhazards_d8_14_contours.png", 
    "https://www.cpc.ncep.noaa.gov/products/predictions/threats/wind_probhazards_d8_14_contours.png"
  ],
  ["Weather", 
    ...generateUrls("https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wx", 1, 17)
  ],
  ["Severe Weather Probability", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=totalsvrprob&n=1", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=totalsvrprob&n=2", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=totalsvrprob&n=3"
  ],
  ["Hazards", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=1", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=2", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=3", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=4", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=5", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=6", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=7", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=wwa&n=8"
  ],
  ["Temperature", 
    ...generateUrls("https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=t", 1, 17)
  ],
  ["Precipitation Probability", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=1", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=2", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=3", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=4", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=5", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=6", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=7", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=8", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=9", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=10", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=pop12&n=11"
  ],
  ["Tornado Probability", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=tornadoprob&n=1", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=tornadoprob&n=2"
  ],
  ["LIGHTNING LOCAL", 
    "https://www.blitzortung.org/en/Images/image_b_mn.png"
  ],
  ["Wind", 
    ...generateUrls("https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=windspd", 1, 17)
  ],
  ["Rain Total", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=1", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=2", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=3", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=4", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=5", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=6", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=7", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=8", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=9", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=10", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=11", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=12", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=13", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=qpf&n=14"
  ],
  ["Snow Total", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=1", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=2", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=3", 
    "https://graphical.weather.gov/GraphicalNDFD.php?width=515&timezone=CST&sector=NORTHPLAINS&element=snowamt&n=4"
  ],
  ["", 
    "https://sd.cdn.iteris-atis.com/camera_images/CSDJNC/1/latest.jpg", 
    "https://sd.cdn.iteris-atis.com/camera_images/CSDJNC/2/latest.jpg", 
    "https://sd.cdn.iteris-atis.com/camera_images/CSDGYV/1/latest.jpg", 
    "https://sd.cdn.iteris-atis.com/camera_images/CSDGYV/3/latest.jpg", 
    "https://www.hamqsl.com/solar101vhf.php", 
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544", 
    "https://www.timeanddate.com/scripts/sunmap.php"
  ]
];

// Displaying URLs for testing
console.log(aIMG);


// Image rotation intervals (12 values matching the tiles)
const tileDelay = [
  0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0
];
