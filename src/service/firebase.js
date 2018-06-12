import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "yourKey",
  authDomain: "yourDomain",
  databaseURL: "yourUrl",
  projectId: "yourId",
  storageBucket: "yourBucket",
  messagingSenderId: "yourSenderId"
};
firebase.initializeApp(config);
export default {
 database: firebase.database()
}

