function showMenu(){
  menu = true;
  // game = true;
  canvas.style.cursor = 'none';
}

function populateClouds () {
  for(let row = 0; row < ROW; row+= 1) {
    for(let column = 0; column< COLUMN; column+=1) {
      CLOUD_POSITION.push({
        x: COLUMN_INITIALPOS[row] + CLOUD_WIDTH * (column) * CLOUD_SPACING,
        y: ROW_INITALPOS[row],
      })
    }
  }
}

function showPercentage(loaded, total) {
  clearAll();
  const loadPercentage =  Math.round((loaded / total) * 100);
  ctx.font = "50px eightBitFont";
  ctx.fillText(loadPercentage + "%",SCREEN_WIDTH / 2 - 50, SCREEN_HEIGHT / 2);

}


window.onload = (e) => {
  let assetsLoaded = 0;

  let images = IMAGES;
  let sounds = SOUNDS;
  let totalAssets = images.length + sounds.length;
  populateClouds();

  ctx.font = "50px eightBitFont";
  ctx.fillText("0%",SCREEN_WIDTH / 2 - 50, SCREEN_HEIGHT / 2);


  images.forEach(v => {
    const { id } = v;
    const img = new Image();
    img.src = v.src;
    img.onload = (e) => {
      assetsLoaded += 1;
      loadedImages[id] = img;
      showPercentage(assetsLoaded, totalAssets);
      if (totalAssets === assetsLoaded) {
        showMenu();
      }
    }
  });



  sounds.forEach(s => {
    const { src, id } = s;
    const audio = document.createElement("audio");
    audio.src = src;
    audio.setAttribute("preload", "auto");
    audio.setAttribute("controls", "none");
    audio.style.display = "none";
    document.body.appendChild(audio);
    audio.onloadstart = (e) => {
      assetsLoaded +=1;
      loadedSounds[id] = audio;
      showPercentage(assetsLoaded, totalAssets);
      if (totalAssets === assetsLoaded) {
        showMenu();
      }
    }
  })

}
