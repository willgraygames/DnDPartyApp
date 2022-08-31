import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { docData, Firestore } from '@angular/fire/firestore';
import { GoogleAuthProvider, signOut } from 'firebase/auth';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentData,
  setDoc,
} from 'firebase/firestore';
import { LoginData } from './interfaces/login-data';
import { Roles, User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection: CollectionReference<DocumentData>;

  constructor(private auth: Auth, private readonly firestore: Firestore) {
    this.userCollection = collection(this.firestore, 'users');
  }

  //Authentication
  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  //Roles
  checkUserExists(uid: string) {
    const userDocumentReference = doc(this.firestore, `users/${uid}`);
    return docData(userDocumentReference) != null;
  }

  createNewUser(user: User) {
    return addDoc(this.userCollection, user);
  }

  createNewUserFromCurrent(roles: Roles) {
    const newUser: User = {
      uid: this.auth.currentUser?.uid!,
      email: this.auth.currentUser?.email!,
      roles: roles,
    };
    return setDoc(doc(this.userCollection, newUser.uid), newUser);
  }

  getCurrentUserData() {
    const userDocumentReference = doc(
      this.firestore,
      `users/${this.auth.currentUser?.uid}`
    );
    return docData(userDocumentReference, { idField: 'uid' });
  }
}
