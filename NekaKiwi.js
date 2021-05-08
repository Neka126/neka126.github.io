var chatRef = firebase.database().ref("chat");
var chat = new Firechat(chatRef);
var user = firebase.auth().currentUser;
neka.color = "#33cc33";
neka.Kiwi={
  message:{
    send:function(room, message){if(!message.includes("<script")&&!message.includes("onclick=")){
      message = message.replace('fuck', 'f***');
      message = message.replace('shit', 's***');
      message = message.replace('dick', 'd***');
      message = message.replace('suck', 's**k');
      chat.sendMessage(room, message, "default")}else{alert("NO SCRIPTS!")}
    }
  },
  room:{
    onenter:function(){},
    onexit:function(){},
    info:function(room,callback){chat.getRoom(room, callback)},
    enter:function(room){chat.enterRoom(room)},
    leave:function(room){chat.leaveRoom(room)},
    users:function(room,limit,callback){chat.getUsersByRoom(room, limit, callback)},
    list:function(callback){chat.getRoomList(callback)}
  },
  user:{
    list:function(prefix,limit,callback){chat.getUsersByPrefix(prefix, null, null, limit, callback)},
    set:function(userId,userName){chat.setUser(userId,userName);},
    invite:{
      onInvite:function(room,IID,text){
        var con = confirm(text+"\n Invite ID:"+IID+"\n Room ID:"+room);
        neka.Kiwi.invite.accept(room,IID);
        if(con){addServer(room)}
      },
      send:function(room,user){chat.inviteUser(user, room)},
      accept:function(room,invite,callback){chat.acceptInvite(invite, callback)},
      decline:function(room,invite,callback){chat.declineInvite(invite, callback)}
    }
  }
};
chat.on("room-invite", neka.Kiwi.user.onInvite)