/* Firebase for auth */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyC3k43EsDp4ZmHrVXe51I6fdv3oDkuDvOY",
	authDomain: "accounta-buddy-app-vue.firebaseapp.com",
	projectId: "accounta-buddy-app-vue",
	storageBucket: "accounta-buddy-app-vue.appspot.com",
	messagingSenderId: "922982835572",
	appId: "1:922982835572:web:e7f19231dc5519133cb821",
	measurementId: "G-CF20KQ25BY"
};
//initialize the firebase app
initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

//export the auth object
export { auth }
