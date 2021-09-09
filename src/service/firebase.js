import firebase from 'firebase';
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
	appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

//추가적인 함수
//export const firebaseInstance = firebase; // 소셜로그인
//export const authService = firebase.auth(); // 로그인 모듈
//export const dbService = firebase.firestore(); // NoSQL 데이터베이스
//export const storageService = firebase.storage(); // 이미지 저장 스토리지
