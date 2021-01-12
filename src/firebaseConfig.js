import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBP0WabCTGZc1l4i9XjmLhgquJTv_V2KuE",
    authDomain: "cse-dept-40a0d.firebaseapp.com",
    projectId: "cse-dept-40a0d",
    storageBucket: "cse-dept-40a0d.appspot.com",
    messagingSenderId: "1054739703471",
    appId: "1:1054739703471:web:35a46b74a38866c1ab165a"
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyBMrDxvZ6cTGPGMVMc3u9N0mk1V9LQ81Mk",
//     authDomain: "cse-dept-65574.firebaseapp.com",
//     projectId: "cse-dept-65574",
//     storageBucket: "cse-dept-65574.appspot.com",
//     messagingSenderId: "1025684615878",
//     appId: "1:1025684615878:web:d393574e6de0f921baddc7"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebaseConfig;