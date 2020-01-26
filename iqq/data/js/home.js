//Code to run when page is loaded
function initScript()
{
  //Booting up time patch
  startTime();
}

//Function set for the NavButton on home page
var navMenuExpanded = false;
function toggleNavScreen()
{
  //CLOSE NAV MENU
  if (navMenuExpanded == true)
  {
    document.getElementById("menuOverlayElement").style.height = "0%";
    //document.getElementById("menuOpenButton").style.height = "5%";
    document.getElementById("menuOpenButton").style.opacity = "1";
    navMenuExpanded = false;
  }
  //OPEN NAV MENU
  else
  {
    document.getElementById("menuOverlayElement").style.height = "100%";
    //document.getElementById("menuOpenButton").style.height = "0%";
    document.getElementById("menuOpenButton").style.opacity = "0";
    navMenuExpanded = true;
  }
}
//FUNCTION FOR DISPLAYING TIME ON THE ELEMENT IN NAV MENU in DD/MM/YYYY | HH:MM:SS <TIME_ZONE>
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('timePatch').innerHTML = today;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();
