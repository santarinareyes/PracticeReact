import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCK8CJdklp1DjwVd2ZWW0k8he9dq_udsvg',
  authDomain: 'medieinstitutet-auth.firebaseapp.com',
  projectId: 'medieinstitutet-auth',
  storageBucket: 'medieinstitutet-auth.appspot.com',
  messagingSenderId: '594946870353',
  appId: '1:594946870353:web:8cc7b219eac6189da5bc70',
}

export const createContactsDoc = async details => {
  const { name, email, message } = details

  const contactsRef = firestore.collection(`contacts`).doc()
  try {
    await contactsRef.set({ name, email, message })
  } catch (err) {
    console.log('err', err)
  }
}

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        isAdmin: false,
        ...data,
      })
    } catch (err) {
      console.log('User creation error', err.message)
    }
  }

  return userRef
}

export const getUserCartRef = async userId => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId)
  const snapShot = await cartsRef.get()

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc()
    await cartDocRef.set({ userId, cartItems: [] })
    return cartDocRef
  } else {
    return snapShot.docs[0].ref
  }
}

export const getCollectionRef = async collectionTitle => {
  const collectionRef = firestore
    .collection('collections')
    .where('title', '==', collectionTitle)
  const snapShot = await collectionRef.get()

  if (snapShot.empty) {
    const collectionDocRef = firestore.collection('collections').doc()
    await collectionDocRef.set({ title: collectionTitle, items: [] })
    return collectionDocRef
  } else {
    return snapShot.docs[0].ref
  }
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
