ZackFinance v5 - Admin Powers & Approval Workflow

What's new in v5:
- Projects are uploaded with status='pending' and require admin approval.
- Admin can Approve / Reject / Delete projects.
- Admin can Delete user data from Firestore and associated project images.
  - Note: Deleting the Auth user (from Firebase Authentication) requires Firebase Admin SDK or manual deletion via Firebase Console.
- Firestore rules included as a starting point for production hardening.

How to use:
1. Deploy files to GitHub Pages (upload all files to your repo root).
2. Enable Authentication (Email/Password), Firestore and Storage in Firebase Console.
3. Create an admin user via sign-up, then copy their UID (Firebase Console > Authentication > Users).
4. In Firestore, create a collection 'admins' and a document with the admin UID as the document ID.
5. Now admin can login and access Admin Dashboard to approve projects and manage users.

Security note:
- Review the provided firestore.rules and adjust carefully; test in staging before production.
- To fully delete an Auth user, sign in to Firebase Console > Authentication > select the user > Delete.
