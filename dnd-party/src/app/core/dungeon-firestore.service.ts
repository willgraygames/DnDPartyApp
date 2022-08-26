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
import { Member } from '../components';

@Injectable({
  providedIn: 'root',
})
export class DungeonFirestoreService {
  private memberCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.memberCollection = collection(this.firestore, 'members');
  }

  getAll() {
    return collectionData(this.memberCollection, {
      idField: 'id',
    }) as Observable<Member[]>;
  }

  get(id: string) {
    const memberDocumentReference = doc(this.firestore, `members/${id}`);
    return docData(memberDocumentReference, { idField: 'id' });
  }

  create(member: Member) {
    return addDoc(this.memberCollection, member);
  }

  update(member: Member) {
    const memberDocumentReference = doc(this.firestore, `members/${member.id}`);
    return updateDoc(memberDocumentReference, { ...member });
  }

  delete(id: string) {
    const memberDocumentReference = doc(this.firestore, `members/${id}`);
    return deleteDoc(memberDocumentReference);
  }
}
