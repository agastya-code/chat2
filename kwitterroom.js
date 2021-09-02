var firebaseConfig = {
apiKey: "AIzaSyB7CE6rcYtyD512b35ks4bjqNQOkeqad60",
authDomain: "chat-2896b.firebaseapp.com",
databaseURL: "https://chat-2896b-default-rtdb.firebaseio.com",
projectId: "chat-2896b",
storageBucket: "chat-2896b.appspot.com",
messagingSenderId: "663241691124",
appId: "1:663241691124:web:1346628cce2fa6c57033a1",
measurementId: "G-Y8SLZMJSVZ"
};
  
firebase.initializeApp(firebaseConfig);




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
  });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}