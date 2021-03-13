// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCVYHXvFQ2kqUb2NjkSp-DVo4XL8gOOXY",
    authDomain: "demofirebasetest-1528e.firebaseapp.com",
    projectId: "demofirebasetest-1528e",
    storageBucket: "demofirebasetest-1528e.appspot.com",
    messagingSenderId: "996180321564",
    appId: "1:996180321564:web:c6dc8c77a19e24f47646d9",
    measurementId: "G-5MYJNFNQVC"
  };

  firebase.initializeApp(firebaseConfig); 
  const db = firebase.firestore();

let userList = document.querySelector('#userList');

function readerUser(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id',doc.id);
    name.textContent= doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    userList.appendChild(li);
}


db.collection('users').get().then( user =>{
        //console.log(user);
user.docs.forEach(doc=>{
    console.log(doc.data())
    readerUser(doc);
}) 
    });