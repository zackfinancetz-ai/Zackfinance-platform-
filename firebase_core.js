<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-storage.js"></script>
<script>
const firebaseConfig = {
  apiKey: "AIzaSyD7GJAwoB_mXTHeXpSP5n3OrUCe8v_3YlI",
  authDomain: "zackfinance-hub.firebaseapp.com",
  projectId: "zackfinance-hub",
  storageBucket: "zackfinance-hub.firebasestorage.app",
  messagingSenderId: "855025662852",
  appId: "1:855025662852:web:a1951b145ba167eeecbbd1",
  measurementId: "G-EXGXL15PYV"
};
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// helper: get current user profile from users collection
async function currentUserProfile(){
  const u = auth.currentUser;
  if(!u) return null;
  const doc = await db.collection('users').doc(u.uid).get();
  return doc.exists ? doc.data() : null;
}
</script>
