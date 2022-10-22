<!DOCTYPE html>
<html lang="en">
<title>Meta Bot</title>
<meta charset="UTF-8">
<link rel='icon' href='images/favicon.png' type='image/x-icon'/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<head>
<!-- Global site tag (gtag.js) - Google Adsense -->
<script data-ad-client="ca-pub-5856795489237966" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-151866676-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-151866676-1');
</script>
<style>

.g {
  color: grey;
}

.name {
  color: #ff9900;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
}

.title {
  color: green;
  font-weight: bold;
  text-align: left;
  font-size: 20px;
}

.text {
  font-weight: bold;
  text-align: left;
  font-size: 15px;
}


body {font-family: "Lato", sans-serif}

body {
  color: white;
  background-color: #0A0A0A;
  background-size: cover;
  background-attachment: fixed;
}


</style>
</head>
<body>

  <!-- Head -->

<div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-large" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="   fa fa-bars"></i></a>
    <a href="home" class="w3-bar-item w3-button w3-right w3-padding-large w3-hide-small w3-hide-medium">HOME</a>
    <img src="https://cdn.discordapp.com/avatars/819076548606558239/f2f91eded1ab73c40cc663dd7c4332ee.png" class="w3-bar-block w3-black w3-left" style="width:40px;margin-top:2px;margin-left:3px; margin-bottom:2px;">
  </div>
</div>

<!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
<div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-top" style="margin-top:46px">
  <a href="home" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">HOME</a>
</div>

  <!-- Info -->
<div id="div" class="w3-center">
  <h1 style="font-size:30px; font-weight: bold;" class=" w3-padding-64">Komutlar</h1>
  <div class="w3-col w3-container w3-hide-large s12 m12 l0">
    <a onclick="show('fun')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">FUN</a>
    <a onclick="show('music')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">MUSIC</a>
    <a onclick="show('settings')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">SETTINGS</a>
    <a onclick="show('economy')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">ECONOMY</a>
    <a onclick="show('moderation')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">MODERATION</a>
    <a onclick="show('information')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">INFORMATION</a>
    <a onclick="show('misc')" style="width: 100%; text-align: center;" class="w3-round w3-button w3-padding-large w3-blue">MISCELLANEOUS</a>
  </div>
  <div class="w3-col w3-container w3-hide-small w3-hide-medium s0 m0 l12">
    <a onclick="show('fun')" class="w3-round w3-button w3-padding-large w3-blue">FUN</a>
    <a onclick="show('music')" class="w3-round w3-button w3-padding-large w3-blue">MUSIC</a>
    <a onclick="show('settings')" class="w3-round w3-button w3-padding-large w3-blue">SETTINGS</a>
    <a onclick="show('economy')" class="w3-round w3-button w3-padding-large w3-blue">ECONOMY</a>
    <a onclick="show('moderation')" class="w3-round w3-button w3-padding-large w3-blue">MODERATION</a>
    <a onclick="show('information')" class="w3-round w3-button w3-padding-large w3-blue">INFORMATION</a>
    <a onclick="show('misc')" class="w3-round w3-button w3-padding-large w3-blue">MISCELLANEOUS</a>
  </div>
</div>

<div class="w3-col s12 m12 l2"><p></p></div>
<div id="show" class="w3-col s12 m12 l8">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">8ball</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Ask the magic 8ball a question.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-8ball {question}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">abuse</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Stop the abuse</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-abuse {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">hello</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Say hello to Abuse.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-hello or -hey</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">hug</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Send a hug to a friend.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-hug {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">L</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Hand someone a fat L with this command.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-l {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">meme</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Get some quality meme content.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-meme or -m</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">poke</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Send a poke to a friend.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-poke {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">puppy</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Put a smile on your face with cute puppies.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-puppy</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">role</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Roll a dice.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-roll or -dice</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">russianroulette</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Will you die or live pull the trigger and find out.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-russianroulette or -rr</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">sausage</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows the size of your sausage.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-sausage {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">say</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Abuse will repeat after you.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-say {text} or -echo {text}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">ship</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">See how much two people love each other!</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-ship {user} {user} or -love {user} {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

</div>
<div class="w3-col s12 m12 l2"><p></p></div>



<div id="fun" class="w3-col s12 m12 l8" style="display: none">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">8ball</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Ask the magic 8ball a question.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-8ball {question}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">abuse</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Stop the abuse</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-abuse {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">hello</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Say hello to Abuse.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-hello or -hey</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">hug</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Send a hug to a friend.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-hug {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">L</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Hand someone a fat L with this command.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-l {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">meme</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Get some quality meme content.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-meme or -m</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">poke</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Send a poke to a friend.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-poke {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">puppy</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Put a smile on your face with cute puppies.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-puppy</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">role</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Roll a dice.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-roll or -dice</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">russianroulette</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Will you die or live pull the trigger and find out.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-russianroulette or -rr</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">sausage</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows the size of your sausage.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-sausage {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">say</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Abuse will repeat after you.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-say {text} or -echo {text}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">ship</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">See how much two people love each other!</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-ship {user} {user} or -love {user} {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>
</div>



<div id="music" class="w3-col s12 m12 l8" style="display: none">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Loop</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Toggles loop of queue.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-loop or -repeat</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Nowplaying</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Displays what is playing now.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-nowplaying or -np</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Pause</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Pause the music that is currently playing.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-pause</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Play</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Plays music of your liking.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-play {playlist/song/url} or -p {playlist/song/url}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">playlist</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">This is a personal playlist on Abuse.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-playlist {add/remove/list/play} or -pl {add/remove/list/play}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Queue</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Displays the queue of music.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-queue {page} or -q {page}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Remove</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Removes song from queue.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-remove {number} or -r {number}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Resume</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Resumes the current music.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-resume</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Search</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Plays music of your liking with selection.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-search {playlist/song/url} or -s {playlist/song/url}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Shuffle</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shuffles the queue.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-shuffle or -mix</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Skip</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Skips to the next song in the queue.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-skip</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Stop</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Stops all music playing and clears the queue.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-stop</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Trending</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows most liked videos.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-trending or -popular</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Volume</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Changes the volume of the music playing.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-volume {number} or -vol {number}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>
</div>



<div id="settings" class="w3-col s12 m12 l8" style="display: none">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">config</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Set config of a guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-config {property} {enable/disable/info} or -configurate {property} {enable/disable/info}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">prefix</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Sets the prefix for the guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-prefix {text} or -setprefix {text}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">setbio</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Set the bio on your profile.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-setbio {text} or -bio {text}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">setcustomembedcolor</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Set's the embed hex color code for a user.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-setcustomembedcolor {hex code} or -scec {hex code}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">setembedcolor</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Set's the embed hex color code for a user.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-setembedcolor or -sec</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>
</div>



<div id="economy" class="w3-col s12 m12 l8" style="display: none">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Balance</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows current balance of money left.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-balance {user} or -bank {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Baltop</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show the global balance of the top 10 users with the most Abuse Coins.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-baltop or -balancetop</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Buy</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Buys items in Abuse economy.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-buy {item} or -purchase {item}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Gamble</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Gamble your Abuse Coins away and maybe strick it rich!</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-gamble {amount} or -g {amount}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Leaderboard</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show the global ranking of tiers.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-leaderboard or -lb</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Levelup</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Gain xp for weekly leaderboard.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-levelup {number}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Pay</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Pays another user from your balance.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-pay {user} {amount} or -give {user} {amount}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Tiers</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">See tier information.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-tiers {user} or -tier {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>
</div>



<div id="moderation" class="w3-col s12 m12 l8" style="display: none;">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Ban</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Ban a user from your guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-ban {user} {reason}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Case</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Check a case number from your guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-case {number}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Kick</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Kick a user from your guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-kick {user} {reason}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Mute</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Mutes a user.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-mute {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Purge</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Deletes the number of messages you put.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-purge {number} or -prune {number}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Unmute</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Unmutes a user.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-unmute {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Vckick</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Kicks someone out of a voice channel.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-vckick {tag} or -voicechannelkick {tag}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">Warn</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Warn a user from your guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-warn {user} {reason}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

</div>



<div id="information" class="w3-col s12 m12 l8" style="display: none;">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">avatar</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Display's avatar of the user.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-avatar {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">botinfo</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows some general bot information.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-botinfo or -info</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">guildpremium</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Check time remaining on guild premium subscription.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-guildpremium</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">help</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows how to use each command.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-help {command} or -command {command}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">invite</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Invitation to the bot and the official discord.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-invite or -i</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">minecraft</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows server info.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-minecraft {ip} or -mc {ip}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">permission</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows all of Abuse's Permissions.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-permission</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">ping</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Get an estimate on the latency on the bot and discord api.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-ping or -pong</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">premium</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Check time remaining on premium subscription.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-premium</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">profile</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Displays user's profile information.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-profile {user} or -account {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">roblox</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Get data on a roblox account.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-roblox {roblox account}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">roles</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show the roles of the current guild.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-roles</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">stats</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Shows stats of Abuse Bot.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-stats</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">uptime</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show how long the bot has been online since the last restart.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-uptime</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">userinfo</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Displays information on a user.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-userinfo {user} or -ui {user}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

</div>



<div id="misc" class="w3-col s12 m12 l8" style="display: none;">

  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">NAME</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">DESCRIPTION</p></div>
  <div class="w3-col w3-hide-small w3-container s0 m4 l4"><p class="title">USAGE</p></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">botleaderboard</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show the global ranking of bot's upvotes.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-botleaderboard or -blb</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">bump</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Upvote a guild by typing this command in a guild that you like.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-bump or -upvote</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">calculator</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Works as a scientific calculator.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-calculator {problem} or -math {problem}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">google</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Ask google something.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-google {search}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">guildleaderboard</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show the global ranking of guild's upvotes.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-guildleaderboard or -glb</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">suggestion</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Give us feedback about the bot.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-suggestion {text} or -report {text}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">translate</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Translates any language to any other language.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-translate {start language} {end language} {text to translate}</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">vote</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Vote for Abuse bot and get rewards!</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-vote or -voting</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

  <div class="w3-col w3-container s12 m4 l3"><p class="name">weeklyleaderboard</p></div>
  <div class="w3-col w3-container s12 m4 l5"><p class="text">Show the global ranking of weekly xp.</p></div>
  <div class="w3-col w3-container s12 m4 l4"><p class="text g">-weeklyleaderboard or -wlb</p></div>

  <div class="w3-col s12 m12 l12"><hr style="border-color: grey"></div>

</div>



  <!-- Footer -->

<footer class="w3-container w3-padding-32 w3-center w3-xlarge">
</footer>
  <!-- Random stuff -->

<script>
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

  function show(param_div_id) {
    document.getElementById('show').innerHTML = document.getElementById(param_div_id).innerHTML;
  }
</script>
</body>
</html>
