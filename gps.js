     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9pe7xhl024nQ7Kd4TQoE3E3BTOH63MAA",
    authDomain: "tester-11ebf.firebaseapp.com",
    databaseURL: "https://tester-11ebf.firebaseio.com",
    projectId: "tester-11ebf",
    storageBucket: "tester-11ebf.appspot.com",
    messagingSenderId: "237766267944"
  };
  firebase.initializeApp(config);

        function insertAutoKey(location) {
            // A post entry.
            var postData = {
                location:location
            };

            // Get a key for a new Post.
            var newPostKey = firebase.database().ref().child('Location').push().key;
            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/Location/' + newPostKey] = postData;
            return firebase.database().ref().update(updates);
        }


        $('#send').on('click', function () {
            var useremail = $('#demo').text();

           document.getElementById("demo").value = "";
 
            insertAutoKey(useremail);
        });
