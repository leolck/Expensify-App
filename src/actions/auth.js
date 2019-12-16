import { firebase, facebookAuthProvider, githubAuthProvider, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid: uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLoginFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const startLoginGithub = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
    };
};

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginTwitter = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};