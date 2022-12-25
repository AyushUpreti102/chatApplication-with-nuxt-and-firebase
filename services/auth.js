import {auth} from '../plugins/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'

export async function loginUser(email, password) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
}

export async function registerUser(email, password) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
}

export async function logoutUser() {
    await signOut(auth);
}