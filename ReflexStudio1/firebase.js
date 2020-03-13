import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAITLDmtIK2ZyEjwYfGZkKqYHab5CnVHXo',
  authDomain: 'podcast-68ac0.firebaseapp.com',
  databaseURL: 'https://podcast-68ac0.firebaseio.com',
  projectId: 'podcast-68ac0',
  storageBucket: 'podcast-68ac0.appspot.com',
  messagingSenderId: '354277042339',
  appId: '1:354277042339:web:fb61eba51d8dfa2fc57716',
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
