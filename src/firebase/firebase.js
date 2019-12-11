import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export { firebase, facebookAuthProvider, googleAuthProvider, twitterAuthProvider, database as default };
// // child_removed
// database.ref('expenses').on('child_remove', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     }); 

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
    

// database.ref('expenses').push({
//     description: 'xbox',
//     note: 'game system',
//     amount: 600,
//     createdAt: 105
// });

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React'
// });

// database.ref('notes/-LusDxEzIVLMoVtmxfUf').update({
//     body: 'Go workout'
// });

// database.ref().on('value', (snapshot) => {
//     const name = snapshot.val().name;
//     const title = snapshot.val().Occupation.title;
//     const company = snapshot.val().Occupation.company;
//     console.log(`${name} is a ${title} at ${company}`);
// });
// setTimeout(() => {
//     database.ref().update({
//         name: 'Luxman',
//         Occupation: {
//             company: 'Ryerson',
//             title: 'Accountant'
//         }
//     });
// }, 10000)


// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('error', e);
// });



// database.ref().set({
//     name: 'Leo',
//     age: 20,
//     stressLevel: 7,
//     Occupation: {
//         title: 'Student',
//         company: 'Waterloo'
//     },
//     location: {
//         city: 'Stouffville',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((error) => {
//     console.log('this failed', error);
// });


// database.ref().update({
//     stressLevel: 10,
//     'occupation/company': 'Guelph',
//     'location/city': 'Kitchener'
// });