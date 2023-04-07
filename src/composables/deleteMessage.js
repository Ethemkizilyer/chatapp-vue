import { db } from "@/firebase/config";
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import getUser from "./getUser";

const deleteMessage = async (messageId) => {
    const { user } = getUser();
console.log(user?._rawValue.email);
  const db = firebase.firestore();
  const messageRef = db.collection("messages").doc(messageId);
  const messageDoc = await messageRef.get();
  const userId = firebase.auth().currentUser.uid;
  if (messageDoc.exists) {
    await messageRef.delete();
    console.log("Message successfully deleted!");
  } else {
    console.log("Message does not exist!");
  }
};

export default deleteMessage;
