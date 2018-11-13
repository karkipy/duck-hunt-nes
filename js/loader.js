

function startGame(){
  game = true;
}


window.onload = (e) => {
  let assetsLoaded = 0;

  let images = IMAGES;
  let sounds = SOUNDS;

  let totalAssets = images.length + sounds.length;

  images.forEach(v => {
    const { id } = v;
    const img = new Image();
    img.src = v.src;
    img.onload = (e) => {
      assetsLoaded += 1;
      loadedImages[id] = img;
      if (totalAssets === assetsLoaded) {
        startGame();
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
      if (totalAssets === assetsLoaded) {
        startGame();
      }
    }
  })

}
