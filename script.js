

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQAueVn0quImZM20ATWUaKbmHpDGXv8gJ7pfoxZGlDuhlsbk5dI0TSbw3wztPvh2Z_5gvf5U3vrIOsrS8nBpCLMm5wNb_I-dL_a9YGgAlEzf3IrZODUDaNtKf2eXpBw6ciji2Vowlj3Dr367BWK0Mcn7mSnAF852';
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('accoun_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { console.log(state); });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  //   // Connect to the player!
  player.connect();
};

// Im just trying stuff here
var config = {
  apiKey: "AIzaSyD1LpWt0aCRsUr7Bia5jI-4gSZuD80w2AI",
  authDomain: "blairesproject.firebaseapp.com",
  databaseURL: "https://blairesproject.firebaseio.com"
}
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref();
ref.on("value", function (snapshot) {
  var newobject = snapshot.val();
  console.log(snapshot.val());
  console.log(newobject.A);
  
});

$(document).on('change', '#myRange', function () {
  $('#output11').html($(this).val());
  var spotifyVolume = $(this).val();
  console.log("S volume:" + spotifyVolume);
});

// var myUrl = "https://api.spotify.com/v1/me/player/volume?volume_percent="+ spotifyVolume +"";
//  $.ajax({
//   headers: {
//     "Authorization": "Bearer" + btoa("BQDJwB3lWOco2R-cr49-g1jhww-m0bZG0jYkQ5-5bSlf35vptqfcE4heQfx0J9nDryDdPEU0bwzh6P93qLBeJg70jJrEu_XPUXY6x9AHKldDf-j05ZtpELXlz8qyhIHrzaE6GU07yxJaRT7m2zt1S5Lu5mIHqiDR")
//   },
//   url: myUrl,
//   method: "PUT"
// });
var heartBeatVolume = .50;
$(document).on('change', '#myRange2', function () {
  heartBeatVolume = ($(this).val() / 100);
  audio.volume = heartBeatVolume;
  playheartbeat(1000, 1.79);
  $('#output12').html(heartBeatVolume);
  console.log("HB volume: " + heartBeatVolume);
});
//escape :wq
var audio = new Audio("https://cdn.glitch.com/3264852e-68ba-479c-a7bc-5383a47d9171%2Fdrumbeat%20(1).mp3?v=1581464866105");
var audio2 = new Audio("https://cdn.glitch.com/3264852e-68ba-479c-a7bc-5383a47d9171%2Fy2mate.com%20-%20kelly_clarkson_heartbeat_song_lyric_video_-ZZid0ybh8Q_144p.mp3?v=1581646341243");
var onswitch = true;
var switchon2 = true;
$(document).on("click", "#heartBeat-img", function () {
  playheartbeat(857, 2.15);
  console.log("hi");

  var heartrate = 875;
  var switchingvariable = 0;
  var speedinterval=2.15;

  
  setInterval(function () {
   
    ref.on("value", function (snapshot) {
      var newobject = snapshot.val();
      console.log(snapshot.val());
      var arrayofchildern =[newobject.A.value,newobject.B.value,newobject.C.value,newobject.D.value,newobject.E.value,newobject.F.value,newobject.G.value,newobject.H.value,newobject.I.value]
      console.log(arrayofchildern);
      var firebaseheartrate = arrayofchildern[switchingvariable];
      heartrate = (Math.floor(6000/(newobject.A.value)*10));
      var number12 = (firebaseheartrate*.36)/10;

      switchingvariable++;
speedinterval = number12+1-1.37;
console.log(speedinterval);
    })
    playheartbeat(heartrate, speedinterval);
  }
,10000);
});
$(".heartbeatsong").on("click", function () {
  if (onswitch === true) {
    clearInterval();
    audio2.play();
    onswitch = false;
  }
  else {
    clearInterval();
    audio2.pause();
    onswitch = true;
  }

});
var heartbeatisplaying = false
function playheartbeat(intervaltime, playbackrate1) {
  //audio.volume = heartBeatVolume;
  if (heartbeatisplaying === false) {
    heartbeatisplaying = true
    setInterval(function () {
      audio.playbackRate = playbackrate1;
      heartbeatanimation();
      audio.play();
      console.log("on")
    }, intervaltime);
  }

}
function heartbeatanimation(){
     clearInterval();
   $(document).ready(function animateHeart() {
        $('#heartBeat-img').animate({ height: "250px", width: "250px" },{duration:100});
        $('#heartBeat-img').animate({ height: "200px", width: "200px" },{duration:100});
      });
    }

  
// function animateheart(){
//1.79/2.15 = ratio
// ratio * bmp/70
// var number1= (8325/1000) ‬* (60/70)
// console.log((8325/1000)‬*(60/70));
// 0.8325581395348837
//every ten bpm intervaltime increases by .36 
//10/60 = 36/100
//beateperminuet .36
// };
//1.79 audio play every sec or 60 beats per minuet
//2.15 audio plays at 70 beats per sec
// 80 per minute
//  10 beats the audios speed need the 
//y = .36/10(70)-.37


