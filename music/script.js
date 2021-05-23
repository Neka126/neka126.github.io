//document.getElementById('id02').style.display='block';
//if(prompt("Beta Key")==="BTA-12930493827"||prompt("Beta Key")==="BTA-29403294053"){document.getElementById('id02').style.display='none'}
var neka = {};
neka.Music = {
  playlist:{
    skip:function(direction){},
    add:function(listNum){},
    remove:function(listNum){},
    list:[],
    
  },
  time:{
    sec:0,
    percent:"0%",
    min:0,
    sSec:0
  },
  current:{},
  open:function(songID){
    document.getElementById('id01').style.display='none';
    neka.Music.current = neka.Music.library[songID];
    document.getElementById("si").src=neka.Music.current.image;
    document.getElementById("myMusic").src=neka.Music.current.src;
    document.getElementById("sn").innerHTML=neka.Music.current.title;
    document.getElementById("myMusic").src=neka.Music.current.src;
    document.body.style.backgroundImage="url('"+neka.Music.current.src+"')";
    neka.Music.play();
    return neka.Music.library[songID];
  },
  update:function(){
    var myMusic=document.getElementById("myMusic");
    var sb=document.getElementsByClassName("sb");
    //neka.Music.time.percent=myMusic.currentTime/myMusic.duration+"%";
    sb[0].style.width=(myMusic.currentTime/myMusic.duration*100)+"%";
    sb[1].style.width=(myMusic.currentTime/myMusic.duration*100)+"%";
    sb[1].innerHTML=Math.round(myMusic.currentTime)+"/"+Math.round(myMusic.duration);
  },
  play:function(){myMusic.play();},
  pause:function(){myMusic.pause();},
  library:{
    "MU-JDOSKEJUSLA":
    { 
      image:"https://firebasestorage.googleapis.com/v0/b/dev-voice-226818.appspot.com/o/Posters%2FFrank.gif?alt=media&token=93d29f95-f987-4985-ae4a-bc5cca572f46",
      altImage:"http://www.sinatra.com/sites/g/files/aaj7201/f/styles/suzuki_breakpoints_image_mobile-lg_sq/public/release/201810/2efda9511595386ea809b5f5ef6c532111f9f34d.jpg?itok=rEUbK5iV",
      src:"https://firebasestorage.googleapis.com/v0/b/dev-voice-226818.appspot.com/o/Videos%2FFrank.mp3?alt=media&token=07cd5014-765d-42df-a692-ce760f711bc1",
      title:"That's Life",
      artist:"",
      producer:"",
      studio:"",
      productionDate:"",
      addDate:"",
    }
  }
};
setInterval(neka.Music.update,100)