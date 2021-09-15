var admin = require("firebase-admin");

var serviceAccount = require("../config/FIREBASE_CREDENTIAL.json");

const firebaseDB = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.fcm = async function (token, title, body){
    const registrationToken = token;

    const message = {
        name: '먼데이셀리',
        apns: {
            fcm_options: {
                image: 'https://firebasestorage.googleapis.com/v0/b/modaysally.appspot.com/o/test%2Fcompany-logo%2Flawofsally.PNG?alt=media&token=72ea95de-ee81-491d-9450-a312974aa546'
            }
        },
        notification: {
            title: title,
            body: body,
        },
        token: registrationToken
    };

    console.log(message);

// Send a message to the device corresponding to the provided
// registration token.
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            return response;
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            return error;
        });
}