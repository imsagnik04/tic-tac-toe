const RoomId = document.getElementById('RoomId');
const EnterRoomBtn = document.getElementById('EnterRoomBtn');
const createRoom = document.getElementById('createRoom');

RoomId.addEventListener('keyup',() => {
    EnterRoomBtn.disabled = !RoomId.value;
});

enterRoom = (e) =>  {
    e.preventDefault();
    localStorage.setItem('RoomId',RoomId.value);
    window.location.assign("/lobby.html");
};

function createroom(e){
    e.preventDefault();
    window.location.assign('/lobby.html');
}

logout = (e) => {
    e.preventDefault();
    window.location.assign("/login.html");
}

// function makeid(length) {
//     var roomId           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//        roomId += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return roomId;
//  }