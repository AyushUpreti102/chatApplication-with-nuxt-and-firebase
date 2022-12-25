import { db } from "../plugins/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function addUser(uid, userDetails) {
  await setDoc(doc(db, "users", uid), userDetails, { merge: true });
}
