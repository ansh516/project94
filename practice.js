//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBDnIcsmCwCDAPGyK2JlLW2UpjGUYllSQo",
  authDomain: "project-94-56cf8.firebaseapp.com",
  projectId: "project-94-56cf8",
  storageBucket: "project-94-56cf8.appspot.com",
  messagingSenderId: "726056078901",
  appId: "1:726056078901:web:08d8b770b18f1229f2eb7c",
  measurementId: "G-6M8LKD1XY0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"adding user",
    });
}