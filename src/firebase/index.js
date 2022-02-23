import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyApPqu8OoeSH7OjKX2cgwZATwC-0p9fS9U',
  authDomain: 'starthub-bbff2.firebaseapp.com',
  projectId: 'starthub-bbff2',
  storageBucket: 'starthub-bbff2.appspot.com',
  messagingSenderId: '43956154925',
  appId: '1:43956154925:web:d2a36d1f09072f1c4c7ea4',
  measurementId: 'G-BMJQ88WWGC',
}

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)
