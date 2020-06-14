



  $(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');
      // ctx.scale(0.3,0.3);

    video.addEventListener('play', function() {
  var $this = this; //cache
  (function loop() {
    if (!$this.paused && !$this.ended) {
      ctx.drawImage($this, 0, 0);
  setTimeout(loop, 1000 / 30); // drawing at 30fps
}
})();
}, 0);

  });


  function updateSpeed() {
    $(function() {
            var video = document.getElementById('video');
            const rate = parseFloat(getRadioValueByName('speed'))
            console.log('new rate',rate)
            video.playbackRate = rate
    });
  }

  function getRadioValueByName(name) { 
    var ele = document.getElementsByName(name); 
    for(i = 0; i < ele.length; i++) { 
      if(ele[i].checked) return ele[i].value;
    }
  } 

let isPlaying = false
function togglePlayback() {
    $(function() {
            var video = document.getElementById('video');
            if (isPlaying) {
                video.pause();
              } else {
                video.play();
              }
            isPlaying = !isPlaying
    });
  }