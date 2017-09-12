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

  //In making optimization, let's only calculate visibility % only if ad is partially appearing.
  //The approach is to subtract the not visible area of the ad from the area of the ad to get
  //visibility %.

  if (ad.yBottom > 0 && ad.yTop < 0) {
    let notVisibleAreaAd = ad.area() - ( ad.width * Math.abs(ad.yTop) )
    return ( (notVisibleAreaAd / ad.area() ) * 100 )
  } else if (ad.yBottom > 0) {
    return 100
  } else {
    return 0
  }
}




