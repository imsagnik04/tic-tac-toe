const Id = document.getElementById('Id');
const roomId = localStorage.getItem('RoomId');
const Rounds = document.getElementById('Rounds');
const stratGame = document.getElementById('stratGame');

appendRoomId(roomId);

Rounds.addEventListener('change',() => {
    stratGame.disabled = Rounds.options[0].selected;
});

startGame = (e) =>  {
    e.preventDefault();
    window.location.assign("/game.html");
};

exitLobby = (e) =>  {
    e.preventDefault();
    window.location.assign("/homepage.html");
};

function appendRoomId(message) {
    const roomIdElement = document.createElement('p:after');
    roomIdElement.innerText = message;
    roomIdElement.style.fontWeight = '700';
    Id.append(roomIdElement);
}
function roundSelect()  {
    var r = Rounds.options[Rounds.selectedIndex].text;
    localStorage.setItem('roundNos',r);
}
