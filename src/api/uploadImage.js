import {initializeApp} from 'firebase/app';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAAo01J_4J-wLLSfIrk5V5DbiKKeHU_DA8',
  authDomain: 'draft-ix.firebaseapp.com',
  projectId: 'draft-ix',
  storageBucket: 'draft-ix.appspot.com',
  messagingSenderId: '822940154427',
  appId: '1:822940154427:web:3544c9c06da41f4553fa1e',
  measurementId: 'G-GJF4WEJH1M',
};

initializeApp(firebaseConfig);
const storage = getStorage();

const imageStorageRef = ref(storage, 'images/');

const uploadImage = async (file) => {
  const storageRef = ref(imageStorageRef, file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
};

export default uploadImage;
