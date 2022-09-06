import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  updateDoc,
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Character } from 'src/app/components';

@Injectable({
  providedIn: 'root',
})
export class DungeonFirestoreService {
  private characterCollection: CollectionReference<DocumentData>;
  private encounterCollection: CollectionReference<DocumentData>;
  private sessionCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.characterCollection = collection(this.firestore, 'characters');
    this.encounterCollection = collection(this.firestore, 'encounters');
  }

  getAll() {
    return collectionData(this.characterCollection, {
      idField: 'id',
    }) as Observable<Character[]>;
  }

  get(id: string) {
    const characterDocumentReference = doc(this.firestore, `characters/${id}`);
    return docData(characterDocumentReference, { idField: 'id' });
  }

  create(character: Character) {
    return addDoc(this.characterCollection, character);
  }

  update(character: Character) {
    const characterDocumentReference = doc(
      this.firestore,
      `characters/${character.id}`
    );
    return updateDoc(characterDocumentReference, { ...character });
  }

  delete(id: string) {
    const characterDocumentReference = doc(this.firestore, `characters/${id}`);
    return deleteDoc(characterDocumentReference);
  }
}
