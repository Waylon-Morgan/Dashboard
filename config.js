const topBarCenterText = ``;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  ["2196F3", "CONTEST", "https://www.contestcalendar.com/fivewkcal.html", "1"],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R"],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  ["2196F3", "RADAR", "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON", "1", "R"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000", "1", "R"],
];

// Dashboard items (12 placeholders)
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif"],
  ["LOCAL RADAR", "https://radar.weather.gov/ridge/standard/UPPERMISSVLY_loop.gif", "https://www.timeanddate.com/scripts/sunmap.php"],
  ["NOAA D-RAP & Grey line", "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"],
  ["ISS POSITION", "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"],
  ["SATELLITE", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif"],
  ["LOCAL SATELLITE", "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/umv/GEOCOLOR/GOES16-UMV-GEOCOLOR-600x600.gif"],
  ["LIGHTNING", "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"],
  ["LIGHTNING LOCAL", "https://www.blitzortung.org/en/Images/image_b_mn.png"],
  ["Forecast & Activity", "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif", "https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif", "https://www.spc.noaa.gov/products/watch/validww.png", "https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif", "https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png", "https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif"],
  ["Convective Outlook", "https://www.spc.noaa.gov/products/outlook/day1otlk_1300.gif", "https://www.spc.noaa.gov/products/outlook/day2otlk_0600.gif", "https://www.spc.noaa.gov/products/outlook/day3otlk_0730.gif", "https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif"],
  ["Charts and Fronts", "https://www.wpc.ncep.noaa.gov/sfc/namussfc12wbg.gif", "https://www.wpc.ncep.noaa.gov/medr/9jhwbg_conus.gif"],
  ["HF PROPAGATION", "https://www.hamqsl.com/solar101vhf.php"]
];

// Image rotation intervals (12 values matching the tiles)

const tileDelay = [
  5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 
  5000, 5000, 5000, 5000
];
