// import { auth } from "../firebase";
const auth = require('../../node_modules/firebase/auth');

class User {
    signIn(email, password) {
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
    }
}

module.export = User;