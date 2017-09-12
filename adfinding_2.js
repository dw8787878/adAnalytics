function getInviewPercent(){

  let image = document.getElementsByTagName("img")[0];
  let rect = image.getBoundingClientRect();
  let ad = {
    xLeft : rect.left,
    xRight : rect.right,
    yTop : rect.top,
    yBottom : rect.bottom,
    height : rect.bottom - rect.top,
    width : rect.right - rect.left,
    area : function() {return this.height * this.width;}
  }

  let innerWinHeight = window.innerHeight
  let innerWinWidth = window.innerWidth
  let notVisibleAreaTop = 0
  let notVisibleAreaBottom = 0

  //If top of the ad is cutoff
  if (ad.yTop < 0) {
    notVisibleAreaTop = ad.width * Math.abs(ad.yTop)
  }

  //If bottom of the ad is cutoff
  if (innerWinHeight - ad.yBottom < 0) {
    notVisibleAreaBottom = ad.width * Math.abs(innerWinHeight - ad.yBottom)
  }

  let notVisibleAreaAdTotal = notVisibleAreaTop + notVisibleAreaBottom

  if (notVisibleAreaAdTotal >= ad.area()) {
    return 0
  }

  // There is one edge case I cannot figure out right now, where the ad top and bottom extend the full inner viewport height, and beyond.  It should return 100%, event though there are extended cutoff portions on both ends...
  if ( notVisibleAreaAdTotal === 0) {
    return 100
  }

  if (notVisibleAreaAdTotal > 0) {
    return ( ((ad.area() - notVisibleAreaAdTotal) / ad.area() ) * 100 )
  }

}
