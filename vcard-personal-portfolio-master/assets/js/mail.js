const firebaseConfig = {
    apiKey: "AIzaSyC_HzGjBI9L5Xu6tp9Qew7bjqX6iP5hV4E",
    authDomain: "krishna-e5215.firebaseapp.com",
    databaseURL: "https://krishna-e5215-default-rtdb.firebaseio.com",
    projectId: "krishna-e5215",
    storageBucket: "krishna-e5215.appspot.com",
    messagingSenderId: "878565469727",
    appId: "1:878565469727:web:d220a43dc6bf0313196f2a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email');
    var msgcontent = getElementVal('message');

    saveMessages(name, email, msgcontent);
}

const saveMessages = (name, email, msgcontent) => {
    var newcontactform = contactFormDB.push();

    newcontactform.set({
        name: name,
        emailId: email,
        msgcontent: msgcontent,
    }).then(() => {
        // Show alert after successful save
        alert('Message sent successfully!');
        // Optionally, you can reset the form here
        document.getElementById('contactForm').reset();
    }).catch((error) => {
        // Handle any errors
        alert('Error: ' + error.message);
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
