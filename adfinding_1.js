function getInviewPercent(){

  let allImages = document.getElementsByTagName("img")
  let allImagesStrinArr = [], moatAdImage

  let regEx = /(moat)/ig

  for (let i = 0; i < allImages.length; i++){
    if (allImages[i].currentSrc.toString().match(regEx)){
      moatAdImage = allImages[i]
    }
  }

  let rect = moatAdImage.getBoundingClientRect();
  let ad = {
    xLeft : rect.left,
    xRight : rect.right,
    yTop : rect.top,
    yBottom : rect.bottom,
    height : rect.bottom - rect.top,
    width : rect.right - rect.left,
    area : function() {return this.height * this.width;}
  }

  if (ad.yBottom > 0 && ad.yTop < 0) {
    let notVisibleAreaAd = ad.area() - ( ad.width * Math.abs(ad.yTop) )
    return ( (notVisibleAreaAd / ad.area() ) * 100 )
  } else if (ad.yBottom > 0) {
    return 100
  } else {
    return 0
  }
}
