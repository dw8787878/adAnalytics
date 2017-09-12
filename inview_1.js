function getInviewTime(){

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

  let interval

  if (percentageVisible(ad) >= 50) {
     interval = startTimer()
     return interval
  } else {
     clearInterval(interval)
     return 0
  }
}

function percentageVisible(ad){
    let notVisibleAreaAd = ad.area() - ( ad.width * Math.abs(ad.yTop) )
    return ( (notVisibleAreaAd / ad.area() ) * 100 )
}

function startTimer(){
  let counter = 0
  return setInterval(counter++, 1)
}



