//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAjb5G5OFcMl1gyup_94my5o1m9fFz-blY",
      authDomain: "kwitter-b2b82.firebaseapp.com",
      databaseURL: "https://kwitter-b2b82-default-rtdb.firebaseio.com",
      projectId: "kwitter-b2b82",
      storageBucket: "kwitter-b2b82.appspot.com",
      messagingSenderId: "296898346002",
      appId: "1:296898346002:web:a0cc94aa8363f80bd86ccb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Hello " + user_name + "!";

    function addroom() 
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row ;
      

      //End code
      });});}
getData();
function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
