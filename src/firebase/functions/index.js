const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin with your configuration options
admin.initializeApp({
  databaseURL:
    "https://klfx-lit-default-rtdb.europe-west1.firebasedatabase.app/",
});

// On sign up.
exports.processSignUp = functions.auth.user().onCreate(async (user) => {
  // Check if user meets role criteria.
  if (user.email) {
    const customClaims = {
      hasPremium: false,
      accessLevel: 6,
    };

    try {
      // Set custom user claims on this newly created user.
      await admin.auth().setCustomUserClaims(user.uid, customClaims);
      console.log("customClaims", customClaims);

      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref("metadata/" + user.uid);
      console.log("user - email:", user.email, "uid:", user.uid);

      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      await metadataRef.set({
        user: user.email,
        customClaims: customClaims,
        refreshTime: new Date().getTime(),
      });
    } catch (error) {
      console.log(error);
    }
  }
});
