

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

$(document).on('change', '#myRange', function() {
  $('#output11').html( $(this).val() );
  var spotifyVolume = $(this).val();
  console.log("S volume:" + spotifyVolume);
  // var myUrl = "https://api.spotify.com/v1/me/player/volume?volume_percent="+ spotifyVolume +"";
  //  $.ajax({
  //   headers: {
  //     "Authorization": "Bearer" + btoa("BQDJwB3lWOco2R-cr49-g1jhww-m0bZG0jYkQ5-5bSlf35vptqfcE4heQfx0J9nDryDdPEU0bwzh6P93qLBeJg70jJrEu_XPUXY6x9AHKldDf-j05ZtpELXlz8qyhIHrzaE6GU07yxJaRT7m2zt1S5Lu5mIHqiDR")
  //   },
  //   url: myUrl,
  //   method: "PUT"
  // });
});
 
$(document).on('change', '#myRange2', function() {
  var heartBeatVolume = ($(this).val()/100);
  $('#output12').html(heartBeatVolume);
  console.log("HB volume: " + heartBeatVolume); 
});